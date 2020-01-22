import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/HomePage.vue'),
                    meta: { title: '系统首页' }
                },
                {   //系统配置
                    path: '/SysConfig',
                    component: () => import(/* webpackChunkName: "SysConfig" */ '../components/page/SysConfig.vue'),
                    meta: { title: '系统配置' }
                },
                {   //app权限管理
                    path: '/appPower',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/AppPower.vue'),
                    meta: { title: 'app权限管理' }
                },
                {   //部门管理
                    path: '/dept',
                    component: () => import(/* webpackChunkName: "OrganizationTree" */ '../components/page/Dept.vue'),
                    meta: { title: '部门管理' }
                },
                {   //员工信息
                    path: '/deptUser',
                    component: () => import(/* webpackChunkName: "User" */ '../components/page/DeptUser.vue'),
                    meta: { title: '员工信息' }
                },

                {   //用户管理
                    path: '/sysUser',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/SysUser.vue'),
                    meta: { title: '用户管理' }
                },

                {   //角色管理
                    path: '/SysRole',
                    component: () => import(/* webpackChunkName: "Role" */ '../components/page/SysRole.vue'),
                    meta: { title: '角色管理' }
                },

                {   //权限管理
                    path: '/SysAuth',
                    component: () => import(/* webpackChunkName: "Auth" */ '../components/page/SysAuth.vue'),
                    meta: { title: '权限管理' }
                },

                {
                    // 考勤规则
                    path: '/rule',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/rule.vue'),
                    meta: { title: '考勤规则' }
                },

                {
                    // 门禁配置
                    path: '/floorControl',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/floorControl.vue'),
                    meta: { title: '楼宇管理' }
                },

                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    //vip管理
                    path: '/vip',
                    component: () => import(/* webpackChunkName: "vipTable" */ '../components/page/Vip.vue'),
                    meta: { title: 'vip管理' }
                },
                {   //公告管理
                    path: '/notice',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/Equipment.vue'),
                    meta: { title: '公告管理' }
                },
                {   //公告管理
                    path: '/news',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/Equipment.vue'),
                    meta: { title: '新闻管理' }
                },
                {   //秘钥管理
                    path: '/key',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/key.vue'),
                    meta: { title: '秘钥管理' }
                },
                {   //秘钥管理
                    path: '/visitor',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/visitor.vue'),
                    meta: { title: '访客管理' }
                },

            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录',
                    requireAuth:true
            }

        },
       /* {
            path: '*',
            redirect: '/404'
        }*/
    ]
});
