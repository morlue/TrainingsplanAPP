# Triathlon Training PWA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an installable mobile-first PWA that shows Moritz's triathlon plan from 2026-05-25 through Muenster on 2026-06-21, with daily sessions, detailed workouts, race checklist, and local check-ins.

**Architecture:** Use a dependency-free static PWA so it can run locally and deploy cleanly on Vercel without a build step. Store the seeded plan in JavaScript and persist user check-ins/completion state in `localStorage`. Keep the UI as one small client app with hash-based navigation between Today, Plan, Race, and Log.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Web App Manifest, Service Worker, Vercel static hosting.

---

### Task 1: Project Skeleton And PWA Metadata

**Files:**
- Create: `index.html`
- Create: `manifest.webmanifest`
- Create: `sw.js`
- Create: `icons/app-icon.svg`
- Create: `package.json`
- Create: `vercel.json`

- [ ] **Step 1: Create the HTML shell**

Create `index.html` with root containers, mobile viewport, manifest link, service worker registration hook, and references to `styles.css` and `app.js`.

- [ ] **Step 2: Create install metadata**

Create `manifest.webmanifest` with app name, short name, standalone display mode, theme colors, and SVG icon references.

- [ ] **Step 3: Create the service worker**

Create `sw.js` with cache-first handling for core app shell assets and network fallback for navigation requests.

- [ ] **Step 4: Create Vercel/static package metadata**

Create `package.json` with `start`, `serve`, and `test` scripts. Create `vercel.json` for static rewrites to `index.html`.

### Task 2: Training Plan Data And Storage

**Files:**
- Create: `app.js`

- [ ] **Step 1: Define seeded training data**

Create plan objects for each day from 2026-05-25 to 2026-06-21. Include sessions, details, workout steps, exercise lists, alternatives, checklist items, discipline, intensity, optional status, planned duration, and target RPE.

- [ ] **Step 2: Define local storage helpers**

Implement `loadState`, `saveState`, `getSessionLog`, `updateSessionLog`, and `getWarnings`. Store logs under `triathlon-pwa-state-v1`.

- [ ] **Step 3: Define date helpers**

Implement `todayIso`, `formatDate`, `getSelectedDate`, and date selection behavior. Default to the real current date when within the plan, otherwise default to 2026-05-25 for easier testing after the plan window.

### Task 3: Mobile App UI

**Files:**
- Create: `styles.css`
- Modify: `app.js`

- [ ] **Step 1: Implement layout and navigation**

Create a mobile-first app shell with top status, tabs for Today, Plan, Race, and Log, and a detail overlay for sessions.

- [ ] **Step 2: Implement Today view**

Show all sessions for the selected day, daily summary, load hints, completed state, and adaptive warning if check-ins suggest reducing load.

- [ ] **Step 3: Implement Week/Plan view**

Group days by week and show session chips with discipline, optional status, and completion state.

- [ ] **Step 4: Implement Session detail view**

Show warm-up/main/cool-down steps, target intensity, notes, alternatives, exercises, checklist items, and a check-in form with completed, feeling, RPE, and comment.

- [ ] **Step 5: Implement Race and Log views**

Show Muenster countdown, race checklist, strategy notes, and recent check-ins.

### Task 4: Verification And GitHub Setup

**Files:**
- Create: `scripts/verify-static.mjs`

- [ ] **Step 1: Add static verification script**

Create a Node script that checks required files exist, validates JSON files, checks every session has an id/title/date/discipline, and ensures service worker references core assets.

- [ ] **Step 2: Run verification**

Run `npm test` and expect a passing static verification.

- [ ] **Step 3: Browser verification**

Run the app locally, open it in the browser, verify mobile and desktop layout, open a session detail, save a check-in, reload, and confirm persistence.

- [ ] **Step 4: Initialize Git and connect remote**

Initialize Git if needed, add remote `https://github.com/morlue/TrainingsplanAPP.git`, commit the app, and push to `main`.

## Self-Review

Spec coverage:
- Today screen: Task 3.
- Multiple sessions per day: Task 2 and Task 3.
- Week view through Muenster: Task 2 and Task 3.
- Session details: Task 2 and Task 3.
- Strength/mobility details: Task 2 and Task 3.
- Race checklist: Task 2 and Task 3.
- Check-in with feeling, RPE, comment: Task 2 and Task 3.
- No separate tendon field: Task 3 check-in fields exclude it.
- Local persistence: Task 2 and Task 4.
- Adaptive warnings: Task 2 and Task 3.
- PWA install metadata: Task 1.

Placeholder scan: no TBD/TODO/FIXME placeholders are used as requirements.

Type consistency:
- `TrainingSession`, `WorkoutStep`, `Exercise`, and `CheckIn` fields match the design spec.
