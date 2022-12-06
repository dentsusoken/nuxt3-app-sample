<script lang="ts" setup>
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button class="refresh-btn" data-testid="refresh-btn" @click="handleClick">
    画像入れ替え
  </button>
</template>

<style scoped>
.refresh-btn {
  margin: 24px auto;
  display: block;
  cursor: pointer;
  width: 450px;
  background-color: #f4b6d1;
  border: none;
  padding: 8px;
  border-radius: 8px;
}
</style>
