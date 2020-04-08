<template>
  <v-container fill-height>
    <v-row class="fit-width">
      <v-col
        v-for="work in works"
        :key="work.name"
        cols="12"
        sm="6"
        lg="4"
        xl="3"
      >
        <work-card :work="work" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import WorkCard, { Work } from '@/components/works/WorkCard.vue'

export default defineComponent({
  components: {
    WorkCard,
  },
  setup() {
    const works = ref<Work[]>([
      {
        name: 'Flythm',
        img: '/works/flythm.png',
        tags: ['TypeScript', 'PixiJS', 'Illustrator'],
        descriptions: [
          'PCブラウザでできるキーボードとマウスで遊ぶ新感覚音楽ゲーム',
          'traPにてチームで制作',
          '主にデザイン(ロゴ, UI)を担当',
        ],
        url: 'https://flythm.trap.games',
        date: 'Apr, 2019',
      },
      {
        name: '課金王者ガチャキング',
        img: '/works/gachaking.png',
        tags: ['JavaScript', 'Canvas'],
        descriptions: [
          '友情崩壊系対戦ボードゲーム',
          'traPにてチームで制作',
          '主にクライアントプログラム(アニメーション, デザイン)を担当',
        ],
        url: 'https://gachaking.trap.games',
        date: 'Apr, 2017',
      },
      {
        name: 'RefactorHub',
        img: '/works/refactorhub.png',
        tags: ['Spring Boot', 'Kotlin', 'Vue.js'],
        descriptions: [
          'リファクタリング実証的研究のためのデータセット作成環境',
          '研究にて制作，現在も改良中',
        ],
        url: 'https://refactorhub.com/',
        date: 'Mar, 2019',
      },
      {
        name: 'stoikhe.io',
        img: '/works/stoikheio.png',
        tags: ['Play', 'Java'],
        descriptions: [
          '講義の理解を補助するノート作りツール',
          '授業にてチームで制作',
          '主にフロントエンド(デザイン)を担当',
        ],
        date: 'Feb, 2018',
      },
    ])
    return { works }
  },
})
</script>

<style lang="scss" scoped>
.fit-width {
  max-width: calc(100% + 24px);
}
</style>
