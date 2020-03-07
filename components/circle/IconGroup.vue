<template>
  <div class="d-flex">
    <template v-for="(item, key) in sns">
      <twitter-icon v-if="isTwitter(key)" :key="key" :href="item.url" />

      <instagram-icon
        v-else-if="isInstagram(key)"
        :key="key"
        :href="item.url"
      />

      <v-btn v-else :key="key" :href="item.url" class="mr-2 mb-4">
        {{ key }}{{ item.name }}
      </v-btn>
    </template>
  </div>
</template>

<script>
import InstagramIcon from '@/components/util/InstagramIcon'
import TwitterIcon from '@/components/util/TwitterIcon'
export default {
  components: {
    InstagramIcon,
    TwitterIcon
  },

  props: {
    sns: {
      type: Object,
      required: true
    }
  },

  methods: {
    isTwitter(key) {
      return key.toLowerCase() === 'twitter'
    },

    isInstagram(key) {
      return key.toLowerCase() === 'instagram'
    },

    isFacebook(key) {
      return key.toLowerCase() === 'facebook'
    },

    isGithub(key) {
      return key.toLowerCase() === 'github'
    }
  }
}
</script>
