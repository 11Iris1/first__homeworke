<template>
    <el-table :data="tableData" style="width: 3000px">
      <el-table-column prop="command" label="指令" width="110" />
      <el-table-column prop="op" label="[31:26]" width="160" />
      <el-table-column prop="rs" label="[25,21]" width="180" />
      <el-table-column prop="rt" label="[20,16]" width="180" />
      <el-table-column prop="imm" label="[15,0]" width="180" />
      <el-table-column prop="cg" label="指令功能" width="180" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
  const tableData = [
    {
      command:'addi',
      op:'001000',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'寄存器(立即数)加',
    },
    {
      command:'andi',
      op:'001100',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'寄存器(立即数)与',
    },
    {
      command:'ori',
      op:'001101',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'寄存器(立即数)或',
    },
    {
      command:'addi',
      op:'001110',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'寄存器(立即数)异或',
    },
    {
      command:'lw',
      op:'100011',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'存储器中读取数据',
    },
    {
      command:'sw',
      op:'101011',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'数据保存到存储器',
    },
    {
      command:'lui',
      op:'001111',
      rs:'00000',
      rt:'rt',
      imm:'imm',
      cg:'设置寄存器的高为16位',
    },
    {
      command:'beq',
      op:'000100',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'寄存器相等则转移',
    },
    {
      command:'bne',
      op:'000101',
      rs:'rs',
      rt:'rt',
      imm:'imm',
      cg:'寄存器不相等则转移',
    },

    
  ]
  </script>