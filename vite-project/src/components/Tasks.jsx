import { ChevronRightCircleIcon, ChevronRightIcon, Trash, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-1 p-4 bg-amber-50 rounded-2xl border-b border-amber-100">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex flex-col gap-2 bg-slate-600 p-3 rounded-2xl text-white">
          <div className="flex gap-2 w-full">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`text-left w-full hover:bg-slate-900 duration-600 rounded-2xl ${task.isCompleted ? "line-through" : ""}`}
            >
              {task.title}
            </button>
            <button 
              onClick={() => { props.onDescriptionClick(task.id) }} 
              className="bg-slate-700 hover:bg-slate-900 rounded-md hover:scale-110 duration-500 p-2"
            >
              <ChevronRightIcon />
            </button>
            <button 
              onClick={() => props.onDeleteTaskClick(task.id)} 
              className="bg-slate-700 hover:bg-slate-900 rounded-md hover:scale-110 duration-500 p-2"
            >
              <TrashIcon />
            </button>
          </div>
          {task.showDescription && (
            <div className="bg-slate-800 text-slate-100 p-3 rounded-md text-sm mt-1">
              <p>{task.description}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
