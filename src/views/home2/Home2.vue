<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const count = ref(0)
  // 生命周期钩子
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })
</script>

<template>
  Home2
</template>

<style>

</style>