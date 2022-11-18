<template>
  <audio id="music" preload="preload" src="http://haos.fun:8088/music/dj01.mp3">
  </audio>
  <el-tooltip :content="(musicInfo.switch ? '关闭' : '开启') + '背景音乐'" placement="top">
    <el-switch v-model="musicInfo.switch" style="--el-switch-on-color: #13ce66; --el-switch-off-color: black"
      inline-prompt inactive-text="🎧" @change="musicSwitch" />
  </el-tooltip>
</template>
<script setup lang="ts">
import { reactive, onMounted, defineProps, defineExpose, watch } from 'vue'

const props = defineProps(['switch'])
const musicInfo = reactive({
  switch: props.switch,
  list: [],
})
// 生命周期钩子
onMounted(() => {

})
// 监听父组件音乐开关的变化
watch(props, (props) => {
  musicInfo.switch = props.switch,
  musicSwitch()
})

const musicSwitch = () => {
  const music: any = document.getElementById("music")
  if (musicInfo.switch) {
    music.play()
  } else {
    music.pause()
  }
}

//暴露方法 不然父组件调用不到这个方法
defineExpose({
  musicSwitch
})
</script>