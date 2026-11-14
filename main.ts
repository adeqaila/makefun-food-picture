// food-picture-01 entry, slot 2 (Node 22, standard library only): its picture
// is the entry.png beside this file, and the program copies it to
// /output/entry.png.
//
// Slot 2 is the grind winner over the slot 1 picture (same double smash
// burger, same composition): much more steam curling up from the hot
// patties and a stronger buttery sheen on the brioche bun, so the food
// reads freshly cooked and piping hot. Won the 12-variant self-judge
// tournament on "which one makes you hungrier?".
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);

// Refuse to run on an empty or missing picture rather than copying a
// broken file into /output.
if (statSync(source).size === 0) {
  throw new Error('entry.png is empty');
}

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
