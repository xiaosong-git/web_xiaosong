<template>
    <!--系统配置-->
    <div class="app">
        <div class="content-header">
            <div class="filter-container">
                <!--<el-input v-model="pagination.queryString" placeholder="登录名" style="width: 200px;"
                          class="filter-item"/>-->
                <el-input v-model="pagination.realName" placeholder="姓名" style="width: 200px;"
                          class="filter-item"/>

                <el-button class="search" @click="findPage()">查询</el-button>
                <el-button  class="add" @click="handleCreate()">新增</el-button>

                <el-button  class="del" @click="handleUpload()" >批量导入</el-button>

        </div>

    </div>
    <div class="app-container">
            <div class="box">
                <el-table :data="dataList" size="small" v-loading="listLoading"
                          current-row-key="id" stripe
                          highlight-current-row>
                    <el-table-column prop="id" align="center" label="员工id" v-if='show'/>
                    <el-table-column prop="userNo" align="center" label="工号"/>
                    <el-table-column prop="realName" align="center" label="姓名"/>
                    <el-table-column prop="sex" label="性别" align="center" :formatter="stateFormat"/>
                    <el-table-column prop="dept_name" align="center" label="所属部门"/>
                    <el-table-column prop="phone" label="电话" align="center"/>
                    <el-table-column prop="intime" label="入职时间" align="center"/>

                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-link type="primary" @click="handleUpdate(scope.$index,scope.row)" icon="el-icon-edit">编辑</el-link>
                            &nbsp; &nbsp;
                            <el-link type="primary" @click="handleDelete(scope.$index,scope.row)" icon="el-icon-delete">删除</el-link>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination-container">
                    <el-pagination :current-page="pagination.currentPage" :page-size="pagination.pageSize"
                                   :total="pagination.total" class="pagiantion"
                                   layout="total, prev, pager, next, jumper" @current-change="handleCurrentChange"/>
                </div>
                <!-- 新增标签弹层 -->
                <div class="add-form">
                    <el-dialog :visible.sync="dialogFormVisible" title="新增用户" width="25%" :append-to-body='true' :modal-append-to-body='false'>
                        <el-form ref="dataAddForm" :model="formData" :rules="rules" label-position="right"size="small"
                                 label-width="120px">
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="工号:" prop="userNo">
                                        <el-input v-model="formData.userNo"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="员工名:" prop="realName">
                                        <el-input v-model="formData.realName"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="性别:" prop="sex">
                                        <el-select v-model="formData.sex" placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="所属部门:" prop="deptId">
                                        <el-select v-model="formData.deptId" placeholder="请选择">
                                            <el-option
                                                    v-for="item in dept"
                                                    :key="item.id"
                                                    :label="item.dept_name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="身份证号码:" prop="idNO">
                                        <el-input v-model="formData.idNO"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="联系方式:" prop="phone">
                                        <el-input v-model="formData.phone"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="入职时间" prop="intime">
                                        <el-date-picker
                                                v-model="formData.intime"
                                                type="date"
                                                format="yyyy-MM-dd"
                                                value-format="yyyy-MM-dd"
                                                placeholder="选择日期" style="width:100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="住址:" prop="addr">
                                        <el-input v-model="formData.addr"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="备注:" prop="remark">
                                        <el-input v-model="formData.remark"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="handleAdd()">确定</el-button>
                            <el-button @click="dialogFormVisible = false">取消</el-button>
                        </div>
                    </el-dialog>
                </div>

                <!-- 编辑标签弹层 -->
                <div class="add-form" v-loading="dialogLoading" >
                    <el-dialog :visible.sync="dialogFormVisible4Edit" title="用户信息修改" width="25%" :append-to-body='true'>
                        <el-form ref="dataEditForm" :model="formData" :rules="rules" label-position="right" size="small"
                                 label-width="120px">
                            <el-row>
                                <el-col :span="10" style="display: none;">
                                    <el-form-item label="用户id:" prop="id">
                                        <el-input v-model="formData.id"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="工号:" prop="userNo">
                                        <el-input v-model="formData.userNo"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="员工名:" prop="realName">
                                        <el-input v-model="formData.realName"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="性别:" prop="sex">
                                        <el-select v-model="formData.sex" placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="所属部门:" prop="deptId">
                                        <el-select v-model="formData.deptId" placeholder="请选择">
                                            <el-option
                                                    v-for="item in dept"
                                                    :key="item.id"
                                                    :label="item.dept_name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="身份证号码:" prop="idNO">
                                        <el-input v-model="formData.idNO"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="联系方式:" prop="phone">
                                        <el-input v-model="formData.phone"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="入职时间" prop="intime">
                                        <el-date-picker
                                                v-model="formData.intime"
                                                type="date"
                                                format="yyyy-MM-dd"
                                                value-format="yyyy-MM-dd"
                                                placeholder="选择日期" style="width:100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="住址:" prop="addr">
                                        <el-input v-model="formData.addr"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="20">
                                    <el-form-item label="备注:" prop="remark">
                                        <el-input v-model="formData.remark"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="handleEdit()">确定</el-button>
                            <el-button @click="dialogFormVisible4Edit = false">取消</el-button>
                        </div>
                    </el-dialog>
                </div>
                <!--文件上传-->
                <div class="add-form" v-loading="dialogLoading" >
                    <el-dialog :visible.sync="dialogFormVisibleUpload" title="批量导入" width="25%" :append-to-body='true'>
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="'/visitor/web/deptUser/uploadUser'"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList"
                                :data="dataArray"
                                style="display:inline"
                                :auto-upload="false">
                            <el-button  size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传excel文件</div>
                        </el-upload>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {addDeptUserSet, selectDeptUserSet, delDeptUserSet, editDeptUserSet,selectDeptByOptionSet} from '../../api/index.js'
    import {validatePhone,validateIdNo} from '../../utils/validator.js'

    export default {
        name: '',
        components: {},
        data() {
            return {
                pagination: {
                    // 分页相关模型数据
                    currentPage: 1, // 当前页码
                    pageSize: 10, // 每页显示的记录数
                    total: 0, // 总记录数
                    queryString: null, // 查询条件
                    realName:null
                },
                dataArray:{ token: localStorage.getItem('myToken'),userId:localStorage.getItem('userId')},
                dept:{},
                options: [{
                    value: '1',
                    label: '男'
                }, {
                    value: '2',
                    label: '女'
                }],
                controllerShow: true,//自有控制器隐藏控件
                dataList: [], // 当前页要展示的分页列表数据
                formData: {}, // 表单数据
                sels: [],//列表选中列
                dialogFormVisible: false, // 增加表单是否可见
                dialogFormVisible4Edit: false, // 编辑表单是否可见
                dialogFormVisibleUpload: false, // 批量添加表单是否可见
                listLoading: false,       //列表加载
                dialogLoading: false,
                rules: {
                    // 校验规则
                    realName: [{required: true, message: '用户名', trigger: 'blur'}],
                    sex: [{required: true, message: '用户密码', trigger: 'blur'}],
                    tel: [{required: true, message: '真实姓名', trigger: 'blur'},{validator:validatePhone,trigger: 'blur'}],
                    idNO: [{required: true, message: '身份证号码', trigger: 'blur'},{validator:validateIdNo,trigger: 'blur'}],
                }
            };
        },
        created() {
            this.findPage(); // VUE对象初始化完成后调用分页查询方法，完成分页查询
        },
        mounted() {
            this.getDept();
        },
        methods: {

            submitUpload() {

                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },

            //获取部门信息填充到下来框
            //获取用户角色注入下拉框
            getDept(){
                let param = {
                    token: localStorage.getItem('myToken'),
                    userId:localStorage.getItem('userId')
                };
                selectDeptByOptionSet(param).then(res => {
                    // alert(res.size)
                    // 解析Controller响应回的数据，为模型数据赋值
                    this.dept = res;
                    this.listLoading = false;
                });

            },

            stateFormat(row, column) {
                if (row.istop === '1') {
                    return '男'
                } else  {
                    return '女'
                }
            },

            // 编辑
            handleEdit() {
                // 进行表单校验
                this.dialogLoading = true,
                    this.$refs['dataEditForm'].validate(valid => {
                        if (valid) {
                            // 表单校验通过，可以提交数据
                            this.formData.token=localStorage.getItem('myToken');
                            this.formData.userId=localStorage.getItem('userId');
                            editDeptUserSet(this.formData)
                                .then(res => {
                                    this.dialogLoading = false;
                                    if (res.success) {
                                        // 弹出成功提示信息
                                        this.$message({
                                            type: 'success',
                                            message: "修改成功"
                                        });
                                    } else {
                                        // 执行失败
                                        this.$message.error("修改失败");
                                    }
                                })
                                .finally(() => {
                                    // 隐藏编辑窗口
                                    this.dialogFormVisible4Edit = false;
                                    // 不管成功还是失败，都调用分页查询方法
                                    this.findPage();

                                });
                        } else {
                            // 表单校验不通过
                            this.$message.error('表单数据校验失败!');
                            return false;
                        }
                    });
            },
            // 添加
            handleAdd() {

                // 进行表单校验
                this.$refs['dataAddForm'].validate(valid => {
                    if (valid) {
                        // 表单校验通过，发生ajax请求，将录入的数据提交到后台进行处理
                        console.log(this.formData);
                        this.formData.token=localStorage.getItem('myToken');
                        this.formData.userId=localStorage.getItem('userId');
                        //this.formData.append('token',localStorage.getItem('myToken'));
                        this.listLoading = true;

                        addDeptUserSet(this.formData)
                            .then(res => {
                                // 关闭新增窗口
                                if (res.success) {
                                    // 执行成功
                                    // 新增成功后，重新调用分页查询方法，查询出最新的数据
                                    // 弹出提示信息
                                    this.$message({
                                        message: "添加成功",
                                        type: 'success'
                                    });
                                    this.findPage();
                                } else {
                                    // 执行失败,弹出提示
                                    this.$message.error("添加失败");
                                }
                            })
                            .finally(() => {
                                // 不管成功还是失败，都调用分页查询方法
                                this.findPage();
                                // 隐藏编辑窗口
                                this.dialogFormVisible = false;
                            });
                    } else {
                        // 校验不通过
                        this.$message.error('数据校验失败，请检查你的输入信息是否正确！');
                        return false;
                    }
                    this.listLoading = false;
                });


            },
            //根据控制器隐藏控件
            hideUI() {
                this.controllerShow = false;
            },
            //根据控制器显示控件
            viewUI() {
                this.controllerShow = true;
            },
            // 分页查询
            findPage() {
                // 发送ajax请求，提交分页相关请求参数（页码、每页显示记录数、查询条件）
                var param = {
                    currentPage: this.pagination.currentPage,
                    pageSize: this.pagination.pageSize,
                    realName: this.pagination.realName,
                    token: localStorage.getItem('myToken'),
                    userId:localStorage.getItem('userId')
                };

                this.listLoading = true,
                    selectDeptUserSet(param).then(res => {
                        // alert(res.size)
                        // 解析Controller响应回的数据，为模型数据赋值
                        console.log(res);
                        this.dataList = res.list;
                        this.pagination.total = res.totalRow;
                        this.listLoading = false;
                    });
            },
            // 重置表单
            resetForm() {
                this.formData = {}; // 重置数据
            },
            // 弹出添加窗口
            handleCreate() {
                // 弹出新增窗口
                this.dialogFormVisible = true;
                this.resetForm();
            },
            //批量添加弹窗
            handleUpload() {
                // 弹出新增窗口
                this.dialogFormVisibleUpload = true;
                this.resetForm();
            },
            // 弹出编辑窗口
            handleUpdate(index, row) {
                // 弹出编辑窗口
                this.dialogFormVisible4Edit = true;
                this.formData = Object.assign({}, row);
            },
            // 切换页码
            handleCurrentChange(currentPage) {
                // 设置最新的页码
                this.pagination.currentPage = currentPage;
                // 重新调用findPage方法进行分页查询
                this.findPage();
            },
            // 删除
            handleDelete(index, row) {
                // row其实是一个json对象，json对象的结构为{"age":"0-100","attention":"无","code":"0011","id":38,"name":"白细胞计数","price":10.0,"remark":"白细胞计数","sex":"0","type":"2"}
                // alert(row.id);
                this.formData = Object.assign({}, row);
                var para = {'id': this.formData.id,'token':localStorage.getItem('myToken'),'userId':localStorage.getItem('userId') }
                this.$confirm('你确定要删除当前数据吗？', '提示', {
                    // 确认框
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true,
                        // 用户点击确定按钮，发送ajax请求，将检查项ID提交到Controller进行处理
                        delDeptUserSet(para).then(res => {
                            this.listLoading = false,
                                this.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                            this.findPage();
                        });
                })
                    .catch(() => {
                        this.$message({
                            type: 'info',
                            message: '操作已取消'
                        });
                    });
            },
        }
    };
</script>

<style lang='less' scoped>

    /* title */
    .content-header {
        position: relative;
        padding: 15px 15px 0 15px;
        /* margin-top: 70px; */
    }

    .content-header > h1 {
        margin: 0;
        font-size: 24px;
        font-weight: normal;
    }

    .content-header > h1 > small {
        font-size: 15px;
        display: inline-block;
        padding-left: 4px;
        font-weight: 300;
    }

    .content-header > .breadcrumb {
        float: right;
        background: transparent;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 12px;
        padding: 7px 5px;
        position: absolute;
        top: 20px;
        right: 10px;
        border-radius: 2px;
    }

    /*  */
    .app-container {
        background: #fff;
        margin: 15px 30px 15px 15px;

    }

    .pagiantion {
        text-align: right;
        padding: 15px;
    }

    .box {
        position: relative;
        border-radius: 3px;
        background: #ffffff;
        border-top: 3px solid #3c8dbc;
        padding: 10px;
        margin-bottom: 20px;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }

    .filter-container {
        padding: 10px 0 15px 0;
    }

    .main-container {
        margin-top: 70px;
    }

    .filter-container .el-button, .filter-container .el-input__inner {
        padding: 0 15px;
        height: 34px;
        line-height: 34px;
    }

    .el-aside {
        overflow: hidden;
    }

    .el-submenu .el-menu-item a {
        display: block;
        height: 50px;
    }

    .el-menu--collapse .el-submenu__icon-arrow {
        display: none
    }

    /* .el-container{position: relative;} */
    .del{
        background:rgba(232,76,20,1);
        color:rgba(255,255,255,1);
        float: right;

    }
    .add{
        background:rgba(109,195,47,1);
        color:rgba(255,255,255,1);
        float: right;

    }
    .search{
        background:rgba(32,133,255,1);
        color:rgba(255,255,255,1);
        margin-left: 10px;
    }
    .dialog-footer{
        text-align: center;
    }
    .el-dialog-body{
        overflow:auto;
    }

</style>
