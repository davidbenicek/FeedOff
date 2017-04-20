//Get the cookie (value of cookie is expiry date)
var cookieValue = $.cookie("faceOff");

if(typeof cookieValue == "undefined"){
	//If it does not exist, give option to disable for hours
	$("#stream_pagelet").prepend('Hide FB feed for, hours: <input id="hours" type="number"/><button id="hideFeedButton">Hide Feed!</button>');
	$("#hideFeedButton").click(function(){
		//Get hours
		var hours = $("#hours").val();
		//Check valid amount
		if(typeof hours == "undefined" || hours<=0){
			$("#hideFeedButton").text("Enter a valid amount, then click me!");
		}
		else{
			//Hide feed
			var date = new Date();
			date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
			//Set cookie
			$.cookie("faceOff", date.toGMTString() , { expires: date });
 			$("#stream_pagelet").html("<h1>Get back to work douche. Distraction will come back at "+date.toGMTString()+"</h1>")
		}
	})
}
else{
 	$("#stream_pagelet").html("<h1>Get back to work douche. Distraction will come back at "+cookieValue+"</h1>")
}