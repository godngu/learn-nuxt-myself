<template>
  <div>
    <AppHeader></AppHeader>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
export default {
  components: { AppHeader },
};
</script>

<style scoped></style>
