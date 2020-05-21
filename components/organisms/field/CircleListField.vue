<template>
  <!-- 検索 -->
  <div>
    <div class="d-flex justify-center align-center my-2">
      <div class="px-1">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark v-on="on">
              系統検索
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="clearFilterCircle()">
              <v-list-item-title v-text="'すべて'" />
            </v-list-item>

            <v-list-item
              v-for="typeList in typeListForSearch"
              :key="`type-${typeList.type}`"
              @click="computedCircleByType(typeList.type)"
            >
              <v-list-item-title v-text="typeList.name" />
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="px-1">
        <v-text-field
          v-model="searchBox"
          append-icon="mdi-magnify"
          label="検索"
          solo
          hide-details
          @input="computedCircleBySearchBox()"
        />
      </div>
    </div>

    <gacha-banner-field />

    <circle-image-list
      v-if="filterCirlce && filterCirlce.length > 0"
      :circles="filterCirlce"
    />

    <template v-else>
      <search-result-empty-text />

      <div class="d-flex justify-center mb-4">
        <v-btn dark @click="clearFilterCircle()">
          検索リセット
        </v-btn>
      </div>
    </template>
  </div>
</template>

<script>
import { filterCircle } from '@/util/search'
const GachaBannerField = () =>
  import('@/components/molecules/field/GachaBannerField')
const SearchResultEmptyText = () =>
  import('@/components/atoms/text/SearchResultEmptyText')
const CircleImageList = () =>
  import('@/components/organisms/list/CircleImageList')

const TYPE_LIST = [
  { name: '運動系', type: 'sports' },
  { name: '音楽系', type: 'music' },
  { name: '文化系', type: 'culture' },
  { name: '製作系', type: 'mono' },
  { name: '農業系', type: 'agri' }
]

export default {
  components: {
    CircleImageList,
    GachaBannerField,
    SearchResultEmptyText
  },

  props: {
    circles: {
      type: Array,
      default: undefined
    }
  },

  data() {
    return {
      filterCirlce: this.circles,
      searchBox: ''
    }
  },

  computed: {
    typeListForSearch: () => TYPE_LIST
  },

  methods: {
    clearFilterCircle() {
      this.filterCirlce = this.circles
      this.searchBox = ''
    },

    computedCircleByType(type) {
      this.searchBox = type
      this.filterCirlce = this.circles.filter((circle) => {
        return circle.type === type
      })
    },

    computedCircleBySearchBox() {
      this.filterCirlce = filterCircle(this.circles, this.searchBox)
    }
  }
}
</script>
