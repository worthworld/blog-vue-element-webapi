import axios from 'axios'

let ajax={};
// 创建 axios实例
if(process.env.NODE_ENV=='development')
{
    ajax=axios.create({
        baseURL:'/api',
        timeout:3000
    })
}else{
    ajax=axios.create({
       baseURL:'/api',
       timeout:4500
    })
}

// request拦截器，打印error
ajax.interceptors.request.use(
    config=>{
        return config;
    },
    error=>{
        console.error('request:'+error);
        Promise.reject(error)
    }
)

// respone 拦截器，打印error
ajax.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        console.error('response:'+error)
        return Promise.reject(error)
    }
)

export default ajax