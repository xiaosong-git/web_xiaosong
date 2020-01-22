<template>
    <div class="sidebar">
        <el-menu
                class="sidebar-el-menu"
                :default-active="onRoutes"
                :collapse="collapse"
                background-color="#FFFFFF"
                text-color="#000000"
                active-text-color="#015EFF"
                active-background-color='#033CE1'
                unique-opened
                router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-setting',
                    index: '3',
                    title: '系统管理',
                    subs: [
                        {
                            index: 'SysUser',
                            title: '用户管理'
                        }, {
                            index: 'SysRole',
                            title: '角色管理'
                        }, {
                            index: 'SysAuth',
                            title: '权限管理'
                        },
                        {
                            index: 'SysConfig',
                            title: '参数配置'
                        },
                        {
                            index: 'key',
                            title: '上位机管理'
                        },
                        {
                            index: 'appPower',
                            title: 'APP管理'
                        },
                        {
                            index: 'notice',
                            title: '公告管理'
                        },
                        {
                            index: 'news',
                            title: '新闻管理'
                        },


                    ]
                },
                {
                    icon: 'el-icon-s-custom',
                    index: '3-2',
                    title: '企业管理',
                    subs: [
                        {
                            index: 'floorControl',
                            title: '楼宇管理'
                        },
                        {
                            index: 'dept',
                            title: '部门管理'
                        },
                        {
                            index: 'deptUser',
                            title: '员工管理'
                        },
                        {
                            index: 'vip',
                            title: 'VIP管理'
                        }
                    ]
                },
                {
                    icon: 'el-icon-s-data',
                    index: '3-3',
                    title: '数据分析',
                    subs: [
                        {
                            index: 'markdown',
                            title: '考勤管理',
                            subs: [
                                {
                                    index: 'rule',
                                    title: '考勤规则'
                                },
                                {
                                    index: 'personal_attendance',
                                    title: '考勤统计'
                                }
                            ]
                        },{
                            index: 'visitor',
                            title: '访客管理'
                        },
                    ]
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .sidebar > ul {
        height: 100%;
    }
</style>
