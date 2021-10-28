import {boot} from 'quasar/wrappers'
import Localbase from 'localbase'
import {ProductService} from "src/api/Product/Product.service";

let db = new Localbase('db')

export default boot(async ({app, router}) => {
  app.config.globalProperties.$db = db

  //Inject ProductService into Vue Global Instance
  app.config.globalProperties.productService = new ProductService(db)
})
