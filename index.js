import print from './src/print.js';
import write from './src/write.js';
import compareFileSizes from './src/compareFileSizes.js';
import move from './src/move.js';

compareFileSizes(['file1.txt', 'file2.txt', 'file3.txt']).then((result) => console.log(result));

export {print, write, compareFileSizes, move};
