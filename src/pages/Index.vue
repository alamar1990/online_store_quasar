<template>
  <q-page class="row q-pa-md">
    <div class="col">
      <div class="q-pb-md">
        <span class="page-title">Mis Productos</span>
      </div>

      <div class="row justify-between">
        <div class="">
          <div class="row">
            <q-input
              debounce="500"
              filled
              placeholder="Search"
              style="border-radius: 30px;"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <TbButton label="Buscar" class="self-center q-pl-lg" />
          </div>
        </div>

        <div class="self-center">
          <div class="row">
            <q-btn-dropdown flat no-caps style="background: white; color: #606060" label="Categoría">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Carnes</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Lácteos</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown flat no-caps style="background: white; color: #606060" label="Ordenar por">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Tipo</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Nombre</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>

            <TbButton label="Crear Producto" icon_right="add" class="self-center q-pl-lg"/>
          </div>
        </div>

      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="page"
          :min="currentPage"
          :max="Math.ceil(cardList.length/totalPages)"
          input-class="text-orange-10"
        >
        </q-pagination>
      </div>
      <div class="row q-pt-md">
        <Card v-for="(card, index) in getData" v-bind="card" :key="index"></Card>
      </div>
    </div>

  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue';
import TbButton from "components/TbButton";
import Card from "components/Card";

const cardList = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet,",
    image_url: "~/assets/parallax2.jpg",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet,",
    image_url: "~/assets/parallax2.jpg",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet,",
    image_url: "~/assets/parallax2.jpg",
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
]
export default defineComponent({
  name: 'PageIndex',
  components: {Card, TbButton},

  computed: {
    getData() {
      return this.cardList.slice((this.page - 1) * this.totalPages, (this.page - 1) * this.totalPages + this.totalPages)
    }
  },

  setup() {
    const page = ref(1)
    const currentPage = ref(1)
    const nextPage = ref(null)
    const totalPages = ref(5)
    return {
      cardList, page, currentPage, nextPage, totalPages
    }
  }
})
</script>

<style lang="scss" scoped>
.page-title{
  font-size: 2rem;
  font-weight: bold;
  color: $accent;
}
</style>
