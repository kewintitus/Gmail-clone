import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import GmailLogo from './images/GmailLogo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
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
        <HelpOutlineIcon className="options-icon" />
        <SettingsIcon className="options-icon" />
        <AppsIcon className="options-icon" />
        <AccountCircleIcon className="options-icon" />
      </div>
    </div>
  );
};

export default Header;
