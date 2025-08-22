<script setup></script>

<template>
  <main>
    <p>
      <strong class="normal">I</strong> s<strong class="soft">p</strong>e<strong
        class="dim"
        >c</strong
      >i<strong class="bold">a</strong>l<strong class="bright">i</strong
      >z<strong class="faint">e</strong> i<strong class="strong">n</strong>
      U<strong class="normal">I</strong>/<strong class="soft">U</strong>X
      d<strong class="dim">e</strong>s<strong class="bold">i</strong>g<strong
        class="bright"
        >n</strong
      >
      f<strong class="faint">o</strong>r w<strong class="strong">e</strong
      >b<strong class="normal">s</strong>i<strong class="soft">t</strong
      >e<strong class="dim">s</strong> a<strong class="bold">n</strong>d
      d<strong class="bright">i</strong>g<strong class="faint">i</strong
      >t<strong class="strong">a</strong>l p<strong class="normal">l</strong
      >a<strong class="soft">t</strong>f<strong class="dim">o</strong>r<strong
        class="bold"
        >m</strong
      >s. <strong class="bright">I</strong> c<strong class="faint">r</strong
      >e<strong class="strong">a</strong>t<strong class="normal">e</strong>
      i<strong class="soft">n</strong>t<strong class="dim">u</strong>i<strong
        class="bold"
        >t</strong
      >i<strong class="bright">v</strong>e u<strong class="faint">s</strong
      >e<strong class="strong">r</strong> j<strong class="normal">o</strong
      >u<strong class="soft">r</strong>n<strong class="dim">e</strong>y<strong
        class="bold"
        >s</strong
      >
      t<strong class="strong">h</strong>a<strong class="normal">t</strong>
      g<strong class="soft">u</strong>i<strong class="dim">d</strong>e u<strong
        class="bold"
        >s</strong
      >e<strong class="bright">r</strong>s s<strong class="faint">e</strong
      >a<strong class="strong">m</strong>l<strong class="normal">e</strong
      >s<strong class="soft">s</strong>l<strong class="dim">y</strong> t<strong
        class="bold"
        >h</strong
      >r<strong class="bright">o</strong>u<strong class="faint">g</strong>h
      e<strong class="strong">v</strong>e<strong class="normal">r</strong>y
      i<strong class="soft">n</strong>t<strong class="dim">e</strong>r<strong
        class="bold"
        >a</strong
      >c<strong class="bright">t</strong>i<strong class="faint">o</strong>n.
    </p>
    <div id="title">
      <img src="../../assets/Klemensowicz.svg" alt="" />
    </div>
    <p>
      <strong class="bright">I</strong> c<strong class="faint">r</strong
      >e<strong class="normal">a</strong>t<strong class="soft">e</strong>
      w<strong class="dim">e</strong>b<strong class="bold">s</strong>i<strong
        class="strong"
        >t</strong
      >e<strong class="bright">s</strong> t<strong class="dim">h</strong
      >a<strong class="bold">t</strong> a<strong class="strong">r</strong>e
      s<strong class="bright">m</strong>o<strong class="faint">o</strong
      >t<strong class="normal">h</strong>, i<strong class="soft">n</strong
      >t<strong class="dim">u</strong>i<strong class="bold">t</strong>i<strong
        class="strong"
        >v</strong
      >e, a<strong class="bright">n</strong>d e<strong class="faint">n</strong
      >j<strong class="normal">o</strong>y<strong class="soft">a</strong
      >b<strong class="dim">l</strong>e t<strong class="bold">o</strong>
      u<strong class="strong">s</strong>e. M<strong class="bright">y</strong>
      f<strong class="faint">o</strong>c<strong class="normal">u</strong>s
      i<strong class="soft">s</strong> o<strong class="dim">n</strong> m<strong
        class="bold"
        >a</strong
      >k<strong class="strong">i</strong>n<strong class="bright">g</strong>
      s<strong class="faint">u</strong>r<strong class="normal">e</strong>
      e<strong class="soft">v</strong>e<strong class="dim">r</strong>y i<strong
        class="bold"
        >n</strong
      >t<strong class="strong">e</strong>r<strong class="bright">a</strong
      >c<strong class="faint">t</strong>i<strong class="normal">o</strong>n
      f<strong class="soft">e</strong>e<strong class="dim">l</strong>s n<strong
        class="bold"
        >a</strong
      >t<strong class="strong">u</strong>r<strong class="bright">a</strong>l
      a<strong class="faint">n</strong>d e<strong class="normal">v</strong
      >e<strong class="soft">r</strong>y i<strong class="dim">n</strong>t<strong
        class="bold"
        >e</strong
      >r<strong class="strong">f</strong>a<strong class="bright">c</strong>e
      l<strong class="faint">o</strong>o<strong class="normal">k</strong>s
      c<strong class="soft">l</strong>e<strong class="dim">a</strong>n a<strong
        class="bold"
        >n</strong
      >d p<strong class="strong">o</strong>l<strong class="bright">i</strong
      >s<strong class="faint">h</strong>e<strong class="normal">d</strong>.
    </p>
  </main>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

main {
  width: calc(100svw - 29px);
  margin-left: 7px;
  @include FlexCenter(column);
  margin-top: clamp(70px, 17.5vh, 21vh);

  p {
    font-family: $secondary-font;
    color: $white;
    width: 570px;
    font-size: $M-size-font;
    align-self: flex-start;

    &:nth-of-type(2) {
      align-self: flex-end;
      text-align: right;
      margin-top: 10px;
    }
  }

  #title {
    width: 100%;
    pointer-events: none;
    margin: 25px 0px;

    img {
      pointer-events: none;
      width: 100%;
    }
  }
}
</style>
