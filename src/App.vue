<script setup>
import MainNavbar from "./components/MainNavbar.vue";
import MainFooter from "./components/MainFooter.vue";

</script>

<template>
  <MainNavbar />
  <div class="outer">
    <router-view />
  </div>
  <MainFooter />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // padding: 0 10px;
}
.outer{
  padding: 0 20px;
}
</style>
