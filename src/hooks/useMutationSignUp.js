import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API } from '../config';
import { signUp } from '../utils/axiosClient';

const { SIGNUP } = API;

const signUpData = data => {
  return signUp({ url: SIGNUP, method: 'post', data });
};

const postSignUp = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(signUpData, {
    onSuccess: data => {
      queryClient.invalidateQueries('signUp');
      if (data.status === 200) {
        alert('Sign Up Completed');
        navigate('/');
      }
    },
  });
};

export default postSignUp;
