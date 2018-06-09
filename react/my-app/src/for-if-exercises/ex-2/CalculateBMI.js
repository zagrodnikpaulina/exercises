import React, { Component } from 'react';

export class CalculateBMI extends Component {
    render() {

        let person = [
            {
                name: 'Kasia',
                age: 23,
                height: 1.65,
                weight: 58
            },
            {
                name: 'Tomek',
                age: 23,
                height: 1.85,
                weight: 80
            },
            {
                name: 'Marek',
                age: 23,
                height: 1.65,
                weight: 100
            }
        ];
        
        function calculateBMI(weight, height) {
            let personBMI = (weight) / (height * height);
            return personBMI;
        }

        function findMaxBMI() {
            let maxBMI = calculateBMI(person[0].weight, person[0].height);
            for (let i = 0; i < person.length - 1; i++) {
                if (maxBMI < calculateBMI(person[i+1].weight, person[i+1].height)) {
                    maxBMI = calculateBMI(person[i+1].weight, person[i+1].height);
                }
            }
            return maxBMI;
        }

        return (
            <div>
                <p>Najwyższa wartość BMI: {findMaxBMI()}</p>
            </div>
        );
    }
}

export default CalculateBMI;