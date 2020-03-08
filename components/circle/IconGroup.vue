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

      <a v-else-if="isHome(key)" :key="key" :href="item.url">
        <v-icon size="50">
          mdi-home-circle
        </v-icon>
      </a>

      <v-btn v-else :key="key" :href="item.url" class="mr-2 mb-4">
        {{ key }}{{ item.name }}
      </v-btn>
    </template>
  </div>
</template>

<script>
import FacebookIcon from '@/components/util/FacebookIcon'
import GithubIcon from '@/components/util/GithubIcon'
import InstagramIcon from '@/components/util/InstagramIcon'
import LineIcon from '@/components/util/LineIcon'
import TwitterIcon from '@/components/util/TwitterIcon'
import YoutubeIcon from '@/components/util/YoutubeIcon'

export default {
  components: {
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LineIcon,
    TwitterIcon,
    YoutubeIcon
  },

  props: {
    sns: {
      type: Object,
      required: true
    }
  },

  methods: {
    isFacebook(key) {
      return key.toLowerCase() === 'facebook'
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

    isTwitter(key) {
      return key.toLowerCase() === 'twitter'
    },

    isYoutube(key) {
      return key.toLowerCase() === 'youtube'
    }
  }
}
</script>
