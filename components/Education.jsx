'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/contexts/ContentContext';
import SectionTitle from './SectionTitle';
import { Icon } from '@iconify/react';

const Education = ({ transitionDelay }) => {
  const { content } = useContent();

  return (
    <motion.section
      className='section containerSecondary'
      id='education'
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: transitionDelay ? parseFloat(transitionDelay) : 0,
        ease: 'easeOut',
      }}
    >
      <SectionTitle>
        Education
        <Icon
          icon='mdi:briefcase'
          className='bg-white p-1 rounded-full text-primary'
        />
      </SectionTitle>
      <div className='flex'>
        <div className='opacity-35 ml-4 border-white border-l'></div>
        <ul className='flex flex-col gap-12'>
          {content.education.map((item, index) => (
            <li
              className='before:-top-1.5 before:left-0 before:absolute relative before:place-items-center before:grid before:bg-primary pl-10 md:pl-15 before:border-2 before:border-white before:rounded-full before:outline-primary before:outline-16 before:w-10 before:h-10 before:font-light before:text-white before:text-base before:content-[attr(data-index)] before:-translate-x-1/2'
              data-index={index + 1}
              key={item.id}
            >
              <h3 className='relative mb-2 md:mb-4 max-w-80 font-semibold textGradient text-xl tracking-wide'>
                {item.school}
              </h3>
              <p className='font-semibold text-lg'>{item.field}</p>
              <p className='text-sm'>{item.degree}</p>
              <p className='text-sm'>{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Education;
