'use client';

import { Icon } from '@iconify/react';
import { useContent } from '@/contexts/ContentContext';
import GetResume from './GetResume';

const Footer = () => {
  const { content } = useContent();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='mt-20 md:mt-40 flex md:flex-row flex-col flex-wrap justify-between items-center gap-8 mb-20 md:mb-15 text-white containerSecondary'>
        <div>
          <a className='textLogo' href='/'>
            andreipintilie
          </a>
          <p className='text-xs tracking-wider'>- {year} Andrei Pintilie</p>
        </div>

        <nav>
          <ul className='flex flex-col items-center gap-1'>
            {content.footerLinks.map((item) => (
              <li key={item.id} className='w-full'>
                <a
                  href={item.href}
                  className='group flex items-center gap-2 font-normal hover:text-tertiary text-base tracking-wider transition-colors duration-300'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.name}
                  <Icon
                    icon='mynaui:arrow-up-right'
                    className='text-2xl group-hover:rotate-90 transition-transform duration-300'
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <GetResume hideOnMobile={false} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
