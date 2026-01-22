'use client';

import { Icon } from '@iconify/react';
import { goToSection } from '@/utils/scrollUtils';

export default function Hero({ transitionDelay }) {
  return (
    <section
      className='flex items-center min-h-94 md:min-h-[35.5rem] text-white section sectionAnimated'
      data-background
      style={transitionDelay ? { transitionDelay } : undefined}
    >
      <div className='flex flex-col justify-center items-center bg-primary mx-auto px-4 py-8 max-w-116 text-3xl text-center leading-14 container-secondary'>
        <p className='flex items-center gap-3 mb-2 font-regular text-xl uppercase tracking-wider'>
          Hi there!
          <Icon
            icon='tdesign:wave-bye-filled'
            className='inline-block text-white animate-bounce'
          />
        </p>

        <p className='mb-4 text-2xl'>
          I'm <span className='font-bold textGradient'>Andrei Pintilie</span>
          <br />
          currently working as a
        </p>

        <div className='bgGradient mb-8 pb-1'>
          <h1 className='bg-primary text-xl'>Front-End Developer</h1>
        </div>

        <a href='contact' className='button iconButton' onClick={goToSection}>
          Contact me
          <Icon icon='akar-icons:arrow-down' />
        </a>
      </div>
    </section>
  );
}
