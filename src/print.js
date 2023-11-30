import fsp from 'fs/promises';

const print = (filepath) => {
    fsp.readFile(filepath, 'utf-8').then((data) => console.log(data))
                                   .catch((e) => console.log('Erorr!\n', e)) 
}

export default print;