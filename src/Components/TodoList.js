import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { todoData } from '../todoData.js'
class TodoList extends Component {
    state = {
        logIn: true,
        todoDataState: todoData
    }
    handleLogIn = () => {
        console.log("it works")
        // this.state.logIn:false //fasle
        // this.setState({ logIn: false }, () => {
        //     console.log(this.state.logIn)
        // })   //asynchrone function/method
        this.setState({ logIn: !this.state.logIn })

        //stateless function
        // hooks useContent
    }
    handleChange = (id) => {
        console.log(id)
        const updatedTodoData = this.state.todoDataState.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({ todoDataState: updatedTodoData })
    }
    handleSortAZ = () => {
        const sortedArray = this.state.todoDataState.sort((a, b) => {
            let eltA = a.todo.toUpperCase()
            let eltB = b.todo.toUpperCase()
            if (eltA < eltB) {
                return -1
            } else if (eltA > eltB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ todoDataState: sortedArray })
    }

    handleSortZA = () => {
        const sortedArray = this.state.todoDataState.sort((a, b) => {
            let eltA = a.todo.toUpperCase()
            let eltB = b.todo.toUpperCase()
            if (eltA < eltB) {
                return 1
            } else if (eltA > eltB) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({ todoDataState: sortedArray })
    }
    render() {
        // let status
        // if (this.state.logIn === true) {
        //     status = "In"
        // } else {
        //     status = "out"
        // }
        return (
            <section>
                <button onClick={this.handleSortAZ}>Sort A-Z</button>
                <button onClick={this.handleSortZA}>Sort Z-A</button>
                {this.state.todoDataState.map(elt => <TodoItem
                    todo={elt.todo}
                    key={elt.id}
                    id={elt.id}
                    completed={elt.completed}
                    handleChangeProps={this.handleChange}
                />)}
                <p>The user is Log {this.state.logIn ? "In" : "Out"}</p>
                <button onClick={this.handleLogIn}>Log IN/OUT</button>
            </section>
        );
    }
}

export default TodoList;

let arr = ["test", "super", "Orange", "Html", "Berlin"] //sort arr A-z