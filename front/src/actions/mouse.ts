import { onMounted, onUnmounted, reactive, computed, inject } from 'vue'
import { StoreKey } from '@/store/storeKeys'

import axios from 'axios'

export const useMousePosition = () => {
  const xy = reactive({ x: 0, y: 0 })

  const useCount = inject(StoreKey)

  if (useCount == undefined) {
    return
  }

  function update(e: MouseEvent) {
    xy.x = e.pageX
    xy.y = e.pageY
  }

  onMounted(async () => {
    window.addEventListener('mousemove', update)
    window.bulmaCarousel.attach('#carousel-demo', {
      slidesToScroll: 1,
      slidesToShow: 4
    })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
    window.bulmaCarousel.dettach('#carousel-demo')
  })

  const value = computed(() => {
    return { x: xy.x, y: xy.y }
  })

  const count = computed(() => {
    return useCount.store.count
  })

  const increment = () => {
    useCount.increment()
  }

  return {
    value,
    count,
    increment
  }
}
