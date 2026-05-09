<script setup>
import Home from "./components/pages/Home.vue";
import LoadingScreen from "./components/UI/LoadingScreen.vue";
import InfoCard from "./components/UI/InfoCard.vue";

import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.25,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
</script>

<template>
  <LoadingScreen></LoadingScreen>
  <Home />
  <InfoCard />
</template>

<style scoped></style>
