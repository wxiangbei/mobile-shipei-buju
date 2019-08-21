//获取localtion地址参数的方法
function getUrlParam (key) { 
    var reg = new RegExp(key+'=([^&]*)');
    var results = location.href.match(reg);
    return results ? results[1] : null;
 }
 //时间差转换成时分秒
 function getHoursMinutesSecondsByMs(ms){
    ms=+ms;
    if(ms<0){
        return null;
    }
    var hours = parseInt(ms/(1000*60*60))%24;
    var minutes = parseInt(ms/(1000*60))%60;
    var seconds = parseInt(ms/1000)%60;
    var hoursStr = ('0'+hours).slice(-2);
    var minutesStr = ('0'+minutes).slice(-2);
    var secondsStr = ('0'+seconds).slice(-2);
    // '221309'
    var str = hoursStr + minutesStr + secondsStr;
    return str.split('');
 }