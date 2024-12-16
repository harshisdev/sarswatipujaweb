// sticky header 
$(document).ready(function () {
    const $header = $(".header");
    const $logo = $(".logo");
    const $contact = $(".contact");
    const headerOffset = $header.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > headerOffset) {
            $header.addClass("sticky");
            $logo.addClass("d-block");
            $contact.addClass("d-block");
        } else {
            $header.removeClass("sticky");
            $logo.removeClass("d-block");
            $contact.removeClass("d-block");
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
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
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
