import React from 'react'

const ToDoForm = (props) => {

  return (
    <div className="todo__form">
        <form 
            className="todo__form"
            onSubmit={props.handleSubmit}
        >
            <input
                className='todo__form__input'
                type='text'
                autoFocus
                placeholder='What to do?'
                value={props.newToDo}
                onChange={props.handleNewToDo}
            />
            <button 
                className='todo__form__submit'
                type='submit'
            >Add</button>
        </form>
    </div>
  )
}

export default ToDoForm