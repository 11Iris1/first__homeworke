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
          <p>由 c++ 的汇编语言来演示代码的顺序执行,编译器时x86-64 gcc 10.1</p>
          <div class="edit-container">
            <div class="edit">
              <div class="leftBox"><textarea wrap="off" cols="2" id="leftNum1" disabled></textarea></div>
              <textarea
                @input="handleTextareaInput"
                v-model="areaText"
                onscroll="document.getElementById('leftNum1').scrollTop = this.scrollTop;"
                spellcheck="false"
                class="area-content">
              </textarea>
            </div>
          </div>
  
          <div class="mb-4"><el-button @click="compileJavaCode" type="primary" round>编译</el-button></div>
          <br>
          <div class="mb-4"><el-button @click="nextTail" type="primary" round>顺序执行</el-button></div>
  
          <div class="edit-container">
            <div class="edit">
              <div class="leftBox"><textarea wrap="off" cols="2" id="leftNum2" disabled></textarea></div>
              <textarea
                @scroll="handleTextareaScroll"
                :value="compiledCode"  
                spellcheck="false"
                class="area-content">
              </textarea>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </template>
      
  <script lang="ts">
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  
  import { RouterLink, RouterView } from 'vue-router'
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from '@element-plus/icons-vue'
      
  export default {
    name: "EditFileContent",
    data() {
      return {
        areaText: '',
        num: '',
        compiledCode: ''
      }
    },
    methods: {
      handleTextareaInput(e) {
        let str = e.target.value;
        str = str.replace(/\r/gi, "");
        str = str.split("\n");
        let n = str.length;
        let lineobj = document.getElementById("leftNum1");
        for (let i = 1; i <= n; i++) {
          if (document.all) {
            this.num += i + "\r\n";   //判断浏览器是否是IE
          } else {
            this.num += i + "\n";
          }
        }
        lineobj.value = this.num;
        this.num = "";
      },
      nextTail() {
        // 使用$nextTick确保在DOM加载完成后再查找textarea元素
        this.$nextTick(() => {
          // 获取第二个编辑器左侧的textarea元素
          const textarea = document.querySelector('#leftNum2');
          // 检查textarea是否存在
          if (textarea) {
            // 在textarea的value中添加一个换行符和一个叹号
            // textarea.value
            textarea.value += '\n!';
            // 将textarea的scrollTop属性设置为当前scrollTop加上一个行高，实现向下移动一行
            textarea.scrollTop += textarea.scrollHeight / textarea.rows;
          } else {
            console.error('未找到textarea元素');
          }
        });
      },
      async compileJavaCode() {
        try {
          const compilerId = 'g101'; // 替换为实际的编译器ID
          const options = ''; // 设置编译选项，可以根据需要进行修改
          const response = await axios.post(`https://godbolt.org/api/compiler/${compilerId}/compile?options=${options}`, this.areaText, {
            headers: {
              'Content-Type': 'text/plain'
            }
          });
          
          // 处理编译结果
          console.log(response.data);
          if (response.data.asm && Array.isArray(response.data.asm)) {
            const compiledCode = response.data.asm.map(asm => asm.text).join('\n');
            console.log('被编译的代码:', compiledCode);
            this.compiledCode = compiledCode;
          } else {
            console.error('未找到编译后的代码');
          }
        } catch (error) {
          console.error('编译失败:', error);
        }
      }
    }
  }
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
    outline: none;
    resize: none;
  }
  
  #leftNum1, #leftNum2 {
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
  