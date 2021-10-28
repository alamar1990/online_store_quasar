import {boot} from 'quasar/wrappers'
import Localbase from 'localbase'
import {ProductService} from "src/api/Product/Product.service";

let db = new Localbase('db')

export default boot(async ({app, router}) => {
  app.config.globalProperties.$db = db

  //Inject ProductService into Vue Global Instance
  app.config.globalProperties.productService = new ProductService(db)

  const result = await app.config.globalProperties.$db.collection('config').get()

  if (result.length === 0 || !result[0].isSeeded) {
    console.log('Running seeder')
    await app.config.globalProperties.$db.collection('product').set([
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "https://picsum.photos/150",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "https://picsum.photos/150",
      },
      {
        id: 3,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "https://picsum.photos/150",
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 5,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 7,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 8,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 9,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 10,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 11,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 12,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 13,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 14,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 15,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
      {
        id: 16,
        text: "Lorem ipsum dolor sit amet,",
        image_url: "~/assets/parallax2.jpg",
      },
    ])
  }

  // Set seeded flag for data seeding
  if (result.length === 0) {
    await app.config.globalProperties.$db.collection('config').add({isSeeded: true})
  }


})
