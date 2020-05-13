import { shuffleArr } from '@/util/arrayHelper'
import circlesJson from '@/assets/json/circles.json'
import { measurePerfLog } from '~/util/tests/performance'
import { fixedCircleById } from '~/util/circles/fixedCircle'

const loop = 1

describe('シャッフルの速度を計測する', () => {
  it('シャッフルの速度を計測する', () => {
    const func = () => {
      for (let i = 0; i < loop; i++) {
        shuffleArr(circlesJson)
      }
    }

    measurePerfLog(func, 'shuffle')
  })
})

describe('fixedCircleByIdの速度を計測する', () => {
  it('fixedCircleByIdの速度を計測する', () => {
    const func = () => {
      for (let i = 0; i < loop; i++) {
        fixedCircleById(circlesJson, 'u-lab', 0)
      }
    }

    measurePerfLog(func, 'fixedCircleById')
  })
})

describe('シャッフルの速度を計測する', () => {
  it('シャッフルの速度を計測する', () => {
    const func = () => {
      for (let i = 0; i < loop; i++) {
        fixedCircleById(shuffleArr(circlesJson), 'u-lab', 0)
      }
    }

    measurePerfLog(func, 'shuffle')
  })
})
