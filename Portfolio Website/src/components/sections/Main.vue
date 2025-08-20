<script setup>
import fitty from "fitty";

fitty("h1");
</script>

<template>
  <main>
    <p></p>
    <div id="title">
      <img src="../../assets/Klemensowicz.svg" alt="" />
    </div>
    <p></p>
  </main>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

main {
  width: calc(100svw - 29px);

  #title {
    width: 100%;
    margin-left: 7px;
    pointer-events: none;

    img {
      pointer-events: none;
      width: 100%;
    }
  }
}
</style>
