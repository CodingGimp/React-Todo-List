import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle = () => { 
        return {
            textDecoration: this.props.todos.completed ? 'line-through' : 'none',
            padding: '10px',
            marginBottom: '3px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const { id, title } = this.props.todos;
        return (
            <div className='bg-secondary text-white' >
                <p style={this.getStyle()}>
                    <input className='m-3' type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
                    {title}
                </p>
            </div>
        )
    }
}


TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

// const colorStyle = {
//     backgroundColor: '#95eebd'
// }