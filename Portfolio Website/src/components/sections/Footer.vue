<script setup>
let year = new Date().getFullYear();
</script>

<template>
  <footer>
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
    <a href="mailto:contact@klemensowicz.pl">contact@klemensowicz.pl</a>
    <p class="subheading">
      Dr<strong class="bold">o</strong>p a m<strong class="bright">e</strong
      >ss<strong class="soft">a</strong>ge -
      <strong class="normal">I</strong> w<strong class="faint">o</strong>n't
      gh<strong class="dim">o</strong>st <strong class="strong">u</strong>
    </p>
    <div class="txt-container">
      <p>
        C<strong class="soft">o</strong>pyr<strong class="bright">i</strong>ght
        © {{ year }} M<strong class="faint">a</strong>ks<strong class="bold"
          >y</strong
        >m<strong class="dim">i</strong>l<strong class="strong">i</strong>an
        Kl<strong class="soft">e</strong>m<strong class="bright">e</strong
        >ns<strong class="normal">o</strong>w<strong class="faint">i</strong>cz.
        A<strong class="bold">l</strong>l r<strong class="dim">i</strong
        >gh<strong class="strong">t</strong>s r<strong class="soft">e</strong
        >s<strong class="bright">e</strong>rv<strong class="normal">e</strong>d.
      </p>
      <p>
        Cr<strong class="faint">e</strong>at<strong class="bold">e</strong>d
        w<strong class="dim">i</strong>th &lt;<strong class="strong">3</strong>,
        f<strong class="soft">u</strong>el<strong class="bright">e</strong>d by
        obs<strong class="normal">e</strong>ss<strong class="faint">i</strong
        >on, bu<strong class="bold">i</strong>lt w<strong class="dim">i</strong
        >th z<strong class="strong">e</strong>ro t<strong class="soft">e</strong
        >mpl<strong class="bright">a</strong>t<strong class="normal">e</strong
        >s.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;
@use "sass:math" as *;

footer {
  width: 100%;
  background: $black;
  position: relative;
  padding: 250px 0px 5px 0px;
  @include FlexCenter(column);

  #bg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0px 7.5px;
    margin-left: -7.5px;
    pointer-events: none;

    .line {
      height: 40px;
      width: 0.5px;
      background: $white;
      opacity: 17.5%;

      @for $i from 1 through 3 {
        &.anim-#{$i} {
          animation: line-anim-#{$i} calc(random(14) * 1s + 3s) ease infinite;
        }
      }
    }

    .double {
      display: flex;
      gap: 7px;
    }
  }

  a {
    display: block;
    color: $white;
    text-decoration: none;
    font-size: $XXL-size-font;
    font-family: $primary-font;
  }

  p {
    color: $white;
    font-size: $M-size-font;
    font-family: $secondary-font;
    opacity: 70%;

    &.subheading {
      margin-bottom: 200px;
    }
  }

  .txt-container {
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    width: 100%;

    p {
      font-size: $S-size-font;
      opacity: 50%;
    }

    span {
      color: $white;
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
