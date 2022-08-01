import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTaskThunk } from '../../redux/actions/TaskAction';

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const [task, setTask] = useState({ text: '', user_id: '' });
  const [form, setForm] = useState({});

  const addNewTask = (newTask, e) => {
    e.preventDefault();
    dispatch(createTaskThunk(newTask));
    setForm({});
    navigate('/');
  };

  return (
    <form className="taskForm">
      <input
        className="inputForm"
        type="text"
        placeholder="Задача"
        value={task.text}
        onChange={(e) => setTask({ text: e.target.value, user_id: user.id })}
      />
      <Button type="submit" variant="outline-primary" onClick={(e) => addNewTask(task, e)}>Новая задача</Button>
    </form>
  );
}

export default TaskForm;
