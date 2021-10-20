<template>
  <q-layout view="lHh Lpr lFf" className="bg-white">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      className="bg-grey-2"
    >
      <q-list class="flex column bg-primary full-height" >
        <q-avatar size="100px" class="self-center">
          <img src="~/assets/tb.jpg">
        </q-avatar>


        <q-item clickable tag="a" target="_blank" rel="noopener" href="http://quasar.dev">
          <q-item-section avatar>
            <q-icon color="white" name="school"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-white">Docs</q-item-label>
            <q-item-label caption class="text-white">https://quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'MyLayout',
  setup() {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script>
