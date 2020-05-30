<template>
  <div class="author-quotes">
    <QuotesList v-bind:quotes="allQuotes" />
    <div v-if="loading">
      <Spinner />
    </div>
    <p class="author-quotes__error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import QuotesList from "@/components/QuotesList";
import Spinner from "@/components/Spinner";
import quotesTypes from "@/store/modules/quotes/types";

export default {
  name: "AuthorQuotes",

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

  components: {
    QuotesList,
    Spinner
  },

  created() {
    this.getAuthorQuotes();
  },

  methods: {
    getAuthorQuotes() {
      const authorName = this.$route.params.authorName;
      this.$store.dispatch(quotesTypes.FETCH_QUOTES, authorName);
    }
  }
};
</script>

<style lang="scss" scoped>
.author-quotes {
  height: 100vh;
  margin-top: 10%;

  @media only screen and (max-width: 768px) {
    margin-top: 20%;
  }

  &__quotes {
    text-align: center;
  }
}
</style>