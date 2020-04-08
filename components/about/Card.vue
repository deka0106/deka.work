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
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
