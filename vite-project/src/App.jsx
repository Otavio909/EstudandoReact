import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function onAddTaskSubmit(title, description) {
    if (!title.trim() || !description.trim()){
      return alert("erro, não é possivel deixar um campo vazio")
    }
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
      showDescription: false,
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

  function onDescriptionClick(TasksId){
    const newTasks = tasks.map((task) => {
      if (task.id === TasksId) {
        return { ...task, showDescription: !task.showDescription };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125 space-y-5">
        <h1 className=" w-125 text-center text-amber-50 p-4 font-bold text-2xl ">
          Gerenciador de Tarefas
        </h1>
        <AddTasks tasks={tasks} onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
          onDescriptionClick={onDescriptionClick}
        />
      </div>
    </div>
  );
}

export default App;
