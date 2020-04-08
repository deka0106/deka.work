<template>
  <card :icon="icon" :title="title">
    <table class="px-3 py-2">
      <tr v-for="content in contents" :key="content.item">
        <td align="right" class="text-no-wrap font-weight-bold">
          {{ content.item }}
        </td>
        <td align="left" class="pl-2">
          {{ content.description }}
          <v-btn
            v-if="content.link"
            :href="content.link"
            target="_blank"
            x-small
            icon
          >
            <v-icon x-small>fas fa-external-link-alt</v-icon>
          </v-btn>
        </td>
      </tr>
    </table>
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
      type: Array as PropType<
        { item: string; description: string; link?: string }[]
      >,
      required: true,
    },
  },
})
</script>
