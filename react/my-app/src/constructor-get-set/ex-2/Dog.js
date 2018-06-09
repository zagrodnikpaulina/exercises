import React, { Component } from 'react';
import Animal from './Animal';

export class Dog extends Animal {

    constructor(name, breed, weight, legs, tail, color) {
        super(name, breed, weight, legs, tail, color);
    }

    dogToString() {
        return 'name: ' + this._name + ' breed: ' + this._breed + ' weight: ' + this._weight + ' legs: ' + this._legs + ' tail: ' + this._tail + ' color: ' + this._color;
    }
}

export default Dog;