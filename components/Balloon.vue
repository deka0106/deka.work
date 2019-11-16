<template>
  <div class="balloon headline">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Balloon extends Vue {}
</script>

<style lang="scss" scoped>
$grey: #616161;

.balloon {
  position: relative;
  display: inline-block;
  margin: 1em;
  padding: 0.2em 1.6em;
  text-align: center;
  background: $grey;
  border-radius: 1em;

  &::before {
    content: '';
    position: absolute;
    bottom: -1.6em;
    left: 50%;
    margin-left: -0.8em;
    border: 0.8em solid transparent;
    border-top: 1.2em solid $grey;
  }
}
</style>
