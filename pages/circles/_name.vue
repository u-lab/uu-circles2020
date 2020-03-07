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
              <group-badge :public="circle.public" />
            </div>
          </div>

          <v-list v-if="circle.description">
            <v-list-item v-for="(text, key) in circle.description" :key="key">
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
              <v-list-item v-for="(date, key) in circle.date" :key="key">
                {{ date }}
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item>なし</v-list-item>
            </v-list>
          </div>
        </div>

        <div class="pt-4">
          <div v-if="circle.sns" class="d-flex">
            <template v-for="(sns, key) in circle.sns">
              <twitter-icon v-if="isTwitter(key)" :key="key" :href="sns.url" />
              <instagram-icon
                v-else-if="isInstagram(key)"
                :key="key"
                :href="sns.url"
              />
              <v-btn v-else :key="key" :href="sns.url" class="mb-4">
                {{ key }}{{ sns.name }}
              </v-btn>
            </template>
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="d-flex flex-md-row-reverse justify-center justify-md-start">
      <v-btn-toggle mandatory class="d-flex flex-column flex-md-row">
        <v-btn v-if="beforeCircle" :to="`/circles/${beforeCircle.id}`" nuxt>
          <v-icon>mdi-menu-left</v-icon>
          <span class="ml-2">前を見る</span>
        </v-btn>
        <v-btn to="/" nuxt>
          <v-icon>mdi-format-align-justify</v-icon>
          <span class="ml-2">一覧を見る</span>
        </v-btn>
        <v-btn v-if="nextCircle" :to="`/circles/${nextCircle.id}`" nuxt>
          <span class="ml-2">次を見る</span>
          <v-icon>mdi-menu-right</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script>
import GroupBadge from '@/components/util/GroupBadge'
import InstagramIcon from '@/components/util/InstagramIcon'
import TwitterIcon from '@/components/util/TwitterIcon'
import { getItemBefore } from '@/util/getItemBefore'
import { getItemAfter } from '@/util/getItemAfter'

export default {
  components: {
    GroupBadge,
    InstagramIcon,
    TwitterIcon
  },

  async asyncData({ app, params }) {
    const collection = app.$fireStore.collection('circles')
    let count // サークルの配列の番号
    let circle // サークルObject
    // サークル一覧の取得
    const _docs = await collection.get()
    const docs = _docs.docs

    // パラメータに一致するサークルを探す
    for (count = 0; count < docs.length; count++) {
      const _doc = docs[count]

      if (_doc.id === params.name) {
        circle = _doc.data()
        circle.id = _doc.id
        break
      }
    }

    return {
      success: true,
      circle,
      docs,
      count
    }
  },

  data() {
    return {
      circle: '',
      count: '',
      docs: '',
      loading: true,
      success: false,
      nextCircle: '',
      beforeCircle: ''
    }
  },

  created() {
    this.beforeCircle = getItemBefore(this.docs, this.count) // 一つ前のサークル情報取得
    this.nextCircle = getItemAfter(this.docs, this.count) // 一つ後のサークル情報取得
  },

  async mounted() {
    const storageRef = this.$fireStorage.ref()

    // サークル画像のURLの取得
    this.circle.image = await storageRef
      .child(`circles/${this.circle.image}`)
      .getDownloadURL()
    this.loading = false // ローディングアニメーションの削除
  },

  methods: {
    isTwitter(key) {
      return key.toLowerCase() === 'twitter'
    },

    isInstagram(key) {
      return key.toLowerCase() === 'instagram'
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
