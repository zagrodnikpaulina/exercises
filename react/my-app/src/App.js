import React, { Component } from 'react';
import './App.css';
import FindMax from './for-if-exercises/ex-1/FindMax';
import CalculateBMI from './for-if-exercises/ex-2/CalculateBMI';
import FindYoungestMan from './for-if-exercises/ex-3/FindYoungestMan';
import PersonCreationComponent from './constructor-get-set/ex-1/PersonCreationComponent';
import CatCreationComponent from './constructor-get-set/ex-2/CatCreationComponent';
import ButtonComponent from './props-state-exercises/ex-1/ButtonComponent';
import DogCreationComponent from './props-state-exercises/dog-exercises/ex-1/DogCreationComponent';

import puppyShepherdPic from './props-state-exercises/dog-exercises/puppyShepherdPic.jpg';
import midShepherdPic from './props-state-exercises/dog-exercises/midShepherdPic.jpg';
import adultShepherdPic from './props-state-exercises/dog-exercises/adultShepherdPic.jpg';
import puppyLabradorPic from './props-state-exercises/dog-exercises/puppyLabradorPic.jpg';
import midLabradorPic from './props-state-exercises/dog-exercises/midLabradorPic.jpg';
import adultLabradorPic from './props-state-exercises/dog-exercises/adultLabradorPic.jpg';
import puppyPugPic from './props-state-exercises/dog-exercises/puppyPugPic.jpg';
import midPugPic from './props-state-exercises/dog-exercises/midPugPic.jpg';
import adultPugPic from './props-state-exercises/dog-exercises/adultPugPic.jpg';

import OnClickChangeDog from './props-state-exercises/dog-exercises/ex-2/OnClickChangeDog';
import InputComponent from './props-state-exercises/ex-2/InputComponent';
import OnChangeDogComponent from './props-state-exercises/dog-exercises/ex-3/OnChangeDogComponent';

class App extends Component {
  render() {
    return (
      <div>
        <p class="comment">Comment: The goal of the exercises below was to get familiar with ReactJS. They do not concern the use of CSS or the creation of a proper, responsive layout.</p>
        <div class="for-if-exercises">
          <p class="exercises-types">For/if exercises:</p>
          <p class="exercise-number">Ex. 1</p>
          <FindMax />
          <p class="exercise-number">Ex. 2</p>
          <CalculateBMI />
          <p class="exercise-number">Ex. 3</p>
          <FindYoungestMan />
        </div>
        <br />
        <div class="constructor-get-set-exercises">
          <p class="exercises-types">Constructors, getters, setters exercises:</p>
          <p class="exercise-number">Ex. 1</p>
          <PersonCreationComponent />
          <p class="exercise-number">Ex. 2</p>
          <CatCreationComponent />
        </div>
        <br />
        <div class="state-exercises">
          <p class="exercises-types">Props and state exercises:</p>
          <p class="exercise-number">Ex. 1</p>
          <ButtonComponent male={true} />
          <ButtonComponent male={false} />
          <ButtonComponent male={false} />
          <ButtonComponent male={true} />
          <ButtonComponent male={false} />
          <p class="exercise-number">Ex. 2</p>
          <DogCreationComponent src={adultShepherdPic} />
          <p class="exercise-number">Ex. 3</p>
          <OnClickChangeDog puppy={puppyShepherdPic} mid={midShepherdPic} adult={adultShepherdPic} />
          <OnClickChangeDog puppy={puppyLabradorPic} mid={midLabradorPic} adult={adultLabradorPic} />
          <OnClickChangeDog puppy={puppyPugPic} mid={midPugPic} adult={adultPugPic} />
          <p class="exercise-number">Ex. 4</p>
          <InputComponent />
          <p class="exercise-number">Ex. 5</p>
          <OnChangeDogComponent puppy={puppyShepherdPic} mid={midShepherdPic} adult={adultShepherdPic} />
          <OnChangeDogComponent puppy={puppyLabradorPic} mid={midLabradorPic} adult={adultLabradorPic} />
          <OnChangeDogComponent puppy={puppyPugPic} mid={midPugPic} adult={adultPugPic} />

        </div>
      </div>
    );
  }
}

export default App;
