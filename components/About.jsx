'use client';

import { useContent } from '@/contexts/ContentContext';
import SectionTitle from './SectionTitle';
import { Icon } from '@iconify/react';


const About = ({ transitionDelay }) => {
  const { content } = useContent();

  return (
    <section className='mt-10 md:mt-20 section sectionAnimated' id='about' style={transitionDelay ? { transitionDelay } : undefined}>
      <div className='mx-auto containerSecondary'>
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
    </section>
  );
};

export default About;
