$('document').ready(function(){
	$(window).load(function(){
        $('.preloader').find('i').fadeOut().end().delay(400).fadeOut('slow');
    });
	$("#click").on('click',function(){
		alert('suka');
	});
	$(window).scroll(function(){
		if($(document).scrollTop() > 100){
			$("header").css("background", "#101015");
		}else{
			$("header").css("background", "none");
		}
	});
	$('.m').click( function(){
	        var scroll_el = $(this).attr('href');
	        var destination = $(scroll_el).offset().top;
	        if ($(scroll_el).length != 0) {
	            $('html, body').animate( { scrollTop: destination }, 1500 );
	        }
	        return false;
	    });
});