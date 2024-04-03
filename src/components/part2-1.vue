<template>
      <el-backtop :right="100" :bottom="100" />
  <h2 class="animate__animated animate__bounce" style="text-align: center;font-size: 3rem;">内存模型</h2>
  <el-row justify="center"><el-space wrap>
    <el-card style="max-width: 400px;height:500px">
      <template #header>
        <div class="card-header">
          <span>存储器层次结构</span>
        </div>
      </template>
      <img class="card-image"  src="../assets/image4.jpg" alt="Image">
      <template #footer>
  <p>这是一个计算机系统的所有内存层次结构图，从CPU的寄存器到硬盘，L0速度最快，L6速度最慢<br><br>一个CPU的核心访问L1 cache<br><br>同一个CPU的多个核心访问L2 cache<br><br>所有CPU能访问L3 cache以及内存<br><br>L1 cache、L2 cache、L3 cache的容量空间依次变大，但是访问速度依次变慢</p>        
      </template>

    </el-card>
    <el-card style="max-width: 400px;height:500px">
      <template #header>
        <div class="card-header">
          <span>多核 cpu 结构</span>
        </div>
      </template>
      <img class="card-image" src="../assets/image5.jpg" alt="Image">
      <template #footer>内存模型的分区是存在与L4层次的DRAM，计算机内存中</template>
    </el-card>
  </el-space>
  </el-row>
  <el-divider border-style="double" />
  <el-row justify="center">
    <el-card style="max-width: 1000px">
      <template #header>
        <div class="card-header">
          <span>内存空间</span>
        </div>
      </template>
      <img src="../assets/image6.jpg" alt="Image">
      <template #footer>
        <p>上图以32位操作系统为例，1GB为操作系统的内核空间，用户无法更改，这部分不用管它；剩下的3GB位用户的内存空间，这是供用户程序使用的。</p>
        <br>
        <p>从上至下，依次为：</p>
        <br>
        <h2>栈区(Stack)</h2>
        <p>由编译器自动分配释放 ，存放函数的参数值，局部变量的值等，内存的分配是连续的；</p>
        <br>
        <p>使用栈空间存储函数的返回地址、参数、局部变量、返回值，从高地址向低地址增长。在创建进程</p>
        <br>
        <p>时会有一个最大栈大小。如果定义的变量或者函数超出了这个最大栈大小，就会发生栈溢出现象</p>
        <br>
        <h2>共享库的内存映射区（Memory Mapping Segment）</h2>
        <p>这个区也可以称做共享内存，主要有两个功能：</p>
        <br>
        <p>一是在程序链接阶段，会进行库链接，而链接的库则会保存在这里。链接又分为静态链接和动态链接，这里属于另外一个知识点，暂时不展开，后续单独开一个文章来写。只需知道这里保存者许多库文件即可。</p>
        <br>
        <p>二是给进程间通信提供一种方式，那就是共享内存，此时通过内存映射来实现。这里也是属于进程一块的知识，暂时不展开。</p>
        <br>
        <h2>堆区（Heap）</h2>
        <p>这块内存，就是由用户或者说程序员来主动开辟并释放的</p>
        <br>
        <p>C语言中通过调用malloc/free，C++通过new/delete；这两个有点区别，一个属于函数，在stdlib.h库中，一个属于运算符；同时new还要调用构造函数，delete调用析构函数。</p>
        <br>
        <h2>.bss 段</h2>
        <p>这部分内存存储的是：未初始化的 全局变量 和 静态变量（局部+全局）</p>
        <br>
        <p>所有被初始化为 0 的 全局变量 和 静态变量</p>
        <br>
        <h2>.data 段</h2>
        <p>这部分内存存储的是：已初始化的 全局变量 和 静态变量</p>
        <br>
        <h2>.text 段</h2>
        <p>这部分内存存储的是：只读存储区；文本区；只读存储区存储字符串常量；文本区存储程序的机器代码</p>
        <br>


      </template>
    </el-card>
  </el-row>
</template>



<script>

</script>
<style scoped>
.card-image {
  max-width: 100%; /* 图片的最大宽度为父元素宽度 */
  max-height: 100%; /* 图片的最大高度为父元素高度 */
  display: block; /* 设置图片为块级元素，以便使用 max-width 和 max-height */
  margin: auto; /* 图片水平居中 */
}
</style>

