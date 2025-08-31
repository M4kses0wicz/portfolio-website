<script setup>
import SectionHeader from "../UI/SectionHeader.vue";

function github() {
  window.open("https://github.com/M4kses0wicz", "_blank");
}

function ekuza() {
  window.open("https://ekuzaestates.co.uk", "_blank");
}

function bistro() {
  window.open(
    "https://github.com/M4kses0wicz/Bistro-u-Mocnych.github.io",
    "_blank"
  );
}
</script>

<template>
  <section id="experience">
    <SectionHeader title="Experience" number="2"></SectionHeader>
    <div class="container">
      <div class="wrapper">
        <div class="txt">
          <p>
            <strong class="normal">{</strong> Wh<strong class="soft">a</strong>t
            I'<strong class="bright">v</strong>e d<strong class="normal"
              >o</strong
            >n<strong class="faint">e</strong> <strong class="bright">}</strong>
          </p>
        </div>
      </div>
      <div class="wrapper">
        <ol>
          <li class="mk">
            <span
              >[<strong class="normal">i</strong>n pr<strong class="soft"
                >o</strong
              >gr<strong class="normal">e</strong>ss]</span
            >Br<strong class="bright">i</strong>st<strong class="bright"
              >a</strong
            >nt inv<strong class="bold">e</strong>stm<strong class="strong"
              >e</strong
            >nts - W<strong class="normal">e</strong>bs<strong class="soft"
              >i</strong
            >te
          </li>
          <li class="plastmet">
            <span
              >[A<strong class="normal">U</strong>G
              <strong class="soft">2</strong>0<strong class="bright">2</strong
              >5]</span
            >Pl<strong class="bright">a</strong>st-M<strong class="bold"
              >e</strong
            >t A<strong class="dim">u</strong>tom<strong class="strong"
              >o</strong
            >t<strong class="normal">i</strong>ve S<strong class="soft"
              >y</strong
            >st<strong class="bright">e</strong>ms - Int<strong class="bright"
              >e</strong
            >rn<strong class="bold">s</strong>h<strong class="dim">i</strong>p
          </li>
          <li class="motorola">
            <span
              >[A<strong class="strong">P</strong>R
              <strong class="normal">2</strong>0<strong class="soft">2</strong
              >5]</span
            >M<strong class="bright">o</strong>t<strong class="faint">o</strong
            >r<strong class="bold">o</strong>la S<strong class="dim">o</strong
            >l<strong class="strong">u</strong>t<strong class="normal">i</strong
            >ons - Int<strong class="soft">e</strong>rn<strong class="bright"
              >s</strong
            >h<strong class="bright">i</strong>p
          </li>
          <li @click="ekuza" class="ekuza">
            <span
              >[F<strong class="bold">E</strong>B-M<strong class="dim">A</strong
              >R <strong class="strong">2</strong>0<strong class="normal"
                >2</strong
              >5]</span
            >Ek<strong class="soft">u</strong>za Est<strong class="bright"
              >a</strong
            >t<strong class="bright">e</strong>s L<strong class="bold">t</strong
            >d. - W<strong class="dim">e</strong>bs<strong class="strong"
              >i</strong
            >te
          </li>
          <li @click="bistro" class="bistro">
            <span
              >[J<strong class="normal">A</strong>N
              <strong class="soft">2</strong>0<strong class="bright">2</strong
              >4]</span
            >B<strong class="bright">i</strong>str<strong class="bold"
              >o</strong
            >
            u M<strong class="bright">o</strong>cn<strong class="strong"
              >y</strong
            >ch - W<strong class="normal">e</strong>bs<strong class="soft"
              >i</strong
            >te
          </li>
          <li class="zs3olk">
            <span
              >[<strong class="bright">2</strong>0<strong class="faint"
                >2</strong
              >2 - n<strong class="bold">o</strong>w]</span
            >T<strong class="bright">e</strong>chn<strong class="strong"
              >i</strong
            >c<strong class="normal">a</strong>l c<strong class="soft">o</strong
            >ll<strong class="bright">e</strong>ge w<strong class="bright"
              >i</strong
            >th a sp<strong class="bold">e</strong>c<strong class="dim"
              >i</strong
            >al<strong class="strong">i</strong>s<strong class="normal"
              >a</strong
            >t<strong class="soft">i</strong>on
            <strong class="bright">i</strong>n pr<strong class="bright"
              >o</strong
            >gr<strong class="bold">a</strong>mm<strong class="bright">i</strong
            >ng
          </li>
          <li @click="github" class="github">
            <span
              >[s<strong class="strong">i</strong>n<strong class="normal"
                >c</strong
              >e <strong class="soft">2</strong>0<strong class="bright"
                >2</strong
              >2]</span
            >M<strong class="bold">a</strong>ny <strong class="dim">o</strong>f
            my <strong class="strong">o</strong>wn des<strong class="normal"
              >i</strong
            >gns, an<strong class="soft">i</strong>m<strong class="bright"
              >a</strong
            >t<strong class="bright">i</strong>ons
            <strong class="bold">a</strong>nd oth<strong class="dim">e</strong>r
            w<strong class="strong">o</strong>rks
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

#experience {
  width: calc(100svw - 29px);
  margin: 500px 0px 500px 7px;
  padding: 0px 16.5%;

  .container {
    width: 100%;
    margin-top: 75px;
    display: flex;

    .wrapper {
      width: 50%;
      display: flex;
      gap: 7px;

      div {
        width: 50%;
        // height: 100%;
      }
    }

    .txt {
      // border: red 1px dotted;
      height: 12%;
      display: flex;
      align-items: end;

      animation: anim ease forwards;
      animation-timeline: view();
      animation-range: entry 10% cover 150%;
    }

    p {
      color: $white;
      font-family: $secondary-font;
      font-size: $L-size-font;
    }

    ol {
      list-style-type: none;

      li {
        color: $white;
        font-family: $secondary-font;
        font-size: $M-size-font;
        opacity: 90%;
        margin-top: 7px;
        width: fit-content;
        cursor: pointer;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          transform: translate(-150%, -40%);
          width: 100px;
          height: 100px;
          border: 1px $white solid;
          background-size: cover;
          filter: grayscale(100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
          pointer-events: none;
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          transform: translateY(-100%);
          mix-blend-mode: difference;
          width: 101%;
          height: 0px;
          background: $white;
          transition: 0.2s;
          z-index: 1;
        }

        &:hover::after {
          height: 20px;
        }

        &:hover::before {
          opacity: 1;
        }

        &.mk::before {
          background-image: url(../../assets/KM-logo.png);
        }

        &.plastmet::before {
          background-image: url(../../assets/plastmet.png);
        }

        &.motorola::before {
          background-image: url(../../assets/motorola.png);
        }

        &.ekuza::before {
          background-image: url(../../assets/ekuza.jpeg);
        }

        &.bistro::before {
          background-image: url(../../assets/bistro-u-mocnych.png);
        }

        &.zs3olk::before {
          background-image: url(../../assets/zs3olk.png);
        }

        &.github::before {
          background-image: url(../../assets/KM-logo.png);
        }

        span {
          margin-right: 10px;
          filter: brightness(500%);
        }
      }
    }
  }
}

@keyframes anim {
  to {
    height: 100%;
  }
}
</style>
