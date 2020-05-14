<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" class="loading-col">
        <template v-if="loading">
          <v-progress-circular
            indeterminate
            color="gray"
            :size="70"
            :width="7"
            class="loading-circle"
          />
        </template>
        <v-carousel
          v-else-if="circle.subImage"
          cycle
          dark
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <a :href="circle.image" target="_blank" rel="noopener">
              <v-img :src="circle.image" :alt="`${circle.name} - 宇大ビラ`" />
            </a>
          </v-carousel-item>
          <v-carousel-item
            v-for="(image, key) in circle.subImage"
            :key="image + key + 'sub'"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <a :href="image" target="_blank" rel="noopener">
              <v-img :src="image" :alt="`${circle.name}${key} - 宇大ビラ`" />
            </a>
          </v-carousel-item>
        </v-carousel>
        <a v-else :href="circle.image" target="_blank" rel="noopener">
          <v-img :src="circle.image" :alt="`${circle.name} - 宇大ビラ`" />
        </a>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6">
        <div>
          <h2 class="circle-name-title">{{ circle.name }}</h2>

          <div class="d-sm-flex justify-space-between pb-3">
            <h3 v-show="circle.shortname" class="circle-name-title3">
              {{ circle.shortname }}
            </h3>
            <div class="text-right">
              <group-badge v-if="circle.public" :public="circle.public" />
              <span v-else class="grey white--text pa-2 radius">
                不明
              </span>
            </div>
          </div>

          <v-list v-if="circle.description">
            <v-list-item
              v-for="(text, key) in circle.description"
              :key="'description' + key"
            >
              {{ text }}
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item>なし</v-list-item>
          </v-list>
        </div>

        <div class="pt-4">
          <circle-date-field :dates="getDate" />
        </div>

        <div class="py-4">
          <inline-icons v-if="circle.sns" :sns="circle.sns" />
        </div>

        <circle-to-before-next-btn-group
          :to-before="toBefore"
          :to-next="toNext"
        />

        <div class="d-flex justify-center">
          <v-btn to="/" nuxt color="#0b2157" dark>
            <v-icon small>mdi-format-align-justify</v-icon>
            <span class="ml-2">一覧を見る</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getArrAfter, getArrBefore } from '@/util/array'
const CircleToBeforeNextBtnGroup = () =>
  import('@/components/organisms/btnGroup/CircleToBeforeNextBtnGroup')
const CircleDateField = () =>
  import('@/components/molecules/field/CircleDateField')
const GroupBadge = () => import('@/components/util/GroupBadge')
const InlineIcons = () => import('@/components/organisms/icons/InlineIcons')

export default {
  components: {
    CircleToBeforeNextBtnGroup,
    CircleDateField,
    GroupBadge,
    InlineIcons
  },

  fetch({ store }) {
    store.dispatch('fetchCircles')
  },

  data() {
    return {
      circle: '',
      count: '',
      loading: true,
      success: false,
      nextCircle: '',
      beforeCircle: ''
    }
  },

  computed: {
    circles() {
      return this.$store.getters.circles
    },

    getDate() {
      const date = this.circle.date || this.circle.data
      if (date) {
        const searches = ['食事', '飯', 'ごはん', '飲み']

        for (let i = 4; i <= 19; i++) {
          searches.push('4/' + i)
          searches.push('4月' + i)
        }

        const fileterDate = date.filter(function(_date) {
          for (const search of searches) {
            if (~_date.indexOf(search)) {
              return false
            }
          }

          return true
        })

        return fileterDate
      }

      return []
    },

    toNext() {
      return this.nextCircle ? `/circles/${this.nextCircle.id}` : undefined
    },

    toBefore() {
      return this.beforeCircle ? `/circles/${this.beforeCircle.id}` : undefined
    }
  },

  created() {
    let count
    let circle
    const circles = this.circles
    // パラメータに一致するサークルを探す
    for (count = 0; count < circles.length; count++) {
      const doc = circles[count]

      if (doc.id === this.$route.params.name) {
        circle = doc
        break
      }
    }

    if (!circle) {
      return this.$nuxt.error({
        statusCode: 404,
        message: 'Page Not Found'
      })
    }
    this.circle = circle
    this.count = count
    this.beforeCircle = getArrBefore(this.circles, this.count) // 一つ前のサークル情報取得
    this.nextCircle = getArrAfter(this.circles, this.count) // 一つ後のサークル情報取得
    this.loading = false
  },

  head() {
    return {
      title: this.circle.name || this.circle.shortname,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.circle.name || this.circle.shortname
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
                  "@id": "https://uu-circle20.firebaseapp.com/circle/${this.$route.params.name}",
                  "name": "${this.circle.name}"
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
