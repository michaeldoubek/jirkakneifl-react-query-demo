import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import List from './pages/List';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
