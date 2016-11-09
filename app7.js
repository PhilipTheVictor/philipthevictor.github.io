//initially setting both min and sec equal to 00
var sec='00';
var min='00';
var hour ='00';
    document.getElementById('secId').innerHTML=sec;
    document.getElementById('minId').innerHTML=min;
    document.getElementById('hrId').innerHTML=hour;
var t;

function stopWatch()
{   //putting sec in appropriate element
    document.getElementById('secId').innerHTML=sec;
    sec++;
    //if sec less than 10 so adding 0 to make it two digit number
   if(sec<10)
{
    sec='0'+sec;
}
   document.getElementById('hrId').innerHTML=hour;
    document.getElementById('minId').innerHTML=min;
    //if sec become 60 setting sec to 00 
if(sec==60)
{
     sec='00';
     min++;
     if(min==60)
     {

     min='0';
     hour++;
     if(hour==60)
     {
         hour='0';
     }
     if(hour<10)
     {
         hour = '0' + hour;
     }
     }
     if(min<10)
   {
      min='0'+min;
   }
}
}
//function to provide functionality of start
function startWatch()
{
     t=setInterval(stopWatch,1000);
     stopWatch();
}
//function to provide functionalty of reset
function resetTime()
{
     sec='00';
     min='00';
}
//function to provide functionality of stop
function stopTime()
{
    clearInterval(t);
}
