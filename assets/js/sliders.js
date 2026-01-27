// Video Testimonials Slider (Continuous/Marquee Effect)
const videoSwiper = new Swiper('.video-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 8000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    freeMode: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Image Testimonials Slider (WhatsApp screenshots)
const testimonialSwiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Text Testimonial Slider (Continuous/Marquee Effect)
const textSwiper = new Swiper('.text-testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 8000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    freeMode: true,
    allowTouchMove: false,
});
