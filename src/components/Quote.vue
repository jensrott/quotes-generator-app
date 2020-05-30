<template>
  <div class="quote">
    <v-card class="mx-auto mb-3" max-width="344">
      <v-card-text>
        <p v-if="quote.quoteText">{{quote.quoteText}}</p>
      </v-card-text>
      <v-card-title>
        <router-link
          v-if="quote.quoteAuthor"
          class="quote__author-link"
          :to="`/author/${quote.quoteAuthor}`"
        >{{quote.quoteAuthor}}</router-link>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    quote: Object
  }
};
</script>

<style lang="scss" scoped>
.quote {
  &__author-link {
    text-decoration: none;
  }
}
</style>