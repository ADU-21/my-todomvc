import React from 'react'
import { Button,Checkbox } from 'antd'

class TodoFooter extends React.Component{
  deleteAll(){
    this.props.clearDone()
  }
  changeAll(e){
    this.props.changeTodoState(null,e.target.checked,true)
  }
  render(){
    let minus = this.props.todoCount - this.props.todoDoneCount
    return (
      <div className="todo-footer">
        <label>
          <Checkbox checked={this.props.isAllChecked} onChange={this.changeAll.bind(this)}/>Select All
        </label>
        <span className="item-left">Todos: {minus}</span>
        <Button type="danger"onClick={this.deleteAll.bind(this)}>Clear all have done</Button>
      </div>
    )
  }
}

export default TodoFooter;