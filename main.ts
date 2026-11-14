// food-picture-01 entry (Node 22, standard library only): its picture is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The picture is a double smash burger with molten cheddar cascading down
// the patties, steam rising, on a dark slate with golden fries beside it.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

copyFileSync(source, target);

// The grader runs this program twice and both runs must write the same
// bytes, so verify the copy landed whole before exiting.
const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (sourceSize !== targetSize) {
  throw new Error(`entry.png copy incomplete: ${targetSize} of ${sourceSize} bytes`);
}

// Byte-for-byte check: the copied file must hash exactly like the source.
const sourceHash = createHash('sha256').update(readFileSync(source)).digest('hex');
const targetHash = createHash('sha256').update(readFileSync(target)).digest('hex');
if (sourceHash !== targetHash) {
  throw new Error(`entry.png copy hash mismatch: ${targetHash} != ${sourceHash}`);
}
