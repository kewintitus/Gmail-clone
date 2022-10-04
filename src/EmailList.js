import React from 'react';
import './EmailList.css';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { IconButton } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import EmailRow from './EmailRow';

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <div className="emailList-checkBox">
            <IconButton>
              <CheckBox />
            </IconButton>
            <IconButton>
              <ArrowDropDownOutlinedIcon />
            </IconButton>
          </div>
          <IconButton>
            <RefreshOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="emailList-settingsRight">
          <IconButton>
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList-sections">
        <EmailRow
          sender="Google"
          subject="Account Security"
          description="Please use this otp-0912 valid for the next 30 secs   oinosnvshvbsbhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
          time={`${new Date().getDay()}/${new Date().getMonth()}`}
        />
        <EmailRow
          sender="Google"
          subject="Account Security"
          description="Please use this otp-0912 valid for the next 30 secs   oinosnvshvbsbhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
          time={`${new Date().getDay()}/${new Date().getMonth()}`}
        />
      </div>
    </div>
  );
};

export default EmailList;
