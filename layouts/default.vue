<template>
  <v-app dark>
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app height="auto">
      <v-layout justify-center row wrap>
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          round
          nuxt
        >
          {{ link.name }}
        </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' }
  ]
}
</script>
