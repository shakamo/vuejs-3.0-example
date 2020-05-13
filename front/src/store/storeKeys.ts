import { InjectionKey } from 'vue'
import { useCount } from '@/store/store'
type Store = ReturnType<typeof useCount>
const StoreKey: InjectionKey<Store> = Symbol('Store')

export { StoreKey }
