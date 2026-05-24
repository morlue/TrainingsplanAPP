const STORAGE_KEY = "triathlon-pwa-state-v1";
const PLAN_START = "2026-05-25";
const PLAN_END = "2026-06-21";

const raceChecklist = [
  "Startzeit, Check-in und Wechselzonen-Oeffnung pruefen",
  "Wassertemperatur und Neo-Erlaubnis pruefen",
  "Neo, Trisuit, Brille, Ersatzbrille, Kappe einpacken",
  "Helm, Radschuhe, Laufschuhe, Race Belt, Nummernbefestigung einpacken",
  "Flasche, kleine Verpflegung, Pumpe, Werkzeug, Lizenz/ID einpacken",
  "Reifendruck, Bremsen, Schaltung, Kette und Flaschenhalter pruefen",
  "Wechselablauf einmal trocken durchgehen"
];

const PLAN = [
  day("2026-05-25", "Controlled Build", "Restday nach langer Woche. Frische sichern, Beweglichkeit und Prehab.", [
    session({
      id: "2026-05-25-mobility",
      title: "Rest + Mobility",
      discipline: "Mobility",
      time: "frei",
      duration: 25,
      intensity: "Sehr locker",
      rpe: "1-2",
      steps: [
        step("90/90 Hip Switches", "2 x 8/Seite", "kontrolliert"),
        step("Couch Stretch", "2 x 45 s/Seite", "Hüftbeuger locker"),
        step("Ankle Rocks", "2 x 12/Seite", "Sprunggelenk mobil"),
        step("Calf Raises langsam", "3 x 12", "3 s ablassen"),
        step("Dead Bug", "3 x 8/Seite", "Rumpf ruhig"),
        step("Side Plank", "2 x 30-45 s/Seite", "sauber halten")
      ],
      notes: ["Optional Sauna. Kein hartes Beintraining."]
    })
  ]),
  day("2026-05-26", "Controlled Build", "Easy Lauf plus hartes Vereinsschwimmen. Der Lauf bleibt wirklich easy.", [
    session({
      id: "2026-05-26-run",
      title: "Easy Run",
      discipline: "Run",
      time: "mittags",
      duration: 45,
      intensity: "Easy",
      rpe: "2-3",
      steps: [
        step("Einlaufen", "10 min", "sehr locker"),
        step("Dauerlauf", "7-8 km gesamt", "HF ca. 135-150, Pace zweitrangig"),
        step("Auslaufen", "5 min", "locker")
      ],
      notes: ["Wenn die Beine schwer sind, bei 7 km stoppen."]
    }),
    session({
      id: "2026-05-26-swim",
      title: "Vereinsschwimmen",
      discipline: "Swim",
      time: "20:00",
      duration: 75,
      intensity: "Qualitaet",
      rpe: "6-8",
      steps: [
        step("Vereinsprogramm", "3000-3500 m", "hart, aber technisch sauber"),
        step("Kontrolle", "durchgehend", "nicht jedes Set all-out schwimmen")
      ],
      notes: ["Dienstag ist meist die haertere Schwimmeinheit. Fokus Rhythmus und Wasserlage."]
    })
  ]),
  day("2026-05-27", "Controlled Build", "Radqualitaet draussen ohne Powermeter: kontrolliert hart, nicht maximal.", [
    session({
      id: "2026-05-27-bike",
      title: "Bike Intervalle draussen",
      discipline: "Bike",
      time: "flexibel",
      duration: 90,
      intensity: "Schwelle kontrolliert",
      rpe: "7",
      steps: [
        step("Einrollen", "20 min", "locker, hohe Trittfrequenz"),
        step("Intervall 1", "8 min", "RPE 7/10, stabiler Druck"),
        step("Erholung", "5 min", "sehr locker"),
        step("Intervall 2", "8 min", "gleichmaessig, nicht jagen"),
        step("Erholung", "5 min", "sehr locker"),
        step("Intervall 3", "8 min", "sauber zu Ende fahren"),
        step("Ausfahren", "20-30 min", "locker")
      ],
      alternatives: ["Bei Muedigkeit: 60 min locker rollen und Intervalle streichen."]
    })
  ]),
  day("2026-05-28", "Controlled Build", "Laufgruppe als kontrollierter Qualitaetsreiz.", [
    session({
      id: "2026-05-28-run",
      title: "Laufgruppe Intervalle",
      discipline: "Run",
      time: "18:00",
      duration: 70,
      intensity: "Kontrolliert hart",
      rpe: "6-8",
      steps: [
        step("Warm-up", "15 min", "locker + Lauf-ABC"),
        step("Gruppenprogramm", "8-10 km gesamt", "letzte Wiederholungen nicht erzwingen"),
        step("Cool-down", "10 min", "locker")
      ],
      notes: ["Wenn das Programm sehr hart ist, Umfang reduzieren."]
    })
  ]),
  day("2026-05-29", "Controlled Build", "Uni-Ride als aerober Umfang, keine Gruppenrennen.", [
    session({
      id: "2026-05-29-bike",
      title: "Uni-Ride",
      discipline: "Bike",
      time: "17:00",
      duration: 150,
      intensity: "Locker aerob",
      rpe: "3-4",
      optional: true,
      steps: [
        step("Gruppenausfahrt", "60-80 km", "ruhig mitfahren"),
        step("Pacing-Regel", "durchgehend", "keine Attacken, keine Zusatzintervalle")
      ],
      alternatives: ["Bei schwerer Muedigkeit: 45-60 min locker oder frei."]
    })
  ]),
  day("2026-05-30", "Controlled Build", "Lockeres Schwimmen plus kurzer Kraftblock.", [
    session({
      id: "2026-05-30-swim",
      title: "Locker Schwimmen",
      discipline: "Swim",
      time: "07:30 oder frei",
      duration: 60,
      intensity: "Technik/Aerob",
      rpe: "3-4",
      steps: [
        step("Einschwimmen", "400 m", "ruhig"),
        step("Technik", "8 x 50 m", "saubere Wasserlage"),
        step("Aerob", "1200-1800 m", "gleichmaessig"),
        step("Ausschwimmen", "200 m", "locker")
      ],
      notes: ["Gesamt 2500-3200 m, je nach Vereinsprogramm."]
    }),
    session({
      id: "2026-05-30-strength",
      title: "Kraft kurz",
      discipline: "Strength",
      time: "nachmittags",
      duration: 35,
      intensity: "Stabilitaet",
      rpe: "4-5",
      steps: [
        step("Split Squat leicht", "2-3 x 8/Seite", "kontrolliert"),
        step("Step-ups", "2 x 8/Seite", "explosiv hoch, ruhig runter"),
        step("Single-leg RDL leicht", "2 x 8/Seite", "Huefte stabil"),
        step("Calf Raises langsam", "3 x 12", "nicht bis Anschlag"),
        step("Pallof Press", "3 x 10/Seite", "Rumpf stabil"),
        step("Side Plank", "2 x 30-45 s/Seite", "sauber")
      ],
      notes: ["Keine Muskelzerstoerung. Ziel ist Robustheit, nicht DOMS."]
    })
  ]),
  day("2026-05-31", "Controlled Build", "Ausdauer und kurzer Koppellauf, abhaengig vom Freitag.", [
    session({
      id: "2026-05-31-brick",
      title: "Bike + kurzer Brick",
      discipline: "Brick",
      time: "vormittags",
      duration: 135,
      intensity: "Locker bis steady",
      rpe: "3-5",
      steps: [
        step("Bike Option A", "75-120 min", "wenn Freitag Uni-Ride gemacht"),
        step("Bike Option B", "2.5-3 h", "wenn Freitag kein Ride"),
        step("Koppellauf", "10-15 min", "sehr locker, gute Technik")
      ],
      notes: ["Nicht als Haertetest fahren. Der Lauf ist nur ein Umstellungsreiz."]
    })
  ]),
  day("2026-06-01", "Specific Build", "Restday und Prehab vor der staerksten spezifischen Woche.", [
    session({
      id: "2026-06-01-mobility",
      title: "Rest + Mobility",
      discipline: "Mobility",
      time: "frei",
      duration: 20,
      intensity: "Sehr locker",
      rpe: "1-2",
      steps: [
        step("Ankle Rocks", "2 x 12/Seite", "locker"),
        step("Couch Stretch", "2 x 45 s/Seite", "locker atmen"),
        step("Calf Raises langsam", "2 x 12", "kontrolliert"),
        step("Dead Bug", "3 x 8/Seite", "Rumpf ruhig")
      ]
    })
  ]),
  day("2026-06-02", "Specific Build", "Easy Lauf plus Qualitaets-Schwimmen mit Start-Reizen.", [
    session({
      id: "2026-06-02-run",
      title: "Easy Run",
      discipline: "Run",
      time: "mittags",
      duration: 45,
      intensity: "Easy",
      rpe: "2-3",
      steps: [
        step("Dauerlauf", "8 km", "ruhig, HF/RPE vor Pace"),
        step("Optional", "4 x 15 s", "lockere Steigerungen, nur wenn frisch")
      ]
    }),
    session({
      id: "2026-06-02-swim",
      title: "Vereinsschwimmen + Startreiz",
      discipline: "Swim",
      time: "20:00",
      duration: 75,
      intensity: "Qualitaet",
      rpe: "6-8",
      steps: [
        step("Vereinsprogramm", "3000-3500 m", "sauber mitgehen"),
        step("Wenn moeglich", "6 x 50 m", "15 m schnell starten, Rest Rhythmus")
      ]
    })
  ]),
  day("2026-06-03", "Specific Build", "Radspezifisch fuer 20 km no-draft.", [
    session({
      id: "2026-06-03-bike",
      title: "Bike Race-Specific",
      discipline: "Bike",
      time: "flexibel",
      duration: 90,
      intensity: "Race steady",
      rpe: "7-8",
      steps: [
        step("Einrollen", "20 min", "locker"),
        step("3 x 10 min", "RPE 7-8", "5 min locker dazwischen"),
        step("4 x 30 s", "hohe Kadenz", "volle Kontrolle, viel Pause"),
        step("Ausfahren", "15-20 min", "locker")
      ],
      notes: ["Auf dem Rennrad eine tiefe, stabile Position ueben."]
    })
  ]),
  day("2026-06-04", "Specific Build", "5-km-spezifische Laufqualitaet, aber kontrolliert.", [
    session({
      id: "2026-06-04-run",
      title: "Laufgruppe Qualitaet",
      discipline: "Run",
      time: "18:00",
      duration: 75,
      intensity: "5-km-Gefuehl",
      rpe: "7-8",
      steps: [
        step("Warm-up", "15 min", "locker + Lauf-ABC"),
        step("Option eigenes Set", "5-6 x 800 m", "5-km-Gefuehl, gute Pausen"),
        step("Cool-down", "10 min", "locker")
      ],
      notes: ["Gesamt 9-10 km. Nicht sprinten."]
    })
  ]),
  day("2026-06-05", "Specific Build", "Uni-Ride locker halten.", [
    session({
      id: "2026-06-05-bike",
      title: "Uni-Ride",
      discipline: "Bike",
      time: "17:00",
      duration: 150,
      intensity: "Locker aerob",
      rpe: "3-4",
      optional: true,
      steps: [
        step("Gruppenausfahrt", "60-80 km", "locker"),
        step("Kontrolle", "durchgehend", "nicht hinten raus eskalieren")
      ]
    })
  ]),
  day("2026-06-06", "Specific Build", "Schwimmen locker und Wechselroutine.", [
    session({
      id: "2026-06-06-swim",
      title: "Locker Schwimmen",
      discipline: "Swim",
      time: "07:30 oder frei",
      duration: 60,
      intensity: "Locker/Technik",
      rpe: "3-4",
      steps: [
        step("Schwimmen", "2500-3000 m", "locker, technisch sauber"),
        step("Orientierung", "6 x 25 m", "alle 6-8 Zuege kurz nach vorne schauen")
      ]
    }),
    session({
      id: "2026-06-06-transition",
      title: "Wechselroutine trocken",
      discipline: "Race Prep",
      time: "frei",
      duration: 10,
      intensity: "Ruhig",
      rpe: "1-2",
      steps: [
        step("T1 Ablauf", "5 min", "Brille/Kappe/Neo-Gedanke, Helm, Radschuhe"),
        step("T2 Ablauf", "5 min", "Rad abstellen, Schuhe wechseln, Race Belt")
      ]
    })
  ]),
  day("2026-06-07", "Specific Build", "Wichtigster Sprint-Brick vor Muenster.", [
    session({
      id: "2026-06-07-brick",
      title: "Sprint Brick",
      discipline: "Brick",
      time: "vormittags",
      duration: 130,
      intensity: "Race-specific",
      rpe: "6-8",
      steps: [
        step("Bike locker", "30 min", "einrollen"),
        step("2 x 12 min", "Sprint-Race-Gefuehl", "6 min locker dazwischen"),
        step("Bike locker", "20-40 min", "ausfahren"),
        step("Koppellauf", "15-20 min", "5 min ruhig, 8-10 min zuegig, auslaufen")
      ],
      notes: ["Das ist ein spezifischer Reiz, kein Wettkampf."]
    })
  ]),
  day("2026-06-08", "Sharpening", "Rest und Frische sichern.", [
    session({
      id: "2026-06-08-mobility",
      title: "Rest + Mobility",
      discipline: "Mobility",
      time: "frei",
      duration: 20,
      intensity: "Sehr locker",
      rpe: "1-2",
      steps: [
        step("Mobility Flow", "15-20 min", "Huefte, Wade, BWS, Rumpf")
      ]
    })
  ]),
  day("2026-06-09", "Sharpening", "Locker laufen, schwimmen mit Qualitaet aber ohne Zerstoerung.", [
    session({
      id: "2026-06-09-run",
      title: "Easy Run + Strides",
      discipline: "Run",
      time: "mittags",
      duration: 45,
      intensity: "Easy + locker schnell",
      rpe: "2-4",
      steps: [
        step("Dauerlauf", "7-8 km", "locker"),
        step("Strides", "4 x 20 s", "locker schnell, volle Erholung")
      ]
    }),
    session({
      id: "2026-06-09-swim",
      title: "Vereinsschwimmen kontrolliert",
      discipline: "Swim",
      time: "20:00",
      duration: 70,
      intensity: "Qualitaet kontrolliert",
      rpe: "5-7",
      steps: [
        step("Vereinsprogramm", "nach Plan", "technisch sauber, nicht all-out")
      ]
    })
  ]),
  day("2026-06-10", "Sharpening", "Kurzer harter Radreiz.", [
    session({
      id: "2026-06-10-bike",
      title: "Bike Short-Hard",
      discipline: "Bike",
      time: "flexibel",
      duration: 85,
      intensity: "RPE 8",
      rpe: "8",
      steps: [
        step("Einrollen", "20 min", "locker"),
        step("4 x 5 min", "RPE 8", "4 min locker dazwischen"),
        step("Position", "waehrend Intervalle", "aero-aehnlich auf Rennrad"),
        step("Ausfahren", "15-20 min", "locker")
      ]
    })
  ]),
  day("2026-06-11", "Sharpening", "Laufgruppe reduziert.", [
    session({
      id: "2026-06-11-run",
      title: "Laufgruppe reduziert",
      discipline: "Run",
      time: "18:00",
      duration: 60,
      intensity: "Kontrolliert",
      rpe: "5-7",
      steps: [
        step("Gesamtumfang", "7-9 km", "kuerzen, wenn Programm sehr hart ist"),
        step("Cool-down", "10 min", "locker")
      ]
    })
  ]),
  day("2026-06-12", "Sharpening", "Optionaler lockerer Uni-Ride.", [
    session({
      id: "2026-06-12-bike",
      title: "Uni-Ride optional easy",
      discipline: "Bike",
      time: "17:00",
      duration: 120,
      intensity: "Easy",
      rpe: "2-3",
      optional: true,
      steps: [
        step("Maximal", "60-70 km", "locker"),
        step("Alternative", "45 min", "sehr locker oder frei")
      ]
    })
  ]),
  day("2026-06-13", "Sharpening", "Schwimmstart simulieren.", [
    session({
      id: "2026-06-13-swim",
      title: "Swim Start Simulation",
      discipline: "Swim",
      time: "frei",
      duration: 55,
      intensity: "Kurz schnell, sonst locker",
      rpe: "4-6",
      steps: [
        step("Einschwimmen", "400 m", "locker"),
        step("8 x 50 m", "15-20 m schnell", "Rest sauberer Rhythmus"),
        step("Aerob", "1000-1600 m", "locker"),
        step("Ausschwimmen", "200 m", "locker")
      ]
    }),
    session({
      id: "2026-06-13-mobility",
      title: "Mobility kurz",
      discipline: "Mobility",
      time: "frei",
      duration: 15,
      intensity: "Locker",
      rpe: "1-2",
      steps: [
        step("Flow", "15 min", "Huefte, Wade, BWS")
      ]
    })
  ]),
  day("2026-06-14", "Sharpening", "Kurzer Brick statt langer Grind.", [
    session({
      id: "2026-06-14-brick",
      title: "Short Brick",
      discipline: "Brick",
      time: "vormittags",
      duration: 105,
      intensity: "Locker mit Race-Touch",
      rpe: "4-6",
      steps: [
        step("Bike", "75-90 min", "locker"),
        step("3 x 3 min", "Race-Gefuehl", "viel locker dazwischen"),
        step("Koppellauf", "10-15 min", "locker bis zuegig")
      ]
    })
  ]),
  day("2026-06-15", "Race Week", "Race Week: frisch werden.", [
    session({
      id: "2026-06-15-mobility",
      title: "Rest + Mobility",
      discipline: "Mobility",
      time: "frei",
      duration: 15,
      intensity: "Sehr locker",
      rpe: "1",
      steps: [
        step("Mobility", "15-20 min", "locker, kein Kraftreiz")
      ]
    })
  ]),
  day("2026-06-16", "Race Week", "Kurzer Laufreiz und kontrolliertes Schwimmen.", [
    session({
      id: "2026-06-16-run",
      title: "Easy Run + Strides",
      discipline: "Run",
      time: "mittags",
      duration: 38,
      intensity: "Easy",
      rpe: "2-4",
      steps: [
        step("Dauerlauf", "6-7 km", "locker"),
        step("Strides", "4 x 20 s", "locker schnell")
      ]
    }),
    session({
      id: "2026-06-16-swim",
      title: "Swim kontrolliert",
      discipline: "Swim",
      time: "20:00",
      duration: 60,
      intensity: "Kontrolliert",
      rpe: "4-6",
      steps: [
        step("Vereinsprogramm", "reduziert", "nicht maximal schwimmen")
      ]
    })
  ]),
  day("2026-06-17", "Race Week", "Radaktivierung und Materialcheck.", [
    session({
      id: "2026-06-17-bike",
      title: "Bike Activation",
      discipline: "Bike",
      time: "flexibel",
      duration: 65,
      intensity: "Kurz Race-Gefuehl",
      rpe: "5-6",
      steps: [
        step("Einrollen", "20 min", "locker"),
        step("3 x 3 min", "Race-Gefuehl", "voll kontrolliert"),
        step("Ausfahren", "25-30 min", "locker"),
        step("Material", "5 min", "Position, Reifen, Bremsen, Schaltung checken")
      ]
    })
  ]),
  day("2026-06-18", "Race Week", "Kurzer Lauf, keine harte Laufgruppe.", [
    session({
      id: "2026-06-18-run",
      title: "Short Run",
      discipline: "Run",
      time: "flexibel",
      duration: 35,
      intensity: "Easy + 5-km-Touch",
      rpe: "3-5",
      steps: [
        step("Easy", "5-6 km", "locker"),
        step("3 x 1 min", "5-km-Gefuehl", "volle Erholung"),
        step("Regel", "heute", "keine harte Laufgruppe")
      ]
    })
  ]),
  day("2026-06-19", "Race Week", "Optional locker oder frei.", [
    session({
      id: "2026-06-19-bike",
      title: "Optional Easy Spin",
      discipline: "Bike",
      time: "frei",
      duration: 40,
      intensity: "Sehr locker",
      rpe: "1-2",
      optional: true,
      steps: [
        step("Option", "30-45 min", "locker rollen"),
        step("Alternative", "frei", "wenn du dich frischer fuehlst")
      ],
      notes: ["Kein langer Uni-Ride."]
    })
  ]),
  day("2026-06-20", "Race Week", "Pre-Race Opener und Packen.", [
    session({
      id: "2026-06-20-opener",
      title: "Pre-Race Opener",
      discipline: "Race Prep",
      time: "vormittags",
      duration: 30,
      intensity: "Locker mit Aktivierung",
      rpe: "2-4",
      steps: [
        step("Option Lauf", "15-20 min", "locker mit 3 kurzen Aktivierungen"),
        step("Option Bike", "30 min", "locker mit 3 kurzen Aktivierungen"),
        step("Packen", "15 min", "Race Checklist abhaken")
      ],
      checklist: raceChecklist
    })
  ]),
  day("2026-06-21", "Race Day", "Sprint Triathlon Muenster: 500 m Swim, 20 km Bike, 5 km Run.", [
    session({
      id: "2026-06-21-race",
      title: "Sprint Triathlon Muenster",
      discipline: "Race",
      time: "Race Time",
      duration: 75,
      intensity: "Wettkampf",
      rpe: "8-10",
      steps: [
        step("Warm-up", "kurz", "ruhig, fokussiert"),
        step("Swim", "500 m", "aggressiv starten, dann Rhythmus finden"),
        step("Bike", "20 km", "hart-kontrolliert, keine wilden Peaks"),
        step("Run", "5 km", "km 1 kontrolliert, dann bauen"),
        step("Finish", "alles geben", "stark ins Ziel")
      ],
      checklist: raceChecklist,
      notes: ["Neo nutzen, wenn erlaubt. Rennradposition ruhig und stabil halten."]
    })
  ])
];

const state = loadState();

function day(date, phase, summary, sessions) {
  return { date, phase, summary, sessions };
}

function session(input) {
  return {
    optional: false,
    alternatives: [],
    notes: [],
    checklist: [],
    ...input
  };
}

function step(label, amount, target) {
  return { label, amount, target };
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { logs: {}, checklist: {} };
  } catch {
    return { logs: {}, checklist: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getSessionLog(sessionId) {
  return state.logs[sessionId] || { completed: false, feeling: "", rpe: "", comment: "" };
}

function updateSessionLog(sessionId, patch) {
  state.logs[sessionId] = { ...getSessionLog(sessionId), ...patch, timestamp: new Date().toISOString() };
  saveState();
}

function todayIso() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function getSelectedDate() {
  const params = new URLSearchParams(location.search);
  const date = params.get("date");
  if (PLAN.some((dayItem) => dayItem.date === date)) return date;
  const today = todayIso();
  if (PLAN.some((dayItem) => dayItem.date === today)) return today;
  return PLAN_START;
}

function setSelectedDate(date) {
  const url = new URL(location.href);
  url.searchParams.set("date", date);
  history.pushState({}, "", `${url.pathname}${url.search}${location.hash || "#today"}`);
  render();
}

function formatDate(date) {
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  }).format(new Date(`${date}T12:00:00`));
}

function fullDate(date) {
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long"
  }).format(new Date(`${date}T12:00:00`));
}

function getDay(date) {
  return PLAN.find((dayItem) => dayItem.date === date) || PLAN[0];
}

function getAllSessions() {
  return PLAN.flatMap((dayItem) => dayItem.sessions.map((sessionItem) => ({ ...sessionItem, date: dayItem.date })));
}

function getWarnings(date) {
  const selectedIndex = PLAN.findIndex((dayItem) => dayItem.date === date);
  const previousSessions = PLAN.slice(Math.max(0, selectedIndex - 3), selectedIndex + 1)
    .flatMap((dayItem) => dayItem.sessions)
    .map((sessionItem) => ({ session: sessionItem, log: getSessionLog(sessionItem.id) }))
    .filter((entry) => entry.log.completed);

  const recent = previousSessions.slice(-4);
  const highRpeCount = recent.filter((entry) => Number(entry.log.rpe) >= 8).length;
  const lowFeelingCount = recent.filter((entry) => Number(entry.log.feeling) > 0 && Number(entry.log.feeling) <= 2).length;
  const commentWarning = recent.some((entry) => /schmerz|weh|muede|mude|kaputt|krank|reiz/i.test(entry.log.comment || ""));

  const warnings = [];
  if (highRpeCount >= 2 || lowFeelingCount >= 2) {
    warnings.push("Mehrere harte oder zaehe Check-ins: naechste Einheit bewusst kontrollieren oder kuerzen.");
  }
  if (commentWarning) {
    warnings.push("Kommentar enthaelt ein Warnsignal. Heute besonders ehrlich mit RPE und Tagesform sein.");
  }
  return warnings;
}

function getRoute() {
  return (location.hash || "#today").replace("#", "");
}

function disciplineClass(discipline) {
  return discipline.toLowerCase().replace(/\s+/g, "-");
}

function minutesLabel(minutes) {
  if (!minutes) return "";
  if (minutes < 90) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours}h ${rest}` : `${hours}h`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const selectedDate = getSelectedDate();
  const route = getRoute();
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="shell">
      ${renderHeader(selectedDate)}
      <main class="content">
        ${route === "plan" ? renderPlan(selectedDate) : ""}
        ${route === "race" ? renderRace() : ""}
        ${route === "log" ? renderLog() : ""}
        ${route === "today" || !["plan", "race", "log"].includes(route) ? renderToday(selectedDate) : ""}
      </main>
      ${renderNav(route)}
      <div id="detail-root"></div>
    </div>
  `;
  bindEvents();
}

function renderHeader(selectedDate) {
  const dayItem = getDay(selectedDate);
  const raceDate = new Date("2026-06-21T12:00:00");
  const selected = new Date(`${selectedDate}T12:00:00`);
  const daysToRace = Math.max(0, Math.round((raceDate - selected) / 86400000));
  return `
    <header class="hero">
      <div>
        <p class="eyebrow">${escapeHtml(dayItem.phase)}</p>
        <h1>Trainingsplan</h1>
        <p>${daysToRace === 0 ? "Race Day Muenster" : `${daysToRace} Tage bis Muenster`}</p>
      </div>
      <button class="date-pill" data-action="open-date-strip">${formatDate(selectedDate)}</button>
    </header>
    <section class="date-strip" aria-label="Datum auswaehlen">
      ${PLAN.map((dayItem) => `
        <button class="${dayItem.date === selectedDate ? "active" : ""}" data-date="${dayItem.date}">
          <span>${formatDate(dayItem.date).split(",")[0]}</span>
          <strong>${dayItem.date.slice(8, 10)}</strong>
        </button>
      `).join("")}
    </section>
  `;
}

function renderNav(route) {
  const items = [
    ["today", "Heute"],
    ["plan", "Plan"],
    ["race", "Race"],
    ["log", "Log"]
  ];
  return `
    <nav class="bottom-nav">
      ${items.map(([id, label]) => `
        <a class="${route === id || (!route && id === "today") ? "active" : ""}" href="#${id}">
          <span>${label}</span>
        </a>
      `).join("")}
    </nav>
  `;
}

function renderToday(selectedDate) {
  const dayItem = getDay(selectedDate);
  const warnings = getWarnings(selectedDate);
  return `
    <section class="section-head">
      <p class="eyebrow">${fullDate(dayItem.date)}</p>
      <h2>Heute</h2>
      <p>${escapeHtml(dayItem.summary)}</p>
    </section>
    ${warnings.length ? `<div class="warning">${warnings.map(escapeHtml).join("<br>")}</div>` : ""}
    <div class="session-list">
      ${dayItem.sessions.map(renderSessionCard).join("")}
    </div>
  `;
}

function renderSessionCard(sessionItem) {
  const log = getSessionLog(sessionItem.id);
  return `
    <article class="session-card ${log.completed ? "completed" : ""}" data-session="${sessionItem.id}">
      <div class="session-top">
        <span class="badge ${disciplineClass(sessionItem.discipline)}">${escapeHtml(sessionItem.discipline)}</span>
        <span>${escapeHtml(sessionItem.time)}${sessionItem.optional ? " · optional" : ""}</span>
      </div>
      <h3>${escapeHtml(sessionItem.title)}</h3>
      <p>${escapeHtml(sessionItem.intensity)} · RPE ${escapeHtml(sessionItem.rpe)} · ${minutesLabel(sessionItem.duration)}</p>
      ${log.completed ? `<div class="done-label">abgeschlossen · RPE ${escapeHtml(log.rpe || "-")}</div>` : ""}
    </article>
  `;
}

function renderPlan(selectedDate) {
  const weeks = [
    ["Woche 1", PLAN.slice(0, 7)],
    ["Woche 2", PLAN.slice(7, 14)],
    ["Woche 3", PLAN.slice(14, 21)],
    ["Race Week", PLAN.slice(21)]
  ];
  return `
    <section class="section-head">
      <p class="eyebrow">25.05. bis 21.06.</p>
      <h2>Wochenplan</h2>
      <p>Alle Einheiten bis Muenster. Tippe auf einen Tag oder eine Einheit.</p>
    </section>
    ${weeks.map(([label, days]) => `
      <section class="week-block">
        <h3>${label}</h3>
        ${days.map((dayItem) => `
          <article class="day-row ${dayItem.date === selectedDate ? "selected" : ""}">
            <button class="day-title" data-date="${dayItem.date}">
              <strong>${formatDate(dayItem.date)}</strong>
              <span>${escapeHtml(dayItem.phase)}</span>
            </button>
            <div class="chips">
              ${dayItem.sessions.map((sessionItem) => {
                const log = getSessionLog(sessionItem.id);
                return `<button class="chip ${log.completed ? "checked" : ""}" data-session="${sessionItem.id}">${escapeHtml(sessionItem.discipline)} · ${escapeHtml(sessionItem.title)}</button>`;
              }).join("")}
            </div>
          </article>
        `).join("")}
      </section>
    `).join("")}
  `;
}

function renderRace() {
  const raceDay = getDay("2026-06-21");
  return `
    <section class="section-head">
      <p class="eyebrow">A-Wettkampf</p>
      <h2>Muenster Sprint</h2>
      <p>500 m Kanal-Schwimmen, 20 km no-draft Bike, 5 km Lauf. Ziel: stark, frisch und kontrolliert aggressiv.</p>
    </section>
    <div class="race-grid">
      <article class="info-card">
        <h3>Strategie</h3>
        <ul>
          <li>Schwimmen: hart starten, dann Rhythmus und Orientierung.</li>
          <li>Rad: hart-kontrolliert, aeroposition-aehnlich, keine Peaks.</li>
          <li>Lauf: ersten Kilometer kontrollieren, dann steigern.</li>
        </ul>
      </article>
      <article class="info-card">
        <h3>Checkliste</h3>
        ${raceChecklist.map((item, index) => `
          <label class="check-row">
            <input type="checkbox" data-check="${index}" ${state.checklist[index] ? "checked" : ""}>
            <span>${escapeHtml(item)}</span>
          </label>
        `).join("")}
      </article>
      <article class="info-card">
        <h3>Race Day Einheit</h3>
        ${raceDay.sessions.map(renderSessionCard).join("")}
      </article>
    </div>
  `;
}

function renderLog() {
  const logged = getAllSessions()
    .map((sessionItem) => ({ session: sessionItem, log: getSessionLog(sessionItem.id) }))
    .filter((entry) => entry.log.completed || entry.log.comment || entry.log.rpe || entry.log.feeling)
    .reverse();

  return `
    <section class="section-head">
      <p class="eyebrow">Feedback</p>
      <h2>Trainingslog</h2>
      <p>Deine Check-ins bleiben lokal im Browser gespeichert.</p>
      ${logged.length ? `<button class="subtle-button" data-action="clear-logs">Logs leeren</button>` : ""}
    </section>
    <div class="log-list">
      ${logged.length ? logged.map(({ session, log }) => `
        <article class="log-card" data-session="${session.id}">
          <div class="session-top">
            <span>${formatDate(session.date)}</span>
            <span>${escapeHtml(session.discipline)}</span>
          </div>
          <h3>${escapeHtml(session.title)}</h3>
          <p>Gefuehl ${escapeHtml(log.feeling || "-")}/5 · RPE ${escapeHtml(log.rpe || "-")}/10</p>
          ${log.comment ? `<blockquote>${escapeHtml(log.comment)}</blockquote>` : ""}
        </article>
      `).join("") : `<div class="empty">Noch keine Check-ins. Nach der ersten Einheit taucht hier dein Log auf.</div>`}
    </div>
  `;
}

function renderDetail(sessionId) {
  const sessionItem = getAllSessions().find((item) => item.id === sessionId);
  if (!sessionItem) return;
  const log = getSessionLog(sessionId);
  const root = document.querySelector("#detail-root");
  root.innerHTML = `
    <div class="overlay" role="dialog" aria-modal="true">
      <div class="detail">
        <button class="back-button" data-action="close-detail">Zurueck</button>
        <div class="session-top">
          <span class="badge ${disciplineClass(sessionItem.discipline)}">${escapeHtml(sessionItem.discipline)}</span>
          <span>${formatDate(sessionItem.date)} · ${escapeHtml(sessionItem.time)}</span>
        </div>
        <h2>${escapeHtml(sessionItem.title)}</h2>
        <p class="detail-meta">${escapeHtml(sessionItem.intensity)} · Ziel-RPE ${escapeHtml(sessionItem.rpe)} · ${minutesLabel(sessionItem.duration)}</p>
        <div class="step-list">
          ${sessionItem.steps.map((item) => `
            <div class="step">
              <strong>${escapeHtml(item.label)}</strong>
              <span>${escapeHtml(item.amount)}</span>
              <p>${escapeHtml(item.target)}</p>
            </div>
          `).join("")}
        </div>
        ${sessionItem.notes.length ? `<div class="notes"><h3>Hinweise</h3>${sessionItem.notes.map((note) => `<p>${escapeHtml(note)}</p>`).join("")}</div>` : ""}
        ${sessionItem.alternatives.length ? `<div class="notes"><h3>Alternative</h3>${sessionItem.alternatives.map((note) => `<p>${escapeHtml(note)}</p>`).join("")}</div>` : ""}
        ${sessionItem.checklist.length ? `<div class="notes"><h3>Checkliste</h3><ul>${sessionItem.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>` : ""}
        <form class="checkin" data-checkin="${sessionItem.id}">
          <h3>Check-in</h3>
          <label class="toggle-row">
            <input type="checkbox" name="completed" ${log.completed ? "checked" : ""}>
            <span>Einheit erledigt</span>
          </label>
          <label>
            Gefuehl 1-5
            <input name="feeling" inputmode="numeric" min="1" max="5" type="number" value="${escapeHtml(log.feeling)}" placeholder="z.B. 4">
          </label>
          <label>
            RPE 1-10
            <input name="rpe" inputmode="numeric" min="1" max="10" type="number" value="${escapeHtml(log.rpe)}" placeholder="z.B. 6">
          </label>
          <label>
            Kommentar
            <textarea name="comment" rows="3" placeholder="Wie lief es? Was war auffaellig?">${escapeHtml(log.comment)}</textarea>
          </label>
          <button class="primary-button" type="submit">Check-in speichern</button>
        </form>
      </div>
    </div>
  `;
  bindDetailEvents();
}

function bindEvents() {
  document.querySelector("[data-action='clear-logs']")?.addEventListener("click", () => {
    state.logs = {};
    saveState();
    render();
  });
  document.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => setSelectedDate(button.dataset.date));
  });
  document.querySelectorAll("[data-session]").forEach((card) => {
    card.addEventListener("click", () => renderDetail(card.dataset.session));
  });
  document.querySelectorAll("[data-check]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.checklist[checkbox.dataset.check] = checkbox.checked;
      saveState();
    });
  });
}

function bindDetailEvents() {
  document.querySelector("[data-action='close-detail']")?.addEventListener("click", () => {
    document.querySelector("#detail-root").innerHTML = "";
    render();
  });
  document.querySelector(".overlay")?.addEventListener("click", (event) => {
    if (event.target.classList.contains("overlay")) {
      document.querySelector("#detail-root").innerHTML = "";
      render();
    }
  });
  document.querySelector(".checkin")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    updateSessionLog(form.dataset.checkin, {
      completed: data.get("completed") === "on",
      feeling: data.get("feeling"),
      rpe: data.get("rpe"),
      comment: data.get("comment")
    });
    document.querySelector("#detail-root").innerHTML = "";
    render();
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("popstate", render);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

if (typeof window !== "undefined") {
  window.TRAINING_PLAN = PLAN;
}

if (typeof document !== "undefined") {
  render();
}
