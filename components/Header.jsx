'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { menuItems } from '@/utils/menuItems';
import { goToSection } from '@/utils/scrollUtils';
import GetResume from './GetResume';
import MobileMenu from './MobileMenu';

const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`text-white w-full fixed z-[1] left-1/2 -translate-x-1/2 h-[var(--header-height)] top-0 ${className} backdrop-blur-sm`}
    >
      <div className='flex justify-between items-center gap-4 mx-auto py-6 containerSecondary'>
        <a href='/' className='textLogo'>
          andreipintilie
        </a>

        <div className='hidden lg:block borderColor'>
          <nav className='bg-black-secondary px-8 py-3 rounded-primary'>
            <ul className='flex space-x-10'>
              {menuItems.map(({ name, href }, i) => (
                <li key={i}>
                  <a
                    href={`#${href}`}
                    className='hover:text-tertiary transition-colors duration-300'
                    onClick={goToSection}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <GetResume hideOnMobile={true} />

        <div className='group lg:hidden borderColor'>
          <button
            className='lg:hidden justify-center items-center grid bg-black-primary group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-tertiary border border-none rounded-primary w-10 h-10 font-bold text-white group-hover:text-black text-small transition-colors duration-300 cursor-pointer'
            type='button'
            onClick={toggleMenu}
          >
            <Icon icon='jam:menu' className='w-8 h-8' />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
