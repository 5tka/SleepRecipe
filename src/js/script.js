console.log('hello from script.js');
$( document ).ready(function() { // начало document.ready


    $('.mnu-item').click(function(ev){
        ev = event.preventDefault();
        $(this)
            .toggleClass('mnu-item--active')
            .find('.sub-list').stop(true).slideToggle('fast');
    });

/*xeonalex */
    $('.homepage__slider').bxSlider({});
    $('.js_select2').each(function(index, el) {
        $(this).select2({});
    });

/* ENd xeonalex*/
    $('.bestsellers-items').bxSlider({
        slideWidth: 270,
        // infiniteLoop:!0,
        hideControlOnEnd:!0,
        pager:!1,
        nextText:"",
        prevText:"",
        minSlides:1,
        maxSlides:4,
        moveSlides:1,
    });
    $('.non-standard-slider').bxSlider({
        slideWidth: 194,
        slideMargin: 40,        
        // infiniteLoop:!0,
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
        // infiniteLoop:!0,
        hideControlOnEnd:!0,
        pager:!1,
        nextText:"",
        prevText:"",
        minSlides:1,
        maxSlides: 8,
        moveSlides:1
    });








});