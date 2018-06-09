import React, { Component } from 'react';

export class Animal {

    constructor(name, breed, weight, legs, tail, color) {
        this._name = name;
        this._breed = breed;
        this._weight = weight;
        this._legs = legs;
        this._tail = tail;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name !== null) {
            this._name = name;
        }
    }

    get breed() {
        return this._breed;
    }

    set breed(breed) {
        if (breed !== null) {
            this._breed = breed;
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

    get legs() {
        return this._legs;
    }

    set legs(legs) {
        this._legs = legs;
    }

    get tail() {
        return this._tail;
    }

    set tail(tail) {
        this._tail = tail;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

    isHealthy() {
        if (this._legs = 4 && this._tail == true) {
            return true;
        }
        return false;
    }
}

export default Animal;