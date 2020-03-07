// 一つ後の配列を取得、さらにidも注入
export function getItemAfter(arr, count) {
  let item
  if (arr[count + 1]) {
    const _doc = arr[count + 1]
    item = _doc.data()
    item.id = _doc.id
  }

  return item
}
