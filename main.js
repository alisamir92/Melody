/*global $*/
$(document).ready(function () {
    "use strict";
    $('.owl-main').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
    
    $('.owl-prev').html("<i class='fas fa-chevron-left fa-3x'></i>");
    
    $('.owl-next').html("<i class='fas fa-chevron-right fa-3x'></i>");
    
    
    
    $(".select").on("click", function () {
        $(this).toggleClass("plus").toggleClass("minus");
    });
    
    
    $(".english-arabic").on("click", function () {
        $(this).toggleClass("en-ar").toggleClass("minus-en-ar");
    });
    
    
    $(".search-icon").on("click", function (event) {
        event.preventDefault();
        $(".header-search").slideToggle();
    });
    
    
//    window.onClick = function(){
//        $("select").addClass("plus").removeClass("minus");
//    }
//    $("header, .movie-sort, .movie-list, footer").on("click", function () {
//        $(".select:focus").toggleClass("plus").toggleClass("minus");
//    });
    
    
    
    
    
    
    
    
    
    
    
    
});
