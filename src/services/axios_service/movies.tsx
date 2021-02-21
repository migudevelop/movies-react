import axios from 'axios';
import { ENDPOINTS } from 'utils/endpoints.js';

export const getMovies = () => {
  return axios.post(ENDPOINTS.GET_MOVIES, {});
};
