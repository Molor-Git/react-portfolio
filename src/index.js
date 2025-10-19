import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // optional — remove if you don't have this file

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);