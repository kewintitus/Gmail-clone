import React from 'react';
import './EmailRow.css';
import { CheckBox } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmailRow = ({ id, sender, subject, description, time }) => {
  const history = useNavigate();

  const openMailHandler = () => {
    history('/mail');
  };

  return (
    <div className="emailRow" onClick={openMailHandler}>
      <div className="emailRow-options">
        <IconButton>
          <CheckBox />
        </IconButton>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
      </div>
      <div className="emailRow-data">
        <div className="emailRow-senderName">{sender}</div>
        <div className="emailRow-description">
          <span className="emailRow-subject">{subject + ' - '}</span>
          <span className="emailRow-msgDescription">
            <p>{description}</p>
          </span>
        </div>
        <div className="emailRow-time">{time}</div>
      </div>
    </div>
  );
};

export default EmailRow;