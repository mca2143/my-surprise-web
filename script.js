const button = document.getElementById('action-btn');
const headline = document.getElementById('headline');
const subtext = document.getElementById('subtext');
const audio = document.getElementById('bg-sound');
let opened = false;

function triggerSurprise() {
  if (opened) return;
  opened = true;

  // 1. Play sound
  audio.play().catch(() => console.log('Audio autoplay blocked'));

  // 2. Trigger confetti burst
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });

  // 3. Update text content
  headline.innerText = "You're Amazing!";
  subtext.innerText = "Hope this brings a smile to your face today ✨";
  button.style.display = 'none';

  // Floating continuous confetti
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

button.addEventListener('click', triggerSurprise);
