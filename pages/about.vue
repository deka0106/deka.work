<template>
  <v-layout justify-center align-center>
    <v-flex text-xs-center>
      <logo />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class extends Vue {}
</script>
