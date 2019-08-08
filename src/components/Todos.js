import React, { Component } from 'react'

export default class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <h3>{todo.title}</h3>
        ));
    }
}

