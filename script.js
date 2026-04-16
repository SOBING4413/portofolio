// ========== REPOSITORY DATA ==========
const repositories = [
    { name: "EDUKASI", desc: "Platform edukasi berbasis Shell scripting", lang: "Shell", url: "https://github.com/SOBING4413/EDUKASI", updated: "26 minutes ago" },
    { name: "deaface", desc: "Tool deface dengan Python untuk security testing", lang: "Python", url: "https://github.com/SOBING4413/deaface", updated: "2 hours ago" },
    { name: "TRACER-AI", desc: "ML & network analysis platform untuk deteksi risiko korupsi dalam transaksi keuangan pemerintah", lang: "Python", url: "https://github.com/SOBING4413/TRACER-AI-Transaction-Corruption-Examination-Recognition-AI-", updated: "yesterday", forked: true },
    { name: "live-ddos", desc: "Live DDoS monitoring & network stress testing tool", lang: "JavaScript", url: "https://github.com/SOBING4413/live-ddos", updated: "2 days ago" },
    { name: "Exter-Tool", desc: "Enhanced multi-purpose tools collection", lang: "Python", url: "https://github.com/SOBING4413/Exter-Tool", updated: "4 days ago" },
    { name: "MULTI-TOOLS", desc: "Koleksi multi-tools serba guna berbasis Python", lang: "Python", url: "https://github.com/SOBING4413/MULTI-TOOLS", updated: "last week" },
    { name: "ExterStore", desc: "Platform store/marketplace berbasis JavaScript", lang: "JavaScript", url: "https://github.com/SOBING4413/ExterStore", updated: "last week" },
    { name: "Exter-Executor", desc: "Script executor untuk game modding", lang: "Lua", url: "https://github.com/SOBING4413/Exter-Executor", updated: "last week" },
    { name: "ox_inventory", desc: "Inventory system untuk FiveM server", lang: "Lua", url: "https://github.com/SOBING4413/ox_inventory", updated: "last week" },
    { name: "evironment-exploit", desc: "Environment exploit research & testing", lang: "HTML", url: "https://github.com/SOBING4413/evironment-exploit", updated: "last week" },
    { name: "FRAMEWORK", desc: "Exter Framework - custom TypeScript framework", lang: "TypeScript", url: "https://github.com/SOBING4413/FRAMEWORK", updated: "2 weeks ago" },
    { name: "SOBING4413", desc: "GitHub profile repository & configuration", lang: "Other", url: "https://github.com/SOBING4413/SOBING4413", updated: "2 weeks ago" },
    { name: "Exter-Library", desc: "UI Library untuk pengembangan antarmuka", lang: "Lua", url: "https://github.com/SOBING4413/Exter-Library", updated: "2 weeks ago" },
    { name: "Exter-Library-v2", desc: "UI Library versi 2 dengan fitur lebih lengkap", lang: "Lua", url: "https://github.com/SOBING4413/Exter-Library-v2", updated: "2 weeks ago" },
    { name: "wheelie", desc: "Wheelie script untuk game simulation", lang: "Lua", url: "https://github.com/SOBING4413/wheelie", updated: "2 weeks ago" },
    { name: "ox_lib", desc: "Library utilities untuk FiveM development", lang: "Lua", url: "https://github.com/SOBING4413/ox_lib", updated: "2 weeks ago" },
    { name: "SPEEDTEST", desc: "Speed test tool berbasis JavaScript", lang: "JavaScript", url: "https://github.com/SOBING4413/SPEEDTEST", updated: "2 weeks ago" },
    { name: "TypeRush", desc: "Typing speed game - uji kecepatan mengetik", lang: "JavaScript", url: "https://github.com/SOBING4413/TypeRush", updated: "2 weeks ago" },
    { name: "KALKULATOR", desc: "Kalkulator web interaktif dengan JavaScript", lang: "JavaScript", url: "https://github.com/SOBING4413/KALKULATOR", updated: "2 weeks ago" },
    { name: "Drag-Drive-Simulator", desc: "Drag drive simulator game script", lang: "Lua", url: "https://github.com/SOBING4413/Drag-Drive-Simulator", updated: "3 weeks ago" },
    { name: "sambungkata", desc: "Game sambung kata berbasis Lua", lang: "Lua", url: "https://github.com/SOBING4413/sambungkata", updated: "last month" },
    { name: "GUI", desc: "GUI framework dengan TypeScript (⭐1 🍴1)", lang: "TypeScript", url: "https://github.com/SOBING4413/GUI", updated: "last month", stars: 1, forks: 1 },
    { name: "violence-district", desc: "Violence district game script untuk FiveM", lang: "Lua", url: "https://github.com/SOBING4413/violence-district", updated: "Mar 15" },
    { name: "Universa-v2", desc: "Universa v2 - advanced TypeScript project", lang: "TypeScript", url: "https://github.com/SOBING4413/Universa-v2", updated: "Mar 15" },
    { name: "Animation-Menu", desc: "Menu animasi untuk game scripting", lang: "Lua", url: "https://github.com/SOBING4413/Animation-Menu", updated: "Mar 14" },
    { name: "indonesian-word-dataset", desc: "KBBI wordlist extractor - dataset kata Indonesia", lang: "Python", url: "https://github.com/SOBING4413/indonesian-word-dataset", updated: "Mar 13" },
    { name: "Xeno", desc: "Low-level C++ project untuk advanced programming", lang: "C++", url: "https://github.com/SOBING4413/Xeno", updated: "Mar 13" },
    { name: "aimbot", desc: "Aimbot script untuk game modding", lang: "Lua", url: "https://github.com/SOBING4413/aimbot", updated: "Mar 11" },
    { name: "universal", desc: "Universal utility scripts collection", lang: "Other", url: "https://github.com/SOBING4413/universal", updated: "Mar 10" },
    { name: "Roblox", desc: "Roblox game scripts & modding tools", lang: "Lua", url: "https://github.com/SOBING4413/Roblox", updated: "Mar 8" },
];

// ========== PARTICLE SYSTEM ==========
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.resize();
        this.init();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const count = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 20000));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.init();
        });
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 255, 65, ${p.opacity})`;
            this.ctx.fill();

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(0, 255, 65, ${0.06 * (1 - dist / 150)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }

            const mdx = p.x - this.mouse.x;
            const mdy = p.y - this.mouse.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 120) {
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.strokeStyle = `rgba(0, 255, 65, ${0.15 * (1 - mDist / 120)})`;
                this.ctx.lineWidth = 0.8;
                this.ctx.stroke();
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ========== TYPING ANIMATION ==========
class TypingAnimation {
    constructor(element, texts, speed = 80, pause = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.pause = pause;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = current.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = current.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let delay = this.isDeleting ? this.speed / 2 : this.speed;

        if (!this.isDeleting && this.charIndex === current.length) {
            delay = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            delay = 400;
        }

        setTimeout(() => this.type(), delay);
    }
}

// ========== RENDER PROJECTS ==========
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const langMap = {
        'Python': 'python',
        'JavaScript': 'javascript',
        'Lua': 'lua',
        'TypeScript': 'typescript',
        'C++': 'cpp',
        'HTML': 'html',
        'Shell': 'shell',
        'Other': 'unknown',
    };

    const filtered = filter === 'all'
        ? repositories
        : repositories.filter(r => r.lang === filter);

    filtered.forEach((repo) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const langClass = langMap[repo.lang] || 'unknown';
        const forkedBadge = repo.forked ? ' <span style="color:var(--text-muted);font-size:0.7rem;">(forked)</span>' : '';
        const starInfo = repo.stars ? ` ⭐${repo.stars}` : '';
        const forkInfo = repo.forks ? ` 🍴${repo.forks}` : '';

        card.innerHTML = `
            <div class="project-header">
                <span class="project-name">${repo.name}${forkedBadge}</span>
                <span class="project-badge">${repo.lang}</span>
            </div>
            <div class="project-desc">${repo.desc}${starInfo}${forkInfo}</div>
            <div class="project-footer">
                <div class="project-lang">
                    <span class="lang-dot ${langClass}"></span>
                    ${repo.lang}
                </div>
                <a href="${repo.url}" target="_blank" class="project-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    View Repo
                </a>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.project-link')) {
                window.open(repo.url, '_blank');
            }
        });

        grid.appendChild(card);
    });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Also make all reveals visible after a short delay as fallback
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('visible');
        });
    }, 1500);
}

// ========== SKILL BAR ANIMATION ==========
function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach(fill => {
                    const width = fill.dataset.width;
                    setTimeout(() => {
                        fill.style.width = width + '%';
                    }, 300);
                });
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skills-grid').forEach(el => observer.observe(el));

    // Fallback: animate skill bars after delay
    setTimeout(() => {
        document.querySelectorAll('.skill-fill').forEach(fill => {
            const width = fill.dataset.width;
            fill.style.width = width + '%';
        });
    }, 2000);
}

// ========== COUNTER ANIMATION ==========
function initCounters() {
    let counted = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counted = true;
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.stats-grid').forEach(el => observer.observe(el));

    // Fallback
    setTimeout(() => {
        if (!counted) {
            counted = true;
            animateCounters();
        }
    }, 3000);
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            }
        };
        requestAnimationFrame(update);
    });
}

// ========== NAVBAR ==========
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('open');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (toggle) toggle.classList.remove('active');
            if (links) links.classList.remove('open');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========== FILTER BUTTONS ==========
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });
}

// ========== SMOOTH SCROLL FOR ANCHORS ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    // Particles
    const canvas = document.getElementById('particles');
    if (canvas) new ParticleSystem(canvas);

    // Typing animation
    const typingEl = document.getElementById('typingText');
    if (typingEl) {
        new TypingAnimation(typingEl, [
            'Full Stack Developer',
            'Python & JavaScript Expert',
            'Game Script Developer',
            'Security Researcher',
            'Open Source Enthusiast',
            'Lua & FiveM Scripter',
            'AI/ML Explorer',
        ]);
    }

    // Render projects
    renderProjects();

    // Init all modules
    initScrollReveal();
    initSkillBars();
    initCounters();
    initNavbar();
    initFilters();
    initSmoothScroll();
});