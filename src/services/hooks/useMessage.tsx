import React, { useState } from 'react';
import { Error, Warning, Info, CheckCircle } from '@material-ui/icons';

interface IEMessage {
  type: {
    class: string;
    icon: React.ReactNode;
  };
  message: string;
}

const DEFAULT_MESSAGE = { type: { class: '', icon: <></> }, message: '' };
const DEFAULT_ERROR_MESSAGE = 'Request failed, try again or contact the administrator.';

const useMessage = () => {
  const [showMessageElement, setShowMessageElement] = useState<boolean>(false);
  const [message, setMessage] = useState<IEMessage>(DEFAULT_MESSAGE);

  const getConfiguration = (type: string) => {
    switch (type.toLowerCase()) {
      case 'info':
        return { class: 'info', icon: <Info /> };
      case 'alert':
        return { class: 'alert', icon: <Error /> };
      case 'warning':
        return { class: 'warning', icon: <Warning /> };
      case 'success':
        return { class: 'success', icon: <CheckCircle /> };
      default:
        return { class: 'alert', icon: <Error /> };
    }
  };

  const showMessage = React.useCallback((typeValue: string, messageValue: string): void => {
    setMessage({ type: { ...getConfiguration(typeValue) }, message: messageValue || DEFAULT_ERROR_MESSAGE });
    setShowMessageElement(true);
    setTimeout(() => {
      hideMessage();
    }, 5000);
  }, []);

  const hideMessage = React.useCallback((): void => {
    setMessage(DEFAULT_MESSAGE);
    setShowMessageElement(false);
  }, []);

  return {
    showMessageElement,
    message,
    showMessage,
    hideMessage,
  };
};

export default useMessage;
