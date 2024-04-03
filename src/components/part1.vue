<template>
      <el-backtop :right="100" :bottom="100" />
<h2 class="animate__animated animate__bounce" style="text-align: center; font-size: 3rem;">本部分介绍以二进制中数据与代码</h2>
<p style="font-size:1rem">数据与代码均以二进制存储在主存中,根据 PC 所处位置,执行当前位置的二进制码,PC值自动+1,或者当前指令为跳转指令直接根据指令将 PC 值跳转到别的位置.程序计数器PC中的数值，用来指示当前指令在主存中的位置。当一条指令被取出后，PC中的数值将根据指令字长度而自动递增。</p>


<el-divider border-style="double" />    
  <h2 class="animate__animated animate__bounce" style="text-align: center; font-size: 3rem;">本部分介绍补码</h2>
    <p style="font-size:1rem">原码：符号位与实际数值的结合表示。正数的符号位为0，数值部分就是数字的绝对值大小；负数的符号位为1，数值部分也是数字的绝对值大小。8位二进制原码的表示范围为[-127,127]。</p>
  <br>
  <p style="font-size:1rem">反码：正数的反码与原码一致，负数的反码，符号位为1，剩余的位数字是在原码的基础上对各个位取反。8位二进制反码的表示范围为[-127,127]。</p>
  <br>
  <p style="font-size:1rem">补码：正数的补码与原码一致，负数的补码，符号位为1，剩余的位数字是在原码的基础上对各个位取反后加1。8位二进制补码的表示范围为[-128,127]。</p>

  <br>
    <div style="min-height: 100vh">
      <h2>输入一个整数，显示其二进制补码形式：</h2>
      <input type="number" v-model="inputNumber" @input="displayTwosComplement">
      <div>{{ binaryRepresentation }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputNumber: null,
        binaryRepresentation: ""
      };
    },
    methods: {
      displayTwosComplement() {
        let number = parseInt(this.inputNumber);
        let twosComplement = this.calculateTwosComplement(number);
        this.binaryRepresentation = `整数 ${number} 的二进制补码形式为: ${twosComplement}`;
      },
      calculateTwosComplement(number) {
        number = number & 0xFFFFFFFF;
        let numbers = new Array();
        let str = "";
        if (number & (1 << 31)) {
          let complement = ((-number) ^ 0xFFFFFFFF) + 1;
          for (let i = 31; i >= 0; i--) {
            numbers[i] = (complement >> i) & 1;
            str += numbers[i];
          }
          return str;
        } else {
          for (let i = 31; i >= 0; i--) {
            numbers[i] = (number >> i) & 1;
            str += numbers[i];
          }
          return str;
        }
      }
    }
  };
  </script>