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

export default {
  components: {
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LineIcon,
    TwitterIcon
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

    isInstagram(key) {
      return key.toLowerCase() === 'instagram'
    },

    isLine(key) {
      return key.toLowerCase() === 'line'
    },

    isTwitter(key) {
      return key.toLowerCase() === 'twitter'
    }
  }
}
</script>
