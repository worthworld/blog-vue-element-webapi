/*
 * @Description: cookie、localStorage、sessionStorage的存取数据工具 
 * cookie 保存在电脑的文本文件，有过期时间
 * localStorage 浏览器中存储,没有过期时间
 * sessionStorage 保存在当前会话中，关闭窗口或标签页即删除
 */
let ls=window.localStorage,ss=window.sessionStorage
 
export const cookie={
    get(key){
        let name=key+'=';
        let arr=document.cookie.split(";");
        if(arr.length>0){
            for(let item of arr)
            {
              if(item.trim.indexOf(name)==0) 
              return item.substring(name.length,item.length)
            }
        }
        return '';
    },
    set(key,val,day=20){
        let d = new Date();
        d.setTime(d.getTime()+(day*24*60*60*1000));
        let expires = "expires="+d.toGMTString();
        // 判断key是否为对象，是则遍历set
        let obj=arguments[0];
        if(Object.prototype.toString.call(obj).slice(8,-1)=='Object')
        {
            for(let item in obj){
            document.cookie = item + "=" + obj[item] + "; " + expires;
            }
        }else{
            document.cookie = key + "=" + val + "; " + expires;
        }
       
    },
    remove(key){
        let obj=arguments[0];
        if(Object.prototype.toString.call(obj).slice(8,-1)=='Object')
        {
            obj.forEach((item)=>{
                this.set(item,'',-1)
            })
        }else{
            this.set(key,'',-1)
        }
    }
}

export const Local={
  get(key){
    if(key)  return JSON.parse(ls.getItem(key)||'null')
    return null
  },
  set(key,val){
    ls.setItem(key,JSON.stringify(val))
  },
  remove(key){
      if(key) {
          ls.removeItem(key)
        }
  },
  clear(){
      ls.clear()
  }
}

export const Session={
    get(key){
      if(key)  return JSON.parse(ss.getItem(key)||'null')
      return null
    },
    set(key,val){
      ss.setItem(key,JSON.stringify(val))
    },
    remove(key){
        if(key) {
            ss.removeItem(key)
          }
    },
    clear(){
        ss.clear()
    }
  }

