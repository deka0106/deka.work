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
            flat
            :href="account.url"
            target="_blank"
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
import { Component, Vue } from 'nuxt-property-decorator'
import Balloon from '~/components/Balloon.vue'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Balloon,
    Logo
  }
})
export default class extends Vue {
  accounts = [
    {
      url: 'https://github.com/deka0106',
      icon: 'fab fa-github fa-fw'
    },
    {
      url: 'https://twitter.com/deka0106',
      icon: 'fab fa-twitter fa-fw'
    }
  ]
}
</script>
