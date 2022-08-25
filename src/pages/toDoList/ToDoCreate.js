import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, message } from 'antd';
import { toDoYup } from '../../utils/schema';
import InputField from '../../components/InputField';
import TextAreaField from '../../components/TextAreaField';
import { postCreateToDo } from '../../hooks/useMutationtoDo';

const toDoDefaultForm = {
  title: '',
  content: '',
};

function ToDoCreate() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: toDoDefaultForm,
    resolver: yupResolver(toDoYup),
    mode: 'onBlur',
  });

  const { mutate: createToDo, isError, error, isLoading } = postCreateToDo();

  const onSubmit = data => {
    createToDo(data);
    reset(toDoDefaultForm);
  };

  useEffect(() => {
    if (!isError) return;
    message.error(error);
  }, [isError]);

  return (
    <section className="toDoCreate">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="bottom-24">
            <InputField control={control} errors={errors} name="title" label="Title" />
            <TextAreaField control={control} errors={errors} name="content" label="Content" />
          </section>
          <Button loading={isLoading} type="submit" onClick={handleSubmit(onSubmit)}>
            Create
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ToDoCreate;
