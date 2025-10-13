class InteractiveCarousel {
            constructor() {
                this.currentSlide = 0;
                this.slides = document.querySelectorAll('.project-card');
                this.totalSlides = this.slides.length;
                this.track = document.getElementById('carouselTrack');
                this.dotsContainer = document.getElementById('dotsContainer');
                this.progressBar = document.getElementById('progressBar');
                this.autoPlayInterval = null;
                this.autoPlayDelay = 6000;
                this.isHovered = false;

                this.init();
            }

            init() {
                this.createDots();
                this.bindEvents();
                this.updateCarousel();
                this.startAutoPlay();
                this.handleMediaAutoplay();
            }

            createDots() {
                this.dotsContainer.innerHTML = '';
                for (let i = 0; i < this.totalSlides; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (i === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => this.goToSlide(i));
                    this.dotsContainer.appendChild(dot);
                }
            }

            bindEvents() {
                document.getElementById('prevBtn').addEventListener('click', () => this.previousSlide());
                document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());

                // Pause autoplay on hover
                const container = document.querySelector('.carousel-container');
                container.addEventListener('mouseenter', () => {
                    this.isHovered = true;
                    this.pauseAutoPlay();
                });
                container.addEventListener('mouseleave', () => {
                    this.isHovered = false;
                    this.startAutoPlay();
                });

                // Enhanced hover effects for project cards
                this.slides.forEach((slide, index) => {
                    slide.addEventListener('mouseenter', () => {
                        this.handleCardHover(index, true);
                    });
                    slide.addEventListener('mouseleave', () => {
                        this.handleCardHover(index, false);
                    });
                });

                // Touch events for mobile
                this.bindTouchEvents();

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') this.previousSlide();
                    if (e.key === 'ArrowRight') this.nextSlide();
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.openCurrentProject();
                    }
                });
            }

            bindTouchEvents() {
                let startX = 0;
                let currentX = 0;
                let isDragging = false;

                this.track.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    isDragging = true;
                    this.pauseAutoPlay();
                });

                this.track.addEventListener('touchmove', (e) => {
                    if (!isDragging) return;
                    currentX = e.touches[0].clientX;
                    e.preventDefault();
                });

                this.track.addEventListener('touchend', () => {
                    if (!isDragging) return;
                    isDragging = false;
                    const diffX = startX - currentX;
                    
                    if (Math.abs(diffX) > 50) {
                        if (diffX > 0) {
                            this.nextSlide();
                        } else {
                            this.previousSlide();
                        }
                    }
                    if (!this.isHovered) this.startAutoPlay();
                });
            }

            handleCardHover(index, isEntering) {
                const card = this.slides[index];
                const media = card.querySelector('iframe, img');
                
                if (isEntering) {
                    // Add hover effects
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                    
                    // Pause video autoplay on hover for better UX
                    if (media && media.tagName === 'IFRAME') {
                        this.pauseVideo(media);
                    }
                } else {
                    // Remove hover effects
                    if (index === this.currentSlide) {
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.transform = 'scale(0.98)';
                    }
                    card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }
            }

            pauseVideo(iframe) {
                // For YouTube videos
                if (iframe.src.includes('youtube.com')) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            }

            handleMediaAutoplay() {
                // Pause all videos except the current slide
                this.slides.forEach((slide, index) => {
                    const iframe = slide.querySelector('iframe');
                    if (iframe && index !== this.currentSlide) {
                        this.pauseVideo(iframe);
                    }
                });
            }

            goToSlide(index) {
                this.currentSlide = index;
                this.updateCarousel();
                this.resetAutoPlay();
                this.handleMediaAutoplay();
            }

            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateCarousel();
                this.resetAutoPlay();
                this.handleMediaAutoplay();
            }

            previousSlide() {
                this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
                this.updateCarousel();
                this.resetAutoPlay();
                this.handleMediaAutoplay();
            }

            updateCarousel() {
                // Update track position with smooth transition
                const translateX = -this.currentSlide * 100;
                this.track.style.transform = `translateX(${translateX}%)`;

                // Update active states with enhanced animations
                this.slides.forEach((slide, index) => {
                    const isActive = index === this.currentSlide;
                    slide.classList.toggle('active', isActive);
                    
                    if (isActive) {
                        slide.style.transform = 'scale(1)';
                        slide.style.opacity = '1';
                    } else {
                        slide.style.transform = 'scale(0.98)';
                        slide.style.opacity = '0.8';
                    }
                });

                // Update dots
                const dots = document.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentSlide);
                });

                // Update progress bar
                const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
                this.progressBar.style.width = `${progress}%`;

                // Add staggered animation to content elements
                this.animateContent();
            }

            animateContent() {
                const activeSlide = this.slides[this.currentSlide];
                const elements = activeSlide.querySelectorAll('.project-type, .project-title, .project-description, .tag, .project-link');
                
                elements.forEach((el, index) => {
                    el.style.animation = 'none';
                    el.offsetHeight; // Trigger reflow
                    el.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
                });
            }

            openCurrentProject() {
                const activeCard = this.slides[this.currentSlide];
                const link = activeCard.querySelector('.btn-primary').href;
                if (link) {
                    window.open(link, '_blank');
                }
            }

            startAutoPlay() {
                if (this.isHovered) return;
                this.pauseAutoPlay();
                this.autoPlayInterval = setInterval(() => {
                    if (!this.isHovered) {
                        this.nextSlide();
                    }
                }, this.autoPlayDelay);
            }

            pauseAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                    this.autoPlayInterval = null;
                }
            }

            resetAutoPlay() {
                this.startAutoPlay();
            }
        }

        // Global function for project links
        function openProject(url) {
            window.open(url, '_blank');
        }

        // Add additional CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }

            .hover-icon:hover {
                animation: pulse 1s infinite;
            }
        `;
        document.head.appendChild(style);

        // Initialize carousel when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new InteractiveCarousel();
        });