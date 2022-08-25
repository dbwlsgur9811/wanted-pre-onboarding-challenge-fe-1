import { request } from './axiosClient';

export const fetchData = async url => {
  const result = await request({ url });
  const { data } = result.data;
  return data;
};

export const fetchToDo = async url => {
  const result = await request({ url });
  const { data } = result;
  return data;
};
