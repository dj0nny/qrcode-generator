<template>
  <v-container text-xs-center>
    <v-layout>
      <v-flex xs12>
        <v-form v-model="valid" @submit.prevent="generateQR" @keydown.prevent.enter>
          <v-text-field v-model="url" :rules="notEmptyRules" label="URL" required></v-text-field>
          <v-btn type="submit" :disabled="!valid">Generate QR Code</v-btn>
        </v-form>
        <v-btn type="submit" @click="resetForm" >Reset Form</v-btn>
      </v-flex>
    </v-layout>

    <v-layout v-if="submitted">
      <QRCode :payload="url" />
    </v-layout> 
  </v-container>
</template>

<script>
import QRCode from './QRCode.vue'

export default {
  name: 'QRCodeGenerator',
  components: {
    QRCode
  },
  data: (vm) => ({
    valid: false,
    submitted: false,
    url: '',
    notEmptyRules: [(value) => !!value || "Cannot be empty"]
  }),
  methods: {
    generateQR() {
      if(this.valid) {
        this.submitted = true
      }
    },
    resetForm() {
      this.valid = false;
      this.url = '';
    }
  }
}
</script>

<style>

</style>
