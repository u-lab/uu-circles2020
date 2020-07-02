import * as sns from '@/util/sns'

const isSnsValueExpect = {
  isFacebook: [
    { arg: 'facebook', expV: true },
    { arg: 'Facebook', expV: true },
  ],
  isForm: [
    { arg: 'form', expV: true },
    { arg: 'Form', expV: true },
    { arg: 'googleform', expV: true },
    { arg: 'GoogleForm', expV: true },
  ],
  isHome: [
    { arg: 'home', expV: true },
    { arg: 'Home', expV: true },
    { arg: 'hp', expV: true },
    { arg: 'Hp', expV: true },
    { arg: 'homepage', expV: true },
    { arg: 'Homepage', expV: true },
  ],
  isGithub: [
    { arg: 'github', expV: true },
    { arg: 'Github', expV: true },
    { arg: 'GitHub', expV: true },
  ],
  isInstagram: [
    { arg: 'instagram', expV: true },
    { arg: 'Instagram', expV: true },
    { arg: 'insta', expV: true },
    { arg: 'Insta', expV: true },
  ],
  isLine: [
    { arg: 'line', expV: true },
    { arg: 'Line', expV: true },
  ],
  isMail: [
    { arg: 'mail', expV: true },
    { arg: 'Mail', expV: true },
    { arg: 'email', expV: true },
    { arg: 'Email', expV: true },
  ],
  isPeing: [
    { arg: 'peing', expV: true },
    { arg: 'Peing', expV: true },
  ],
  isTwitter: [
    { arg: 'twitter', expV: true },
    { arg: 'Twitter', expV: true },
  ],
  isYoutube: [
    { arg: 'youtube', expV: true },
    { arg: 'Youtube', expV: true },
  ],
}

const isSnsNameExpectCommon = [
  {
    arg: 'face',
    exp: '異なる値のとき、falseであるか',
    expV: false,
  },
  { arg: '', exp: '文字列が空のとき、falseであるか', expV: false },
]

describe('sns関数群のテスト', () => {
  describe('convertToSnsStr', () => {
    it('英字が小英字になるか1(正常系)', () => {
      const resultStr = sns.convertToSnsStr('ABC')
      expect(resultStr).toBe('abc')
    })

    it('英字が小英字になるか2(正常系)', () => {
      const resultStr = sns.convertToSnsStr('AbC')
      expect(resultStr).toBe('abc')
    })

    it('小英字が小英字のままであるか(正常系)', () => {
      const resultStr = sns.convertToSnsStr('AbC')
      expect(resultStr).toBe('abc')
    })
  })

  for (const key in isSnsValueExpect) {
    const funcName = key
    const arr = isSnsValueExpect[key]

    describe(funcName, () => {
      arr.map((obj) => {
        it(`${funcName}が${obj.arg}のとき、${obj.expV}`, () => {
          expect(sns[funcName](obj.arg)).toBe(obj.expV)
        })
      })

      isSnsNameExpectCommon.map((obj) => {
        it(obj.exp, () => {
          expect(sns[funcName](obj.arg)).toBe(obj.expV)
        })
      })
    })
  }
})
