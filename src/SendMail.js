import React from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './SendMail.css';
import { Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };
  const dispatch = useDispatch();
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
          type="text"
          {...register('to', { required: true })}
        />
        {errors.to && <p className="sendMailError">Invalid</p>}

        <input
          placeholder="Subject"
          type="text"
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className="sendMailError">Invalid</p>}
        <input
          className="sendMail-message"
          type="text"
          {...register('message')}
        />

        <div>
          <Button className="sendMail-send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
