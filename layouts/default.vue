<template>
  <v-app dark>
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed app>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        flat
        :value="link.name"
      >
        <span>{{ link.name }}</span>
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  bottomNav = ''
  links = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'About', path: '/about', icon: 'fas fa-address-card' },
    { name: 'Works', path: '/works', icon: 'fas fa-heart' }
  ]
}
</script>
