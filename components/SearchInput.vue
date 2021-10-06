<template>
  <div>
    <input
      type="text"
      :value="searchKeyword2"
      @input="$emit('inputed', $event.target.value)"
    />
    <button>search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword2: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style></style>
