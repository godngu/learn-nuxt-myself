<template>
  <div>
    <p>메인 페이지입니다.</p>
    <div>
      {{ products }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  async asyncData () {
    const response = await axios.get('http://localhost:3000/products')
    // this.products = response.data;
  },

  data () {
    return {
      products: []
    }
  }

}
</script>

<style>

</style>
