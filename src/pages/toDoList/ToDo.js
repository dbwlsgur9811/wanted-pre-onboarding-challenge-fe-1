import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Card, Modal } from 'antd';
import ToDoUpdate from './ToDoUpdate';

function ToDo({ data }) {
  const { title, content, id } = data;

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

  return (
    <Card
      style={{
        width: 300,
        margin: 20,
      }}
      type="inner"
      title={title}
      extra={
        <button type="button">
          <FaPencilAlt onClick={showModal} />
        </button>
      }
    >
      {content}
      <Modal title="To Do Update" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ToDoUpdate id={id} />
      </Modal>
    </Card>
  );
}

export default ToDo;
