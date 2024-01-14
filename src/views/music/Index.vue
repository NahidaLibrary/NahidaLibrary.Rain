<script setup lang="ts">
import NlPagination from '@/components/NlPagination.vue'

const url = 'https://avatars.githubusercontent.com/u/156180259?s=200&v=4'

const total = 100
</script>

<template>
  <div class="music-container">
    <div class="background">

      <div class="music-header">
        <h2>专辑陈列</h2>
      </div>

      <div class="music-main">
        <div class="music-main-item">
          <div v-for="item in 5" :key="item" class="album-item-wrapper">
            <div class="album-item">
              <el-image :src="url" fit="fill" />
            </div>
          </div>
        </div>

        <div class="music-main-item">
          <div v-for="item in 5" :key="item" class="album-item-wrapper">
            <div class="album-item">
              <el-image :src="url" fit="fill" />
            </div>
          </div>
        </div>
      </div>

      <div class="music-footer">
        <nl-pagination :total="total" />
      </div>
    </div>

    <div class="album-info-container">

      <div class="album-info-left">
        <el-image :src="url" fit="fill" />
      </div>

      <div class="album-info-right">
        <span class="album-title">专辑名称</span>
        <p class="album-describe">专辑描述</p>
        <button class="bnt-play">PLAY</button>
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
.music-container {
  position: relative;
  height: 100%;
}

.background {
  opacity: 0;
}

.album-info-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: flex-start;

  .album-info-left {
    height: 40vh;
    width: 40vh;

    .el-image {
      height: 100%;
      width: 100%;
    }
  }

  .album-info-right {
    position: relative;
    height: 40vh;
    width: 40vh;

    // display: flex;
    // justify-content: center;

    .album-title {
      display: block;
      font-size: 2rem;
      font-weight: 700;
    }

    .album-describe {
      display: block;
      font-size: 1rem;
      font-weight: 700;
    }

    .bnt-play {
      position: absolute;
      bottom: 0;
      font-size: 1.5rem;
    }
  }
}

.music-header {
  height: 10%;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    float: right;
  }
}

.music-main {
  height: 80%;

  .music-main-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    width: 100%;
    overflow: hidden;

    $album-item-wrapper-size: 15rem;
    $album-item-size: 13rem;

    .album-item-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $album-item-wrapper-size;
      width: $album-item-wrapper-size;

      // margin-right: calc((100% - 15rem) / 4);

      .album-item {
        height: $album-item-size;
        width: $album-item-size;

        .el-image {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}

.music-footer {
  height: 10%;
}
</style>
