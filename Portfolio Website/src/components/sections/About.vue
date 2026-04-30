<script setup>
import SectionHeader from "../UI/SectionHeader.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

const line = ref();
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(line.value, {
    width: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: line.value,
      start: "top 100%",
      end: "bottom 20%",
      // markers: true,
    },
  });
});

const line2 = ref();
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(line2.value, {
    width: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: line2.value,
      start: "top 100%",
      end: "bottom 20%",
      // markers: true,
    },
  });
});
</script>

<template>
  <section id="about">
    <SectionHeader title="About me" number="1"></SectionHeader>
    <div class="content-container">
      <div class="about sec">
        <div class="line" ref="line2"></div>
        <span>
          Wh<strong class="faint">o</strong> am
          <strong class="normal">I</strong>?
        </span>
        <p>
          I des<strong class="bright">i</strong>gn
          <strong class="normal">a</strong>nd bu<strong class="soft">i</strong
          >ld m<strong class="faint">o</strong>d<strong class="bold">e</strong
          >rn w<strong class="dim">e</strong>b exp<strong class="strong"
            >e</strong
          >ri<strong class="bright">e</strong>nc<strong class="normal">e</strong
          >s th<strong class="soft">a</strong>t ar<strong class="faint"
            >e</strong
          >
          cl<strong class="bold">e</strong>an, p<strong class="dim">o</strong
          >l<strong class="strong">i</strong>sh<strong class="bright">e</strong
          >d, and bu<strong class="normal">i</strong>lt t<strong class="soft"
            >o</strong
          >
          pe<strong class="faint">r</strong>f<strong class="bold">o</strong>rm.
          Fr<strong class="dim">o</strong>m def<strong class="strong">i</strong
          >n<strong class="bright">i</strong>ng id<strong class="normal"
            >e</strong
          >as w<strong class="soft">i</strong>th cl<strong class="faint"
            >i</strong
          >ents t<strong class="bold">o</strong> des<strong class="dim"
            >i</strong
          >gn<strong class="strong">i</strong>ng and del<strong class="bright"
            >i</strong
          >v<strong class="normal">e</strong>r<strong class="soft">i</strong>ng
          the f<strong class="faint">i</strong>n<strong class="bold">a</strong>l
          pr<strong class="dim">o</strong>d<strong class="strong">u</strong>ct,
          I k<strong class="bright">e</strong>ep the pr<strong class="normal"
            >o</strong
          >c<strong class="soft">e</strong>ss s<strong class="faint">i</strong
          >mpl<strong class="bold">e</strong> and eff<strong class="dim"
            >i</strong
          >c<strong class="strong">i</strong>ent, del<strong class="bright"
            >i</strong
          >v<strong class="normal">e</strong>r<strong class="soft">i</strong>ng
          ex<strong class="faint">a</strong>ctl<strong class="bold">y</strong>
          wh<strong class="dim">a</strong>t the cl<strong class="strong"
            >i</strong
          >ent w<strong class="bright">a</strong>nts, ev<strong class="normal"
            >e</strong
          >n wh<strong class="soft">e</strong>n th<strong class="faint"
            >e</strong
          >y d<strong class="bold">o</strong>n't f<strong class="dim">u</strong
          >ll<strong class="strong">y</strong> kn<strong class="bright"
            >o</strong
          >w th<strong class="normal">e</strong>ms<strong class="soft">e</strong
          >lv<strong class="faint">e</strong>s.
        </p>
      </div>

      <div class="tech-stack sec">
        <div class="line" ref="line"></div>
        <span>
          Wh<strong class="dim">a</strong>t do
          <strong class="soft">I</strong> us<strong class="bold">e</strong>?
        </span>
        <div class="wrapper">
          <div class="left-sec">
            <p>
              { t<strong class="soft">e</strong>ch st<strong class="bright"
                >a</strong
              >ck }
            </p>
          </div>
          <div class="right-sec">
            <ol>
              <li>
                R<strong class="bold">e</strong>a<strong class="normal"
                  >c</strong
                ><strong class="bright">t</strong>.<strong class="faint"
                  >j</strong
                >s
              </li>
              <li>
                V<strong class="normal">u</strong>e.<strong class="normal"
                  >j</strong
                >s
              </li>
              <li>
                H<strong class="bold">T</strong>M<strong class="dim">L</strong>
              </li>
              <li>C<strong class="strong">S</strong>S</li>
              <li>
                S<strong class="bright">C</strong>S<strong class="soft"
                  >S</strong
                >
              </li>
              <li><strong class="normal">J</strong>S</li>
              <li>
                F<strong class="faint">i</strong>g<strong class="bold">m</strong
                >a
              </li>
              <li class="sm">
                A<strong class="dim">n</strong>d
                <strong class="strong">a</strong>n<strong class="bright"
                  >y</strong
                >th<strong class="soft">i</strong>ng
                <strong class="normal">e</strong>l<strong class="faint"
                  >s</strong
                >e u n<strong class="bold">e</strong
                ><strong class="dim">e</strong>d — j<strong class="strong"
                  >u</strong
                >st g<strong class="bright">i</strong>ve me
                <strong class="soft">7</strong> d<strong class="normal"
                  >a</strong
                >y<strong class="faint">s</strong>.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

#about {
  width: calc(100svw - 29px);
  margin: 500px 0px 0px 7px;
  @include MaxWidth(1550px) {
    margin: 350px 0px 0px 7px;
  }

  padding: 0px 16.5%;
  @include MaxWidth(590px) {
    padding: 0px;
  }

  // @include MaxWidth(1550px) {
  //   padding: 0;
  // }

  .content-container {
    width: 100%;
    display: flex;

    @include MaxWidth(800px) {
      flex-direction: column;
    }

    .sec {
      width: 50%;
      @include MaxWidth(800px) {
        width: 100%;
      }
      margin-top: 100px;

      &:first-of-type {
        margin-top: 200px;
        @include MaxWidth(800px) {
          margin-top: 100px;
        }
      }

      .line {
        width: 100%;
        background: $white;
        height: 7px;
      }

      span {
        display: block;
        color: $white;
        font-family: $secondary-font;
        font-size: $S-size-font;
        margin: 14px 0px 35px 0px;
      }

      p {
        color: $white;
        font-family: $secondary-font;
        font-size: $M-size-font;
        letter-spacing: 2px;
        word-spacing: 3px;

        @include MaxWidth(1370px) {
          font-size: 16px;
        }

        @include MaxWidth(990px) {
          font-size: 13px;
        }

        @include MaxWidth(800px) {
          font-size: 15px;
        }
      }
    }

    .wrapper {
      display: flex;
      width: 100%;
      height: 287px;
      gap: 9px;

      .left-sec {
        display: flex;
        justify-content: end;
        align-items: end;
        height: 13.25%;

        animation: anim ease forwards;
        animation-timeline: view();
        animation-range: entry 10% cover 150%;

        p {
          font-size: $L-size-font;

          @include MaxWidth(1700px) {
            font-size: 20px;
          }

          @include MaxWidth(1370px) {
            font-size: 15px;
            letter-spacing: 0px;
          }

          @include MaxWidth(990px) {
            font-size: 12px;
          }

          @include MaxWidth(770px) {
            font-size: 20px;
          }
          @include MaxWidth(590px) {
            font-size: 15px;
          }
        }
      }

      div {
        width: 50%;

        ol {
          list-style-type: none;
          margin-left: 2px;

          li {
            color: $white;
            font-family: $secondary-font;
            font-size: $L-size-font;
            margin-top: 12px;

            &.sm {
              font-size: $M-size-font;
              opacity: 50%;

              @include MaxWidth(1370px) {
                font-size: 15px;
              }
            }

            @include MaxWidth(1370px) {
              font-size: 20px;
            }
          }
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
