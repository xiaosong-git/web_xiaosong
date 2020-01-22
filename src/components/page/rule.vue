<template>
    <div>
        <span>考勤类型:</span>
        <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <p>
            上下班打卡次数:
            <el-select v-model="val" placeholder="请选择">
                <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </p>
        <p>
            最早打卡时间:
            <el-select placeholder="07:00:59" disabled>
                <el-option></el-option>
            </el-select>
        </p>
        <p>
            最早打卡时间:
            <el-select placeholder="07:00:59" disabled>
                <el-option></el-option>
            </el-select>
        </p>
        <p>
            最早打卡时间:
            <el-select placeholder="07:00:59" disabled>
                <el-option></el-option>
            </el-select>
        </p>
        <p>
            最早打卡时间:
            <el-select placeholder="07:00:59" disabled>
                <el-option></el-option>
            </el-select>
        </p>
        <p>
            最早打卡时间:
            <el-select placeholder="07:00:59" disabled>
                <el-option></el-option>
            </el-select>
        </p>
        <p>
            考勤备注:
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        </p>
        <p>
            <el-button type="success">确认</el-button>
            <!-- 点击导出弹出一级 -->
            <el-button type="success" @click="handle">导出</el-button>
        </p>


        <el-dialog title="张三" :visible.sync="previewVisible" width="30%" @close="handleTwo">
            <span>我是一级</span>
            <!-- 点击确定弹出二级 -->
            <el-button type="primary" @click="previewVisible = false">确 定</el-button>
        </el-dialog>



        <el-dialog title="张三" :visible.sync="addPreviewVisible" width="30%">
            <span>我是二级</span>
            <el-button type="primary" @click="addPreviewVisible = false">确 定</el-button>

        </el-dialog>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '考勤'
                    },
                    {
                        value: '选项2',
                        label: '门禁'
                    }
                ],
                option: [
                    {
                        value: '选项1',
                        label: '周一至周五,每天四次'
                    },
                    {
                        value: '选项2',
                        label: '周一至周五,每天两次'
                    }
                ],
                value: '考勤',
                val: '周一至周五,每天四次',
                textarea: '',

                addPreviewVisible : false,
                previewVisible : false
            }
        },
        created() {},
        mounted() {},
        methods: {
            handle(){
                this.previewVisible = true
            },
            handleTwo(){
                this.addPreviewVisible = true
            }
        }
    }
</script>

<style lang='less' scoped>
    div {
        margin-left: 200px;
        width: 750px;
        //   background-color: red;
    }
    span {
        font-size: 14px;
    }

    .el-select {
        margin: 20px 0 0 20px;
        width: 600px;
    }
</style>
