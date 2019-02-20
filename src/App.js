import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class App extends Component {

  state = {
    // Form setup, input empty text for adding new items.
    formData: {
      Task: ''
    },
    // List of tasks on submition for To Do List.
    tasks: []
  }

  // Function for adding new tasks in the input.
  updateItem = (event) => {
    // Assigning a key input for the input bar.
    const key = event.target.placeholder
    // Getting the typed item from the user input.
    const newData = event.target.value
    // Assigning an original state location.
    const originalState = this.state.formData
    // Make a copy of the originalState
    const copy = Object.assign({}, originalState)
    // Updating the new copy with the new data user input.
    copy[key] = newData
    // Set the state with the new copy.
    this.setState({
      formData: copy
    })
  }

  // Function for submitting the new task into the task list.
  submitItem = (event) => {
    // Prevent the page from refreshing.
    event.preventDefault()
    // Copy tasks list to a new array.
    const copy = this.state.tasks.slice(0)
    // Adding tasks list to new array.
    copy.push(this.state.formData)
    // Set the state with new copy
    this.setState({
      tasks: copy,
      formData: {
        Task: ''
      }
    })
  }

  // Function for clear tasks button.
  clearTasks() {
    this.setState({ tasks: [] });
  }

  // Copying to a new array to remove a checked task item.
  removeItem = (index) => {
    console.log(this.state.tasks , index);
    const copy = this.state.tasks.slice(0)
    copy.splice(index, 1);
    this.setState({ tasks: copy })
}

  render() {
    // Declare the item list showen in the screen after submiting a task.
    const ItemList = this.state.tasks.map((task, index) => {
      return <ListItem task={task} index={index} removeItem={this.removeItem} />;
    })
    return (
      <div>
        <header>To Do List</header>
        <form onSubmit={this.submitItem}>
          <input placeholder="Task" onChange={this.updateItem} value={this.state.formData.Task} class='bar'/>
          <button type="submit" class='button1'> Add Task </button>
        </form>
        {ItemList} 
        <button type="button" onClick={this.clearTasks.bind(this)} className='button1'>Clear</button>
        <style>{'body { background-color: #0a85aa; }'}</style>
      </div>
    );
  }
}

export default App;
