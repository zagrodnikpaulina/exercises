import React, { Component } from 'react';

export class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Enter your name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>
                <h1>Hi, my name is {this.state.value}!</h1>
            </div>
        );
    }
}

export default InputComponent;