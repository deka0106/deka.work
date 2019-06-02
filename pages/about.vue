<template>
  <v-layout>
    <v-container>
      <v-layout column justify-center align-center>
        <logo />
        <v-flex display-1>Deka</v-flex>
      </v-layout>
      <v-divider class="my-2" />
      <v-layout row wrap justify-space-around>
        <card
          v-for="card in cards"
          :key="card.title"
          :icon="card.icon"
          :title="card.title"
        >
          <table class="px-3 py-2">
            <tr v-for="content in card.contents" :key="content.item">
              <td align="right" class="no-wrap font-weight-bold">
                {{ content.item }}
              </td>
              <td align="left" class="pl-2">
                {{ content.description }}
                <a
                  v-if="content.hasOwnProperty('link')"
                  :href="content.link"
                  target="_blank"
                >
                  <v-icon size="12">fas fa-external-link-alt</v-icon>
                </a>
              </td>
            </tr>
          </table>
        </card>

        <card
          v-for="card in listCards"
          :key="card.title"
          :icon="card.icon"
          :title="card.title"
        >
          <div class="px-3 py-2">
            <ul>
              <li v-for="content in card.contents" :key="content.item">
                {{ content.item }}
                <a
                  v-if="content.hasOwnProperty('link')"
                  :href="content.link"
                  target="_blank"
                >
                  <v-icon size="12">fas fa-external-link-alt</v-icon>
                </a>
              </li>
            </ul>
          </div>
        </card>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import Card from '~/components/about/Card.vue'

@Component({
  components: {
    Logo,
    Card
  }
})
export default class extends Vue {
  cards = [
    {
      icon: 'fas fa-address-card',
      title: 'プロフィール',
      contents: [
        {
          item: '名前',
          description: '倉本 涼（Kuramoto Ryo）'
        },
        {
          item: 'ハンドルネーム',
          description: 'Deka'
        },
        {
          item: '所属',
          description: '東京工業大学 情報理工学院 情報工学系 修士1年'
        },
        {
          item: 'サークル',
          description: 'デジタル創作同好会traP',
          link: 'https://trap.jp/'
        }
      ]
    },
    {
      icon: 'fas fa-gamepad',
      title: '趣味',
      contents: [
        {
          item: 'ゲーム',
          description: '昔はメイプル/CSO/LoL，最近はADV'
        },
        {
          item: 'アニメ',
          description: '最近は日常系/ラブコメ系が好き'
        },
        {
          item: 'CTF',
          description: 'Webが好き，チームではForensics/Misc'
        },
        {
          item: 'その他',
          description: 'YouTube/niconico'
        }
      ]
    },
    {
      icon: 'fas fa-code',
      title: '言語',
      contents: [
        {
          item: '好き',
          description: 'Kotlin'
        },
        {
          item: 'よく使う',
          description: 'Java, TypeScript/JavaScript, HTML/CSS'
        },
        {
          item: 'たまに',
          description: 'Python'
        },
        {
          item: '興味アリ',
          description: 'Go'
        }
      ]
    },
    {
      icon: 'fas fa-tools',
      title: 'ツール系',
      contents: [
        {
          item: 'フレームワーク',
          description: 'SpringBoot, Vue.js, PixiJS, Ktor'
        },
        {
          item: '開発環境',
          description: 'VSCode, IntelliJ IDEA'
        },
        {
          item: 'グラフィック',
          description: 'Illustrator, InDesign, XD'
        }
      ]
    },
    {
      icon: 'fas fa-user-circle',
      title: 'アカウント',
      contents: [
        {
          item: 'Twitter',
          description: 'deka0106',
          link: 'https://twitter.com/deka0106'
        },
        {
          item: 'Facebook',
          description: 'kuramoto.r',
          link: 'https://www.facebook.com/kuramoto.r'
        },
        {
          item: 'GitHub',
          description: 'deka0106',
          link: 'https://github.com/deka0106'
        },
        {
          item: 'AtCoder',
          description: 'deka0106',
          link: 'https://atcoder.jp/users/deka0106'
        }
      ]
    }
  ]
  listCards = [
    {
      icon: 'fas fa-award',
      title: 'コンテスト等',
      contents: [
        { item: 'CODE THANKS FESTIVAL 2015 5位' },
        { item: 'git challenge #8 優勝', link: 'https://trap.jp/post/496/' }
      ]
    },
    {
      icon: 'fas fa-briefcase',
      title: 'インターン等',
      contents: [
        {
          item:
            'エイチーム1dayインターンシップ ゲームプログラマーコース （2017年8月）'
        },
        { item: 'エヌツーエスエム（2018年4月〜）' }
      ]
    }
  ]
}
</script>
