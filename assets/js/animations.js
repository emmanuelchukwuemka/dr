// CountUp Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    const stats = [
        { id: 'stat-1', end: 15000 },
        { id: 'stat-2', end: 25 },
        { id: 'stat-3', end: 12 }
    ];

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = stats.find(s => s.id === entry.target.id);
                if (stat) {
                    const countUp = new countUp.CountUp(stat.id, stat.end, {
                        separator: ',',
                        duration: 2.5
                    });
                    if (!countUp.error) {
                        countUp.start();
                    } else {
                        console.error(countUp.error);
                    }
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        const el = document.getElementById(stat.id);
        if (el) observer.observe(el);
    });
});

// Typewriter effect placeholder
function typeWriter(text, element, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
