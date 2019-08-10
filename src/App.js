import React, { Component } from 'react'
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

    render() {
        return (
            <div className='container'>
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}
