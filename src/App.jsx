import React, { useState } from 'react';
    import TodoForm from './components/TodoForm';
    import TodoList from './components/TodoList';

    function App() {
      const [todos, setTodos] = useState([]);

      const addTodo = (text) => {
        const newTodos = [...todos, { text, completed: false }];
        setTodos(newTodos);
      };

      const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} />
          </div>
        </div>
      );
    }

    export default App;
