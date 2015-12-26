var timestamp = Date.parse(new Date());
var loveDate = Date.parse("May 1 2013");
var time = (timestamp-loveDate)/1000;
var day = time/86400;

function timedCount()
{
document.getElementById('shijian').innerHTML = fmoney(time,0);
document.getElementById('day').innerHTML = Math.floor(day);
time = time + 1;
t = setTimeout("timedCount()",1000);
}

/** 每三位数字添加一个逗号，方便阅读 **/

function fmoney(s, n)   
{   
   n = n > 0 && n <= 20 ? n : 2;   
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
   var l = s.split(".")[0].split("").reverse(),   
   r = s.split(".")[1];   
   t = "";   
   for(i = 0; i < l.length; i ++ )   
   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }   
   return t.split("").reverse().join("") /*+ "." + r*/;   
}