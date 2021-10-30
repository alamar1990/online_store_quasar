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

            <TbButton label="Crear Producto" icon_right="add" class="self-center q-pl-lg" @click="createProduct"/>
          </div>
        </div>

      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="page"
          :min="currentPage"
          :max="Math.ceil(productList.length/itemsPerPage)"
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
import {useQuasar} from "quasar";
import addProductDialog from "components/Dialogs/addProductDialog";

export default defineComponent({
  name: 'PageIndex',
  components: {Card, TbButton},
  methods: {
    async createProduct() {
      // const {data} = await this.productService.create({
      //   id: 2,
      //   name: 'Billy',
      //   age: 44
      // })
      // console.log('result', await this.productService.all())
      await this.fetchData()
      this.addProduct()
    },

    async fetchData() {
      try {
        this.productList = await this.productService.all()
      } catch (e) {
        console.log(e)
      }
    }

  },

  computed: {
    getData() {
      return this.productList.slice((this.page - 1) * this.itemsPerPage, (this.page - 1) * this.itemsPerPage + this.itemsPerPage)
    }
  },

  created() {
  },

  mounted() {
    console.log('Mounted', this.$db)
    this.fetchData()
  },

  setup() {
    const $q = useQuasar()

    const productList = ref([])
    const page = ref(1)
    const currentPage = ref(1)
    const nextPage = ref(null)
    const itemsPerPage = ref(5)

    function addProduct() {
      $q.dialog({
        component: addProductDialog,


      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })

    }

    return {
      productList, page, currentPage, nextPage, itemsPerPage, addProduct
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
