<template>
  <div>
    <!-- Start Carousel -->
    <div id="carousel-demo" class="carousel">
      <!-- Slide Content -->
      <div class="card">
        <div class="card-image">
          <figure class="image is-128x128">
            <img
              src="https://mi-journey.jp/foodie/wp-content/uploads/2019/03/190352obentokihon1.jpg"
            />
          </figure>
        </div>
      </div>
      <!-- Slide Content -->
      <div class="card">
        <div class="card-image">
          <figure class="image is-128x128">
            <img
              src="https://mi-journey.jp/foodie/wp-content/uploads/2019/03/190352obentokihon1.jpg"
            />
          </figure>
        </div>
      </div>
      <!-- Slide Content -->
      <div class="card">
        <div class="card-image">
          <figure class="image is-128x128">
            <img
              src="https://mi-journey.jp/foodie/wp-content/uploads/2019/03/190352obentokihon1.jpg"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useMousePosition } from '@/actions/mouse'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    return { ...useMousePosition() }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  height: 100%;
}
</style>
