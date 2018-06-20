import React, { Component } from 'react';

export class Person {

    constructor(name, lastName, age, height, weight, hobby) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._height = height;
        this._weight = weight;
        this._hobby = hobby;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name !== null) {
            this._name = name;
        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        if (lastName !== null) {
            this._lastName = lastName;
        }
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (age > 0) {
            this._age = age;
        }
    }

    get height() {
        return this._height;
    }

    set height(height) {
        if (height > 0) {
            this._height = height;
        }
    }

    get weight() {
        return this._weight;
    }

    set weight(weight) {
        if (weight > 0) {
            this._weight = weight;
        }
    }

    get hobby() {
        return this._hobby;
    }

    set hobby(hobby) {
        this._hobby = hobby;
    }

}

export default Person;