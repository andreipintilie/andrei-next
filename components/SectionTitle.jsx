const SectionTitle = ({ children }) => {
  return (
    <h2 className="after:hidden after:bottom-0 after:left-0 after:absolute relative flex items-center gap-x-3 after:bg-linear-to-l after:from-secondary after:to-tertiary mb-8 md:mb-11 after:w-full after:h-0.5 font-medium text-white text-2xl [&_svg]:text-2xl md:text-3xl after:content-[''] leading-14 md:leading-12 tracking-wide">
      {children}
    </h2>
  );
};

export default SectionTitle;
