import React, { Component } from 'react';

let componentStyle = {
    border: 'solid 2px',
    borderRadius: '0.5em',
    width: '20em',
    height: '20em',
    margin: '1em',
    overflow: 'hidden',

    display: 'inline-block',
};

let imgStyle = {
    margin: 'auto',
    // height: '100%',
    display: 'block',
    width: '100%',
    textAlign: 'center'
};

class OnClickChangeDog extends Component {


    constructor(props) {
        super(props);
        this.state = { backgroundPic: this.props.puppy };
        this.changeBackgroundPic = this.changeBackgroundPic.bind(this);
    }

    changeBackgroundPic() {
        if (this.state.backgroundPic === this.props.puppy) {
            // console.log(this.state.backgroundPic);
            this.setState({ backgroundPic: this.props.mid });
        } else if (this.state.backgroundPic === this.props.mid) {
            this.setState({ backgroundPic: this.props.adult });
        } else if (this.state.backgroundPic === this.props.adult) {
            this.setState({ backgroundPic: this.props.puppy });
        }
    }

    render() {

        return (

            <div style={componentStyle}>
                <div onClick={this.changeBackgroundPic}>
                    <img style={imgStyle} src={this.state.backgroundPic} />
                </div>
            </div>

        );
    }
}

export default OnClickChangeDog;