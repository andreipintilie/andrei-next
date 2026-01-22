'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/contexts/ContentContext';
import SectionTitle from './SectionTitle';
import { Icon } from '@iconify/react';

const About = ({ transitionDelay }) => {
  const { content } = useContent();

  return (
    <motion.section
      className='section'
      id='about'
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: transitionDelay ? parseFloat(transitionDelay) : 0,
        ease: 'easeOut',
      }}
    >
      <div className='containerSecondary'>
        <SectionTitle>
          About Me
          <Icon
            icon='mdi:about-variant'
            className='bg-white p-0.5 rounded-full text-primary'
          />
        </SectionTitle>
        <div
          className='text-white text-lg'
          dangerouslySetInnerHTML={{
            __html: content?.about,
          }}
        />
      </div>
    </motion.section>
  );
};

export default About;
