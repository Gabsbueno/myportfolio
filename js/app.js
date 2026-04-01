// AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// COUNTER
const counters = document.querySelectorAll(".counter");

const animateCounter = (el) => {
  const target = +el.getAttribute("data-target");
  let count = 0;

  const update = () => {
    const increment = target / 80;

    if (count < target) {
      count += increment;
      el.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      el.innerText = target;
    }
  };

  update();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));