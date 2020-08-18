import axios from 'axios'
import qs from "qs";
let ajax={};
// 创建 axios实例
if(process.env.NODE_ENV=='development')
{
    ajax=axios.create({
        baseURL:'/serve/api/Mobile/',
        timeout:3000
    })
}else{
    ajax=axios.create({
       baseURL:'/serve/api/Mobile/',
       timeout:4500
    })
    // ajax.defaults.baseURL='http://localhost:3553'
    ajax.defaults.headers.token="---"
}

// request拦截器，打印error
ajax.interceptors.request.use(
    config=>{
        if(config.method=="post"){
         config.data=qs.stringify(config.data);
        }
        return config;
    },
    error=>{
        console.warn('request:'+error);
        Promise.reject(error)
    }
)

// respone 拦截器，打印error
ajax.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        console.warn('response:'+error)
        return Promise.reject(error)
    }
)

export default ajax