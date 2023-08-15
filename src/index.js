import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Get a reference to the root div
const root = document.getElementById('root');

// Create a root using the new createRoot method
const reactRoot = ReactDOM.createRoot(root);

// Render the App component
reactRoot.render(<App />);