import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar programação",
      isCompleted: false,
      description: "estudar programação todos os dias para aprender mais",
    },
    {
      id: 2,
      title: "ir para academia",
      isCompleted: false,
      description: "ir para academia todos os dias para manter a forma",
    },
    {
      id: 3,
      title: "fazer minha tarefa de casa",
      isCompleted: false,
      description:
        "fazer minha tarefa de casa todos os dias para manter a organização",
    },
  ]);

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onDeleteTaskClick(TasksId) {
    const newTasks = tasks.filter((task) => task.id !== TasksId);
    setTasks(newTasks);
  }

  function onTaskClick(TasksId) {
    const newTasks = tasks.map((task) => {
      if (task.id === TasksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }
  return (
    <div className="w-screen  bg-slate-500 flex justify-center p-6">
      {}
      <div className="w-125 space-y-5">
        <h1 className=" w-125 text-center text-amber-50 p-4 font-bold text-2xl ">
          Gerenciador de Tarefas
        </h1>
        <AddTasks tasks={tasks} onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
