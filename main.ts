import { mkdirSync, writeFileSync } from "node:fs";

// Absurd Micro-Startup Pitch-Off entry: the pitch is the product.
// One sentence, one absurd micro-startup — an AI standup double.
const entry =
  "An AI that attends your standup meetings, says 'no blockers' in your voice, and bills you $5 per meeting you skip.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log("entry written:", entry);
