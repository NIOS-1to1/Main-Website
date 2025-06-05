        // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll animation to cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all content cards
        document.querySelectorAll('.content-card, .feature-card, .review-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Floating elements animation delay
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `-${index}s`;
        });


const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;

  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

//timing for how fast the img will change

setInterval(() => {
  showSlide(index + 1);
}, 3000);

showSlide(index);


//Contact us sticky button 

        const contactButton = document.getElementById('contactButton');
        const contactMenu = document.getElementById('contactMenu');
        const overlay = document.getElementById('overlay');
        let isOpen = false;

        contactButton.addEventListener('click', function() {
            isOpen = !isOpen;
            
            if (isOpen) {
                contactButton.classList.add('active');
                contactMenu.classList.add('show');
                overlay.classList.add('show');
                contactButton.innerHTML = '✕';
            } else {
                closeMenu();
            }
        });

        overlay.addEventListener('click', function() {
            if (isOpen) {
                closeMenu();
            }
        });

        function closeMenu() {
            isOpen = false;
            contactButton.classList.remove('active');
            contactMenu.classList.remove('show');
            overlay.classList.remove('show');
            contactButton.innerHTML = 'Contact Us';
        }

        function handleSocialClick(platform) {
            // You can replace these with actual URLs to your social media pages
            if (platform === 'discord') {
                // Replace with your Discord server invite link
                window.open('https://discordapp.com/users/1002799777915863070', '_blank');
            } else if (platform === 'reddit') {
                // Replace with your Reddit community link
                window.open('https://reddit.com/r/your-subreddit', '_blank');
            }
            
            // Close the menu after clicking
            closeMenu();
        }

        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        });