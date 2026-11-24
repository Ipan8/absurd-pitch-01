// Absurd Micro-Startup Pitch-Off — entry generator.
//
// The joke, in one line: standups are the most skippable meeting in
// modern work, so the winning startup is one that skips them for you
// — and then charges you for the privilege of not showing up. The
// product is not the AI. The product is the excuse, delivered in
// your own voice, with a $5 invoice attached to every absence.
//
// This file builds that single-sentence pitch out of its three beats
// (the stand-in, the catchphrase, the bill), sanity-checks the result,
// and writes it to the output file the bounty expects.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The three beats of the pitch, kept separate so each one reads like
// a line of the joke instead of one long string nobody can scan.
const STAND_IN = "An AI that attends your standup meetings";
const CATCHPHRASE = "says 'no blockers' in your voice";
const THE_BILL = "and bills you $5 per meeting you skip";

// Every beat has to pull its weight: an empty beat would leave a
// dangling comma in the middle of the pitch, which reads like the
// startup ran out of funding mid-sentence.
function validateBeats(beats: string[]): void {
  for (const beat of beats) {
    if (beat.trim().length === 0) {
      throw new Error("pitch beat must not be empty");
    }
  }
}

// Stitch the beats together with commas and a full stop. Keeping the
// assembly in its own function means the pitch is built, never pasted.
function assemblePitch(beats: string[]): string {
  return beats.join(", ") + ".";
}

// A one-sentence pitch has to stay one sentence. If a future edit
// ever bloats it past a tweet-sized line, fail loudly instead of
// quietly submitting a paragraph.
function guardPitchLength(pitch: string, maxChars = 200): void {
  if (pitch.length === 0 || pitch.length > maxChars) {
    throw new Error(`pitch must be 1-${maxChars} chars, got ${pitch.length}`);
  }
  if (pitch.split(".").filter(Boolean).length !== 1) {
    throw new Error("pitch must be exactly one sentence");
  }
}

// Where the finished pitch lands. The bounty reads /output/entry.txt,
// so default there; an env override exists only for local testing.
function resolveOutputPath(): string {
  const dir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  return join(dir, "entry.txt");
}

function persistPitch(pitch: string): void {
  const target = resolveOutputPath();
  writeFileSync(target, pitch + "\n", "utf8");
  console.log(`pitch written to ${target}`);
}

function main(): void {
  const beats = [STAND_IN, CATCHPHRASE, THE_BILL];
  validateBeats(beats);
  const pitch = assemblePitch(beats);
  guardPitchLength(pitch);
  persistPitch(pitch);
  // The business model, for the judges: $5 a skipped meeting is
  // cheaper than the hour of your life the standup would have taken.
  console.log(pitch);
}

main();
