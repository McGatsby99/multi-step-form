import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom'
//local fonts
import './assets/fonts/Ubuntu-Bold.ttf'
import './assets/fonts/Ubuntu-Medium.ttf'
import './assets/fonts/Ubuntu-Regular.ttf'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


