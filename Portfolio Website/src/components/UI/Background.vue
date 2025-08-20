<script setup></script>

<template>
  <div id="bg">
    <div class="double">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="line"></div>
    <div class="double">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="line"></div>
    <div class="double">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="line"></div>
    <div class="double">
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

#bg {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100svh;
  width: 100svw;
  display: flex;
  justify-content: space-between;
  padding: 0px 7.5px;

  .line {
    height: 100%;
    width: 0.5px;
    background: $white;
    opacity: 17.5%;
  }

  .double {
    display: flex;
    gap: 7px;
  }
}
</style>
