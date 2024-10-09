import { ChangeEvent, useState } from "react";
import { Todo } from "../types";

export default function Form() {
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

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
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
