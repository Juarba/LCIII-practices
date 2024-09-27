import React from 'react';

function TaskList({ tasks, handlerToggleTaskCompletion, handlerDeleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li 
          key={index}
          style={{ 
            textDecoration: task.completed ? 'bold' : 'none',
            color: task.completed ? 'red' : 'green'
          }}
        >
          {task.text}
          <button onClick={() => handlerToggleTaskCompletion(index)}>
            {task.completed ? 'Desmarcar' : 'Marcar'}
          </button>
          <button onClick={() => handlerDeleteTask(index)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
