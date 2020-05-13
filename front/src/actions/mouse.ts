import { onMounted, onUnmounted, reactive, computed, inject } from 'vue'
import { StoreKey } from '@/store/storeKeys'

import { Loader, LoaderOptions } from 'google-maps'

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

    const options: LoaderOptions = {
      /* todo */
    }
    const loader = new Loader(
      'AIzaSyASUQY0k6M6Vd12qZ6K2Xwmi177n8kHL4Q',
      options
    )

    const google = await loader.load()
    const element = document.getElementById('map')
    if (!element) {
      return
    }

    const map = new google.maps.Map(element, {
      center: { lat: 35.397, lng: 135.644 },
      zoom: 8,
      gestureHandling: 'greedy'
    })

    axios
      .get(
        'https://script.google.com/macros/s/AKfycbya_VrIWO12uy6NNIv3qyWYHa7j9owSf9CzaiKMRcvcvfLJ8nbh/exec'
      )
      .then(function(response: any) {
        // handle success
        console.log(response)
      })
      .catch(function(error: any) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
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
