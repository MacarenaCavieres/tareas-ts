export default function Form() {
    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="todo" className="font-bold">
                    Tarea:
                </label>
                <input
                    id="todo"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ingrese una tarea"
                />
                <button
                    type="submit"
                    className="font-bold uppercase bg-emerald-400 hover:bg-emerald-500 p-3 text-slate-900"
                >
                    Guardar tarea
                </button>
            </div>
        </form>
    );
}
