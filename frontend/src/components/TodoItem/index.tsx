import type { Todo } from '@types';
import type { ReactElement } from 'react';
import './styles.scss';

export function TodoItem({
  title,
  description,
  isCompleted,
}: Todo): ReactElement {
  return (
    <article className="todo-item">
      <section>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
      <input type="checkbox" defaultChecked={isCompleted} />
    </article>
  );
}
