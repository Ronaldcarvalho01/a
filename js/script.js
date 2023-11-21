document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = 1 - currentIndex; // Alternar entre 0 e 1
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos
  showSlide(currentIndex); // Exibe o primeiro slide
});


document.addEventListener("DOMContentLoaded", function() {
  const imgElements = document.querySelectorAll('.cardapio img');

  function handleIntersection(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-viewport');
          }
      });
  }

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  imgElements.forEach(img => {
      observer.observe(img);
  });
});

