import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <ul className="todo-list">
            {
                this.props.todos.map((todo,index) => {
                    return <TodoItem text={todo.text} isDone={todo.isDone} index={index} {...this.props} key={index}/>
                })
            }
            </ul>
        )
    }
}

export default TodoList;