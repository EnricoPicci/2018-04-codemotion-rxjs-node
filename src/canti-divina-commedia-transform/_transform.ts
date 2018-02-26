
// launch the read-transform-write-log logic reading the block size from command line
//
// npm run tsc
// 

import {readTransformWriteCantiBlocks} from './read-transform-write-canti-blocks';
import {config} from '../config';

const blockSize = process.argv[2] ? parseInt(process.argv[2]) : 100;
const sourceDir = process.argv[3] ? process.argv[3] : config.divinaCommediaCantiDir;

const start = Date.now();
readTransformWriteCantiBlocks(blockSize, sourceDir)
.subscribe(
    undefined,
    err => console.error(err),
    () => {
        const end = Date.now();
        console.log('done');
        console.log('elapsed ' + (end - start));
    }
)

console.log('process.argv[2]', process.argv[2]);
console.log('process.argv', process.argv);
console.log('blockSize', blockSize);
console.log('sourceDir', sourceDir)
