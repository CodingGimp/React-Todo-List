import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About'
import uuid from 'uuid';
import axios from 'axios';

export default class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState(
                {
                    todos: res.data
                }
            ))
    }

    markComplete = (id) => {
        this.setState(
            {
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        )
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }

        this.setState(
            {
                todos: [...this.state.todos, newTodo]
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
            <Router>
                <div className='container mt-5'>
                    <Header />
                    <Route exact path='/' render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                        </React.Fragment>
                    )} />
                    <Route path='/about' component={About} />

                </div>
            </Router>
        )
    }
}
