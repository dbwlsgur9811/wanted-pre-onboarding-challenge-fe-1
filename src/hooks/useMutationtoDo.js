import { useMutation, useQueryClient } from 'react-query';
import { API } from '../config';
import { request } from '../utils/axiosClient';

const { CREATE_TODO, UPDATE_TODO, DELETE_TODO } = API;

const createToDo = data => {
  return request({ url: CREATE_TODO, method: 'post', data });
};

const updateToDo = data => {
  console.log(data);
  return request({ url: UPDATE_TODO, method: 'put', data });
};

const deleteToDo = data => {
  return request({ url: DELETE_TODO, method: 'delete', data });
};

export const postCreateToDo = () => {
  const queryClient = useQueryClient();
  return useMutation(createToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todo');
    },
  });
};

export const putUpdateToDo = id => {
  console.log(id);
  const queryClient = useQueryClient();
  return useMutation(updateToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries(`todo-detail-${id}`);
    },
  });
};

export const deleteToDoList = id => {
  const queryClient = useQueryClient();
  return useMutation(deleteToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries(`todo-detail-${id}`);
    },
  });
};
