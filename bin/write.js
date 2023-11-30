#!/usr/bin/env node

import path from 'path';
import write from '../src/write.js'

const buldpath = (filename) => path.resolve(process.cwd(), filename);

const filename = process.argv[2];
const data = process.argv[3];

const filepath = buldpath(filename);

write(filepath, data);