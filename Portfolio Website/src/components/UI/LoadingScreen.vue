<script setup>
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("vanish");
  }, 3500);
});
</script>

<template>
  <div id="loading-screen">
    <div id="bg">
      <div class="double">
        <div class="line anim-1"></div>
        <div class="line anim-3"></div>
      </div>
      <div class="line anim-2"></div>
      <div class="double">
        <div class="line anim-1"></div>
        <div class="line anim-2"></div>
      </div>
      <div class="line anim-3"></div>
      <div class="double">
        <div class="line anim-2"></div>
        <div class="line anim-1"></div>
      </div>
      <div class="line"></div>
      <div class="double">
        <div class="line anim-2"></div>
        <div class="line anim-3"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;
@use "sass:math" as *;

#loading-screen {
  position: fixed;
  z-index: 999;
  top: 0;
  height: 100svh;
  width: 100svw;
  background: $black;
  transition: 0.5s;
  // opacity: 50%;

  &.vanish {
    opacity: 0%;
    pointer-events: none;
  }

  #bg {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100svh;
    width: 100svw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 7.5px;

    .line {
      width: 0.5px;
      height: 0%;
      background: $white;
      animation: line-anim 3s ease forwards;

      @for $i from 1 through 14 {
        &:nth-of-type(#{$i}) {
          animation-delay: $i * 0.1s;
        }
      }
      opacity: 17.5%;
    }

    .double {
      display: flex;
      align-items: center;
      gap: 7px;
      height: 100%;
    }
  }
}

@keyframes line-anim {
  to {
    height: 100%;
  }
}
</style>
