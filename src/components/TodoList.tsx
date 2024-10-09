import { Todo } from "../types";

type TodoListProps = {
    todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
    return (
        <div>
            {todos.map((item) => (
                <p>{item.name}</p>
            ))}
        </div>
    );
}
