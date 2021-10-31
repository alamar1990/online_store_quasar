<template>
  <q-page class="row q-pa-md">
    <div class="col">
      <div class="q-pb-md">
        <span class="page-title">Mis Productos</span>
      </div>

      <div class="row justify-between">
        <div class="">
          <div class="row">
            <q-select
              filled
              v-model="model"
              use-input
              input-debounce="0"
              label="Buscar productos"
              :options="searchOptions"
              @filter="filterFn"
              style="width: 250px"
              behavior="menu"
            >
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>

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
        <Card v-for="(card) in getData" v-bind="card.data" :key="card.key" @click="openEditProductDialog(card.key)"
              class="cursor-pointer"></Card>
      </div>
    </div>

  </q-page>
</template>

<script>
import {useStore} from 'vuex'
import {defineComponent, ref, onMounted} from 'vue';
import TbButton from "components/TbButton";
import Card from "components/Card";
import {useQuasar} from "quasar";
import addProductDialog from "components/Dialogs/addProductDialog";
import useProductController from "src/composables/useProductController";
import editProductDialog from "components/Dialogs/editProductDialog";


export default defineComponent({
  name: 'PageIndex',
  components: {Card, TbButton},
  methods: {
    async createProduct() {
      this.openAddProductDialog()
    },

  },

  computed: {
    getData() {
      return this.productList.slice((this.page - 1) * this.itemsPerPage, (this.page - 1) * this.itemsPerPage + this.itemsPerPage)
    }
  },

  setup() {
    const $q = useQuasar()
    const searchOptions = ref(null)

    const {productList, fetchData, searchProduct} = useProductController()

    const page = ref(1)
    const currentPage = ref(1)
    const nextPage = ref(null)
    const itemsPerPage = ref(5)

    function openAddProductDialog() {
      $q.dialog({
        component: addProductDialog,
      }).onOk(() => {
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    }

    function openEditProductDialog(productKey) {
      if (!productKey) return console.log('No Product for editing/delete')
      $q.dialog({
        component: editProductDialog,
        componentProps: {
          productKey: productKey,
        }
      }).onOk(() => {
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    }

    function filterFn(val, update) {
      if (val === '') {
        update(async () => {
          searchOptions.value = await searchProduct({
            condition: {productName: val},
            limit: 5
          })
        })
        return
      }

      update(async () => {
        const needle = val.toLowerCase()
        // searchOptions.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        searchOptions.value = searchProduct({
          condition: {productName: needle},
          limit: 5
        })
      })
    }

    onMounted(async () => {
      await fetchData()
      searchOptions.value = await searchProduct({
        condition: {},
        limit: 5
      })
    })

    return {
      productList,
      page,
      currentPage,
      nextPage,
      itemsPerPage,

      model: ref(null),
      searchOptions,
      filterFn,

      openEditProductDialog,
      openAddProductDialog,
      fetchData,
      searchProduct,
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
