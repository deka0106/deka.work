<template>
  <v-layout row wrap justify-space-around>
    <v-flex v-for="work in works" :key="work.name" xs12 sm6 lg4>
      <v-sheet class="d-flex pa-2" color="transparent">
        <v-card hover>
          <v-img :src="work.img" height="200" />
          <v-card-title primary-title class="py-2">
            <span class="headline">{{ work.name }}</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-container class="px-3 py-2">
            <div v-for="description in work.descriptions" :key="description">
              {{ description }}
            </div>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-container class="pa-0">
              <v-chip v-for="tag in work.tags" :key="tag" small class="mx-1">
                {{ tag }}
              </v-chip>
            </v-container>
            <v-spacer></v-spacer>
            <v-btn icon small :href="work.url" target="_blank">
              <v-icon small>fas fa-external-link-alt</v-icon>
            </v-btn>
            <v-chip color="grey darken-4" class="ml-1">{{ work.date }}</v-chip>
          </v-card-actions>
        </v-card>
      </v-sheet>
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
      url: 'https://flythm.trap.games',
      date: 'Apr, 2019'
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
      url: 'https://gachaking.trap.games',
      date: 'Apr, 2017'
    },
    {
      name: 'RefactorHub',
      img: '/works/refactorhub.png',
      tags: ['Spring Boot', 'Kotlin'],
      descriptions: [
        'リファクタリング実証的研究のためのデータセット作成環境',
        '研究にて制作，現在も改良中'
      ],
      url: 'https://refactorhub.herokuapp.com/',
      date: 'Mar, 2019'
    },
    {
      name: 'stoikhe.io',
      img: '/works/stoikheio.png',
      tags: ['Play', 'Java'],
      descriptions: [
        '講義の理解を補助するノート作りツール',
        '授業にてチームで制作',
        '主にフロントエンド(デザイン)を担当'
      ],
      url: 'https://refactorhub.herokuapp.com/',
      date: 'Feb, 2018'
    }
  ]
}
</script>
