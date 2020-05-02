import { reactive, computed } from 'vue'

export const useCount = () => {
  const xy = reactive({ count: 0 })

  const count = computed(() => {
    return { count: xy.count }
  })

  const increment = () => {
    xy.count++
  }

  return {
    count,
    increment
  }
}
