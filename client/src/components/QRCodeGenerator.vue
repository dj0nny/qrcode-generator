<template>
  <v-container text-xs-center>
    <v-layout>
      <v-flex xs12>
        <v-form v-model="valid" @submit.prevent="generateQR" @keydown.prevent.enter>
          <v-text-field v-model="url" :rules="notEmptyRules" label="URL" required></v-text-field>
          <v-btn color="success" type="submit" :disabled="!valid">Generate QR Code</v-btn>
        </v-form>
        <v-btn color="info" type="submit" @click="resetForm" >New QR Code</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-if="submitted">
      <v-divider></v-divider>
      <QRCode :QRCodelink="QRsrc" />
    </v-layout> 
  </v-container>
</template>

<script>
import QRCode from './QRCode.vue'
import API from '@/lib/API'


export default {
  name: 'QRCodeGenerator',
  components: {
    QRCode
  },
  data: (vm) => ({
    valid: false,
    submitted: false,
    url: '',
    QRsrc: '',
    notEmptyRules: [(value) => !!value || "Cannot be empty"]
  }),
  methods: {
    async generateQR() {
      if(this.valid) {
        this.QRsrc = await API.generateQRCode(this.url)
        console.log(this.QRsrc)
        this.submitted = true
      }
    },
    resetForm() {
      this.valid = false
      this.submitted = false
      this.url = ''
    }
  }
}
</script>



