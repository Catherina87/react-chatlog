import React from 'react';
import './ChatLog.css'
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chatEntryComponents = props.messages.map((message, i) => {
    return (
      <ChatEntry 
      sender={message.sender}
      body={message.body}
      timestamp={message.timeStamp}
      />
    )
  })

  return (
    <div className="chat-log">
      {chatEntryComponents}
    </div>
  );

}

export default ChatLog;