<template>
  <div v-if="$route.name === 'index'" class="main-background">
    <v-img
      width="100vw"
      height="100vh"
      src="/main-background-1800.jpg"
      srcset="/main-background-480.jpg 480w, /main-background-640.jpg 640w,
    /main-background-960.jpg 960w, /main-background-1200.jpg 1200w"
    />

    <div class="main-background-content-container">
      <v-row style="width: 320px">
        <v-col cols="4" sm="4" class="d-flex justify-end">
          <p style="width: 60px; padding-top: 16px">
            <img src="/icon.png" width="60px" style="border-radius: 10px" />
          </p>
        </v-col>

        <v-col cols="8" sm="8" md="8">
          <div class="main-background-content d-flex flex-column">
            <span>宇都宮大学</span>
            <span>Utsunomiya</span>
            <span>University</span>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-row class="main-background-bottom">
      <v-col cols="2" sm="3" class="main-background-bottom-l">
        <div class="text-center">
          <v-icon color="#fff">mdi-information-variant</v-icon>
          <p class="mb-0" style="font-size: 10px">重要な<br />お知らせ</p>
        </div>
      </v-col>

      <v-col cols="10" sm="9" class="main-background-bottom-r">
        <p class="mb-0 text-center">
          新型コロナによって新歓日程に変更が生じる可能性がございます
        </p>
      </v-col>
    </v-row>
  </div>
</template>
