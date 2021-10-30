import {useQuasar} from "quasar";
import {ProductService} from "src/api/Product/Product.service";
import Localbase from 'localbase'

let db = new Localbase('db')
const productService = new ProductService(db)

export async function fetchData({commit}) {
  try {
    commit('SET_PRODUCT_LIST', await productService.all())
  } catch (e) {
    throw e
  }
}

export async function addProduct({commit}, payload) {
  try {
    await productService.create(payload)
  } catch (e) {
    throw e
  }
}
