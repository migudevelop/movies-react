import React, { useContext, useEffect } from 'react';
import { CommonContext } from 'services/context/commonContext';

function Message() {
  const { message } = useContext(CommonContext);

  return (
    <div className={`message-wrapper ${message.type.class}`}>
      <div>{message.type.icon}</div>
      <div>
        <span>{message.message}</span>
      </div>
    </div>
  );
}

export default Message;
