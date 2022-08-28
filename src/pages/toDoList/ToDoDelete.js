import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import { deleteToDoList } from '../../hooks/useMutationtoDo';

function ToDoDelete(id) {
  const { mutate: deleteToDo, isError, error, isLoading } = deleteToDoList(id);

  const erase = () => {
    deleteToDo(id);
  };

  useEffect(() => {
    if (!isError) return;
    message.error(error);
  }, [isError]);

  return <Button onClick={erase}>Delete</Button>;
}

export default ToDoDelete;
