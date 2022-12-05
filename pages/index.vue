<script lang="ts" setup>
import { CatResponse } from '~/types'

const { pending, error, data, refresh } = useFetch<CatResponse[]>(
  'https://api.thecatapi.com/v1/images/search?limit=10'
)
</script>

<template>
  <div>
    <div class="top">
      <app-title />
      <refresh-button @click="refresh()" />
    </div>

    <div>
      {{ error?.message }}
    </div>

    <div v-show="pending" class="loading-message">
      <p>データ取得中です…</p>
    </div>

    <div v-if="!pending && data" class="content">
      <cat-card-list :cat-list="data" />
    </div>
  </div>
</template>

<style scoped>
.top {
  text-align: center;
}

.content {
  margin: auto;
}

.loading-message {
  text-align: center;
}
</style>
