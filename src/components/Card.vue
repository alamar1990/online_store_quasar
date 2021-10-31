<template>
  <q-card class="my-card">
    <q-card-section horizontal >
      <q-img
        class="col-6 self-center"
        :src="image_url"
        style="height: 150px;"
      />

      <q-card-section>
        {{ productName }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    productName: {
      type: String
    },
    image_url: {
      type: String
    },
  }
})
</script>

<style lang="scss" scoped>
.my-card{
  width: 300px;
  height: 150px;
  margin: 10px;
}
</style>
