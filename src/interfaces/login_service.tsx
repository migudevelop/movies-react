import { ReactNode } from 'react';

export interface IEUser {
  name?: string;
  logged?: boolean;
}

export interface IELoginModel {
  user?: string;
  password?: string;
}
