import fsp from 'fs/promises';
import path from 'path';

const write = (file, data) => {
    const filepath = path.join('../__fixtures__', file);
    fsp.writeFile(filepath, data).then(() => console.log('Success!'))   
                                 .catch((err) => console.log('Error!', err))
};

export default write;