export function getItemBefore(arr, count) {
  let item
  if (arr[count - 1]) {
    const _doc = arr[count - 1]
    item = _doc.data()
    item.id = _doc.id
  }

  return item
}
