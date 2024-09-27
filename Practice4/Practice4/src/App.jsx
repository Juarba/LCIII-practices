import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handlerAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const handlerToggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handlerDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Tareas</h1>
      <AddTask addTask={handlerAddTask} />
      <TaskList 
        tasks={tasks}
        handlerToggleTaskCompletion={handlerToggleTaskCompletion}
        handlerDeleteTask={handlerDeleteTask}
      />
    </div>
  );
}

export default App;
