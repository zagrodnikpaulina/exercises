import React, { Component } from 'react';
import Person from './Person';

export class Student extends Person {

    constructor(name, lastName, age, height, weight, hobby, grade) {
        super(name, lastName, age, height, weight, hobby);
        this._grade = grade;
    }

    get grade() {
        return this._grade;
    }

    set grade(grade) {
        if (grade > 0) {
            this._grade = grade;
        }
    }

    isMale() {
        if (this._name.slice(-1) != 'a') {
            // console.log(this._name + ' ' + 'jest facetem');
            return true;
        }
        // console.log(this._name + ' ' + 'nie jest facetem');
        return false;
    }

    isFemale() {
        if (this._name.slice(-1) === 'a') {
            // console.log(this._name + ' ' + 'jest dziewczyna');
            return true;
        }
        // console.log(this._name + ' ' + 'nie jest dziewczyna');
        return false;
    }

}

export default Student;