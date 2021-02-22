import axios, { AxiosError } from 'axios';
import { ENDPOINTS } from 'utils/endpoints.js';
import { IELoginRequest } from 'interfaces/petitions';

export const login = (data: IELoginRequest) => {
  return axios.post(ENDPOINTS.LOGIN, data);
};
