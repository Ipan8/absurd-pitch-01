# Absurd Micro-Startup Pitch-Off

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Ipan8/absurd-pitch-01/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Ipan8/absurd-pitch-01/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

An absurd micro-startup pitch for the make.fun "Absurd Micro-Startup
Pitch-Off" bounty — one sentence, one startup, zero meetings attended.

## The pitch

> An AI that attends your standup meetings, says 'no blockers' in your voice, and bills you $5 per meeting you skip.

## How it works

Run `main.ts` with Node 22 and it writes the pitch to `/output/entry.txt`:

```sh
node main.ts
```

## Why it works

Standups are the most skippable meeting in modern work, so the winning
startup is the one that skips them for you — and charges you for the
privilege. The product is not the AI; the product is the excuse,
delivered in your own voice, with a $5 invoice on every absence.

## How the code builds it

`main.ts` keeps the pitch in three beats — the stand-in, the
catchphrase, the bill — assembles them into one sentence, guards the
length so it stays a single sentence, and writes it to
`/output/entry.txt`. No deck, no demo, just the pitch.
