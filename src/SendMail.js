import React from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './SendMail.css';
import { Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { Timestamp } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

const addData = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'emails'), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: Timestamp.now(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    addData(formData);
    // db.collection('emails').add({
    //   to: formData.to,
    //   subject: formData.subject,
    //   message: formData.message,
    //   timestamp: Timestamp.now(),
    // });
    // addDoc(emailRef, {
    //   to: formData.to,
    //   subject: formData.subject,
    //   message: formData.message,
    //   timestamp: Timestamp.now(),
    // });
    dispatch(closeSendMessage());
  };
  const closeSendMessageHandler = () => {
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <IconButton>
          <CloseIcon onClick={closeSendMessageHandler} />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register('to', { required: true })}
        />
        {errors.to && <p className="sendMailError">Invalid</p>}

        <input
          placeholder="Subject"
          type="text"
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className="sendMailError">Invalid</p>}
        <textarea
          className="sendMail-message"
          type="text"
          {...register('message')}
        />

        <div className="sendMailActions">
          <Button className="sendMail-send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
