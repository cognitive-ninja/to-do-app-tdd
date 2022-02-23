import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

const ToDoApp = () => {

    const [todos, setTodos] = useState([]);
    const [newToDo, setNewToDo] = useState('');

    const handleNewToDo = (e) => {
        setNewToDo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos((prevTodos) => {
            return [newToDo, ...prevTodos];
          })
        setNewToDo('')
    }

    const handleDeleteItem = (e) =>{
        const idx = e.target.id;
        const newToDoList = todos.filter((todo, index, arr) => {
            return index !== idx*1;
        });
        setTodos(newToDoList)
    }

    return (
        <div>
            <ToDoForm
                newToDo={newToDo}
                handleNewToDo={handleNewToDo}
                handleSubmit={handleSubmit}
            />
            <ToDoList
                todos={todos}
                handleDeleteItem={handleDeleteItem}
            />
        </div>
    )
}

export default ToDoApp