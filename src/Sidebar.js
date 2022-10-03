import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import './Sidebar.css';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SidebarOptions from './SidebarOptions';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendIcon from '@mui/icons-material/Send';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large" />}
        className="sidebar-compose"
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      ></SidebarOptions>
      <SidebarOptions
        Icon={StarOutlineIcon}
        title="Starred"
        number={10}
      ></SidebarOptions>
      <SidebarOptions
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={10}
      ></SidebarOptions>
      <SidebarOptions
        Icon={SendIcon}
        title="Snoozed"
        number={10}
      ></SidebarOptions>
      <SidebarOptions
        Icon={InsertDriveFileOutlinedIcon}
        title="Drafts"
        number={10}
      ></SidebarOptions>
      <SidebarOptions
        Icon={KeyboardArrowDownOutlinedIcon}
        title="More"
        number={10}
      ></SidebarOptions>

      <div className="sidebar-label">
        <h3>Label</h3>
        <Button>
          <AddOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};
export default Sidebar;
