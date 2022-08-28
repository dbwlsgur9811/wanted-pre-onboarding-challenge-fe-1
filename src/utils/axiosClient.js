import axios from 'axios';
import { BASE_URL } from '../config';

const client = axios.create({ baseURL: BASE_URL });

export function request({ ...options }) {
  // console.log(options);
  const adminToken = localStorage.getItem('logintoken');
  client.defaults.headers.common.Authorization = adminToken;
  const onSuccess = response => response;
  const onError = error => error;

  return client(options).then(onSuccess).catch(onError);
}

export function login({ ...options }) {
  const onSuccess = response => response;
  const onError = error => error;

  return client(options).then(onSuccess).catch(onError);
}

export function signUp({ ...options }) {
  const onSuccess = response => response;
  const onError = error => error;

  return client(options).then(onSuccess).catch(onError);
}
