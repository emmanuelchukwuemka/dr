// Video Testimonials Gallery (Modal-based)
const videoThumbnails = document.querySelectorAll('.video-thumbnail');
const videoModal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');
const modalOverlay = document.getElementById('modal-overlay');

// Video data mapping
const videoData = [
    {
        title: 'Customer Success Story',
        description: 'Real results from our customers',
        src: 'assets/images/video/DR Quick Full Clips Ads Video (7).mp4'
    },
    {
        title: 'Product Overview',
        description: 'Learn about Dr.Quick benefits',
        src: 'assets/images/video/Dr Quick episode ONE.mp4'
    },
    {
        title: 'Real Testimonial',
        description: 'Personal experience shared',
        src: 'assets/images/video/WhatsApp Video 2026-01-29 at 07.28.04.mp4'
    },
    {
        title: 'Success Journey',
        description: 'Inspiring transformation story',
        src: 'assets/images/video/WhatsApp Video 2026-01-29 at 21.53.42.mp4'
    }
];

// Open video modal
videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const index = parseInt(thumbnail.dataset.videoIndex);
        const data = videoData[index];
        
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalVideo.src = data.src;
        
        // Preload and play the video
        modalVideo.load();
        videoModal.style.display = 'flex';
        
        // Add animation class for smooth appearance
        setTimeout(() => {
            videoModal.classList.add('show');
            modalVideo.play();
        }, 10);
    });
});

// Close video modal
function closeModal() {
    videoModal.classList.remove('show');
    setTimeout(() => {
        videoModal.style.display = 'none';
        modalVideo.pause();
        modalVideo.currentTime = 0;
    }, 300);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.style.display === 'flex') {
        closeModal();
    }
});

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
