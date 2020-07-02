<template>
  <v-container class="font-gosikku">
    <about-heading :num="1" class="about-company-list">
      <span class="haifun">学生応援きずなセット配布会</span>
    </about-heading>

    <div class="d-flex justify-center mt-4">
      <a
        href="https://fbu2189.org/2020/06/04/%e3%82%b3%e3%83%ad%e3%83%8a%e3%81%a7%e5%9b%b0%e3%82%8b%e8%8b%a5%e8%80%85%e3%82%92%e6%95%91%e3%81%86%e3%80%8c%e5%ad%a6%e7%94%9f%e5%bf%9c%e6%8f%b4%e3%81%8d%e3%81%9a%e3%81%aa%e3%82%bb%e3%83%83%e3%83%88/"
        target="_blank"
        rel="noopener"
      >
        <v-img max-width="600px" :src="mainImg" />
      </a>
    </div>

    <div class="text-center mt-8">
      <about-heading :num="2">詳しくはこちらをご覧ください</about-heading>
      <p>
        <a href="https://fbu2189.org" target="_blank" rel="noopener">
          NPO法人フードバンクうつのみや
        </a>
      </p>

      <p>
        <a
          href="https://fbu2189.org/2020/06/04/%e3%82%b3%e3%83%ad%e3%83%8a%e3%81%a7%e5%9b%b0%e3%82%8b%e8%8b%a5%e8%80%85%e3%82%92%e6%95%91%e3%81%86%e3%80%8c%e5%ad%a6%e7%94%9f%e5%bf%9c%e6%8f%b4%e3%81%8d%e3%81%9a%e3%81%aa%e3%82%bb%e3%83%83%e3%83%88/"
          target="_blank"
          rel="noopener"
        >
          コロナで困る若者を救う「学生応援きずなセット」第1弾。宇大生100人に食品配布します。
        </a>
      </p>

      <about-heading :num="2">
        受け取りを希望する方は以下のリンクをクリック
      </about-heading>

      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfwis4LIANvx8ZLItT9rRK-qv-jG1NnrBrxAycMBNF5dChsig/viewform?usp=send_form"
          target="_blank"
          rel="noopener"
        >
          申し込みフォーム
        </a>
      </p>

      <about-heading :num="2">会場はこちら</about-heading>
      <v-lazy>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.149811382604!2d139.914637515283!3d36.55050058000066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f5d20698157f1%3A0xc419bbe653026fba!2z44OV44Oq44O844K544Oa44O844K544Of44K644K_44Oe44Oq!5e0!3m2!1sja!2sjp!4v1591532319760!5m2!1sja!2sjp"
          :width="$device.isDesktop ? 600 : 300"
          :height="$device.isDesktop ? 450 : 225"
          frameborder="0"
          style="border: 0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-lazy>
    </div>

    <v-col cols="12" class="d-flex justify-center mt-4">
      <circle-list-btn large />
    </v-col>
  </v-container>
</template>

<script>
import MainImg from '@/assets/img/events/0613-student-foodbank.jpg'
const AboutHeading = () => import('@/components/atoms/heading/AboutHeading')
const CircleListBtn = () =>
  import('@/components/molecules/buttons/CircleListBtn')

export default {
  components: {
    AboutHeading,
    CircleListBtn,
  },

  computed: {
    mainImg() {
      return MainImg
    },
  },

  head() {
    return {
      title: '学生応援きずなセット配布会',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: '学生応援きずなセット配布会',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "name": "宇都宮大学の部活動・サークル・学生団体のビラ一覧",
            "url": "https://uu-circle20.firebaseapp.com",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://uu-circle20.firebaseapp.com",
                  "name": "ビラ一覧"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://uu-circle20.firebaseapp.com/events/0409-mono-newjoy",
                  "name": "学生応援絆セット配布会"
                }
              }
            ]
          }`,
          type: 'application/ld+json',
        },
      ],
    }
  },
}
</script>

<style></style>
