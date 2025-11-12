import { Icon } from '@iconify/react';

export default function GetResume({ hideOnMobile = false }) {
  return (
    <a
      href='/CV.pdf'
      target='_blank'
      className={`btnPrimary btnIcon hover:btnPrimaryHover ${
        hideOnMobile ? 'hidden lg:flex' : 'flex'
      } iconButton`}
    >
      Get CV <Icon icon='mynaui:arrow-up-right' className='text-xl' />
    </a>
  );
}
