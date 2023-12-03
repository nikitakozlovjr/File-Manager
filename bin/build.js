#!/usr/bin/env node

import build from '../src/build.js';
import path from 'path';

const buildpath = (filename) => path.resolve(process.cwd(), filename);

const filename = process.argv[2];

build(buildpath(filename));