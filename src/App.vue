<template>
  <div class="container">
    <div class="group">
      <div class="balloon">Under Maintenance</div>
      <img alt="Deka" class="icon" src="./assets/deka.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-family: "M PLUS Rounded 1c", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.balloon {
  position: relative;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.2em 1em;
  text-align: center;
  font-size: 2em;
  color: white;
  background: cornflowerblue;
  border-radius: 1em;
}
.balloon::before {
  content: "";
  position: absolute;
  bottom: -1.6em;
  left: 50%;
  margin-left: -0.8em;
  border: 0.8em solid transparent;
  border-top: 1em solid cornflowerblue;
}

.icon {
  width: 300px;
  height: 300px;
}
</style>
