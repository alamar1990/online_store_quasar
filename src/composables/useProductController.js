import {computed} from 'vue'
import {useStore} from "vuex";

const useProductController = () => {
  const store = useStore()

  return {
    productList: computed(() => store.getters['products/getProductList']),
    async fetchData() {
      await store.dispatch('products/fetchData')
    },
    async addProduct(product) {
      try {
        await store.dispatch('products/addProduct', product)
        await store.dispatch('products/fetchData')
      } catch (e) {
        throw e
      }
    }
  }

}

export default useProductController
