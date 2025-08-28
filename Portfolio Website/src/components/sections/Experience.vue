<script setup>
import SectionHeader from "../UI/SectionHeader.vue";
</script>

<template>
  <section id="experience">
    <SectionHeader title="Experience" number="3"></SectionHeader>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

#experience {
  width: calc(100svw - 29px);
  margin: 500px 0px 0px 7px;
  padding: 0px 16.5%;
}
</style>
