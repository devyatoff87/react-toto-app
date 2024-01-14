import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

interface Todo_I {
  id: number
  title: string
  body: string
}

type Todos_T = Todo_I[]

function App() {
  const [todoTitle, setTodoTitle] = useState<string>("")
  const [todoBody, setTodoBody] = useState<string>("")
  const [todos, setTodos] = useState<Todo_I[]>([])

  const addTodoFn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const newTodo: Todo_I = {
      id: Date.now(),
      title: todoTitle,
      body: todoBody
    }

    setTodos((prevTodos: Todo_I[]) => [...prevTodos, newTodo]);

    setTodoTitle("")
    setTodoBody("")
  }

  const filterTodosFn = (todo: Todo_I) => {
    setTodos((prevTodos: Todo_I[]) =>
      todos.filter(mapedtodo => todo.id !== mapedtodo.id && todo)
    )
  }

  return (
    <div className="app-container">
      <header className='header'>
        <form action="">
          <div className='inputs'>
            <input value={todoTitle} className='title' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)} type="text" name="title" />
            <textarea value={todoBody} className='body' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTodoBody(e.target.value)} name="body" id="" ></textarea>
          </div>
          <button className='btn' onClick={addTodoFn}  >Add+</button>
        </form>
      </header>
      <ul className='todo-list'>
        {
          todos ? todos.map((todo) => {
            return (<li onClick={() => filterTodosFn(todo)} className='todo-item' key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
            </li>)
          })
            : <div>No todos add yet. Start with one!</div>
        }
      </ul>
    </div>
  );
}

export default App;
