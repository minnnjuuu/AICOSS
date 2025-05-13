import React from 'react';
import ReactDOM from 'react-dom/client';  // react-dom/client에서 createRoot를 가져옵니다.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React 18에서의 render 방식
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
