<template>
  <v-app>
    <AppHeader />
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    Home
  }
};
</script>
