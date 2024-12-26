// sticky header 
$(document).ready(function () {
    const $header = $(".header");
    const headerOffset = $header.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > headerOffset) {
            $header.addClass("sticky");
        } else {
            $header.removeClass("sticky");
        }
    });
});
// slick slider
$(document).ready(function () {
    $('.slick-slider1').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    });
});
$(document).ready(function () {
    $('.slick-slider2').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// input only number type 
document.getElementById("Mobile").addEventListener("input", function (e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});
$(document).ready(function () {
    const scrollToTopBtn = $('#scrollToTopBtn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });

    scrollToTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});


// count down 
document.addEventListener('DOMContentLoaded', () => {
    var toDayFromNow = (new Date("Feb 02, 2025 23:59:59").getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;
    var flipdown = new FlipDown(toDayFromNow)
        .start()
        .ifEnded(() => {
            document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
        });
});