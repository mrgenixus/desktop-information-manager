
function showboxes() {
alert()
for i=0;i<document.styleSheets.length;i++){
document.styleSheets[i].rules
for (j=0;j<document.styleSheets[i].rules.length;j++){
if(document.styleSheets[i].rules[j].selectorText=="listCheck"){
alert(j)
document.styleSheets[i].rules[j].visibility="visible"
document.styleSheets[i].rules[j].display="inline"
}
}
}
}