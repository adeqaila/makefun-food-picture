# food-picture-01 — Make the best-looking food picture (slot 3)

Entry for the make.fun bounty **food-picture-01** ($250, 100 paid places,
deadline Sun 15 Nov 2026 07:00 WIB). Slot 3 — grind of the slot 2 entry
following the makefun-grind + makefun-by-type skills.

## The picture

The same double smash burger as slot 1 and slot 2 (two crispy-edged beef
patties, a thick cascade of molten golden cheddar, glossy toasted brioche
bun, caramelised onions and pickles, golden fries on a dark slate) — with
one more targeted change on top of slot 2's thick steam and butter sheen:
**a long stretchy strand of molten cheddar pulling from the cheese layer
down to the fries, plus even more steam billowing up**. Won a 10-variant
self-judge tournament judged on "which one makes you hungrier?", using the
official judge's criteria order (hungry first, then fresh/real texture,
then styling/light, then craft, then reads-small). It beat steam-sheen
head-to-head in the final and the slot 1 picture on every hunger cue.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` byte-for-byte
to `$MAKEFUN_OUTPUT_DIR/entry.png` and verifies the copy by size and sha256
before exiting, so both grader runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program
- `entry.png` — the picture (JPEG bytes, 1024×672, 198.044 bytes)
- `LICENSE` — MIT
- `.makefun/owner.json` — wallet claim file
