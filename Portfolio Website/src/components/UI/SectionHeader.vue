<script setup>
const props = defineProps({
  title: String,
  number: Number,
});
</script>

<template>
  <div class="container">
    <div class="bg-section">
      <div class="wrapper">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
      </div>
    </div>
    <div class="bg-section bottom">
      <div class="wrapper">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <div class="line"></div>
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
    <h1>{{ title }}</h1>
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

.container {
  width: 100%;
  height: 250px;
  background: $white;
  position: relative;
  display: flex;

  h1 {
    font-family: $primary-font;
    font-size: $XL-size-font;
    font-weight: 400;
    width: 95%;
    @include FlexCenter(row);
    letter-spacing: 17px;
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

        @for $i from 1 through 14 {
          &:nth-of-type(#{$i}) {
            animation: line-anim-#{$i} 7s ease infinite;
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
