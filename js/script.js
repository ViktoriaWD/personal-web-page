const btn = document.getElementById('menu-btn');
      const nav = document.getElementById('menu');


      btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
      });
      document.querySelector('a[href="#about-me"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelector('a[href="#contact-container"]').addEventListener('click', function(e) {
        e.precentDefault();
        document.getElementById('contact-container').scrollIntoView({ behavior: 'smooth' });
      });

        document.querySelector('a[href="#hero"]').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        });
        document.querySelector('a[href="#home-mobile"]').addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
           
        });
       
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      nav.classList.toggle('hidden');
      nav.classList.toggle('flex');
    });
  });
  