import fsp from 'fs/promises';
import { constants } from 'node:fs/promises';

const build = (filepath) => fsp.access(filepath, constants.F_OK)
    .catch((__err) => fsp.writeFile(filepath, ''));


export default (filepath) => {
    build(filepath).then(() => console.log('Succes!'));
}