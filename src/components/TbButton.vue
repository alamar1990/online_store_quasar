<template>
  <div>
    <q-btn no-caps color="primary" :label="label" :icon-right="icon_right" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TbButton',
  props: {
    label: {
      type: String
    },
    icon_right: {
      type: String
    },
  },
  setup (){

  }
})
</script>
