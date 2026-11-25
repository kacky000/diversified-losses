// One crypto trading joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "My crypto portfolio is finally diversified: I now lose money in eleven different coins.";
const limit = 199;

if ([...joke].length > limit) throw new Error("joke is 200 characters or more");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke);
