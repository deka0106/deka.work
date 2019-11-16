<template>
  <v-avatar :size="size" tile>
    <img src="/icon.png" />
  </v-avatar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop({ type: Number, default: 160 }) readonly size!: number
}
</script>
