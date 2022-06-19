import type { Todo } from '@types';
import { Header } from 'components/Header';
import { TodoList } from 'components/TodoList';
import type { ReactElement } from 'react';
import './styles/global.scss';

export function App(): ReactElement {
  const todos: Todo[] = [
    {
      title: 'Do dishes',
      isCompleted: true,
    },
    {
      title: 'Homework',
      description: 'History Project',
      isCompleted: false,
    },
    {
      title: 'Do dishes',
      isCompleted: false,
    },
  ];
  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} />
    </div>
  );
}
