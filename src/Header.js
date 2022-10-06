import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import GmailLogo from './images/GmailLogo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={GmailLogo} alt="Logo"></img>
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input />
        <TuneIcon />
      </div>
      <div className="header-right">
        <IconButton>
          <HelpOutlineIcon className="options-icon" />
        </IconButton>

        <IconButton>
          <SettingsIcon className="options-icon" />
        </IconButton>
        <IconButton>
          <AppsIcon className="options-icon" />
        </IconButton>
        <IconButton>
          <Avatar src={user?.photoUrl} />
        </IconButton>
        {/* <AccountCircleIcon className="options-icon" /> */}
      </div>
    </div>
  );
};

export default Header;
