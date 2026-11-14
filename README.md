# food-picture-01 — Make the best-looking food picture

Entry for the make.fun bounty **food-picture-01** ($250, 100 paid places,
deadline Sun 15 Nov 2026 07:00 WIB).

## The picture

A dramatic close-up editorial food photograph of a **double smash burger**:
two crispy-edged beef patties, a thick cascade of molten golden cheddar
dripping down the sides, a glossy toasted brioche bun, caramelised onions
and pickles peeking out, golden fries scattered beside it on a dark slate.
Wisps of steam rise; warm golden side light; one clear focal point that
still reads delicious at ~300 px.

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
- `entry.png` — the picture (1024×683, 999,761 bytes)
- `LICENSE` — MIT
- `.makefun/owner.json` — wallet claim file
