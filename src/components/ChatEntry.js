import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  return (
   <div className='chat-entry'>
     <p className='entry-name'>{props.sender}</p>

     <div className='chat-entry entry-bubble'>
      <p>{props.body}</p>
      <p className='chat-entry entry-time'><Timestamp time={props.timestamp}/></p>
     </div>
   </div>
  );
};

export default ChatEntry;