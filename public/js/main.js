"use strict";
$(document).ready(function(){
	var clickedLogo = function(){
		setTimeout(function(){
			$('openEye').hover(function(){
			$(this).addClass("hide");
			$('.closedEye').removeClass("hide");
		})
		}, 25000);

	};
	clickedLogo();
})