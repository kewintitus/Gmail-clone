import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import GmailLogo from '../src/images/GmailLogo.jpg';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch;
  const signInHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <img src={GmailLogo} />
        <Button onClick={signInHandler}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
