<template>
  <div class="quotes-list">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <div v-for="quote in quotes" v-bind:key="quote._id">
          <Quote class="quotes-list__animation" v-bind:quote="quote" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Quote from "@/components/Quote";

export default {
  name: "QuotesList",
  props: {
    quotes: Array
  },

  components: {
    Quote
  }
};
</script>

<style lang="scss" scoped>
.quotes-list {
  &__animation {
    transition: all 500ms ease-in-out;
    animation: fade 500ms ease-in-out;
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