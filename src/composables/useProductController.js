import {computed} from 'vue'
import {useStore} from "vuex";

const useProductController = () => {
  const store = useStore()

  return {
    productList: computed(() => store.getters['products/getProductList']),
    async fetchData() {
      await store.dispatch('products/fetchData')
    },
    async viewProduct(productKey) {
      try {
        return await store.dispatch('products/viewProduct', productKey)
      } catch (e) {
        throw e
      }
    },
    async addProduct(product) {
      try {
        await store.dispatch('products/addProduct', product)
        await store.dispatch('products/fetchData')
      } catch (e) {
        throw e
      }
    },
    async editProduct(product) {
      try {
        await store.dispatch('products/editProduct', product)
        await store.dispatch('products/fetchData')
      } catch (e) {
        throw e
      }
    },
    async deleteProduct(productObject) {
      try {
        await store.dispatch('products/deleteProduct', productObject)
        await store.dispatch('products/fetchData')
      } catch (e) {
        throw e
      }
    }
  }

}

export default useProductController
