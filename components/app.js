import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            todos:[] 
        }
    }

      handlerKeyUp(e) {
        if(e.keyCode == 13) {
        let value = e.target.value;
        if(!value) return false;
        let newTodoItem = {
            text: value,
            isDone: false
        };
        e.target.value = '';
        this.state.todos.push(newTodoItem)
        this.setState({todos: this.state.todos});  
        }
    }

    render() {
        return(
            <div className="TODOS">
                <h1>todos</h1>
                <input type="text" placeholder="what need to do?" onKeyUp={this.handlerKeyUp.bind(this)} />
                <ul>
                    {this.state.todos.map(((todo, index) => {
                                return (<li key={index}>{todo.text}</li>)}
                        ))}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('content'));