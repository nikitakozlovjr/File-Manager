import fsp from 'fs/promises';
import async from 'async';

const reverse = async (filepath) => {
    const fileContent = await fsp.readFile(filepath, 'utf-8')
                                    .then((content) => content)
                                    .catch((e) => console.log(`Error!\n${e}`));

    const newContent = fileContent.split('').reverse().join('');

    return fsp.writeFile(filepath, newContent)
                                    .then(() => 'Succes!')
                                    .catch((e) => `Error!\n${e}`);
};

export default (filepath) => {
    reverse(filepath).then((result) => console.log(result)).catch((e) => console.log(e));
}