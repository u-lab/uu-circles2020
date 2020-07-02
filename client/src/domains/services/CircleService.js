import { swapArr } from '@/util/array'

/**
 * @typedef {import('@/type/Circle').default} Circle
 */

/**
 * 指定のcircleを特定の場所に固定する
 *
 * @param {Circle[]} circles circleリスト
 * @param {String} circleId サークルID
 * @param {Number} fixNum 配列の番号
 */
export const fixedCircleById = (circles, circleId, fixNum = 0) => {
  const idx = circles.findIndex((obj) => obj.id === circleId)
  return idx !== -1 ? swapArr(circles, fixNum, idx) : circles
}
