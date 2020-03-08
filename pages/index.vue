<template>
  <div>
    <div class="d-flex justify-center py-2">
      <div class="intro-background pa-6">
        <p class="mb-0">
          このサイトは新入生の新生活を応援したいという思いから有志によって作られました
        </p>
        <p class="mb-0">在校生一同皆様のご入学を心からお祝い申し上げます</p>
      </div>
    </div>

    <v-row>
      <v-col
        v-for="(circle, key) in circles"
        :key="key"
        cols="12"
        xs="6"
        sm="4"
        md="4"
        lg="4"
      >
        <circle-item
          v-if="circle.id && circle.image && circle.name"
          :to="`/circles/${circle.id}`"
          :src="circle.image"
          :name="circle.shortname || circle.name"
        />
      </v-col>
      <template v-if="loading">
        <v-col
          v-for="i in 2"
          :key="i"
          cols="12"
          xs="6"
          sm="4"
          md="4"
          lg="4"
          class="loading-col"
        >
          <v-progress-circular
            indeterminate
            color="gray"
            :size="70"
            :width="7"
            class="loading-circle"
          ></v-progress-circular>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import { shuffleArr } from '@/util/shuffleArr'
import CircleItem from '@/components/CircleItem.vue'

export default {
  components: {
    CircleItem
  },

  data() {
    return {
      loading: true,
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

  async mounted() {
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
    for (let i = 0; i < items.length; i++) {
      if (i !== UlabNum) {
        if (items[i] && Object.keys(items[i]).includes('image')) {
          items[i].image = urls[i]
        } else {
          items[i].image = '/no-image.jpg'
        }
      }
    }

    items = shuffleArr(items)
    this.circles = [...this.circles, ...items]
    this.loading = false
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
