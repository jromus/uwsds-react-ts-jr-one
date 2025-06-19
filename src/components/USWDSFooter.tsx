// src/components/USWDSFooter.tsx
import React from 'react';

const USWDSFooter: React.FC = () => {
  return (
    <footer className='usa-footer usa-footer--big bg-base-lightest border-top border-base-lighter padding-y-4'>
      <div className='grid-container'>
        {/* Logo + title + social */}
        <div className='display-flex flex-align-center flex-justify flex-wrap flex-gap-4 margin-bottom-4'>
          <div className='flex-align-center flex-gap-2'>
            <img
              src='/path/to/logo.png'
              alt='Agency Logo'
              className='height-5 width-auto'
            />
            <span className='text-bold text-xl'>COMET Program</span>
          </div>
          <ul
            className='usa-list--unstyled display-flex flex-row flex-gap-3 margin-0 padding-0'
            role='list'
          >
            {/* Facebook */}
            <li>
              <a
                href='https://www.facebook.com'
                aria-label='Facebook'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='usa-icon'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z' />
                </svg>
              </a>
            </li>
            {/* X (Twitter) */}
            <li>
              <a
                href='https://www.x.com'
                aria-label='X (Twitter)'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='usa-icon'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M17.11 2h2.57L14.07 8.26 21 22h-5.42l-4.24-6.41L6.46 22H3.89l5.91-7.93L3 2h5.42l3.75 5.64L17.11 2zm-.91 17.53L7.62 4.47h.89l8.58 13.06h-.89z' />
                </svg>
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a
                href='https://www.instagram.com'
                aria-label='Instagram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='usa-icon'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z' />
                </svg>
              </a>
            </li>
            {/* YouTube */}
            <li>
              <a
                href='https://www.youtube.com'
                aria-label='YouTube'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='usa-icon'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M19.615 3.184C18.846 2.924 14.777 2 12 2S5.154 2.924 4.385 3.184C3.593 3.457 2.832 4.02 2.497 5.34 2.167 6.678 2 9.115 2 12c0 2.884.167 5.321.497 6.66.335 1.32 1.096 1.884 1.888 2.157.769.26 4.838 1.183 7.615 1.183s6.846-.923 7.615-1.183c.792-.273 1.553-.836 1.888-2.157.33-1.338.497-3.775.497-6.66 0-2.885-.167-5.322-.497-6.66-.335-1.32-1.096-1.884-1.888-2.157zM10 15.5v-7l6 3.5-6 3.5z' />
                </svg>
              </a>
            </li>
            {/* RSS */}
            <li>
              <a
                href='/rss'
                aria-label='RSS Feed'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='usa-icon'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M4 4c8.837 0 16 7.163 16 16h-2c0-7.732-6.268-14-14-14V4zm0 4c6.627 0 12 5.373 12 12h-2c0-5.523-4.477-10-10-10V8zm1.5 7c.828 0 1.5.672 1.5 1.5S6.328 18 5.5 18 4 17.328 4 16.5 4.672 15 5.5 15z' />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Primary links as responsive 1-row grid */}
        <nav aria-label='Primary footer links' className='margin-bottom-4'>
          <ul className='usa-list usa-list--unstyled grid-row grid-gap-6'>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/'>Home</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/about'>About</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/contact'>Contact</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/services'>Services</a>
            </li>
          </ul>
        </nav>

        {/* Secondary links as responsive 2-row 4-col grid */}
        <nav aria-label='Secondary footer links' className='margin-bottom-3'>
          <ul className='usa-list usa-list--unstyled grid-row grid-gap-4'>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/my-account'>My Account</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/settings'>Settings</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/support'>Support</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/faq'>FAQ</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/privacy'>Privacy Policy</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/terms'>Terms of Service</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/accessibility'>Accessibility</a>
            </li>
            <li className='grid-col-12 tablet:grid-col-6 desktop:grid-col-3'>
              <a href='/contact-support'>Contact Support</a>
            </li>
          </ul>
        </nav>

        {/* Attribution */}
        <div className='font-sans-xs text-base-dark'>
          &copy; {new Date().getFullYear()} COMET Program &middot; An official
          U.S. Government Service
        </div>
      </div>
    </footer>
  );
};
export default USWDSFooter;
