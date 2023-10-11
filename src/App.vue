<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/sub-app-name">sub-app-name</router-link>
  </nav> -->
  <lay-out>
    <router-view />
  </lay-out>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import LayOut from "./components/LayOut.vue";
onMounted(() => {
  console.log("hhhherere");
});
</script>

<style lang="scss">
@import "@/assets/preset.css";
#app {
  margin: 0;
  height: 100%;
}
</style>
