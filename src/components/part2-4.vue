<template>
    <el-backtop :right="100" :bottom="100" />
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in images" :key="item.src">
            <img class="carousel-image" :src="item.src" :alt="item.alt">
            <!-- <el-divider /> -->
          <!-- <p style="text-align: center;">{{ item.text }}</p> -->
        </el-carousel-item>
    </el-carousel>
    <h2 class="animate__animated animate__bounce" style="text-align: center;font-size: 3rem;">CPU一般运行过程</h2>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CPU从cache或主存中取出指令，然后放入指令寄存器，控制器对该指令进行译码。最终把指令分解成一系列的微操作，然后发出各种控制命令，执行微操作序列，从而完成一条指令的执行。指令是CPU规定执行操作的类型和操作数的基本命令。指令是由一个字节或者多个字节组成（对于arm64，大部分指令长度是4个字节），其中包括操作码字段、一个或多个有关操作数地址的字段，一些表征机器状态的状态字，以及特征码。有的指令中也直接包含操作数本身，且用二进制序列表示</p>
    <h2 style="font-size:2rem">取指</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取指令（Instruction Fetch，简称IF）阶段是将一条指令从cache或主存中，获取指令到指令寄存器的过程。CPU中有一个程序计数器(Program Counter，简称PC)寄存器，其中保存着将要执行指令的地址。指令读取是通过将PC寄存器的值，输出给cache或者内存，然后由cache或内存返回该值对应地址中的指令。当一条指令被取出后，PC中的数值将根据指令字长度自动递增。</p>
    <h2 style="font-size:2rem">译码</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取出指令后，CPU会立即进入指令译码（Instruction Decode，简称ID）阶段。在指令译码阶段，指令译码器按照预定的指令格式，对取回的指令进行拆分和解释，识别区分出不同的指令类别，以及各种获取操作数的方法。指令有很多种，有进行各种运算的指令、控制下一条命令的指令、对内存进行读写的命令，还有对CPU进行控制的指令。</p>
    <h2 style="font-size:2rem">执行</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在取指令和指令译码阶段之后，接着进入执行指令（Execute，简称EX）阶段。此阶段的任务是完成指令所规定的各种操作，实现具体指令的功能。为此，CPU的不同部分的组件被连接起来，以执行所需的操作。例如，执行一个加法运算，ALU将会连接到一组输入和一组输出。输入提供了要进行相加运算的数值，而输出求和后的结果。如果加法运算产生一个，对该CPU处理而言过大的结果，在标志暂存器里，运算溢出(Arithmetic Overflow，简称AO)标志可能会被设置。</p>
    <h2 style="font-size:2rem">访存</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据指令需要，有可能要访问主存，读取操作数，这样就进入了访存取数的阶段。此阶段的任务是：根据指令中的地址码，经过MMU将虚拟地址转化成物理地址，根据物理地址得到操作数，在cache或主存中的地址，并从cache或主存中读取该操作数用于运算。</p>
    <h2 style="font-size:2rem">写回</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结果写回（Write Back，简称WB）阶段，一般把执行指令阶段的运行结果数据，写回到内部寄存器中，以便被后续的指令快速地存取。在有些情况下，结果数据也可被写入相对较慢，但较廉价且容量较大的主存。许多指令还会改变程序状态寄存器中标志位的状态，这些标志位标识着不同的操作结果，可被用来影响程序的动作。在指令执行完毕、结果数据写回之后，若无意外事件（如结果溢出等）发生，CPU就接着从程序计数器PC中取得下一条指令地址，开始新一轮的循环，下一个指令周期将顺序取出下一条指令。</p>
    <el-divider border-style="double" />
    <h2 style="text-align: center;font-size: 3rem;">CPU中断流程</h2>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在正常情况下，CPU 可以顺序执行，也可以分支执行，这些总归是按照既定顺序去执行。现实中，有时需要暂时中断CPU的当前执行流，让CPU去做点其他的工作，再回头来继续原来的执行流。因此CPU硬件提供了一种中断机制，可以先让CPU停下，等异常或中断服务程序执行完后，再切回来：</p>
    <br>
    <p style="font-size:1rem"> > 保存PC：保存当前的 PC 的值到内存的某个位置</p>
    <br>
    <p style="font-size:1rem"> > 修改PC：修改 PC 的值，让执行其他执行流</p>
    <br>
    <p style="font-size:1rem"> > 回原PC：其他执行流执行结束之后，通过将刚才保存的 PC 值恢复到 PC 寄存器</p>
    <br>
    <p style="font-size:1rem"> > 继续原执行流：继续中断前的执行流</p>
    <br>
    <br>

    <el-divider border-style="double" />  
    <h2 class="animate__animated animate__bounce" style="text-align: center;font-size: 3rem;">本部分介绍 IO 过程</h2>
    <h2 style="font-size: 2rem;">IO 工作方式: 缓冲 IO</h2>
    <p style="font-size:1rem">缓冲 IO 也被成为标准 IO，大多数的文件系统系统默认都是以缓冲 IO 的方式来工作的。在Linux的缓冲I/O机制中，数据先从磁盘复制到内核空间的缓冲区，然后从内核空间缓冲区复制到应用程序的地址空间。</p>
    <br>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;读操作：
操作系统检查内核的缓冲区有没有需要的数据，如果已经缓冲了，那么就直接从缓冲中返回；否则从磁盘中读取到内核缓冲中，然后再复制到用户空间缓冲中。</p>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;写操作：
将数据从用户空间复制到内核空间的缓冲中。这时对用户程序来说写操作就已经完成，至于什么时候再写到磁盘中由操作系统决定，除非显示地调用了sync同步命令。</p>
    <br>
    <h2 style="font-size: 2rem;">IO 工作方式: 直接 IO</h2>
    <p style="font-size:1rem">直接IO就是应用程序直接访问磁盘数据，而不经过内核缓冲区，也就是绕过内核缓冲区,自己管理I/O缓冲区，这样做的目的是减少一次从内核缓冲区到用户程序缓冲的数据复制。</p>
    <br>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;读操作：
操作系统检查内核的缓冲区有没有需要的数据，如果已经缓冲了，那么就直接从缓冲中返回；否则从磁盘中读取到内核缓冲中，然后再复制到用户空间缓冲中。</p>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;写操作：
将数据从用户空间复制到内核空间的缓冲中。这时对用户程序来说写操作就已经完成，至于什么时候再写到磁盘中由操作系统决定，除非显示地调用了sync同步命令。</p>
    <br>
    <el-row justify="center">
    <el-card style="max-width: 480px">
    <template #header>直接 IO</template>
    <img
      src="../assets/image14.jpg"
      style="width: 100%"
    />
  </el-card></el-row>
    <h2 style="font-size: 2rem;">IO 访问方式: 磁盘 IO</h2>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;读操作：当应用程序调用read()方法时，操作系统检查内核高速缓冲区中是否存在需要的数据，如果存在，那么就直接把内核空间的数据copy到用户空间，供用户的应用程序使用。如果内核缓冲区没有需要的数据，通过通过DMA方式从磁盘中读取数据到内核缓冲区，然后由CPU控制，把内核空间的数据copy到用户空间。这个过程会涉及到两次缓冲区copy，第一次是从磁盘到内核缓冲区，第二次是从内核缓冲区到用户缓冲区，第一次是DMA的copy，第二次是CPU的copy。</p>
    <br>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;写操作：当应用程序调用write()方法时，应用程序将数据从用户空间copy到内核空间的缓冲区中（如果用户空间没有相应的数据，则需要从磁盘—>内核缓冲区—>用户缓冲区），这时对用户程序来说写操作就已经完成，至于什么时候把数据再写到磁盘（从内核缓冲区到磁盘的写操作也由DMA控制，不需要cpu参与），由操作系统决定。除非应用程序显示地调用了sync命令，立即把数据写入磁盘。</p>
    <br>
    <p style="font-size:1rem">为了读或写，磁头必须能移动到所指定的磁道上，并等待所指定的扇区的开始位置旋转到磁头下，然后再开始读或写数据。磁盘IO的延时分成以下三部分：</p>
    <br>
    <p style="font-size:1rem"> > 寻道时间：把磁头移动到指定磁道上所经历的时间</p>
    <br>
    <p style="font-size:1rem"> > 旋转延迟时间 ：指定扇区移动到磁头下面所经历的时间</p>
    <br>
    <p style="font-size:1rem"> > 传输时间 ：数据的传输时间（数据读出或写入的时间）</p>
    <br>

    <el-row justify="center">
    <el-card style="max-width: 480px">
    <template #header>磁盘 IO</template>
    <img
      src="../assets/image15.jpg"
      style="width: 100%"
    />
  </el-card></el-row>
  </template>
  <script>
  export default {
  
    data() {
      return {
        images: [
          { src: "/src/assets/image7.jpg", alt: "Image 1"},
          { src: "/src/assets/image8.jpg", alt: "Image 2" },
          { src: "/src/assets/image9.jpg", alt: "Image 3" },
          { src: "/src/assets/image10.jpg", alt: "Image 3"},
      ],
        currentIndex: 0
      };
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }
  };
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

  .carousel-image {
    max-width: 100%; /* 图片的最大宽度为父元素宽度 */
  max-height: 100%; /* 图片的最大高度为父元素高度 */
  display: block; /* 设置图片为块级元素，以便使用 max-width 和 max-height */
  margin: auto; /* 图片水平居中 */
}
  </style>