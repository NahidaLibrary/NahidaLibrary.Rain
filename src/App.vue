<script setup lang="ts">
import NlHeader from '@/components/NlHeader.vue'
import NlFooter from '@/components/NlFooter.vue'
</script>

<template>
  <el-container>
    <el-header>
      <nl-header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <nl-footer />
    </el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.el-container {
  height: 100%;
}
</style>
