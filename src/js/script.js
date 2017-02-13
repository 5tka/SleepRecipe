console.log('hello from script.js');

var windowSize = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;
$( document ).ready(function() { // начало document.ready

    $(window).on('resize', function(){

        $('.mnu-item--active')            
            .find('.sub-list')
            .css('top', $('.mnu-item--active')
                .position().top + $('.mnu-item--active')
                .outerHeight())

    });

    $('.mnu-item').click(function(ev){
        // ev = event.preventDefault();
        if(!$(this).hasClass('mnu-item--active')){
        $('.mnu-item--active')
            .removeClass('mnu-item--active')
            .find('.sub-list')
            .stop(true)
            .slideToggle('fast');
        }

        $(this)
            .toggleClass('mnu-item--active')
            .find('.sub-list')
            .css('top', $(this).position().top + $(this).outerHeight())
            .stop(true)
            .slideToggle('fast');

    });
    $('.catalog-li').click(function(ev){
        // ev = event.preventDefault();
        if(!$(this).hasClass('catalog-mnu--active')){
        $('.catalog-mnu--active')
            .removeClass('catalog-mnu--active')
            .find('.catalog-sublist')
            .stop(true)
            .slideToggle('fast');
        }

        $(this)
            .toggleClass('catalog-mnu--active')
            .find('.catalog-sublist')
            .stop(true)
            .slideToggle('fast');
    });
    //     $('.catalog-li').click(function(){
    //     $(this).find('.catalog-sublist').toggleClass('db');
    // });




    $('.bestsellers-items').bxSlider({
        slideWidth: 270,
        // infiniteLoop: false,
        hideControlOnEnd:!0,
        pager: false,
        nextText:"",
        prevText:"",
        // minSlides:1,
        maxSlides:4,
        moveSlides:1,
    });
    $('.non-standard-slider').bxSlider({
        slideWidth: 194,
        slideMargin: 40,        
        // infiniteLoop: false,
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
        // infiniteLoop: false,        
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
    $('.header__drop-down .dr-1').click(function(e){
        e = event.preventDefault();
        $('.header__drop-down .catalog-mnu').toggleClass('db');
    });


}); // конец document.ready
// google map
function initialize() {
    //получаем наш div куда будем карту добавлять
    var mapCanvas = document.getElementById('map_canvas');
    // задаем параметры карты
    var mapOptions = {
        //Это центр куда спозиционируется наша карта при загрузке
        center: new google.maps.LatLng(55.83715, 37.45312),
        //увеличение под которым будет карта, от 0 до 18
        // 0 - минимальное увеличение - карта мира
        // 18 - максимально детальный масштаб
        zoom: 16,
        scrollwheel: false,
        disableDefaultUI: true,
        // styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        //Тип карты - обычная дорожная карта
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //Инициализируем карту
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Объявляем массив с нашими местами и маркерами
    var markers = [],
        myPlaces = [];
    //Добавляем места в массив 
    myPlaces.push(new Place('ул. Свободы, д.29,ТЦ «Мебель России»', 55.83715, 37.45312, 'Москва'));
    //Теперь добавим маркеры для каждого места
    for (var i = 0, n = myPlaces.length; i < n; i++) {

				var companyImage = new google.maps.MarkerImage('img/marker.png',
					new google.maps.Size(145,93),
					new google.maps.Point(0,0),
					new google.maps.Point(0,45)
				);

        var marker = new google.maps.Marker({
            //расположение на карте
            position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
            map: map,
            icon: companyImage,
            //То что мы увидим при наведении мышкой на маркер
            title: myPlaces[i].name
          });
        //Добавим попап, который будет появляться при клике на маркер
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + myPlaces[i].name + '</h5><br/>' + myPlaces[i].description
        });
        //привязываем попап к маркеру на карте
        makeInfoWindowEvent(map, infowindow, marker);
        markers.push(marker);
    }
}
function makeInfoWindowEvent(map, infowindow, marker) {
    //Привязываем событие КЛИК к маркеру
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
//Это класс для удобного манипулирования местами
function Place(name, latitude, longitude, description){
    this.name = name;  // название
    this.latitude = latitude;  // широта
    this.longitude = longitude;  // долгота
    this.description = description;  // описание места
}
//Когда документ загружен полностью - запускаем инициализацию карты.
google.maps.event.addDomListener(window, 'load', initialize);