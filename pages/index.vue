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

    <div class="d-flex justify-center">
      <div cols="10" class="tap-intro-content text-center">
        <p class="tap-intro-content-detail mb-0">気になるサークルがあったら</p>
        <p class="tap-intro-content-tap mb-0 d-md-none">Tap!!</p>
        <p class="tap-intro-content-tap mb-0 d-none d-md-block">Click!!</p>
      </div>

      <div cols="2">
        <v-icon size="80" color="#000">
          mdi-gesture-tap
        </v-icon>
      </div>
    </div>

    <div v-if="false">
      <v-btn color="#FF5D5D" dark class="mb-2" @click="clearFilterCircle()">
        すべて
      </v-btn>
      <v-btn
        color="#37E1FF"
        dark
        class="mb-2"
        @click="computedCircleByType('sports')"
      >
        運動系
      </v-btn>
      <v-btn
        color="#833DE5"
        dark
        class="mb-2"
        @click="computedCircleByType('music')"
      >
        音楽系
      </v-btn>
      <v-btn
        color="#8BE531"
        dark
        class="mb-2"
        @click="computedCircleByType('mono')"
      >
        製作系
      </v-btn>
      <v-btn
        color="#FFC043"
        dark
        class="mb-2"
        @click="computedCircleByType('culture')"
      >
        文化系
      </v-btn>
    </div>

    <v-row>
      <v-col
        v-for="(circle, key) in filterCirlce"
        :key="'circle' + key"
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
          :key="'loading' + i"
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
import { mapGetters } from 'vuex'
import { shuffleArr } from '@/util/shuffleArr'
import CircleItem from '@/components/CircleItem.vue'

export default {
  components: {
    CircleItem
  },

  data() {
    return {
      loading: true,
      filterCirlce: this.circles,
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
    },

    computedCircleByType(type) {
      this.filterCirlce = this.circles.filter(function(circle) {
        return circle.type === type
      })
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
