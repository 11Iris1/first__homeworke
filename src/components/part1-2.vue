<template>
    <el-space direction="vertical"  wrap>
        <el-text tag="b" size="large" style="min-width: 1200px">
            <h2 style="text-align: center;">本部分介绍浮点数原理</h2>
        

            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个32位浮点数可以被划分为三个部分
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;符号位：占据最高位第31位这一位，用于表示这个浮点数的正负，0表示正数，1表示负数,
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指数位占据第30位到第23位, IEEE754规定, 指数位用于表示[-127, 128]范围内的指数
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尾数位占据剩余的22位到0位。用二进制数表示十进制浮点数时, 表示为尾数*指数的形式, 并把尾数的小数点放在第一位和第二位之间, 然后保证第一位数非0, 这个处理过程叫做规格化。
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中指数部分的存储采用移位存储，即实际指数加上偏移值(127)后得到的数存储在指数部分
        </el-text>
        <br>
      <el-table :data="tfloat" style="width: 100%">
        <el-table-column prop="sf" label="数符" width="150" />
        <el-table-column label="指数部分">
          <el-table-column prop="jf" label="阶符" width="120" />
          <el-table-column prop="jf" label="阶码" width="120" />
        </el-table-column>
        <el-table-column prop="ws" label="尾数" width="150" />
      </el-table>
      <br>

     </el-space>
        <el-text tag="b" size="large" style="min-width: 480px;align-items:baseline">
        输入一个浮点数

      </el-text>
      <br>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
        <el-button @click="handleInputContent">点击按钮</el-button>
        <br>
        <br>
        <br>
        <el-space direction="vertical" style="display: flex;" wrap>
        <el-table :data="ttfloat" style="width: 100%;">
        <el-table-column prop="tsf" label="数符" width="150" />
        <el-table-column label="指数部分">
          <el-table-column prop="tjf" label="阶符" width="120" />
          <el-table-column prop="tjm" label="阶码" width="120" />
        </el-table-column>
        <el-table-column prop="tws" label="尾数" width="150" />
      </el-table>
    </el-space>





  </template>
<script >

export default{

    data(){
        return {
        tfloat:[
        {
            sf:'1bits',
            jf:'1bits',
            jm:'7bits',
            ws:'23bits'
        }
        ],    
        ttfloat:[
        {
            tsf:'',
            tjf:'',
            tjm:'',
            tws:''
        }
        ], 
            input:''
        };
      
    },    
    methods:{
        handleInputContent(){
            let num = parseFloat(this.input);
            let floatArray = new Float32Array(1);
            floatArray[0] = num;
            let  floatView = new Uint32Array(floatArray.buffer);
            let bits = floatView[0].toString(2);
            while(bits.length < 32){
                bits='0' + bits;
            }
            this.ttfloat[0].tsf =bits.substring(0,1); 
            this.ttfloat[0].tjf =bits.substring(1,2); 
            this.ttfloat[0].tjm =bits.substring(2,9); 
            this.ttfloat[0].tws =bits.substring(9); 
            console.log(bits);
        }
    }
 
}


</script>