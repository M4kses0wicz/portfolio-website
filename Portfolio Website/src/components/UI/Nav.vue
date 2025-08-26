<script setup></script>

<template>
  <nav>
    <div class="lang">
      <p>PL</p>
      <p><strong class="normal">/</strong></p>
      <p class="active">EN</p>
    </div>
    <div class="logo"></div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;

nav {
  position: fixed;
  color: $white;
  font-family: $secondary-font;
  margin: 0px 7px;
  display: flex;
  justify-content: space-between;
  width: calc(100svw - 29px);

  .lang {
    display: flex;

    p {
      margin: 5px;

      &.active {
        filter: brightness(200%);
      }

      &:not(&.active) {
        opacity: 75%;
      }

      &:not(&:nth-of-type(2)) {
        cursor: pointer;
      }
    }
  }

  .logo {
    height: 40px;
    width: 40px;
    background: url(../../assets/KM-logo.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    margin-right: 5px;
    opacity: 70%;
  }
}
</style>
