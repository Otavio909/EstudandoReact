import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-amber-50 rounded-2xl p-4 flex flex-col gap-6">
      <input
        type="text"
        placeholder="Digite o titulo da nova tarefa"
        className="hover:scale-105 duration-300 outline-slate-400 px-4 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="hover:scale-105 duration-300 outline-slate-400 px-4 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-600 hover:bg-slate-900 rounded-md hover:scale-110 duration-500 text-white p-2"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default AddTasks;
