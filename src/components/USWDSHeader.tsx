// src/components/USWDSHeader.tsx
import React from 'react';

const USWDSHeader: React.FC = () => {
  return (
    <>
      {/* USA Banner */}
      <section
        className='usa-banner'
        aria-label='Official government website banner'
      >
        <div className='usa-accordion'>
          <header className='usa-banner__header'>
            <div className='usa-banner__inner grid-container'>
              <div className='grid-col-auto'>
                <img
                  className='usa-banner__header-flag'
                  src='https://designsystem.digital.gov/assets/img/us_flag_small.png'
                  alt='U.S. flag'
                />
              </div>
              <div className='usa-banner__header-text'>
                An official website of the United States government
              </div>
              <button
                className='usa-accordion__button usa-banner__button'
                aria-expanded='false'
                aria-controls='gov-banner-content'
              >
                Here’s how you know
              </button>
            </div>
          </header>
          <div
            className='usa-banner__content usa-accordion__content'
            id='gov-banner-content'
            hidden
          >
            {/* official guidance */}
          </div>
        </div>
      </section>

      {/* Header */}
      <header className='usa-header usa-header--basic border-bottom border-base-lighter bg-white'>
        <div className='usa-navbar padding-x-2 padding-y-1'>
          <div className='flex flex-align-center flex-justify-between width-full'>
            {/* Logo + Program Title */}
            <a
              href='/'
              className='flex flex-align-center text-no-underline text-black flex-gap-1'
            >
              <img
                src='/your-logo.svg'
                alt='COMET logo'
                className='height-4 width-4'
              />
              <span className='font-sans-xl'>COMET</span>
            </a>

            {/* Mobile menu button */}
            <button
              className='usa-menu-btn'
              aria-label='Open menu'
              type='button'
            >
              Menu
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className='usa-nav'>
          <button className='usa-nav__close' aria-label='Close menu'>
            <svg
              className='usa-icon'
              aria-hidden='true'
              focusable='false'
              role='img'
            >
              <use href='/assets/img/sprite.svg#close' />
            </svg>
          </button>

          <div className='usa-nav__inner'>
            <ul className='usa-nav__primary usa-accordion'>
              <li className='usa-nav__primary-item'>
                <a
                  href='/'
                  className='usa-nav__link usa-current'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a href='/about' className='usa-nav__link'>
                  About
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a href='/contact' className='usa-nav__link'>
                  Contact
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a href='/my-account' className='usa-nav__link'>
                  My Account
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a href='/login' className='usa-nav__link'>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default USWDSHeader;
