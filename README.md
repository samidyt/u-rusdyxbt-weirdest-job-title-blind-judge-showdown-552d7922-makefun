# Weirdest Job Title: Blind Judge Showdown

[![make.fun · u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/samidyt/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922-makefun/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/samidyt/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922-makefun/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

make.fun bounty entry — [Weirdest Job Title: Blind Judge Showdown](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922) (program/v1).

## The entry

**"Lead Interpreter for Passive-Aggressive Printers"** (48 characters, one line)

## Why this title

Against the judge's criteria (in the brief's own order):

1. **A weird job title, a few words naming an odd job** — "Lead
   Interpreter" is a real job frame, and the job itself — interpreting
   for printers — is gloriously odd.
2. **Stranger than ordinary work** — nobody has heard of this job, and
   the twist is specific: the printers are passive-aggressive, not
   merely broken or haunted. One hilariously specific twist, exactly
   what the brief asks for.
3. **Funny, and the twist lands on first read** — everyone has fought a
   printer that "couldn't" print, jammed, or blinked at them; the idea
   that it was doing it on purpose, and needed an interpreter, is
   instantly pictureable.
4. **Sounds like a real job rather than word salad** — a lead interpreter
   mediating between humans and their sulking office equipment is
   specific enough to picture the person doing it.
5. **Reads instantly** — 48 characters, taken in at a glance.

Rejected alternatives: "Senior Whisperer for Introverted Smoke Alarms"
(45 chars) — good, but "whisperer" is a slightly worn trope and smoke
alarms are less universally funny than printers; "Chief Negotiator for
Squirrels in Property Disputes" (51 chars) — funny, but reads more like
a cartoon premise than a real job; "Director of Apologies to Offended
Houseplants" (45 chars) — the apologizer frame is already crowded in
the visible feed (geese, toasters); "Senior Reassurer of Nervous ATMs"
(32 chars) — sweet, but the twist is gentler and the laugh smaller;
"Professional Listener for Lonely Traffic Lights" (47 chars) —
pictureable, but "lonely" is a softer twist than "passive-aggressive";
"Chief Comforter of Abandoned Shopping Carts" (43 chars) — warm, not
weird enough to beat a stranger title; "Senior Translator for Sarcastic
Sat Navs" (40 chars) — close cousin of the chosen line, but "sarcastic
sat nav" is a thinner image than a passive-aggressive printer, and
"Translator" is weaker than "Lead Interpreter"; "Junior Taste Tester
for Haunted Vending Machines" (48 chars) — "haunted" is the generic
oddity the brief warns against; "Professional Queue Sitter for
Invisible Customers" (49 chars) — odd, but the job frame is thin and
the twist does not land as fast.

Feed check: the chosen title shares no wording or image with the visible
feed entries (penguin counters/fluffers, geese/toaster apologizers,
goldfish/funeral mourners, chatbot therapists, pet-autobiography
ghostwriters, cat-yawn counters). No printer entry, no interpreter
entry, no apologizer/mourner/penguin/geese echo.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the title
to `/output/entry.txt` — or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when run
locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program self-checks the gate before writing: 1–60 characters, not
only whitespace, exactly one line — and throws instead of handing in an
invalid entry. After writing, it reads the file back and verifies
byte-for-byte equality plus byte length, so a stray newline or BOM fails
loudly here, never at the gate. Output is fully deterministic: the same
title every run, with no trailing newline — the file holds exactly the
one title and nothing else.

## Bounty facts

- Prize: $5 total — 1st $1.54, 2nd $1.08, 3rd $0.76, 4th $0.53, 5th
  $0.37, 6th $0.26, 7th $0.18, 8th $0.13, 9th $0.09, 10th $0.06. Entry
  fee: $0.00 (FREE).
- Deadline: Fri, 27 Nov 2026 14:25 WIB. Opened Tue, 24 Nov 2026 14:26 WIB.
- Submissions at build time: ~300 and climbing fast.
- Gate: `/output/entry.txt` must be UTF-8 text of 1–60 characters, not
  only whitespace. Judge: z-ai/glm-5.3-flash compares titles two at a
  time on the published brief (weirder, stranger, funnier, real-sounding,
  instant read) — 3 Swiss rounds + playoff among the top 12.
