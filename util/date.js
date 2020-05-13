export function convertToDate(timestamp) {
  return new Date(timestamp.seconds * 1000)
}
