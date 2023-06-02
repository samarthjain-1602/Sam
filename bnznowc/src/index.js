import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
require('react-web-vector-icons/fonts');

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
