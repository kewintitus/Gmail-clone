import { Routes, Route, BrowserRouter } from 'react-router-dom';

import React, { Fragment, useEffect } from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

// const router = createBrowserRouter(createRoutesFromElements);

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(sendMessageIsOpen);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <Fragment>
      {!user ? (
        <Login />
      ) : (
        <div>
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
        </div>
      )}
    </Fragment>
  );
}

export default App;
