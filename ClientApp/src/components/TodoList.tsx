import { useState, useEffect } from 'react';
import { todoApi } from '../../services/api';

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    console.log('load todos')
    // Fetch todos when component mounts
    const fetchTodos = async () => {
      try {
        const response = await todoApi.getAll();
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    try {
      const response = await todoApi.create({ title, isCompleted: false });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      {todos.map(t => <span>t</span>)}
    </div>
  );
};