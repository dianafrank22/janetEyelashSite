"use strict";
function toggleMenu(){
  var x = document.getElementById("navigation")
  var classNameArray = document.getElementsByClassName("nav-div")
	if (x.className === "flex nav"){
		x.className += " responsive";
		for(var i = 0; i< classNameArray.length; i++){
			var item = classNameArray[i]
			item.className += " responsive"
		}
	}else{
		x.className = "flex nav";
		for(var i = 0; i< classNameArray.length; i++){
			var item = classNameArray[i]
			item.className = ""
			item.className = "nav-div box"
		}
	}
}

$('#gallery').masonry({
	itemSelector: '.item',
	columnWidth: 250
})