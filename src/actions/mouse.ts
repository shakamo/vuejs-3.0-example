import { onMounted, onUnmounted, reactive, computed } from 'vue'
import { inject } from 'vue'
import { StoreKey } from '@/store/storeKeys'

export const useMousePosition = () => {
  const xy = reactive({ x: 0, y: 0 })

  const useCount = inject(StoreKey)

  function update(e: MouseEvent) {
    xy.x = e.pageX
    xy.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  const value = computed(() => {
    return { x: xy.x, y: xy.y }
  })

  const count = computed(() => {
    return useCount?.store.count
  })

  const increment = () => {
    useCount?.increment()
  }

  return {
    value,
    count,
    increment
  }
}
