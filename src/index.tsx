import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TodoProvider } from '../src/store';
import App from './App';
import './sass/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
