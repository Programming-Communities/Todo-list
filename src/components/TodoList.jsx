import React from 'react';
    import TodoItem from './TodoItem';

    function TodoList({ todos, removeTodo }) {
      return (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
          ))}
        </ul>
      );
    }

    export default TodoList;
