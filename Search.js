// begin search script
// search script copyright ©1999 Ben West Design Services Inc.
//for use with properly createdn HTML files only.
// may not be changed without consent
// benjamin-west@usa.net, beejwest@aol.com, 
function search(SearchString,CaseSensitive,CriteriaObject){
  SearchString = SearchString.toUpperCase()  
   var picked, k, match
   picked = new Array()
   match = new Array()
   k = 0
   m=0
   for (var j=0; j<CriteriaObject.length; j++) {
      if (CriteriaObject.options[j].selected) {
	    picked[k] = CriteriaObject.options[j].value
         k++
         }
      } 
   for (l=0;l<picked.length;l++){
      for (i=0;i<document.all.length;i++){
	 if (document.all[i].className==picked[l]){
            hide(document.all[i].parentElement)
            content = document.all[i].innerText
            content = content.toUpperCase()
            if (content.indexOf(SearchString) != -1){
              match[m] = i
              m++
              }
            }
         }
      }
   for (i=0;i<match.length;i++){
      show(document.all[match[i]].parentElement,'list-item')
      }
   }   
 //end search script


function showboxes() {
for (i=0;i<document.all.length;i++){
if(document.all[i].className=="listCheck"){
toggle(document.all[i],"inline", "hidden")
}
}
}

function list(){
  ppl = new Array(1)
  j = 0
  for (i=0;i<document.all.length;i++){
    if(document.all[i].className=="listCheck"){
    if(document.all[i].checked){
        ppl[j]=document.all[i].parentElement
        j++
        }
      }
    }
  wintext ='<html>\n<head>\n<title>Records List</title>\n'
  wintext += '<style>\n'
  wintext += '@import "phone.css";\n'
  wintext += '</style>\n'
  wintext +='</head>\n<body bgcolor=\"white\"><div style=\"width:320\">\n'
  for (k=0;k<ppl.length;k++){
    for (i=0;i<ppl[k].childNodes.length;i++){
      if (ppl[k].childNodes[i].className == "name"){
        name = i
        }
      if (ppl[k].childNodes[i].className == "e-mail"){
        email = i
        }
      if (ppl[k].childNodes[i].className == "phonenumber"){
        phone = i
        }
      if (ppl[k].childNodes[i].className == "comments"){
        comm = i
        }
      if (ppl[k].childNodes[i].className == "address"){
        addr = i
        }
      if (ppl[k].childNodes[i].className == "birthdate"){
        birth = i
        }
      }
    
    wintext += '<hr>\n<table width=\"100%\">\n<tr>\n<td>\n'
	wintext += ppl[k].childNodes[name].poftitle + ' '
    wintext += ppl[k].childNodes[name].first + ' '
    wintext += ppl[k].childNodes[name].middle + ' '
    wintext += ppl[k].childNodes[name].last + ' '
    wintext += '</td>\n<td align=\"right\">('
    wintext += ppl[k].childNodes[phone].areacode
    wintext += ')'
    wintext += ppl[k].childNodes[phone].prefix
    wintext += '-'
    wintext += ppl[k].childNodes[phone].number
    wintext += '</td>\n</tr>\n</table>\n<hr width=\"50%\">\n'
	wintext += '<a href=\"mailto:'
    wintext += ppl[k].childNodes[email].innerHTML
    wintext += '\">'
    wintext += ppl[k].childNodes[email].innerHTML
    wintext += '</a><br>\n'
    wintext += '<u>Address:</u>'+'<br>\n'
    if (ppl[k].childNodes[addr].street != ""){
      wintext += ppl[k].childNodes[addr].street + '<br>\n'
      }
    if (ppl[k].childNodes[addr].box != ""){
      wintext += ppl[k].childNodes[addr].box + '<br>\n'
      }
    wintext += ppl[k].childNodes[addr].city  + ','
    wintext += ppl[k].childNodes[addr].state + ' '
    wintext += ppl[k].childNodes[addr].zip +'<br>\n'
    if (ppl[k].childNodes[birth].month != "0" && ppl[k].childNodes[birth].day != "0" && ppl[k].childNodes[birth].year != "0"){
      wintext += '<u>Birthday:</u>'+'<br>\n'
      wintext += ppl[k].childNodes[birth].month +'/'
      wintext += ppl[k].childNodes[birth].day +'/'
      wintext += ppl[k].childNodes[birth].year
	  wintext += '<br>\n'
      }
    wintext += '<u>Comments:</u>'+'<br>\n'
    wintext += ppl[k].childNodes[comm].innerHTML+'<br>\n'
    }
  wintext += "</div>\n"	
  wintext += "</body>\n</html>\n"
  listwindow = open('','list')
  listwindow.document.write(wintext)
  listwindow.document.close()
}

function clearlistcheck(){
  for (i=0;i<document.all.length;i++){
    if(document.all[i].className=="listCheck"){
      document.all[i].checked = 0
      }
    }
  }

function checkall(){

  for (i=0;i<document.all.length;i++){
    if(document.all[i].className=="listCheck"){
alert(document.all[i].parentElement.style.cssText)
	  if (document.all[i].parentElement.style.visibility == "visible"){
        document.all[i].checked = 1
		}
      }
    }
  }

