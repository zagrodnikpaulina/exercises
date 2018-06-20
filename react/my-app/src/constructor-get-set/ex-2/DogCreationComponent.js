import React, { Component } from 'react';
import Dog from './Dog';

class DogCreationComponent extends Component {
    render() {

        // craeting objects for the Dog class
        let max = new Dog('Max', 'German Shepherd', 45, 4, true, 'brown black');
        let sonia = new Dog('Sonia', 'Boxer', 23, 4, false, 'brown');
        let ziomek = new Dog('Ziomek', 'Golden Retriever', 20, 4, true, 'cream');
        let pippi = new Dog('Pippi', 'Miniature Pinscher', 5, 4, false, 'black');
        let ozzy = new Dog('Ozzy', 'Dachshund', 9, 3, false, 'brown');

        // creating an array of objects from the Dog class
        let dogs = [max, sonia, ziomek, pippi, ozzy];

        // invoking methods on objects from the Dog class
        max.weight;
        max.weight = 43;
        max.tail;

        // creating functions

        function talk() {
            console.log('hau');
        }
        talk();


        function findHealthyDogs() {
            let healthyDogs = [];
            let unhealthyDogs = [];
            for (let i = 0; i < dogs.length; i++) {
                if (dogs[i].isHealthy()) {
                    healthyDogs.push(dogs[i]);
                    console.log('Healthy dog: ' + dogs[i].name);
                } else {
                    unhealthyDogs.push(dogs[i]);
                    console.log('Unhealthy dog: ' + dogs[i].name);
                }
            }
            return healthyDogs;
        }

        findHealthyDogs();

        return (
            <div></div>
        );
    }
}

export default DogCreationComponent;