/*global $*/ /*console*/

//home-page@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$(document).ready(function () {
    "use strict";
    $('.owl-main').owlCarousel({
        loop: false,
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
    
    $('.owl-main-rtl').owlCarousel({
        rtl: true,
        loop: false,
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
        loop: false,
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
    
    $('.home-slider-rtl').owlCarousel({
        rtl: true,
        loop: false,
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
    
    $(".page-content .home-page-lists li").hover(function () {
        $(this).find(".hidden-movies-buttons").css("display", "block");
    }, function () {
        $(this).find(".hidden-movies-buttons").css("display", "none");
    });
    
    $(".page-content .owl-main li").hover(function () {
        $(this).find(".main-hidden-movies-buttons").css("display", "block");
    }, function () {
        $(this).find(".main-hidden-movies-buttons").css("display", "none");
    });
    
    $(".page-content .owl-main-rtl li").hover(function () {
        $(this).find(".main-hidden-movies-buttons").css("display", "block");
    }, function () {
        $(this).find(".main-hidden-movies-buttons").css("display", "none");
    });
    
    $(".main-hidden-movies-buttons").on("submit", function () {
        var mainMovieID = $(".owl-main").find("li").attr("id");
        
        var request = $.ajax({
            
                url: "test.php",
                method: "POST",
                data: { id : mainMovieID },
                dataType: "html"
            });

        request.done(function () {
            alert("done");
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    });

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    //movies@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    $(".movies-list li").hover(function () {
        $(this).find(".hidden-movies-buttons").css("display", "block");
    }, function () {
        $(this).find(".hidden-movies-buttons").css("display", "none");
    });
    

    
    
    $(".hidden-movies-buttons").on("submit", function () {
        var movieID = $(".movies-list").find("li").attr("id");
        
        var request = $.ajax({
            
                url: "test.php",
                method: "POST",
                data: { id : movieID },
                dataType: "html"
            });

        request.done(function () {
            alert("done");
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    });
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    //series-details@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    $(".ep .ep-list li .ep-share").click(function (e) {
        e.preventDefault();
        $(this).find(".ep-social").fadeToggle();
        $(this).mouseleave(function () {
            $(".ep-social").fadeOut();
        });
    });
    
    $(".ep-social").mouseleave(function () {
        $(this).fadeOut();
    });
    
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    $(".select").on({
        click: function () {
            $(this).toggleClass("plus").toggleClass("minus");
        },
        focusout: function () {
            $(this).addClass("plus").removeClass("minus");
        
        }
    });
    
    $(".english-arabic").on({
        click: function () {
            $(this).toggleClass("en-ar").toggleClass("minus-en-ar");
        },
        focusout: function () {
            $(this).addClass("en-ar").removeClass("minus-en-ar");
        
        }
    });
    
  
    $(".search-icon").on("click", function (event) {
        event.preventDefault();
        $(".header-search").slideToggle();
    });
    
    
    //hidden-lists
    
    //featured-list@@@@@@@@@@@@@@@@@@@@@@@
    $(".movie-sort-list .featured").on("mouseenter", function () {
        $(".featured-list").show();
        $(".a-z-list, .just-added-list, .top-list").hide();
    });
    
    $(".featured-list").on("mouseleave", function () {
        $(".featured-list").hide();
    });
    
    $(".featured-list ul li").on("click", function (e) {
        e.preventDefault();
        $(".featured-list").hide();
        $(this).attr("id", "selected");
        
        $(".featured").html($("#selected").html());
        
    });
    
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
    //a-z-list@@@@@@@@@@@@@@@@@@@@@@@
    $(".movie-sort-list .a-z").on("mouseenter", function () {
        $(".a-z-list").show();
        $(".featured-list, .just-added-list, .top-list").hide();
    });
    
    $(".a-z-list").on("mouseleave", function () {
        $(".a-z-list").hide();
    });
    
    $(".a-z-list ul li").on("click", function (e) {
        e.preventDefault();
        $(".a-z-list").hide();
        $(this).attr("id", "selected");
        
        $(".a-z").html($("#selected").html());
        
        
    });
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    //just-added-list@@@@@@@@@@@@@@@@@@@@@@@
    $(".movie-sort-list .just-added").on("mouseenter", function () {
        $(".just-added-list").show();
        $(".featured-list, .a-z-list, .top-list").hide();
    });
    
    $(".just-added-list").on("mouseleave", function () {
        $(".just-added-list").hide();
    });
    
    $(".just-added-list ul li").on("click", function (e) {
        e.preventDefault();
        $(".just-added-list").hide();
        $(this).attr("id", "selected");
        
        $(".just-added").html($("#selected").html());
        
    });
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    //top-list@@@@@@@@@@@@@@@@@@@@@@@@@@
    $(".movie-sort-list .top").on("mouseenter", function () {
        $(".top-list").show();
        $(".featured-list, .a-z-list, .just-added-list").hide();
    });
    
    $(".top-list").on("mouseleave", function () {
        $(".top-list").hide();
    });
    
    $(".top-list ul li").on("click", function (e) {
        e.preventDefault();
        $(".top-list").hide();
        $(this).attr("id", "selected");
        
        $(".top").html($("#selected").html());
        
    });
    
    
    $(".movie-sort").on("mouseleave", function () {
        $(".featured-list, .a-z-list, .just-added-list, .top-list").hide();
    });
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    //login-form validation@@@@@@@@@@@@@@@@@
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#my").validate({
        rules: {
            name: {
                required: true,
                minlength: 8
         
            },
            email: {
                required: true,
                email: true
                
        
            },
            password: {
                required: true,
                minlength: 8
                
        
            }
        }
    });
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
});
