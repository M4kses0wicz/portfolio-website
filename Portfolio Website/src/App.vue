<script setup>
import Home from "./components/pages/Home.vue";
import LoadingScreen from "./components/UI/LoadingScreen.vue";
import InfoCard from "./components/UI/InfoCard.vue";
</script>

<template>
  <LoadingScreen></LoadingScreen>
  <Home />
  <InfoCard />
</template>

<style scoped></style>
