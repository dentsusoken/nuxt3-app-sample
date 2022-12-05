<script lang="ts" setup>
import { CatResponse } from '~/types'

interface Props {
  data: CatResponse;
}

defineProps<Props>()
</script>

<template>
  <div>
    <img
      class="card-img"
      :src="data.url"
      alt="cute cat"
      :data-testid="data.id"
    >
  </div>
</template>

<style scoped>
.card-img {
  border-radius: 8px;
  width: 320px;
  height: 320px;
  object-fit: cover;
}
</style>
