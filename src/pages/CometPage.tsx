// src/pages/CometPage.tsx
import React from 'react';
import USWDSHeader from '../components/USWDSHeader';
import USWDSFooter from '../components/USWDSFooter';

const CometPage: React.FC = () => {
  return (
    <>
      <USWDSHeader />
      <main className='usa-section'>
        <div className='grid-container'>
          <h1 className='usa-heading'>Welcome to COMET</h1>
          <p>This is your COMET page built using USWDS and React.</p>
        </div>
      </main>
      <USWDSFooter />
    </>
  );
};

export default CometPage;
