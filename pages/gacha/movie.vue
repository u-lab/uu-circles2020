<template>
  <div>
    <div class="d-flex justify-center">
      <youtube
        ref="youtube"
        :video-id="videoId"
        :player-vars="{
          autoplay: 1,
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'gacha',

  data() {
    return {
      videoId: 'sXY6L-Ompng'
    }
  },

  computed: {
    ...mapGetters({
      gachaResult: 'gacha/circles'
    }),

    getType() {
      const type =
        'public' in this.gachaResult[0] ? this.gachaResult[0].public : ''
      return type
    },

    isYellow() {
      return this.getType === 'public'
    },

    isPink() {
      return this.getType === 'private'
    },

    isBlue() {
      return this.getType === 'send' || this.getType === 'student'
    }
  },

  methods: {
    playVideo() {
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
