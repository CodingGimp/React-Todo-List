import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todos.title}</p>
            </div>
        )
    }
}
