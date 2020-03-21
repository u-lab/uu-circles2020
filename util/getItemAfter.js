/**
 * 一つ後の配列を取得
 *
 * @param {Array} arr
 * @param {Number} count
 */
export function getItemAfter(arr, count) {
  let item
  if (arr[count + 1]) {
    item = arr[count + 1]
  }

  return item
}
