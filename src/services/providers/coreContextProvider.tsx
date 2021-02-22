import React, { useReducer } from 'react';
import { CoreContext, reducer, initialState } from 'services/context/coreContext.js';
import { Props } from 'interfaces/commons';

export default function CoreContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CoreContext.Provider value={{ state, dispatch }}>{children}</CoreContext.Provider>;
}
