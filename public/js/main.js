"use strict";
function toggleMenu(){
  var x = document.getElementById("navigation")
  console.log(x.className)
	if (x.className === "nav"){
		x.className += "responsive";
		console.log(x.className)
	}else{
		x.className = "nav";
	}
}
