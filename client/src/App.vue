<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>QR Code</span>
        <span class="font-weight-light">Generator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/dj0nny/qrcode-generator"
        target="_blank"
      >
        <span class="mr-2">View repository on Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <QRCodeGenerator />
    </v-content>
  </v-app>
</template>

<script>
import QRCodeGenerator from './components/QRCodeGenerator.vue'

export default {
  name: 'App',
  components: {
    QRCodeGenerator
  },
  data () {
    return {
      
    }
  }
}
</script>
