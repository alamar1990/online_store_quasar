import {boot} from 'quasar/wrappers'
import Localbase from 'localbase'
import {ProductService} from "src/api/Product/Product.service";

let db = new Localbase('db')

export default boot(async ({app, router}) => {
  app.config.globalProperties.$db = db

  //Inject ProductService into Vue Global Instance
  app.config.globalProperties.productService = new ProductService(db)

  let dbConfig = await app.config.globalProperties.$db.collection('config').get()

  if (dbConfig.length === 0 || !dbConfig[0].isSeeded) {
    console.log('Running seeder')
    await app.config.globalProperties.$db.collection('product').set([
      {
        id: 1,
        text: "Product 1",
        image_url: "https://picsum.photos/150",
      },
      {
        id: 2,
        text: "Product 2",
        image_url: "https://picsum.photos/150",
      },
      {
        id: 3,
        text: "Product 3",
        image_url: "https://picsum.photos/150",
      },
      {
        id: 4,
        text: "Product 4",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 5,
        text: "Product 5",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 6,
        text: "Product 6",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 7,
        text: "Product 7",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 8,
        text: "Product 8",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 9,
        text: "Product 9",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 10,
        text: "Product 10",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 11,
        text: "Product 11",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 12,
        text: "Product 12",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 13,
        text: "Product 13",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 14,
        text: "Product 14",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 15,
        text: "Product 15",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 16,
        text: "Product 16",
        image_url: "~/assets/parallax2.jpg",
      },
    ])

    // Set seeded flag for data seeding
    await app.config.globalProperties.$db.collection('config').add({isSeeded: true})
  }

})
