<template>
    <!--系统配置-->
    <div class="app">
        <div class="content-header">
            <div class="filter-container">
                <el-button type="primary" class="butT" @click="handleCreate()">添加</el-button>
            </div>

        </div>
        <div class="app-container">
            <div class="box">
                <el-table :data="dataList" size="small" v-loading="listLoading"
                          current-row-key="id" stripe
                          highlight-current-row>
                    <el-table-column prop="id" align="center" label="app菜单id"/>
                    <el-table-column prop="function_name" align="center" label="功能别名"/>
                    <el-table-column prop="menu_code" label="菜单代码" align="center"/>
                    <el-table-column prop="menu_name" label="菜单名" align="center"/>
                    <el-table-column prop="menu_url" label="菜单地址" align="center"/>
                    <el-table-column prop="sid" label="父id" align="center"/>
                    <el-table-column prop="istop" label="是否启动" align="center" :formatter="stateFormat"/>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="mini" @click="handleUpdate(scope.$index,scope.row)">编辑
                            </el-button>
                            <el-button size="mini" type="text" @click="handleDelete(scope.$index,scope.row)">删除
                            </el-button>

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
                    <el-dialog :visible.sync="dialogFormVisible" title="新增app菜单">
                        <el-form ref="dataAddForm" :model="formData" :rules="rules" label-position="right"
                                 label-width="100px">
                            <el-row>
                                <el-col :span="10">
                                    <el-form-item label="功能别名:" prop="function_name">
                                        <el-input v-model="formData.function_name"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="菜单代码:" prop="menu_code">
                                        <el-input v-model="formData.menu_code"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="菜单名:" prop="menu_name">
                                        <el-input v-model="formData.menu_name"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="菜单地址:" prop="menu_url">
                                        <el-input v-model="formData.menu_url"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="父id:" prop="sid">
                                        <el-input v-model="formData.sid"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="是否启动:" prop="istop">
                                        <el-select v-model="formData.istop" placeholder="请选择">
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
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="handleAdd()">确定</el-button>
                            <el-button @click="dialogFormVisible = false">取消</el-button>
                        </div>
                    </el-dialog>
                </div>

                <!-- 编辑标签弹层 -->
                <div class="add-form" v-loading="dialogLoading">
                    <el-dialog :visible.sync="dialogFormVisible4Edit" title="app菜单修改">
                        <el-form ref="dataEditForm" :model="formData" :rules="rules" label-position="right"
                                 label-width="100px">
                            <el-row>
                                <el-col :span="10" style="display: none;">
                                    <el-form-item label="app菜单id:" prop="id">
                                        <el-input v-model="formData.id"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="功能别名:" prop="function_name">
                                        <el-input v-model="formData.function_name"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="菜单代码:" prop="menu_code">
                                        <el-input v-model="formData.menu_code"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="菜单名:" prop="menu_name">
                                        <el-input v-model="formData.menu_name"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="菜单地址:" prop="menu_url">
                                        <el-input v-model="formData.menu_url"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="父id:" prop="sid">
                                        <el-input v-model="formData.sid"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="是否启动:" prop="istop">
                                        <el-select v-model="formData.istop" placeholder="请选择">
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
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="handleEdit()">确定</el-button>
                            <el-button @click="dialogFormVisible4Edit = false">取消</el-button>
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {addAppMenuSet, selectAppMenuSet, delAppMenuSet, editAppMenuSet} from '../../api/index.js'

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
                    queryString: null // 查询条件
                },
                options: [{
                    value: 'close',
                    label: '关闭'
                }, {
                    value: 'open',
                    label: '启动'
                }],
                controllerShow: true,//自有控制器隐藏控件
                dataList: [], // 当前页要展示的分页列表数据
                formData: {}, // 表单数据
                sels: [],//列表选中列
                dialogFormVisible: false, // 增加表单是否可见
                dialogFormVisible4Edit: false, // 编辑表单是否可见
                listLoading: false,       //列表加载
                dialogLoading: false,
                rules: {
                    // 校验规则
                    function_name: [{required: true, message: '功能别名', trigger: 'blur'}],
                    menu_name: [{required: true, message: '菜单名', trigger: 'blur'}],
                    menu_code: [{required: true, message: '菜单编码', trigger: 'blur'}],
                }
            };
        },
        created() {
            this.findPage(); // VUE对象初始化完成后调用分页查询方法，完成分页查询
        },
        mounted() {

        },
        methods: {
            //判断功能是否启动
            stateFormat(row, column) {
                if (row.istop === 'open') {
                    return '启动'
                } else  {
                    return '关闭'
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
                            editAppMenuSet(this.formData)
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

                        addAppMenuSet(this.formData)
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
                    queryString: this.pagination.queryString,
                    token: localStorage.getItem('myToken'),
                    userId:localStorage.getItem('userId')
                };

                this.listLoading = true,
                    selectAppMenuSet(param).then(res => {
                        // alert(res.size)
                        // 解析Controller响应回的数据，为模型数据赋值
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
                        delAppMenuSet(para).then(res => {
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


</style>
