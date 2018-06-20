import React, { Component } from 'react';

export class FindMax extends Component {
    render() {

        let myArray = [1, 7, 8, 3, 4];

        function findMax(myArray) {
            let max = myArray[0];
            for (let i = 0; i < myArray.length - 1; i++) {
                if (max < myArray[i + 1]) {
                    max = myArray[i + 1];
                }
            }
            return max;
        }

        return (
            <div>
                <p>Najwyższa wartość szeregu: {findMax(myArray) }</p>
            </div>
        );
    }
}


export default FindMax;