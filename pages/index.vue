<template>
  <div>
    <!-- 紹介文 -->
    <intro-content />

    <!-- 検索 -->
    <div class="d-flex justify-center align-center mt-2">
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

    <div class="d-flex justify-center my-4">
      <div class="intro-background pa-6">
        <p class="mb-0 text-center">
          掲載団体数: <span style="font-size: 24px">{{ circles.length }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sanitizeHTML from 'sanitize-html'
import { kanaToHira } from '@/util/kanaToHira'
import { shuffleArr } from '@/util/shuffleArr'
import CircleItem from '@/components/CircleItem.vue'
import IntroContent from '@/components/index/IntroContent'
import LoadingAnimation from '@/components/index/LoadingAnimation'

export default {
  components: {
    CircleItem,
    IntroContent,
    LoadingAnimation
  },

  data() {
    return {
      loading: true,
      filterCirlce: this.circles,
      searchBox: '',
      circles: [
        {
          date: '',
          description: '',
          id: 'u-lab',
          image:
            'https://firebasestorage.googleapis.com/v0/b/uu-circle20.appspot.com/o/circles%2Fu-lab.jpg?alt=media&token=bb41f324-65ea-49bc-8f00-3b71879bfbf7',
          name: '宇都宮大学情報デザインサークル',
          public: 'student',
          shortname: 'U-lab',
          sns: ''
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      original: 'circles'
    }),

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
        { name: '製作系', type: 'mono' }
      ]
    }
  },

  async mounted() {
    const circles = this.original

    if (circles === null) {
      await this.getCirclesByFirebase()
    } else {
      this.circles = circles
    }

    this.filterCirlce = this.circles
    this.loading = false
  },

  methods: {
    async getCirclesByFirebase() {
      // firestoreからDataの回収
      const collection = this.$fireStore.collection('circles')
      const docs = await collection.get()
      const storageRef = this.$fireStorage.ref()

      // 戻り値の生成
      let items = []
      const docsLen = docs.docs.length
      const promise = []
      let UlabNum = 0
      for (let i = 0; i < docsLen; i++) {
        const _doc = docs.docs[i]
        const _data = _doc.data()
        _data.id = _doc.id
        if (_data.image) {
          // 画像のURLの生成
          try {
            promise.push(
              storageRef.child(`circles/${_data.image}`).getDownloadURL()
            )
          } catch (e) {}
        }

        if (_data.id === 'u-lab') {
          this.circles[0] = _data
          UlabNum = i
        } else {
          items.push(_data)
        }
      }

      // 画像のURLをまとめて取得
      const urls = await Promise.all(promise)

      this.circles[0].image = urls[UlabNum]
      for (let i = 0, j = 0; i < items.length; i++, j++) {
        if (i === UlabNum) {
          j++
        }

        if (items[i] && Object.keys(items[i]).includes('image')) {
          items[i].image = urls[j]
        } else {
          items[i].image = '/no-image.jpg'
        }
      }

      items = shuffleArr(items)
      this.circles = [...this.circles, ...items]
      this.$store.commit('SET_CIRCLES', this.circles)
    },

    clearFilterCircle() {
      this.filterCirlce = this.circles
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
