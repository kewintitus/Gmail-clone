import { Routes, Route, BrowserRouter } from 'react-router-dom';

import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';

// const router = createBrowserRouter(createRoutesFromElements);

function App() {
  return (
    <div className="app-body">
      <Header />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/mail" element={<Mail></Mail>}></Route>
          <Route path="/" element={<EmailList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
