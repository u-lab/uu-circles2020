import { shallowMount } from '@vue/test-utils'
import MInlineIcons from '@/components/molecules/icons/InlineIcons'
import OInlineIcons from '@/components/organisms/icons/InlineIcons'

describe('organisms/icons/InlineIcons', () => {
  let wrapper

  afterEach(() => {
    wrapper.destroy()
  })

  it('molecules/icons/InlineIconsコンポーネントが存在するか(正常系)', () => {
    const sns = {
      facebook: {
        url: 'https://example.com',
        title: '補足の説明'
      },

      form: {
        url: 'https://example.com',
        title: '補足の説明'
      }
    }

    wrapper = shallowMount(OInlineIcons, {
      propsData: { sns }
    })
    expect(wrapper.isVueInstance).toBeTruthy()
    expect(wrapper.find(MInlineIcons).is(MInlineIcons)).toBeTruthy()
  })
})
