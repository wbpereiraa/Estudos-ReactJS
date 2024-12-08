import {useState} from 'react';

import "./TodoApp.css";

const TodoApp = () => {

// lista de tarefas
    const [todos, setTodos] = useState([]);

// estado de texto da tarefa    
    const [inputValue, setInputValue] = useState('');

// Adicionar tarefa
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue
            }

            setTodos((prevTodos) => [...prevTodos, newTodo]);

            setInputValue('');
        }
    }
    // deletar tarefa
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

  return (
    <div className='app-container'>
        <h1 className='title'>Lista de tarefas</h1>

        {/* Form para adicionar tarefas */}
        <form onSubmit={handleSubmit} className='form-container'>
            <input type="text" 
            className='input-field'
            placeholder="Adicione uma tarefa..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit" className="add-button">Adicionar</button>
        </form>

        {/* Lista de tarefas */}
        {todos.length === 0 && <p className="empty">Nenhuma tarefa cadastrada</p>}

        <ul className='todo-list'>
            {todos.map(todo => (
            <li key={todo.id} className="todo-item">
                {todo.text}
                <button className="remove-button" onClick={() => handleDelete(todo.id)}>Remover Tarefa</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp