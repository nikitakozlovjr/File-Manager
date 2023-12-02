#!/usr/bin/env node

import move from '../src/move.js';
import path from 'path';

const outfile = process.argv[2];
const intofile = process.argv[3];

const buldpath = (filename) => path.resolve(process.cwd(), filename);
const [outfilepath, intofilepath] = [outfile, intofile].map((file) => buldpath(file));

move(outfilepath, intofilepath);