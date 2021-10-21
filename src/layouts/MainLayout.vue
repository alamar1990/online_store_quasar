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
          Turbodega
        </q-toolbar-title>

        <q-space />
        <q-btn flat round dense icon="person" >
          <q-badge floating color="red">2</q-badge>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      className="bg-grey-2"
    >
      <q-list class="flex column bg-primary full-height q-pt-xl" >
        <q-avatar size="100px" class="self-center">
          <img src="~/assets/tb.jpg">
        </q-avatar>

        <SidebarLink v-for="link in linkList" v-bind="link" :key="link.id" class=""/>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {ref} from 'vue'
import SidebarLink from "components/SidebarLink";
import {linkList} from "src/router/link-list";

export default {
  name: 'MyLayout',
  components: {
    SidebarLink
  },
  setup() {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      linkList: linkList,
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script>
