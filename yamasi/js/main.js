
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero .slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero .slide');
  const prevBtn = document.querySelector('.arrow.left');
  const nextBtn = document.querySelector('.arrow.right');
  let current = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  function resetTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
  }

  intervalId = setInterval(nextSlide, 5000);
});
