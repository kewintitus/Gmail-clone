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
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const data = [
  { id: '0', Icon: 'InboxIcon', title: 'Inbox', number: 10, selected: true },
  {
    id: '1',
    Icon: StarOutlineIcon,
    title: 'Starred',
    number: '',
    selected: false,
  },
  {
    id: '2',
    Icon: AccessTimeIcon,
    title: 'Snoozed',
    number: '',
    selected: false,
  },
  { id: '3', Icon: SendIcon, title: 'Sent', number: '', selected: false },
  {
    id: '4',
    Icon: InsertDriveFileOutlinedIcon,
    title: 'Drafts',
    number: '',
    selected: false,
  },
  {
    id: '5',
    Icon: KeyboardArrowDownOutlinedIcon,
    title: 'More',
    number: '',
    selected: false,
  },
];

const Sidebar = () => {
  const [sideBarData, setSideBarData] = useState(data);
  const dispatch = useDispatch();

  const sideBarOptionsComponent = (id) => {
    setSideBarData(
      sideBarData.map((data) => {
        if (data.id == id) {
          console.log(id, data.id);
          data.selected = true;
        } else {
          console.log(id, data.id);

          data.selected = false;
        }
        return data;
      })
    );
  };

  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large" />}
        className="sidebar-compose"
        onClick={() => {
          dispatch(openSendMessage());
          console.log('action');
        }}
      >
        Compose
      </Button>
      <div className="sidebar-options">
        {sideBarData.map((props) => {
          return (
            <SidebarOptions
              id={props.id}
              Icon={props.Icon}
              title={props.title}
              number={props.number}
              selected={props.selected}
              selectHandler={sideBarOptionsComponent}
            />
          );
        })}
      </div>
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

///////////
// List data = <div><SidebarOptions
// id="0"
// Icon={InboxIcon}
// title="Inbox"
// number={54}
// selected={true}
// ></SidebarOptions>,
// <SidebarOptions
// id="1"
// Icon={StarOutlineIcon}
// title="Starred"
// number={''}
// selected={false}
// ></SidebarOptions>,
// <SidebarOptions
// id="2"
// Icon={AccessTimeIcon}
// title="Snoozed"
// number={''}
// selected={false}
// ></SidebarOptions>,
// <SidebarOptions
// id="3"
// Icon={SendIcon}
// title="Sent"
// number={''}
// selected={false}
// ></SidebarOptions>,
// <SidebarOptions
// id="4"
// Icon={InsertDriveFileOutlinedIcon}
// title="Drafts"
// number={''}
// selected={false}
// ></SidebarOptions>,
// <SidebarOptions
// id="5"
// Icon={KeyboardArrowDownOutlinedIcon}
// title="More"
// number={''}
// selected={false}
// ></SidebarOptions>,</div>
