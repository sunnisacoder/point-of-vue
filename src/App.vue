<script setup>
// import "@/assets/reset.css"
import MainNavbar from "./components/MainNavbar.vue";
import MainFooter from "./components/MainFooter.vue";
// import TheIcon from "./components/TheIcon.vue";

</script>

<template>
  <!-- <TheIcon icon="home"/> -->
  <header class="header">
    <MainNavbar />
  </header> 
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
