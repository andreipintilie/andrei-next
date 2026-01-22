'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useContent } from '@/contexts/ContentContext';
import Chip from './Chip';

const Technologies = ({ transitionDelay }) => {
  const { content } = useContent();

  return (
    <motion.section
      className='section'
      id='technologies'
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
        <ul className='flex flex-wrap gap-5 gap-y-3'>
          {content.technologies.map((technology, index) => (
            <li key={index}>
              <Chip>
                <Icon icon={technology.icon} color='white' />
                {technology.name}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Technologies;
