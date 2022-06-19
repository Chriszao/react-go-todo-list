import './styles.scss';
import type { ReactElement } from 'react';

export function Header(): ReactElement {
  return (
    <header className="page-header">
      <h1>Todo App</h1>
    </header>
  );
}
