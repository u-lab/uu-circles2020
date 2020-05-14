import * as stringHelpers from '@/util/string'

describe('util/string', () => {
  describe('kanaToHira', () => {
    it('カタカナをひらがなに変換できる(正常系)', () => {
      const resultStr = stringHelpers.kanaToHira('アイウエオ')
      expect(resultStr).toBe('あいうえお')
    })

    it('ひらがなはひらがなのままである(正常系)', () => {
      const resultStr = stringHelpers.kanaToHira('あいうえお')
      expect(resultStr).toBe('あいうえお')
    })

    it('英数カナまじりで、カタカナのみひらがなに変換できる(正常系)', () => {
      const resultStr = stringHelpers.kanaToHira('アaｂcイウエオ1２')
      expect(resultStr).toBe('あaｂcいうえお1２')
    })
  })
})
