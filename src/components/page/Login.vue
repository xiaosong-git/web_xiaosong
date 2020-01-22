<template>
    <div style="width: 100%;height: 100%">
        <div class="login-wrap">
        </div>
        <div class="ms-login">
            <el-form ref="form":model="form" :rules="rules" class="ms-content">
                <div class="ms-title">欢迎登录</div>
                <el-form-item prop="username">
                    <el-input
                            class="log-input"
                            v-model="form.username"
                            placeholder="请输入账号"
                            prefix-icon="el-icon-user"
                            >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            class="log-input"
                            v-model="form.password"
                            placeholder="请输入密码"
                            type="password"
                            prefix-icon="el-icon-lock"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item
                        prop="seccode"
                        class="inputbar"
                >
                    <el-input
                            class="log-input-checkcode"
                            v-model="form.seccode"
                            placeholder="验证码"
                            @keydown.enter.native="login('form')"
                    >
                    </el-input>
                    <span class="checkCode" @click="createCode">{{ checkCode}}</span>
                </el-form-item>
                <el-form-item>
                    <div class="login-btn">
                        <el-button
                                type="primary"
                                class="btn"
                                @click="login('form')"
                        >登录</el-button>
                    </div>
                </el-form-item>

            </el-form>
        </div>
        <div class="copy-right"> <label>Copyright 2019-2020 南京朋悦比邻科技有限公司</label></div>
    </div>
</template>

<script>
    import {login} from '../../api/index.js'
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: "",
                    seccode: "",
                },
                checkCode: '',
                rules: {
                    username: [{required: true, message: "请输入用户名", trigger: "blur"}],
                    password: [{required: true, message: "请输入密码", trigger: "blur"}],
                    seccode: [{required: true, message: "请输验证码", trigger: "blur"}],
                },
            };
        },
        mounted() {
            this.createCode();
        },
        methods: {
            createCode() {
                var code = "";
                const codeLength = 4; //验证码的长度
                const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                    'a','b','c','d','e','f','g','h','i','j',
                    'k','l','m','n','o','p','q','r','s','t',
                    'u','v','w','x','y','z'); //随机数
    for (let i = 0; i < codeLength; i++) { //循环操作
        let index = Math.floor(Math.random() * 62); //取得随机数的索引（0~35）
        code += random[index]; //根据索引取得随机数加到code上
    }
    this.checkCode = code; //把code值赋给验证码
            },
            // 对整个表单进行验证
            login() {
                this.$refs['form'].validate(valid => {
                    if (!valid) {
                        return;
                    }
                    // 调用登录功能
                    this.login();
                });
            },
            login() {
                if (this.form.seccode.toUpperCase() != this.checkCode.toUpperCase()) {
                    this.$message({
                        message: "验证码错误，请核对",
                        type: "warning"
                    });
                    this.createCode();
                    return false;
                }

               // var fd = new FormData();
                //fd.append("username", this.form.username);
                //fd.append("password", this.form.password);
                login(this.form).then(res => {
                    console.log(res);
                    if (res.result == 'success') {
                        localStorage.setItem("myToken", res.token);
                        localStorage.setItem("username", res.username);
                        localStorage.setItem("userId", res.userId);
                        //alert(res.userName)
                        this.$message({
                            message: "登录成功",
                            type: "success"
                        });
                        this.$router.push("/dashboard"); //跳转页面
                    } else {
                            this.$message({
                                message: res.resultMSG,
                                type: "warning"
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 39%;
        background-image: url(../../assets/img/bg_login.png);
        background-size: 100%;
    }
    .ms-title {
        width:96px;
        height:43px;
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(55,117,213,1);
        line-height:33px;
    }
    .ms-login {
        position: absolute;
        left: 40%;
        top: 32%;
        width: 20%;

        background: rgba(255,255,255,1);
        overflow: hidden;
        box-shadow:0px 2px 23px 0px rgba(159,157,157,0.36);
        border-radius:10px;
    }
    /*验证码*/
    .log-input-checkcode{
        width: 40%;

    }
    /*验证码*/
    .checkCode   {
        height: 30px;
        width: 40%;
        border: 1px solid #DDD;
        float: right;
        z-index: 1;
        font-size: 1.5em;
        text-align: center;
        line-height: 1.5em;
        cursor: text;
        background-image: url(../../assets/img/check_code_bg.jpg);
        background-repeat: repeat;
    }
    .ms-content {
        padding: 30px 30px;
    }
    .login-btn {
        text-align: center;
    }
    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }
    .copy-right{
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 5%;
        font-size: 15px;
        color:grey;
    }

</style>

