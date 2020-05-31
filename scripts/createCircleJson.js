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
    datas = await fetchCircleImageAll(datas)
    datas = await subimage(datas)

    return fs.writeFileSync(
      './assets/json/circles.json',
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
  const collection = firestore.collection('circles')
  const { docs } = await collection.get()

  // 戻り値の生成
  return docs.map((doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
  })
}

const fetchCircleImageAll = async (circles) => {
  // promiseのためのimageデータの作成
  const promise = circles.reduce((arr, circle) => {
    if (!checkCompleteImage(circle)) {
      arr.push(storageRef.child(`circles/${circle.image}`).getDownloadURL())
    }
    return arr
  }, [])

  // 画像のURLをまとめて取得
  const urls = await Promise.all(promise)
  return circles.map((circle, i) => {
    circle.image = !checkCompleteImage(circle) ? urls[i] : '/no-image.jpg'
    return circle
  })
}

const subimage = async (circles) => {
  for (let circleIdx = 0; circleIdx < circles.length; circleIdx++) {
    const circle = circles[circleIdx]

    // サブイメージ
    if (circle.subImage) {
      const promise = []

      if (!circle.subImage[0].match('https:')) {
        for (const subImage of circle.subImage) {
          try {
            promise.push(
              storageRef.child(`circles/${subImage}`).getDownloadURL()
            )
          } catch (e) {}
        }
      }

      // 画像のURLをまとめて取得
      const urls = await Promise.all(promise)

      for (let idx = 0; idx < urls.length; idx++, idx++) {
        circle.subImage[idx] = urls[idx]
      }

      circles[circleIdx] = circle
    }
  }
  return circles
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
