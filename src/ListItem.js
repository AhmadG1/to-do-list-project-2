import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {

    // Declaring the state of the checkbox and crossline.
    state = {
        check: false,
        cross: 'false',
    }

    // Setting a function to crossline checked tasks.
    onCheck = () => {
        if (this.state.cross === 'false') {
            this.setState({ cross: 'crossed', check: true })
        } else {
            this.setState({ cross: 'false', check: false })
        }
    }

    // Copying to a new array to remove a checked task item.
    // removeItem() {
    //     this.props.removeItem(this.props.index)
    //     console.log(this.state.tasks);
    //     const newList = this.state.tasks.splice(0);
    //     this.setState({tasks:newList})
    // }
      

    render() {
        return (
            <div>
                <h1 className={this.state.cross}>{this.props.task.Task} <span onClick={() => this.props.removeItem(this.props.index)}>⊝</span> </h1>
                <div className="item-checkbox">
                    <input type="checkbox" checked={this.state.check}
                        onChange={() => this.onCheck()} />
                </div>
            </div>
        );
    }
}

export default ListItem;
