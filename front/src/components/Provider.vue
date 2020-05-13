<template>
  <div>
    <slot />
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
