#!/usr/bin/env node

import compareFilesSizes from '../src/compareFilesSizes.js';
import path from 'path';

const buildpath = (filname) => path.resolve(process.cwd(), filname);

const paths = process.argv.slice(2);

if(paths.length <= 1) {
    throw new Error('The module does not calculate the result for files less than two. Pass two files (inclusive) to the function');
};

const absPath = paths.map((path) => buildpath(path));

compareFilesSizes(absPath);