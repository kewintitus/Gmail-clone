import { Routes, Route, BrowserRouter } from 'react-router-dom';

import React, { Fragment } from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

// const router = createBrowserRouter(createRoutesFromElements);

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  console.log(sendMessageIsOpen);
  return (
    <Fragment>
      <Header />
      <div className="app-body">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/mail" element={<Mail></Mail>}></Route>
            <Route path="/" element={<EmailList />}></Route>
          </Routes>
        </BrowserRouter>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Fragment>
  );
}

export default App;
