import React, { Component } from 'react';
import Person from './Person';

class PersonCreationComponent extends Component {
    render() {

        // creating objects for the Person class
        let paulina = new Person('Paulina', 23, 1.65, 58);
        let piotr = new Person('Piotr', 23, 1.85, 80);
        let lamus = new Person('Lamus', 14, 1.60, 98);
        let halina = new Person('Halina', 65, 1.58, 73);
        let marek = new Person('Marek', 89, 1.72, 89);
        let tomek = new Person('Tomek', 17, 1.89, 61);
        let maria = new Person('Maria', 11, 1.63, 56);

        // creating an array of objects from the Person class
        let people = [paulina, piotr, lamus, halina, marek, tomek, maria];

        // invoking methods on objects from the Person class
        lamus.weight = 77; // invoking setter method (nadpisanie weight)
        lamus.weight; // invoking getter method

        // creating functions findMaxBMI(), youngestMan(), shortestMan(), find60+Age()

        function findMaxBMI() {
            let maxBMI = people[0].calculateBMI();
            for (let i = 0; i < people.length - 1; i++) {
                if (maxBMI < people[i + 1].calculateBMI()) {
                    maxBMI = people[i + 1].calculateBMI();
                }
            }
            return maxBMI;
        }

        function findYoungestPerson() {
            let youngestPersonAge = people[0].age;
            let youngestPerson;
            for (let i = 0; i < people.length; i++) {
                if (youngestPersonAge > people[i].age) {
                    youngestPersonAge = people[i].age;
                    youngestPerson = people[i];
                }
            }
            return youngestPerson;
        }

        function findYoungestMan() {
            for (let i = 0; i < people.length; i++) {
                if (people[i].isMan()) {
                    let youngestManAge = people[i].age;
                    let youngestMan;
                    if (youngestManAge > people[i + 1].age) {
                        youngestManAge = people[i + 1].age;
                        youngestMan = people[i + 1];
                    }
                    return youngestMan;
                }
            }
        }

        function findShortestMan() {
            for (let i = 0; i < people.length; i++) {
                if (people[i].isMan()) {
                    let shortestManHeight = people[i].height;
                    let shortestMan;
                    if (shortestManHeight > people[i + 1].height) {
                        shortestManHeight = people[i + 1].height;
                        shortestMan = people[i + 1];
                    }
                    return shortestMan;
                }
            }
        }

        function findElderlyPeople() {
            let elderlyPeople = [];
            for (let i = 0; i < people.length; i++) {
                if (people[i].isElderly()) {
                    elderlyPeople.push(people[i]);
                    console.log(people[i].name);
                }
            }
            return elderlyPeople;
        }

        function findElderlyPeopleNames() {
            let elderlyPeople = findElderlyPeople();

            elderlyPeople.forEach(function (person) {
                return (<p>hihihihi {person.name}</p>)
            });
        }

        return (
            <div>
                <p>Waga lamusa: {lamus.weight}</p>
                <p>Najwyższa wartość BMI: {findMaxBMI()}</p>
                <p>Youngest person is {findYoungestPerson().name} and their age is {findYoungestPerson().age}.</p>
                <p>Youngest man is {findYoungestMan().name} and his age is {findYoungestMan().age}.</p>
                <p>Shortest man is {findShortestMan().name} and his height is {findYoungestMan().height}.</p>
                <p>{findElderlyPeopleNames()}are elderly.</p>
            </div>
        );
    }
}

export default PersonCreationComponent;