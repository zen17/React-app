import React, { Component } from 'react'
import TodoItem from './todo_item'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class TodoList extends Component {

  render() {
    return (
      <div>
      <div >  
        
          {this.listTask()}
      </div>
      </div>
    )
  }

  componentWillMount(){
    this.listTask=this.listTask.bind(this);
  }
  listTask(){
    return( this.props.tasks.map((task,index)=>{
      return( 
           
      <TodoItem
        key={index}
        task={task.task}
        store={this.props.store}
        checked={task.checked}
      >
      </TodoItem>)
    }))
  }

}

const mapStateToProps =(state) => ({
  tasks: state.addTodo
});
export default connect(mapStateToProps)(TodoList)

