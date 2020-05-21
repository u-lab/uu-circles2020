import { swapArr } from '@/util/array'

/**
 * 指定のcircleを特定の場所に固定する
 *
 * @param {Object[]} circles circleリスト
 * @param {String} circleId サークルID
 * @param {Number} fixNum 配列の番号
 */
export const fixedCircleById = (circles, circleId, fixNum = 0) => {
  const idx = circles.findIndex((obj) => obj.id === circleId)
  return circle !== -1 ? swapArr(circles, fixNum, idx) : circle
}
