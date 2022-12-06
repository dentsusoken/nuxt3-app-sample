<script lang="ts" setup>
import { CatResponse } from '~/types'

interface Props {
  catList: CatResponse[];
}

defineProps<Props>()
</script>

<template>
  <div class="card-list" data-testid="cat-list">
    <cat-card v-for="(cat, i) in catList" :key="i" :cat-data="cat" />
  </div>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  place-items: center;
  gap: 16px;
}
</style>
