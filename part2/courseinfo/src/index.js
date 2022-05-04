import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// react 17
// ReactDOM.render(<App />, document.getElementById('root'));

// react 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
