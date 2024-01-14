<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuList = reactive([
  { name: '关于', path: 'about' },
  { name: '音乐', path: 'music' },
  { name: '登录', path: 'login' }
])
// 当前选择菜单
const activeMenu = ref('index')
// 切换导航跳转
const selectMenu = (item: string) => {
  if (item === 'login') return
  router.push({ path: '/' + item })
  activeMenu.value = item
}
</script>

<template>
  <div class="header-container">
    <router-link to="/" class="logo">纳西妲图书馆</router-link>
    <el-space :size="30" style="transform: translateX(30px);">
      <div
        v-for="item in menuList"
        :key="item.path"
        class="nav"
        :class="{ active: activeMenu === item.path }"
        @click="selectMenu(item.path)"
      >
        <span>{{ item.name }}</span>
      </div>
    </el-space>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
  }

  .nav {
    font-size: 1.3rem;
    font-weight: 700;

    &.active {
      color: pink;
    }
    span:hover {
      color: pink;
    }
  }
}
</style>
