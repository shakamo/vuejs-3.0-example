<template>
  <div class="wrapper">
    <div id="map" />

    <HelloWorld class="cards" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { useGoogleMap } from '@/actions/event'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    return { ...useGoogleMap() }
  }
}
</script>
<style scoped lang="scss">
#map {
  height: calc(100vh - 300px);
}
.wrapper {
  min-height: 100vh;
  position: relative; /*←相対位置*/
}
</style>
