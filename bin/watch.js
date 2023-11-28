#!/usr/bin/env node

import path from 'path';
import watch from '../src/watch.js';

const filepath = process.argv[2]; 
const interval = process.argv[3];
const timeWork = process.argv[4];

if(typeof filepath !== 'string') {
    throw new Error(`Incorrectly entered path to the file, the path to the file is expected as a string, but is received ${typeof filepath}`);
}
if(isNaN(Number(interval))) {
    throw new Error(`Incorrectly entered interval. Number expected as input`);
}
if(isNaN(Number(timeWork))) {
    throw new Error(`Incorrectly entered working time of the module. Number expected as input`);
}

