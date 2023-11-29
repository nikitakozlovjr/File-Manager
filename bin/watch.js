#!/usr/bin/env node

import path from 'path';
import watch from '../src/watch.js';

const buildpath = (filepath) => path.resolve(process.cwd(), filepath);

const firstArgument = process.argv[2]; 
const secondArgument = process.argv[3];
const thirdArgument = process.argv[4];

if(typeof firstArgument !== 'string') {
    throw new Error(`Incorrectly entered path to the file, the path to the file is expected as a string, but is received ${typeof filepath}`);
}
if(isNaN(Number(secondArgument))) {
    throw new Error(`Incorrectly entered interval. Number expected as input`);
}
if(isNaN(Number(thirdArgument))) {
    throw new Error(`Incorrectly entered working time of the module. Number expected as input`);
}

const filepath = buildpath(firstArgument);
const interval = Number(secondArgument);
const timeWork = Number(thirdArgument);

watch(filepath, interval, timeWork);