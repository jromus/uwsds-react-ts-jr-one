import React, { useState } from 'react';

const USWDSHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

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
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls='primary-navigation'
              type='button'
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`usa-nav ${menuOpen ? 'is-visible' : ''}`}
          id='primary-navigation'
        >
          <button
            className='usa-nav__close'
            aria-label='Close menu'
            onClick={toggleMenu}
          >
            <svg
              className='usa-icon'
              aria-hidden='true'
              focusable='false'
              role='img'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path
                d='M18 6L6 18M6 6l12 12'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>

          <div className='usa-nav__inner'>
            <ul className='usa-nav__primary usa-accordion padding-0 margin-0 list-none'>
              <li className='usa-nav__primary-item'>
                <a
                  href='/'
                  className='usa-nav__link usa-current'
                  aria-current='page'
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a
                  href='/about'
                  className='usa-nav__link'
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a
                  href='/contact'
                  className='usa-nav__link'
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a
                  href='/my-account'
                  className='usa-nav__link'
                  onClick={() => setMenuOpen(false)}
                >
                  My Account
                </a>
              </li>
              <li className='usa-nav__primary-item'>
                <a
                  href='/login'
                  className='usa-nav__link'
                  onClick={() => setMenuOpen(false)}
                >
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
