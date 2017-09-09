import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            todos:[],
            isAllChecked: false
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

    changeTodoState(index, isDone, isChangeAll=false) {
        if(isChangeAll) {
            this.setState({
                todo: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            });
        }else{
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
    }

    allChecked() {
        let isAllChecked = false;
        if (this.state.todos.every(todo => todo.isDone)) {
        isAllChecked = true;
        }
        this.setState({   
        todos: this.state.todos,
        isAllChecked: isAllChecked
        });
    }

    
    clearDone(){
        let todos = this.state.todos.filter(todo => !todo.isDone)
        this.setState({
        todos : todos
        })
    }

    render() {
        let info = {
            isAllChecked: this.state.isAllChecked,
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0
        }
        return(
            <div className="todo-wrapper">
                <h1>todos</h1>
                <p>total: {this.state.todos.length}</p>
                <TodoHeader addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)}
                changeTodoState={this.changeTodoState.bind(this)} />
                <TodoFooter {...info} clearDone={this.clearDone.bind(this)} 
                changeTodoState={this.changeTodoState.bind(this)} />
            </div>
        )
    }
}

export default App;