<script setup>
function fct() {
  document.querySelector(".card").classList.add("vanish");
}
</script>

<template>
  <div class="card">
    <!-- <img
      src="../../assets/screenshot_monitor_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
      alt="screen icon"
    /> -->
    <p>Best on larger screens — using a laptop or desktop is recommended.</p>
    <p class="x" @click="fct()">X</p>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

.card {
  display: none;

  @include MaxWidth(900px) {
    display: block !important;
    position: relative;
    position: fixed;
    bottom: 10px;
    width: calc(100svw - 20px);
    @include FlexCenter(column);
    margin-left: 10px;
    backdrop-filter: blur(14px);
    border: 1px $white solid;
    mix-blend-mode: difference;
    padding: 3px 20px 3px 3px;
    transition: 1s;

    //   transform: translateY(300%);
    //   animation: anim 1s ease forwards;

    &.vanish {
      transform: translateY(300%) !important;
    }

    p {
      opacity: 70%;
      color: $white;
      font-size: $M-size-font;
      font-family: $secondary-font;

      &.x {
        position: absolute;
        bottom: 0;
        right: 2px;
        font-size: $L-size-font;
        opacity: 100%;
      }
    }
  }
}

@keyframes anim {
  to {
    transform: translateY(0%);
  }
}
</style>
