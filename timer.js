var 종료시간, 워커;
var 시간=0, 분=10, 초=0;
function 시계작동(){
    var now = new Data();
    var 남은시간 = 종료시간.getTime() - now.getTime();
    if(남은시간 <= 0){
        Timer_refresh(0);
        clearInterval(워커);
        alert("마시자!");
    }
    else{
        Timer_refresh(남은시간);
    }
}

function n2(num){
    return num > 10 ? num : "0" + num;
}

function Timer_refresh(milisec){
    T_hour = parseInt(Math.floor(milisec/3600000)%24);
    T_min = parseInt(Math.floor(milisec/60000)%60);
    T_sec = parseInt(Math.floor(milisec/1000)%60);
    $('#time').html(n2(T_hour)) + ":" + n2(T_min) + ":" (T_sec);
}

$ (document).ready(function(){
    $ (document).on('click', '#start', function(){
        종료시간 = new Data();
        종료시간.setSeconds(종료시간.getSeconds()+시간);
        종료시간.setMinutes(종료시간.getMinutes()+분);
        종료시간.setHours(종료시간.getHours()+초);
        워커 = setInterval(시계작동, 500);
    });
});<p></p>