import React from 'react';
import { CoreContext } from 'services/context/coreContext.js';
import { Props } from 'interfaces/commons';
import LoginService from 'services/login_service';

export default function CoreContextProvider({ children }: Props) {
  const login = LoginService().getInstance();
  return <CoreContext.Provider value={{ login: login }}>{children}</CoreContext.Provider>;
}
