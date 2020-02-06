// JavaScript Document

$(function(){
	$(".header .btn").click(function(){
		$(".header .nav").slideToggle();	
	})
	
	
	var winWth=$(window).width();
	
	$(window).resize(function(){
		winWth=$(window).width();
		document.title=	winWth
		
		if(winWth>=768-16){
			$(".header .nav").show();	
		}else{
			$(".header .nav").hide();	
		}
		
	})
	
	
	
})