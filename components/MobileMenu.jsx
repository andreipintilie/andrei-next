'use client';

import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { menuItems } from '@/utils/menuItems';
import { goToSection } from '@/utils/scrollUtils';

const MobileMenu = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && overlayRef.current && overlayRef.current === event.target) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleMenuItemClick = (e, href) => {
    e.preventDefault();

    onClose();

    setTimeout(() => {
      const tempAnchor = document.createElement('a');
      tempAnchor.href = `#${href}`;

      const syntheticEvent = {
        preventDefault: () => {},
        target: tempAnchor,
      };

      goToSection(syntheticEvent);
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={overlayRef}
        className='lg:hidden fixed top-0 left-0 z-[100] bg-black bg-opacity-50 w-full h-screen transition-opacity'
      />

      <nav
        ref={menuRef}
        className={`lg:hidden fixed top-0 z-[101] bg-primary w-full max-w-60 sm:max-w-70 h-screen transition-all duration-300 ${
          isOpen ? 'right-0' : '-right-full'
        }`}
      >
        <ul className='flex flex-col justify-center items-center gap-y-16 px-6 h-full'>
          {menuItems.map(({ name, href }, i) => (
            <li key={i}>
              <button
                className='button iconButton'
                onClick={(e) => handleMenuItemClick(e, href)}
              >
                {name}
                <Icon icon='akar-icons:arrow-right' />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
