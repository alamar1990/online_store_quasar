<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-img
            class="col-6 self-center"
            :src="imageUrl || 'https://picsum.photos/150'"
            style="height: 150px;"
          />

          <q-card-section>
            <q-input v-model="title" label="Product title"/>
            <q-input v-model="imageUrl" label="Image url"/>
          </q-card-section>
        </q-card-section>

      </q-card>
      <q-card-actions align="center">
        <q-btn color="primary" label="Cancel" @click="onCancelClick"/>
        <q-btn color="warning" label="DELETE" @click="onDELETEClick"/>
        <q-btn color="primary" label="EDIT" @click="onEDITClick"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {useDialogPluginComponent} from 'quasar'
import {ref} from "vue";
import useProductController from "src/composables/useProductController";

export default {
  props: {
    productKey: {
      type: String
    },
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  async mounted() {
    const productDetails = await this.viewProduct(this.props.productKey)
    let {text, image_url} = productDetails
    this.title = text
    this.imageUrl = image_url
  },

  setup(props) {
    const {dialogRef, onDialogHide, onDialogOK, onDialogCancel} = useDialogPluginComponent()
    const title = ref('')
    const imageUrl = ref('')

    const {viewProduct, deleteProduct, editProduct} = useProductController()
    return {
      props,
      title, imageUrl,
      viewProduct,
      dialogRef,
      onDialogHide,
      async onEDITClick() {
        try {
          await editProduct({condition: props.productKey, payloadData: {text: title.value, image_url: imageUrl.value}})
          onDialogOK()
        } catch (e) {
          console.log(e)
        }
      },
      async onDELETEClick() {
        try {
          await deleteProduct(props.productKey)
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
