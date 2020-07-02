/**
 * ランダム関数(整数で返却)
 * 0 <= randInt <= lenを返す
 *
 * @param {Number} len
 */
export const randInt = (len) =>
  len > 0 ? Math.floor(Math.random() * len) + 1 : 0
