//var generateName = require('sillyname');
//lo de abajo (ECS) reemplaza a lo de arriba (CJS)
    // import generateName from 'sillyname';
    // var sillyName = generateName();

import superheroes, { randomSuperhero } from 'superheroes';
// import {randomSuperhero} from 'superheroes';

const name = randomSuperhero();

console.log(`My name is ${name}`);