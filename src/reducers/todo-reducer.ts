import type { Todo } from "../types";

export type TodoActions = { type: "save-todo"; payload: { newTodo: Todo } };

export type TodoState = {
    todos: Todo[];
};

export const initialState: TodoState = {
    todos: [],
};

export const todoReducer = (state: TodoState = initialState, action: TodoActions) => {
    if (action.type === "save-todo") {
        return {
            ...state,
            todos: [...state.todos, action.payload.newTodo],
        };
    }

    return state;
};
