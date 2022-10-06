import React from 'react';
import './EmailRow.css';
import { CheckBox } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

const EmailRow = ({ id, emailId, sender, subject, description, time }) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const openMailHandler = () => {
    dispatch(selectMail({ id, emailId, sender, subject, description, time }));
    history('/mail');
  };

  return (
    <div className="emailRow">
      <div className="emailRow-options">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
      </div>
      <div className="emailRow-data" onClick={openMailHandler}>
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
