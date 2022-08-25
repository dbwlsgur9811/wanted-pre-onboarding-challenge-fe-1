import { Button, message } from 'antd';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';
import { signUpYup } from '../../utils/schema';
import postSignUp from '../../hooks/useMutationSignUp';

/* eslint-disable react/jsx-props-no-spreading */
const signUpDefaultForm = {
  email: '',
  password: '',
};

function SignUpForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: signUpDefaultForm,
    resolver: yupResolver(signUpYup),
    mode: 'onBlur',
  });

  const { mutate: signUp, isError, error } = postSignUp();

  const onSubmit = data => {
    signUp(data);
  };

  useEffect(() => {
    if (!isError) return;
    message.error(error);
  }, [isError]);

  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="login">
        <section className="loginInfo">
          <InputField control={control} errors={errors} name="email" label="Email " />
          <PasswordField control={control} errors={errors} name="password" label="Password " />
        </section>
        <div className="button">
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
