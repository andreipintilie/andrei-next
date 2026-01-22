const Chip = ({ children }) => {
  return (
    <div className='shadow-none borderColor'>
      <div className='flex items-center gap-2 bg-primary px-4 py-1 rounded-primary w-max text-white text-sm uppercase'>
        {children}
      </div>
    </div>
  );
};

export default Chip;
