import React from 'react';
import { CoreContext } from 'services/context/coreContext.js';

export default function CoreContextProvider({ children }) {
  return <CoreContext.Provider value={{}}>{children}</CoreContext.Provider>;
}
