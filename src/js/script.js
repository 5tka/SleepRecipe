console.log('hello from script.js');
$( document ).ready(function() { // начало document.ready


    $('.mnu-item').click(function(ev){
        ev = event.preventDefault();
        $(this)
            .toggleClass('mnu-item--active')
            .find('.sub-list').stop(true).slideToggle('fast');
    });



    $('.bestsellers-items').bxSlider({
        slideWidth: 270,
        infiniteLoop: false,
        hideControlOnEnd:!0,
        pager: false,
        nextText:"",
        prevText:"",
        minSlides:1,
        maxSlides:4,
        moveSlides:1,
    });
    $('.non-standard-slider').bxSlider({
        slideWidth: 194,
        slideMargin: 40,        
        infiniteLoop: false,
        hideControlOnEnd:!0,
        pager:!1,
        nextText:"",
        prevText:"",
        minSlides:1,
        maxSlides:4,
        moveSlides:1,
    });
    $('.brands-slider').bxSlider({
        slideWidth: 80,
        slideMargin: 50,
        infiniteLoop: false,        
        hideControlOnEnd:!0,
        pager:!1,
        nextText:"",
        prevText:"",
        minSlides:1,
        maxSlides: 8,
        moveSlides:1
    });





    $('.header__750mnu .img-trigger').click(function(){
        $('.header__750mnu .first-mnu').toggleClass('db');
    });

    $('.header__first-line .img-trigger').click(function(){
        $('.header__first-line .first-mnu').toggleClass('db');
    });


}); // конец document.ready