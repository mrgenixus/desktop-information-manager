function toggle(object,ostyle){
if (object.style.visibility == "visible"){
    hide(object)
  }
  else{
    show(object,ostyle)
  }
}
function hide(object){
  object.style.visibility = "hidden"
  object.style.display = "none"
}
function show(object,styleo){
 if (styleo == null){ 
   styleo = 'inline'
   }
  object.style.visibility = "visible"
  object.style.display = styleo
}