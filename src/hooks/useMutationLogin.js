import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API } from '../config';
import { login } from '../utils/axiosClient';

const { LOGIN } = API;

const loginData = data => {
  return login({ url: LOGIN, method: 'post', data });
};

const postLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(loginData, {
    onSuccess: data => {
      queryClient.invalidateQueries('login');
      localStorage.setItem('logintoken', data.data.token);
      if (data.status === 200) {
        navigate('/todoList');
        alert('Successfully Login ');
      }
      if (data.status !== 200) alert('wrong email or password');
    },
  });
};

export default postLogin;
