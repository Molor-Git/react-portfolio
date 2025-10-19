import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
=======
import { createRoot } from 'react-dom/client';
>>>>>>> 746ed310d015ed966efd93e63c50c046623bc0c8
import App from './App';
import './index.css'; // optional — remove if you don't have this file

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<<<<<<< HEAD
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 746ed310d015ed966efd93e63c50c046623bc0c8
);