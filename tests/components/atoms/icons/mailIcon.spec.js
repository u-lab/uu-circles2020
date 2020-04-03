import { shallowMount } from '@vue/test-utils'
import MailIcon from '@/components/atoms/icons/MailIcon'

describe('MailIcon', () => {
  let wrapper

  afterEach(() => {
    wrapper.destroy()
  })

  it('Vue instanceであるか(正常系)', () => {
    wrapper = shallowMount(MailIcon, {
      propsData: {
        email: 'hoge@example.com',
        width: 50
      }
    })
    expect(wrapper.isVueInstance).toBeTruthy()
    expect(wrapper.props().email).toBe('hoge@example.com')
    expect(wrapper.props().width).toBe(50)
  })

  it('propsのwidthがStringである(正常系)', () => {
    wrapper = shallowMount(MailIcon, {
      propsData: {
        email: 'hoge@example.com',
        subject: 'お知らせ',
        width: '50px'
      }
    })
    expect(wrapper.isVueInstance).toBeTruthy()
    expect(wrapper.props().email).toBe('hoge@example.com')
    expect(wrapper.props().subject).toBe('お知らせ')
    expect(wrapper.props().width).toBe('50px')
  })
})
