import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState(
        {
            [e.target.name]: e.target.value
        }
    );

    render() {
        return (
            <form className='d-flex mb-3'>
                <input type="text" name="title" style={{ flex: '10', padding: '5px' }} placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="Submit" className='btn btn-primary ml-2' style={{ flex: '1' }} />
            </form>
        )
    }
}
