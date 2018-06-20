import React, { Component } from 'react';
import Animal from './Animal';

export class Cat extends Animal {

    constructor(name, breed, weight, legs, tail, color) {
        super(name, breed, weight, legs, tail, color);
    }

    isObese() {
        if (this._weight > 7) {
            console.log('obese');
            return true;
        }
        return false;
    }
    
    catToString() {
        return 'name: ' + this._name + ' breed: '  + this._breed + ' weight: ' + this._weight + ' legs: ' + this._legs + ' tail: ' + this._tail + ' color: ' + this._color;
    }
}

export default Cat;