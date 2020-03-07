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
          <!-- </v-btn-toggle> -->
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
import GroupBadge from '@/components/util/GroupBadge'
import IconGroup from '@/components/circle/IconGroup'
import { getItemBefore } from '@/util/getItemBefore'
import { getItemAfter } from '@/util/getItemAfter'

export default {
  components: {
    GroupBadge,
    IconGroup
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
