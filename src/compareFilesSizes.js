import fsp from 'fs/promises';
import async from 'async';
import _ from 'lodash';

const compareFilesSizes = async (paths) => {
    const promises = paths.map((path) => fsp.stat(path).then((stat) => {
        return {
            path: path,
            size: stat.size
        }
    }));
    const sizes = await Promise.all(promises);

    return _.maxBy(sizes, function(o) { return o.size}).path;
};

export default (paths) => {
    compareFilesSizes(paths)
        .then((result) => console.log(result))
        .catch((e) => console.log(`Error!\nDouble-check the entered file paths. One of the paths was passed incorrectly or a non-existent path was passed!\n${e}`))
}