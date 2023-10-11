<template>
  <div class="main">
    <el-menu
      class="menu"
      router
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="/home"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="(item, index) in allRoutes.filter((item) => item.name)"
        :key="index"
        :index="`/${String(item.name)}` || ''"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
    <slot>
      <div v-loading="true" class="loading-mask"></div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const allRoutes = router.getRoutes();
console.log("🚀 - router:", router.getRoutes());
onMounted(() => {
  setTimeout(() => {
    // ElMessageBox.alert("我嫩叠", "我嫩叠", {});
  }, 2000);
});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
}
.menu ::v-deep {
  width: 350px;
  height: 100%;
  overflow-y: auto;
}
.loading-mask {
  border: 1px solid red;
  background: red;
  width: 100%;
  height: 100%;
}
</style>
