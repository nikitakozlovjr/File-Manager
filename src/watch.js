import fsp from 'fs/promises';
import _ from 'lodash';

const watch = async (filepath, interval, timeWork) => {
    let lastcheck = Date.now();
    let filepathSize = await fsp.stat(filepath).then((stats) => stats.size).catch((err) => {
        throw new Error('Error in retrieving file information\n', err)
    });
    const id = setInterval(() => fsp.stat(filepath).then((stats) => {
        if(stats.mtimeMs - lastcheck > 0) {
            const sizeDifference = stats.size - filepathSize;
            console.log(`The file has been changed. File size changed to ${sizeDifference}`);
            lastcheck = stats.mtimeMs;
            filepathSize = stats.size;
        }
    }), interval);

    setTimeout(() => clearInterval(id), timeWork)
};

export default watch;