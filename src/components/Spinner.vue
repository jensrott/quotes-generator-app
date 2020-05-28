<template>
  <div class="spinner">
    <div class="spinner__spinner-item spinner__cube1"></div>
    <div class="spinner__spinner-item spinner__cube2"></div>
    <div class="spinner__spinner-item spinner__cube3"></div>
    <div class="spinner__spinner-item spinner__cube4"></div>
    <div class="spinner__spinner-item spinner__cube5"></div>
    <div class="spinner__spinner-item spinner__cube6"></div>
    <div class="spinner__spinner-item spinner__cube7"></div>
    <div class="spinner__spinner-item spinner__cube8"></div>
    <div class="spinner__spinner-item spinner__cube9"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style lang="scss" scoped>
.spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;

  &__spinner-item {
    width: 33%;
    height: 33%;
    background-color: #1976d2;
    float: left;
    animation: spinning 1.3s infinite ease-in-out;
  }

  &__cube-1 {
    animation-delay: 0.2s;
  }

  &__cube-2 {
    animation-delay: 0.3s;
  }

  &__cube-3 {
    animation-delay: 0.4s;
  }

  &__cube-4 {
    animation-delay: 0.1s;
  }

  &__cube-5 {
    animation-delay: 0.2s;
  }
  &__cube-6 {
    animation-delay: 0.3s;
  }

  &__cube-7 {
    animation-delay: 0s;
  }

  &__cube-8 {
    animation-delay: 0.1s;
  }

  &__cube-9 {
    animation-delay: 0.2s;
  }

  @keyframes spinning {
    0%,
    70%,
    100% {
      transform: scale3D(1, 1, 1);
    }
    35% {
      transform: scale3D(0, 0, 1);
    }
  }
}
</style>