// src/pages/CometPage.tsx
import React from 'react';
import USWDSHeader from '../components/USWDSHeader';
import USWDSFooter from '../components/USWDSFooter';

const CometPage: React.FC = () => {
  return (
    <>
      <USWDSHeader />
      <main className='usa-section bg-base-lightest padding-y-6'>
        <div className='grid-container'>
          <h1 className='usa-heading margin-bottom-4'>Welcome to COMET</h1>
          <p className='usa-prose'>
            This is the COMET page styled with the U.S. Web Design System. Use
            this area for program information, instructions, or other public
            content. It uses the `usa-section`, `grid-container`, and
            `usa-prose` classes for spacing and readability.
          </p>

          <div className='margin-top-5 padding-4 bg-white border border-base-lighter radius-lg shadow'>
            <h2 className='usa-heading'>Important Notice</h2>
            <p>
              COMET is a program supporting innovation in collaboration with
              multiple agencies. Please check back often for updates or contact
              the program team with any questions.
            </p>
          </div>
        </div>
      </main>
      <USWDSFooter />
    </>
  );
};

export default CometPage;
