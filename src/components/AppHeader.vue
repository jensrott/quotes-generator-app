<template>
  <div class="header">
    <v-app-bar absolute app color="primary" dark>
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 header__logo"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
          <h1 class="header__title">Quotes</h1>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <router-link class="header__link" to="/">
        <v-btn style="margin-right: 1rem">Home</v-btn>
      </router-link>
      <router-link class="header__link" to="/random">
        <v-btn style="margin-right: 1rem">Random</v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.header {
  &__link {
    text-decoration: none;
  }

  &__title {
    color: #fff;
    transition: all 300ms ease-in-out;
    animation: scaling 300ms ease-in-out;
    @media only screen and (max-width: 768px) {
      display: none;
    }

    &:hover {
      color: #272727;
    }
  }

  @keyframes scaling {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>