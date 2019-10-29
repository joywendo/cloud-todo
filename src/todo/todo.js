import React,{ Component} from 'react';
import './todo.scss';
class TodoList extends Component{
render(){

    return(
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.props.addItem}> 
                    <input placeholder="Task to do" ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}/>
                    <button type="submit">Add a new Task to do</button>
                </form>
            </div>
        </div>
    )

    }
}

export default TodoList