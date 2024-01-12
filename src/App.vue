<script setup lang="ts">
import NHeader from '@/components/NHeader.vue'
import NFooter from '@/components/NFooter.vue'
</script>

<template>
  <el-container>
    <el-header>
      <n-header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <n-footer />
    </el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.el-container {
  height: 100%;
}
</style>
