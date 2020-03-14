<template>
  <div class="d-flex justify-center">
    <template v-for="(item, key) in sns">
      <twitter-icon v-if="isTwitter(key)" :key="key" :href="item.url" />

      <instagram-icon
        v-else-if="isInstagram(key)"
        :key="key"
        :href="item.url"
      />

      <github-icon v-else-if="isGithub(key)" :key="key" :href="item.url" />

      <facebook-icon v-else-if="isFacebook(key)" :key="key" :href="item.url" />

      <line-icon v-else-if="isLine(key)" :key="key" :href="item.url" />

      <youtube-icon v-else-if="isYoutube(key)" :key="key" :href="item.url" />

      <hp-icon v-else-if="isHome(key)" :key="key" :href="item.url" />

      <peing-icon v-else-if="isPeing(key)" :key="key" :href="item.url" />

      <form-icon v-else-if="isForm(key)" :key="key" :href="item.url" />

      <v-btn
        v-else-if="isMail(key)"
        :key="key"
        :href="`mailto:${item.url}?subject=${getMailSubject}`"
        color="grey"
      >
        <v-icon size="50">mdi-email</v-icon>
      </v-btn>

      <v-btn v-else :key="key" :href="item.url" class="mr-2 mb-4">
        {{ key }}{{ item.name }}
      </v-btn>
    </template>
  </div>
</template>

<script>
import FacebookIcon from '@/components/util/FacebookIcon'
import FormIcon from '@/components/util/FormIcon'
import GithubIcon from '@/components/util/GithubIcon'
import HpIcon from '@/components/util/HpIcon'
import InstagramIcon from '@/components/util/InstagramIcon'
import LineIcon from '@/components/util/LineIcon'
import PeingIcon from '@/components/util/PeingIcon'
import TwitterIcon from '@/components/util/TwitterIcon'
import YoutubeIcon from '@/components/util/YoutubeIcon'

export default {
  components: {
    FacebookIcon,
    FormIcon,
    GithubIcon,
    HpIcon,
    InstagramIcon,
    LineIcon,
    PeingIcon,
    TwitterIcon,
    YoutubeIcon
  },

  props: {
    sns: {
      type: Object,
      required: true
    }
  },

  computed: {
    getMailSubject() {
      return '宇都宮大学サークルビラ一覧からのお知らせ'
    }
  },

  methods: {
    isFacebook(key) {
      return key.toLowerCase() === 'facebook'
    },

    isForm(key) {
      const str = key.toLowerCase()
      return str === 'form' || str === 'googleform'
    },

    isGithub(key) {
      return key.toLowerCase() === 'github'
    },

    isHome(key) {
      const str = key.toLowerCase()
      return str === 'home' || str === 'homepage' || str === 'hp'
    },

    isInstagram(key) {
      return key.toLowerCase() === 'instagram' || key.toLowerCase() === 'insta'
    },

    isLine(key) {
      return key.toLowerCase() === 'line'
    },

    isMail(key) {
      const str = key.toLowerCase()
      return str === 'mail' || str === 'email'
    },

    isPeing(key) {
      return key.toLowerCase() === 'peing'
    },

    isTwitter(key) {
      return key.toLowerCase() === 'twitter'
    },

    isYoutube(key) {
      return key.toLowerCase() === 'youtube'
    }
  }
}
</script>
