import React, { Component } from 'react';
import Dog from './Dog';
// import adultShepherdPic from './adultShepherdPic.jpg';

let componentStyle = {
    border: 'solid 2px',
    borderRadius: '0.5em',
    width: '20em',
    height: '20em',
    margin: '1em',
    display: 'inline-block',
    overflow: 'hidden',
};

let imgStyle = {
    maxWidth: 'auto',
    height: '100%',
    position: 'relative',
    left: '-5em'
};

class DogCreationComponent extends Component {

   
//    W TEN SPOSOB SPROBUJ:
//     constructor(props) {
//         super(props);
//         this.state = { backgroundPic: this.props.puppySrc};
//         this.changeBackgroundPic = this.changeBackgroundPic.bind(this);
//     }

//     changeBackgroundPic() {

//     }

    render() {

        let puppyLabrador = new Dog('labrador', 'puppy', 'puppyLabrador.jpg');
        let midLabrador = new Dog('labrador', 'mid', 'midLabrador.jpg');
        let adultLabrador = new Dog('labrador', 'adult', 'adultLabrador.jpg');

        let puppyShepherd = new Dog('shepherd', 'puppy', 'puppyShepherd.jpg');
        let midShepherd = new Dog('shepherd', 'mid', 'midShepherd.jpg');
        // let adultShepherd = new Dog('shepherd', 'adult', adultShepherdPic);

        let puppyPug = new Dog('pug', 'puppy', 'puppyPug.jpg');
        let midPug = new Dog('pug', 'mid', 'midPug.jpg');
        let adultPug = new Dog('pug', 'adult', 'adultPug.jpg');


        let labradors = [puppyLabrador, midLabrador, adultLabrador];
        // let shepherds = [puppyShepherd, midShepherd, adultShepherd];
        let pugs = [puppyPug, midPug, adultPug];

        

        console.log(this.props.src)
        return (

            <div style={componentStyle}>
                <img style={imgStyle} src={this.props.src} alt="shepherd" />
            </div>

        );
    }
}

export default DogCreationComponent;