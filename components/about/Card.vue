<template>
  <v-flex xs12 sm6 lg4>
    <v-card class="ma-2">
      <v-card-title primary-title class="py-2">
        <v-icon left>{{ icon }}</v-icon>
        <span class="title font-weight-light">{{ title }}</span>
      </v-card-title>
      <v-divider></v-divider>
      <slot />
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Card extends Vue {
  @Prop(String) readonly icon!: string
  @Prop(String) readonly title!: string
}
</script>
