<template>
    <el-table :data="tableData" style="width: 3000px">
      <el-table-column prop="command" label="指令" width="110" />
      <el-table-column prop="op" label="[31:26]" width="160" />
      <el-table-column prop="rs" label="[25,21]" width="110" />
      <el-table-column prop="rt" label="[20,16]" width="110" />
      <el-table-column prop="rd" label="[15,11]" width="110" />
      <el-table-column prop="shamt" label="[10,6]" width="180" />
      <el-table-column prop="funct" label="[5:0]" width="180" />
      <el-table-column prop="cg" label="指令功能" width="180" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
  const tableData = [
    {
      command:'add',
      op:'000000',
      rs:'rs',
      rt:'rt',
      rd:'rd',
      shamt:'00000',
      funct:'100000',
      cg:'寄存器加',
    },
    {
      command:'sub',
      op:'000000',
      rs:'rs',
      rt:'rt',
      rd:'rd',
      shamt:'00000',
      funct:'100010',
      cg:'寄存器减',
    },
    {
      command:'and',
      op:'000000',
      rs:'rs',
      rt:'rt',
      rd:'rd',
      shamt:'00000',
      funct:'100100',
      cg:'寄存器与',
    },
    {
      command:'or',
      op:'000000',
      rs:'rs',
      rt:'rt',
      rd:'rd',
      shamt:'00000',
      funct:'100101',
      cg:'寄存器或',
    },
    {
      command:'xor',
      op:'000000',
      rs:'rs',
      rt:'rt',
      rd:'rd',
      shamt:'00000',
      funct:'100110',
      cg:'寄存器异或',
    },
    {
      command:'sll',
      op:'000000',
      rs:'00000',
      rt:'rt',
      rd:'rd',
      shamt:'sa',
      funct:'100000',
      cg:'逻辑左移',
    },
    {
      command:'srl',
      op:'000000',
      rs:'00000',
      rt:'rt',
      rd:'rd',
      shamt:'sa',
      funct:'000010',
      cg:'逻辑右移',
    },
    {
      command:'sll',
      op:'000000',
      rs:'00000',
      rt:'rt',
      rd:'rd',
      shamt:'sa',
      funct:'000011',
      cg:'算数右移',
    },
    {
      command:'jr',
      op:'000000',
      rs:'rs',
      rt:'00000',
      rd:'00000',
      shamt:'00000',
      funct:'001000',
      cg:'寄存器跳转',
    },

  ]
  </script>