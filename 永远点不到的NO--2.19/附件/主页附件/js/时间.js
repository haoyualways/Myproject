var t=null;
/* 设置定时器一秒钟刷新一次 */
t=setTimeout(time,1000);
function time(){
	var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    clearTimeout(t);  //清除定时器
    sj=new Date();
    var year=sj.getYear()+1900;  //获取年 
    var month=sj.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
    var days=sj.getDate(); //获取日期
    var day=sj.getDay();    //获取日
    var xiaoshi=sj.getHours();   //获取小时
    var fengzhong=sj.getMinutes();  //获取分钟
    var miao=sj.getSeconds();   //获取秒
    if(xiaoshi<10){
        xiaoshi="0"+xiaoshi;
    }
    if(fengzhong<10){
        fengzhong="0"+fengzhong;
    }
    if(miao<10){
        miao="0"+miao;
    }
    document.getElementById("shijian").innerHTML=year+"年"+month+"月"+days+"日"+" "+week[day]+" "+xiaoshi+":"+fengzhong+":"+miao+"";
    t = setTimeout(time, 1000);
}
// var t=null;
// /* 设置定时器一秒钟刷新一次 */
// t=setTimeout(time,1000); 
// function time(){
// 	clearTimeout(t);  //清楚定时器
// 	sj=new Date();
// 	var year=sj.getYear()+1900;  //获取年
// 	var month=sj.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
//     var days=sj.getDate(); //获取日期
// 	var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
//     var day=sj.getDay();    //获取日
// 	var xiaoshi=sj.getHours();   //获取小时
// 	var fengzhong=sj.getMinutes();  //获取分钟
// 	var miao=sj.getSeconds();   //获取秒
// 	if(xiaoshi<10){
// 		xiaoshi="0"+xiaoshi;
// 	}
//     if(fengzhong<10){
// 		fengzhong="0"+fengzhong;
// 	}
// 	if(miao<10){
// 		miao="0"+miao;
// 	}
// 	document.getElementById("shijian").innerHTML=year+"年"+month+"月"+days+"日"+week[day]+" "+xiaoshi+":"+fengzhong+":"+miao+"";
// 	t.setTimeout(time,1000);
// 	}