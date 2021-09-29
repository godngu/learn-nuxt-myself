<template>
  <div>
      <header>
        <h1>{{ $route.name }} 페이지</h1>
        <nuxt-link to="/">홈페이지</nuxt-link>
        <nuxt-link to="/main">메인 페이지</nuxt-link>
        <nuxt-link to="/product">상품 페이지</nuxt-link>
      </header>
      <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>