<script setup></script>

<template>
  <main>
    <p>
      <strong class="normal">I</strong> d<strong class="soft">e</strong>s<strong
        class="dim"
        >i</strong
      >g<strong class="bold">n</strong> exp<strong class="bright">e</strong
      >r<strong class="faint">i</strong>e<strong class="strong">n</strong
      >c<strong class="normal">e</strong>s
      <strong class="soft">t</strong>h<strong class="dim">a</strong>t
      <strong class="bold">a</strong>r<strong class="bright">e</strong> e<strong
        class="faint"
        >a</strong
      >s<strong class="strong">y</strong> t<strong class="normal">o</strong>
      n<strong class="soft">a</strong>v<strong class="dim">i</strong>g<strong
        class="bold"
        >a</strong
      >t<strong class="bright">e</strong> a<strong class="faint">n</strong>d
      v<strong class="strong">i</strong>s<strong class="normal">u</strong
      >a<strong class="soft">l</strong>l<strong class="dim">y</strong> e<strong
        class="bold"
        >n</strong
      >g<strong class="bright">a</strong>g<strong class="faint">i</strong
      >n<strong class="strong">g</strong>.
      <strong class="normal">I</strong> a<strong class="soft">i</strong>m
      <strong class="dim">t</strong>o m<strong class="bold">a</strong>k<strong
        class="bright"
        >e</strong
      >
      d<strong class="faint">i</strong>g<strong class="strong">i</strong
      >t<strong class="normal">a</strong>l p<strong class="soft">r</strong
      >o<strong class="dim">d</strong>u<strong class="bold">c</strong>t<strong
        class="bright"
        >s</strong
      >
      f<strong class="faint">e</strong>e<strong class="strong">l</strong>
      e<strong class="normal">f</strong>f<strong class="soft">o</strong>r<strong
        class="dim"
        >t</strong
      >l<strong class="bold">e</strong>s<strong class="bright">s</strong>,
      e<strong class="faint">n</strong>j<strong class="strong">o</strong
      >y<strong class="normal">a</strong>b<strong class="soft">l</strong>e,
      a<strong class="dim">n</strong>d m<strong class="bold">e</strong>m<strong
        class="bright"
        >o</strong
      >r<strong class="faint">a</strong>b<strong class="strong">l</strong>e
      f<strong class="normal">o</strong>r u<strong class="soft">s</strong
      >e<strong class="dim">r</strong>s.
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
      >e<strong class="bright">s</strong> a<strong class="faint">n</strong>d
      <strong class="normal">a</strong>p<strong class="soft">p</strong>s
      t<strong class="dim">h</strong>a<strong class="bold">t</strong> a<strong
        class="strong"
        >r</strong
      >e s<strong class="bright">m</strong>o<strong class="faint">o</strong
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

  p {
    font-family: $secondary-font;
    color: $white;
    width: 570px;
    font-size: $M-size-font;
  }

  #title {
    width: 100%;
    pointer-events: none;

    img {
      pointer-events: none;
      width: 100%;
    }
  }
}
</style>
