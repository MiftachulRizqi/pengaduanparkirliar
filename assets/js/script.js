document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statistikSection = document.getElementById('statistik');
    if (statistikSection) observer.observe(statistikSection);
});

function animateStats() {
    const stats = [
        { id: 'count1', target: 120, duration: 2000 },
        { id: 'count2', target: 80,  duration: 2000 },
        { id: 'count3', target: 40,  duration: 2000 }
    ];

    stats.forEach((stat, index) => {
        const element = document.getElementById(stat.id);
        const progressCircle = document.querySelectorAll('.progress-circle')[index];
        
        let start = 0;
        const increment = Math.ceil(stat.target / (stat.duration / 16));
        
        const counter = setInterval(() => {
            start += increment;
            if (start >= stat.target) {
                start = stat.target;
                clearInterval(counter);
            }
            element.textContent = start;
        }, 16);

        const max = 120; 
        const percentage = (stat.target / max) * 100;
        const offset = 440 - (440 * percentage / 100);
        
        setTimeout(() => {
            progressCircle.style.strokeDashoffset = offset;
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const btnIcon = document.getElementById('btnIcon');
    const formLaporan = document.getElementById('formLaporan');

    // Saat form dibuka atau ditutup
    formLaporan.addEventListener('show.bs.collapse', function() {
        btnIcon.classList.remove('fa-chevron-down');
        btnIcon.classList.add('fa-chevron-up');
    });

    formLaporan.addEventListener('hide.bs.collapse', function() {
        btnIcon.classList.remove('fa-chevron-up');
        btnIcon.classList.add('fa-chevron-down');
    });
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById('btn-lapor').addEventListener('click', function() {
    window.location.href = '#cta-section'; 
});
