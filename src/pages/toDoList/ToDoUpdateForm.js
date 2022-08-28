import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, message } from 'antd';
import { toDoYup } from '../../utils/schema';
import InputField from '../../components/InputField';
import TextAreaField from '../../components/TextAreaField';
import { putUpdateToDo } from '../../hooks/useMutationtoDo';
import ToDoDelete from './ToDoDelete';

function ToDoUpdateForm(props) {
  const { data } = props;
  const { title, content, id } = data;

  const toDoDefaultForm = {
    title: title || '',
    content: content || '',
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: toDoDefaultForm,
    resolver: yupResolver(toDoYup),
    mode: 'onBlur',
  });

  const { mutate: updateToDo, isError, error, isLoading } = putUpdateToDo(id);

  const onSubmit = updateData => {
    const postData = { ...updateData, id };
    updateToDo(postData);
  };

  useEffect(() => {
    if (!isError) return;
    message.error(error);
  }, [isError]);

  return (
    <section className="ToDoUpdateForm">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <InputField control={control} errors={errors} name="title" label="Title" />
            <TextAreaField control={control} errors={errors} name="content" label="Content" />
          </section>
          <div className="button">
            <Button loading={isLoading} type="submit" onClick={handleSubmit(onSubmit)}>
              Update
            </Button>
            <ToDoDelete id={id} />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ToDoUpdateForm;
