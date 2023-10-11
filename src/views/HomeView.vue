<template>
  <div class="home">主应用首页</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import createMicro from "@/utils/microApp";
onMounted(() => {
  createMicro();
  console.log("home父组件");
});
</script>
