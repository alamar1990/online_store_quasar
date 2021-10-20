<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-img
        class="col-5"
        src="~/assets/parallax2.jpg"
      />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="event" />
      <q-btn flat>
        5:30PM
      </q-btn>
      <q-btn flat>
        7:00PM
      </q-btn>
      <q-btn flat color="primary">
        Reserve
      </q-btn>
    </q-card-actions>
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
