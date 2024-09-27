import React from 'react';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'bold' : 'none', color: task.completed ? 'green' : 'red' }}>
          {task.name}
          <button onClick={() => toggleComplete(task.id)}>
            {task.completed ? 'Anular' : 'Completar'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;