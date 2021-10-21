<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
    class="flex"
  >
    <div class="flex q-pt-md q-pb-md self-lg-center">
      <q-icon :name="icon" size="50px" color="white" class="col-2 q-pr-md" />
      <q-item-label class="col self-center text-white sidebar-text q-pl">{{ title }}</q-item-label>
    </div>

  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar-text{
  font-size: 1.5rem;
  font-weight: bold;
}
.icon{
  width: 10px;
}
</style>
