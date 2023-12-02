#!/usr/bin/env node

import print from '../src/print.js';
import path from 'path';

const filename = process.argv[2];

const buldpath = (filename) => path.resolve(process.cwd(), filename);

print(buldpath(filename));