import { Button, message } from 'antd';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';
import { loginYup } from '../../utils/schema';
import postLogin from '../../hooks/useMutationLogin';

/* eslint-disable react/jsx-props-no-spreading */
const loginDefaultForm = {
  email: '',
  password: '',
};

function LogInForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: loginDefaultForm,
    resolver: yupResolver(loginYup),
    mode: 'onBlur',
  });

  const { mutate: login, isError, error } = postLogin();

  const onSubmit = data => {
    login(data);
  };

  useEffect(() => {
    if (!isError) return;
    message.error(error);
  }, [isError]);

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="login">
        <section className="loginInfo">
          <InputField control={control} errors={errors} name="email" label="Email " />
          <PasswordField control={control} errors={errors} name="password" label="Password " />
        </section>
        <div className="button">
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            LOGIN
          </Button>
          <Button onClick={goToSignUp}>SIGN UP</Button>
        </div>
      </div>
    </form>
  );
}
export default LogInForm;
