import { ToDo } from "./ToDo";

export const ToDoItem = ({
  todo,
  onDelete,
}: {
  todo: ToDo;
  onDelete: () => void;
}) => {
  return (
    <>
      <div className="rounded-lg join join-horizontal w-full" key={todo.id}>
        <div className="join-item w-full items-center grid pl-6 border border-secondary-content">
          {todo.todo}
        </div>
        <button className="join-item btn btn-error" onClick={onDelete}>
          削除
        </button>
      </div>
    </>
  );
};
