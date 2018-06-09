import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';

class AnimalCreationComponent extends Component {
    render() {

        let zbyszek = new Cat('Filonka', 'alley cat', 4, 4, true, 'black white');
        let rychu = new Cat('Łatka', 'alley cat', 5, 4, true, 'black white');
        let koper = new Cat('Koper', 'alley cat', 8, 4, true, 'ginger');
        let teresa = new Cat('Teresa', 'alley cat', 10, 4, true, 'white');
        let filemon = new Cat('Filemon', 'Persian', 7.8, 3, false, 'grey');
        let ramzes = new Cat('Ramzes', 'Sphynx', 2, 4, true, 'pink');

        let max = new Dog('Max', 'German Shepherd', 45, 4, true, 'brown black');
        let sonia = new Dog('Sonia', 'Boxer', 23, 4, false, 'brown');
        let ziomek = new Dog('Ziomek', 'Golden Retriever', 20, 4, true, 'cream');
        let pippi = new Dog('Pippi', 'Miniature Pinscher', 5, 4, false, 'black');
        let ozzy = new Dog('Ozzy', 'Dachshund', 9, 3, false, 'brown');

        let animals = [zbyszek, max, rychu, sonia, koper, ziomek, teresa, pippi, filemon, ozzy, ramzes];

        function isCat(animal) {
            if (animal instanceof Cat) {
                return true;
            }
            return false;
        }

        function findCats() {
            let cats = [];
            for (let i = 0; i < animals.length; i++) {
                if (isCat(animals[i])) {
                    cats.push(animals[i]);
                    console.log(animals[i].catToString());
                }
            }
            console.log( cats);
            return cats;
        }

        function findFattestCat() {
            let cats = findCats();
            let fattestCat = cats[0];
            for (let i = 0; i < cats.length; i++) {
                if (fattestCat.weight < cats[i].weight) {
                    fattestCat = cats[i];
                    console.log('Fattest cat: ' + cats[i].name);
                }
            }
            return cats;
        }
        findFattestCat();

        return (
            <div></div>
        );
    }
}

export default AnimalCreationComponent;