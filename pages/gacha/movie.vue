<template>
  <div>
    <div class="d-flex justify-center">
      <youtube
        v-if="gachaResult.length === 5"
        ref="youtube"
        :video-id="videoIds.five"
        :player-vars="{
          // autoplay: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1
        }"
        :controls="0"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />

      <youtube
        v-else-if="isYellow"
        ref="youtube"
        :video-id="videoIds.yellow"
        :player-vars="{
          // autoplay: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1
        }"
        :controls="0"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />

      <youtube
        v-else-if="isBlue"
        ref="youtube"
        :video-id="videoIds.blue"
        :player-vars="{
          // autoplay: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1
        }"
        :controls="0"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />

      <youtube
        v-else-if="isPink"
        ref="youtube"
        :video-id="videoIds.pink"
        :player-vars="{
          // autoplay: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1
        }"
        :controls="0"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />

      <youtube
        v-else
        ref="youtube"
        :video-id="videoIds.grey"
        :player-vars="{
          // autoplay: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1
        }"
        :controls="0"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />
    </div>

    <div class="text-right mt-2">
      <nuxt-link class="text-right" to="/gacha/result">skip</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

function isClub(name) {
  return ~name.indexOf('部')
}

export default {
  middleware: 'gacha',

  computed: {
    ...mapGetters({
      gachaResult: 'gacha/circles'
    }),

    videoIds() {
      return {
        blue: 'xE5z_5g0Un0',
        grey: 'r-UyKBwLtkk',
        pink: 'imdevLeQog4',
        yellow: 'PogDpBdSVm0',
        five: 'bMYQ8JhCpwg'
      }
    },

    getType() {
      const type =
        'public' in this.gachaResult[0] ? this.gachaResult[0].public : ''
      return type
    },

    isBlue() {
      return this.getType === 'student'
    },

    // isGrey() {
    //   return !this.isYellow && !this.isPink && !this.isBlue
    // },

    isPink() {
      return this.getType === 'private'
    },

    isYellow() {
      const circle = this.gachaResult[0]
      return (
        ('name' in circle && isClub(circle.name)) ||
        ('shortname' in circle && isClub(circle.shortname))
      )
    },

    player() {
      return this.$refs.youtube.player
    }
  },

  mounted() {
    this.playVideo()
  },

  methods: {
    playVideo() {
      this.player.mute()
      this.player.playVideo()
    },

    // 再生スタートした際に発火
    playing() {},
    // 一時停止した際に発火
    paused() {},
    // 再生終了した際に発火
    ended() {
      this.$router.push('/gacha/result')
    }
  },

  head() {
    return {
      title: 'ガチャ演出',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ガチャ演出'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "name": "宇都宮大学の部活動・サークル・学生団体のビラ一覧",
            "url": "https://uu-circle20.firebaseapp.com",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://uu-circle20.firebaseapp.com",
                  "name": "ビラ一覧"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://uu-circle20.firebaseapp.com/gacha/movie",
                  "name": "ガチャ"
                }
              }
            ]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
