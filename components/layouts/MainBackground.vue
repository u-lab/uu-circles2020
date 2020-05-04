<template>
  <div v-if="$route.name === 'index'">
    <div v-once class="main-background">
      <v-img
        width="100vw"
        height="100vh"
        src="https://firebasestorage.googleapis.com/v0/b/uu-circle20.appspot.com/o/image%2Fmain-background-1200.jpg?alt=media&token=ed46bc17-f10c-4d87-bebf-49ef1f5260c0"
        srcset="https://firebasestorage.googleapis.com/v0/b/uu-circle20.appspot.com/o/image%2Fmain-background-480-min.jpg?alt=media&token=0a66dbe8-e420-42fc-9dbb-9d9744c7daaa 480w, https://firebasestorage.googleapis.com/v0/b/uu-circle20.appspot.com/o/image%2Fmain-background-640-min.jpg?alt=media&token=6d8bef01-d4a8-41f3-b745-a8ef37cb7fff 640w,
    https://firebasestorage.googleapis.com/v0/b/uu-circle20.appspot.com/o/image%2Fmain-background-960.jpg?alt=media&token=aeb45493-044d-4765-a6c6-e6c3a864a91d 960w, https://firebasestorage.googleapis.com/v0/b/uu-circle20.appspot.com/o/image%2Fmain-background-1200.jpg?alt=media&token=ed46bc17-f10c-4d87-bebf-49ef1f5260c0 1200w"
      />

      <div class="main-background-content-container">
        <v-row style="width: 320px">
          <v-col cols="4" sm="4" class="d-flex justify-end">
            <p style="width: 60px; padding-top: 16px">
              <v-img
                src="/icon-60x60.png"
                width="60px"
                style="border-radius: 10px"
              />
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

    <!-- 広告 -->
    <ad-block v-once />
  </div>
</template>

<script>
import AdBlock from '@/components/index/AdBlock'

export default {
  components: {
    AdBlock
  }
}
</script>

<style lang="scss" scoped>
.main-background {
  position: relative;
  font-family: fot-klee-pro, sans-serif !important;
}

.main-background-content-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}

.main-background-content {
  padding: 10px;
  border-radius: 10px;
  color: #fff;

  font-size: 28px;
  font-weight: bold;

  @include mq(sm) {
    color: #333;
    background: rgba(#fff, 0.7);
  }
}

.main-background-icon-container {
  position: relative;
}

.main-background-bottom {
  position: absolute;
  max-width: 500px;
  bottom: 0;
  margin: 0 !important;

  &-l {
    background: grey;
    color: #fff;
    padding: 10px !important;
  }

  &-r {
    background: rgba(#fff, 0.7);
    padding: 15px !important;

    p {
      font-size: 0.9rem;
    }
  }
}
</style>
