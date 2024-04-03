<template>
    <el-table :data="tableData" style="width: 1000px">
      <el-table-column prop="command" label="指令" width="180" />
      <el-table-column prop="op" label="[31:26]" width="180" />
      <el-table-column prop="rs" label="[25,0]" width="180" />
      <el-table-column prop="cg" label="指令功能" width="180" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
  const tableData = [
    {
      command:'j',
      op:'000010',
      rs:'address',
      cg:'无条件跳转',
    },
    {
      command:'jal',
      op:'001100',
      rs:'address',
      cg:'调用与联接',
    },
  ]
  </script>