<template>
  <div class="home">
    <form @submit.prevent="getQuotes()">
      <v-text-field
        placeholder="e.g. Charles Bukowski"
        label="Search an author"
        v-model="searchTerm"
      ></v-text-field>
    </form>
    <div v-if="loading">
      <Spinner />
    </div>
    <p class="home__error" v-if="error">{{error}}</p>
    <QuotesList v-bind:quotes="allQuotes" />
  </div>
</template>

<script>
import QuotesList from "@/components/QuotesList.vue";
import Spinner from "@/components/Spinner.vue";
import quotesTypes from "@/store/modules/quotes/types";

export default {
  name: "Home",

  data() {
    return {
      searchTerm: ""
    };
  },

  computed: {
    allQuotes() {
      return this.$store.getters["allQuotes"];
    },
    loading() {
      return this.$store.getters["loading"];
    },
    error() {
      return this.$store.getters["error"];
    }
  },

  methods: {
    getQuotes() {
      this.$store.dispatch(quotesTypes.FETCH_QUOTES, this.searchTerm);
    }
  },

  components: {
    QuotesList,
    Spinner
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  margin-top: 10%;

  @media only screen and (max-width: 768px) {
    margin-top: 20%;
  }

  &__error {
    text-align: center;
  }
}
</style>
