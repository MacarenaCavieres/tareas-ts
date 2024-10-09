import type { Todo } from "../types";

export type TodoActions =
    | { type: "save-todo"; payload: { newTodo: Todo } }
    | { type: "set-activeId"; payload: { id: Todo["id"] } };

export type TodoState = {
    todos: Todo[];
    activeId: Todo["id"];
};

const localStorageTodo = (): Todo[] => {
    const todos = localStorage.getItem("todo");
    return todos ? JSON.parse(todos) : [];
};

export const initialState: TodoState = {
    todos: localStorageTodo(),
    activeId: "",
};

export const todoReducer = (state: TodoState = initialState, action: TodoActions) => {
    if (action.type === "save-todo") {
        let updateTodos: Todo[] = [];
        if (state.activeId) {
            updateTodos = state.todos.map((todo) =>
                todo.id === state.activeId ? action.payload.newTodo : todo
            );
        } else {
            updateTodos = [...state.todos, action.payload.newTodo];
        }

        return {
            ...state,
            todos: updateTodos,
            activeId: "",
        };
    }

    if (action.type === "set-activeId") {
        return {
            ...state,
            activeId: action.payload.id,
        };
    }

    return state;
};
