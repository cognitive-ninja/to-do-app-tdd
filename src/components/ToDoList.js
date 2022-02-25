import React from 'react'

const ToDoList = (props) => {
  return (
    <div className="todo__list">
    {
        props.todos.length < 1 ?
            <h3>No Tasks To Do</h3> :
            <>
                <p>Click on the task to delete</p>
                <ul>
                { 
                    props.todos.map((item, index) => {
                        return <div key={index}>
                            <li id={index} onClick={props.handleDeleteItem}>{item}</li>
                        </div>
                    })
                }
                </ul>
            </>
    }
    </div>
  )
}

export default ToDoList