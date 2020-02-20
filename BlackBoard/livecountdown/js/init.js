//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "16 sep 2019 14:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	