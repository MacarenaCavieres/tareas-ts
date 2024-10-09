import { TodoActions } from "../reducers/todo-reducer";
import { Todo } from "../types";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Dispatch, useMemo } from "react";

type TodoListProps = {
    todos: Todo[];
    dispatch: Dispatch<TodoActions>;
};

export default function TodoList({ todos, dispatch }: TodoListProps) {
    const isEmpty = useMemo(() => todos.length === 0, [todos]);

    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold text-slate-600 text-center">Lista de Tareas</h2>
            {isEmpty ? (
                <p className="text-center mt-6 font-bold text-xl">Aún no hay tareas por realizar...</p>
            ) : (
                todos.map((item) => (
                    <div key={item.id} className="border shadow-md p-10 my-10 flex justify-between">
                        <div className="space-y-2 relative">
                            <p className="absolute -top-14 -left-8 px-10 py-2 text-white uppercase font-bold bg-teal-900">
                                Tarea
                            </p>
                            <p className="text-2xl">{item.name}</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: "set-activeId", payload: { id: item.id } })}
                            >
                                <PencilSquareIcon className="h-8 w-8 text-gray-800" />
                            </button>
                            <button
                                onClick={() => dispatch({ type: "delete-todo", payload: { id: item.id } })}
                            >
                                <XCircleIcon className="h-8 w-8 text-red-500" />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
