// src/components/USWDSHeader.tsx
import React from 'react';

const USWDSHeader: React.FC = () => {
  return (
    <header className='usa-header usa-header--basic'>
      <div className='usa-nav-container'>
        <div className='usa-navbar'>
          <div className='usa-logo' id='basic-logo'>
            <em className='usa-logo__text'>
              <a href='/' title='Home' aria-label='Home'>
                COMET Program
              </a>
            </em>
          </div>
        </div>
      </div>
    </header>
  );
};

export default USWDSHeader;
