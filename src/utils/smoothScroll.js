export function smoothScroll(targetId, headerOffset = 120, duration = 1500) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // easeInOutCubic
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
