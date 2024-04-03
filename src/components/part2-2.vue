<template>
      <el-backtop :right="100" :bottom="100" />
    <h2 class="animate__animated animate__bounce" style="text-align: center; font-size: 4rem;">本部分介绍 x86 计算机加电开机模型</h2>
    <p style="font-size:2rem">前置知识</p>
    <p style="font-size:1rem">CPU 的工作方式是:从内存中取址,执行</p>
    <p style="font-size:1rem">内存是存储数据和指令的地方,给出一个内存地址,可以得到该处的数据</p>
    <p style="font-size:1rem">CPU 从内存中哪里取指令,由 ip 寄存器的值决定.这个值不断加一,或者跳到某处.real address mode 由 cs:ip 组合决定</p>
    <p style="font-size:2rem">BIOS</p>
    <p style="font-size:1rem">BIOS 是安装在 ROM 的软件,帮助计算机启动,开机时检测整个机器的硬件 </p>
    
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>



    <div class="block text-center" m="t-4">
      <span class="demonstration"></span>
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="item in images" :key="item.src">
            <img :src="item.src" :alt="item.alt">
            <el-divider />
          <p style="text-align: center;">{{ item.text }}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
<script>
import 'animate.css';
export default {

  data() {
    return {
      images: [
        { src: "/src/assets/image1.jpg", alt: "Image 1",text:"当按下 power on 之后，此时的 CPU 处于 real address mode。由硬件负责将 BIOS 64K 的内容加载到 0xF0000 到 0xFFFFF(64K 内存)。并将 CS(code segment) 置为 0xF000，IP(instruction pointer) 置为 0xFFF0。组合起来的内存地址 PC 就是 0xFFFF0"},
        { src: "/src/assets/image2.jpg", alt: "Image 2" ,text:"此时 CPU 从 PC = 0xFFFF0 处开始取指、执行。那么从 0xFFFF0 到 0xFFFFF 只有 16Bytes，这里存放的有一条指令是 jmp far f000:e05b, 组合起来就是 0xfe05b。也就是这条指令跳转到0xF0000 到 0xFFFFF即 BIOS 内部的代码,去执行从 0xFE05B 到 0xFFFF0 将近 8K 内存"},
        { src: "/src/assets/image3.jpg", alt: "Image 3" ,text:"此时 CPU 从 PC = 0xfe05b 开始取值、执行。执行所谓的开机自检。检查计算机硬件。同时去找启动扇区，若 0 盘 0 道 1 扇区最后两个字节分别是 0x55,0xaa，那就是启动区。同时将找到的启动扇区(512Bytes) 复制到内存 0x7C00 到 0x7DFF(512Bytes) 处。最后会将 CS 置为 0x0000， IP 置为 0x7C00，组合起来就是 0x7C00。"},
        { src: "/src/assets/image3.jpg", alt: "Image 3" ,text:"此时 CPU 从 PC = 0x7C00 开始取值执行引导加载程序"},
        { src:"",alt:"",text:"操作系统的加载，它的主要任务是将操作系统的所有模块加载到内存中，并开始执行操作系统的初始化过程。操作系统的加载主要分为两个阶段：内核加载和初始化。在内核加载阶段，引导程序将操作系统的内核代码从硬盘中读取到内存中，这个过程中会涉及到文件系统的相关操作。一旦内核被成功加载到内存中，引导程序就将控制权交给内核，并开始执行内核代码。此时，操作系统的内核已经可以开始执行初始化操作。在操作系统的初始化过程中，内核会对计算机系统的硬件进行初始化，并加载操作系统的各个模块，例如设备驱动程序、系统服务等。"}
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
#imageContainer img {
  display: none;
}

#imageContainer img.active {
  display: block;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
