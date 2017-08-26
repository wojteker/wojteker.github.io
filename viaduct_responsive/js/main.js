//Scroll
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top -80
            }, 1000);
            return false;
        }
    }
});

//odświeżanie po zmianie wielkości okna
//$(window).resize(function(){location.reload();});

//otwieranie sekcji z promocjami
$(function() {
    $('.lunch').click(function() {
        $(this).find('.hide-text').slideToggle(800);
    });
});

//Otwierane menu dla rozmiaru mniejszego niż 40em
if (window.matchMedia("(max-width: 40em)").matches) {
$( ".menu-button" ).click(function() {
  $( ".navigation-menu" ).slideToggle( 800 );
});

$( ".nav-closed" ).click(function() {
  $( ".navigation-menu" ).slideUp( 500 );
});
} else {
  
}

var ww = $(window).width();
var limit = 625;

function refresh() {
   ww = $(window).width();
   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
}

var tOut;
$(window).resize(function() {
    var resW = $(window).width();
    clearTimeout(tOut);
    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {        
        tOut = setTimeout(refresh, 100);
    }
});


