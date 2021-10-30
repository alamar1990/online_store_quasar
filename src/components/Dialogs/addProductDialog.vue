<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-img
            class="col-6 self-center"
            :src="'https://picsum.photos/150'"
            style="height: 150px;"
          />

          <q-card-section>
            <q-input v-model="title" label="Product title"/>
            <q-input v-model="imageUrl" label="Image url"/>
          </q-card-section>
        </q-card-section>

      </q-card>
      <q-card-actions align="center">
        <q-btn color="primary" label="OK" @click="onOKClick"/>
        <q-btn color="primary" label="Cancel" @click="onCancelClick"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {useDialogPluginComponent} from 'quasar'
import {ref} from "vue";
import useProductController from "src/composables/useProductController";

export default {
  props: {},

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup() {
    const {dialogRef, onDialogHide, onDialogOK, onDialogCancel} = useDialogPluginComponent()
    const title = ref('')
    const imageUrl = ref('')

    const {addProduct} = useProductController()

    return {
      title, imageUrl,
      dialogRef,
      onDialogHide,
      async onOKClick() {
        try {
          if (!title.value) return
          await addProduct({
            text: title.value,
            image_url: imageUrl.value || "https://picsum.photos/150",
          })
          onDialogOK()
        } catch (e) {
          console.log(e)
        }
      },

      onCancelClick: onDialogCancel
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 95%;
  height: 100%;
  margin: 10px;
}
</style>
