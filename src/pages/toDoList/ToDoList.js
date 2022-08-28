import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useReactQuery } from '../../hooks/useReactQuery';
import { API } from '../../config';
import ToDo from './ToDo';
import ToDoCreate from './ToDoCreate';

function ToDoList() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { GET_TODOLSIT } = API;
  const { isSuccess, data, error, isLoading } = useReactQuery(['todos'], GET_TODOLSIT);

  return (
    <div className="toDoList">
      <div className="toDoListForm">
        <section className="nav">
          <div className="title">To Do</div>
          <div className="createButton">
            <Button type="primary" size="40" onClick={showModal}>
              Create
            </Button>
          </div>
          <Modal title="To Do Create" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <ToDoCreate />
          </Modal>
        </section>
        <section className="toDo">{isSuccess && data.map(props => <ToDo props={props} key={props.id} />)}</section>
      </div>
    </div>
  );
}

export default ToDoList;
