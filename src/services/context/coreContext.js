import React, { createContext } from 'react';
import LoginService from '../login_service/index.tsx';

export const CoreContext = createContext({ login: LoginService().getInstance() });
