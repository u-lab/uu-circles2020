<template>
  <div class="d-flex justify-center">
    <template v-for="(item, key) in sns">
      <facebook-icon
        v-if="snsFunc.isFacebook(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <form-icon
        v-else-if="snsFunc.isForm(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <github-icon
        v-else-if="snsFunc.isGithub(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <hp-icon
        v-else-if="snsFunc.isHome(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <instagram-icon
        v-else-if="snsFunc.isInstagram(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <line-icon
        v-else-if="snsFunc.isLine(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <mail-icon
        v-else-if="snsFunc.isMail(key)"
        :key="key"
        :email="item.url"
        :width="width"
        class="mr-4"
      />

      <peing-icon
        v-else-if="snsFunc.isPeing(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <twitter-icon
        v-else-if="snsFunc.isTwitter(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />

      <youtube-icon
        v-else-if="snsFunc.isYoutube(key)"
        :key="key"
        :href="item.url"
        :width="width"
        class="mr-4"
      />
    </template>
  </div>
</template>

<script>
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
import * as snsFunc from '@/util/sns'

export default {
  components: {
    FacebookIcon,
    FormIcon,
    GithubIcon,
    HpIcon,
    InstagramIcon,
    LineIcon,
    MailIcon,
    PeingIcon,
    TwitterIcon,
    YoutubeIcon,
  },

  props: {
    /**
     * ex. sns = {
     *  twitter: {
     *   url: 'https://twitter.com/U_lab0811',
     *   title: '補足の説明'
     *  }
     *  mail: {
     *   email: 'hoge@example.com',
     *   title: '補足の説明'
     *  }
     * }
     */
    sns: {
      type: Object,
      required: true,
    },
  },

  computed: {
    snsFunc() {
      return snsFunc
    },

    width() {
      return 50
    },
  },
}
</script>
