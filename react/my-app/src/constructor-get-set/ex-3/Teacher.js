import React, { Component } from 'react';
import Person from './Person';

export class Teacher extends Person {

    constructor(name, lastName, age, height, weight, hobby, grades) {
        super(name, lastName, age, height, weight, hobby);
        this._grades = grades;
    }

    get grades() {
        return this._grades;
    }

    set grades(grades) {
        if (grades.length > 1) {
            this._grades = grades;
        }
    }
    
}

export default Teacher;