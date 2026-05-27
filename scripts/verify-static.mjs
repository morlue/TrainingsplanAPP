import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import vm from "node:vm";

const requiredFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "sw.js",
  "manifest.webmanifest",
  "icons/app-icon.svg",
  "vercel.json"
];

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

JSON.parse(await readFile("manifest.webmanifest", "utf8"));
JSON.parse(await readFile("vercel.json", "utf8"));

const appJs = await readFile("app.js", "utf8");
const context = {
  window: {
    addEventListener() {},
    location: { hash: "#today" }
  },
  navigator: {},
  location: { hash: "#today", href: "http://localhost/", search: "" },
  history: { pushState() {} },
  localStorage: {
    getItem() {
      return null;
    },
    setItem() {}
  },
  Intl,
  Date,
  URL,
  URLSearchParams,
  console
};

vm.createContext(context);
vm.runInContext(appJs, context);

const plan = context.window.TRAINING_PLAN;
if (!Array.isArray(plan)) {
  throw new Error("Training plan was not exposed on window.TRAINING_PLAN");
}

if (plan[0]?.date !== "2026-05-25" || plan.at(-1)?.date !== "2026-06-21") {
  throw new Error("Plan does not cover 2026-05-25 through 2026-06-21");
}

const sessionIds = new Set();
for (const day of plan) {
  if (!day.date || !day.phase || !day.summary || !Array.isArray(day.sessions)) {
    throw new Error(`Invalid day shape for ${JSON.stringify(day)}`);
  }
  if (!day.sessions.length) {
    throw new Error(`No sessions for ${day.date}`);
  }
  for (const session of day.sessions) {
    for (const key of ["id", "title", "discipline", "duration", "intensity", "rpe"]) {
      if (!session[key]) {
        throw new Error(`Session missing ${key}: ${JSON.stringify(session)}`);
      }
    }
    if (sessionIds.has(session.id)) {
      throw new Error(`Duplicate session id: ${session.id}`);
    }
    sessionIds.add(session.id);
    if (!Array.isArray(session.steps) || session.steps.length === 0) {
      throw new Error(`Session has no steps: ${session.id}`);
    }
    if (["Bike", "Brick", "Race"].includes(session.discipline) && !session.power) {
      throw new Error(`Bike-related session has no power target: ${session.id}`);
    }
  }
}

const sw = await readFile("sw.js", "utf8");
for (const asset of ["/index.html", "/styles.css", "/app.js", "/manifest.webmanifest"]) {
  if (!sw.includes(asset)) {
    throw new Error(`Service worker does not cache ${asset}`);
  }
}

console.log(`Static verification passed: ${plan.length} days, ${sessionIds.size} sessions.`);
