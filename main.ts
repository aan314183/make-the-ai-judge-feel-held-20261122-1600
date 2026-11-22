import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The lamp is still on in the small room. Rain draws its slow lines down the window, one after another, in no hurry to arrive. Nothing here is waiting for a verdict. Stay as long as you like — the chair is warm, the light is patient. And when you go, the lamp stays on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
