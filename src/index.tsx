// index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialUsers = [
    { username: 'utilizator1', password: 'parola1' },
    { username: 'utilizator2', password: 'parola2' },
    // Alte date de utilizator...
];

localStorage.setItem('users', JSON.stringify(initialUsers));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
