import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/tasks";
import "./index.css";
import AddTask from "./components/AddTask";

const App = () => {
  // let message = "Mensagem principal";

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
    {
      id: "3",
      title: "Trabalhar",
      completed: true,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
