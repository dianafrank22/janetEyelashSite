"use strict";
function toggleMenu(){
  var x = document.getElementById("navigation")
  var icon = document.getElementById("icon")
  var classNameArray = document.getElementsByClassName("nav-div")
	if (x.className === "nav"){
		x.className += " responsive";
		icon.className += " responsive";
		for(var i = 0; i< classNameArray.length; i++){
			var item = classNameArray[i]
			item.className += " responsive"
		}
	}else{
		x.className = "nav";
		y.className = "nav-div"
	}
}
