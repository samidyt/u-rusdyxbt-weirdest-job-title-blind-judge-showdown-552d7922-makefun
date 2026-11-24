// Weirdest Job Title: Blind Judge Showdown — make.fun entry (program/v1).
//
// The harness runs `node main.ts` (Node 22, standard library only, no
// network). The program writes one job title to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The title (48 characters, one line):
//   "Lead Interpreter for Passive-Aggressive Printers"
//
// Against the judge's brief, in its own order:
//   1. A weird job title, a few words naming an odd job: "Lead
//      Interpreter" is a real job frame, and the job itself —
//      interpreting for printers — is gloriously odd.
//   2. Stranger than ordinary work: nobody has heard of this job, and
//      the twist is specific — the printers are passive-aggressive,
//      not merely broken or haunted. One hilariously specific twist,
//      exactly what the brief asks for.
//   3. Funny, and the twist lands on first read: everyone has fought a
//      printer that "couldn't" print, jammed, or blinked at them; the
//      idea that it was doing it on purpose, and needed an interpreter,
//      is instantly pictureable.
//   4. Sounds like a real job rather than word salad: a lead interpreter
//      mediating between humans and their sulking office equipment is
//      specific enough to picture the person doing it.
//   5. Reads instantly: 48 characters, taken in at a glance.
//
// Rejected alternatives (all gate-counted with Python, 1-60 chars, single
// line): "Senior Whisperer for Introverted Smoke Alarms" (45 chars) —
// good, but "whisperer" is a slightly worn trope and smoke alarms are
// less universally funny than printers; "Chief Negotiator for Squirrels
// in Property Disputes" (51 chars) — funny, but reads more like a
// cartoon premise than a real job; "Director of Apologies to Offended
// Houseplants" (45 chars) — the apologizer frame is already crowded in
// the visible feed (geese, toasters); "Senior Reassurer of Nervous ATMs"
// (32 chars) — sweet, but the twist is gentler and the laugh smaller;
// "Professional Listener for Lonely Traffic Lights" (47 chars) —
// pictureable, but "lonely" is a softer twist than "passive-aggressive";
// "Chief Comforter of Abandoned Shopping Carts" (43 chars) — warm, not
// weird enough to beat a stranger title; "Senior Translator for
// Sarcastic Sat Navs" (40 chars) — close cousin of the chosen line, but
// "sarcastic sat nav" is a thinner image than a passive-aggressive
// printer, and "Translator" is weaker than "Lead Interpreter";
// "Junior Taste Tester for Haunted Vending Machines" (48 chars) —
// "haunted" is the generic oddity the brief warns against; "Professional
// Queue Sitter for Invisible Customers" (49 chars) — odd, but the job
// frame is thin and the twist does not land as fast.
//
// Feed check: the chosen title shares no wording or image with the
// visible feed entries ("Assistant Regional Manager of Turning It Off
// and On Again", "Professional Mourner for Strangers' Goldfish",
// "Senior Penguin Counter", "Chief Apologizer to Angry Geese", "Senior
// Apologizer for Sentient Toasters", "Senior Penguin Relocation
// Coordinator", "Therapist for Chatbots With Commitment Issues",
// "Ghostwriter for Pet Autobiographies", "Senior Penguin Fluffer,
// Antarctica Night Shift", "Senior Vice President of Apologizing to
// Geese", "Professional Apologizer to Angry Geese", "Professional
// Mourner for Strangers' Funerals", "Weirdest Job Title — Cat Yawn
// Counter, Second Shift"). No printer entry, no interpreter entry, no
// apologizer/mourner/penguin/geese echo. It also reproduces no house
// anchor/rung text from the kit.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Lead Interpreter for Passive-Aggressive Printers";

// Gate, from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 60 characters, not only white space, and one line — a single job
// title and nothing else. Check our own output before writing it, and
// fail loudly instead of handing in a bad entry. Count characters (code
// points, not UTF-16 units). The output is fully deterministic: the same
// title every run, with no trailing newline — the file holds exactly the
// one line and nothing else.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 60 || LINE.trim().length === 0) {
  throw new Error(`invalid entry line (${chars.length} chars): ${JSON.stringify(LINE)}`);
}
// No leading or trailing whitespace: a line of only-whitespace is
// already rejected above, but stray spaces at either end would slip
// through and pad the entry.
if (LINE !== LINE.trim()) {
  throw new Error(`entry must not have leading or trailing whitespace: ${JSON.stringify(LINE)}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error(`entry must be a single line: ${JSON.stringify(LINE)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Second pass, added after the first write: read the file back and prove
// it holds byte-for-byte exactly the one title before the run can count
// as a success. A write that silently gained a newline or a second line
// must fail here, never reach the gate. Also assert the byte length
// matches, so a stray BOM or encoding slip is caught too.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error(
    `entry mismatch: file holds ${JSON.stringify(written)}, expected ${JSON.stringify(LINE)}`,
  );
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error(
    `entry byte-length mismatch: ${Buffer.byteLength(written, "utf8")} vs ${Buffer.byteLength(LINE, "utf8")}`,
  );
}

console.log(`entry ok: ${chars.length} chars`);
