<template>
  <div>
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
          v-else-if="subImages"
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
            v-for="(image, key) in subImages"
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
            <v-list v-if="circle.date">
              <v-list-item
                v-for="(date, key) in circle.date"
                :key="'date' + key"
              >
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
            <icon-group :sns="circle.sns" />
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GroupBadge from '@/components/util/GroupBadge'
import IconGroup from '@/components/circle/IconGroup'
import { shuffleArr } from '@/util/shuffleArr'
import { getItemBefore } from '@/util/getItemBefore'
import { getItemAfter } from '@/util/getItemAfter'

export default {
  components: {
    GroupBadge,
    IconGroup
  },

  data() {
    return {
      circle: '',
      count: '',
      docs: '',
      loading: true,
      subImages: '',
      success: false,
      nextCircle: '',
      beforeCircle: '',
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

  computed: mapGetters({
    original: 'circles'
  }),

  async mounted() {
    const circles = this.original

    if (circles === null) {
      await this.getCirclesByFirebase()
    } else {
      this.circles = circles
    }

    let count
    let circle
    const docs = this.circles
    // パラメータに一致するサークルを探す
    for (count = 0; count < docs.length; count++) {
      const _doc = docs[count]

      if (_doc.id === this.$route.params.name) {
        circle = _doc
        break
      }
    }

    // サブ画像のURLの取得
    if (circle.subImage) {
      if (!circle.subImage[0].match('https:')) {
        const promise = []
        const storageRef = this.$fireStorage.ref()
        for (let i = 0; i < circle.subImage.length; i++) {
          const subImage = circle.subImage[i]

          // 画像のURLの生成
          try {
            promise.push(
              storageRef.child(`circles/${subImage}`).getDownloadURL()
            )
          } catch (e) {}
        }

        // 画像のURLをまとめて取得
        const urls = await Promise.all(promise)
        this.$store.commit('UPDATE_CIRCLE_SUBIMAGES', {
          num: count,
          urls
        })
        this.subImages = urls
      } else {
        this.subImages = this.circles[count].subImage
      }
    }

    this.circle = circle
    this.count = count
    this.beforeCircle = getItemBefore(this.circles, this.count) // 一つ前のサークル情報取得
    this.nextCircle = getItemAfter(this.circles, this.count) // 一つ後のサークル情報取得
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
    }
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
      ]
    }
  }
}
</script>
