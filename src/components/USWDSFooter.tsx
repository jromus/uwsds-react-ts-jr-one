// src/components/USWDSFooter.tsx
import React from 'react';

const USWDSFooter: React.FC = () => {
  return (
    <footer className='usa-footer usa-footer--slim'>
      <div className='grid-container usa-footer__return-to-top'>
        <a href='#'>Return to top</a>
      </div>
      <div className='usa-footer__primary-section'>
        <div className='grid-row'>
          <div className='grid-col-auto'>
            <h4 className='usa-footer__primary-link'>Contact Us</h4>
            <ul className='usa-list'>
              <li>
                <a href='mailto:comet@agency.gov'>comet@agency.gov</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default USWDSFooter;
