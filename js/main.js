// スクロールでフェードイン
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.js-fade');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach((el) => observer.observe(el));
});
