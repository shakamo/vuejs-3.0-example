import { reactive } from 'vue'

export const useCount = () => {
  const store = reactive({ count: 0 })

  const increment = () => {
    store.count++
  }

  return {
    store,
    increment
  }
}
