import React from 'react';
import { Props } from 'interfaces/commons';
import { CommonContext } from 'services/context/commonContext.js';
import useLoading from 'hooks/useLoading';
import useMessage from 'hooks/useMessage';

export default function CommonContextProvider({ children }: Props) {
  const loader = useLoading();
  const message = useMessage();
  return <CommonContext.Provider value={{ ...loader, ...message }}>{children}</CommonContext.Provider>;
}
