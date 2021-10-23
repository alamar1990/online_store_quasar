<template>
  <q-card class="my-card">
    <q-card-section horizontal >
      <q-img
        class="col-6 self-center"
        src="~/assets/parallax2.jpg"
        style="height: 150px;"
      />

      <q-card-section>
        Lorem ipsum dolor sit amet,
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {

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
