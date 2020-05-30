<template>
  <div class="random-quote">
    <Quote class="random-quote__animation" v-bind:quote="randomQuote" />
    <!-- {{randomQuote}} -->
    <div class="random-quote__btn-container">
      <v-btn @click="getRandomQuote()" color="primary">Reload</v-btn>
    </div>
    <div v-if="loading">
      <Spinner />
    </div>
    <p class="random-quote__error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Quote from "@/components/Quote";
import Spinner from "@/components/Spinner";
import quotesTypes from "@/store/modules/quotes/types";

export default {
  name: "RandomQuote",
  components: {
    Quote,
    Spinner
  },

  computed: {
    randomQuote() {
      return this.$store.getters["randomQuote"];
    },
    loading() {
      return this.$store.getters["loading"];
    },
    error() {
      return this.$store.getters["error"];
    }
  },

  created() {
    this.getRandomQuote();
  },

  methods: {
    getRandomQuote() {
      this.$store.dispatch(quotesTypes.FETCH_RANDOM_QUOTE);
    }
  }
};
</script>

<style lang="scss" scoped>
.random-quote {
  height: 100vh;
  margin-top: 10%;

  @media only screen and (max-width: 768px) {
    margin-top: 20%;
  }

  &__btn-container {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }

  &__animation {
    transition: all 500ms ease-in-out;
    animation: fade 500ms ease-in-out;
  }

  &__error {
    text-align: center;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>