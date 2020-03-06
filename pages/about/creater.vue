<template>
  <v-row class="background">
    <v-col cols="12">
      <h1 class="text-center">このサイトについて</h1>
    </v-col>

    <v-col cols="12">
      <h2>運営団体について</h2>
      <p>このサイトは学生団体U-labが作成しました。</p>
      <p><nuxt-link to="circles/u-lab">U-labの新歓チラシはこちら</nuxt-link></p>
      <p><a href="https://twitter.com/U_lab0811">twitter: @U_lab0811</a></p>
    </v-col>

    <v-col cols="12">
      <h2>このサイトの管理</h2>
      <p>このサイトはオープンソースで管理いたします。</p>
      <p>
        知識がある方はどなたでも改修等の管理にご参加いただけます。ぜひ、参加ください。
      </p>
      <p>仕様技術：Vue.js/Nuxt.js/Netlify/FireBase</p>
      <p>
        <a href="https://github.com/u-lab/uu-circles2020">
          GitHub: u-lab/uu-circles2020
        </a>
      </p>

      <h2>総合責任者</h2>
      <p>U-lab部長 3年 飯泉</p>
      <p>
        <a href="https://twitter.com/next_next77">twitter: @next_next77</a>
      </p>

      <h2>プログラム管理者</h2>
      <p>U-lab 3年 樋口</p>
      <p>
        <a href="https://github.com/H37kouya">GitHub: H37kouya</a>
      </p>
    </v-col>

    <v-col>
      <h2>意見・要望について</h2>
      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfMvRk2LLZvzfAsGYGRbLrSFB56n59J3YJAojhLk-xPi2DRIA/viewform?usp=sf_link"
        >
          Google Formへ
        </a>
      </p>
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <v-btn to="/" nuxt color="blue" large>
        サークルビラ一覧へ
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style>
.background {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
</style>
