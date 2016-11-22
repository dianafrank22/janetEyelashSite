"use strict";
function toggleMenu(){
	// add class to hide hamburger
  var x = document.getElementById("navigation")
	if (x.className === "nav"){
		x.className += "responsive";
	}else{
		x.className = "nav";
	}
}
