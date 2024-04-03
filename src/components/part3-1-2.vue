<template>
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
            <p style="font-size:1rem">循环： 循环是一种重复执行特定代码块的结构，直到满足退出条件为止。在汇编语言中，通常使用比较指令和条件跳转指令来实现循环。
            </p>
            <br><br>
            <el-card style="width: 1000px">
                <template #header>
                <div class="card-header">
                    <span>循环代码块</span>
                </div>
                </template>
                <div class="edit-container">
                    <div class="edit">
                    <div class="leftBox"><textarea wrap="off" cols="2" id="leftNum" disabled></textarea></div>
                    <textarea
                        @input="handleTextareaInput"
                        v-model="areaText"
                        onscroll="document.getElementById('leftNum').scrollTop = this.scrollTop;"
                        spellcheck="false"
                        class="area-content" disable>
                        
                        
                        </textarea>
                    </div>
                </div>
                <template #footer>上面的代码使用 DEC 指令将循环计数器减1，然后使用 JNZ 指令检查计数器是否为零，如果不为零，则跳转回循环的起始点 LoopStart，从而实现循环。</template>
            </el-card>
            <el-card>

            </el-card>

        </el-main>
      </el-container>
    </div>
  </template>
      
  <script lang="ts">
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  export default{
    data() {
      return {
        areaText: `MOV CX, 10     ; 设置循环计数器
LoopStart:
    ; 循环体代码
    ; ...

    DEC CX       ; 循环计数器减1
    JNZ LoopStart  ; 如果计数器不为零，则跳转回LoopStart`,
      }
    },
  }
  
  import { RouterLink, RouterView } from 'vue-router'
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from '@element-plus/icons-vue'
</script>
<style>
.edit-container {
  height: 570px;
  padding: 10px 20px;
}

.edit {
  display: flex;
  height: 530px;
}

.leftBox {
  width: 40px;
  height: 100%;
  text-align: left;
}

.area-content {
  padding: 10px 8px;
  width: 100%;
  height: 100%;
  font-size: 13px;
  line-height: 24px;
  color: #2dc26b;
  font-family: Consolas;
  border: none;
  background: #373737;
  box-sizing: border-box;
  /* overflow-y: hidden;
  overflow-x: hidden; */
  outline: none;
  resize: none;
}

#leftNum {
  padding: 10px 4px;
  height: 100%;
  width: 100%;
  line-height: 24px;
  font-size: 13px;
  text-align: right;
  color: #fff;
  font-weight: bold;
  resize: none;
  outline: none;
  overflow-y: hidden;
  overflow-x: hidden;
  border: 0;
  background: black;
  box-sizing: border-box;
}
</style>
  