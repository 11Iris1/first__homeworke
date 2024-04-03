<template>
  <!-- <api/> -->
  <!-- <stack/> -->
  <!-- <h1 class="animate__animated animate__bounce">An animated element</h1> -->
  <el-container class="layout-container-demo" style="display:flex;min-height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['', '4']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><icon-menu /></el-icon>Part1
            </template>
            <el-menu-item-group>
              <!-- <template #title>二进制(数据与代码)原理</template> -->
              <el-menu-item @click="navigateTo('/part1-1')" index="1-1">二进制与补码原理</el-menu-item>
              <el-menu-item @click="navigateTo('/part1-2')"index="1-2">浮点数原理</el-menu-item>
              <el-menu-item @click="navigateTo('/part1-3')"index="1-3">mips 指令集原理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>Part2
            </template>
            <el-menu-item-group>
              <el-menu-item @click="navigateTo('/part2-1')" index="2-1">以内存为中心的计算机模型</el-menu-item>
              <el-menu-item @click="navigateTo('/part2-2')" index="2-2">计算机加电开机的过程模型</el-menu-item>
              <el-menu-item @click="navigateTo('/part2-3')"index="2-3">计算机内存编指和分段</el-menu-item>
              <el-menu-item @click="navigateTo('/part2-4')"index="2-4">处理器计算和I/O的过程</el-menu-item>
            </el-menu-item-group>

          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><icon-menu /></el-icon>Part3
            </template>
            <el-menu-item-group>
              <el-menu-item @click="navigateTo('/part3-1-1')" index="3-1">"JUMP"的"顺序,分支,循环"</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><icon-menu /></el-icon>Part4
            </template>
            <el-menu-item-group>
              <el-menu-item @click="navigateTo('/part4-1')" index="4-1">编译过程</el-menu-item>
              <el-menu-item @click="navigateTo('/part4-2')" index="4-2">运行过程</el-menu-item>
            </el-menu-item-group>            
          </el-sub-menu>

        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <RouterView />
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table> -->

        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import 'animate.css';
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { RouterView, useRouter } from 'vue-router'
import stack from './components/stack.vue'
import api from './components/api.vue'


const router = useRouter()

const navigateTo = (route: string) => {
  router.push(route)
}

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  width: 87vw;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  position:absolute;
  left: 0;
  width:13vw;
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  width: 70vw;
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>