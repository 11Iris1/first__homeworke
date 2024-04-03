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
            <p style="font-size:1rem">分支： 分支是根据条件选择执行不同代码路径的结构。在汇编语言中，通常使用条件跳转指令来实现分支。
            </p>
            <br><br>
            <el-card style="width: 1000px">
                <template #header>
                <div class="card-header">
                    <span>分支代码块</span>
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
                <template #footer>上面的代码使用了 CMP 指令比较两个寄存器的值，并根据比较结果使用 JE（相等跳转）、JG（大于跳转）、JL（小于跳转）等指令进行分支跳转。</template>
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
        areaText: `CMP AX, BX     ; 比较寄存器AX和BX的值
JE Equal       ; 如果相等，则跳转到Equal标签
JG Greater     ; 如果AX大于BX，则跳转到Greater标签
JL Less        ; 如果AX小于BX，则跳转到Less标签

Equal:
    ; 相等时执行的代码
    ; ...
    JMP End      ; 跳转到End标签以结束分支判断

Greater:
    ; AX大于BX时执行的代码
    ; ...
    JMP End      ; 跳转到End标签以结束分支判断

Less:
    ; AX小于BX时执行的代码
    ; ...

End:
    ; 分支结束后的代码
    ; ...`,
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
  