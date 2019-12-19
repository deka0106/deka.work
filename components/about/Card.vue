<template>
  <v-card hover class="mx-auto">
    <v-card-title primary-title class="py-2">
      <v-icon left>{{ icon }}</v-icon>
      <span class="title">{{ title }}</span>
    </v-card-title>
    <v-divider></v-divider>
    <slot />
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  @Prop({ required: true })
  readonly icon!: string

  @Prop({ required: true })
  readonly title!: string
}
</script>
