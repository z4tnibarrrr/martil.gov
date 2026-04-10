// ============================================================
// MAIN JS - Logic & Interactivity (Smart City Version)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Drawer Navigation
  const bindNavEvents = () => {
    const navToggle = document.getElementById('navToggle');
    const drawerClose = document.getElementById('drawerClose');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');

    if (navToggle && mobileDrawer && drawerOverlay && drawerClose) {
      const openDrawer = () => {
        mobileDrawer.classList.add('open');
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      };
      
      const closeDrawer = () => {
        mobileDrawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
      };

      // Prevent attaching multiple times
      if (!navToggle.hasAttribute('data-bound')) {
        navToggle.addEventListener('click', openDrawer);
        drawerClose.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);
        navToggle.setAttribute('data-bound', 'true');
      }
      return true;
    }
    return false;
  };

  // Try binding immediately (if injected synchronously by partials.js)
  if (!bindNavEvents()) {
    // Fallback: Using MutationObserver because Header is injected asynchronously
    const observer = new MutationObserver(() => {
      if (bindNavEvents()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // 2. Sticky Navbar & Parallax
  const siteHeader = document.getElementById('siteHeader');
  const heroBg = document.getElementById('heroBg');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky Navbar
    // Since Header is injected via JS, evaluate dynamically
    const dynamicHeader = document.getElementById('siteHeader');
    if (dynamicHeader) {
      if (scrollY > 50) {
        dynamicHeader.classList.add('scrolled');
      } else {
        dynamicHeader.classList.remove('scrolled');
      }
    }

    // Parallax Effect for Hero Background
    if (heroBg && scrollY < window.innerHeight) {
      // Moves the background down at half the scroll speed
      heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
    }
  });


  // 3. Reveal Animations on Scroll
  const reveals = document.querySelectorAll('[data-reveal]');
  
  const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay * 0.2}s`;
        
        // Trigger reflow
        void el.offsetWidth;
        
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        
        observer.unobserve(el);
      }
    });
  }, revealOptions);

  reveals.forEach(el => revealObserver.observe(el));

  
  // 4. Stats Counter Animation
  const numStatElements = document.querySelectorAll('.stat-glass .num');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting && !statsAnimated) {
      statsAnimated = true;
      numStatElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-val'), 10);
        let current = 0;
        const duration = 2000;
        const stepTime = Math.max(10, Math.floor(duration / target)); // Max frequency 10ms
        const increment = target / (duration / stepTime);

        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target.toLocaleString('en-US'); // Add commas
            clearInterval(counter);
          } else {
            el.textContent = Math.ceil(current).toLocaleString('en-US');
          }
        }, stepTime);
      });
    }
  }, { threshold: 0.5 });
  
  const statsSection = document.querySelector('.stats-smart');
  if(statsSection) {
    statsObserver.observe(statsSection);
  }


  // 5. Council Member Carousel
  const cTrack = document.getElementById('cTrack');
  const cNext = document.getElementById('cNext'); // Left arrow (RTL)
  const cPrev = document.getElementById('cPrev'); // Right arrow (RTL)

  if (cTrack && cNext && cPrev) {
    let position = 0;
    const itemWidth = 240 + 24; // Width + gap
    
    // Determine bounds
    const maxScroll = Math.max(0, cTrack.scrollWidth - cTrack.parentElement.clientWidth);

    cNext.addEventListener('click', () => {
      // Move "Next" in RTL means decreasing position (moving content to the right)
      position -= itemWidth * 2;
      if(position < -maxScroll) position = -maxScroll;
      
      // Because RTL layout is right-to-left, transform: translateX needs to be positive to move view right
      cTrack.style.transform = `translateX(${Math.abs(position)}px)`;
    });

    cPrev.addEventListener('click', () => {
      // Move "Prev" in RTL means increasing position (moving content to the left)
      position += itemWidth * 2;
      if(position > 0) position = 0;
      
      cTrack.style.transform = `translateX(${Math.abs(position)}px)`;
    });
  }


  // 6. Generic Tabs System (For Inner Pages)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      
      // Update buttons
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      // Update panels
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });

});
