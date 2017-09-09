import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            todos:[] 
        }
    }

    addTodo(item) {
        this.state.todos.push(item)
        this.setState({todos: this.state.todos});
    }

    deleteTodo(index) {
        this.state.todos.splice(index,1)
        this.setState({todos: this.state.todos})
    }

    render() {
        return(
            <div className="todo-wrapper">
                <h1>todos</h1>
                <p>total: {this.state.todos.length}</p>
                <TodoInput addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)}/>
            </div>
        )
    }
}

export default App;