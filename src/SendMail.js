import React from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './SendMail.css';
import { Button } from '@mui/material';

const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <CloseIcon />
      </div>
      <form>
        <input placeholder="To" type="text" />
        <input placeholder="Subject" type="text" />
        <input type="text" />
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
