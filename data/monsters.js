// ===================== MONSTER SVG SPRITES =====================
const MONSTER_SVG = {
  // ── Lv1 Goblin Cave ──────────────────────────────────────────
  "Goblin Scout": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- body -->
    <ellipse cx="50" cy="75" rx="20" ry="24" fill="#4a7c2f"/>
    <!-- head -->
    <ellipse cx="50" cy="42" rx="22" ry="20" fill="#5a9c38"/>
    <!-- ears -->
    <ellipse cx="28" cy="38" rx="7" ry="10" fill="#4a7c2f"/>
    <ellipse cx="72" cy="38" rx="7" ry="10" fill="#4a7c2f"/>
    <ellipse cx="28" cy="38" rx="4" ry="6" fill="#7dc655" opacity="0.5"/>
    <ellipse cx="72" cy="38" rx="4" ry="6" fill="#7dc655" opacity="0.5"/>
    <!-- eyes -->
    <ellipse cx="42" cy="40" rx="5" ry="6" fill="#ff4400"/>
    <ellipse cx="58" cy="40" rx="5" ry="6" fill="#ff4400"/>
    <circle cx="43" cy="41" r="2.5" fill="#1a0000"/>
    <circle cx="59" cy="41" r="2.5" fill="#1a0000"/>
    <circle cx="44" cy="40" r="1" fill="#fff"/>
    <circle cx="60" cy="40" r="1" fill="#fff"/>
    <!-- nose -->
    <ellipse cx="50" cy="48" rx="5" ry="3" fill="#3d6525"/>
    <circle cx="47" cy="48" r="1.5" fill="#2a4518"/>
    <circle cx="53" cy="48" r="1.5" fill="#2a4518"/>
    <!-- mouth / teeth -->
    <path d="M42 54 Q50 60 58 54" stroke="#2a4518" stroke-width="1.5" fill="none"/>
    <rect x="47" y="54" width="4" height="5" fill="#fff" rx="1"/>
    <rect x="52" y="54" width="4" height="5" fill="#fff" rx="1"/>
    <!-- arms -->
    <ellipse cx="28" cy="80" rx="8" ry="14" fill="#4a7c2f" transform="rotate(-15 28 80)"/>
    <ellipse cx="72" cy="80" rx="8" ry="14" fill="#4a7c2f" transform="rotate(15 72 80)"/>
    <!-- dagger -->
    <rect x="76" y="68" width="3" height="18" fill="#aaa" rx="1"/>
    <rect x="74" y="66" width="7" height="3" fill="#888" rx="1"/>
    <rect x="75" y="63" width="5" height="5" fill="#654" rx="1"/>
    <!-- legs -->
    <ellipse cx="42" cy="100" rx="8" ry="10" fill="#3d6525"/>
    <ellipse cx="58" cy="100" rx="8" ry="10" fill="#3d6525"/>
    <!-- leather vest lines -->
    <path d="M38 65 L50 62 L62 65" stroke="#3d6525" stroke-width="1.5" fill="none"/>
  </svg>`,

  "Goblin Warrior": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- body with armor -->
    <ellipse cx="50" cy="75" rx="22" ry="24" fill="#4a7c2f"/>
    <!-- chest plate -->
    <path d="M32 63 L50 58 L68 63 L65 88 L35 88 Z" fill="#6b7280"/>
    <path d="M40 63 L50 60 L60 63" stroke="#9ca3af" stroke-width="1" fill="none"/>
    <!-- head -->
    <ellipse cx="50" cy="42" rx="22" ry="20" fill="#5a9c38"/>
    <!-- helmet -->
    <path d="M28 38 Q30 18 50 16 Q70 18 72 38 L68 36 Q66 22 50 20 Q34 22 32 36 Z" fill="#6b7280"/>
    <rect x="30" y="36" width="40" height="6" fill="#4b5563" rx="2"/>
    <!-- eyes -->
    <ellipse cx="42" cy="42" rx="5" ry="5" fill="#ff6600"/>
    <ellipse cx="58" cy="42" rx="5" ry="5" fill="#ff6600"/>
    <circle cx="43" cy="43" r="2.5" fill="#1a0000"/>
    <circle cx="59" cy="43" r="2.5" fill="#1a0000"/>
    <!-- mouth -->
    <path d="M43 52 Q50 57 57 52" stroke="#2a4518" stroke-width="2" fill="none"/>
    <rect x="48" y="52" width="4" height="5" fill="#fff" rx="1"/>
    <!-- arms -->
    <ellipse cx="27" cy="78" rx="8" ry="15" fill="#4a7c2f" transform="rotate(-10 27 78)"/>
    <ellipse cx="73" cy="78" rx="8" ry="15" fill="#4a7c2f" transform="rotate(10 73 78)"/>
    <!-- shield on left arm -->
    <ellipse cx="20" cy="82" rx="9" ry="11" fill="#78350f"/>
    <ellipse cx="20" cy="82" rx="6" ry="8" fill="#92400e"/>
    <circle cx="20" cy="82" r="2" fill="#b45309"/>
    <!-- sword on right -->
    <rect x="78" y="60" width="4" height="26" fill="#d1d5db" rx="1"/>
    <rect x="73" y="58" width="14" height="4" fill="#9ca3af" rx="1"/>
    <rect x="78" y="55" width="4" height="6" fill="#78350f" rx="1"/>
    <!-- legs -->
    <ellipse cx="42" cy="100" rx="9" ry="10" fill="#3d6525"/>
    <ellipse cx="58" cy="100" rx="9" ry="10" fill="#3d6525"/>
  </svg>`,

  "Goblin King": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- crown -->
    <path d="M30 28 L34 14 L40 22 L50 10 L60 22 L66 14 L70 28 Z" fill="#f59e0b"/>
    <circle cx="34" cy="14" r="3" fill="#ef4444"/>
    <circle cx="50" cy="10" r="4" fill="#3b82f6"/>
    <circle cx="66" cy="14" r="3" fill="#ef4444"/>
    <!-- head -->
    <ellipse cx="50" cy="46" rx="24" ry="22" fill="#3d6b20"/>
    <!-- ears bigger -->
    <ellipse cx="26" cy="42" rx="9" ry="13" fill="#3d6b20"/>
    <ellipse cx="74" cy="42" rx="9" ry="13" fill="#3d6b20"/>
    <ellipse cx="26" cy="42" rx="5" ry="8" fill="#5a9c38" opacity="0.5"/>
    <ellipse cx="74" cy="42" rx="5" ry="8" fill="#5a9c38" opacity="0.5"/>
    <!-- eyes -->
    <ellipse cx="41" cy="44" rx="7" ry="7" fill="#ff2200"/>
    <ellipse cx="59" cy="44" rx="7" ry="7" fill="#ff2200"/>
    <circle cx="42" cy="45" r="3.5" fill="#0a0000"/>
    <circle cx="60" cy="45" r="3.5" fill="#0a0000"/>
    <circle cx="43" cy="44" r="1.2" fill="#fff"/>
    <circle cx="61" cy="44" r="1.2" fill="#fff"/>
    <!-- scar -->
    <path d="M55 36 L62 50" stroke="#2a4518" stroke-width="2" fill="none"/>
    <!-- nose -->
    <ellipse cx="50" cy="52" rx="6" ry="4" fill="#2d5018"/>
    <!-- mouth + big fangs -->
    <path d="M38 60 Q50 68 62 60" stroke="#1a3010" stroke-width="2" fill="none"/>
    <rect x="44" y="60" width="4" height="7" fill="#fff" rx="1"/>
    <rect x="52" y="60" width="4" height="7" fill="#fff" rx="1"/>
    <rect x="40" y="60" width="3" height="5" fill="#e0e0e0" rx="1"/>
    <rect x="57" y="60" width="3" height="5" fill="#e0e0e0" rx="1"/>
    <!-- body -->
    <ellipse cx="50" cy="84" rx="26" ry="22" fill="#3d6b20"/>
    <!-- royal robe -->
    <path d="M28 70 L50 65 L72 70 L74 100 L26 100 Z" fill="#7c2d12"/>
    <path d="M28 70 L50 65 L72 70" stroke="#f59e0b" stroke-width="2" fill="none"/>
    <!-- fur trim -->
    <path d="M26 100 Q35 95 50 98 Q65 95 74 100" stroke="#e5e7eb" stroke-width="4" fill="none"/>
    <!-- scepter -->
    <rect x="76" y="55" width="4" height="35" fill="#92400e" rx="2"/>
    <circle cx="78" cy="52" r="7" fill="#f59e0b"/>
    <circle cx="78" cy="52" r="4" fill="#fbbf24"/>
    <!-- arms -->
    <ellipse cx="24" cy="84" rx="10" ry="14" fill="#3d6b20" transform="rotate(-15 24 84)"/>
    <ellipse cx="77" cy="78" rx="9" ry="13" fill="#3d6b20" transform="rotate(20 77 78)"/>
  </svg>`,

  // ── Lv2 Spider Nest ──────────────────────────────────────────
  "Cave Spider": `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <!-- legs left -->
    <line x1="40" y1="44" x2="10" y2="28" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="38" y1="50" x2="8"  y2="50" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="40" y1="56" x2="10" y2="68" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="42" y1="62" x2="15" y2="80" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <!-- legs right -->
    <line x1="70" y1="44" x2="100" y2="28" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="72" y1="50" x2="102" y2="50" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="70" y1="56" x2="100" y2="68" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="68" y1="62" x2="95"  y2="80" stroke="#1e1b2e" stroke-width="3.5" stroke-linecap="round"/>
    <!-- abdomen -->
    <ellipse cx="55" cy="62" rx="22" ry="18" fill="#2d1b5e"/>
    <!-- hourglass markings -->
    <path d="M46 58 L55 68 L64 58 Z" fill="#a855f7" opacity="0.7"/>
    <!-- body/thorax -->
    <ellipse cx="55" cy="42" rx="18" ry="14" fill="#3b1f6e"/>
    <!-- head -->
    <ellipse cx="55" cy="26" rx="13" ry="11" fill="#4c2b85"/>
    <!-- eyes (8 eyes!) -->
    <circle cx="46" cy="22" r="3.5" fill="#10b981"/>
    <circle cx="55" cy="20" r="3"   fill="#10b981"/>
    <circle cx="64" cy="22" r="3.5" fill="#10b981"/>
    <circle cx="49" cy="27" r="2.5" fill="#34d399"/>
    <circle cx="61" cy="27" r="2.5" fill="#34d399"/>
    <circle cx="46" cy="22" r="1.5" fill="#fff" opacity="0.8"/>
    <circle cx="55" cy="20" r="1.2" fill="#fff" opacity="0.8"/>
    <circle cx="64" cy="22" r="1.5" fill="#fff" opacity="0.8"/>
    <!-- fangs -->
    <path d="M50 32 L47 38" stroke="#6d28d9" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M60 32 L63 38" stroke="#6d28d9" stroke-width="2.5" stroke-linecap="round"/>
    <!-- web silk on abdomen -->
    <path d="M44 55 Q55 50 66 55" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.5"/>
  </svg>`,

  "Poison Spider": `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <!-- legs left -->
    <line x1="40" y1="44" x2="8"  y2="25" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <line x1="38" y1="50" x2="6"  y2="50" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <line x1="40" y1="57" x2="8"  y2="70" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <line x1="42" y1="63" x2="12" y2="82" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <!-- legs right -->
    <line x1="70" y1="44" x2="102" y2="25" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <line x1="72" y1="50" x2="104" y2="50" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <line x1="70" y1="57" x2="102" y2="70" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <line x1="68" y1="63" x2="98"  y2="82" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <!-- abdomen -->
    <ellipse cx="55" cy="63" rx="24" ry="20" fill="#15803d"/>
    <!-- skull markings -->
    <ellipse cx="55" cy="60" rx="9" ry="9" fill="#166534" opacity="0.7"/>
    <circle cx="52" cy="58" r="2" fill="#dcfce7" opacity="0.6"/>
    <circle cx="58" cy="58" r="2" fill="#dcfce7" opacity="0.6"/>
    <path d="M50 63 Q55 67 60 63" stroke="#dcfce7" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- venom drops -->
    <ellipse cx="40" cy="76" rx="3" ry="4" fill="#4ade80" opacity="0.7"/>
    <ellipse cx="70" cy="76" rx="3" ry="4" fill="#4ade80" opacity="0.7"/>
    <!-- thorax -->
    <ellipse cx="55" cy="43" rx="18" ry="14" fill="#16a34a"/>
    <!-- head -->
    <ellipse cx="55" cy="27" rx="13" ry="12" fill="#15803d"/>
    <!-- eyes -->
    <circle cx="46" cy="23" r="4" fill="#fbbf24"/>
    <circle cx="55" cy="21" r="3.5" fill="#fbbf24"/>
    <circle cx="64" cy="23" r="4" fill="#fbbf24"/>
    <circle cx="48" cy="28" r="2.5" fill="#f59e0b"/>
    <circle cx="62" cy="28" r="2.5" fill="#f59e0b"/>
    <circle cx="46" cy="23" r="1.5" fill="#1a0000"/>
    <circle cx="55" cy="21" r="1.5" fill="#1a0000"/>
    <circle cx="64" cy="23" r="1.5" fill="#1a0000"/>
    <!-- dripping fangs -->
    <path d="M50 33 L47 42" stroke="#4ade80" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 33 L63 42" stroke="#4ade80" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="47" cy="43" rx="3" ry="4" fill="#4ade80" opacity="0.8"/>
    <ellipse cx="63" cy="43" rx="3" ry="4" fill="#4ade80" opacity="0.8"/>
  </svg>`,

  "Spider Queen": `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <!-- web threads -->
    <line x1="60" y1="5"  x2="60" y2="20"  stroke="#c4b5fd" stroke-width="1" opacity="0.5"/>
    <line x1="60" y1="5"  x2="90" y2="18"  stroke="#c4b5fd" stroke-width="1" opacity="0.4"/>
    <line x1="60" y1="5"  x2="30" y2="18"  stroke="#c4b5fd" stroke-width="1" opacity="0.4"/>
    <!-- thick legs -->
    <line x1="42" y1="46" x2="5"  y2="24" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <line x1="40" y1="54" x2="4"  y2="54" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <line x1="42" y1="61" x2="5"  y2="78" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <line x1="44" y1="68" x2="10" y2="90" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <line x1="78" y1="46" x2="115" y2="24" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <line x1="80" y1="54" x2="116" y2="54" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <line x1="78" y1="61" x2="115" y2="78" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <line x1="76" y1="68" x2="110" y2="90" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
    <!-- large abdomen -->
    <ellipse cx="60" cy="70" rx="28" ry="24" fill="#5b21b6"/>
    <!-- pattern -->
    <path d="M46 64 L60 76 L74 64 Z" fill="#7c3aed" opacity="0.6"/>
    <ellipse cx="60" cy="72" rx="8" ry="8" fill="#4c1d95" opacity="0.5"/>
    <!-- crown -->
    <path d="M42 28 L46 16 L52 24 L60 12 L68 24 L74 16 L78 28 Z" fill="#f59e0b"/>
    <circle cx="46" cy="16" r="2.5" fill="#ef4444"/>
    <circle cx="60" cy="12" r="3"   fill="#8b5cf6"/>
    <circle cx="74" cy="16" r="2.5" fill="#ef4444"/>
    <!-- thorax -->
    <ellipse cx="60" cy="46" rx="20" ry="16" fill="#6d28d9"/>
    <!-- head -->
    <ellipse cx="60" cy="28" rx="17" ry="15" fill="#7c3aed"/>
    <!-- 8 glowing eyes -->
    <circle cx="49" cy="24" r="4.5" fill="#10b981"/>
    <circle cx="60" cy="21" r="4"   fill="#10b981"/>
    <circle cx="71" cy="24" r="4.5" fill="#10b981"/>
    <circle cx="52" cy="30" r="3"   fill="#34d399"/>
    <circle cx="68" cy="30" r="3"   fill="#34d399"/>
    <circle cx="49" cy="24" r="1.8" fill="#fff" opacity="0.9"/>
    <circle cx="60" cy="21" r="1.5" fill="#fff" opacity="0.9"/>
    <circle cx="71" cy="24" r="1.8" fill="#fff" opacity="0.9"/>
    <!-- big fangs + venom -->
    <path d="M53 36 L49 46" stroke="#a78bfa" stroke-width="4" stroke-linecap="round"/>
    <path d="M67 36 L71 46" stroke="#a78bfa" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="49" cy="47" rx="4" ry="5" fill="#4ade80" opacity="0.9"/>
    <ellipse cx="71" cy="47" rx="4" ry="5" fill="#4ade80" opacity="0.9"/>
  </svg>`,

  // ── Lv3 Skeleton Crypt ────────────────────────────────────────
  "Skeleton Warrior": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- ribcage -->
    <rect x="36" y="58" width="28" height="28" fill="none" stroke="#d4c5a0" stroke-width="1.5"/>
    <line x1="36" y1="64" x2="64" y2="64" stroke="#d4c5a0" stroke-width="1.2"/>
    <line x1="36" y1="70" x2="64" y2="70" stroke="#d4c5a0" stroke-width="1.2"/>
    <line x1="36" y1="76" x2="64" y2="76" stroke="#d4c5a0" stroke-width="1.2"/>
    <line x1="36" y1="82" x2="64" y2="82" stroke="#d4c5a0" stroke-width="1.2"/>
    <!-- spine -->
    <line x1="50" y1="58" x2="50" y2="86" stroke="#d4c5a0" stroke-width="2"/>
    <!-- pelvis -->
    <path d="M34 86 Q50 92 66 86 L66 96 Q50 104 34 96 Z" fill="#b5a585" stroke="#d4c5a0" stroke-width="1"/>
    <!-- upper arms bone -->
    <line x1="36" y1="60" x2="20" y2="78" stroke="#d4c5a0" stroke-width="5" stroke-linecap="round"/>
    <line x1="64" y1="60" x2="80" y2="78" stroke="#d4c5a0" stroke-width="5" stroke-linecap="round"/>
    <!-- forearm -->
    <line x1="20" y1="78" x2="14" y2="94" stroke="#c4b094" stroke-width="4" stroke-linecap="round"/>
    <line x1="80" y1="78" x2="86" y2="94" stroke="#c4b094" stroke-width="4" stroke-linecap="round"/>
    <!-- skull -->
    <ellipse cx="50" cy="36" rx="22" ry="22" fill="#e8dcc8"/>
    <ellipse cx="50" cy="44" rx="18" ry="12" fill="#d4c5a0"/>
    <!-- eye sockets -->
    <ellipse cx="40" cy="34" rx="7" ry="8" fill="#1a1510"/>
    <ellipse cx="60" cy="34" rx="7" ry="8" fill="#1a1510"/>
    <!-- glowing eyes -->
    <ellipse cx="40" cy="34" rx="4" ry="4.5" fill="#ff6600" opacity="0.8"/>
    <ellipse cx="60" cy="34" rx="4" ry="4.5" fill="#ff6600" opacity="0.8"/>
    <!-- nose cavity -->
    <path d="M47 42 L50 46 L53 42 Z" fill="#1a1510"/>
    <!-- teeth -->
    <rect x="42" y="50" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <rect x="47" y="50" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <rect x="52" y="50" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <!-- sword -->
    <rect x="85" y="55" width="3.5" height="32" fill="#9ca3af" rx="1"/>
    <rect x="80" y="53" width="13.5" height="4" fill="#6b7280" rx="1"/>
    <rect x="85" y="49" width="3.5" height="6" fill="#78350f" rx="1"/>
    <!-- legs bone -->
    <line x1="42" y1="96" x2="40" y2="110" stroke="#d4c5a0" stroke-width="6" stroke-linecap="round"/>
    <line x1="58" y1="96" x2="60" y2="110" stroke="#d4c5a0" stroke-width="6" stroke-linecap="round"/>
  </svg>`,

  "Skeleton Guard": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- shield on left arm -->
    <ellipse cx="18" cy="76" rx="13" ry="17" fill="#1e3a5f"/>
    <ellipse cx="18" cy="76" rx="10" ry="13" fill="#1e40af"/>
    <path d="M11 68 L18 62 L25 68 L25 84 L18 90 L11 84 Z" fill="#2563eb" opacity="0.5"/>
    <circle cx="18" cy="76" r="3" fill="#60a5fa"/>
    <!-- ribcage -->
    <rect x="36" y="58" width="28" height="28" fill="none" stroke="#d4c5a0" stroke-width="1.5"/>
    <line x1="36" y1="64" x2="64" y2="64" stroke="#d4c5a0" stroke-width="1.2"/>
    <line x1="36" y1="70" x2="64" y2="70" stroke="#d4c5a0" stroke-width="1.2"/>
    <line x1="36" y1="76" x2="64" y2="76" stroke="#d4c5a0" stroke-width="1.2"/>
    <!-- spine + pelvis -->
    <line x1="50" y1="58" x2="50" y2="86" stroke="#d4c5a0" stroke-width="2"/>
    <path d="M34 86 Q50 92 66 86 L66 96 Q50 104 34 96 Z" fill="#b5a585"/>
    <!-- arms -->
    <line x1="36" y1="62" x2="22" y2="72" stroke="#d4c5a0" stroke-width="5" stroke-linecap="round"/>
    <line x1="22" y1="72" x2="18" y2="80" stroke="#c4b094" stroke-width="4" stroke-linecap="round"/>
    <line x1="64" y1="62" x2="78" y2="76" stroke="#d4c5a0" stroke-width="5" stroke-linecap="round"/>
    <line x1="78" y1="76" x2="82" y2="90" stroke="#c4b094" stroke-width="4" stroke-linecap="round"/>
    <!-- skull -->
    <ellipse cx="50" cy="36" rx="22" ry="22" fill="#e8dcc8"/>
    <ellipse cx="50" cy="44" rx="18" ry="12" fill="#d4c5a0"/>
    <!-- helmet/hood -->
    <path d="M28 34 Q30 14 50 12 Q70 14 72 34 L68 32 Q66 18 50 16 Q34 18 32 32 Z" fill="#1e3a5f"/>
    <!-- eye sockets -->
    <ellipse cx="40" cy="34" rx="7" ry="8" fill="#1a1510"/>
    <ellipse cx="60" cy="34" rx="7" ry="8" fill="#1a1510"/>
    <ellipse cx="40" cy="34" rx="3.5" ry="4" fill="#60a5fa" opacity="0.9"/>
    <ellipse cx="60" cy="34" rx="3.5" ry="4" fill="#60a5fa" opacity="0.9"/>
    <!-- nose -->
    <path d="M47 43 L50 47 L53 43 Z" fill="#1a1510"/>
    <!-- teeth -->
    <rect x="42" y="50" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <rect x="47" y="50" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <rect x="52" y="50" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <!-- spear -->
    <rect x="82" y="52" width="3" height="42" fill="#92400e" rx="1"/>
    <path d="M81 52 L83.5 38 L86 52 Z" fill="#9ca3af"/>
    <!-- legs -->
    <line x1="42" y1="96" x2="40" y2="110" stroke="#d4c5a0" stroke-width="6" stroke-linecap="round"/>
    <line x1="58" y1="96" x2="60" y2="110" stroke="#d4c5a0" stroke-width="6" stroke-linecap="round"/>
  </svg>`,

  "Dark Knight": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- full armor body -->
    <path d="M30 60 L50 54 L70 60 L68 96 L32 96 Z" fill="#374151"/>
    <path d="M38 60 L50 56 L62 60 L60 86 L40 86 Z" fill="#4b5563"/>
    <!-- shoulder pauldrons -->
    <ellipse cx="28" cy="60" rx="11" ry="8" fill="#374151"/>
    <ellipse cx="72" cy="60" rx="11" ry="8" fill="#374151"/>
    <!-- shield on left -->
    <path d="M10 62 L22 56 L22 88 L10 94 Z" fill="#1f2937"/>
    <path d="M11 63 L21 58 L21 87 L11 93 Z" fill="#111827"/>
    <path d="M16 66 L16 84" stroke="#6b7280" stroke-width="2"/>
    <path d="M12 75 L20 75" stroke="#6b7280" stroke-width="2"/>
    <!-- skull emblem on shield -->
    <circle cx="16" cy="72" r="3.5" fill="#d1d5db"/>
    <circle cx="14.5" cy="71" r="1" fill="#111827"/>
    <circle cx="17.5" cy="71" r="1" fill="#111827"/>
    <path d="M14 73.5 L18 73.5" stroke="#111827" stroke-width="0.8"/>
    <!-- skeleton skull in armor helmet -->
    <ellipse cx="50" cy="36" rx="21" ry="21" fill="#e8dcc8"/>
    <!-- full helmet -->
    <path d="M29 32 Q32 12 50 10 Q68 12 71 32 L68 30 Q65 16 50 14 Q35 16 32 30 Z" fill="#1f2937"/>
    <rect x="30" y="30" width="40" height="10" fill="#111827" rx="2"/>
    <!-- visor slit -->
    <rect x="34" y="32" width="13" height="3" fill="#ff6600" rx="1" opacity="0.8"/>
    <rect x="53" y="32" width="13" height="3" fill="#ff6600" rx="1" opacity="0.8"/>
    <!-- teeth below visor -->
    <rect x="43" y="48" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <rect x="48" y="48" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <rect x="53" y="48" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <!-- sword -->
    <rect x="76" y="48" width="4" height="38" fill="#9ca3af" rx="1"/>
    <rect x="70" y="46" width="16" height="5" fill="#6b7280" rx="1"/>
    <rect x="76" y="40" width="4" height="8" fill="#78350f" rx="1"/>
    <!-- greatsword gem -->
    <circle cx="78" cy="42" r="2.5" fill="#ef4444"/>
    <!-- legs -->
    <rect x="34" y="90" width="12" height="18" fill="#374151" rx="3"/>
    <rect x="54" y="90" width="12" height="18" fill="#374151" rx="3"/>
  </svg>`,

  "Bone Knight": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- giant shield -->
    <path d="M6 54 L22 46 L22 90 L14 100 L6 90 Z" fill="#1e3a5f"/>
    <path d="M8 56 L20 49 L20 89 L13 98 L8 89 Z" fill="#1e40af" opacity="0.6"/>
    <line x1="14" y1="52" x2="14" y2="96" stroke="#60a5fa" stroke-width="2"/>
    <path d="M8 72 L20 72" stroke="#60a5fa" stroke-width="2"/>
    <ellipse cx="14" cy="72" rx="4" ry="4" fill="#93c5fd"/>
    <!-- full plate body -->
    <path d="M28 58 L50 50 L72 58 L70 98 L30 98 Z" fill="#1f2937"/>
    <path d="M36 58 L50 52 L64 58 L62 88 L38 88 Z" fill="#374151"/>
    <!-- pauldrons with spikes -->
    <ellipse cx="26" cy="58" rx="13" ry="9" fill="#1f2937"/>
    <ellipse cx="74" cy="58" rx="13" ry="9" fill="#1f2937"/>
    <path d="M22 50 L25 42 L28 50" fill="#6b7280"/>
    <path d="M72 50 L75 42 L78 50" fill="#6b7280"/>
    <!-- skull head -->
    <ellipse cx="50" cy="34" rx="23" ry="22" fill="#e8dcc8"/>
    <!-- horned helmet -->
    <path d="M27 28 Q30 8 50 6 Q70 8 73 28 L70 26 Q67 12 50 10 Q33 12 30 26 Z" fill="#1f2937"/>
    <rect x="28" y="26" width="44" height="12" fill="#111827" rx="2"/>
    <!-- horns -->
    <path d="M30 18 Q22 8 26 2 Q30 10 34 16" fill="#4b5563"/>
    <path d="M70 18 Q78 8 74 2 Q70 10 66 16" fill="#4b5563"/>
    <!-- glowing eye slits -->
    <rect x="33" y="30" width="14" height="4" fill="#ff8800" rx="1" opacity="0.9"/>
    <rect x="53" y="30" width="14" height="4" fill="#ff8800" rx="1" opacity="0.9"/>
    <!-- greatsword -->
    <rect x="78" y="36" width="5" height="50" fill="#d1d5db" rx="1"/>
    <rect x="70" y="34" width="21" height="6" fill="#9ca3af" rx="2"/>
    <rect x="78" y="28" width="5" height="9" fill="#92400e" rx="1"/>
    <ellipse cx="80.5" cy="30" rx="4" ry="4" fill="#fbbf24"/>
    <!-- legs armored -->
    <rect x="33" y="92" width="13" height="16" fill="#1f2937" rx="3"/>
    <rect x="54" y="92" width="13" height="16" fill="#1f2937" rx="3"/>
  </svg>`,

  // ── Lv4 Frozen Fortress ───────────────────────────────────────
  "Ice Mage": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- robe -->
    <path d="M28 62 L50 56 L72 62 L76 108 L24 108 Z" fill="#1e3a5f"/>
    <!-- ice crystal pattern on robe -->
    <path d="M50 65 L46 75 L50 85 L54 75 Z" fill="#60a5fa" opacity="0.3"/>
    <!-- head -->
    <ellipse cx="50" cy="40" rx="20" ry="20" fill="#bfdbfe"/>
    <!-- ice crown -->
    <path d="M30 34 L34 22 L38 30 L44 18 L50 28 L56 18 L62 30 L66 22 L70 34" fill="none" stroke="#93c5fd" stroke-width="3" stroke-linejoin="round"/>
    <!-- eyes -->
    <ellipse cx="42" cy="38" rx="5" ry="5" fill="#1e40af"/>
    <ellipse cx="58" cy="38" rx="5" ry="5" fill="#1e40af"/>
    <circle cx="42" cy="38" r="2.5" fill="#fff"/>
    <circle cx="58" cy="38" r="2.5" fill="#fff"/>
    <circle cx="43" cy="37" r="1" fill="#1e3a5f"/>
    <circle cx="59" cy="37" r="1" fill="#1e3a5f"/>
    <!-- beard/mouth area -->
    <ellipse cx="50" cy="50" rx="10" ry="6" fill="#93c5fd" opacity="0.4"/>
    <path d="M43 48 Q50 54 57 48" stroke="#1e3a5f" stroke-width="1.5" fill="none"/>
    <!-- arms -->
    <line x1="28" y1="68" x2="12" y2="80" stroke="#1e3a5f" stroke-width="8" stroke-linecap="round"/>
    <line x1="72" y1="68" x2="88" y2="80" stroke="#1e3a5f" stroke-width="8" stroke-linecap="round"/>
    <!-- ice staff on right -->
    <rect x="86" y="52" width="4" height="44" fill="#60a5fa" rx="2"/>
    <!-- staff crystal top -->
    <path d="M88 52 L84 40 L88 44 L92 40 L88 52" fill="#bfdbfe"/>
    <path d="M88 44 L82 36 L88 46 L94 36 L88 44" fill="#93c5fd"/>
    <!-- snowflake on left hand -->
    <line x1="12" y1="80" x2="12" y2="90" stroke="#93c5fd" stroke-width="2"/>
    <line x1="7" y1="85" x2="17" y2="85" stroke="#93c5fd" stroke-width="2"/>
    <line x1="8.5" y1="81.5" x2="15.5" y2="88.5" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="15.5" y1="81.5" x2="8.5" y2="88.5" stroke="#93c5fd" stroke-width="1.5"/>
    <!-- ice shard floating -->
    <path d="M24 56 L28 48 L32 56 L28 64 Z" fill="#bfdbfe" opacity="0.6"/>
    <path d="M68 56 L72 48 L76 56 L72 64 Z" fill="#bfdbfe" opacity="0.6"/>
  </svg>`,

  "Frozen Golem": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- massive ice body -->
    <rect x="26" y="56" width="48" height="44" fill="#1e3a5f" rx="6"/>
    <!-- ice facets on body -->
    <path d="M26 56 L50 48 L74 56" fill="#2563eb" opacity="0.4"/>
    <path d="M30 70 L50 64 L70 70" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M30 80 L50 74 L70 80" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- crack lines -->
    <path d="M40 60 L38 80 L44 90" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M62 58 L64 72" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- huge arms -->
    <rect x="6"  y="58" width="22" height="36" fill="#1e40af" rx="8"/>
    <rect x="72" y="58" width="22" height="36" fill="#1e40af" rx="8"/>
    <!-- arm facets -->
    <path d="M6 58 L17 52 L28 58" fill="#3b82f6" opacity="0.4"/>
    <path d="M72 58 L83 52 L94 58" fill="#3b82f6" opacity="0.4"/>
    <!-- head -->
    <rect x="30" y="28" width="40" height="32" fill="#2563eb" rx="8"/>
    <path d="M30 28 L50 20 L70 28" fill="#3b82f6" opacity="0.5"/>
    <!-- glowing eyes -->
    <ellipse cx="40" cy="42" rx="7" ry="7" fill="#0ea5e9"/>
    <ellipse cx="60" cy="42" rx="7" ry="7" fill="#0ea5e9"/>
    <ellipse cx="40" cy="42" rx="4" ry="4" fill="#e0f2fe"/>
    <ellipse cx="60" cy="42" rx="4" ry="4" fill="#e0f2fe"/>
    <!-- mouth slit -->
    <rect x="38" y="52" width="24" height="4" fill="#0c4a6e" rx="2"/>
    <!-- ice spikes on head -->
    <path d="M34 28 L36 16 L38 28" fill="#bfdbfe"/>
    <path d="M48 28 L50 14 L52 28" fill="#bfdbfe"/>
    <path d="M62 28 L64 16 L66 28" fill="#bfdbfe"/>
    <!-- legs -->
    <rect x="30" y="96" width="16" height="12" fill="#1e3a5f" rx="4"/>
    <rect x="54" y="96" width="16" height="12" fill="#1e3a5f" rx="4"/>
  </svg>`,

  "Wolf Rider": `<svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
    <!-- wolf body -->
    <ellipse cx="55" cy="82" rx="36" ry="20" fill="#374151"/>
    <!-- wolf legs -->
    <rect x="24" y="92" width="10" height="16" fill="#4b5563" rx="3"/>
    <rect x="38" y="96" width="10" height="14" fill="#4b5563" rx="3"/>
    <rect x="66" y="92" width="10" height="16" fill="#4b5563" rx="3"/>
    <rect x="80" y="96" width="10" height="14" fill="#4b5563" rx="3"/>
    <!-- wolf tail -->
    <path d="M88 78 Q102 68 100 58 Q96 64 88 70" fill="#4b5563"/>
    <!-- wolf neck/head -->
    <ellipse cx="28" cy="76" rx="14" ry="12" fill="#374151"/>
    <ellipse cx="18" cy="70" rx="14" ry="12" fill="#374151"/>
    <!-- wolf snout -->
    <ellipse cx="10" cy="72" rx="8" ry="6" fill="#4b5563"/>
    <ellipse cx="8" cy="70" rx="4" ry="3" fill="#1f2937"/>
    <!-- wolf eye -->
    <ellipse cx="16" cy="67" rx="3.5" ry="3.5" fill="#fbbf24"/>
    <circle cx="16" cy="67" r="1.5" fill="#0a0000"/>
    <!-- wolf ears -->
    <path d="M20 62 L16 52 L26 60 Z" fill="#374151"/>
    <!-- wolf teeth -->
    <path d="M6 73 L4 79" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M10 75 L9 81" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <!-- rider (goblin on wolf) -->
    <ellipse cx="55" cy="64" rx="14" ry="16" fill="#4a7c2f"/>
    <!-- rider head -->
    <ellipse cx="55" cy="46" rx="12" ry="11" fill="#5a9c38"/>
    <!-- rider helmet -->
    <path d="M43 42 Q45 32 55 30 Q65 32 67 42 L64 40 Q62 34 55 32 Q48 34 46 40 Z" fill="#374151"/>
    <!-- rider eyes -->
    <ellipse cx="49" cy="44" rx="4" ry="4" fill="#ff4400"/>
    <ellipse cx="61" cy="44" rx="4" ry="4" fill="#ff4400"/>
    <circle cx="50" cy="44.5" r="2" fill="#0a0000"/>
    <circle cx="62" cy="44.5" r="2" fill="#0a0000"/>
    <!-- rider lance -->
    <rect x="68" y="34" width="3" height="50" fill="#92400e" rx="1" transform="rotate(-15 68 34)"/>
    <path d="M74 26 L68 34 L78 36 Z" fill="#9ca3af"/>
    <!-- reins -->
    <path d="M43 54 Q30 62 20 70" stroke="#92400e" stroke-width="2" fill="none"/>
    <path d="M67 54 Q72 62 76 70" stroke="#92400e" stroke-width="2" fill="none"/>
  </svg>`,

  "Frost Giant": `<svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
    <!-- body massive -->
    <path d="M22 56 L55 44 L88 56 L84 106 L26 106 Z" fill="#1e3a5f"/>
    <!-- ice armor facets -->
    <path d="M30 60 L55 50 L80 60 L76 86 L34 86 Z" fill="#1e40af" opacity="0.5"/>
    <path d="M36 70 L55 64 L74 70" stroke="#93c5fd" stroke-width="1.5" fill="none"/>
    <path d="M36 80 L55 74 L74 80" stroke="#93c5fd" stroke-width="1.5" fill="none"/>
    <!-- shoulder spikes -->
    <path d="M22 56 L14 44 L22 52" fill="#60a5fa"/>
    <path d="M88 56 L96 44 L88 52" fill="#60a5fa"/>
    <path d="M20 50 L12 36 L20 46" fill="#93c5fd"/>
    <path d="M90 50 L98 36 L90 46" fill="#93c5fd"/>
    <!-- arms -->
    <path d="M22 62 L4 84" stroke="#1e3a5f" stroke-width="16" stroke-linecap="round"/>
    <path d="M88 62 L106 84" stroke="#1e3a5f" stroke-width="16" stroke-linecap="round"/>
    <!-- fists -->
    <circle cx="5" cy="86" r="10" fill="#1e40af"/>
    <circle cx="105" cy="86" r="10" fill="#1e40af"/>
    <!-- ice maul in right hand -->
    <rect x="100" y="60" width="8" height="30" fill="#60a5fa" rx="3"/>
    <rect x="94" y="56" width="20" height="12" fill="#93c5fd" rx="4"/>
    <!-- head large -->
    <ellipse cx="55" cy="32" rx="28" ry="26" fill="#2563eb"/>
    <!-- ice crown/horns -->
    <path d="M27 28 L22 10 L32 24" fill="#bfdbfe"/>
    <path d="M83 28 L88 10 L78 24" fill="#bfdbfe"/>
    <path d="M40 10 L44 0  L48 10" fill="#93c5fd"/>
    <path d="M62 10 L66 0  L70 10" fill="#93c5fd"/>
    <!-- face -->
    <ellipse cx="44" cy="32" rx="8" ry="8" fill="#0284c7"/>
    <ellipse cx="66" cy="32" rx="8" ry="8" fill="#0284c7"/>
    <ellipse cx="44" cy="32" rx="5" ry="5" fill="#e0f2fe"/>
    <ellipse cx="66" cy="32" rx="5" ry="5" fill="#e0f2fe"/>
    <circle cx="44" cy="32" r="2" fill="#0c4a6e"/>
    <circle cx="66" cy="32" r="2" fill="#0c4a6e"/>
    <!-- icy beard -->
    <path d="M34 44 Q45 54 55 50 Q65 54 76 44" stroke="#93c5fd" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- mouth -->
    <path d="M42 44 Q55 52 68 44" stroke="#0c4a6e" stroke-width="2" fill="none"/>
    <!-- ice shards from body -->
    <path d="M32 68 L28 58 L36 66" fill="#bfdbfe" opacity="0.7"/>
    <path d="M78 68 L82 58 L74 66" fill="#bfdbfe" opacity="0.7"/>
  </svg>`,

  // ── Lv5 Shadow Dungeon ────────────────────────────────────────
  "Shadow Sprite": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- wispy shadow cloak -->
    <path d="M20 90 Q28 70 26 50 Q34 40 50 36 Q66 40 74 50 Q72 70 80 90 Q65 80 50 84 Q35 80 20 90 Z" fill="#1e1b4b"/>
    <path d="M24 90 Q32 72 30 54 Q38 44 50 40 Q62 44 70 54 Q68 72 76 90" fill="#312e81" opacity="0.5"/>
    <!-- wispy tendrils at bottom -->
    <path d="M30 88 Q26 100 22 108" stroke="#4c1d95" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M42 88 Q40 102 38 110" stroke="#4c1d95" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M58 88 Q60 102 62 110" stroke="#4c1d95" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M70 88 Q74 100 78 108" stroke="#4c1d95" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- face/mask -->
    <ellipse cx="50" cy="50" rx="20" ry="18" fill="#1e1b4b"/>
    <!-- glowing eye slashes -->
    <path d="M36 47 L44 50 L36 53" fill="none" stroke="#a78bfa" stroke-width="3" stroke-linecap="round"/>
    <path d="M64 47 L56 50 L64 53" fill="none" stroke="#a78bfa" stroke-width="3" stroke-linecap="round"/>
    <!-- glow effect -->
    <path d="M36 47 L44 50 L36 53" fill="none" stroke="#c4b5fd" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
    <path d="M64 47 L56 50 L64 53" fill="none" stroke="#c4b5fd" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
    <!-- sinister smile -->
    <path d="M40 60 Q50 68 60 60" stroke="#7c3aed" stroke-width="2" fill="none"/>
    <!-- dark aura dots -->
    <circle cx="20" cy="50" r="3" fill="#4c1d95" opacity="0.6"/>
    <circle cx="80" cy="50" r="3" fill="#4c1d95" opacity="0.6"/>
    <circle cx="18" cy="62" r="2" fill="#4c1d95" opacity="0.4"/>
    <circle cx="82" cy="62" r="2" fill="#4c1d95" opacity="0.4"/>
  </svg>`,

  "Dark Wraith": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- tattered cloak -->
    <path d="M18 100 Q24 76 22 54 Q34 36 50 32 Q66 36 78 54 Q76 76 82 100" fill="#0f172a"/>
    <!-- cloak tears -->
    <path d="M22 80 L16 92 L24 86" fill="#1e1b4b"/>
    <path d="M78 80 L84 92 L76 86" fill="#1e1b4b"/>
    <path d="M26 92 L20 108" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
    <path d="M38 96 L34 110" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    <path d="M62 96 L66 110" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    <path d="M74 92 L80 108" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
    <!-- skull face -->
    <ellipse cx="50" cy="46" rx="22" ry="20" fill="#1e1b4b"/>
    <!-- eye sockets dark -->
    <ellipse cx="40" cy="44" rx="7" ry="7" fill="#0f0a1e"/>
    <ellipse cx="60" cy="44" rx="7" ry="7" fill="#0f0a1e"/>
    <!-- purple soul flames in eyes -->
    <ellipse cx="40" cy="44" rx="4" ry="4" fill="#7c3aed"/>
    <ellipse cx="60" cy="44" rx="4" ry="4" fill="#7c3aed"/>
    <ellipse cx="40" cy="43" rx="2" ry="2.5" fill="#c4b5fd"/>
    <ellipse cx="60" cy="43" rx="2" ry="2.5" fill="#c4b5fd"/>
    <!-- nose cavity -->
    <path d="M47 52 L50 56 L53 52 Z" fill="#0f0a1e"/>
    <!-- rictus grin -->
    <path d="M38 60 Q50 68 62 60" stroke="#0f0a1e" stroke-width="2" fill="none"/>
    <rect x="44" y="60" width="4" height="5" fill="#d4c5a0" rx="1"/>
    <rect x="49" y="60" width="4" height="5" fill="#d4c5a0" rx="1"/>
    <rect x="54" y="60" width="4" height="5" fill="#d4c5a0" rx="1"/>
    <!-- shield of shadows -->
    <path d="M14 58 L28 52 L28 82 L14 88 Z" fill="#0f172a"/>
    <path d="M16 60 L26 55 L26 80 L16 86 Z" fill="#1e1b4b" opacity="0.6"/>
    <ellipse cx="21" cy="70" rx="4" ry="4" fill="#7c3aed" opacity="0.7"/>
    <!-- scythe outline -->
    <rect x="78" y="46" width="3" height="50" fill="#334155" rx="1"/>
    <path d="M81 46 Q96 38 98 52 Q92 46 81 52 Z" fill="#475569"/>
  </svg>`,

  "Void Stalker": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- barely visible — translucent creature -->
    <!-- body void -->
    <ellipse cx="50" cy="64" rx="26" ry="30" fill="#030712" opacity="0.9"/>
    <!-- void ripples -->
    <ellipse cx="50" cy="64" rx="22" ry="26" fill="none" stroke="#312e81" stroke-width="1" opacity="0.7"/>
    <ellipse cx="50" cy="64" rx="17" ry="21" fill="none" stroke="#4c1d95" stroke-width="1" opacity="0.5"/>
    <!-- ghostly arms -->
    <path d="M24 56 Q10 52 8 64 Q10 72 24 68" fill="#1e1b4b" opacity="0.7"/>
    <path d="M76 56 Q90 52 92 64 Q90 72 76 68" fill="#1e1b4b" opacity="0.7"/>
    <!-- claw fingers left -->
    <path d="M8 62 L2 56" stroke="#6d28d9" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 64 L2 64" stroke="#6d28d9" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 66 L2 72" stroke="#6d28d9" stroke-width="2" stroke-linecap="round"/>
    <!-- claw fingers right -->
    <path d="M92 62 L98 56" stroke="#6d28d9" stroke-width="2" stroke-linecap="round"/>
    <path d="M92 64 L98 64" stroke="#6d28d9" stroke-width="2" stroke-linecap="round"/>
    <path d="M92 66 L98 72" stroke="#6d28d9" stroke-width="2" stroke-linecap="round"/>
    <!-- head -->
    <ellipse cx="50" cy="38" rx="20" ry="18" fill="#0f0a1e"/>
    <!-- multiple eyes — unsettling -->
    <ellipse cx="40" cy="34" rx="5" ry="5" fill="#8b5cf6"/>
    <ellipse cx="55" cy="30" rx="4" ry="4" fill="#8b5cf6"/>
    <ellipse cx="62" cy="36" rx="5" ry="5" fill="#8b5cf6"/>
    <ellipse cx="44" cy="42" rx="3" ry="3" fill="#6d28d9"/>
    <ellipse cx="58" cy="43" rx="3" ry="3" fill="#6d28d9"/>
    <!-- pupils -->
    <circle cx="40" cy="34" r="2" fill="#030712"/>
    <circle cx="55" cy="30" r="1.5" fill="#030712"/>
    <circle cx="62" cy="36" r="2" fill="#030712"/>
    <!-- void mouth -->
    <path d="M38 48 Q50 56 62 48" fill="#030712"/>
    <!-- legs fade into nothing -->
    <path d="M38 88 Q34 100 32 110" stroke="#1e1b4b" stroke-width="6" stroke-linecap="round" opacity="0.7"/>
    <path d="M62 88 Q66 100 68 110" stroke="#1e1b4b" stroke-width="6" stroke-linecap="round" opacity="0.7"/>
  </svg>`,

  "Shadow Lord": `<svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
    <!-- massive dark cloak -->
    <path d="M8 108 Q18 78 16 50 Q30 28 55 22 Q80 28 94 50 Q92 78 102 108 Q80 92 55 96 Q30 92 8 108 Z" fill="#0f0a1e"/>
    <path d="M14 108 Q24 80 22 54 Q36 34 55 28 Q74 34 88 54 Q86 80 96 108" fill="#1e1b4b" opacity="0.6"/>
    <!-- tattered edges -->
    <path d="M10 108 L4 96 L14 102" fill="#0f0a1e"/>
    <path d="M28 106 L22 118" stroke="#0f0a1e" stroke-width="5" stroke-linecap="round"/>
    <path d="M44 108 L40 120" stroke="#0f0a1e" stroke-width="4" stroke-linecap="round"/>
    <path d="M66 108 L70 120" stroke="#0f0a1e" stroke-width="4" stroke-linecap="round"/>
    <path d="M82 106 L88 118" stroke="#0f0a1e" stroke-width="5" stroke-linecap="round"/>
    <path d="M100 108 L106 96 L96 102" fill="#0f0a1e"/>
    <!-- dark crown with void gems -->
    <path d="M32 28 L36 12 L42 22 L55 8 L68 22 L74 12 L78 28 Z" fill="#1e1b4b"/>
    <circle cx="36" cy="12" r="4" fill="#7c3aed"/>
    <circle cx="55" cy="8"  r="5" fill="#4c1d95"/>
    <circle cx="74" cy="12" r="4" fill="#7c3aed"/>
    <!-- gem glow -->
    <circle cx="55" cy="8"  r="3" fill="#a78bfa"/>
    <!-- skull face large -->
    <ellipse cx="55" cy="46" rx="26" ry="24" fill="#1e1b4b"/>
    <!-- eye sockets -->
    <ellipse cx="42" cy="44" rx="9" ry="10" fill="#030712"/>
    <ellipse cx="68" cy="44" rx="9" ry="10" fill="#030712"/>
    <!-- void fire eyes -->
    <ellipse cx="42" cy="44" rx="6" ry="7" fill="#7c3aed"/>
    <ellipse cx="68" cy="44" rx="6" ry="7" fill="#7c3aed"/>
    <ellipse cx="42" cy="43" rx="3" ry="4" fill="#c4b5fd"/>
    <ellipse cx="68" cy="43" rx="3" ry="4" fill="#c4b5fd"/>
    <!-- nose -->
    <path d="M51 54 L55 60 L59 54 Z" fill="#030712"/>
    <!-- sinister grin, big teeth -->
    <path d="M38 64 Q55 74 72 64" stroke="#030712" stroke-width="2" fill="none"/>
    <rect x="46" y="64" width="5" height="7" fill="#e8dcc8" rx="1"/>
    <rect x="52" y="64" width="5" height="7" fill="#e8dcc8" rx="1"/>
    <rect x="58" y="64" width="5" height="7" fill="#e8dcc8" rx="1"/>
    <!-- shadow scythe -->
    <rect x="86" y="38" width="4" height="62" fill="#1e1b4b" rx="2"/>
    <path d="M90 38 Q112 24 114 46 Q104 36 90 48 Z" fill="#4c1d95"/>
    <path d="M90 38 Q112 24 114 46 Q104 36 90 48 Z" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
    <!-- shadow hands visible -->
    <path d="M16 66 Q4 60 2 72 Q4 80 16 76" fill="#1e1b4b"/>
    <path d="M2 68 L-4 62" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M2 72 L-4 72" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M2 76 L-4 82" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
    <!-- poison aura dots -->
    <circle cx="20" cy="40" r="3" fill="#4ade80" opacity="0.5"/>
    <circle cx="90" cy="40" r="3" fill="#4ade80" opacity="0.5"/>
    <circle cx="16" cy="56" r="2" fill="#4ade80" opacity="0.4"/>
  </svg>`,

  // ── Lv6 Dragon Mountain ───────────────────────────────────────
  "Fire Drake": `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <!-- wings -->
    <path d="M30 40 Q10 20 2 40 Q10 50 30 52 Z" fill="#b91c1c" opacity="0.8"/>
    <path d="M80 40 Q100 20 108 40 Q100 50 80 52 Z" fill="#b91c1c" opacity="0.8"/>
    <!-- wing membrane lines -->
    <path d="M30 40 Q18 28 8 38" stroke="#7f1d1d" stroke-width="1" fill="none"/>
    <path d="M30 44 Q16 36 6 42" stroke="#7f1d1d" stroke-width="1" fill="none"/>
    <path d="M80 40 Q92 28 102 38" stroke="#7f1d1d" stroke-width="1" fill="none"/>
    <path d="M80 44 Q94 36 104 42" stroke="#7f1d1d" stroke-width="1" fill="none"/>
    <!-- body -->
    <ellipse cx="55" cy="66" rx="28" ry="22" fill="#dc2626"/>
    <!-- belly scales -->
    <ellipse cx="55" cy="70" rx="18" ry="14" fill="#fca5a5" opacity="0.5"/>
    <!-- tail -->
    <path d="M82 72 Q96 68 104 56 Q100 66 94 70 Q106 66 106 76 Q98 74 88 78 Z" fill="#b91c1c"/>
    <!-- back spines -->
    <path d="M36 50 L32 38 L38 48" fill="#7f1d1d"/>
    <path d="M48 46 L46 32 L52 44" fill="#7f1d1d"/>
    <path d="M60 44 L60 30 L64 42" fill="#7f1d1d"/>
    <path d="M72 46 L74 32 L78 44" fill="#7f1d1d"/>
    <!-- neck -->
    <ellipse cx="40" cy="50" rx="14" ry="12" fill="#dc2626"/>
    <!-- head -->
    <ellipse cx="28" cy="42" rx="18" ry="14" fill="#dc2626"/>
    <!-- snout -->
    <ellipse cx="14" cy="44" rx="10" ry="8" fill="#b91c1c"/>
    <!-- nostril smoke -->
    <path d="M8 40 Q4 32 8 28 Q10 34 8 40" fill="#9ca3af" opacity="0.5"/>
    <path d="M10 42 Q6 36 10 32 Q12 36 10 42" fill="#9ca3af" opacity="0.4"/>
    <!-- eye -->
    <ellipse cx="22" cy="38" rx="5" ry="5" fill="#fbbf24"/>
    <ellipse cx="22" cy="38" rx="2.5" ry="4" fill="#0a0000"/>
    <circle cx="22" cy="37" r="1" fill="#fff" opacity="0.8"/>
    <!-- teeth -->
    <path d="M10 44 L8 50" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <path d="M14 46 L13 52" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <path d="M18 47 L18 53" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <!-- horns -->
    <path d="M26 30 L22 18 L30 28" fill="#7f1d1d"/>
    <path d="M36 28 L34 14 L40 26" fill="#7f1d1d"/>
    <!-- flame breath -->
    <path d="M4 46 Q-6 44 -10 48 Q-4 52 4 50" fill="#f97316" opacity="0.8"/>
    <path d="M0 44 Q-12 40 -16 46 Q-8 50 0 48" fill="#fbbf24" opacity="0.6"/>
    <!-- legs -->
    <path d="M38 82 L34 98" stroke="#b91c1c" stroke-width="8" stroke-linecap="round"/>
    <path d="M72 82 L76 98" stroke="#b91c1c" stroke-width="8" stroke-linecap="round"/>
    <!-- claws -->
    <path d="M28 98 L24 106" stroke="#7f1d1d" stroke-width="3" stroke-linecap="round"/>
    <path d="M32 100 L30 108" stroke="#7f1d1d" stroke-width="3" stroke-linecap="round"/>
    <path d="M36 100 L36 108" stroke="#7f1d1d" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  "Dragon Knight": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <!-- dragon-scale armor body -->
    <path d="M26 58 L50 50 L74 58 L72 100 L28 100 Z" fill="#7f1d1d"/>
    <!-- scale pattern -->
    <path d="M34 62 Q38 58 42 62 Q38 66 34 62 Z" fill="#991b1b" opacity="0.8"/>
    <path d="M44 62 Q48 58 52 62 Q48 66 44 62 Z" fill="#991b1b" opacity="0.8"/>
    <path d="M54 62 Q58 58 62 62 Q58 66 54 62 Z" fill="#991b1b" opacity="0.8"/>
    <path d="M34 70 Q38 66 42 70 Q38 74 34 70 Z" fill="#991b1b" opacity="0.8"/>
    <path d="M44 70 Q48 66 52 70 Q48 74 44 70 Z" fill="#991b1b" opacity="0.8"/>
    <path d="M54 70 Q58 66 62 70 Q58 74 54 70 Z" fill="#991b1b" opacity="0.8"/>
    <path d="M38 78 Q42 74 46 78 Q42 82 38 78 Z" fill="#991b1b" opacity="0.8"/>
    <path d="M50 78 Q54 74 58 78 Q54 82 50 78 Z" fill="#991b1b" opacity="0.8"/>
    <!-- dragon shield -->
    <path d="M8 56 L24 48 L24 86 L16 96 L8 86 Z" fill="#7f1d1d"/>
    <path d="M10 58 L22 51 L22 85 L15 94 L10 85 Z" fill="#991b1b" opacity="0.6"/>
    <!-- dragon head on shield -->
    <path d="M11 66 Q16 60 21 66 Q18 72 15 74 Q12 72 11 66 Z" fill="#fca5a5" opacity="0.4"/>
    <circle cx="13" cy="66" r="1.5" fill="#fbbf24"/>
    <circle cx="19" cy="66" r="1.5" fill="#fbbf24"/>
    <!-- helmet dragon-crested -->
    <path d="M30 54 L50 46 L70 54" fill="#7f1d1d"/>
    <path d="M28 42 Q30 22 50 20 Q70 22 72 42 L68 40 Q66 26 50 24 Q34 26 32 40 Z" fill="#991b1b"/>
    <rect x="30" y="40" width="40" height="12" fill="#7f1d1d" rx="2"/>
    <!-- dragon crest on helmet -->
    <path d="M44 20 Q46 10 50 6 Q54 10 56 20" fill="#dc2626"/>
    <path d="M48 14 L50 6 L52 14" fill="#b91c1c"/>
    <!-- eye slit red glow -->
    <rect x="34" y="43" width="14" height="4" fill="#ef4444" rx="1" opacity="0.9"/>
    <rect x="52" y="43" width="14" height="4" fill="#ef4444" rx="1" opacity="0.9"/>
    <!-- teeth visible -->
    <rect x="44" y="52" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <rect x="50" y="52" width="4" height="5" fill="#e8dcc8" rx="1"/>
    <!-- sword fire-enchanted -->
    <rect x="76" y="48" width="5" height="40" fill="#d1d5db" rx="1"/>
    <rect x="70" y="46" width="17" height="5" fill="#9ca3af" rx="1"/>
    <rect x="76" y="40" width="5" height="8" fill="#92400e" rx="1"/>
    <!-- flame on blade -->
    <path d="M78 50 Q74 44 76 38 Q80 44 82 50 Q80 46 78 50 Z" fill="#f97316" opacity="0.8"/>
    <!-- arms -->
    <path d="M26 64 Q18 72 18 82" stroke="#7f1d1d" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M74 64 Q82 72 82 82" stroke="#7f1d1d" stroke-width="10" stroke-linecap="round" fill="none"/>
    <!-- legs armored -->
    <rect x="32" y="94" width="14" height="14" fill="#7f1d1d" rx="4"/>
    <rect x="54" y="94" width="14" height="14" fill="#7f1d1d" rx="4"/>
  </svg>`,

  "Wyvern Scout": `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <!-- wings (wyvern has 2 legs, wings = arms) -->
    <path d="M28 36 Q6 14 2 34 Q8 48 28 46 Z" fill="#c2410c" opacity="0.85"/>
    <path d="M82 36 Q104 14 108 34 Q102 48 82 46 Z" fill="#c2410c" opacity="0.85"/>
    <!-- wing ribs -->
    <path d="M28 36 Q16 22 6 32" stroke="#9a3412" stroke-width="1.5" fill="none"/>
    <path d="M28 40 Q14 30 4 36" stroke="#9a3412" stroke-width="1.5" fill="none"/>
    <path d="M82 36 Q94 22 104 32" stroke="#9a3412" stroke-width="1.5" fill="none"/>
    <path d="M82 40 Q96 30 106 36" stroke="#9a3412" stroke-width="1.5" fill="none"/>
    <!-- slim body -->
    <ellipse cx="55" cy="64" rx="22" ry="18" fill="#ea580c"/>
    <!-- belly -->
    <ellipse cx="55" cy="68" rx="14" ry="11" fill="#fed7aa" opacity="0.5"/>
    <!-- tail -->
    <path d="M76 70 Q90 64 100 52 Q96 62 92 68 Q102 66 100 76 Q92 72 84 76 Z" fill="#c2410c"/>
    <!-- tail spike -->
    <path d="M100 52 L108 44 L102 54 Z" fill="#9a3412"/>
    <!-- neck -->
    <ellipse cx="40" cy="48" rx="12" ry="10" fill="#ea580c"/>
    <!-- head -->
    <ellipse cx="26" cy="40" rx="16" ry="13" fill="#ea580c"/>
    <!-- long snout -->
    <ellipse cx="12" cy="42" rx="10" ry="7" fill="#c2410c"/>
    <!-- eye -->
    <ellipse cx="22" cy="36" rx="5" ry="5" fill="#fbbf24"/>
    <ellipse cx="22" cy="36" rx="2.5" ry="4" fill="#0a0000"/>
    <!-- horn -->
    <path d="M28 30 L24 18 L32 28" fill="#9a3412"/>
    <!-- small spines on back -->
    <path d="M42 46 L40 36 L44 44" fill="#9a3412"/>
    <path d="M54 42 L53 30 L57 40" fill="#9a3412"/>
    <path d="M66 44 L66 32 L70 42" fill="#9a3412"/>
    <!-- teeth -->
    <path d="M8 44 L6 50" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 46 L11 52" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <!-- only 2 legs (wyvern) -->
    <path d="M44 78 L40 96" stroke="#c2410c" stroke-width="9" stroke-linecap="round"/>
    <path d="M66 78 L70 96" stroke="#c2410c" stroke-width="9" stroke-linecap="round"/>
    <!-- claws -->
    <path d="M34 96 L30 104" stroke="#9a3412" stroke-width="3" stroke-linecap="round"/>
    <path d="M38 98 L36 106" stroke="#9a3412" stroke-width="3" stroke-linecap="round"/>
    <path d="M42 98 L42 106" stroke="#9a3412" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  "Ancient Dragon": `<svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg">
    <!-- huge wings -->
    <path d="M28 44 Q4 16 -2 42 Q4 58 28 56 Z" fill="#991b1b" opacity="0.9"/>
    <path d="M92 44 Q116 16 122 42 Q116 58 92 56 Z" fill="#991b1b" opacity="0.9"/>
    <!-- wing veins -->
    <path d="M28 44 Q14 26 4 40" stroke="#7f1d1d" stroke-width="2" fill="none"/>
    <path d="M28 48 Q12 34 2 46" stroke="#7f1d1d" stroke-width="2" fill="none"/>
    <path d="M28 52 Q10 42 0 52" stroke="#7f1d1d" stroke-width="2" fill="none"/>
    <path d="M92 44 Q106 26 116 40" stroke="#7f1d1d" stroke-width="2" fill="none"/>
    <path d="M92 48 Q108 34 118 46" stroke="#7f1d1d" stroke-width="2" fill="none"/>
    <path d="M92 52 Q110 42 120 52" stroke="#7f1d1d" stroke-width="2" fill="none"/>
    <!-- massive body -->
    <ellipse cx="60" cy="72" rx="34" ry="26" fill="#b91c1c"/>
    <!-- belly armored plates -->
    <ellipse cx="60" cy="76" rx="24" ry="18" fill="#fca5a5" opacity="0.35"/>
    <path d="M44 68 Q60 62 76 68" stroke="#fca5a5" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M42 74 Q60 68 78 74" stroke="#fca5a5" stroke-width="2" fill="none" opacity="0.5"/>
    <!-- armor plates on back -->
    <path d="M34 54 L28 38 L36 50" fill="#7f1d1d"/>
    <path d="M48 48 L44 30 L52 46" fill="#7f1d1d"/>
    <path d="M62 46 L60 26 L68 44" fill="#7f1d1d"/>
    <path d="M76 48 L78 30 L84 46" fill="#7f1d1d"/>
    <path d="M88 54 L92 38 L94 52" fill="#7f1d1d"/>
    <!-- thick neck -->
    <ellipse cx="40" cy="54" rx="18" ry="14" fill="#b91c1c"/>
    <!-- massive head -->
    <ellipse cx="22" cy="44" rx="22" ry="18" fill="#b91c1c"/>
    <!-- bony ridges on head -->
    <path d="M20 28 L14 14 L22 26" fill="#7f1d1d"/>
    <path d="M30 26 L28 10 L36 24" fill="#7f1d1d"/>
    <path d="M38 28 L40 12 L44 26" fill="#7f1d1d"/>
    <!-- long snout -->
    <ellipse cx="6" cy="46" rx="12" ry="9" fill="#991b1b"/>
    <!-- nostrils with fire -->
    <ellipse cx="2" cy="42" rx="2.5" ry="2" fill="#1a0000"/>
    <ellipse cx="8" cy="42" rx="2.5" ry="2" fill="#1a0000"/>
    <!-- fire breath -->
    <path d="M-4 44 Q-18 38 -24 44 Q-16 52 -4 48 Z" fill="#f97316" opacity="0.9"/>
    <path d="M-8 42 Q-24 36 -30 42 Q-22 50 -8 46 Z" fill="#fbbf24" opacity="0.7"/>
    <path d="M-12 40 Q-28 32 -34 38 Q-26 46 -12 42 Z" fill="#fef08a" opacity="0.5"/>
    <!-- huge eye with slit pupil -->
    <ellipse cx="18" cy="40" rx="7" ry="7" fill="#fbbf24"/>
    <ellipse cx="18" cy="40" rx="3" ry="6" fill="#1a0000"/>
    <circle cx="18" cy="38" r="1.5" fill="#fff" opacity="0.7"/>
    <!-- eye2 -->
    <ellipse cx="32" cy="38" rx="5" ry="5" fill="#fbbf24"/>
    <ellipse cx="32" cy="38" rx="2" ry="4" fill="#1a0000"/>
    <!-- massive teeth -->
    <path d="M2 48 L-2 56" stroke="#f0f0e0" stroke-width="3" stroke-linecap="round"/>
    <path d="M6 50 L4 58"  stroke="#f0f0e0" stroke-width="3" stroke-linecap="round"/>
    <path d="M10 51 L10 59" stroke="#f0f0e0" stroke-width="3" stroke-linecap="round"/>
    <path d="M14 51 L15 59" stroke="#f0f0e0" stroke-width="3" stroke-linecap="round"/>
    <!-- legs powerful -->
    <path d="M42 92 L36 108" stroke="#b91c1c" stroke-width="12" stroke-linecap="round"/>
    <path d="M78 92 L84 108" stroke="#b91c1c" stroke-width="12" stroke-linecap="round"/>
    <!-- claws large -->
    <path d="M28 108 L22 116" stroke="#7f1d1d" stroke-width="4" stroke-linecap="round"/>
    <path d="M34 110 L30 118" stroke="#7f1d1d" stroke-width="4" stroke-linecap="round"/>
    <path d="M40 110 L40 118" stroke="#7f1d1d" stroke-width="4" stroke-linecap="round"/>
    <!-- tail powerful -->
    <path d="M92 78 Q108 72 118 56 Q112 68 106 74 Q118 70 118 82 Q108 78 96 84 Z" fill="#991b1b"/>
    <path d="M118 56 L126 44 L120 58 Z" fill="#7f1d1d"/>
  </svg>`,
};
