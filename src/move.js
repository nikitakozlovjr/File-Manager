import fsp from 'fs/promises';

const move = (outfilepath, intofilepath) => {
    return fsp.readFile(outfilepath, 'utf-8')
        .then((data) => fsp.writeFile(intofilepath, data)
            .then(() => fsp.unlink(outfilepath)
                .then(() => console.log(`Sucess!\nNote that the ${outfilepath} has now been deleted`))
                .catch(() => `Error in deleting file, file ${outfilepath} overwritten in ${intofilepath}, but not deleted`))
            .catch((e) => console.log('Error im writing!', e)))
        .catch((e) => console.log('Error in reading!\n', e));
};

export default move;