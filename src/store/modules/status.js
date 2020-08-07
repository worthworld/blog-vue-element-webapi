const status={
    state:{
     "isLogin":false,
     "blog_account":'',
     "blog_password":'',
     "token":''
    },
    mutations:{
        set_login:(state,val)=>{
         state.isLogin=val
        },
        set_account:(state,val)=>{
         state.blog_account=val.account,
         state.blog_password=val.password
        },
        set_token:(state,val)=>{
          state.token=val
        }
    },
    actions:{
       login({commit}){
        
        commit('set_login',true)
       },
       cookie(){
           
       }
    }
}

export default status