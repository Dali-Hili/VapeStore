import React, { Component } from 'react'

export default class Pro extends Component {
logout() {
    localStorage.clear()
    window.location.reload()
}
    render() {
        return (
            <div>
                <button onClick={this.logout}>logout</button>
                <h1>hello world !</h1>
            </div>
        )
    }
}
