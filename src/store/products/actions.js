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

export async function viewProduct({commit}, condition) {
  try {
    return await productService.view(condition)
  } catch (e) {
    throw e
  }
}

export async function searchProduct({commit}, payload) {
  try {
    let {condition, limit} = payload
    return await productService.viewLimit(condition, limit)
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

export async function editProduct({commit}, payload) {
  try {
    let {condition, payloadData} = payload
    await productService.update(condition, payloadData)
  } catch (e) {
    throw e
  }
}

export async function deleteProduct({commit}, condition) {
  try {
    await productService.remove(condition)
  } catch (e) {
    throw e
  }
}
