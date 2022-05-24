
particlesJS.load('particles-js', 'assets/js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

const container = document.querySelector('.clipBg');

for (let i = 0; i <= 50; i++) {
  const blocks = document.createElement('div');
  blocks.classList.add('block');
  container.appendChild(blocks);
}

function animateBlocks() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-800, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    scale: function () {
      return anime.random(1, 2);
    },
    duration: 2500,
    delay: anime.stagger(30),
    complete: animateBlocks,
  });
}

animateBlocks();


