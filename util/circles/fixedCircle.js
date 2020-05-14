import { swapArr } from '@/util/array'

export const fixedCircleById = (circles, circleId, fixNum = 0) => {
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].id === circleId) {
      return swapArr(circles, fixNum, i)
    }
  }
}
