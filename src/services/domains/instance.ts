import axios from 'axios';

import {APPLEARNINGURL, STAGINGLEARNINGURL} from './urls';
import {Platform} from 'react-native';
import {getDataStorage} from '../../lib/storage';

const local =
  Platform.OS === 'ios'
    ? 'http://localhost:8000/'
    : 'http://192.168.0.112:8000/';
export const instance = axios.create({
  // baseURL: 'https://app.learningsaint.com/',
  baseURL: APPLEARNINGURL,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

export const instance_crm = axios.create({
  baseURL: 'https://crm.learningsaint.com/',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});
export const instance_location = axios.create({
  baseURL: 'https://geoip.learningsaint.com/',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

export const instance_crm_staging_node = axios.create({
  baseURL: local,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const BearerToken = getDataStorage('@token');
    console.log(BearerToken);
    if (BearerToken) {
      config.headers.Authorization = BearerToken;
    }
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
