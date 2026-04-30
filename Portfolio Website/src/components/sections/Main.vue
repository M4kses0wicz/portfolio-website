<script setup>
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
</script>

<template>
  <main>
    <div class="main-txt-container">
      <div class="wrapper">
        <p class="p">
          <strong class="bright">U</strong>I/<strong class="normal">U</strong
          ><strong class="soft">X</strong> Des<strong class="faint">i</strong
          >gn<strong class="bold">e</strong>r
        </p>
        <div id="title">
          <img src="../../assets/Klemensowicz.svg" alt="klemensowicz" />
          <img src="../../assets/Klemensowicz.png" alt="klemen" class="alt1" />
          <img
            src="../../assets/Klemensowicz-2.png"
            alt="sowicz"
            class="alt2"
          />
        </div>
        <p class="p">
          <strong class="dim">F</strong>r<strong class="strong">o</strong
          >nt-<strong class="bright">e</strong>nd W<strong class="normal"
            >e</strong
          >b Dev<strong class="soft">e</strong>l<strong class="faint">o</strong
          >p<strong class="bold">e</strong>r
        </p>
        <p class="p-alt">
          Fr<strong class="bright">o</strong>nt<strong class="normal">e</strong
          >nd W<strong class="soft">e</strong>b Dev<strong class="faint"
            >e</strong
          >l<strong class="bold">o</strong>p<strong class="dim">e</strong>r
          <strong class="strong">&</strong> U<strong class="bright">I</strong
          >/U<strong class="normal">X</strong> Des<strong class="soft">i</strong
          >gn<strong class="faint">e</strong>r
        </p>
      </div>
    </div>
    <div class="container">
      <div class="terminal">
        <div class="line">
          <p>
            <strong class="time">[{{ h }}:{{ m }}:{{ s }}]</strong> Init secure
            sequence... packets 82345,12038,54219,30587
          </p>
        </div>

        <div class="line">
          <p>
            <strong class="time"
              >[{{ h }}:{{ m }}:{{ s != 60 ? s + 1 : s }}]</strong
            >
            Connected DESIGN_CORE_SERVER_777 | Profile: Maksymilian Klemensowicz
          </p>
        </div>

        <div class="line">
          <p>
            <strong class="time"
              >[{{ h }}:{{ m }}:{{ s != 60 ? s + 1 : s }}]</strong
            >
            DATA: 4fjdK2sQhXc3Bz1yLeT0VwM8aR9qN7u | P8nYlC5zJqH1aE...
          </p>
        </div>

        <div class="line">
          <p>
            <strong class="time"
              >[{{ h }}:{{ m }}:{{ s != 60 ? s + 1 : s }}]</strong
            >
            Front-end Dev/UI-UX Designer | age: 18 | Verification
            <strong class="green">OK</strong>
          </p>
        </div>

        <div class="line">
          <p>
            <strong class="time"
              >[{{ h }}:{{ m }}:{{ s != 60 ? s + 2 : s }}]</strong
            >
            HARVEST: 2847 browser, 156 coords, 73 shopping cats
          </p>
        </div>

        <div class="line">
          <p>
            <strong class="time"
              >[{{ h }}:{{ m }}:{{ s != 60 ? s + 2 : s }}]</strong
            >
            SOLD to KNOWN_CORP_4471 for $3.47 via ADTECH_BROKER
          </p>
        </div>

        <div class="line">
          <p>
            <strong class="time"
              >[{{ h }}:{{ m }}:{{ s != 60 ? s + 2 : s }}]</strong
            >
            AD-ENGINE: Personalized targeting
            <strong class="green">ACTIVE</strong>
          </p>
        </div>

        <div class="line">
          <p>
            <strong class="time"
              >[{{ h }}:{{ m }}:{{ s != 60 ? s + 3 : s }}]</strong
            >
            Session terminated. User unaware.
          </p>
        </div>
      </div>
      <div class="wrapper">
        <p>
          E<strong class="bold">x</strong>pl<strong class="soft">o</strong
          ><strong class="normal">r</strong>e
        </p>
        <div class="arrow">
          <div class="line"></div>
          <div class="triangle"></div>
        </div>
      </div>
      <div class="mail">
        <p>
          C<strong class="soft">o</strong
          ><strong class="strong">n</strong>ta<strong class="normal">c</strong>t
          m<strong class="normal">e</strong>
        </p>
        <a href="mailto:contact@klemensowicz.pl" title="Email me"
          >c<strong class="bright">o</strong>n<strong class="strong">t</strong
          >a<strong class="bold">c</strong>t<strong class="bright">@</strong
          >k<strong class="strong">l</strong>e<strong class="bold">m</strong
          >e<strong class="bright">n</strong>s<strong class="strong">o</strong
          >w<strong class="bold">i</strong>c<strong class="bright">z</strong
          >.<strong class="strong">p</strong>l</a
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;
@use "sass:math" as *;

main {
  width: calc(100svw - 29px);
  margin-left: 7px;
  @include FlexCenter(column);
  height: calc(100svh - 15px);

  p {
    font-family: $secondary-font;
    color: $white;
    font-size: $M-size-font;
  }

  .p {
    font-size: $L-size-font !important;
  }

  .main-txt-container {
    width: 100%;
    @include FlexCenter(column);
    height: 75%;
    padding-top: 5%;

    .wrapper {
      width: 100%;
      @include FlexCenter(column);

      p {
        font-family: $secondary-font;
        color: $white;
        width: 570px;
        font-size: $M-size-font;
        align-self: flex-start;

        @include MaxWidth(1345px) {
          font-size: 15px;
        }
        @include MaxWidth(990px) {
          font-size: 13px;
        }
        @include MaxWidth(620px) {
          font-size: 11px;
          width: 350px;
        }

        @include MaxWidth(470px) {
          display: none;
        }
      }

      p:nth-of-type(2) {
        align-self: flex-end;
        text-align: right;
        margin-top: 10px;

        @include MaxWidth(1345px) {
          margin: 0px;
        }
      }

      .p-alt {
        display: none;
        @include MaxWidth(470px) {
          display: block !important;
          width: 100% !important;
          text-align: center !important;
          font-size: 15px !important;
          margin-top: 20px !important;
        }
      }
    }
  }

  #title {
    width: 100%;
    pointer-events: none;
    margin: 25px 0px;

    @include MaxWidth(1345px) {
      margin: 5px 0px;
    }

    img {
      pointer-events: none;
      width: 100%;
      @include MaxWidth(470px) {
        display: none;
      }
    }

    .alt1 {
      margin-bottom: 5px;
    }

    .alt1,
    .alt2 {
      width: 100%;
      pointer-events: none;
      display: none;

      @include MaxWidth(470px) {
        display: block;
      }
    }
  }

  .container {
    width: 100%;
    @include FlexCenter(row);
    gap: 7px;
    height: 25%;

    div {
      width: 33.333%;
      display: flex;
      flex-direction: column;

      &.terminal {
        color: $white;
        height: 100%;
        display: flex;
        justify-content: end;

        .line {
          flex-direction: row;
          width: 100%;
          visibility: hidden;
          position: fixed;

          @for $i from 1 through 8 {
            &:nth-of-type(#{$i}) {
              animation: appear 0.5s ease forwards;
              @if ($i <= 4) {
                animation-delay: (3.5 + ($i * 0.15)) * 1s;
              } @else {
                animation-delay: (4.5 + ($i * 0.15)) * 1s;
              }
            }
          }

          p {
            font-size: $S-size-font;
            opacity: 50%;

            @include MaxWidth(1900px) {
              font-size: 10px;
            }
            @include MaxWidth(1575px) {
              font-size: 9px;
              margin-top: 1px;
            }
            @include MaxWidth(1415px) {
              font-size: 8.5px;
              margin-top: 1px;
            }
            @include MaxWidth(1345px) {
              word-spacing: -3.5px;
            }

            strong.time {
              color: #fff;
              margin-right: 5px;
              @include MaxWidth(1575px) {
                margin-right: 0px;
              }
            }
            @include MaxWidth(770px) {
              display: none;
            }
          }
        }
      }

      &.wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;

        p {
          text-align: center !important;
          width: 100%;

          @include MaxWidth(1245px) {
            font-size: 15px;
          }
        }
      }

      &.mail {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        text-align: right;

        a {
          text-decoration: none;
          color: $white;
          font-size: $M-size-font;
          font-family: $secondary-font;
          // margin-bottom: 10px;

          @include MaxWidth(800px) {
            font-size: 13px;
          }

          @include MaxWidth(620px) {
            position: absolute;
            bottom: 10px;
            right: 17px;
          }
        }

        p {
          @include MaxWidth(620px) {
            position: absolute;
            bottom: 25px;
            right: 17px;
          }
        }
      }

      // p {
      //   width: 100%;
      // }

      .arrow {
        margin-top: 25px;
        width: 100%;
        @include FlexCenter(column);

        .line {
          height: 70px;
          width: 1px;
          background: $white;
          opacity: 75%;

          animation: line-anim 4s ease infinite;
        }

        @include MaxWidth(1245px) {
          margin-top: 5px;
          scale: 75%;
        }

        .triangle {
          height: 8px;
          width: 8px;
          background: $white;
          opacity: 75%;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
        }
      }
    }
  }
}

@keyframes line-anim {
  50% {
    height: 80px;
  }
}

@keyframes appear {
  1% {
    position: relative;
  }
  100% {
    visibility: visible;
    position: relative;
  }
}
</style>
