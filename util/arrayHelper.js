import { randNum } from '@/util/numberHelper'

/**
 * 一つ前の配列を取得
 *
 * @param {Array} arr 配列
 * @param {Number} idx 配列番号
 */
export function getArrBefore(arr, idx) {
  return arr[idx - 1] || null
}

/**
 * 一つ後の配列を取得
 *
 * @param {Array} arr
 * @param {Number} idx 配列番号
 */
export function getArrAfter(arr, idx) {
  return arr[idx + 1] || null
}

/**
 * ランダムに配列を取得
 *
 * @param {Array} arr
 * @param {Number} times
 */
export function getRandArr(arr, times = 1) {
  const randNumbers = new Array(times) // 抽選された数の配列
  const retArr = new Array(times) // 返却値
  const length = arr.length

  // 無限ループしないように除外
  if (times > length) {
    return []
  }

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

/**
 * 配列のシャッフル関数
 *
 * @param {Array} arr
 */
export function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    swapArr(arr, i, randNum(i))
  }
  return arr
}

/**
 * 配列の入れ替え
 *
 * @param {Array} arr
 * @param {Number} num1
 * @param {Number} num2
 */
export function swapArr(arr, num1, num2) {
  arr[num1] = [arr[num2], (arr[num2] = arr[num1])][0]
  return arr
}
