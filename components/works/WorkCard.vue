<template>
  <v-card hover>
    <v-img :src="work.img" />
    <v-card-title primary-title class="py-2">
      <span class="headline">{{ work.name }}</span>
    </v-card-title>
    <v-divider />
    <v-container class="px-3 py-2">
      <div v-for="description in work.descriptions" :key="description">
        {{ description }}
      </div>
    </v-container>
    <v-divider />
    <v-card-actions>
      <v-chip-group column>
        <v-chip v-for="tag in work.tags" :key="tag" small>
          {{ tag }}
        </v-chip>
      </v-chip-group>
      <v-spacer />
      <v-btn v-if="work.url" icon small :href="work.url" target="_blank">
        <v-icon small>fas fa-external-link-alt</v-icon>
      </v-btn>
      <v-chip color="grey darken-4" class="ml-1">{{ work.date }}</v-chip>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export interface Work {
  name: string
  img: string
  tags: string[]
  descriptions: string[]
  url?: string
  date: string
}

export default defineComponent({
  props: {
    work: {
      type: Object as PropType<Work>,
      required: true,
    },
  },
})
</script>
