<template>
    <el-space direction="vertical" wrap>
        <br>

        <el-text tag="b" size="large" style="min-width: 480px">
            <h2 style="text-align: center;">本部分介绍指令集设计原理, 参考mips指令集规范</h2>
        

            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指令集可以分为三类,分别是 R、I、J 指令类型 
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R 指令是一般用来做算术和逻辑操作，里面有读取和写入数据的寄存器的地址。如果是逻辑位移操作，后面还有位移操作的位移量，而最后的功能码，则是在前面的操作码不够的时候，扩展操作码表示对应的具体指令的。
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I 指令，则通常是用在数据传输、条件分支，以及在运算的时候使用的并非变量还是常数的时候。这个时候，没有了位移量和操作码，也没有了第三个寄存器，而是把这三部分直接合并成了一个地址值或者一个常数。
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;J 指令就是一个跳转指令，高 6 位之外的 26 位都是一个跳转后的地址。
        </el-text>
     
        <el-row>
            <el-space wrap>
                
            <el-card style="min-width: 480px">
            <template #header>
            <div class="card-header">
            <span @click="navigateToRType">R 型指令</span>
            </div>
            </template>
            <el-table :data="rc" style="width: 100%">
            <el-table-column prop="op" label="op(操作码)" width="110" />
            <el-table-column prop="rs" label="R_s" width="75" />
            <el-table-column prop="rt" label="R_t" width="75" />
            <el-table-column prop="rd" label="R_d" width="75" />
            <el-table-column prop="shamt" label="shamt" width="75" />
            <el-table-column prop="funct" label="funct" width="75" />
            </el-table>
            <template #footer></template>
            </el-card>      

            <el-card style="min-width: 480px">
            <template #header>
            <div class="card-header">
            <span @click="navigateToIType">I 型指令</span>
            </div>
            </template>
            <el-table :data="ic" style="width: 100%">
            <el-table-column prop="op" label="op" width="75" />
            <el-table-column prop="rs" label="R_s" width="75" />
            <el-table-column prop="rt" label="R_t" width="75" />
            <el-table-column prop="imm" label="imm(立即数)" width="210" />
            </el-table>
            <template #footer></template>
            </el-card>
            </el-space>      
        </el-row>
        <el-space wrap>
                
                <el-card style="min-width: 480px">
                <template #header>
                <div class="card-header">
                <span @click="navigateToJType">J 型指令</span>
                </div>
                </template>
                <el-table :data="jc" style="width: 100%">
                <el-table-column prop="op" label="op" width="75" />
                <el-table-column prop="address" label="address" width="280" />
                </el-table>
                <template #footer></template>
                </el-card>
                <!-- <el-card></el-card> -->

            </el-space>
    </el-space>
</template>
<script  >
export default {
    data(){
        return{
            ic:[
            {
                op:'6bits',
                rs:'5bits',
                rt:'5bits',
                imm:'16bits'
            }
        ],
            jc:[
            {
                op:"6bits",
                address:'26bits'
            }
        ],
            rc:[
            {
                op:'6bits',
                rs:'5bits',
                rt:'5bits',
                rd:'5bits',
                shamt:'5bits',
                funct:'6bits'
            }
            ]
        };
    },
  methods: {
    navigateToRType() {
      // 在这里使用路由导航到 R 型指令页面
      this.$router.push('/part1-3-r'); // 假设 '/r-type' 是你定义的路由路径
    },
    navigateToIType() {
      // 在这里使用路由导航到 I 型指令页面
      this.$router.push('/part1-3-i'); // 假设 '/i-type' 是你定义的路由路径
    },
    navigateToJType() {
      // 在这里使用路由导航到 I 型指令页面j
      this.$router.push('/part1-3-j'); // 假设 '/i-type' 是你定义的路由路径
    }
  }

}

</script>