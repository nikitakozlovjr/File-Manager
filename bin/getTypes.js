#!/usr/bin/env node

import getTypes from '../src/getTypes.js';
import path from 'path';

const paths = process.argv.slice(2);

const buildpath = (filename) => path.resolve(process.cwd(), filename);

const absPaths = paths.map((path) => buildpath(path));

getTypes(absPaths);