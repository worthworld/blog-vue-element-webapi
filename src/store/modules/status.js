const status={
    state:{
     "isLogin":false,
     "blog_account":'',
     "blog_password":'',
     "token":'',
     "nickName":''
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
        },
        set_nickName:(state,val)=>{
          console.log('set_nickName',val)
          state.nickName=val
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