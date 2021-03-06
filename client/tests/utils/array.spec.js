import cloneDeep from 'lodash.clonedeep'
import * as arrayHelpers from '@/util/array'

describe('util/array', () => {
  let exampleArr = null

  // mockのVueインスタンスを生成
  beforeEach(() => {
    exampleArr = [
      { id: 1, name: 'hoge' },
      { id: 2, name: 'foo' },
      { id: 3, name: 'bar' },
      { id: 4, name: 'baz' },
      { id: 5, name: 'qux' },
      { id: 6, name: 'quux' },
      { id: 7, name: 'foobar' },
      { id: 8, name: 'fuga' },
      { id: 9, name: 'piyo' },
      { id: 10, name: 'hogehoge' },
    ]
  })

  describe('getArrBefore', () => {
    it('3番目を取得する(正常系)', () => {
      const expectObj = exampleArr[1]
      const resultObj = arrayHelpers.getArrBefore(exampleArr, 2)

      expect(resultObj).toEqual(expectObj)
    })

    it('一番最初を取得する(正常系)', () => {
      const resultObj = arrayHelpers.getArrBefore(exampleArr, 0)

      expect(resultObj).toBeNull()
    })
  })

  describe('getArrAfter', () => {
    it('3番目を取得する(正常系)', () => {
      const expectObj = exampleArr[3]
      const resultObj = arrayHelpers.getArrAfter(exampleArr, 2)

      expect(resultObj).toEqual(expectObj)
    })

    it('一番最後を取得する(正常系)', () => {
      const resultObj = arrayHelpers.getArrAfter(exampleArr, exampleArr.length)

      expect(resultObj).toBeNull()
    })
  })

  describe('getRandArr', () => {
    it('times = 0 (正常系)', () => {
      const resultArr = arrayHelpers.getRandArr(exampleArr, 0)
      expect(resultArr).toHaveLength(0)
    })

    it('配列を1つ取得(正常系)', () => {
      const resultArr = arrayHelpers.getRandArr(exampleArr, 1)
      expect(resultArr).toHaveLength(1)
    })

    it('配列を3つ取得(正常系)', () => {
      const resultArr = arrayHelpers.getRandArr(exampleArr, 3)
      expect(resultArr).toHaveLength(3)
    })

    it('配列のサイズよりtimesを大きくした(異常系)', () => {
      const resultArr = arrayHelpers.getRandArr(
        exampleArr,
        exampleArr.length + 2
      )
      expect(resultArr).toHaveLength(0)
    })
  })

  describe('shuffleArr', () => {
    it('配列がシャッフルされているか(正常系)', () => {
      // deepcopyしないとexampleArrも変化してしまう
      const resultArr = arrayHelpers.shuffleArr(cloneDeep(exampleArr))
      expect(resultArr).toHaveLength(exampleArr.length)
      expect(resultArr).not.toContain(undefined)
      expect(resultArr).not.toEqual(exampleArr) // 1/10!を引いたらドンマイ!!
    })

    it('配列の最後を確認し、すべて一致しないことを確認(正常系)', () => {
      const lastArr = []
      const maxLoop = 10
      for (let i = 0; i < maxLoop; i++) {
        const resultArr = arrayHelpers.shuffleArr(cloneDeep(exampleArr))
        lastArr.push(resultArr[resultArr.length - 1])
      }

      let loopNum = 0
      let equalNum = 0
      for (let i = 0; i < maxLoop; i++) {
        for (let j = 0; j < i; j++, loopNum++) {
          if (lastArr[i] === lastArr[j]) {
            equalNum++
          }
        }
      }
      expect(equalNum).not.toBe(loopNum)
    })

    it('配列が1つのとき同じ配列が返却されるか(正常系)', () => {
      const resultArr = arrayHelpers.shuffleArr([{ id: 1, name: 'hoge' }])
      expect(resultArr).toHaveLength(1)
      expect(resultArr).toEqual([{ id: 1, name: 'hoge' }])
    })

    it('配列が空のとき空の配列が返却されるか(正常系)', () => {
      const resultArr = arrayHelpers.shuffleArr([])
      expect(resultArr).toHaveLength(0)
      expect(resultArr).toEqual([])
    })
  })

  describe('swapArr', () => {
    it('配列が入れ替わっているか(正常系)', () => {
      const resultArr = arrayHelpers.swapArr(cloneDeep(exampleArr), 0, 2)
      expect(resultArr).toHaveLength(exampleArr.length)
      expect(resultArr[0]).toEqual(exampleArr[2])
      expect(resultArr[2]).toEqual(exampleArr[0])
    })

    it('num1 = num2のとき配列がそのままか(正常系)', () => {
      const resultArr = arrayHelpers.swapArr(cloneDeep(exampleArr), 1, 1)
      expect(resultArr).toHaveLength(exampleArr.length)
      expect(resultArr[1]).toEqual(exampleArr[1])
    })
  })
})
