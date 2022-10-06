import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './EmailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
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
import { useDispatch } from 'react-redux';
import { setMailCount } from './features/mailSlice';

// const getData = async (docRef) => {
//   const docSnap = await getDoc(docRef);
//   return docSnap;
// };

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [emailsCheck, setEmailsCheck] = useState(false);
  const dispatch = useDispatch();

  const toggleEmailsCheck = () => {
    setEmailsCheck(!emailsCheck);
  };

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

    return arrdata;
  };

  useEffect(() => {
    getAllMails().then((data) => {
      setEmails(data);
      dispatch(setMailCount(data.length));
      console.log(data.length);
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <div className="emailList-checkBox">
            <IconButton onClick={toggleEmailsCheck}>
              {!emailsCheck ? <CheckBoxOutlineBlankIcon /> : <CheckBox />}
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
              id={id}
              emailId={data.to}
              sender={userName}
              subject={data.subject}
              description={data.message}
              time={new Date(data.timestamp.seconds * 1000).toUTCString()}
              check={emailsCheck}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
