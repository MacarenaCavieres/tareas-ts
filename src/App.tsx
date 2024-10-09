import { useEffect, useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todo-reducer";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(state.todos));
    }, [state.todos]);

    return (
        <>
            <header className="bg-teal-900">
                <h1 className="text-bold text-white text-5xl text-center py-10">Tareas</h1>
            </header>

            <section className="bg-teal-800 py-20 px-5">
                <div className=" max-w-4xl mx-auto">
                    <Form dispatch={dispatch} state={state} />
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <TodoList todos={state.todos} dispatch={dispatch} />
            </section>
        </>
    );
}

export default App;
