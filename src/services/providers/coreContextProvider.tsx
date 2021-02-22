import React, { useReducer } from 'react';
import { CoreContext, reducer, initialState } from 'services/context/coreContext.js';
import { Props } from 'interfaces/commons';
import useSearch from 'hooks/useSearch';

export default function CoreContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const searchText = useSearch();
  return <CoreContext.Provider value={{ state, dispatch, searchText }}>{children}</CoreContext.Provider>;
}
