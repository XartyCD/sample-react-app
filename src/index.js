import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Двойной рендеринг из-за StrictMode ниже
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
