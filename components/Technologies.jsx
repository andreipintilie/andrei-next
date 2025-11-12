'use client';

import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useContent } from '@/contexts/ContentContext';
import Chip from './Chip';
import LoadingSpinner from './LoadingSpinner';
import { initSectionAnimations } from '@/utils/sectionObserver';

const Technologies = () => {
  const { content, loading } = useContent();

  useEffect(() => {
    const observer = initSectionAnimations();

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  if (loading || !content?.technologies) {
    return <LoadingSpinner text='Loading technologies...' />;
  }

  return (
    <section className='mt-6 md:mt-10 text-white' id='technologies'>
      <div className='mx-auto containerSecondary'>
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
    </section>
  );
};

export default Technologies;
