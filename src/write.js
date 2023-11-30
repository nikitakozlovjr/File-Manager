import fsp from 'fs/promises';

const write = (filepath, data) => {
    fsp.writeFile(filepath, data).then(() => console.log('Success!'))   
                                 .catch((err) => console.log('Error!', err))
};

export default write;