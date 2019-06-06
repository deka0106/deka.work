<template>
  <v-layout row wrap justify-space-around>
    <v-flex v-for="work in works" :key="work.name" xs12 sm6 lg4>
      <v-card hover class="ma-2">
        <v-img :src="work.img" height="200" />
        <v-card-title primary-title class="pt-2 pb-0">
          <div class="headline">{{ work.name }}</div>
        </v-card-title>
        <div class="px-2">
          <v-chip v-for="tag in work.tags" :key="tag" small>{{ tag }}</v-chip>
        </div>
        <div class="px-3 py-2">
          <div v-for="description in work.descriptions" :key="description">
            {{ description }}
          </div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon :href="work.url" target="_blank">
            <v-icon>fas fa-link</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  works = [
    {
      name: 'Flythm',
      img: '/works/flythm.png',
      tags: ['TypeScript', 'PixiJS', 'Illustrator'],
      descriptions: [
        'PCブラウザでできるキーボードとマウスで遊ぶ新感覚音楽ゲーム',
        'traPにてチームで制作',
        '主にデザイン(ロゴ, UI)を担当'
      ],
      url: 'https://flythm.trap.games'
    },
    {
      name: '課金王者ガチャキング',
      img: '/works/gachaking.png',
      tags: ['JavaScript', 'Canvas'],
      descriptions: [
        '友情崩壊系対戦ボードゲーム',
        'traPにてチームで制作',
        '主にクライアントプログラム(アニメーション, デザイン)を担当'
      ],
      url: 'https://gachaking.trap.games'
    },
    {
      name: 'RefactorHub',
      img: '/works/refactorhub.png',
      tags: ['Spring Boot', 'Kotlin'],
      descriptions: [
        'リファクタリング実証的研究のためのデータセット作成環境',
        '研究にて制作，現在も改良中'
      ],
      url: 'https://refactorhub.herokuapp.com/'
    }
  ]
}
</script>
