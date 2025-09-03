<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

const container = ref();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: "top 95%",
      end: "bottom 20%",
      // markers: true,
    },
  });
  gsap.set(container.value, {
    opacity: 0,
  });
  tl.to(container.value, {
    opacity: 0.3,
    duration: 0.02,
    ease: "none",
  })
    .to(container.value, {
      opacity: 0,
      duration: 0.05,
      ease: "none",
    })
    .to(container.value, {
      opacity: 0.7,
      duration: 0.07,
      ease: "none",
    })
    .to(container.value, {
      opacity: 0.2,
      duration: 0.03,
      ease: "none",
    })
    .to(container.value, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
});

const props = defineProps({
  title: String,
  number: Number,
});
</script>

<template>
  <div class="container" ref="container">
    <div class="bg-section">
      <div class="wrapper">
        <div class="line anim-1"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-1"></div>
        <div class="line anim-2"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-2"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-1"></div>
        <div class="line anim-2"></div>
      </div>
      <div class="wrapper">
        <div class="line anim-3"></div>
      </div>
    </div>
    <div class="bg-section bottom">
      <div class="wrapper">
        <div class="line anim-1"></div>
      </div>
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
    </div>
    <div class="carousel">
      <div class="wrapper">
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="dim">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="soft">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="faint">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="normal">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="bold">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="bright">{{ number }}</strong>
        </div>
      </div>
      <div class="wrapper">
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="soft">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="faint">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="strong">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="dim">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="normal">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="bright">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
      </div>
    </div>
    <h2>{{ title }}</h2>
    <div class="carousel no2">
      <div class="wrapper">
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="bold">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="faint">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="bright">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="dim">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="strong">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
      </div>
      <div class="wrapper">
        <div class="num">
          <strong class="soft">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="normal">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="faint">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="bold">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="bright">{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong>{{ number }}</strong>
        </div>
        <div class="num">
          <strong class="dim">{{ number }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;
@use "sass:math" as *;

.container {
  width: 100%;
  height: 250px;
  @include MaxWidth(1300px) {
    height: 200px;
  }

  background: $white;
  position: relative;
  display: flex;

  h2 {
    font-family: $primary-font;
    font-size: $XXL-size-font;
    font-weight: 400;
    width: 95%;
    @include FlexCenter(row);
    letter-spacing: 17px;

    @include MaxWidth(1700px) {
      font-size: 100px;
    }

    @include MaxWidth(1300px) {
      font-size: 75px;
    }

    @include MaxWidth(1050px) {
      font-size: 65px;
      font-weight: 100;
    }

    @include MaxWidth(950px) {
      font-size: 50px;
    }

    @include MaxWidth(800px) {
      letter-spacing: 10px;
      font-size: 40px;
    }

    @include MaxWidth(420px) {
      letter-spacing: 7px;
    }

    @include MaxWidth(380px) {
      font-size: 35px;
    }
  }

  .carousel {
    width: 2.5%;
    overflow: hidden;
    @include FlexCenter(column);

    .wrapper {
      animation: anim 7s linear infinite;
      // border-bottom: red 2px solid;
      animation-delay: -7s;

      &:nth-of-type(2) {
        animation-delay: 0s;
      }

      .num {
        font-family: $secondary-font;
        font-size: $M-size-font;
      }
    }

    &.no2 {
      .wrapper {
        animation-direction: reverse;
      }
    }
  }

  .bg-section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 1;

    @include MaxWidth(590px) {
      display: none;
    }

    &.bottom {
      .wrapper {
        align-items: end;
      }
    }

    .wrapper {
      height: 100%;
      display: flex;
      gap: 7px;

      .line {
        height: 40px;
        width: 1px;
        background: $black;
        opacity: 17.5%;

        @for $i from 1 through 3 {
          &.anim-#{$i} {
            animation: line-anim-#{$i} calc(random(7) * 1s + 2s) ease infinite;
          }
        }
      }
    }
  }
}

@keyframes anim {
  to {
    transform: translateY(-50%);
  }
}

@keyframes line-anim-1 {
  50% {
    height: 30px;
  }
}

@keyframes line-anim-2 {
  50% {
    height: 55px;
  }
}

@keyframes line-anim-3 {
  50% {
    height: 62px;
  }
}
</style>
