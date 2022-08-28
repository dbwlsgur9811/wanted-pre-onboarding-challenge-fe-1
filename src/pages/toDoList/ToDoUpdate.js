import React from 'react';
import { useToDoReactQuery } from '../../hooks/useReactQuery';
import { API } from '../../config';
import ToDoUpdateForm from './ToDoUpdateForm';

function ToDoUpdate(props) {
  const { GET_TODO } = API;
  const { id, isModal } = props;
  if (isModal) {
    const { data } = useToDoReactQuery([`todo-${id}`], `${GET_TODO}/${id}`);
    return <div>{data && <ToDoUpdateForm data={data.data} />}</div>;
  }
}

export default ToDoUpdate;
