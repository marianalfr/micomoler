$ = jQuery;

$('div#headerindex').click(function(){
        $('html, body').animate({
            scrollTop:$('#globalcontainer').offset().top
        }, 6000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });


$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop(

    	);
    	//PARALLAX LOGO
    	
        if (scrolled < 160){
    		$('#headerindex').css('top',50-scrolled*0.05+'px');
    	}
    	if (scrolled > 161){
    		$('#headerindex').css('top',(scrolled-20)+'px');
    	}

        //PARALLAX PROMO
        
        if (scrolled < 200){
            $('#promo').css('top',(-200-scrolled+'px'));
        } 




    	//PARALLAX BOX 1a
    	if (scrolled < 810){
    		$('.box.a1').css('top',(-3100+scrolled*3.5)+'px');
    	}
    	if (scrolled > 811){
    		$('.box.a1').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 1b
    	if (scrolled < 550){
    		$('.box.b1').css('top',(-2900+scrolled*4.3)+'px');
    	}
    	if (scrolled > 551){
    		$('.box.b1').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 1c
    	if (scrolled < 800){
    		$('.box.c1').css('top',(-2600+scrolled*2.9)+'px');
    	}
    	if (scrolled > 801){
    		$('.box.c1').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 1d
    	if (scrolled < 720){
    		$('.box.d1').css('top',(-3100+scrolled*3.8)+'px');
    	}
    	if (scrolled > 721){
    		$('.box.d1').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 2a
    	if (scrolled < 843){
    		$('.box.a2').css('top',(-2600+scrolled*2.8)+'px');
    	}
    	if (scrolled > 844){
    		$('.box.a2').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 2b
    	if (scrolled < 787){
    		$('.box.b2').css('top',(-3100+scrolled*3.57)+'px');
    	}
    	if (scrolled > 788){
    		$('.box.b2').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 2c
    	if (scrolled < 710){
    		$('.box.c2').css('top',(-3500+scrolled*4.4)+'px');
    	}
    	if (scrolled > 711){
    		$('.box.c2').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 3a
    	if (scrolled < 670){
    		$('.box.a3').css('top',(-3100+scrolled*4)+'px');
    	}
    	if (scrolled > 671){
    		$('.box.a3').css('top',(scrolled-1080)+'px');
    	}

    	//PARALLAX BOX 3b
    	if (scrolled < 810){
    		$('.box.b3').css('top',(-3100+scrolled*3.5)+'px');
    	}
    	if (scrolled > 811){
    		$('.box.b3').css('top',(scrolled-1080)+'px');
    	}

        //PARALLAX BOX 3c
        if (scrolled < 723){
            $('.box.c3').css('top',(-3100+scrolled*3.8)+'px');
        }
        if (scrolled > 724){
            $('.box.c3').css('top',(scrolled-1080)+'px');
        }

        //PARALLAX BOX 3d
        if (scrolled < 870){
            $('.box.d3').css('top',(-3600+scrolled*3.9)+'px');
        }
        if (scrolled > 871){
            $('.box.d3').css('top',(scrolled-1080)+'px');
        }

    
}

