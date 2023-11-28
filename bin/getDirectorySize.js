#!/usr/bin/env node

import path from 'path';
import getDirectorySize from '../src/getDirectorySize.js';

const dirname = process.argv[2]; 

const buldpath = (dirname) => {
    if(typeof dirname !== 'string') {
        throw new Error('You did not provide the directory path');
    };

    return path.resolve(process.cwd(), dirname);
}

const dirpath = buldpath(dirname);

getDirectorySize(dirpath);