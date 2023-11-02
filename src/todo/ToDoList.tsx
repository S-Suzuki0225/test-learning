import { ChangeEventHandler, useState } from "react";
import { Navbar } from "../Navbar";
import { ToDo } from "./ToDo";
import { ToDoItem } from "./ToDoItem";

const addTodo =
  (input: string) =>
  (todos: ToDo[]): ToDo[] => {
    const newId = todos.reduce((acc, v) => Math.max(v.id + 1, acc), 0);
    return input
      ? [
          {
            id: newId,
            todo: input,
          },
          ...todos,
        ]
      : todos;
  };

const randomTodo = () => {
  const random = <T,>(ls: T[]): T => {
    const i = Math.floor(Math.random() * ls.length);
    return ls[i];
  };
  return `${random(["私", "彼", "彼女", "我々"])}${random([
    "読む",
    "書く",
    "買う",
    "運転する",
  ])}${random(["本", "メール", "野菜", "車"])}${random([
    "明日までに",
    "今日中に",
    "来週に",
    "この月末までに",
  ])}`;
};

export const ToDoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const onInputTodo: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTodoInput(e.currentTarget.value);
  const [todos, setTodos] = useState<ToDo[]>([]);
  const onClickAddTodo = () => {
    setTodos(addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <>
      <div className="h-full grid grid-flow-row grid-rows-[auto,auto,1fr] p-8 gap-4">
        <Navbar
          onClickHamburger={() => alert("hamburger")}
          onClickTitle={() => alert("todolist")}
          meatballItems={[
            {
              onClick: () => setTodos(addTodo(randomTodo())),
              item: "ランダムにTodo追加",
            },
          ]}
        />
        <div className="mt-4 join w-full">
          <input
            type="text"
            placeholder="Add todo...✍"
            className="input input-bordered join-item w-full"
            value={todoInput}
            onInput={onInputTodo}
          />
          <button
            type="button"
            className="join-item btn btn-primary"
            onClick={onClickAddTodo}
            disabled={!todoInput}
          >
            追加
          </button>
        </div>
        {todos.length === 0 && (
          <div className="text-center font-bold text-2xl text-secondary opacity-20 border-secondary rounded-lg border items-center grid h-full normal-case">
            empty
          </div>
        )}
        {!!todos.length && (
          <div className="join join-vertical gap-4">
            {todos.map((todo) => {
              return (
                <ToDoItem
                  todo={todo}
                  key={todo.id}
                  onDelete={() =>
                    setTodos((prev) => prev.filter((t) => t.id !== todo.id))
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
