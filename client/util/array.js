import { randInt } from '@/util/number'

/**
 * 強制的に配列型にする
 *
 * @template T
 * @param {T} v
 * @return {T|Array<T>}
 */
export const convertToArr = (v) => {
  if (!v) {
    return []
  }

  if (isArray(v)) {
    return v
  }

  return [v]
}

/**
 * 一つ前の配列を取得
 *
 * @template T
 * @param {Array<T>} arr 配列
 * @param {Number} idx 配列番号
 */
export const getArrBefore = (arr, idx) => arr[idx - 1] || null

/**
 * 一つ後の配列を取得
 *
 * @template T
 * @param {Array<T>} arr
 * @param {Number} idx 配列番号
 */
export const getArrAfter = (arr, idx) => arr[idx + 1] || null

/**
 * ランダムに配列を取得
 *
 * @template T
 * @param {Array<T>} arr
 * @param {Number} times
 */
export const getRandArr = (arr, times = 1) => {
  /**
   * @type Number[]
   */
  const randNumbers = [] // 抽選された数の配列
  const length = arr.length

  // 無限ループしないように除外
  if (times > length) {
    return []
  }

  while (times--) {
    let rand = randInt(length)

    // uniqueにする
    while (randNumbers.includes(rand)) {
      rand = randInt(length)
    }
    randNumbers.push(rand)
  }

  return randNumbers.map((num) => arr[num])
}

/**
 * 配列型であるか
 *
 * @param {*} v
 */
export const isArray = (v) => Array.isArray(v)

/**
 * 配列のシャッフル関数
 *
 * @template T
 * @param {Array<T>} arr
 */
export const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    swapArr(arr, i, randInt(i))
  }
  return arr
}

/**
 * 配列の入れ替え
 *
 * @template T
 * @param {Array<T>} arr
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Array<T>}
 */
export const swapArr = (arr, num1, num2) => {
  arr[num1] = [arr[num2], (arr[num2] = arr[num1])][0]
  return arr
}
