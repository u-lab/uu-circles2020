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
          ></v-progress-circular>
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
          <h3 class="circle-name-title3">新歓日程</h3>
          <div class="date-border">
            <v-list v-if="getDate.length !== 0">
              <v-list-item v-for="(date, key) in getDate" :key="'date' + key">
                {{ date }}
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item>なし</v-list-item>
            </v-list>
          </div>
        </div>

        <div class="py-4">
          <template v-if="circle.sns">
            <inline-icons :sns="circle.sns" />
          </template>
        </div>

        <div class="d-flex justify-center mb-4">
          <v-btn
            v-if="beforeCircle"
            :to="`/circles/${beforeCircle.id}`"
            nuxt
            color="#0b2157"
            dark
          >
            <v-icon dark>mdi-menu-left</v-icon>
            <span class="ml-2">前を見る</span>
          </v-btn>

          <v-btn
            v-if="nextCircle"
            :to="`/circles/${nextCircle.id}`"
            nuxt
            color="#0b2157"
            dark
          >
            <span class="ml-2">次を見る</span>
            <v-icon dark>mdi-menu-right</v-icon>
          </v-btn>
        </div>

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
import { mapGetters } from 'vuex'
import GroupBadge from '@/components/util/GroupBadge'
import InlineIcons from '@/components/organisms/icons/InlineIcons'
import { getArrAfter, getArrBefore } from '@/util/arrayHelper'

export default {
  components: {
    GroupBadge,
    InlineIcons
  },

  async fetch({ store, params, error }) {
    await store.dispatch('fetchCircles')
    await store.dispatch('fetchCircleImageAll', {
      startNum: store.getters.cmpCircleNum,
      endNum: store.getters.circles.length
    })

    const circles = store.state.circles
    for (const circle of circles) {
      if (circle.id === params.name) {
        await store.dispatch('fetchSubImage', {
          circleId: params.name
        })

        return
      }
    }

    return error({
      statusCode: 404,
      message: 'Page Not Found'
    })
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
    ...mapGetters({
      circles: 'circles'
    }),

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
