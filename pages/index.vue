<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <v-row align="center" justify="center">
          <balloon>I'm Deka</balloon>
        </v-row>
        <v-row align="center" justify="center">
          <logo :size="240" />
        </v-row>
        <v-row align="center" justify="center">
          <v-btn
            v-for="account in accounts"
            :key="account.url"
            icon
            text
            :href="account.url"
            :aria-label="account.name"
            target="_blank"
            rel="noopener noreferrer"
            class="mx-1"
          >
            <v-icon size="32">{{ account.icon }}</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Balloon from '@/components/Balloon.vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
  components: {
    Balloon,
    Logo,
  },
  setup() {
    const accounts = ref([
      {
        name: 'GitHub',
        url: 'https://github.com/deka0106',
        icon: 'fab fa-github fa-fw',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/deka0106',
        icon: 'fab fa-twitter fa-fw',
      },
    ])
    return { accounts }
  },
})
</script>
