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
            <q-input label="Product title"/>
            <q-input label="Image url"/>
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

export default {
  props: {
    text: {
      type: String
    },
    image_url: {
      type: String
    },
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup() {
    const {dialogRef, onDialogHide, onDialogOK, onDialogCancel} = useDialogPluginComponent()
    return {
      dialogRef,
      onDialogHide,
      onOKClick() {
        onDialogOK()
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
