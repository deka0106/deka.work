<template>
  <v-avatar :size="size" tile>
    <img src="/icon.png" alt="Deka" />
  </v-avatar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    size: {
      type: Number,
      default: 160,
    },
  },
})
</script>
