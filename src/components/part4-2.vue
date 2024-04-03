<template>
    <el-space direction="vertical" wrap>
      <el-text tag="b" size="large" style="min-width: 480px">
              <h2 style="text-align: center;">本部分介绍在 JRE 环境下中间代码 JavaByteCode 的运行</h2>
          
  
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在编译好 java 程序得到 MainApp.class 文件后，在命令行上敲 java AppMain。系统就会启动一个 jvm 进程，jvm 进程从 classpath 路径中找到一个名为 AppMain.class 的二进制文件，将 MainApp 的类信息加载到运行时数据区的方法区内，这个过程叫做 MainApp 类的加载。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后 JVM 找到 Mainapp 的主函数入口，开始执行 main 函数。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;main 函数的第一条命令是 Animal animal = new Animal("Puppy"); 就是让 JVM 创建一个 Animal 对象，但是这时候方法区中没有 Animal 类的信息，所以 JVM 马上加载 Animal 类，把 Animal 类的类型信息放到方法区中。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之后,我们需要引入线程栈与字节码执行模型.
              <br><br>
              <h3>线程栈与字节码执行模型</h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JVM 是一台基于栈的计算机器。每个线程都有一个独属于自己的线程栈(JVM stack)，用于存储栈帧(Frame)。每一次方法调用，JVM都会自动创建一个栈帧。栈帧由操作数栈，局部变量数组 以及一个class 引用组成。class 引用指向当前方法在运行时常量池中对应的 class
              <div class="image-container">
                <img src="../assets/p4-2-1.jpg" alt="JavaByteCode" class="center-image" />
                </div>
        </el-text>
  
        <h2 style="font-size:1rem">请向下方输入单个函数的 JavaByteCode 文件,用以模拟单个栈帧中, 按照字节码指令执行下的操作数栈和局部变量表的变化</h2>
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
    <div class="mb-4"><el-button @click="initCanvas" type="primary" round>模拟运行</el-button></div>
    <br>
    <p style="font-size:1rem">蓝色模拟操作数栈的变化,橙色模拟局部变量表的变化</p>
    <div style="display: flex; justify-content: center;">
    <canvas ref="canvas" width="700" height="700" ></canvas></div>
    <br>

    </template>
    <script>
    import { isRuntimeOnly, ref } from 'vue'

  // const show = ref(true)
    import axios from 'axios';
    export default {
      name: "EditFileContent",
      data() {
        return {
          areaText: `  public static void main(java.lang.String[]);
       0: new           #7                  // class Animal
       3: dup
       4: ldc           #9                  // String Puppy
       6: invokespecial #11                 // Method Animal."<init>":(Ljava/lang/String;)V
       9: astore_1
      10: aload_1
      11: invokevirtual #14                 // Method Animal.printName:()V
      14: return`,
          num: '',
          compiledCode: '',
          stack: [],
          arr:[],
          pool:[],
          hnum:'',
          rectWidth: 100,
          rectHeight: 30,
          constString:'',
          shou:ref(false),
          initConst:true,
          istep:0,
          title:'',
          top:0,
          len:0,
        };
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
        },
        initCanvas(){
          console.log(this.istep + "次点击按钮");
          const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');          

          if(this.initConst){
          const lines = this.areaText.split('\n');
          this.hnum = lines.length;
          this.initConst = false;
          console.log("*");
          }
          if(this.istep >= this.hnum){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("程序运行结束",20,20);
            return;
          }
          this.drawStackAnimation(this.istep);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillText(this.title, 20, 20);
          this.drawStack(ctx,this.stack,50,50);
          this.drawArray(ctx,this.arr,300,50);
          this.istep ++;
        },
        opt(instruction){
          const parts = instruction[1].split('_');
          const opcode = parts[0]; // 获取指令部分
          const index = parseInt(parts[1]);
          console.log(opcode)
            if(opcode == 'new'){
              this.stack[this.top++] = instruction[2] + " ref"//类名
            }
            if(opcode == 'dup'){
              this.stack[this.top] = this.stack[this.top - 1];
              this.top ++;
            }
            if(opcode == 'ldc'){
              this.stack[this.top++] = instruction[2] + " 索引"
            }
            if(opcode == 'invokespecial'){
              const temp = instruction[5].split(';');
              this.top -= temp.length ;
            }
           if(opcode == 'bipush'){
              this.stack[this.top ++] = instruction[2];
           }
           if(opcode == 'imul'){
            let a1 = this.stack[this.top- 1];
            let a2 = this.stack[this.top - 2];
            this.top-=2;
            this.stack[this.top ++] = (parseInt(a1) * parseInt(a2)) + "";
            console.log(this.stack[this.top-1]);
           }
           if(opcode == 'iadd'){
            let a1 = this.stack[this.top- 1];
            let a2 = this.stack[this.top - 2];
            this.top-=2;
            this.stack[this.top ++] = parseInt(a1) + parseInt(a2);
           }
            if(opcode == 'invokevirtual'){
              const temp = instruction[5].split(';');
              this.top -= temp.length ;
            }
            if(opcode == 'astore'){
              if(instruction[1] == 'astore'){
                this.arr[parseInt(instruction[2])] = this.stack[this.top-1];
                this.len ++;
                this.top -- ;
              }
              else{
              this.top -- ;
              this.arr[index] = this.stack[this.top];
              this.len++;
            }
            }
            if(opcode == 'dstore'){
              this.top -- ;
              this.arr[index] = this.stack[this.top];
              this.len++;
            }
            if(opcode == 'aload'){
              this.stack[this.top ++] = this.arr[index];
            }
            if(opcode == 'iload'){
              this.stack[this.top ++] = this.arr[index];
            }
            if(opcode == 'iconst'){
              this.stack[this.top ++] = index+"";
            }
            if(opcode == 'istore'){
              if(instruction[1] == 'istore'){
                console.log("!!" + this.stack[this.top-1]);
                console.log("istore" + parseInt(instruction[2]) + "=" + this.stack[this.top-1])
                this.arr[parseInt(instruction[2])] = this.stack[this.top-1] + "";
                this.len ++;
                this.top -- ;
              }
              else{
                this.top -- ;
                this.arr[index] = this.stack[this.top];
                console.log("*" + this.arr[index]);
                this.len++;                
              }

            }
            if(opcode == 'i2d'){
              // this.stack[this.top] = this.stack[this.top][0];
            }
            if(opcode == 'putfield')
            {
              this.pool[parseInt(instruction[2].substring(1))] = this.stack[this.top-1];
              this.top-=2;
            }
            if(opcode == 'getfield'){
              this.top-=1;
              this.stack[this.top ++] = this.pool[parseInt(instruction[2].substring(1))];
            }
        },
        drawStackAnimation(step) {

        const lines = this.areaText.split('\n');
        
        lines.forEach((item,index)=>{
            if(index < step) return;
            if(index > step) return;
            const parts = item.trim().split(/\s+/);
            if(step == 0){
              this.title = item + "的栈帧";
              if(parts[1] != 'static') this.arr[this.len++] = 'this';
              const p1 = parts[parts.length - 1].split('(');
              const p2 = p1[1].split(',');
              p2.forEach((item,index)=>{
                this.arr[this.len++] = item;
              });
              return;
            }
            this.opt(parts);
            console.log(index);
        });
        },

      drawStack(ctx, stack, x, y) {
        ctx.font = "14px Arial";
        stack.forEach((item, index) => {
          if(index >= this.top) return;
            // console.log(item + " " + index);
          // 计算每个操作码指令所占用的空间
          const opcodeSpace = item.split(" ").length;
          
          // 绘制矩形
          ctx.fillStyle = "#0095DD";
          ctx.fillRect(x, y + index * (this.rectHeight + 10), this.rectWidth * opcodeSpace, this.rectHeight);
          
          // 绘制文字
          ctx.fillStyle = "#000";
          ctx.fillText(item, x + 10, y + index * (this.rectHeight + 10) + this.rectHeight / 2 + 5);
        });
      },
      drawArray(ctx, array, x, y) {
    // 设置字体样式
    ctx.font = "14px Arial";

    array.forEach((item, index) => {
        if (index >= this.len) return; // 确保不绘制超出数组长度的部分

        // 计算每个元素的显示位置
        const textX = x;
        const textY = y + index * (this.rectHeight + 10); // 假设每个元素高度为30

        // 绘制矩形
        ctx.fillStyle = "#FF5733"; // 选择矩形的颜色
        ctx.fillRect(x, textY, this.rectWidth, this.rectHeight);

        // 绘制文字
        ctx.fillStyle = "#000"; // 选择文字的颜色
        ctx.fillText(item, textX + 10, textY + this.rectHeight / 2 + 5);
    });
},
      
  
      }
    }
    
    </script>
    <style>
    canvas {
  border: 1px solid black;
}
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
    .image-container {
    text-align: center; /* 使用text-align属性居中 */
    }

    .center-image {
    max-width: 50%; /* 让图片最大宽度为父容器的宽度 */
    }
    .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
    </style>