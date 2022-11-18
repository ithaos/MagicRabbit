<template>
    <div>
        <el-header class="navbar">
            <el-row style="width:100%">
                <el-col :span="22">
                    <div style="display: flex;justify-content: flex-start;height: 50px">
                        <div class="logo" @click="toggleDark()" />
                        <h3 class="title">魔法兔子</h3>
                        <el-menu router :default-active="activeIndex" mode="horizontal" :ellipsis="false">
                            <el-menu-item v-for="item in menuArr" :key="item.path" :index="item.path">
                                {{ item.name }}
                            </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="2" style="padding-top: 8px">
                    <MusicPlayer :switch="musicSwitch" ref="musicPlayer" />
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-main>
                <!-- class="transition-box" 过渡动画暂未生效 后续处理 -->
                <router-view :key="routKey" />
            </el-main>
        </el-container>
    </div>
</template>
  
<script lang="ts" setup>
// 暗黑模式
import { useToggle, useDark } from '@vueuse/core'
import { ref, onMounted } from 'vue'
import router from '@/router/index'
import { useRoute } from 'vue-router'
import MusicPlayer from '@/components/MusicPlayer.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const menuArr: any = router.options.routes[0].children
const activeIndex = ref(menuArr[0].path)
const routKey: any = ref(useRoute().path)
const musicSwitch = ref(false)
const musicPlayer = ref();
const musicConfirm = () => {
    ElMessageBox.confirm(
        '要开启背景音乐吗？',
        {
            cancelButtonText: '暂时不',
            confirmButtonText: '好',
            type: 'info',
        }
    ).then(() => {
        musicSwitch.value = true
    }).catch(err => {
        if (err != 'cancel' && err != 'close') {
            console.log(err)
        }
        ElMessage({
            type: 'info',
            message: '稍后手动开启',
        })
    })
}

// dom渲染后钩子
onMounted(() => {
    musicConfirm()
})

</script>
  
<style lang="scss">
.navbar {
    height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #fff;
    font-weight: 500;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .logo {
        margin-left: 10px;
        background: url('../../public/favicon.ico') no-repeat center;
        width: 50px;
        background-size: 80% 80%
    }

    .title {
        color: #323A4C;
        margin-right: 50px;
        line-height: 15px;
    }

}

// .transition-box {
//     margin-bottom: 10px;
//     width: 200px;
//     height: 100px;
//     border-radius: 4px;
//     background-color: #409eff;
//     text-align: center;
//     color: #fff;
//     padding: 40px 20px;
//     box-sizing: border-box;
//     margin-right: 20px;
// }
</style>
  