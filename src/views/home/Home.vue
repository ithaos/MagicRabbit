<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="index in 5" :key="index">
        <el-image style="width: 100%; height: 100%" :src="'http://haos.fun:8088/pic/'+index+'.jpg'" fit="contain" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const count = ref(0)
// 生命周期钩子
onMounted(() => {
  // console.log(window.innerHeight, 2131)
})
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
