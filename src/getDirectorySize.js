import async from 'async';
import path from 'path';
import fsp from 'fs/promises';
import _ from 'lodash';

const getDirectorySize = async (dirpath) => {
    const dirContent = await fsp.readdir(dirpath, 'utf-8');
    const pathContent = dirContent.map((file) => path.join(dirpath, file))
    const promises = pathContent.map((contentPath) => fsp.stat(contentPath));

    const stats = await Promise.all(promises);
    return _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
};

export default (dirpath) => {
    getDirectorySize(dirpath).then((result) => console.log(result))
                             .catch((err) => console.log(`Error!\n${err}`));
}

// getDirectorySize('../__fixtures__').then((result) => console.log(result));