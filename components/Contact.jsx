'use client';

import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const formRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = async (event) => {
      event.preventDefault();
      const status = statusRef.current;
      const data = new FormData(event.target);

      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          status.innerHTML = 'Thanks for your submission!';
          form.reset();
        } else {
          const responseData = await response.json();
          if (Object.hasOwn(responseData, 'errors')) {
            status.innerHTML = responseData['errors']
              .map((error) => error['message'])
              .join(', ');
          } else {
            status.innerHTML = 'Oops! There was a problem submitting your form';
          }
        }
      } catch (error) {
        status.innerHTML = 'Oops! There was a problem submitting your form';
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <section className='section containerSecondary' id='contact'>
      <SectionTitle>
        Contact
        <Icon
          icon='material-symbols:mail'
          className='bg-white p-1 rounded-full text-primary'
        />
      </SectionTitle>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        <div className='place-items-center grid'>
          <div className='justify-self-start bg-white mb-4 p-0 pl-0.5 rounded-none'>
            <div
              ref={statusRef}
              data-form-status
              className='bg-primary pl-2 text-sm'
            ></div>
          </div>

          <form
            ref={formRef}
            className='flex flex-col items-center gap-8 w-full'
            action='https://formspree.io/f/mqapazpk'
            method='POST'
            target='_top'
          >
            <div className='bgGradient focus-within:bgGradient-to-r pb-0.5 w-full'>
              <input
                type='text'
                name='name'
                className='bg-primary p-4 focus:outline-none w-full font-light text-base tracking-widest'
                placeholder='Name'
                required
              />
            </div>

            <div className='bgGradient focus-within:bgGradient-to-r pb-0.5 w-full'>
              <input
                type='email'
                name='email'
                className='bg-primary p-4 focus:outline-none w-full font-light text-base tracking-widest'
                placeholder='Email'
                required
              />
            </div>

            <div className='bgGradient focus-within:bgGradient-to-r pb-0.5 w-full'>
              <input
                type='text'
                name='subject'
                className='bg-primary p-4 focus:outline-none w-full font-light text-base tracking-widest'
                placeholder='Subject'
                required
              />
            </div>

            <div className='bgGradient focus-within:bgGradient-to-r mb-3 md:mb-4 pb-0.5 w-full'>
              <textarea
                name='message'
                className='box-border bg-primary p-4 focus:outline-none w-full font-light text-base tracking-widest resize-none'
                placeholder='Message'
                rows='5'
                required
              ></textarea>
            </div>

            <button type='submit' className='button iconButton'>
              Send
              <Icon icon='mdi:send' className='ml-2' />
            </button>
          </form>
        </div>

        <div
          className='place-items-center order-[-1] md:order-0 grid min-h-80'
          data-background
        >
          <h3 className='font-semibold text-2xl md:text-3xl lg:text-4xl md:text-left text-center tracking-wide'>
            Let's{' '}
            <span className='textGradient'>
              <br /> get in touch
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
