export function getRandomArr(arr, times) {
  const randNumbers = new Array(times)
  const retArr = new Array(times)
  const length = arr.length

  for (let time = 0; time < times; time++) {
    let rand = randNum(length)

    // uniqueにする
    while (randNumbers.includes(rand)) {
      rand = randNum(length)
    }
    randNumbers[time] = rand
    retArr[time] = arr[rand]
  }

  return retArr
}

function randNum(length) {
  return Math.floor(Math.random() * length)
}
