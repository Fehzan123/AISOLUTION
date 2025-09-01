

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("header .menu-toggle"); // only header toggle
  const navLinks = document.querySelector("header .nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Optional: close menu when clicking a link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});



(function(){
  const slider = document.getElementById('cardSlider');
  const slides = slider.querySelector('.slides');
  const slideCount = Math.ceil(slides.querySelectorAll('.card2').length / 3); // 9 cards / 3 = 3 slides
  const dots = slider.querySelectorAll('.dot');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');

  let index = 0;
  let auto;

  function goTo(i){
    index = (i + slideCount) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, n) => dot.classList.toggle('active', n === index));
  }

  function startAuto(){
    auto = setInterval(() => goTo(index + 1), 8000);
  }
  function stopAuto(){ clearInterval(auto); }

  next.addEventListener('click', () => { stopAuto(); goTo(index+1); startAuto(); });
  prev.addEventListener('click', () => { stopAuto(); goTo(index-1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));

  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);

  goTo(0);
  startAuto();
})();
// hero start
const slides1 = document.querySelector('.slides1');
    const dots1 = document.querySelectorAll('.dot1');
    let index1 = 0;

    function showSlide1(i) {
      index1 = (i + dots1.length) % dots1.length;
      slides1.style.transform = `translateX(${-index1 * 100}%)`;
      dots1.forEach(dot => dot.classList.remove('active1'));
      dots1[index1].classList.add('active1');
    }

    document.querySelector('.prev1').onclick = () => showSlide1(index1 - 1);
    document.querySelector('.next1').onclick = () => showSlide1(index1 + 1);
    dots1.forEach((dot, i) => dot.onclick = () => showSlide1(i));

    // Auto play
    setInterval(() => showSlide1(index1 + 1), 4000);

// hero end

// start footer
function subscribe() {
  const email = document.getElementById("email").value;
  if (email) {
    alert("Thank you for subscribing with " + email);
  } else {
    alert("Please enter a valid email address.");
  }
}