import { useQuery } from '@tanstack/react-query';
import { fetchData, fetchToDo } from '../utils/fetchData';

// common query
export const useReactQuery = (key, path, options) => {
  return useQuery(key, () => fetchData(path), options);
};

export const useToDoReactQuery = (key, path, options) => {
  return useQuery(key, () => fetchToDo(path), options);
};
