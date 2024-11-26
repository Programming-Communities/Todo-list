import React from 'react';

    function TodoItem({ todo, index, removeTodo }) {
      return (
        <li className="flex justify-between items-center mb-2">
          <span>{todo.text}</span>
          <button
            onClick={() => removeTodo(index)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </li>
      );
    }

    export default TodoItem;
