<template>
  <v-container fluid class="px-6 pb-1">
    <!-- 紹介文 -->
    <intro-content v-cloak />

    <!-- 検索 -->
    <div
      v-cloak
      v-if="endImageNum == circles.length"
      class="d-flex justify-center align-center my-2"
    >
      <div class="px-1">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark v-on="on">
              系統検索
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="clearFilterCircle()">
              <v-list-item-title v-text="'すべて'" />
            </v-list-item>

            <v-list-item
              v-for="typeList in typeListForSearch"
              :key="`type-${typeList.type}`"
              @click="computedCircleByType(typeList.type)"
            >
              <v-list-item-title v-text="typeList.name" />
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="px-1">
        <v-text-field
          v-model="searchBox"
          append-icon="mdi-magnify"
          label="検索"
          solo
          hide-details
          @input="computedCircleBySearchBox()"
        ></v-text-field>
      </div>
    </div>

    <div class="d-flex justify-center px-2 mb-2">
      <div>
        <v-card to="/gacha" class="mb-1">
          <v-img src="/gacha-logo.png" alt="ガチャを回す" max-width="300px" />
        </v-card>
        <p class="text-center index-gacha-intro mb-0">
          サークルが選べない新入生へ
        </p>
      </div>
    </div>

    <!-- ビラ一覧 -->
    <v-row v-if="filterCirlce && filterCirlce.length > 0">
      <template>
        <v-col
          v-for="(circle, key) in filterCirlce"
          :key="'circle' + key"
          cols="12"
          xs="6"
          sm="4"
        >
          <circle-item
            v-if="circle.id && circle.image && circle.name"
            :to="`/circles/${circle.id}`"
            :src="circle.image"
            :name="circle.shortname || circle.name"
          />
        </v-col>
      </template>
    </v-row>

    <template v-else-if="loading">
      <loading-animation
        v-for="i in loadingAnimeNum"
        :key="getLoadingKeyName(i)"
      />
    </template>

    <template v-else>
      <div class="d-flex justify-center my-4">
        <div class="intro-background pa-6">
          <p class="mb-0 text-center">
            検索結果は存在しませんでした。別のキーワードで再検索してください。
          </p>
        </div>
      </div>

      <div class="d-flex justify-center mb-4">
        <v-btn dark @click="clearFilterCircle()">
          検索リセット
        </v-btn>
      </div>
    </template>

    <div v-cloak class="d-flex justify-center my-4">
      <div class="intro-background pa-6">
        <p class="mb-0 text-center">
          掲載団体数: <span style="font-size: 24px">{{ circles.length }}</span>
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
import sanitizeHTML from 'sanitize-html'
import { kanaToHira } from '@/util/stringHelper'
const CircleItem = () => import('@/components/CircleItem.vue')
const IntroContent = () => import('@/components/index/IntroContent')
const LoadingAnimation = () => import('@/components/index/LoadingAnimation')

export default {
  components: {
    CircleItem,
    IntroContent,
    LoadingAnimation
  },

  async fetch({ store }) {
    await store.dispatch('fetchCircles')
    await store.dispatch('fetchCircleImageAll', {
      startNum: store.getters.cmpCircleNum,
      endNum: store.getters.cmpCircleNum + 3
    })
  },

  data() {
    return {
      circles: '',
      loading: true,
      filterCirlce: this.circles,
      searchBox: '',
      endImageNum: this.$store.getters.cmpCircleNum
    }
  },

  computed: {
    loadingAnimeNum() {
      return 2
    },

    getLoadingKeyName() {
      return function(num) {
        return `loading-${num}`
      }
    },

    typeListForSearch() {
      return [
        { name: '運動系', type: 'sports' },
        { name: '音楽系', type: 'music' },
        { name: '文化系', type: 'culture' },
        { name: '製作系', type: 'mono' },
        { name: '農業系', type: 'agri' }
      ]
    }
  },

  created() {
    this.circles = this.$store.getters.circles
    this.clearFilterCircle()
    this.loading = false
  },

  mounted() {
    if (!this.$store.getters.isCmp) {
      const fetchImage = setInterval(async () => {
        await this.$store.dispatch('fetchCircleImageAll', {
          startNum: this.endImageNum,
          endNum:
            this.circles.length > this.endImageNum + 18
              ? this.endImageNum + 18
              : this.circles.length
        })

        this.circles = this.$store.getters.circles
        this.clearFilterCircle()
        this.endImageNum =
          this.circles.length > this.endImageNum + 18
            ? this.endImageNum + 18
            : this.circles.length

        if (this.endImageNum > this.circles.length) {
          clearInterval(fetchImage)
        }
      }, 300)
    }
  },

  methods: {
    clearFilterCircle() {
      this.filterCirlce = this.circles.filter(function(circle) {
        return circle.image && circle.image.match('https:')
      })
      this.searchBox = ''
    },

    computedCircleByType(type) {
      this.searchBox = type
      this.filterCirlce = this.circles.filter(function(circle) {
        return circle.type === type
      })
    },

    computedCircleBySearchBox() {
      const search = sanitizeHTML(kanaToHira(this.searchBox.toLowerCase()))

      /**
       * 英数字大小区別なし ( 大文字英数字 → 小文字英数字 )
       * ひらカナ区別なし ( カタカナ → ひらがな )
       * サニタイズ
       */
      this.filterCirlce = this.circles.filter(function(circle) {
        return (
          ('name' in circle &&
            ~sanitizeHTML(kanaToHira(circle.name.toLowerCase())).indexOf(
              search
            )) ||
          ('shortname' in circle &&
            ~sanitizeHTML(kanaToHira(circle.shortname.toLowerCase())).indexOf(
              search
            )) ||
          ('id' in circle &&
            ~sanitizeHTML(kanaToHira(circle.id.toLowerCase())).indexOf(
              search
            )) ||
          ('kana' in circle &&
            ~sanitizeHTML(kanaToHira(circle.kana.toLowerCase())).indexOf(
              search
            )) ||
          ('type' in circle &&
            sanitizeHTML(circle.type.toLowerCase()) === search)
        )
      })
    }
  },

  head() {
    return {
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

<style lang="scss" scoped>
.index-gacha-intro {
  font-family: fot-klee-pro, sans-serif !important;

  &::before {
    content: '▲';
  }
}
</style>
