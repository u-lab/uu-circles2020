import * as stringHelpers from '@/util/string'

const kanaToHira = [
  {
    exp: 'カタカナをひらがなに変換できる',
    arg: 'アイウエオ',
    expV: 'あいうえお',
  },
  {
    exp: 'ひらがなはひらがなのままである',
    arg: 'あいうえお',
    expV: 'あいうえお',
  },
  {
    exp: '英数カナまじりで、カタカナのみひらがなに変換できる',
    arg: 'アaｂcイウエオ1２',
    expV: 'あaｂcいうえお1２',
  },
]

describe('util/string', () => {
  describe('kanaToHira', () => {
    kanaToHira.forEach((obj) => {
      it(obj.exp, () => {
        expect(stringHelpers.kanaToHira(obj.arg)).toBe(obj.expV)
      })
    })
  })
})
