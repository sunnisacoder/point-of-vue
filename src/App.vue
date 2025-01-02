<script setup>
import MainNavbar from "./components/MainNavbar.vue";
import MainFooter from "./components/MainFooter.vue";

</script>

<template>
  <MainNavbar />
  <router-view />
  <MainFooter />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 10px;
}
</style>
