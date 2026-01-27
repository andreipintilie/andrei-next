'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            ref={overlayRef}
            className='lg:hidden fixed top-0 left-0 z-100 bg-black/80 bg-opacity-50 w-full h-screen'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.nav
            ref={menuRef}
            className='lg:hidden fixed top-0 right-0 z-101 bg-primary w-full max-w-60 sm:max-w-70 h-screen'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className='flex flex-col justify-center items-center gap-y-16 px-6 h-full'>
              {menuItems.map(({ name, href }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + i * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <button
                    className='button iconButton'
                    onClick={(e) => handleMenuItemClick(e, href)}
                  >
                    {name}
                    <Icon icon='akar-icons:arrow-right' />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
