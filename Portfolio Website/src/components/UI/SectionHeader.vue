<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
