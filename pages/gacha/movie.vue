<template>
  <v-container>
    <v-row justify="center">
      <youtube
        ref="youtube"
        :video-id="getVideoId"
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
    </v-row>

    <div class="text-right mt-2">
      <nuxt-link to="/gacha/result">skip</nuxt-link>
    </div>
  </v-container>
</template>

<script>
export default {
  middleware: 'gacha',

  computed: {
    gachaResult() {
      return this.$store.getters['gacha/circles']
    },

    videoIds() {
      return {
        blue: 'xE5z_5g0Un0',
        grey: 'r-UyKBwLtkk',
        pink: 'imdevLeQog4',
        yellow: 'PogDpBdSVm0',
        five: 'bMYQ8JhCpwg'
      }
    },

    getVideoId() {
      if (this.isBlue) {
        return this.videoIds.blue
      }

      if (this.isPink) {
        return this.videoIds.pink
      }

      if (this.isYellow) {
        return this.videoIds.yellow
      }

      if (this.gachaResult.length === 5) {
        return this.videoIds.five
      }

      return this.videoIds.grey
    },

    isBlue() {
      return this.gachaResult[0].isStudent()
    },

    isPink() {
      return this.gachaResult[0].isPrivate()
    },

    isYellow() {
      return this.gachaResult[0].isClub()
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
