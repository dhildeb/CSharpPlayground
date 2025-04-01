import { useState, useEffect } from 'react';
import { todoApi } from '../../services/api';

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('')

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
  const updateTodo = async (todo: Todo) => {
    try {
      await todoApi.update(todo.id, todo);
      setTodos(todos.map(t => t.id === todo.id ? todo : t));
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <div><input onChange={(e) => setNewTodo(e.target.value)} /><button onClick={() => addTodo(newTodo)}>Add Todo</button></div>
      <div className='flex flex-col'> 
        {todos.map(t => <div className='w-full p-5'><input className='mr-2' type='checkbox' onChange={(e) => updateTodo({...t, isCompleted: e.target.checked})} checked={t.isCompleted} /><span>{t.title}</span></div>)}
      </div>
    </div>
  );
};