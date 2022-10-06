import React, { useState } from 'react';
import './EmailRow.css';
import { CheckBox } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

import StarIcon from '@mui/icons-material/Star';

import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

const EmailRow = ({ id, emailId, sender, subject, description, time }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [isStarred, setIsStarred] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleStarHandler = () => {
    setIsStarred(!isStarred);
  };

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const openMailHandler = () => {
    dispatch(selectMail({ id, emailId, sender, subject, description, time }));
    history('/mail');
  };

  return (
    <div className="emailRow">
      <div className="emailRow-options">
        <IconButton>
          {!isChecked ? (
            <CheckBoxOutlineBlankIcon onClick={toggleCheckBox} />
          ) : (
            <CheckBox onClick={toggleCheckBox} />
          )}
        </IconButton>
        <IconButton>
          {!isStarred ? (
            <StarBorderIcon onClick={toggleStarHandler} />
          ) : (
            <StarIcon
              style={{ color: '#ffe234' }}
              onClick={toggleStarHandler}
            />
          )}
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
        <div className="emailRow-actions">
          <IconButton>
            <ArchiveOutlinedIcon style={{ fontSize: '21px' }} />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <MarkunreadOutlinedIcon />
          </IconButton>
          <IconButton>
            <ScheduleOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default EmailRow;
