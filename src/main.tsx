import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.jsx';
import {} from 'styled-components/cssprop';
import '@splidejs/react-splide/css';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitProfile config={CONFIG} />
  </React.StrictMode>,
);
