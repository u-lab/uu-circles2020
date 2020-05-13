const fs = require('fs')
const firebase = require('firebase')
require('firebase/firestore')
require('firebase/storage')
require('dotenv').config()
global.XMLHttpRequest = require('xhr2')

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}
const firebaseApp = firebase.initializeApp(config)
const firestore = firebaseApp.firestore()
const storageRef = firebaseApp.storage().ref()

const create = async () => {
  try {
    let datas = await getData()
    datas = await fetchInterviewsImageAll(datas)
    datas = await fetchImageAll(datas)

    return fs.writeFileSync(
      './assets/json/interviews.json',
      JSON.stringify(datas, null, ''),
      (err) => {
        if (err) {
          console.error(err)
        }
      }
    )
  } catch (e) {
    console.error(e)
  }
}

const getData = async () => {
  // firestoreからDataの回収
  const collection = firestore.collection('interviews')
  const docs = await collection.get()

  // 戻り値の生成
  const datas = []
  for (const doc of docs.docs) {
    const data = doc.data()
    data.id = doc.id
    datas.push(data)
  }

  return datas
}

const fetchInterviewsImageAll = async (interviews) => {
  const promise = []

  // promiseのためのimageデータの作成
  for (const interview of interviews) {
    if (!checkCompleteImage(interview)) {
      try {
        promise.push(
          storageRef.child(`/interviews/${interview.image}`).getDownloadURL()
        )
      } catch (e) {}
    }
  }

  // 画像のURLをまとめて取得
  const urls = await Promise.all(promise)

  for (let i = 0; i < interviews.length; i++) {
    interviews[i].image = !checkCompleteImage(interviews[i])
      ? urls[i]
      : '/no-image.jpg'
  }

  return interviews
}

const fetchImageAll = async (interviews) => {
  const promise = []

  for (let idx = 0; idx < interviews.length; idx++) {
    const interview = interviews[idx]

    // promiseのためのimageデータの作成
    for (const content of interview.contents) {
      if (content.image) {
        if (!checkCompleteImage(content)) {
          try {
            promise.push(
              storageRef.child(`interviews/${content.image}`).getDownloadURL()
            )
          } catch (e) {}
        }
      }
    }

    // 画像のURLをまとめて取得
    const urls = await Promise.all(promise)
    for (let i = 0, u = 0; i < interview.contents.length; i++) {
      if (interview.contents[i].image) {
        interview.contents[i].image = !checkCompleteImage(interview.contents[i])
          ? urls[u]
          : '/no-image.jpg'
        u++
      }
    }

    interviews[idx] = interview
  }

  return interviews
}

// 完成形のURLか
const checkCompleteImage = (circle) => {
  return circle.image && circle.image.match('https:')
}

const main = async () => {
  await create()
  console.log('ok')
  process.exit()
}

main()
