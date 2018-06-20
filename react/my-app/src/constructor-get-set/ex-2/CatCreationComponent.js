import React, { Component } from 'react';
import Cat from './Cat';

class CatCreationComponent extends Component {
    render() {
        
        // creating objects for the Cat class
        let zbyszek = new Cat('Filonka', 'alley cat', 4, 4, true, 'black white');
        let rychu = new Cat('Łatka', 'alley cat', 5, 4, true, 'black white'); 
        let koper = new Cat('Koper', 'alley cat', 8, 4, true, 'ginger');
        let teresa = new Cat('Teresa', 'alley cat', 10, 4, true, 'white');
        let filemon = new Cat('Filemon', 'Persian', 7.8, 3, false, 'grey');
        let ramzes = new Cat('Ramzes', 'Sphynx', 2, 4, true, 'pink');

        let cats = [zbyszek, rychu, koper, teresa, filemon, ramzes];

        function talk() {
            let talk = console.log('miau');
        }
        talk();


        function findFattestCat() {
            let fattestCatWeight = cats[0].weight;
            let fattestCat = cats[0];
            for (let i = 0; i < cats.length; i++) {
                if (fattestCatWeight < cats[i].weight) {
                    fattestCatWeight = cats[i].weight;
                    fattestCat = cats[i];
                }
            }
            return fattestCat;
        }

        let fattestCat = findFattestCat();

        function findHealthyCats() {
            let healthyCats = [];
            let unhealthyCats = [];
            for (let i = 0; i < cats.length; i++) {
                if (cats[i].isHealthy()) {
                    healthyCats.push(cats[i]);
                    console.log('Healthy cat: ' +cats[i].name);
                } else {
                    unhealthyCats.push(cats[i]);
                    console.log('Unhealthy cat: '+ cats[i].name);
                }
            }
            return healthyCats;
        }

        findHealthyCats();

        function findObeseCats() {
            let obeseCats = [];
            for (let i = 0; i < cats.length; i++) {
                if (cats[i].isObese()) {
                    obeseCats.push(cats[i]);
                    console.log('Obese cat: ' + cats[i].name);
                }
            }
            return obeseCats;
        }

        findObeseCats();

        return(
            <div>
                <p>Fattest cat's name is {fattestCat.name} and it weighs {fattestCat.weight} kilos.</p>
            </div>
        );
    }
}

export default CatCreationComponent;