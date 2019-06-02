<template>
  <v-layout justify-center align-center>
    <div>
      <v-layout column justify-center align-center>
        <div class="balloon headline">I'm Deka</div>
        <logo size="240" />
        <v-layout row justify-center align-center>
          <v-btn
            v-for="account in accounts"
            :key="account.url"
            icon
            flat
            :href="account.url"
            target="_blank"
          >
            <v-icon size="32">{{ account.icon }}</v-icon>
          </v-btn>
        </v-layout>
      </v-layout>
    </div>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
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

<style lang="stylus" scoped>
$grey = #616161
.balloon
  position relative
  display inline-block
  margin 1em
  padding 0.2em 1.6em
  text-align center
  background $grey
  border-radius 1em

  &::before
    content ''
    position absolute
    bottom -1.6em
    left 50%
    margin-left -0.8em
    border 0.8em solid transparent
    border-top 1.2em solid $grey
</style>
