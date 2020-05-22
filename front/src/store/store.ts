import { reactive } from 'vue'

interface LatLng {
  lat: number
  lng: number
  title: string
}

export const useCount = () => {
  const store = reactive({ count: 0, data: [] as LatLng[] })

  const increment = () => {
    store.count++
  }

  const getLocations = () => {
    store.data.push({ lng: 123, lat: 35, title: 'お店の名前' })
    return store.data
  }

  return {
    store,
    increment,
    getLocations
  }
}
