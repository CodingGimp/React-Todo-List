import React, { Component } from 'react'
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

export default class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, officiis.',
                completed: false,
            },
            {
                id: 2,
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                completed: false,
            },
            {
                id: 3,
                title: 'Lorem ipsum dolor sit amet.',
                completed: false,
            },
        ]
    }

    markComplete = (id) => {
        this.setState(
            {
                todos: this.state.todos.map(todo => {
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        )
    }

    delTodo = (id) => {
        this.setState(
            {
                todos: [...this.state.todos.filter(todo => todo.id !== id)] 
            }
        )
    }

    render() {
        return (
            <div className='container mt-5'>
                <Header />
                <AddTodo />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </div>
        )
    }
}
