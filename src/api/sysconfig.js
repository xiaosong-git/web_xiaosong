import request from '../utils/request';
let url="";
//系统配置
export const sysConfig = query => {  //请求的接口放置位置
    return request({
        url: '/config/add',  //接口请求的url
        method: 'post',
        params: query
    });

};
