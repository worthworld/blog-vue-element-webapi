import axios from "axios"

const config={
    state:{
        "htmlTitle":"",
        "github":"",
        "logo":"",
        "avatar":"",
        "touristAvatar":""
    },
    mutations:{
         set_config:(state,config)=>{
             state.htmlTitle=config['htmlTitle']||"worthworld",
             state.github=config['github']||'https://github.com/worthworld/',
             state.logo=config['logo']||'/img/logo.jpg',
             state.avatar=config['avatar']||'/img/logo.jpg',
             state.touristAvatar=config['touristAvatar']||'/img/logo.jpg'
            }
    },
    actions:{
        Init({commit})
        {
         axios.get('/config.json').then(
             ret=>{
                // console.log(JSON.stringify(ret.data))
                commit('set_config',ret.data)
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