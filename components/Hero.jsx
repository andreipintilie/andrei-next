'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { goToSection } from '@/utils/scrollUtils';

const Hero = ({ transitionDelay }) => {
  return (
    <motion.section
      className='flex items-center min-h-94 md:min-h-142 text-white section sectionAnimated md:pt-2'
      data-background
      style={transitionDelay ? { transitionDelay } : undefined}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: transitionDelay ? parseFloat(transitionDelay) : 0,
        ease: 'easeOut',
      }}
    >
      <div className='not-first:flex flex-col justify-center items-center bg-primary mx-auto px-4 py-8 max-w-116 text-3xl text-center leading-14 container-secondary'>
        <p className='flex items-center justify-center gap-3 mb-2 font-regular text-xl uppercase tracking-wider'>
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

        <a
          href='contact'
          onClick={goToSection}
          className='button flex items-center gap-2 w-max mx-auto font-semibold'
        >
          Contact me
          <Icon icon='akar-icons:arrow-down' />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
