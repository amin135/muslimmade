$(document).ready(function(){
	$(".fa-times").click(function(){
       $(".sidebar_menu").removeClass("hide_menu");
       $(".toggle_menu").removeClass("opacity_one");
	});


	$(".toggle_menu").click(function(){
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opacity_one");


	});
});

var a = 0;

$(document).ready(function(){
	$(".fa-times-circle").click(function(){
       $(".form2").removeClass("show_form");
       a++;
	});
});



$('#popup').click(function() {
    if(a % 2 == 0){
   
       $(".form2").addClass("show_form");

    }
    else{
      
       $(".form2").removeClass("show_form");
    }
    a++;
});



