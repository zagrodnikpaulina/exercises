import React, { Component } from 'react';

let tmpStyle = {
    display: 'inline-block',
}

let componentStyle = {
    border: 'solid 2px',
    borderRadius: '0.5em',
    width: '20em',
    height: '20em',
    margin: '1em',
    overflow: 'hidden',

};

let imgStyle = {
    margin: 'auto',
    // height: '100%',
    display: 'block',
    width: '100%',
    textAlign: 'center'
};

class DogComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { stage: this.props.puppy };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const newStage = e.target.value;
        this.setState({ stage: newStage });
    }


    render() {

        return (
            <div style={tmpStyle}>
                <div style={componentStyle}>
                    <img style={imgStyle} src={this.state.stage} />
                </div>
                <br />
                <select id="stages" onChange={this.handleChange}>
                    <option value={this.props.puppy}>Puppy</option>
                    <option value={this.props.mid}>Mid</option>
                    <option value={this.props.adult}>Adult</option>
                </select>
            </div>

        );
    }
}

export default DogComponent;