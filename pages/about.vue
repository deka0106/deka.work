<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-row align="center" justify="center">
          <logo />
        </v-row>
        <v-divider class="my-2" />
        <v-row justify="center">
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="6"
            lg="4"
          >
            <table-card
              :icon="card.icon"
              :title="card.title"
              :contents="card.contents"
            />
          </v-col>

          <v-col
            v-for="card in listCards"
            :key="card.title"
            cols="12"
            sm="6"
            lg="4"
          >
            <list-card
              :icon="card.icon"
              :title="card.title"
              :contents="card.contents"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Logo from '@/components/Logo.vue'
import ListCard from '@/components/about/ListCard.vue'
import TableCard from '@/components/about/TableCard.vue'

export default defineComponent({
  components: {
    Logo,
    ListCard,
    TableCard,
  },
  setup() {
    const cards = ref([
      {
        icon: 'fas fa-address-card',
        title: 'プロフィール',
        contents: [
          {
            item: '名前',
            description: '倉本 涼（Kuramoto Ryo）',
          },
          {
            item: 'ハンドルネーム',
            description: 'Deka',
          },
          {
            item: '所属',
            description: '東京工業大学 情報理工学院 情報工学系 修士1年',
          },
          {
            item: 'サークル',
            description: 'デジタル創作同好会traP',
            link: 'https://trap.jp/',
          },
        ],
      },
      {
        icon: 'fas fa-gamepad',
        title: '趣味',
        contents: [
          {
            item: 'ゲーム',
            description: '昔はメイプル/CSO/LoL，最近はノベルゲー',
          },
          {
            item: 'アニメ',
            description: '日常系/ラブコメ系が好き',
          },
          {
            item: 'CTF',
            description: 'Webが好き，チームではForensics/Misc',
          },
          {
            item: 'その他',
            description: 'YouTube/niconico',
          },
        ],
      },
      {
        icon: 'fas fa-code',
        title: '言語',
        contents: [
          {
            item: '好き',
            description: 'Kotlin',
          },
          {
            item: 'よく使う',
            description: 'Java, TypeScript/JavaScript, HTML/CSS',
          },
          {
            item: 'たまに',
            description: 'Python',
          },
          {
            item: '興味アリ',
            description: 'Go',
          },
        ],
      },
      {
        icon: 'fas fa-tools',
        title: 'ツール系',
        contents: [
          {
            item: 'フレームワーク',
            description: 'Spring Boot, Vue.js, PixiJS, Ktor',
          },
          {
            item: '開発環境',
            description: 'VSCode, IntelliJ IDEA',
          },
          {
            item: 'グラフィック',
            description: 'Illustrator, InDesign, XD',
          },
        ],
      },
      {
        icon: 'fas fa-user-circle',
        title: 'アカウント',
        contents: [
          {
            item: 'Twitter',
            description: 'deka0106',
            link: 'https://twitter.com/deka0106',
          },
          {
            item: 'Facebook',
            description: 'kuramoto.r',
            link: 'https://www.facebook.com/kuramoto.r',
          },
          {
            item: 'GitHub',
            description: 'deka0106',
            link: 'https://github.com/deka0106',
          },
          {
            item: 'AtCoder',
            description: 'deka0106',
            link: 'https://atcoder.jp/users/deka0106',
          },
        ],
      },
    ])

    const listCards = ref([
      {
        icon: 'fas fa-award',
        title: 'コンテスト等',
        contents: [
          { item: 'CODE THANKS FESTIVAL 2015 5位' },
          { item: 'git challenge #8 優勝', link: 'https://trap.jp/post/496/' },
        ],
      },
      {
        icon: 'fas fa-briefcase',
        title: 'インターン等',
        contents: [
          {
            item:
              '株式会社エイチーム 1dayインターンシップ ゲームプログラマーコース （2017年8月）',
          },
          { item: '株式会社エヌツーエスエム（2018年4月〜）' },
          {
            item: 'LINEサマーインターンシップ（2019年8月〜9月）',
            link:
              'https://engineering.linecorp.com/ja/blog/2019summer-intern-report-frontend/',
          },
        ],
      },
    ])

    return { cards, listCards }
  },
})
</script>
