$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number]);
});

var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"];

$("#textPink").on("click", function() {
	$("#funText").css("color", "pink");
});

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange");
});

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green");
});


$("#boxGrow").on("click", function() {
	var box = 	$("#box");
	var limit = 175;
	box.animate({height:"+=35px", width:"+=35px"}, "1000", function(){
		if(box.css("height").substr(0, 3) > limit) { 
			box.css({"height": limit+"px", "width": limit+"px"});	
		}
	});
});

$("#boxShrink").on("click", function() {
 	var box = 	$("#box");
	/*var limit = 99;*/
	box.animate({height:"-=35px", width:"-=35px"}, "1000", function(){
	/*	if(box.css("height").substr(0, 2) < limit) { 
			box.css({"height": limit+"px", "width": limit+"px"}); 	
		}*/
	});
});