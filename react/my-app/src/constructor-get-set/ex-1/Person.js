import React, { Component } from 'react';

export class Person {

    constructor(name, age, height, weight) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._weight = weight;
    }

    get name() {
        // console.log("getting name");
        return this._name;
    }

    set name(name) {
        if (name !== null) {
            // console.log("setting name");
            this._name = name;
        }
    }

    get age() {
        // console.log("getting age");
        return this._age;
    }

    set age(age) {
        if (age > 0) {
            // console.log("setting age");
            this._age = age;
        }
    }

    get height() {
        // console.log("getting height");
        return this._height;
    }

    set height(height) {
        if (height > 0) {
            // console.log("setting height");
            this._height = height;
        }
    }

    get weight() {
        // console.log("getting weight");
        return this._weight;
    }

    set weight(weight) {
        if (weight > 0) {
            // console.log("setting weight");
            this._weight = weight;
        }
    }

    calculateBMI() {
        let personBMI = (this._weight) / (this._height * this._height);
        return personBMI;
    }

    isMan() {
        if (this._name.slice(-1) != 'a') {
            return true;
        }
        return false;
    }

    isElderly() {
        if (this._age > 60) {
            return true;
        }
        return false;
    }
}


export default Person;