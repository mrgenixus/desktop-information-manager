//calendar script
now=new Date()
       days = new Array('su', 'mo', 'tu', 'we', 'th', 'fr', 'sa')
       months = new Array('names','numdays')
       months.name = new Array('January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
       feb = 28
       months.numdays = new Array(31,feb,31,30,31,30,31,31,30,31,30,31)   

function clearCalendar(){
for(i=0;i<days.length;i++){
for(j=1;j<7;j++){
document.all[days[i]+j].innerHTML = ""
}
}
}
function changemonth(number){
now.setMonth(now.getMonth()+number) 
setup()
}

function setup(){
       clearCalendar()
       thismonthn = now.getMonth()
       thisday = now.getDay()
       thisdate = now.getDate()
       weeks = Math.floor(thisdate/7)
       dayspast = 7*((thisdate/7) - weeks)
       daycount = thisday + 1
       for (i = 0; i<dayspast;i++){
       if(daycount  <= 0   ){
       daycount = 6       
       }
       daycount = daycount-1
       }
       beginday = daycount
       thismonth = months.name[thismonthn]
document.all.month.innerText = thismonth
j = 1
daycount = beginday
for ( i = 1; i < 32;i++){
if(i == thisdate){
document.all[days[daycount] + j].align='center'  
document.all[days[daycount] + j].valign='center'  
document.all[days[daycount] + j].innerHTML = '<font size=+7><b>' + i+"</b></font>"
}
else{

document.all[days[daycount] + j].innerText = i
}
if(daycount < 6){
daycount++
}
else{
daycount = 0
j++
}
}
document.all.year1.innerText = '19'+now.getYear()
document.all.year2.innerText = '19'+now.getYear()
}
//end calendar scripts