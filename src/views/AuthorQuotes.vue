<template>
  <div class="author-quotes">
    <QuotesList v-bind:quotes="quotes" />
    <div v-if="loading">
      <Spinner />
    </div>
    <p class="author-quotes__error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import API from "../API";
import QuotesList from "@/components/QuotesList";
import Spinner from "@/components/Spinner";

export default {
  name: "AuthorQuotes",

  data() {
    return {
      quotes: [],
      error: "",
      loading: false
    };
  },

  components: {
    QuotesList,
    Spinner
  },

  mounted() {
    this.getAuthorQuotes();
  },

  methods: {
    getAuthorQuotes() {
      const authorName = this.$route.params.authorName;
      this.loading = true;
      API.search(authorName)
        .then(quotes => {
          this.quotes = quotes;
          this.loading = false;
        })
        .catch(err => {
          this.error = err;
          this.loading = false;
        });
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