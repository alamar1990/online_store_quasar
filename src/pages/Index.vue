<template>
  <q-page class="row q-pa-md">
    <div class="col">
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

            <TbButton label="Crear Producto" icon_right="add" class="self-center q-pl-lg" />
          </div>
        </div>

      </div>

    </div>
    <div class="row bg-primary">

    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import TbButton from "components/TbButton";

export default defineComponent({
  name: 'PageIndex',
  components: {TbButton},
})
</script>

<style lang="scss" scoped>
.search-input{
  border-radius: 8px;
}
.q-field--standout.q-field--readonly {
  .q-field__control {
    &::before {
      opacity: 1;
      background: transparent;
      border: 1px solid black;
      border-radius: 8px;
    }
  }
}
</style>
