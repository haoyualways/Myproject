// 将每个月的天数存入数组，二月先暂存为0，后面判断此年是什么年再将天数加入
var monthDay = [31,0,31,30,31,30,31,31,30,31,30,31];
function isLeap(year) {
    if((year%4==0 && year%100!=0) || year%400==0){
        return true;  //如果能够整除返回true反之返回false
    }
    else{
        return false; 
    }
}
/*判断某年某月某日是星期几，默认日为1号*/
function whatDay(year, month, day=1) {
    var sum = 0;
    sum += (year-1)*365+Math.floor((year-1)/4)-Math.floor((year-1)/100)+Math.floor((year-1)/400)+day;
    for(var i=0; i<month-1; i++){
        sum += monthDay[i];
    }
	// 调用函数并判断二月的天数
    if(month > 2){
        if(isLeap(year)){ 
            sum += 29; 
        }
        else{
             sum += 28; 
        }
    }
    return sum%7;      //余数为0代表那天是周日，为1代表是周一，以此类推
}
/* 将日历显示在指定位置 */
function showCld(year, month, firstDay){
    var i;  
    var tagClass = " ";
    var nowDate = new Date();
    
    var days;
	//从数组里取出该月的天数
    if(month == 2){
        if(isLeap(year)){
            days = 29;
        }
        else{
            days = 28;
        }
    }
    else{
        days = monthDay[month-1];
    }

    /*显示当前日期至顶部*/
    var topdateHtml = year + "年" + month + "月";
    var topDate = document.getElementById('topDate');
    topDate.innerHTML = topdateHtml;    
    
    /*添加日期部分*/
    var tbodyHtml = '<tr>';
	/* 对1号前空白格的填充 */
    for(i=0; i<firstDay; i++){
        tbodyHtml += "<td></td>";
    }
    var changLine = firstDay;
	//每一个日期的添加
    for(i=1; i<=days; i++){
        if(year == nowDate.getFullYear() && month == nowDate.getMonth()+1 && i == nowDate.getDate()) {
			//当前日期对应格子
            tagClass = "curDate";
        } 
        else{
			//普通日期对应格子，设置class便于与空白格子区分开来
            tagClass = "isDate";
        }  
        tbodyHtml += "<td class=" + tagClass + ">" + i + "</td>";
        changLine = (changLine+1)%7;
		// 判断是否需要换行进行填充
        if(changLine == 0 && i != days){
            tbodyHtml += "</tr><tr>";
        } 
    }
    tbodyHtml +="</tr>";
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = tbodyHtml;
}
    /* 调用函数显示日历内容*/
    var curDate = new Date();
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth() + 1;
    showCld(curYear,curMonth,whatDay(curYear,curMonth));
	/* 上个月 */
function preMonth(){
    var topStr = document.getElementById("topDate").innerHTML;
    var pattern = /\d+/g;
    var listTemp = topStr.match(pattern);
    var year = Number(listTemp[0]);
    var month = Number(listTemp[1]);
    var preMonth = month-1;
    if(preMonth < 1){
        preMonth = 12;
        year--;
    }
    document.getElementById('topDate').innerHTML = '';
    showCld(year, preMonth, whatDay(year, preMonth));
}	
    /* 下个月*/
function nextMonth(){
    var topStr = document.getElementById("topDate").innerHTML;
    var pattern = /\d+/g;
    var listTemp = topStr.match(pattern);
    var year = Number(listTemp[0]);
    var month = Number(listTemp[1]);
    var nextMonth = month+1;
    if(nextMonth > 12){
        nextMonth = 1;
        year++;
    }
    document.getElementById('topDate').innerHTML = '';
    showCld(year, nextMonth, whatDay(year, nextMonth));
}

/* 绑定按钮，触发事件 */
document.getElementById('Rili-left').onclick = function(){
        preMonth();
    }
 document.getElementById('Rili-right').onclick = function(){
        nextMonth();
    }
