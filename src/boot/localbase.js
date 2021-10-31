import {boot} from 'quasar/wrappers'
import Localbase from 'localbase'
import {ProductService} from "src/api/Product/Product.service";

let db = new Localbase('db')

export default boot(async ({app, router}) => {
  app.config.globalProperties.$db = db

  //Inject ProductService into Vue Global Instance
  app.config.globalProperties.productService = new ProductService(db)
  // app.config.globalProperties.$store.productService = new ProductService(db)

  let dbConfig = await app.config.globalProperties.$db.collection('config').get()

  if (dbConfig.length === 0 || !dbConfig[0].isSeeded) {
    console.log('Running seeder')
    await app.config.globalProperties.$db.collection('product').set([
      {
        productName: "Product 1",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 2",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 3",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 4",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 5",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 6",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 7",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 8",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 9",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 10",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 11",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 12",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 13",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 14",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 15",
        image_url: "https://picsum.photos/150",
      },
      {
        productName: "Product 16",
        image_url: "https://picsum.photos/150",
      },
    ])

    // Set seeded flag for data seeding
    await app.config.globalProperties.$db.collection('config').add({isSeeded: true})
  }

})
