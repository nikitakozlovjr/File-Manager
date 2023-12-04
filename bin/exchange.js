#!/usr/bin/env node

import exchange from '../src/exchange.js';
import path from 'path';

const buildpath = (filename) => path.resolve(process.cwd(), filename);

const filenames = process.argv.slice(2);

const absPath = filenames.map((filename) => buildpath(filename));

exchange(absPath);