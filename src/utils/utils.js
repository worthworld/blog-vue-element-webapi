export default{



 getWindowSize(){
   let windowSize={}
   windowSize.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
   windowSize.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
   return windowSize
 }

}