export const initSectionAnimations = () => {
  const sections = document.querySelectorAll('.sectionAnimated');

  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sectionVisible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return observer;
};
