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

            <TbButton label="Crear Producto" icon_right="add" class="self-center q-pl-lg" />
          </div>
        </div>

      </div>

      <div class="row q-pt-md">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import TbButton from "components/TbButton";
import Card from "components/Card";

export default defineComponent({
  name: 'PageIndex',
  components: {Card, TbButton},
})
</script>

<style lang="scss" scoped>
.page-title{
  font-size: 2rem;
  font-weight: bold;
  color: $accent;
}
</style>
