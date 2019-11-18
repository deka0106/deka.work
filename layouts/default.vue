<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <v-bottom-navigation v-model="bottomNav" grow fixed app>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        :value="link.name"
      >
        <span>{{ link.name }}</span>
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
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

<style lang="scss" scoped>
.v-item-group.v-bottom-navigation .v-btn {
  height: inherit;
}
</style>
