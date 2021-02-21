import React, { createContext } from 'react';

export const BackdropContext = createContext({ loading: false, showLoader: () => {}, hideLoader: () => {} });
