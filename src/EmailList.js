import React, { useEffect, useState } from 'react';
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
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { query, orderBy, limit } from 'firebase/firestore';

// const getData = async (docRef) => {
//   const docSnap = await getDoc(docRef);
//   return docSnap;
// };

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const getAllMails = async () => {
      const arrdata = [];
      const q = query(collection(db, 'emails'), orderBy('timestamp', 'desc'));
      const querySnapShot = await getDocs(q);
      console.log(querySnapShot);
      querySnapShot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        arrdata.push({ data: doc.data(), id: doc.id });
      });
      console.log(arrdata);
      setEmails(arrdata);
    };

    getAllMails();
  }, []);

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
        {emails.map(({ data, id }) => {
          const userName = data.to.substr(0, data.to.indexOf('@'));
          return (
            <EmailRow
              key={id}
              sender={userName}
              subject={data.subject}
              description={data.message}
              time={new Date(data.timestamp.seconds * 1000).toUTCString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
