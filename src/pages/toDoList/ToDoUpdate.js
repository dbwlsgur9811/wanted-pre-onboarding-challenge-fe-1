import React from 'react';
import { useToDOReactQuery } from '../../hooks/useReactQuery';
import { API } from '../../config';
import ToDoUpdateForm from './ToDoUpdateForm';

function ToDoUpdate(props) {
  const { GET_TODO } = API;
  const { id } = props;
  const { data } = useToDOReactQuery([`todo-${id}`], `${GET_TODO}/${id}`);

  return <div>{data && <ToDoUpdateForm data={data.data} />}</div>;
}

export default ToDoUpdate;
