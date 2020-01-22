import request from '../utils/request';
let url="";
export const login = query => {  //请求的接口放置位置
    return request({
         //url: './table.json',
        url: '/visitor/web/login/userlogin',  //接口请求的url
        method: 'post',
        params: query
    });

};

//退出
export const logout = query => {  //请求的接口放置位置
    return request({
        url: '/visitor/web/login/logout',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const selectSysUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysUser/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addSysUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysUser/addSysUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delSysUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysUser/delSysUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editSysUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysUser/editSysUser',  //接口请求的url
        method: 'post',
        params: query
    });

};


export const selectSysRoleSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysRole/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addSysRoleSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysRole/addSysRole',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delSysRoleSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysRole/delSysRole',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editSysRoleSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysRole/editSysRole',  //接口请求的url
        method: 'post',
        params: query
    });

};


export const selectSysAuthSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysAuth/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addSysAuthSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysAuth/addSysAuth',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delSysAuthSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysAuth/delSysAuth',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editSysAuthSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysAuth/editSysAuth',  //接口请求的url
        method: 'post',
        params: query
    });

};



export const selectKeySet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vSysKey/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addKeySet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vSysKey/addKey',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delKeySet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vSysKey/delKey',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editKeySet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vSysKey/editKey',  //接口请求的url
        method: 'post',
        params: query
    });

};


export const selectSysConfigSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysConfig/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addSysConfigSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysConfig/addSysConfig',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delSysConfigSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysConfig/delSysConfig',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editSysConfigSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysConfig/editSysConfig',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const selectAppMenuSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/appMenu/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addAppMenuSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/appMenu/addAppMenu',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delAppMenuSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/appMenu/delAppMenu',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editAppMenuSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/appMenu/editAppMenu',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const selectDeptSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/dept/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addDeptSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/dept/addDept',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delDeptSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/dept/delDept',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editDeptSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/dept/editDept',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const selectDeptUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/deptUser/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addDeptUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/deptUser/addDeptUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delDeptUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/deptUser/delDeptUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editDeptUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/deptUser/editDeptUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const selectVipUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vipUser/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addVipUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vipUser/addVipUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delVipUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vipUser/delVipUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editVipUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/vipUser/editVipUser',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const selectOrgSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/org/findList',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const addOrgSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/org/addOrg',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const delOrgSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/org/delOrg',  //接口请求的url
        method: 'post',
        params: query
    });

};

export const editOrgSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/org/editOrg',  //接口请求的url
        method: 'post',
        params: query
    });

};


//获取下拉框角色数据
export const selectSysRoleByOptionSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/sysRole/findByOption',  //接口请求的url
        method: 'post',
        params: query
    });

}

export const selectVisitUserSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/visitor/findList',  //接口请求的url
        method: 'post',
        params: query
    });

}

//获取部门信息填充到下拉框内;
export const selectDeptByOptionSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/dept/findByOption',  //接口请求的url
        method: 'post',
        params: query
    });

}

//获取大楼信息填充到下拉框内;
export const selectOrgByOptionSet = query => {  //请求的接口放置位置
    return request({
        //url: './table.json',
        url: '/visitor/web/dept/findByOrgOption',  //接口请求的url
        method: 'post',
        params: query
    });

}