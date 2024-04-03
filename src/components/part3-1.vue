<template>
        <el-backtop :right="100" :bottom="100" />
<h2 class="animate__animated animate__bounce" style="text-align: center; font-size: 3rem;">基于“JUMP”的代码执行“顺序、分支、循环”</h2>
  <div class="common-layout">
    <el-container>
      <el-header>


    <div class="mb-4">
    <RouterLink to="/part3-1-1"><el-button >顺序</el-button></RouterLink>
    <RouterLink to="/part3-1-2"><el-button type="primary">循环</el-button></RouterLink>
    <RouterLink to="/part3-1-3"><el-button type="success">分支</el-button></RouterLink>
    </div>

      </el-header>
      <el-main>
        <p>123</p>
        <RouterView />
      </el-main>
    </el-container>
  </div>
    
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
// import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import Part311 from './part3-1-1.vue';
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

</script>