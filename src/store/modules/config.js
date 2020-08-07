import axios from "axios"

const config={
    state:{
        "htmlTitle":"",
        "github":""
    },
    mutations:{
         set_config:(state,config)=>{
             state.htmlTitle=config['htmlTitle']||"worthworld",
             state.github=config['github']||'https://github.com/worthworld/blog-vue-element.git'
         }
    },
    actions:{
        Init({commit})
        {
         axios.get('/config.json').then(
             ret=>{
                console.log(JSON.stringify(ret.data))
                let config=JSON.stringify(ret.data)
                commit('set_config',config)
             }
         ).catch(
             err=>{
                console.log(JSON.stringify(err))
             }
         )
        }
    }
}

export default config