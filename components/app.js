import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

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

    render() {
        return(
            <div className="TODOS">
                <h1>todos</h1>
                <TodoInput addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

export default App;