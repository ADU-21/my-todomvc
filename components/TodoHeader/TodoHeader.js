import React from 'react';
import '../../styles/main.styl';

class TodoHeader extends React.Component {
    handlerKeyUp(e) {
        if(e.keyCode == 13) {
            let value = e.target.value;
            if(!value) return false;
            let newTodoItem = {
                text: value,
                isDone: false
            };
            e.target.value = '';
            this.props.addTodo(newTodoItem);
        }
    }

    render () {
        return (
            <div className="todo-input">
            <h1 className="todo-title">test</h1>
            <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what need to do?"/>
            </div>
        )
    }
}

export default TodoHeader;