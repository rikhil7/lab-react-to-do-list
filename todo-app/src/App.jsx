import React, { Component } from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todolist: [],
    };
  }
  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      input: "",
      todolist: [...this.state.todolist, this.state.input],
    });
  };
  updateItem = (newItem, index) => {
    let arr = this.state.todolist;

    arr.splice(index, 1, newItem);

    this.setState({
      todolist: arr,
    });
  };
  deleteItem = (index) => {
    let arr = this.state.todolist;

    arr.splice(index, 1);

    this.setState({
      todolist: arr,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>To-Do APP</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name="task"
            id="task-input"
            value={this.state.input}
            onChange={this.inputChange}
          />
          <button className="add">ADD</button>
        </form>
        <p>My Input: {this.state.input}</p>
        <div className="todoList">
          <h2>LIST</h2>
          {this.state.todolist.length==0 ? (<h3>List is Empty</h3>) : 
          (this.state.todolist.map((e, i) => {
            return (
              <TodoItem
                e={e}
                i={i}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
              />
            );

            // return(
            //   <div key={i}>
            //     <input id='task' type="text" value={e} onChange={(event)=>{
            //       this.updateItem(event.target.value, i)
            //     }} />
            //     <button className='delete' onClick={()=>{
            //       this.deleteItem(i)
            //     }}>DELETE</button>
            //   </div>
            // )
          }))}
        </div>
      </div>
    );
  }
}
