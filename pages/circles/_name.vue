<template>
  <div>
    <v-row>
      <v-col cols="8">
        <h2>{{ circle.name }}</h2>
      </v-col>
      <v-col cols="4" class="text-right">
        <span v-if="circle.public" class="light-blue white--text pa-2 radius">
          公認団体
        </span>
        <span v-else class="light-green white--text pa-2 radius">
          学生団体
        </span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6">
        <v-img :src="circle.image" :alt="`${circle.name} - 宇大ビラ`" />
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6">
        <div>
          <h3>Information</h3>
          <v-list v-if="circle.description">
            <v-list-item v-for="(text, key) in circle.description" :key="key">
              {{ text }}
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item>なし</v-list-item>
          </v-list>
        </div>

        <div>
          <h3>新歓</h3>
          <v-list v-if="circle.date">
            <v-list-item v-for="(date, key) in circle.date" :key="key">
              {{ date }}
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item>なし</v-list-item>
          </v-list>
        </div>

        <div>
          <client-only>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </client-only>
        </div>
      </v-col>
    </v-row>

    <div class="d-flex flex-md-row-reverse justify-center justify-md-start">
      <v-btn-toggle mandatory class="d-flex flex-column flex-md-row">
        <v-btn
          v-if="beforeCircle"
          :to="`/circles/${beforeCircle.id}`"
          nuxt
          class="mb-2"
        >
          <v-icon>mdi-format-align-left</v-icon>
          <span class="ml-2">前を見る</span>
        </v-btn>
        <v-btn to="/" nuxt link class="mb-2">
          <v-icon>mdi-format-align-justify</v-icon>
          <span class="ml-2">一覧を見る</span>
        </v-btn>
        <v-btn
          v-if="nextCircle"
          :to="`/circles/${nextCircle.id}`"
          nuxt
          class="mb-2"
        >
          <v-icon>mdi-format-align-left</v-icon>
          <span class="ml-2">次を見る</span>
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
      success: false,
      shareData: {
        title: document.title,
        url: ''
      }
    }
  },

  created() {
    this.shareData.url = process.env.appUrl + this.$route.path
  },

  methods: {
    async share(data) {
      if (window.navigator.share) {
        await window.navigator
          .share(data)
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error))
      }
    }
  }
}
</script>

<style>
.radius {
  border-radius: 5px;
}
</style>
