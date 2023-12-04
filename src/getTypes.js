import fsp from 'fs/promises';
import async from 'async';

const getTypes = async (paths) => {
    const promises = paths.map((path) => fsp.stat(path)
        .then((stat) => stat.isDirectory())
        .catch(() => null));

    const stats = await Promise.all(promises);
    
    return stats;
};

export default (paths) => {
    getTypes(paths).then((result) => console.log(result));
}
