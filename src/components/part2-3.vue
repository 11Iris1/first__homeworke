<template>
        <el-backtop :right="100" :bottom="100" />
    <h2 class="animate__animated animate__bounce" style="text-align: center; font-size: 3rem;">本部分介绍内存的编址</h2>
    <h2 style="font-size:2rem">内存编址方法</h2>

    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内存地址与内存实际一一对应,永久绑定, 内存单元的2个概念：地址和空间是内存单元的两个方面。</p>
    <br>
    <h2 style="font-size:2rem">内存的编址以字节为单位</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内存地址与内存实际一一对应,永久绑定, 内存单元的2个概念：地址和空间是内存单元的两个方面。</p>
    <br>
    <el-row justify="center">
    <el-card style="max-width: 480px">
    <template #header>内存分段</template>
    <img
      src="../assets/image11.jpg"
      style="width: 100%"
    />
  </el-card></el-row>
    <el-divider border-style="double" />
    <h2 style="font-size:2rem">分段</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分段系统的逻辑地址结构由段号(段名)和段内地址(段内偏移量)所组成<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;段号的位数决定了每个进程最多可以分几个段, 段内地址位数决定了每个段的最大长度是多少<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个段对应一个段表项，其中记录了该段在内存中的起始位置(又称“基址”)和段的长度（每个段的长度是不一样的）。<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;各个段表项的长度是相同的。由于段表项长度相同，因此段号可以是隐含的，不占存储空间。若段表存放的起始地址为M，则K号段对应的段表项存放的地址为M + K*6。<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个直观并且通用的方法是在机器上提供多个互相独立的称为段(segment) 的地址空间。每个段由一个从0到最大的线性地址序列构成。各个段的长度可以是0到某个允许的最大值之间的任何一个值。不同的段的长度可以不同，并且通常情况下也都不相同。段的长度在运行期间可以动态改变，比如，堆栈段的长度在数据被压入时会增长，在数据被弹出时又会减小。因为每个段都构成了一个独立的地址空间，所以它们可以独立地增长或减小而不会影响到其他的段。要在这种分段或二维的存储器中指示一个地址，程序必须提供两部分地址：一个段号和一个段内地址。<br></p>
    <el-row justify="center">
    <el-card style="max-width: 480px">
    <template #header>内存分段</template>
    <img
      src="../assets/image13.jpg"
      style="width: 100%"
    />
  </el-card></el-row>
    <el-divider border-style="double" />
    <h2 style="font-size:2rem">分页</h2>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页是信息的物理单位。分页的主要目的是为了实现离散分配，提高内存利用率。分页仅仅是系统管理上的需要，完全是系统行为，对用户是不可见的。<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页的大小固定且由系统决定。段的长度却不固定，决定于用户编写的程序。<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分页的用户进程地址空间是一维的，程序员只需给出一个记忆符即可表示一个地址。<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分段比分页更容易实现信息的共享和保护。不能被修改的代码称为纯代码或可重入代码(不属于临界资源)，这样的代码是可以共享的。可修改的代码是不能共享的。<br></p>
    <el-row justify="center">
    <el-card style="max-width: 480px">
    <template #header>内存分段</template>
    <img
      src="../assets/image13.jpg"
      style="width: 100%"
    />
  </el-card></el-row>
    <el-divider border-style="double" />    
    <h2 style="font-size:2rem">段页式（Segmentation with Paging，Segmented Paging）</h2>
    <el-row justify="center">
    <el-card style="max-width: 480px">
    <template #header>段页式</template>
    <img
      src="../assets/image12.jpg"
      style="width: 100%"
    />
  </el-card></el-row>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;段页式综合两种方式。将进程按逻辑模块分段（segment），再将各段分页（paging，如每个页面4KB），再将内存空间分为大小相同的内存块（page frame，页框/页帧/物理块），进程前将各页面分别装入各内存块中.<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;段页式系统的逻辑地址结构由段号、页号、页内地址（页内偏移量）组成。如上图。</p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;段号（Segment No.）的位数决定了每个进程最多可以分几个段<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页号（Page No.）位数决定了每个段最大有多少页<br></p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页内偏移量（Page Offset）决定了页面大小、内存块大小是多少。</p>
    <p style="font-size:1rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“分段”对用户是可见的，程序员编程时需要显式地给出段号、段内地址。而将各段“分页”对用户是不可见的。系统会根据段内地址自动划分页号和页内偏移量。因此段页式管理的地址结构是二维的。 段页式存储，囊括了段表和页表<br></p>


</template>

<script>
</script>