import fsp from 'fs/promises';
import path from 'path';
import async from 'async';

const compareFileSizes = async (files) => {
    if (files.length === 0) {
        throw new Error('The array passed to the input is empty!');
    }
    const filepaths = files.map((file) => path.join('../__fixtures__', file));
    const promises = filepaths
        .map((filepath) => fsp.stat(filepath)
            .then((stat) => ({path: filepath, size: stat.size}))
            .catch((err) => ({error: err})));
    const datapath = await Promise.all(promises);
    const result = datapath.sort(function(path1, path2) {
        return path2.size - path1.size;
    });
    return result[0].path;
}

export default compareFileSizes;