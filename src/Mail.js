import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import UserImg from '../src/images/userIcon.png';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fontSize } from '@mui/system';
const Mail = () => {
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate('/');
  };

  const mailIconToolsStyle = {
    color: '#202124',
    fontSize: '20px',
  };

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={backButtonHandler}>
            <ArrowBackIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <DeleteOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <MarkunreadOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <AddTaskOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
        </div>
        <div className="mail-toolsRight">
          <IconButton>
            <ChevronLeftOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon style={mailIconToolsStyle} />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mailSubject">
          <div className="mail-bodySubject">
            <h2>Subject</h2>

            <div className="mail-bodySubject--label">
              <div>Inbox</div>
              <CloseOutlinedIcon style={{ fontSize: '12px' }} />
            </div>
          </div>
          <div className="mail-bodySubject--actions">
            <IconButton>
              <PrintOutlinedIcon />
            </IconButton>
            <IconButton>
              <OpenInNewOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail-bodyUser">
          <div className="mail-bodyUser--details">
            <div className="userDetails">
              <div className="userImg">
                <img src={UserImg}></img>
              </div>
              <div>
                <div className="userDetailsInfo">
                  <h4>UserName</h4>
                  <p>{'<emailId>'}</p>
                </div>
                <div className="userDetailsActions">
                  <p>To me</p>
                  <ArrowDropDownOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="mail-bodyUser--actions">
            <span>today</span>
            <IconButton>
              <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ReplyOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail-bodyContent"></div>
      </div>
    </div>
  );
};

export default Mail;
