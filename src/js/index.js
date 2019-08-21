$(function(){
  //绑定搜索按钮的初始化事件
    $('#btnSrch').on('tap',function (e) { 
        //获取搜索框文本内容
        var srchTxt = $("#srchTxt").val()||'衣服';
        //页面跳转到搜索页，并把参数传递给搜索页面
        // window.location.href = '../srch.html?kw=345$name=wrb';
        window.location.href = '../srch.html?kw='+srchTxt;
     })

     //初始化轮播图
     initBannerSwiper()
     //注册时钟的回调函数
     timerFnArray.push(updateMsTimer)
     //初始化时钟秒杀并启动
     timer = setInterval(function(){
       timerIndex +=1;
       timerIndex = timerIndex % 100;
       //执行页面中所有需要注册时钟执行的函数
       for(var i = 0;i<timerFnArray.length;i++){
         timerFnArray[i]();//调用数组中每个回调函数执行
       }
     },200)
});
var timer,//时钟id
timerIndex = -1,//时钟索引
timerFnArray = [];//存放页面时钟回调函数
//页面卸载之前清除时钟
window.onunload = function () { 
  clearInterval(timer);
 }
//更新当前时间与秒杀结束事件的span标签数字
function updateMsTimer(){
  //每秒钟执行页面中时间
  if(timerIndex % 5 != 0){
    return ;
  }
  //满一秒钟
  //计算时间更新页面的span中
  var endData =  new Date(loadData.ms.endTime)
  //['2','2','2','2','4','5']
  var strArr  = getHoursMinutesSecondsByMs(endData-Date.now());
  $('#msTimerBox .time-num').each(function (index,item) { 
    $(item).text(strArr[index])
   })
}


function initBannerSwiper(){
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })        
}