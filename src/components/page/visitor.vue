<template>
    <!--系统配置-->
    <div class="app">
        <div class="content-header">
            <div class="filter-container">
                <!--<el-input v-model="pagination.queryString" placeholder="登录名" style="width: 200px;"
                          class="filter-item"/>-->
                <el-input v-model="pagination.queryString" placeholder="电话" style="width: 200px;"
                          class="filter-item"/>
               <el-button class="dalfBut" @click="findPage()" size="mini">查询</el-button>
            </div>

        </div>
        <div class="app-container">
            <div class="box">
                <el-table :data="dataList" size="small" v-loading="listLoading"
                          current-row-key="id" stripe
                          highlight-current-row>
                    <el-table-column prop="id" align="center" label="id" v-if='show'/>
                    <el-table-column prop="userName" align="center" label="访问者姓名"/>
                    <el-table-column prop="userPhone" label="访问者电话" align="center"/>
                    <el-table-column prop="visitorName" align="center" label="被访者姓名"/>
                    <el-table-column prop="visitorPhone" label="被访者电话" align="center"/>
                    <el-table-column prop="startDate" label="申请访问时间" align="center"/>
                    <el-table-column prop="endDate" label="申请访问结束时间" align="center"/>
                    <el-table-column prop="inTime" label="来访时间" align="center"/>
                    <el-table-column prop="outTime" label="来访结束时间" align="center"/>
                </el-table>
                <div class="pagination-container">
                    <el-pagination :current-page="pagination.currentPage" :page-size="pagination.pageSize"
                                   :total="pagination.total" class="pagiantion"
                                   layout="total, prev, pager, next, jumper" @current-change="handleCurrentChange"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {selectVisitUserSet} from '../../api/index.js'

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
                controllerShow: true,//自有控制器隐藏控件
                dataList: [], // 当前页要展示的分页列表数据
                formData: {}, // 表单数据
                dialogFormVisible: false, // 增加表单是否可见
                dialogFormVisible4Edit: false, // 编辑表单是否可见
                listLoading: false,       //列表加载
                dialogLoading: false,
                rules: {
                }
            };
        },
        created() {
            this.findPage(); // VUE对象初始化完成后调用分页查询方法，完成分页查询
        },
        mounted() {
        },
        methods: {
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
                    selectVisitUserSet(param).then(res => {
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
            // 切换页码
            handleCurrentChange(currentPage) {
                // 设置最新的页码
                this.pagination.currentPage = currentPage;
                // 重新调用findPage方法进行分页查询
                this.findPage();
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
