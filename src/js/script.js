console.log('hello from script.js');
$(window).load(function() {
    /* Act on the event */
    $('.prod-preview-list').mCustomScrollbar({
        axis: 'x',
        setWidth: '100%',
        autoHideScrollbar: true
    });
});
$( document ).ready(function() { // начало document.ready

    $('.prod__preview-item').click(function (event) {
        var img= $('#product_img');
        img.attr('src',  $(this).data('img'));
    })
    $('.mnu-item').click(function(ev){
        ev = event.preventDefault();
        $(this)
            .toggleClass('mnu-item--active')
            .find('.sub-list').stop(true).slideToggle('fast');
    });

/*xeonalex */
    $('#js_full-info').click(function(event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $('.info__list').attr('style', '');
            $(this).removeClass('active');
            return false;
        }
        $('.info__list').css('height', 'auto');
        $(this).addClass('active');

        return false;
    });


    $( "#product__tabs" ).tabs({
      active: 1
    });


    $('.js_sl_prise').slider({
        range: true,
        min: 100,
        max: 1000,
        values: [ 100, 300 ],
        slide: function( event, ui ) {
        $( "#js_sl_prise_from" ).val( ui.values[ 0 ]);
        $( "#js_sl_prise_to" ).val(ui.values[ 1 ] );
      }
    });

    // $('.slider_inp').on('change',function(event) {
    //     /* Act on the event */
    //     var dataNUm=$(this).data('num');
    //     console.log($(this).closest('.js_sliderWrap').find('.slideUI'));
    //     $(this).closest('.js_sliderWrap').find('.slideUI').slider( values[dataNUm] , $(this).val());
    // })

    $('.filter__accord-title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle();
        /* Act on the event */
    });

    $('.bag-info').click(function(event) {
        event.preventDefault()
        /* Act on the event */
        $('#js_basket').bPopup({
            opacity: 0.65
        });
        return false;
    });

    $('.spiner_amount').spinner({
        spin: function( event, ui ) {
            if ( ui.value < 1 ) {
              $( this ).spinner( "value", 1 );
              return false;
            }
        },
        change: function (event, ui) {
            $(this).val( parseInt($(this).val()));
            if ($(this).val()<=0) {
                $(this).val('1')
            };
        }
    });
    // $('.spiner_amount').focusout(function(event) {
    //     /* Act on the event */
    // });

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