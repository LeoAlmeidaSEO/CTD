import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Descricao, OlaMundo } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <OlaMundo />
    <Descricao />
  </div>
);


