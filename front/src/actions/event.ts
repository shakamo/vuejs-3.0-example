import { onMounted, onUnmounted, reactive, computed, inject } from 'vue'
import { StoreKey } from '@/store/storeKeys'

import { Loader, LoaderOptions } from 'google-maps'

import axios from 'axios'

export const useGoogleMap = () => {
  const store = inject(StoreKey)

  if (store == undefined) {
    return
  }

  onMounted(async () => {
    const options: LoaderOptions = {
      /* todo */
    }
    const loader = new Loader(
      'AIzaSyAsqXFBsFh5UQhUyYjucqrFkjnVY1Mm5iU',
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

    store.getLocations().map(x => {
      const marker = new google.maps.Marker({
        // マーカーの追加
        position: x, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
      })
    })
  })

  const data = computed(() => {
    return store.getLocations()
  })

  return { data }
}
