<template>
  <el-space direction="vertical" wrap>
    <el-text tag="b" size="large" style="min-width: 480px">
            <h2 style="text-align: center;">本部分介绍从高级语言到二进制代码的编译过程,以 java, JavaByteCode 为规范介绍</h2>
        

            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;java 属于半解释型语言, 首先由编译器编译为中间文件,即 JavaByteCode 字节码文件,然后再将中间文件拿到虚拟机中解释执行
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;java 编译一个类时,如果这个类所依赖的类还没有被编译,编译器就会编译这个被依赖的类,然后引用,否则直接引用
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译后的字节码文件格式主要分为两个部分:常量池和方法字节码.常量池记录的是代码出现过的所有token(类名，成员变量名等等)以及符号引用（方法引用，成员变量引用等等）；方法字节码放的是类中各个方法的字节码。
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下部分是 .java 文件编译为 JavaByteCode 字节码的一个展示 (调用 compilerexplorer api端口,使用 jdk17.0.0, 主类名必为example)
        </el-text>


  </el-space>
  <div class="edit-container">
    <div class="edit">
      <div class="leftBox"><textarea wrap="off" cols="2" id="leftNum" disabled></textarea></div>
      <textarea
          @input="handleTextareaInput"
          v-model="areaText"
          onscroll="document.getElementById('leftNum').scrollTop = this.scrollTop;"
          spellcheck="false"
          class="area-content">
        
        
        </textarea>
    </div>
  </div>
  <div class="mb-4"><el-button @click="compileJavaCode" type="primary" round>运行</el-button></div>
  
  <div class="edit-container">
    <div class="edit">
      <div class="leftBox"><textarea wrap="off" cols="2" id="leftNum" disabled></textarea></div>
      <textarea
          @scroll="handleTextareaScroll"
          :value="compiledCode"  
          spellcheck="false"
          class="area-content">
        </textarea>
    </div>
  </div>
  </template>
  <script>
  import 'animate.css';
  import axios from 'axios';
  export default {
    name: "EditFileContent",
    data() {
      return {
        areaText: `public class example {  
public static void main(String[] args) {  
       Animal animal = new Animal("Puppy");  
       animal.printName("1");  
   }  
}  
//Animal.java  
class Animal {  
public String name;  
public Animal(String name) {  
this.name = name;  
   }  
public void printName(String a) {  
       System.out.println(a);  
   }  
}`,
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
        let lineobj = document.getElementById("leftNum");
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
      async compileJavaCode() {
        try {
          const compilerId = 'java1700'; // 替换为实际的编译器ID
          const options = '-Xlint:all'; // 设置编译选项，可以根据需要进行修改
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