<template>
    <div>
      <canvas ref="canvas" width="600" height="400"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    name: "StackAndLocalVariables",
    mounted() {
      this.drawStackAndLocalVariables();
    },
    methods: {
      drawStackAndLocalVariables() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext("2d");
  
        // 模拟操作数栈和局部变量表数据
        const operandStack = ["Puppy", "Animal", "new", "dup"];
        const localVariables = ["animal", "null", "null", "null"];
  
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // 绘制操作数栈
        ctx.fillStyle = "#0095DD";
        ctx.font = "16px Arial";
        ctx.fillText("Operand Stack", 50, 50);
        operandStack.forEach((item, index) => {
          ctx.fillText(item, 50, 80 + index * 30);
        });
  
        // 绘制局部变量表
        ctx.fillStyle = "#FF0000";
        ctx.fillText("Local Variables", 300, 50);
        localVariables.forEach((item, index) => {
          ctx.fillText(item, 300, 80 + index * 30);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  canvas {
    border: 1px solid black;
  }
  </style>