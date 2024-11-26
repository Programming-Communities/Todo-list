import React, { useState } from 'react';

    function TodoForm({ addTodo }) {
      const [value, setValue] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
      };

      return (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            className="border p-2 w-full"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add a new todo"
          />
        </form>
      );
    }

    export default TodoForm;
