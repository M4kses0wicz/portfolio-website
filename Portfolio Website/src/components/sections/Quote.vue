<script setup></script>

<template>
  <section class="quote">
    <div class="bg-section">
      <div class="wrapper">
        <div class="line anim-1"></div>
        <div class="line anim-3"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-2"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-2"></div>
        <div class="line anim-3"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-1"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-2"></div>
        <div class="line anim-3"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-1"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-3"></div>
        <div class="line anim-1"></div>
      </div>
    </div>
    <div class="bg-section bottom">
      <div class="wrapper">
        <div class="line anim-3"></div>
        <div class="line anim-2"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-1"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-3"></div>
        <div class="line anim-1"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-2"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-3"></div>
        <div class="line anim-1"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-2"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-1"></div>
        <div class="line anim-2"></div>
      </div>
    </div>
    <p class="quote">
      "De<strong class="dim">t</strong>ai<strong class="soft">l</strong>s
      <strong class="normal">a</strong>re n<strong class="bold">o</strong>t
      <strong class="faint">d</strong>et<strong class="bright">a</strong
      >il<strong class="strong">s</strong>. T<strong class="soft">h</strong>ey
      <strong class="dim">m</strong>ak<strong class="normal">e</strong> t<strong
        class="bold"
        >h</strong
      >e <strong class="faint">d</strong>es<strong class="bright">i</strong>gn."
    </p>
    <p class="guy">
      – C<strong class="faint">h</strong>ar<strong class="bright">l</strong>es
      Ea<strong class="normal">m</strong>e<strong class="strong">s</strong>
    </p>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;
@use "sass:math" as *;

section.quote {
  width: 100%;
  background: $black;
  margin-top: 500px;
  position: relative;
  height: 500px;
  @include FlexCenter(column);

  .bg-section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 1;

    &.bottom {
      .wrapper {
        align-items: end;
      }
    }

    .wrapper {
      height: 100%;
      display: flex;
      gap: 6px;

      .line {
        height: 40px;
        width: 1px;
        background: $white;
        opacity: 17.5%;

        @for $i from 1 through 3 {
          &.anim-#{$i} {
            animation: line-anim-#{$i} calc(random(14) * 1s + 3s) ease infinite;
          }
        }
      }
    }
  }

  p {
    color: $white;
    font-family: $secondary-font;

    &.quote {
      font-size: $XL-size-font;
    }

    &.guy {
      font-size: $L-size-font;
      opacity: 75%;
    }
  }
}

@keyframes line-anim-1 {
  50% {
    height: 0px;
  }
}

@keyframes line-anim-2 {
  50% {
    height: 75px;
  }
}

@keyframes line-anim-3 {
  50% {
    height: 125px;
  }
}
</style>
