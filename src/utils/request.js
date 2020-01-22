import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    baseURL: 'http://192.168.4.41:8080', // 配置axios接口路径
    timeout: 5000,
    withCredentials: false, // 允许携带cookie
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});

// 配置请求拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);
// 配置响应拦截器
service.interceptors.response.use(
                response => {
                    console.log(response);
                    if (response.status === 200) {
                        if(response.data.result==='overLogin'){
                            alert('您的账户在另外一个电脑登录，请重新登录');
                            window.location.href='/#/login';
                        }else if(response.data.result==='loginOut'){
                            alert('您未登录或者登录超时，请重新登录');
                            window.location.href='/#/login';
                        }else{
                            return response.data;
                        }
                    } else {
                        return Promise.reject(error);
        }
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default service;
// 请求封装位置
