import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://168.138.168.68/api',
});
