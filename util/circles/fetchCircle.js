export async function fetchCirclesByFireStore(fireStore) {
  // firestoreからDataの回収
  const collection = fireStore.collection('circles')
  const docs = await collection.get()

  // 戻り値の生成
  const circles = []
  for (const doc of docs.docs) {
    const circle = doc.data()
    circle.id = doc.id
    circles.push(circle)
  }

  return circles
}

export async function fetchCircleImageAll(circles, storageRef) {
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

export async function fetchCircleImageById(circles, circleId, storageRef) {
  let circle
  let circleIdx = 0
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].id === circleId) {
      circle = circles[i]
      circleIdx = i
      break
    }
  }

  const promise = []

  // サブイメージ
  if (circle.subImage) {
    if (!circle.subImage[0].match('https:')) {
      for (const subImage of circle.subImage) {
        try {
          promise.push(storageRef.child(`circles/${subImage}`).getDownloadURL())
        } catch (e) {}
      }
    }
  }

  // 画像のURLをまとめて取得
  const urls = await Promise.all(promise)

  for (let idx = 0; idx < urls.length; idx++, idx++) {
    circle.subImage[idx] = urls[idx]
  }

  circles[circleIdx] = circle
  return circles
}

// 完成形のURLか
function checkCompleteImage(circle) {
  return circle.image && circle.image.match('https:')
}

// 完成形のURLか
// function checkCompleteSubImage(circle) {
//   return circle.subImage && circle.subImage[0].match('https:')
// }
