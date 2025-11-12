export const goToSection = (e) => {
  e.preventDefault();

  const headerHeight = 100;
  const href = e.target.getAttribute('href');
  const elementId = href.replace('#', '');
  const element = document.getElementById(elementId);

  if (!element) return;

  const offsetTop = element.offsetTop;

  window.scrollTo({
    behavior: 'smooth',
    top: offsetTop - headerHeight,
  });
};
