import { useReducer } from "react";
import Form from "./components/Form";
import { initialState, todoReducer } from "./reducers/todo-reducer";

function App() {
    // const [state,dispatch] = useReducer(todoReducer,initialState)
    return (
        <>
            <header className="bg-teal-900">
                <h1 className="text-bold text-white text-5xl text-center py-10">Tareas</h1>
            </header>

            <main className="bg-teal-800 py-20 px-5">
                <section className="max-w-4xl mx-auto">
                    <Form />
                </section>
            </main>
        </>
    );
}

export default App;
