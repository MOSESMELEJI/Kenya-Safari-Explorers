//Hover
$(document).ready(function() {
	$(".p1").hide();
	$(".p2").hide();
	$(".p3").hide();
	$(".p4").hide();
	$(".img").hover(function() {
		$(this).find(".p1").toggle();
		$(this).find(".p2").toggle();
		$(this).find(".p3").toggle();
		$(this).find(".p4").toggle();
	});
});

$(document).ready(function() {
	$(".p5").hide();
	$(".p6").hide();
	$(".p7").hide();
	$(".p8").hide();
	$(".img").hover(function() {
		$(this).find(".p5").toggle();
		$(this).find(".p6").toggle();
		$(this).find(".p7").toggle();
		$(this).find(".p8").toggle();
	});
});



$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ", your review has been sent.Thank you for chosing SafariDine.");
         //$(this).get(0).reset();
         //event.preventDefault();
    }); 
});

