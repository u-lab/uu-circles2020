<template>
  <v-container class="font-gosikku">
    <about-heading :num="1" class="about-company-list">
      <span class="haifun">製作系合同新歓説明会</span>
    </about-heading>

    <div class="py-4">
      <p class="text-center">
        <b style="color: red">本イベントは延期になりました。</b>
      </p>

      <p class="text-center">
        新入生に宇都宮大学で活動するものづくりサークルのことを知ってもらえれば嬉しいです
      </p>
      <p class="text-center">
        webライブ配信、アーカイブ動画の投稿も予定しているので、アーカイブ動画だけを見るのも大歓迎！
      </p>
      <p class="text-center"><b>要ライブ視聴推奨</b></p>

      <div class="d-flex justify-center">
        <v-img
          :src="mainImg"
          alt="製作系合同新歓説明会ロゴ"
          max-width="400px"
        />
      </div>

      <div>
        <about-heading :num="2" class="text-center">
          参加団体
        </about-heading>
        <p class="text-center">
          U-lab Cactus ものづくり研究会 UCG...etc
        </p>
      </div>

      <div>
        <about-heading :num="2" class="text-center">
          開催日時
        </about-heading>

        <p class="text-center">
          <del><span class="zenkaku">4月9日</span>18:00-20:00</del>
        </p>

        <p class="text-center">
          課外活動が禁止となり、本イベントは延期となりました。
        </p>
        <p class="text-center">
          <a
            href="https://www.utsunomiya-u.ac.jp/important/essential/008205.php"
            target="_blank"
            rel="noopener"
            >宇都宮大学 新型コロナウイルスへの対応について
          </a>
        </p>
      </div>

      <div>
        <about-heading :num="2" class="text-center">
          開催場所
        </about-heading>
        <p class="text-center">
          UUプラザ２階
        </p>
      </div>

      <div>
        <about-heading :num="2" class="text-center">
          概要
        </about-heading>
        <p class="text-center">
          各サークル、団体がどのような目的でどんな活動をしているのか聞くことができます。
        </p>

        <div class="d-flex justify-center">
          <table>
            <tr>
              <th class="pr-1">18:00-</th>
              <td>各サークル団体紹介</td>
            </tr>
            <tr>
              <th class="pr-1">19:30-</th>
              <td>お悩み相談会</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <about-heading :num="2" class="text-center">
        ライブ配信について
      </about-heading>

      <p class="text-center">
        ライブ配信は公式LINEを追加していただくことで、詳しいライブ情報を通知します。
      </p>

      <about-heading :num="2" class="text-center">
        公式LINE
      </about-heading>

      <div class="d-flex justify-center">
        <line-icon class="ml-4" href="https://lin.ee/8c4a72t" />
      </div>
    </div>

    <p class="text-center" style="font-size: 80%">
      <span class="kome">
        新型コロナウイルスに対して運営側はマスク、アルコール消毒などの対策に努めます。また新型コロナウイルスを考慮しご飯会などは行いません
      </span>
    </p>

    <div>
      <about-heading :num="2" class="text-center">
        参加団体ビラ
      </about-heading>

      <div>
        <p class="text-center">
          <nuxt-link to="/circles/u-lab">U-lab</nuxt-link>
        </p>
        <p class="text-center">
          <nuxt-link to="/circles/cactus">Cactus</nuxt-link>
        </p>
        <p class="text-center">
          <nuxt-link to="/circles/mono">ものづくり研究会</nuxt-link>
        </p>
        <p class="text-center"><nuxt-link to="/circles/ucg">UCG</nuxt-link></p>
      </div>
    </div>

    <v-col cols="12" class="d-flex justify-center">
      <circle-list-btn large />
    </v-col>
  </v-container>
</template>

<script>
import MainImg from '@/assets/img/events/0409-mono-newjoy1.jpg'
const AboutHeading = () => import('@/components/atoms/heading/AboutHeading')
const CircleListBtn = () =>
  import('@/components/molecules/buttons/CircleListBtn')
const LineIcon = () => import('@/components/atoms/icons/LineIcon')

export default {
  components: {
    AboutHeading,
    CircleListBtn,
    LineIcon
  },

  computed: {
    mainImg() {
      return MainImg
    }
  },

  head() {
    return {
      title: '製作系合同新歓説明会',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: '製作系合同新歓説明会'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' }
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
                  "name": "製作系合同新歓説明会"
                }
              }
            ]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.zenkaku {
  &::after {
    content: '  ';
  }
}

.kome {
  &::before {
    content: '※';
  }
}
</style>
