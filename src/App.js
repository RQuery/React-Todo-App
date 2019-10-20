import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Study for Midterm"},
      {id: 2, content: "Grocery shopping"}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo => todo.id !== id));

    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]

    this.setState({
      todos: todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h3 className="center blue-text">Todo's</h3>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
