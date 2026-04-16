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
    { name: "GUI", desc: "GUI framework dengan TypeScript", lang: "TypeScript", url: "https://github.com/SOBING4413/GUI", updated: "last month", stars: 1, forks: 1 },
    { name: "violence-district", desc: "Violence district game script untuk FiveM", lang: "Lua", url: "https://github.com/SOBING4413/violence-district", updated: "Mar 15" },
    { name: "Universa-v2", desc: "Universa v2 - advanced TypeScript project", lang: "TypeScript", url: "https://github.com/SOBING4413/Universa-v2", updated: "Mar 15" },
    { name: "Animation-Menu", desc: "Menu animasi untuk game scripting", lang: "Lua", url: "https://github.com/SOBING4413/Animation-Menu", updated: "Mar 14" },
    { name: "indonesian-word-dataset", desc: "KBBI wordlist extractor - dataset kata Indonesia", lang: "Python", url: "https://github.com/SOBING4413/indonesian-word-dataset", updated: "Mar 13" },
    { name: "Xeno", desc: "Low-level C++ project untuk advanced programming", lang: "C++", url: "https://github.com/SOBING4413/Xeno", updated: "Mar 13" },
    { name: "aimbot", desc: "Aimbot script untuk game modding", lang: "Lua", url: "https://github.com/SOBING4413/aimbot", updated: "Mar 11" },
    { name: "universal", desc: "Universal utility scripts collection", lang: "Other", url: "https://github.com/SOBING4413/universal", updated: "Mar 10" },
    { name: "Roblox", desc: "Roblox game scripts & modding tools", lang: "Lua", url: "https://github.com/SOBING4413/Roblox", updated: "Mar 8" },
];

// ========== MATRIX RAIN (Loading Screen) ==========
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.chars = 'ABCDEF0123456789<>/{}[];:'.split('');
        this.resize();
        this.columns = [];
        for (let i = 0; i < this.colCount; i++) {
            this.columns[i] = Math.random() * -100;
        }
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.fontSize = 14;
        this.colCount = Math.floor(this.canvas.width / this.fontSize);
    }

    animate() {
        this.ctx.fillStyle = 'rgba(5, 10, 14, 0.08)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = this.fontSize + 'px monospace';

        for (let i = 0; i < this.colCount; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            const x = i * this.fontSize;
            const y = this.columns[i] * this.fontSize;
            this.ctx.globalAlpha = Math.random() * 0.5 + 0.3;
            this.ctx.fillText(char, x, y);
            this.ctx.globalAlpha = 1;
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.columns[i] = 0;
            }
            this.columns[i]++;
        }
        this.rafId = requestAnimationFrame(() => this.animate());
    }

    stop() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
    }
}

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
        const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 18000));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
                color: Math.random() > 0.7 ? '0, 212, 255' : '0, 255, 65',
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => { this.resize(); this.init(); });
        window.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
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
            this.ctx.fillStyle = 'rgba(' + p.color + ', ' + p.opacity + ')';
            this.ctx.fill();

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = 'rgba(' + p.color + ', ' + (0.05 * (1 - dist / 140)) + ')';
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }

            const mdx = p.x - this.mouse.x;
            const mdy = p.y - this.mouse.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 130) {
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.strokeStyle = 'rgba(0, 212, 255, ' + (0.15 * (1 - mDist / 130)) + ')';
                this.ctx.lineWidth = 0.8;
                this.ctx.stroke();
            }
        });
        requestAnimationFrame(() => this.animate());
    }
}

// ========== TYPING ANIMATION ==========
class TypingAnimation {
    constructor(element, texts, speed, pause) {
        this.element = element;
        this.texts = texts;
        this.speed = speed || 80;
        this.pause = pause || 2000;
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

// ========== CUSTOM CURSOR ==========
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.trail = document.getElementById('cursorTrail');
        if (!this.cursor || !this.trail || window.innerWidth <= 768) return;

        this.pos = { x: 0, y: 0 };
        this.trailPos = { x: 0, y: 0 };

        document.addEventListener('mousemove', (e) => {
            this.pos.x = e.clientX;
            this.pos.y = e.clientY;
        });

        const hoverEls = document.querySelectorAll('a, button, .project-card, .filter-btn, .tag, .info-card, .stat-card, .contact-card, [data-tilt]');
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
        });

        this.animate();
    }

    animate() {
        this.cursor.style.left = this.pos.x + 'px';
        this.cursor.style.top = this.pos.y + 'px';
        this.trailPos.x += (this.pos.x - this.trailPos.x) * 0.15;
        this.trailPos.y += (this.pos.y - this.trailPos.y) * 0.15;
        this.trail.style.left = this.trailPos.x + 'px';
        this.trail.style.top = this.trailPos.y + 'px';
        requestAnimationFrame(() => this.animate());
    }
}

// ========== RENDER PROJECTS ==========
function renderProjects(filter) {
    filter = filter || 'all';
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const langMap = {
        'Python': 'python', 'JavaScript': 'javascript', 'Lua': 'lua',
        'TypeScript': 'typescript', 'C++': 'cpp', 'HTML': 'html',
        'Shell': 'shell', 'Other': 'unknown',
    };

    const filtered = filter === 'all'
        ? repositories
        : repositories.filter(function(r) { return r.lang === filter; });

    filtered.forEach(function(repo, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        const langClass = langMap[repo.lang] || 'unknown';
        const forkedBadge = repo.forked ? ' <span style="color:var(--text-muted);font-size:0.7rem;">(forked)</span>' : '';
        const starInfo = repo.stars ? ' ⭐' + repo.stars : '';
        const forkInfo = repo.forks ? ' 🍴' + repo.forks : '';

        card.innerHTML =
            '<div class="project-header">' +
                '<span class="project-name">' + repo.name + forkedBadge + '</span>' +
                '<span class="project-badge">' + repo.lang + '</span>' +
            '</div>' +
            '<div class="project-desc">' + repo.desc + starInfo + forkInfo + '</div>' +
            '<div class="project-footer">' +
                '<div class="project-lang">' +
                    '<span class="lang-dot ' + langClass + '"></span>' +
                    repo.lang +
                '</div>' +
                '<a href="' + repo.url + '" target="_blank" class="project-link">' +
                    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
                    ' View Repo' +
                '</a>' +
            '</div>';

        // Spotlight effect
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });

        card.addEventListener('click', function(e) {
            if (!e.target.closest('.project-link')) {
                window.open(repo.url, '_blank');
            }
        });

        grid.appendChild(card);

        // Staggered animation
        setTimeout(function() {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 40);
    });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });

    setTimeout(function() {
        document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('visible'); });
    }, 2000);
}

// ========== SKILL BAR AND RING ANIMATION ==========
function initSkillBars() {
    const circumference = 2 * Math.PI * 52;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach(function(fill) {
                    const width = fill.dataset.width;
                    setTimeout(function() { fill.style.width = width + '%'; }, 300);
                });

                const rings = entry.target.querySelectorAll('.skill-ring-fill');
                rings.forEach(function(ring) {
                    const percent = parseInt(ring.dataset.percent);
                    const offset = circumference - (percent / 100) * circumference;
                    setTimeout(function() { ring.style.strokeDashoffset = offset; }, 300);
                });
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skills-grid').forEach(function(el) { observer.observe(el); });

    setTimeout(function() {
        document.querySelectorAll('.skill-fill').forEach(function(fill) {
            fill.style.width = fill.dataset.width + '%';
        });
        document.querySelectorAll('.skill-ring-fill').forEach(function(ring) {
            const percent = parseInt(ring.dataset.percent);
            const offset = circumference - (percent / 100) * circumference;
            ring.style.strokeDashoffset = offset;
        });
    }, 2500);
}

// ========== COUNTER ANIMATION ==========
function initCounters() {
    let counted = false;
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !counted) {
                counted = true;
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.stats-grid').forEach(function(el) { observer.observe(el); });

    setTimeout(function() {
        if (!counted) { counted = true; animateCounters(); }
    }, 3500);
}

function animateCounters() {
    var counters = document.querySelectorAll('.stat-number');
    counters.forEach(function(counter) {
        var target = parseInt(counter.dataset.target);
        var duration = 2000;
        var startTime = performance.now();

        function update(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        }
        requestAnimationFrame(update);
    });
}

// ========== NAVBAR ==========
function initNavbar() {
    var navbar = document.getElementById('navbar');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (toggle && links) {
        toggle.addEventListener('click', function() {
            toggle.classList.toggle('active');
            links.classList.toggle('open');
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (toggle) toggle.classList.remove('active');
            if (links) links.classList.remove('open');
        });
    });

    var sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        var current = '';
        sections.forEach(function(section) {
            var top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            var href = link.getAttribute('href');
            if (href && href === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========== FILTER BUTTONS ==========
function initFilters() {
    var buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            buttons.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ========== MAGNETIC BUTTONS ==========
function initMagneticButtons() {
    if (window.innerWidth <= 768) return;
    document.querySelectorAll('.magnetic').forEach(function(btn) {
        btn.addEventListener('mousemove', function(e) {
            var rect = btn.getBoundingClientRect();
            var x = e.clientX - rect.left - rect.width / 2;
            var y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = 'translate(' + (x * 0.2) + 'px, ' + (y * 0.2) + 'px)';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ========== CONTACT FORM ==========
function initContactForm() {
    var form = document.getElementById('contactForm');
    var success = document.getElementById('formSuccess');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.style.display = 'none';
        if (success) {
            success.classList.add('show');
        }
        setTimeout(function() {
            form.style.display = 'flex';
            form.reset();
            if (success) success.classList.remove('show');
        }, 4000);
    });
}

// ========== SVG GRADIENT FOR SKILL RINGS ==========
function injectSVGDefs() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.style.position = 'absolute';
    svg.innerHTML = '<defs><linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00ff41"/><stop offset="100%" stop-color="#00d4ff"/></linearGradient></defs>';
    document.body.insertBefore(svg, document.body.firstChild);
}

// ========== LOADING SCREEN ==========
function initLoader() {
    var matrixCanvas = document.getElementById('matrixRain');
    var matrixRain = null;
    if (matrixCanvas) {
        matrixRain = new MatrixRain(matrixCanvas);
    }

    var loader = document.getElementById('loader');
    setTimeout(function() {
        if (loader) {
            loader.classList.add('hidden');
        }
        if (matrixRain) {
            matrixRain.stop();
        }
    }, 2200);
}

// ========== PARALLAX ON SCROLL ==========
function initParallax() {
    var heroPhoto = document.querySelector('.hero-photo');
    var shapes = document.querySelectorAll('.shape');

    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;
        if (heroPhoto && scrollY < window.innerHeight) {
            heroPhoto.style.transform = 'scale(1.05) translateY(' + (scrollY * 0.15) + 'px)';
        }
        shapes.forEach(function(shape, i) {
            var speed = 0.02 + (i * 0.01);
            shape.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
        });
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function() {
    // SVG gradient defs
    injectSVGDefs();

    // Loading screen
    initLoader();

    // Particles
    var canvas = document.getElementById('particles');
    if (canvas) new ParticleSystem(canvas);

    // Typing animation
    var typingEl = document.getElementById('typingText');
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

    // Custom cursor
    new CustomCursor();

    // Render projects
    renderProjects();

    // Init all modules
    initScrollReveal();
    initSkillBars();
    initCounters();
    initNavbar();
    initFilters();
    initSmoothScroll();
    initMagneticButtons();
    initContactForm();
    initParallax();
});
