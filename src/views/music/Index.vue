<script setup lang="ts">
import NlPagination from '@/components/NlPagination.vue'

const url = 'https://avatars.githubusercontent.com/u/156180259?s=200&v=4'

const total = 100
</script>

<template>
  <div class="music-container">
    <div class="music-header">header</div>
    <div class="music-main">
      <div class="music-main-item">
        <div 
          v-for="item in 5" 
          :key="item" 
          class="album-item"
        >
          <div class="album-item-wrapper">
            <el-image :src="url" fit="fit" />
          </div>
        </div>
      </div>

      <div class="music-main-item">
        <div 
        v-for="item in 5" 
        :key="item" 
        class="album-item"
        >
          <el-image :src="url" fit="fit" />
        </div>
      </div>
    </div>
    <div class="music-footer">
      <nl-pagination :total="total" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.music-container {
  height: 100%;
}

.music-header {
  height: 10%;
}

.music-main {
  height: 80%;
  padding: 4%;

  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  $album-item-size: calc(height(parent()) * 0.4);
  $album-item-margin: calc($album-item-size * 0.1);

  .music-main-item {
    display: flex;
    align-items: center;
    width: 100%;
  }

  $album-item-wrapper-size: calc(height(parent()) * 0.6);

  .album-item-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $album-item-wrapper-size;
    width: $album-item-wrapper-size;

    .album-item {
      height: calc($album-item-wrapper-size * 0.8);
      width: calc($album-item-wrapper-size * 0.8);

      .el-image {
        height: 100%;
        width: 100%;
      }
    }
  }
}

.music-footer {
  height: 10%;
}
</style>
