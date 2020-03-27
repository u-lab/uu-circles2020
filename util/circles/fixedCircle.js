export function fixedCircleById(circles, circleId, fixNum = 0) {
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].id === circleId) {
      return swapArr(circles, fixNum, i)
    }
  }
}

function swapArr(arr, num1, num2) {
  const tmp = arr[num1]
  arr[num1] = arr[num2]
  arr[num2] = tmp
  return arr
}
