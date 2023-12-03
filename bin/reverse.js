#!/usr/bin/env node

import reverse from '../src/reverse.js';
import path from 'path';

const bulidpath = (filename) => path.resolve(process.cwd(), filename);

const filename = process.argv[2];

reverse(bulidpath(filename));