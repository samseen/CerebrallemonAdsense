var main = function () {
	"use strict";

	$(".tabs span").on("click", function (event) {
		console.log("Tab Clicked!");
	});
};

$(document).ready(main);