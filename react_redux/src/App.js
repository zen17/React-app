import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo_list';
import AddTodoItems from './components/add_todo'
import Todo from './components/todo'

class App extends Component {
  render() {
    return (
      <div>
      <Todo
       store={this.props.store}>
      </Todo>
      </div>
    );
  }
}

export default App;
 