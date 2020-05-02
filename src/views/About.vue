<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">increment {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import StoreKey from '@/store/store-keys'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const useCount2 = inject(StoreKey)
    return { ...useCount2 }
  }
}
</script>
