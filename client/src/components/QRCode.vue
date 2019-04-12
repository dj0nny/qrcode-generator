<template>
  <v-flex xs12>
    {{ QRsrc }}    
  </v-flex>
</template>

<script>
import API from '@/lib/API'

export default {
  name: 'QRCode',
  data:() => ({
    QRsrc: ''
  }),
  props: ['payload'],
  mounted() {
    this.QRsrc = API.generateQRCode(this.payload)
    console.log(this.QRsrc)
  }
}
</script>

<style>

</style>
