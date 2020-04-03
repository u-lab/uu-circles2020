import * as sns from '@/util/sns'

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

  describe('isFacebook', () => {
    it('str = facebook(正常系)', () => {
      const result = sns.isFacebook('facebook')
      expect(result).toBeTruthy()
    })

    it('str = Facebook(正常系)', () => {
      const result = sns.isFacebook('Facebook')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isFacebook('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isFacebook('')
      expect(result).toBeFalsy()
    })
  })

  describe('isForm', () => {
    it('str = form(正常系)', () => {
      const result = sns.isForm('form')
      expect(result).toBeTruthy()
    })

    it('str = Form(正常系)', () => {
      const result = sns.isForm('Form')
      expect(result).toBeTruthy()
    })

    it('str = googleform(正常系)', () => {
      const result = sns.isForm('googleform')
      expect(result).toBeTruthy()
    })

    it('str = GoogleForm(正常系)', () => {
      const result = sns.isForm('GoogleForm')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isForm('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isForm('')
      expect(result).toBeFalsy()
    })
  })

  describe('isGithub', () => {
    it('str = github(正常系)', () => {
      const result = sns.isGithub('github')
      expect(result).toBeTruthy()
    })

    it('str = Github(正常系)', () => {
      const result = sns.isGithub('Github')
      expect(result).toBeTruthy()
    })

    it('str = GitHub(正常系)', () => {
      const result = sns.isGithub('GitHub')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isGithub('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isGithub('')
      expect(result).toBeFalsy()
    })
  })

  describe('isHome', () => {
    it('str = home(正常系)', () => {
      const result = sns.isHome('home')
      expect(result).toBeTruthy()
    })

    it('str = Home(正常系)', () => {
      const result = sns.isHome('Home')
      expect(result).toBeTruthy()
    })

    it('str = hp(正常系)', () => {
      const result = sns.isHome('hp')
      expect(result).toBeTruthy()
    })

    it('str = HP(正常系)', () => {
      const result = sns.isHome('HP')
      expect(result).toBeTruthy()
    })

    it('str = homepage(正常系)', () => {
      const result = sns.isHome('homepage')
      expect(result).toBeTruthy()
    })

    it('str = HomePage(正常系)', () => {
      const result = sns.isHome('HomePage')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isHome('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isHome('')
      expect(result).toBeFalsy()
    })
  })

  describe('isInstagram', () => {
    it('str = instagram(正常系)', () => {
      const result = sns.isInstagram('instagram')
      expect(result).toBeTruthy()
    })

    it('str = Instagram(正常系)', () => {
      const result = sns.isInstagram('Instagram')
      expect(result).toBeTruthy()
    })

    it('str = insta(正常系)', () => {
      const result = sns.isInstagram('insta')
      expect(result).toBeTruthy()
    })

    it('str = Insta(正常系)', () => {
      const result = sns.isInstagram('Insta')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isInstagram('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isInstagram('')
      expect(result).toBeFalsy()
    })
  })

  describe('isLine', () => {
    it('str = line(正常系)', () => {
      const result = sns.isLine('line')
      expect(result).toBeTruthy()
    })

    it('str = Line(正常系)', () => {
      const result = sns.isLine('Line')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isLine('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isLine('')
      expect(result).toBeFalsy()
    })
  })

  describe('isMail', () => {
    it('str = mail(正常系)', () => {
      const result = sns.isMail('mail')
      expect(result).toBeTruthy()
    })

    it('str = Mail(正常系)', () => {
      const result = sns.isMail('Mail')
      expect(result).toBeTruthy()
    })

    it('str = email(正常系)', () => {
      const result = sns.isMail('email')
      expect(result).toBeTruthy()
    })

    it('str = Email(正常系)', () => {
      const result = sns.isMail('Email')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isMail('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isMail('')
      expect(result).toBeFalsy()
    })
  })

  describe('isPeing', () => {
    it('str = peing(正常系)', () => {
      const result = sns.isPeing('peing')
      expect(result).toBeTruthy()
    })

    it('str = Peing(正常系)', () => {
      const result = sns.isPeing('Peing')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isPeing('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isPeing('')
      expect(result).toBeFalsy()
    })
  })

  describe('isTwitter', () => {
    it('str = twitter(正常系)', () => {
      const result = sns.isTwitter('twitter')
      expect(result).toBeTruthy()
    })

    it('str = Twitter(正常系)', () => {
      const result = sns.isTwitter('Twitter')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isTwitter('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isTwitter('')
      expect(result).toBeFalsy()
    })
  })

  describe('isYoutube', () => {
    it('str = youtube(正常系)', () => {
      const result = sns.isYoutube('youtube')
      expect(result).toBeTruthy()
    })

    it('str = Youtube(正常系)', () => {
      const result = sns.isYoutube('Youtube')
      expect(result).toBeTruthy()
    })

    it('str = face(異常系)', () => {
      const result = sns.isYoutube('face')
      expect(result).toBeFalsy()
    })

    it('文字列が空のときfalseか(異常系)', () => {
      const result = sns.isYoutube('')
      expect(result).toBeFalsy()
    })
  })
})
