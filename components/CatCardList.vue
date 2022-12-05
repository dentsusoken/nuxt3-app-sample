<script lang="ts" setup>
import { CatResponse } from '~~/types'

interface Props {
  catList: CatResponse[];
}

defineProps<Props>()
</script>

<template>
  <div class="card-list" data-testid="cat-list">
    <cat-card v-for="(cat, i) in catList" :key="i" :data="cat" />
  </div>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
</style>
