import React from 'react';
import { Props } from 'interfaces/commons';
import { BackdropContext } from 'services/context/backdropContext.js';
import useLoading from 'hooks/useLoading';

export default function BackdropContextProvider({ children }: Props) {
  const loader = useLoading();
  return <BackdropContext.Provider value={loader}>{children}</BackdropContext.Provider>;
}
