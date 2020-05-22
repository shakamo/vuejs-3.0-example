<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { provide } from 'vue'
import { useCount } from '@/store/store'
import { StoreKey } from '@/store/storeKeys'

export default {
  setup() {
    provide(StoreKey, useCount())

    return {}
  }
}
</script>

<style lang="scss">
@import 'tiny-slider/src/tiny-slider';

body,
html {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
