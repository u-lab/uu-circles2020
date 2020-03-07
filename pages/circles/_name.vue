<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6">
        <a :href="circle.image" target="_blank" rel="noopener">
          <v-img :src="circle.image" :alt="`${circle.name} - 宇大ビラ`" />
        </a>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6">
        <div>
          <h2 class="circle-name-title">{{ circle.name }}</h2>

          <div class="d-sm-flex justify-space-between">
            <h3 v-show="circle.shortname" class="circle-name-title3">
              {{ circle.shortname }}
            </h3>
            <div class="text-right">
              <span
                v-if="circle.public"
                class="light-blue white--text pa-2 radius"
              >
                公認団体
              </span>
              <span v-else class="light-green white--text pa-2 radius">
                学生団体
              </span>
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
          <div v-if="circle.sns">
            <v-btn
              v-for="(sns, key) in circle.sns"
              :key="key"
              :href="sns.url"
              class="mb-4"
            >
              {{ key }}{{ sns.name }}
            </v-btn>
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
export default {
  async asyncData({ app, params }) {
    const collection = app.$fireStore.collection('circles')
    const ref = collection.doc(params.name)
    const docs = await collection.get()

    const docsLen = docs.docs.length

    let count
    let flag = false
    for (count = 0; count < docsLen; count++) {
      const _doc = docs.docs[count]

      if (_doc.id === params.name) {
        flag = true
        break
      }
    }

    let nextItem
    let beforeItem
    if (flag) {
      if (docs.docs[count + 1]) {
        const _doc = docs.docs[count + 1]
        const _data = _doc.data()
        _data.id = _doc.id
        nextItem = _data
      }

      if (docs.docs[count - 1]) {
        const _beforeDoc = docs.docs[count - 1]
        const _beforeData = _beforeDoc.data()
        _beforeData.id = _beforeDoc.id
        beforeItem = _beforeData
      }
    }

    const doc = await ref.get()
    const item = doc.data()
    const storageRef = app.$fireStorage.ref()

    item.image = await storageRef
      .child(`circles/${item.image}`)
      .getDownloadURL()

    return {
      success: true,
      beforeCircle: beforeItem,
      circle: item,
      nextCircle: nextItem
    }
  },
  data() {
    return {
      circle: '',
      success: false
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

<style>
.radius {
  border-radius: 5px;
}
</style>
