<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  total: { type: Number, required: true },
  pageSize: { type: Number, default: 10 }
})
// defineEmits(['enlarge-text'])
const activeItem = ref(1)

const selectItem = (item: number) => {
  activeItem.value = item
}
</script>

<template>
  <div class="nl-pagination-container">
    <div>
      <div
        v-for="item in props.total / props.pageSize"
        :key="item"
        class="nl-pagination-item"
        :class="{ active: activeItem === item }"
        @click="selectItem(item)"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nl-pagination-container {
  display: flex;
  justify-content: center;
}

$nl-pagination-item-size: 0.6rem;

.nl-pagination-item {
  box-sizing: border-box;
  display: inline-block;
  height: $nl-pagination-item-size;
  width: $nl-pagination-item-size;
  margin: 0 calc($nl-pagination-item-size / 2);
  border: 0.02rem solid pink;

  &:hover {
    border-color: red;
  }

  &.active {
    border-color: blue;
  }
}
</style>
