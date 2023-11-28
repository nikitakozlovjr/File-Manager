import fsp from 'fs/promises';
import path from 'path';

const print = (file) => {
    const filepath = path.join('../__fixtures__', file);
    fsp.readFile(filepath, 'utf-8').then((data) => console.log(data))
                                   .catch((e) => console.log('Erorr!\n', e)) 
}

export default print;