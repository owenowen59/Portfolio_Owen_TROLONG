// ===== PORTFOLIO.JS – Owen Trolong =====

document.addEventListener('DOMContentLoaded', () => {

  // ─── CURSEUR CUSTOM ──────────────────────────────────────────────────────
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (cursor && follower) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top  = e.clientY + 'px';
      }, 80);
    });
  }

  // ─── NAV STICKY ──────────────────────────────────────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ─── BURGER MENU ─────────────────────────────────────────────────────────
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '72px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(245,242,236,.97)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.gap = '1.5rem';
      navLinks.style.backdropFilter = 'blur(12px)';
      navLinks.style.borderBottom = '1px solid #e8e4dc';
    });
  }

  // ─── REVEAL ON SCROLL ─────────────────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Ajouter reveal aux sections
  document.querySelectorAll('.projet-card, .tl-item, .hstat, .engage-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // ─── SMOOTH ANCHOR ────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Fermer menu mobile si ouvert
        if (navLinks && navLinks.style.display === 'flex') navLinks.style.display = 'none';
      }
    });
  });

  // ─── TEXTE HERO ANIMÉ ─────────────────────────────────────────────────────
  // Stagger des reveals hero au chargement
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 120);
  });

});

// ─── FORMULAIRE CONTACT ────────────────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();

  emailjs.sendForm("service_contactpro", "template_p26folio04gv", "#contact-form")
    .then(() => {
      document.querySelector('.contact-form').style.display = 'none';
      document.getElementById('form-ok').style.display = 'flex';
    })
    .catch((error) => {
      console.error("Erreur EmailJS :", error);
      alert("Une erreur est survenue, réessayez plus tard.");
    });
}
