<template>
  <card :icon="icon" :title="title">
    <div class="pa-2">
      <ul>
        <li v-for="content in contents" :key="content.item">
          {{ content.item }}
          <v-btn
            v-if="content.link"
            :href="content.link"
            target="_blank"
            x-small
            icon
          >
            <v-icon x-small>fas fa-external-link-alt</v-icon>
          </v-btn>
        </li>
      </ul>
    </div>
  </card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Card from '@/components/about/Card.vue'

export default defineComponent({
  components: {
    Card,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: Array as PropType<{ item: string; link?: string }[]>,
      required: true,
    },
  },
})
</script>
