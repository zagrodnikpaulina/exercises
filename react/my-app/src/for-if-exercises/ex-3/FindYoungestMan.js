import React, { Component } from 'react';

export class YoungestMan extends Component {
    render() {

        let people = [
            {
                name: 'Maria',
                age: 11,
                height: 1.65,
                weight: 58
            },
            {
                name: 'Bartek',
                age: 23,
                height: 1.85,
                weight: 80
            },
            {
                name: 'Tomek',
                age: 16,
                height: 1.65,
                weight: 100
            },
            {
                name: 'Marek',
                age: 17,
                height: 1.92,
                weight: 77
            },
            {
            name: 'Halina',
            age: 65,
            height: 1.55,
            weight: 102
            }
        ];

        function findYoungestPersonAge() {
            let youngestPersonAge = people[0].age;
            for (let i = 0; i < people.length; i++) {
                if (youngestPersonAge > people[i].age) {
                    youngestPersonAge = people[i].age;
                }
            }
            return youngestPersonAge;
        }

        function isMan(person) {
            if (person.name.slice(-1) != 'a') {
                return true;
            }
            return false;
        }

        function findYoungestManAge() {
            for (let i = 0; i < people.length; i++) {
                if (isMan(people[i])) {
                    let youngestManAge = people[i].age;
                        if (youngestManAge > people[i+1].age) {
                            youngestManAge = people[i+1].age;
                        }        
            return youngestManAge;
                }
            }
        }
        
        return (
            <div>
                <p>Youngest person's age: {findYoungestPersonAge()}</p>
                <p>Youngest man is: {findYoungestManAge()}</p>
            </div>
        );
    }
}

export default YoungestMan;