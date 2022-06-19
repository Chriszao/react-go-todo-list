import type { Todo } from '@types';
import { TodoItem } from 'components/TodoItem';
import type { ReactElement } from 'react';
import './styles.scss';

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps): ReactElement {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.title}>
          <TodoItem
            title={todo.title}
            isCompleted={todo.isCompleted}
            description={todo.description}
          />
        </li>
      ))}
    </ul>
  );
}
