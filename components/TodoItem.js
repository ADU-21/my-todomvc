import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <li>
                <label>
                <input type="checkbox"/>
                <span>{this.props.text}</span>
                </label>
            </li>
        )
    }
}

export default TodoItem;