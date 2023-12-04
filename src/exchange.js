import fsp from 'fs/promises';
import async from 'async';

const exchange = async (filepaths) => {
    const promises = filepaths.map((filepath) => fsp.readFile(filepath, 'utf-8'));
    const [data1, data2] = await Promise.all(promises);

    const writing1 = fsp.writeFile(filepaths[0], data2);
    const writing2 = fsp.writeFile(filepaths[1], data1);

    return await Promise.all([writing1, writing2]);
};

export default (filepaths) => {
    exchange(filepaths)
        .then(() => console.log('Succes!'))
        .catch((e) => console.log(`Error!\n${e}`));
}