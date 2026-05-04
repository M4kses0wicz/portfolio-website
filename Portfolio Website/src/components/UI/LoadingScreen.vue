<script setup>
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("vanish");
  }, 3000);
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
    <p class="loading">
      <span>l</span>
      <strong class="bright"><span>o</span></strong
      ><span>a</span><span>d</span> <span class="s"></span
      ><strong class="normal"><span>i</span></strong
      ><span>n</span><strong class="soft"><span>g</span></strong
      ><span>.</span><span>.</span><span>.</span><span class="sml">.</span>
    </p>
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

.loading {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: $white;
  opacity: 75%;
  letter-spacing: 2px;
  font-size: 17px;
  display: flex;
  &::after {
    content: "";
    display: inline-block;
  }
  .s {
    width: 0px;
    display: block;
    animation: s 0.25s 1.2s ease-out forwards;
  }
  .sml {
    opacity: 0;
    pointer-events: none;
    font-size: 10px;
  }

  @for $i from 1 through 3 {
    .dot-#{$i} {
      animation: blink 1.2s infinite;
      animation-delay: #{($i - 1) * 0.3}s;
    }
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
@keyframes s {
  to {
    width: 15px;
  }
}
</style>
