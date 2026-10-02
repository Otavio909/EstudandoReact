import { ChevronRightCircleIcon, ChevronRightIcon, Trash, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-1 p-4 bg-amber-50 rounded-2xl border-b border-amber-100">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`text-left w-full bg-slate-600 hover:bg-slate-900 duration-600 text-white p-3 rounded-2xl
               ${task.isCompleted ? "line-through" : ""}`}
          >
            {task.title} <br />
          </button>
          <button className="bg-slate-600 hover:bg-slate-900 rounded-md hover:scale-110 duration-500 text-white ">
            <ChevronRightIcon />
          </button>
          <button onClick={()=>props.onDeleteTaskClick(task.id)} className="bg-slate-600 hover:bg-slate-900 rounded-md hover:scale-110 duration-500  text-white">
            <TrashIcon />
          </button>

          
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
