import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class Todos extends Component {
    render() {
        return this.props.todos.map(todo => <TodoItem key={todo.id} todos={todo} markComplete={this.props.markComplete} />)
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}