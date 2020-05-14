import * as numberHelpers from '@/util/number'

describe('util/number', () => {
  describe('randInt', () => {
    it('0か1を返す(正常系)', () => {
      for (let i = 0; i < 10; i++) {
        const result = numberHelpers.randInt(1) // 0 ~ 1

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThanOrEqual(1) // result <= 1
      }
    })

    it('0以上5以下を返す(正常系)', () => {
      for (let i = 0; i < 100; i++) {
        const result = numberHelpers.randInt(5) // 0 ~ 5

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThanOrEqual(5) // result <= 5
      }
    })

    it('0のとき0を返す(正常系)', () => {
      const result = numberHelpers.randInt(0)

      expect(result).toBe(0)
    })

    it('負のとき0を返す(正常系)', () => {
      const result = numberHelpers.randInt(-10)

      expect(result).toBe(0)
    })
  })
})
