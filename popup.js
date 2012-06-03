function PopupInfo(PE) {
	for (i=0;i<PE.childNodes.length;i++){
		if (PE.childNodes[i].className == "name"){
			name = i
		}
		if (PE.childNodes[i].className == "e-mail"){
			email = i
		}
		if (PE.childNodes[i].className == "phonenumber"){
			phone = i
		}
		if (PE.childNodes[i].className == "profesion"){
			prof = i
		}
		if (PE.childNodes[i].className == "catagories"){
			cata = i
		}
		if (PE.childNodes[i].className == "comments"){
			comm = i
		}
		if (PE.childNodes[i].className == "interests"){
			inter = i
		}
		if (PE.childNodes[i].className == "address"){
			addr = i
		}
		if (PE.childNodes[i].className == "birthdate"){
			birth = i
		}

	}
	wintext ='<html><head><title>Personal Info</title>'
	wintext += '<style>'
	wintext += '@import "phone.css";'
	wintext += '</style>'
	wintext +='</head><body bgcolor=\"white\">'
	wintext += PE.childNodes[name].poftitle + ' '
	wintext += PE.childNodes[name].first + ' '
	wintext += PE.childNodes[name].middle + ' '
	wintext += PE.childNodes[name].last + ' '
	wintext += '<hr><table width=\"100%\"><tr><td><a href=\"mailto:'
	wintext += PE.childNodes[email].innerHTML
	wintext += '\">'
	wintext += PE.childNodes[email].innerHTML
	wintext += '</a>'
	wintext += '</td><td align=\"right\">('
	wintext += PE.childNodes[phone].areacode
	wintext += ')'
	wintext += PE.childNodes[phone].prefix
	wintext += '-'
	wintext += PE.childNodes[phone].number
	wintext += '</td></tr></table>'
	wintext += '<u>Job:</u>'+'<br>'
	wintext += PE.childNodes[prof].innerHTML+'<br>'
	wintext += '<u>Catagories:</u>'+'<br>'
	wintext += PE.childNodes[cata].innerHTML+'<br>'
	wintext += '<u>Comments:</u>'+'<br>'
	wintext += PE.childNodes[comm].innerHTML+'<br>'
	wintext += '<u>Interests:</u>'+'<br>'
	wintext += PE.childNodes[inter].innerHTML +'<br>'
	wintext += '<u>Address:</u>'+'<br>'
	if (PE.childNodes[addr].street != ""){
		wintext += PE.childNodes[addr].street + '<br>'
	}
	if (PE.childNodes[addr].box != ""){
		wintext += PE.childNodes[addr].box + '<br>'
	}
	wintext += PE.childNodes[addr].city  + ','
	wintext += PE.childNodes[addr].state + ' '
	wintext += PE.childNodes[addr].zip +'<br>'
	if (PE.childNodes[birth].month != "0" && PE.childNodes[birth].day != "0" && PE.childNodes[birth].year != "0"){
		wintext += '<u>Birthday:</u>'+'<br>'
		wintext += PE.childNodes[birth].month +'/'
		wintext += PE.childNodes[birth].day +'/'
		wintext += PE.childNodes[birth].year
	}
	wintext += "</body></html>"

	infowindow = open('','Info','toolbar=no,location=no, directories=no, status = no, menubar=no, scrollbars= no, resizeable = no, width = 380, height = 395,top =0, left = 0')
	infowindow.document.write(wintext)
	infowindow.document.close()
}