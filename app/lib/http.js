import {baseUrl, localUrl} from '../config/constants';
import axios from 'axios';

const instance = axios.create({
  baseURL: localUrl
});

export default instance