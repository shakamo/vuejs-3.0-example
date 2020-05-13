<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">increment {{ store.count }}</button>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import { StoreKey } from '@/store/storeKeys'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    // こんな感じでStoreを直接呼び出すのは禁止にする
    const useCount = inject(StoreKey)
    return { ...useCount }
  }
}
</script>
