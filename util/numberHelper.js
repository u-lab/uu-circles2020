/**
 * ランダム関数(整数で返却)
 * 0 <= randNum <= lenを返す
 *
 * @param {Number} len
 */
export function randNum(len) {
  return len > 0 ? Math.floor(Math.random() * len) + 1 : 0
}
