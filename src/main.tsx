import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@uswds/uswds.css'; // Vite will resolve this via the alias
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
