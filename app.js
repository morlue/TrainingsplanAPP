const STORAGE_KEY = "triathlon-pwa-state-v1";
const PLAN_START = "2026-05-25";
const PLAN_END = "2026-06-21";
const BIKE_FTP_WATTS = 243;

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
      power: "Intervalle 225-245 W, locker 125-165 W",
      steps: [
        step("Einrollen", "20 min", "125-165 W, hohe Trittfrequenz"),
        step("Intervall 1", "8 min", "225-245 W, RPE 7/10, stabiler Druck"),
        step("Erholung", "5 min", "sehr locker"),
        step("Intervall 2", "8 min", "225-245 W, gleichmaessig, nicht jagen"),
        step("Erholung", "5 min", "sehr locker"),
        step("Intervall 3", "8 min", "225-245 W, sauber zu Ende fahren"),
        step("Ausfahren", "20-30 min", "125-160 W")
      ],
      alternatives: ["Bei Muedigkeit: 60 min bei 125-160 W locker rollen und Intervalle streichen."]
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
      power: "meist 130-175 W, Anstiege kurz bis 190 W ok",
      optional: true,
      steps: [
        step("Gruppenausfahrt", "60-80 km", "meist 130-175 W"),
        step("Pacing-Regel", "durchgehend", "keine Attacken, keine Zusatzintervalle; kurze Peaks vermeiden")
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
      power: "Bike 130-180 W, Race-Touch maximal 210 W",
      steps: [
        step("Bike Option A", "75-120 min", "130-175 W, wenn Freitag Uni-Ride gemacht"),
        step("Bike Option B", "2.5-3 h", "130-180 W, wenn Freitag kein Ride"),
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
      power: "3 x 10 min bei 230-250 W, locker 125-165 W",
      steps: [
        step("Einrollen", "20 min", "125-165 W"),
        step("3 x 10 min", "230-250 W", "5 min locker bei 125-155 W dazwischen"),
        step("4 x 30 s", "hohe Kadenz", "volle Kontrolle, viel Pause"),
        step("Ausfahren", "15-20 min", "125-155 W")
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
      power: "meist 130-175 W, keine langen Abschnitte ueber 190 W",
      optional: true,
      steps: [
        step("Gruppenausfahrt", "60-80 km", "130-175 W"),
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
      power: "2 x 12 min bei 230-250 W, restlich 125-175 W",
      steps: [
        step("Bike locker", "30 min", "125-165 W einrollen"),
        step("2 x 12 min", "230-250 W", "6 min locker bei 125-155 W dazwischen"),
        step("Bike locker", "20-40 min", "125-170 W ausfahren"),
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
      power: "4 x 5 min bei 250-270 W, locker 125-160 W",
      steps: [
        step("Einrollen", "20 min", "125-160 W"),
        step("4 x 5 min", "250-270 W", "4 min locker bei 125-150 W dazwischen"),
        step("Position", "waehrend Intervalle", "aero-aehnlich auf Rennrad"),
        step("Ausfahren", "15-20 min", "125-155 W")
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
      power: "120-160 W, maximal 170 W",
      optional: true,
      steps: [
        step("Maximal", "60-70 km", "120-160 W locker"),
        step("Alternative", "45 min", "110-145 W sehr locker oder frei")
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
      power: "Bike 125-175 W, 3 x 3 min bei 230-250 W",
      steps: [
        step("Bike", "75-90 min", "125-175 W locker"),
        step("3 x 3 min", "230-250 W", "viel locker bei 125-150 W dazwischen"),
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
      power: "3 x 3 min bei 225-245 W, sonst 110-155 W",
      steps: [
        step("Einrollen", "20 min", "110-150 W locker"),
        step("3 x 3 min", "225-245 W", "voll kontrolliert"),
        step("Ausfahren", "25-30 min", "110-150 W locker"),
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
      power: "100-145 W oder frei",
      optional: true,
      steps: [
        step("Option", "30-45 min", "100-145 W locker rollen"),
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
      power: "Bike vorlaeufig 230-250 W, Peaks vermeiden",
      steps: [
        step("Warm-up", "kurz", "ruhig, fokussiert"),
        step("Swim", "500 m", "aggressiv starten, dann Rhythmus finden"),
        step("Bike", "20 km", "230-250 W als Startbereich, keine wilden Peaks"),
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
    power: "",
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

/* ---- ZWO EXPORT ---- */

function classifyStepType(label) {
  if (/einrollen|warm.?up|einfahren/i.test(label)) return "warmup";
  if (/ausfahren|ausrollen|cool.?down|auslaufen/i.test(label)) return "cooldown";
  if (/intervall\s*\d|interval\s*\d/i.test(label)) return "interval";
  if (/erholung|recovery|pause/i.test(label)) return "recovery";
  return "steady";
}

function buildZwoBlocks(parsed) {
  const blocks = [];
  let i = 0;
  while (i < parsed.length) {
    const step = parsed[i];
    if (step.type === "warmup") {
      blocks.push({ type: "Warmup", duration: step.seconds, powerLow: "0.50", powerHigh: (step.watts / BIKE_FTP_WATTS).toFixed(2) });
      i++;
    } else if (step.type === "cooldown") {
      blocks.push({ type: "Cooldown", duration: step.seconds, powerHigh: (step.watts / BIKE_FTP_WATTS).toFixed(2), powerLow: "0.40" });
      i++;
    } else if (step.type === "interval") {
      const pairs = [];
      while (i < parsed.length && (parsed[i].type === "interval" || parsed[i].type === "recovery")) {
        if (parsed[i].type === "interval") {
          const on = parsed[i];
          const off = parsed[i + 1] && parsed[i + 1].type === "recovery" ? parsed[i + 1] : null;
          pairs.push({ on, off });
          i += off ? 2 : 1;
        } else {
          i++;
        }
      }
      if (pairs.length > 0) {
        blocks.push({
          type: "IntervalsT",
          repeat: pairs.length,
          onDuration: pairs[0].on.seconds,
          offDuration: pairs[0].off ? pairs[0].off.seconds : 60,
          onPower: (pairs[0].on.watts / BIKE_FTP_WATTS).toFixed(2),
          offPower: pairs[0].off ? (pairs[0].off.watts / BIKE_FTP_WATTS).toFixed(2) : "0.50"
        });
      }
    } else {
      if (step.hasWatts) {
        blocks.push({ type: "SteadyState", duration: step.seconds, power: (step.watts / BIKE_FTP_WATTS).toFixed(2) });
      } else {
        blocks.push({ type: "FreeRide", duration: step.seconds });
      }
      i++;
    }
  }
  return blocks;
}

function generateZwoXml(title, blocks) {
  const xmlBlocks = blocks.map(b => {
    if (b.type === "Warmup") return `    <Warmup Duration="${b.duration}" PowerLow="${b.powerLow}" PowerHigh="${b.powerHigh}"/>`;
    if (b.type === "Cooldown") return `    <Cooldown Duration="${b.duration}" PowerHigh="${b.powerHigh}" PowerLow="${b.powerLow}"/>`;
    if (b.type === "SteadyState") return `    <SteadyState Duration="${b.duration}" Power="${b.power}"/>`;
    if (b.type === "IntervalsT") return `    <IntervalsT Repeat="${b.repeat}" OnDuration="${b.onDuration}" OffDuration="${b.offDuration}" OnPower="${b.onPower}" OffPower="${b.offPower}"/>`;
    if (b.type === "FreeRide") return `    <FreeRide Duration="${b.duration}"/>`;
    return "";
  }).filter(Boolean).join("\n");
  const safeName = String(title || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<workout_file>\n  <name>${safeName}</name>\n  <sportType>bike</sportType>\n  <workout>\n${xmlBlocks}\n  </workout>\n</workout_file>`;
}

async function shareZwoFile(title, xml) {
  const filename = title.replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "_") + ".zwo";
  const blob = new Blob([xml], { type: "application/octet-stream" });
  const file = new File([blob], filename, { type: "application/octet-stream" });
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title }); } catch { /* user cancelled */ }
  } else {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

function exportAsZwo(sessionItem, btn) {
  const steps = sessionItem.steps || [];
  const parsed = steps.map(s => ({
    type: classifyStepType(s.label),
    seconds: Math.round(parseStepMinutes(s.amount) * 60),
    watts: parseStepWatts(s.target),
    hasWatts: /\d+\s*(?:[-–]\s*\d+\s*)?W\b/i.test(s.target)
  })).filter(s => s.seconds > 0);

  if (parsed.length === 0) {
    btn.textContent = "Keine exportierbaren Daten";
    setTimeout(() => { btn.innerHTML = exportBtnInner(); btn.disabled = false; }, 2200);
    return;
  }

  btn.classList.add("export-loading");
  btn.disabled = true;
  const blocks = buildZwoBlocks(parsed);
  const xml = generateZwoXml(sessionItem.title, blocks);
  shareZwoFile(sessionItem.title, xml).finally(() => {
    btn.classList.remove("export-loading");
    btn.disabled = false;
  });
}

function exportBtnInner() {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Als Workout exportieren`;
}

/* ---- END ZWO EXPORT ---- */

function parseStepMinutes(amount) {
  const rangeMin = amount.match(/(\d+(?:\.\d+)?)\s*[-–]\s*(\d+(?:\.\d+)?)\s*min/i);
  if (rangeMin) return (parseFloat(rangeMin[1]) + parseFloat(rangeMin[2])) / 2;
  const singleMin = amount.match(/(\d+(?:\.\d+)?)\s*min/i);
  if (singleMin) return parseFloat(singleMin[1]);
  const rangeH = amount.match(/(\d+(?:\.\d+)?)\s*[-–]\s*(\d+(?:\.\d+)?)\s*h/i);
  if (rangeH) return (parseFloat(rangeH[1]) + parseFloat(rangeH[2])) / 2 * 60;
  const singleH = amount.match(/(\d+(?:\.\d+)?)\s*h/i);
  if (singleH) return parseFloat(singleH[1]) * 60;
  return 0;
}

function parseStepWatts(target) {
  const wattRange = target.match(/(\d+)\s*[-–]\s*(\d+)\s*W/i);
  if (wattRange) return (parseInt(wattRange[1]) + parseInt(wattRange[2])) / 2;
  const watt = target.match(/(\d+)\s*W/i);
  if (watt) return parseInt(watt[1]);
  if (/sehr locker|ausfahren|auslaufen|cool.?down|ruhig/i.test(target)) return 120;
  if (/locker|easy|leicht/i.test(target)) return 150;
  if (/moderat|steady|aerob|gleichmaessig/i.test(target)) return 190;
  if (/rpe\s*7|schwelle|kontrolliert/i.test(target)) return 230;
  if (/rpe\s*8|hart/i.test(target)) return 265;
  if (/rpe\s*9|rpe\s*10|max|sprint|alles/i.test(target)) return 310;
  return 155;
}

function getZoneColor(watts) {
  const p = watts / BIKE_FTP_WATTS;
  if (p < 0.56) return "#2d3748";
  if (p < 0.76) return "#1d4ed8";
  if (p < 0.91) return "#15803d";
  if (p < 1.06) return "#d97706";
  if (p < 1.21) return "#ea580c";
  return "#dc2626";
}

function renderIntervalGraph(sessionItem) {
  if (!sessionItem.steps || sessionItem.steps.length < 2) return "";
  const parsed = sessionItem.steps.map(s => ({
    minutes: parseStepMinutes(s.amount),
    watts: parseStepWatts(s.target)
  })).filter(s => s.minutes > 0);
  if (parsed.length < 2) return "";
  const totalMinutes = parsed.reduce((sum, s) => sum + s.minutes, 0);
  const maxWatts = Math.max(...parsed.map(s => s.watts), BIKE_FTP_WATTS);
  const W = 320, H = 72;
  let x = 0;
  const bars = parsed.map(s => {
    const bw = (s.minutes / totalMinutes) * W;
    const bh = Math.max(4, (s.watts / maxWatts) * H);
    const rect = `<rect x="${x.toFixed(1)}" y="${(H - bh).toFixed(1)}" width="${Math.max(1, bw - 1.5).toFixed(1)}" height="${bh.toFixed(1)}" fill="${getZoneColor(s.watts)}" rx="2"/>`;
    x += bw;
    return rect;
  }).join("");
  const ftpY = (H - (BIKE_FTP_WATTS / maxWatts) * H).toFixed(1);
  const durationLabel = totalMinutes >= 60
    ? `${Math.floor(totalMinutes / 60)}h${totalMinutes % 60 > 0 ? ` ${Math.round(totalMinutes % 60)} min` : ""}`
    : `${Math.round(totalMinutes)} min`;
  return `
    <div class="interval-graph">
      <div class="interval-graph-header">
        <span class="interval-graph-label">STRUKTUR</span>
        <span class="interval-graph-duration">${durationLabel}</span>
      </div>
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" class="interval-graph-svg">
        ${bars}
        <line x1="0" y1="${ftpY}" x2="${W}" y2="${ftpY}" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="4" y="${(parseFloat(ftpY) - 3).toFixed(1)}" fill="rgba(255,255,255,0.28)" font-size="7" font-family="sans-serif">FTP ${BIKE_FTP_WATTS}W</text>
      </svg>
      <div class="interval-graph-zones">
        <span style="color:#1d4ed8">Z2</span>
        <span style="color:#15803d">Z3</span>
        <span style="color:#d97706">Z4</span>
        <span style="color:#ea580c">Z5</span>
        <span style="color:#dc2626">Z6</span>
      </div>
    </div>
  `;
}

function render() {
  const selectedDate = getSelectedDate();
  const route = getRoute();
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="shell">
      ${renderHeader(selectedDate)}
      <main class="content">
        ${route === "races" ? renderRaces() : ""}
        ${route === "log" ? renderLog() : ""}
        ${route === "today" || !["races", "log"].includes(route) ? renderToday(selectedDate) : ""}
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
        <p>${daysToRace === 0 ? "Race Day Muenster" : `${daysToRace} Tage bis Muenster`} · Bike FTP ${BIKE_FTP_WATTS} W</p>
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
    ["races", "Races"],
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
      ${sessionItem.power ? `<p class="power-line">${escapeHtml(sessionItem.power)}</p>` : ""}
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

function renderRaces() {
  const today = todayIso();
  const races = getAllSessions().filter(s => s.discipline === "Race");
  return `
    <section class="section-head">
      <p class="eyebrow">Wettkampfkalender</p>
      <h2>Races</h2>
    </section>
    <div class="session-list">
      ${races.length
        ? races.map(s => renderRaceEventCard(s, today)).join("")
        : `<div class="empty">Keine Wettkämpfe geplant.</div>`}
    </div>
  `;
}

function renderRaceEventCard(sessionItem, today) {
  const daysUntil = Math.round(
    (new Date(`${sessionItem.date}T12:00:00`) - new Date(`${today}T12:00:00`)) / 86400000
  );
  const log = getSessionLog(sessionItem.id);
  const countdownText = daysUntil === 0 ? "RACE DAY" : daysUntil < 0 ? "Abgeschlossen" : `${daysUntil} Tage`;
  const countdownClass = daysUntil === 0 ? "race-today" : daysUntil < 0 ? "race-past" : "";
  return `
    <article class="session-card ${log.completed ? "completed" : ""}" data-session="${sessionItem.id}">
      <div class="session-top">
        <span class="badge ${disciplineClass(sessionItem.discipline)}">${escapeHtml(sessionItem.discipline)}</span>
        <span class="race-countdown ${countdownClass}">${countdownText}</span>
      </div>
      <h3>${escapeHtml(sessionItem.title)}</h3>
      <p>${fullDate(sessionItem.date)}</p>
      <p>${escapeHtml(sessionItem.intensity)} · RPE ${escapeHtml(sessionItem.rpe)} · ${minutesLabel(sessionItem.duration)}</p>
      ${sessionItem.power ? `<p class="power-line">${escapeHtml(sessionItem.power)}</p>` : ""}
    </article>
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
        ${sessionItem.power ? `<div class="power-target"><strong>Wattziel</strong><span>${escapeHtml(sessionItem.power)}</span></div>` : ""}
        ${renderIntervalGraph(sessionItem)}
        <div class="step-list">
          ${sessionItem.steps.map((item) => `
            <div class="step">
              <strong>${escapeHtml(item.label)}</strong>
              <span>${escapeHtml(item.amount)}</span>
              <p>${escapeHtml(item.target)}</p>
            </div>
          `).join("")}
        </div>
        ${(sessionItem.discipline === "Bike" || sessionItem.discipline === "Brick") ? `<button class="export-button" data-action="export-zwo">${exportBtnInner()}</button>` : ""}
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
  document.querySelector("[data-action='export-zwo']")?.addEventListener("click", (e) => {
    const sessionItem = getAllSessions().find(s => s.id === document.querySelector(".checkin").dataset.checkin);
    if (sessionItem) exportAsZwo(sessionItem, e.currentTarget);
  });
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
