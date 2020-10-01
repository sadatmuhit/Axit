$(document).ready(function () {
    //onepagenav
    $('#main_nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
    // scroll
    $(window).scroll(function () {
        if ($(document).scrollTop() > 450) {
            $("#main_nav").addClass("fixed-top");
        } else {
            $("#main_nav").removeClass("fixed-top");
        }
    });
    //owlcarousel
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slideTransition: "linear",
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            576: {
                items: 2,
                margin: 20,
                autoplay: true,
            },
            992: {
                items: 3,
                margin: 50,
                dots: false
            }
        }
    });
});