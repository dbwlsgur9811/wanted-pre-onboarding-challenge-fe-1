import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogInForm from './pages/login/Login';
import SignUpform from './pages/signUp/SignUp';
import ToDoList from './pages/toDoList/ToDoList';

function Routers() {
  return (
    <Routes>
      <Route path="/todolist" element={<ToDoList />} />
      <Route path="/" element={<LogInForm />} />
      <Route path="/signup" element={<SignUpform />} />
    </Routes>
  );
}

export default Routers;
