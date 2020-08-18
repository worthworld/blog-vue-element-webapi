export default{


  // 获取窗口尺寸
 getWindowSize(){
   let windowSize={}
   windowSize.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
   windowSize.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
   return windowSize
 },
//  防抖
  debounce:(function(){
   let timeout=null;
   return function(fn){
     clearTimeout(timeout);
     timeout=setTimeout(()=>{
       console.log('timout')
       fn.call(this,arguments)
     },1500)
   }
   })()


}