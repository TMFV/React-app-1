import { useState } from 'react';
import SingleCounter from './SingleCounter';
import SingleTodo from './SingleCounter';

const Todos = () => {
  return (
    <div className="todos">
      <h2>Todos</h2>
      <SingleCounter />
    </div>
  );
};

export default Todos;
