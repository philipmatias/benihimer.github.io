
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing2", {
        strings: [,"COWBOY","EMEK", "STUDENT"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Philip", "Coding", "Anime","Music"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// project

$(document).on('click', '.project-filter li', function(){
    $(this) .addClass('project-filter-active').siblings ().removeClass('project-filter-active')
});

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.project-box').show('1000');
        }
        else{
            $('.project-box').not('.'+value).hide('1000');
            $('.project-box').filter('.'+value).show('1000');
        }
    });
});

//darkmode

$(".switch").click(function(){
    $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")) {
       
    $(".switch").attr("name", "sunny-outline");
    } else{
    $(".switch").attr("name", "moon-outline");
    }
});

//pic
$(document).ready(function(){
    $('.switch').click(function(){
        $('.switch').toggleClass('active')
        $('.home').toggleClass('night')
    })
})



// // Get a reference to the button and image elements
// const button = document.getElementById('dark-mode-button');
// const image = document.getElementById('my-image');

// // Add an event listener to the button that listens for a click event
// $(".switch").click(function(){
//   // When the button is clicked, check the current src attribute of the image
//   if (image.src === 'istp.png') {
//     // If the src attribute is set to the URL of the first image, change it to the URL of the second image
//     image.src = 'istpgreen.png';
//   } else {
//     // Otherwise, change it back to the URL of the first image
//     image.src = 'istp.png';
//   }
// });





