import { onMounted, onUnmounted, reactive, computed } from 'vue'

export const useMousePosition = () => {
  const xy = reactive({ x: 0, y: 0 })

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

  return {
    value
  }
}
