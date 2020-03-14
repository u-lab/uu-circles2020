<template>
  <v-row class="background">
    <v-col cols="12">
      <about-heading :num="1">このサイトについて</about-heading>
    </v-col>

    <v-col cols="12">
      <about-heading :num="2">運営団体について</about-heading>
      <div class="d-flex">
        <div>
          <p>このサイトは学生団体U-labが作成しました。</p>
          <p>
            <nuxt-link to="circles/u-lab">U-labの新歓チラシはこちら</nuxt-link>
          </p>
          <p>
            <a
              href="https://twitter.com/U_lab0811"
              target="_blank"
              rel="noopener"
            >
              twitter: @U_lab0811
            </a>
          </p>
        </div>
        <div>
          <v-img src="/u-lab-icon.png" width="100" />
        </div>
      </div>
    </v-col>

    <v-col cols="12">
      <about-heading :num="2">このサイトの管理</about-heading>
      <p>このサイトはオープンソースで管理いたします。</p>
      <p>
        知識がある方はどなたでも改修等の管理にご参加いただけます。ぜひ、参加ください。
      </p>
      <p>仕様技術：Vue.js/Nuxt.js/FireBase</p>
      <p>
        <a
          href="https://github.com/u-lab/uu-circles2020"
          target="_blank"
          rel="noopener"
        >
          GitHub: u-lab/uu-circles2020
        </a>
      </p>

      <about-heading :num="3">総合責任者</about-heading>
      <p>U-lab部長 3年 飯泉一馬</p>
      <p>
        <a
          href="https://twitter.com/next_next77"
          target="_blank"
          rel="noopener"
        >
          twitter: @next_next77
        </a>
      </p>

      <about-heading :num="3">プログラム管理者</about-heading>
      <p>U-lab 3年 樋口航也</p>
      <p>
        <a href="https://github.com/H37kouya" target="_blank" rel="noopener">
          GitHub: H37kouya
        </a>
      </p>
    </v-col>

    <v-col>
      <about-heading :num="2">意見・要望について</about-heading>
      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfMvRk2LLZvzfAsGYGRbLrSFB56n59J3YJAojhLk-xPi2DRIA/viewform?usp=sf_link"
          target="_blank"
          rel="noopener"
        >
          Google Formへ
        </a>
      </p>
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <circle-list-btn />
    </v-col>
  </v-row>
</template>

<script>
import AboutHeading from '@/components/about/AboutHeading'
import CircleListBtn from '@/components/util/CircleListBtn'

export default {
  components: {
    AboutHeading,
    CircleListBtn
  },
  head() {
    return {
      title: 'このサイトについて',
      description:
        '宇都宮大学の部活動・サークル・学生団体のビラ一覧についてです。運営団体はU-labです。',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'このサイトについて'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'このサイトについて'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '宇都宮大学の部活動・サークル・学生団体のビラ一覧についてです。運営団体はU-labです。'
        }
      ]
    }
  }
}
</script>

<style>
.background {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
</style>
