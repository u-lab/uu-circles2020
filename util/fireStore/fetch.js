export async function fetchFromFireStore(fireStore, collectionName) {
  // firestoreからDataの回収
  const collection = fireStore.collection(collectionName)
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

export async function fetchAuthorsImageAll(circles, storageRef) {
  const promise = []

  // promiseのためのimageデータの作成
  for (const circle of circles) {
    if (!checkCompleteImage(circle)) {
      try {
        promise.push(
          storageRef.child(`circles/${circle.image}`).getDownloadURL()
        )
      } catch (e) {}
    }
  }

  // 画像のURLをまとめて取得
  const urls = await Promise.all(promise)

  for (let i = 0; i < circles.length; i++) {
    circles[i].image = !checkCompleteImage(circles[i])
      ? urls[i]
      : '/no-image.jpg'
  }

  return circles
}

export async function fetchInterviewsImageAll(interviews, storageRef) {
  const promise = []

  // promiseのためのimageデータの作成
  for (const interview of interviews) {
    if (!checkCompleteImage(interview)) {
      try {
        promise.push(
          storageRef.child(`circles/${interview.image}`).getDownloadURL()
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

export async function fetchInterviewsContentImageAll(
  interviews,
  storageRef,
  id
) {
  const promise = []

  let interview
  for (const _interview of interviews) {
    if (_interview.id === id) {
      interview = _interview
      return
    }
  }

  // promiseのためのimageデータの作成
  for (const content of interview.contents) {
    if (!checkCompleteImage(content)) {
      try {
        promise.push(
          storageRef.child(`circles/${content.image}`).getDownloadURL()
        )
      } catch (e) {}
    }
  }

  // 画像のURLをまとめて取得
  const urls = await Promise.all(promise)

  for (let i = 0; i < interview.contents.length; i++) {
    interview.contents[i].image = !checkCompleteImage(interview.contents[i])
      ? urls[i]
      : '/no-image.jpg'
  }

  return interview.contents
}

// 完成形のURLか
function checkCompleteImage(circle) {
  return circle.image && circle.image.match('https:')
}
