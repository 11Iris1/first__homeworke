<template>
    <div>
      <h1>Compile Java Code to Assembly</h1>
      <pre>{{ compiledCode }}</pre>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    mounted() {
      this.fetchCompilerId();
    },
    methods: {
      async fetchCompilerId() {
        try {
          const response = await axios.get('https://godbolt.org/api/compilers/c++');
          // 处理获取到的编译器信息
          console.log(response.data);
          // 在这里根据返回的数据找到 JDK 17 对应的编译器 ID
        } catch (error) {
          console.error('获取编译器信息失败:', error);
        }
      }
    }
  }
  </script>