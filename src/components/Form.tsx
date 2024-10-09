import { ChangeEvent, useState, Dispatch, FormEvent } from "react";
import { Todo } from "../types";
import { TodoActions, TodoState } from "../reducers/todo-reducer";

type FormTodo = {
    dispatch: Dispatch<TodoActions>;
    state: TodoState;
};

export default function Form({ dispatch, state }: FormTodo) {
    const [todo, setTodo] = useState<Todo>({
        name: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            [e.target.id]: e.target.value,
        });
    };

    const isValidForm = () => {
        const { name } = todo;
        return name.trim() !== "";
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: "save-todo", payload: { newTodo: todo } });
    };

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">
                    Tarea:
                </label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ingrese una tarea"
                    value={todo.name}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="font-bold uppercase bg-emerald-400 hover:bg-emerald-500 p-3 text-slate-900 disabled:opacity-10"
                    disabled={!isValidForm()}
                >
                    Guardar tarea
                </button>
            </div>
        </form>
    );
}
