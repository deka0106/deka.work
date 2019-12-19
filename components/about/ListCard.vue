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
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Card from '~/components/about/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class ListCard extends Vue {
  @Prop({ required: true })
  readonly icon!: string

  @Prop({ required: true })
  readonly title!: string

  @Prop({ required: true })
  readonly contents!: { item: string; link?: string }[]
}
</script>
