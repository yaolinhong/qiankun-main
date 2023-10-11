<template>
  <div id="sub-app">
    <div
      v-loading="true"
      element-loading-text="子应用加载中"
      class="loading-mask"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import createMicro from "@/utils/microApp";
onMounted(() => {
  createMicro();
});
</script>
<style lang="scss" scoped>
#sub-app {
  width: 100%;
  height: 100%;
  .loading-mask {
    width: 100%;
    height: 100%;
  }
}
</style>
