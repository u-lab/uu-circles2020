import { shallowMount } from '@vue/test-utils'
import InlineIcons from '@/components/molecules/icons/InlineIcons'
import FacebookIcon from '@/components/atoms/icons/FacebookIcon'
import FormIcon from '@/components/atoms/icons/FormIcon'
import GithubIcon from '@/components/atoms/icons/GithubIcon'
import HpIcon from '@/components/atoms/icons/HpIcon'
import InstagramIcon from '@/components/atoms/icons/InstagramIcon'
import LineIcon from '@/components/atoms/icons/LineIcon'
import MailIcon from '@/components/atoms/icons/MailIcon'
import PeingIcon from '@/components/atoms/icons/PeingIcon'
import TwitterIcon from '@/components/atoms/icons/TwitterIcon'
import YoutubeIcon from '@/components/atoms/icons/YoutubeIcon'

describe('molecules/icons/InlineIcons', () => {
  let wrapper

  afterEach(() => {
    wrapper.destroy()
  })

  it('すべてのアイコンを同時に表示できるか(正常系)', () => {
    const sns = {
      facebook: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      form: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      github: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      hp: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      instagram: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      line: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      mail: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      peing: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      twitter: {
        url: 'https://twitter.com/U_lab0811',
        title: '補足の説明'
      },

      youtube: {
        url: 'https://example.com',
        title: '補足の説明'
      }
    }

    wrapper = shallowMount(InlineIcons, {
      propsData: { sns }
    })
    expect(wrapper.isVueInstance).toBeTruthy()
    expect(wrapper.find(FacebookIcon).is(FacebookIcon)).toBeTruthy()
    expect(wrapper.find(FormIcon).is(FormIcon)).toBeTruthy()
    expect(wrapper.find(GithubIcon).is(GithubIcon)).toBeTruthy()
    expect(wrapper.find(HpIcon).is(HpIcon)).toBeTruthy()
    expect(wrapper.find(InstagramIcon).is(InstagramIcon)).toBeTruthy()
    expect(wrapper.find(LineIcon).is(LineIcon)).toBeTruthy()
    expect(wrapper.find(MailIcon).is(MailIcon)).toBeTruthy()
    expect(wrapper.find(PeingIcon).is(PeingIcon)).toBeTruthy()
    expect(wrapper.find(TwitterIcon).is(TwitterIcon)).toBeTruthy()
    expect(wrapper.find(YoutubeIcon).is(YoutubeIcon)).toBeTruthy()
  })

  describe('propsのsnsが1つのとき表示されるか(正常系)', () => {
    it('facebook', () => {
      const sns = {
        facebook: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(FacebookIcon).is(FacebookIcon)).toBeTruthy()
    })

    it('form', () => {
      const sns = {
        form: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(FormIcon).is(FormIcon)).toBeTruthy()
    })

    it('github', () => {
      const sns = {
        github: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(GithubIcon).is(GithubIcon)).toBeTruthy()
    })

    it('hp', () => {
      const sns = {
        hp: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(HpIcon).is(HpIcon)).toBeTruthy()
    })

    it('instagram', () => {
      const sns = {
        instagram: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(InstagramIcon).is(InstagramIcon)).toBeTruthy()
    })

    it('line', () => {
      const sns = {
        line: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(LineIcon).is(LineIcon)).toBeTruthy()
    })

    it('mail', () => {
      const sns = {
        mail: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(MailIcon).is(MailIcon)).toBeTruthy()
    })

    it('peing', () => {
      const sns = {
        peing: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(PeingIcon).is(PeingIcon)).toBeTruthy()
    })

    it('twitter', () => {
      const sns = {
        twitter: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(TwitterIcon).is(TwitterIcon)).toBeTruthy()
    })

    it('youtube', () => {
      const sns = {
        youtube: {
          url: 'https://example.com',
          title: '補足の説明'
        }
      }

      wrapper = shallowMount(InlineIcons, {
        propsData: { sns }
      })

      expect(wrapper.isVueInstance).toBeTruthy()
      expect(wrapper.find(YoutubeIcon).is(YoutubeIcon)).toBeTruthy()
    })
  })
})
