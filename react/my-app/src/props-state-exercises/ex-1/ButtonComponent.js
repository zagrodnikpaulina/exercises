import React, { Component } from 'react';

const blue = "#00B1E1";
const red = "#E9573F";

let buttonStyle = {
    border: 'solid 2px',
    borderRadius: '0.5em',
    width: '10em',
    height: '5em',
    margin: '1em'
}

export class ButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { male: this.props.male, color: 'default' };
        this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    }

    changeBackgroundColor() {
        console.log(this.props.male);

        if (this.state.male == true) {
            console.log(this.props.male);
            this.setState({ color: blue });
        } else {
            this.setState({ color: red });
            console.log(this.state.color);
        }

        // const newColor = this.props.male == false ? red : blue;
        // console.log(newColor);
        // this.setState({ color: newColor });

    }

    render() {
        return (
            <div style={buttonStyle}>
            <div style={{background: this.state.color}}>
                <button onClick={this.changeBackgroundColor} >Click me</button>
                </div>
            </div>
        );
    }
}

export default ButtonComponent;