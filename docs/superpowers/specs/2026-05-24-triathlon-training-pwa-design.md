# Triathlon Training PWA Design

Date: 2026-05-24

## Goal

Build a personal triathlon training PWA for Moritz. The first version should run on an iPhone as an installable web app and show the training plan from Monday, 2026-05-25 through the A race in Muenster on Sunday, 2026-06-21.

The app is a planning and execution tool first. It should show today's sessions, the weekly structure, detailed workout instructions, mobility/strength work, race preparation tasks, and a simple post-workout check-in. Later versions may add cloud sync, Garmin/Strava imports, and an AI coach chat that can adapt the plan.

## Athlete Context

Moritz is a competitive triathlete focused on sprint and short-course racing.

Current anchors:
- Monday is usually rest day.
- Tuesday often includes an easy run and 20:00 swim training. Tuesday swim is usually a harder session.
- Wednesday is the preferred bike interval day, currently outdoors.
- Thursday 18:00 is athletics club run interval training.
- Friday 17:00 can be a Uni ride, usually 60-80 km, relatively easy.
- Saturday can include swim training at 07:30 or a relaxed swim.
- Sunday is often long ride or bike plus brick run.

Current approximate level:
- Swim: club sessions 3000-3500 m, Garmin pace around 1:40/100 m in training context. 100 m all-out likely around 1:20-1:25. 400 m probably around or just under 1:40/100 m.
- Bike: last Zwift FTP around 243 W at 70 kg, around 3.47 W/kg. Outdoor powermeter planned but not yet available.
- Run: 5 km PB 19:26, goal sub-19. 10 km likely around 40-41 minutes currently, goal sub-40 later. Recent tendon irritation is currently symptom-free. Running resumed around three weeks ago.

Training capacity:
- Standard week: 9-11 h.
- Hard week: 12-14 h occasionally.
- Run volume should initially stay around 24-28 km/week.

## Competition Calendar

- 2026-06-21: Sprint triathlon Muenster, A race, 500 m open-water canal swim, 20 km no-draft bike, 5 km run.
- 2026-07-04: 5 km track race, personal best goal.
- 2026-07-12: Sprint triathlon Verl.
- 2026-08-09: Sprint triathlon Rheine.
- 2026-09-13: Run and Roll 10 km, personal best goal.
- 2026-09-26: Bergstiegelauf 10 km.

## Training Principles

Use current short-course triathlon and endurance training principles:
- Keep most training controlled and aerobic, with targeted quality sessions.
- Avoid stacking too much high intensity across swim, bike, and run.
- Use race-specific work before Muenster: no-draft bike pacing, short brick runs, 5 km run feel, swim start/rhythm work, and transition preparation.
- Preserve intensity during taper while reducing volume.
- Use subjective feedback after sessions to detect fatigue and guide adjustments.

The first version does not need automatic training changes. It should prepare for them by storing check-ins.

## Version 1 Product Scope

The PWA should include:
- Today screen with all sessions planned for the current day.
- Multiple sessions per day.
- Week view from 2026-05-25 to 2026-06-21.
- Session detail screen with warm-up, main set, cool-down, intensity target, duration, notes, and alternatives.
- Strength and mobility sessions with concrete exercises, sets, reps, and cues.
- Race preparation tasks and Muenster race-day checklist.
- Post-session check-in with:
  - Feeling before or after training, 1-5.
  - RPE, 1-10.
  - Free-text comment.
- Local persistence in the browser for check-ins and session completion.
- Simple adaptive warnings based on logged data, for example:
  - If two consecutive sessions have high RPE relative to plan or low feeling scores, show a "reduce or keep easy" warning for the next day.
  - If the user writes about pain, injury, or excessive fatigue in comments, show a caution note, but do not automatically modify the plan.

The app should not include separate leg/tendon scoring in version 1. Tendon notes can be written in comments.

## Out Of Scope For Version 1

- User accounts.
- Cloud database.
- Garmin, Strava, Zwift, or Apple Health import.
- Push notifications.
- Fully automated plan rewriting.
- AI coach chat inside the app.
- Multi-athlete support.

## Future Scope

Later versions can add:
- Supabase/Postgres cloud storage.
- Login and device sync.
- Garmin/Strava import.
- AI coach chat with access to training plan, history, check-ins, and race goals.
- Plan adaptation proposals requiring user confirmation.
- HRV/sleep/recovery trend integration.
- More detailed zone management for swim pace, run pace/HR, bike watts/HR/RPE.
- Race-specific modules for Verl, Rheine, 5 km track race, and 10 km races.

## UX Structure

Navigation should be simple and mobile-first:
- Today: default landing screen.
- Plan: weekly overview.
- Race: Muenster countdown, checklist, race strategy.
- Log: recent check-ins and completed sessions.

The visual direction should match the approved preview:
- Quiet dark outer UI with high-contrast training cards.
- Today as the main cockpit.
- Cards for each session.
- Tapping a session opens details.
- A clear back action returns to Today or Week.
- Dense enough for training use, but readable on iPhone.

## Data Model

Use static seeded plan data for version 1 and local storage for user logs.

Core entities:
- TrainingDay: date, phase, summary, sessions.
- TrainingSession: id, date, title, discipline, plannedTime, plannedDurationMinutes, intensity, rpeTarget, optional, details, alternatives, checklist.
- WorkoutStep: label, duration or reps, target, notes.
- Exercise: name, sets, reps, load, tempo, rest, cues.
- CheckIn: sessionId, completed, feeling, rpe, comment, timestamp.

## Plan Seed: 2026-05-25 To 2026-06-21

### Week 1: Controlled Build, 2026-05-25 To 2026-05-31

Goal: absorb the previous long week, keep run volume around 25-28 km, set quality without forcing fatigue.

- 2026-05-25 Monday: Rest plus 20-25 min mobility/prehab. Exercises: 90/90 hip switches, couch stretch, ankle rocks, slow calf raises, dead bug, side plank. Optional sauna.
- 2026-05-26 Tuesday: 7-8 km easy run, HR about 135-150, RPE 2-3. Evening club swim at 20:00, 3000-3500 m, hard session but controlled.
- 2026-05-27 Wednesday: Outdoor bike intervals 75-95 min. Warm up 20 min, 3 x 8 min controlled hard at RPE 7/10 with 5 min easy, cool down.
- 2026-05-28 Thursday: Run group, 8-10 km total. Join intervals but keep them controlled. Do not force the final reps.
- 2026-05-29 Friday: Uni ride planned, 60-80 km easy. If tired, reduce to 45-60 min easy or skip.
- 2026-05-30 Saturday: Relaxed swim 2500-3200 m plus 25-35 min strength. Strength: split squat light, step-ups, single-leg RDL light, slow calf raises, Pallof press, side plank.
- 2026-05-31 Sunday: If Friday ride completed, 75-120 min easy bike plus 10-15 min very easy brick run. If Friday ride skipped, 2.5-3 h easy bike plus 10-15 min brick.

### Week 2: Specific Build, 2026-06-01 To 2026-06-07

Goal: strongest specific week before Muenster without excessive run load.

- 2026-06-01 Monday: Rest plus 20 min mobility/prehab.
- 2026-06-02 Tuesday: 8 km easy run, RPE 2-3. Evening club swim quality. Add 6 x 50 m fast start then smooth rhythm if possible.
- 2026-06-03 Wednesday: Bike race-specific session, 90 min. 3 x 10 min RPE 7-8 with 5 min easy. Finish with 4 x 30 s high cadence.
- 2026-06-04 Thursday: Run group quality, 9-10 km total. If choosing your own set, 5-6 x 800 m around 5 km feel with good recovery.
- 2026-06-05 Friday: Uni ride 60-80 km easy.
- 2026-06-06 Saturday: Relaxed swim 2500-3000 m. Add 10 min dry transition routine.
- 2026-06-07 Sunday: Sprint brick. 90-120 min bike with 2 x 12 min sprint-race feel RPE 7-8, then 15-20 min brick run. First 5 min calm, then 8-10 min brisk, cool down.

### Week 3: Sharpening, 2026-06-08 To 2026-06-14

Goal: maintain race-specific sharpness, reduce total load, build freshness.

- 2026-06-08 Monday: Rest plus 15-20 min mobility.
- 2026-06-09 Tuesday: 7-8 km easy with 4 x 20 s relaxed strides. Evening swim quality but not all-out.
- 2026-06-10 Wednesday: Bike short-hard, 75-90 min. 4 x 5 min RPE 8 with 4 min easy. Practice aero-like position on road bike.
- 2026-06-11 Thursday: Reduced run group, 7-9 km total. Cut volume if the session is very hard.
- 2026-06-12 Friday: Uni ride optional-easy, max 60-70 km. If tired, replace with 45 min very easy or rest.
- 2026-06-13 Saturday: Swim 2000-2800 m with 8 x 50 m race-start simulation: 15-20 m fast, rest smooth. Mobility 15 min.
- 2026-06-14 Sunday: Short brick. 75-90 min easy bike with 3 x 3 min race feel, then 10-15 min easy-to-brisk brick run.

### Race Week: 2026-06-15 To 2026-06-21

Goal: arrive fresh and sharp for Muenster. Reduce volume, keep short intensity.

- 2026-06-15 Monday: Rest plus 15-20 min easy mobility.
- 2026-06-16 Tuesday: 6-7 km easy run with 4 x 20 s strides. Controlled swim; do not turn it into a maximal session.
- 2026-06-17 Wednesday: Bike activation 60-70 min with 3 x 3 min race feel. Check position and material.
- 2026-06-18 Thursday: Short run 5-6 km easy with 3 x 1 min brisk at 5 km feel. Do not do a hard run group workout.
- 2026-06-19 Friday: Optional 30-45 min easy bike or rest. No long Uni group ride.
- 2026-06-20 Saturday: Pre-race opener: 15-20 min easy run or 30 min easy bike with 3 short activations. Pack and check race gear.
- 2026-06-21 Sunday: Sprint triathlon Muenster. 500 m swim, 20 km no-draft bike, 5 km run. Warm up calmly. Bike hard but controlled. Start the run under control, then build.

## Race Checklist

Muenster checklist:
- Confirm start time, check-in time, transition opening, and water temperature.
- Confirm whether wetsuit is allowed.
- Pack wetsuit if allowed, tri suit, goggles, spare goggles, cap, towel, helmet, bike shoes, running shoes, race belt, nutrition, bottle, tools, pump, ID/license.
- Practice transition order once in race week.
- Bike check: tires, brakes, gears, chain, bottle mount, number attachment.

## Testing And Verification

Before considering version 1 complete:
- App runs locally.
- Today screen works for dates in the plan.
- Week view shows all sessions through 2026-06-21.
- Session detail opens and returns.
- Check-in saves, reload persists it, and completion state remains.
- Adaptive warning appears for repeated low feeling or high RPE logs.
- Layout is checked in desktop and mobile viewport.
- PWA install metadata exists.

## Open Decisions

- Exact stack confirmation: recommended React + Vite + TypeScript PWA.
- Deployment target for iPhone use: recommended Vercel after local version works.
- Whether to initialize a Git repository in this currently empty folder.
