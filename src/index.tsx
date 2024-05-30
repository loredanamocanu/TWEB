import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importă BrowserRouter
import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter> {/* Încadrează App în BrowserRouter */}
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
