// show-password 
$("#show-password").click(function () {

    // $(this).toggleClass("fa-eye fa-eye-slash");
    $(this).attr("name", () => {
        return $(this).attr("name") == "eye-off-outline" ?
            "eye-outline" : "eye-off-outline"
    });
    var input = $($(this).attr("toggle"));
    
    if (input.attr("type") == "password") {
        input.attr("type", "text");

    } else {
        input.attr("type", "password");
    }
});
$(document).ready(function(){
    AOS.init();
    $('#team-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $('#test-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
  });