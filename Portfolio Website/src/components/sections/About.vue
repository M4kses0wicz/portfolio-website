<script setup>
import SectionHeader from "../UI/SectionHeader.vue";
</script>

<template>
  <section id="about">
    <SectionHeader title="About me" number="1"></SectionHeader>
    <div class="content-container">
      <div class="about sec">
        <div class="line"></div>
        <span>
          Wh<strong class="faint">o</strong> am
          <strong class="normal">I</strong>?
        </span>
        <p>
          I handle projects end-to-end — from consulting and defining
          requirements with the client, through designing in Figma, to coding
          and delivering the final product. I value efficiency and clarity: the
          client sets the vision, I adapt and make it happen. No unnecessary
          debates, no wasted time — just straightforward collaboration and
          polished results. The client gets exactly what they need, without
          endless back-and-forth, while I get the satisfaction of seeing a
          project move seamlessly from idea to launch. I approach it with the
          same focus — delivering exactly what the client wants, even when they
          don’t fully know themselves.
        </p>
      </div>

      <div class="tech-stack sec">
        <div class="line"></div>
        <span>
          Wh<strong class="dim">a</strong>t do
          <strong class="soft">i</strong> us<strong class="bold">e</strong>?
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

#about {
  width: calc(100svw - 29px);
  margin: 500px 0px 0px 7px;
  padding: 0px 16.5%;

  .content-container {
    width: 100%;
    display: flex;

    .sec {
      width: 50%;
      margin-top: 100px;

      &:first-of-type {
        margin-top: 200px;
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
        margin: 7px 0px 50px 0px;
      }

      p {
        color: $white;
        font-family: $secondary-font;
        font-size: $M-size-font;
        letter-spacing: 2px;
        word-spacing: 3px;
      }
    }
  }
}
</style>
