<template>
  <v-flex xs12>
    <v-divider></v-divider>
    <img :src="QRCodelink" />   
  </v-flex>
</template>

<script>

export default {
  name: 'QRCode',
  props: ['QRCodelink']
}
</script>

<style lang="scss" scoped>
  .v-divider {
    margin-top: 20px;
    margin-bottom: 20px
  }
</style>