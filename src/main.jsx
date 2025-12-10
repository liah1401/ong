import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'antd/dist/reset.css'; // Styles Ant Design (très bien ✅)
import './index.css'; // Ton fichier de styles globaux (très bien ✅)
// Dans votre fichier main.jsx/App.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
