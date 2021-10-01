<template>
  <div>
    <p>메인 페이지입니다.</p>
    <ProductList></ProductList>
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from '~/components/ProductList.vue';

export default {
  components: { ProductList },
  // async asyncData() {
  //   const response = await axios.get('http://localhost:3000/products');
  //   const products = response.data;
  //   return { products };
  // },
};
</script>

<style></style>
