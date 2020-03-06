<template>
  <div>
    <h2 class="text-center">
      宇都宮大学の部活動・サークル・学生団体の一覧です。
    </h2>

    <v-row>
      <v-col
        v-for="(circle, key) in shuffleArr(circles)"
        :key="key"
        cols="6"
        xs="6"
        sm="4"
        md="3"
        lg="3"
      >
        <v-card :to="`/circles/${circle.id}`" hover>
          <v-img :src="circle.image" />
          <v-card-title
            class="justify-center circle-name"
            :class="getPublishColorClass(circle.public)"
          >
            {{ circle.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="1" />
      <v-col cols="10">
        ここは宇都宮大学で活動するサークルや学生団体のビラを眺められるサイトです。コロナのせいで入学式が危ぶまれていますが、それでもサークルや学生団体を調べられたらいいなと思い製作しています。在校生一同皆様の入学を心からお祝い申し上げます。
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params, store }) {
    // firestoreからDataの回収
    const collection = app.$fireStore.collection('circles')
    const docs = await collection.get()
    const storageRef = app.$fireStorage.ref()

    // 戻り値の生成
    const items = []
    const docsLen = docs.docs.length
    for (let i = 0; i < docsLen; i++) {
      const _doc = docs.docs[i]
      const _data = _doc.data()
      _data.id = _doc.id
      if (_data.image) {
        // 画像のURLの生成
        _data.image = await storageRef
          .child(`circles/${_data.image}`)
          .getDownloadURL()
      }
      items.push(_data)
    }

    return { circles: items }
  },

  methods: {
    getPublishColorClass(bool) {
      return bool ? 'circle-light-blue' : 'circle-light-green'
    },

    shuffleArr(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1))
        const tmp = array[i]
        array[i] = array[r]
        array[r] = tmp
      }

      return array
    }
  }
}
</script>

<style>
.circle-name {
  font-size: 1rem;
  line-height: 1.8;
  padding: 8px;
}

.circle-name::before {
  content: '';
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.circle-light-blue::before {
  background-color: #4926c7;
}

.circle-light-green::before {
  background-color: #84fa33;
}
</style>
