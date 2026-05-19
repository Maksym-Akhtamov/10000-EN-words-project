// ===================== MONSTER SVG SPRITES =====================
const MONSTER_SVG = {
  // ── Egg Cluster hatchlings ────────────────────────────────────
  "Baby Spider": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- legs left (back to front) -->
    <line x1="36" y1="58" x2="10" y2="72" stroke="#1a1025" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="36" y1="52" x2="8"  y2="52" stroke="#1a1025" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="36" y1="46" x2="10" y2="34" stroke="#1a1025" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="38" y1="41" x2="16" y2="22" stroke="#1a1025" stroke-width="3"   stroke-linecap="round"/>
    <!-- legs right -->
    <line x1="64" y1="58" x2="90" y2="72" stroke="#1a1025" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="64" y1="52" x2="92" y2="52" stroke="#1a1025" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="64" y1="46" x2="90" y2="34" stroke="#1a1025" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="62" y1="41" x2="84" y2="22" stroke="#1a1025" stroke-width="3"   stroke-linecap="round"/>
    <!-- abdomen -->
    <ellipse cx="50" cy="64" rx="22" ry="20" fill="#2d1b4e"/>
    <ellipse cx="50" cy="60" rx="16" ry="12" fill="#3d2060" opacity="0.7"/>
    <!-- abdomen markings -->
    <ellipse cx="50" cy="64" rx="8"  ry="6"  fill="#4a1a6e" opacity="0.5"/>
    <circle  cx="50" cy="55" r="3"           fill="#5a2080" opacity="0.4"/>
    <!-- cephalothorax -->
    <ellipse cx="50" cy="41" rx="14" ry="12" fill="#1e1235"/>
    <!-- fuzz / hair -->
    <line x1="40" y1="33" x2="38" y2="27" stroke="#2a1845" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="50" y1="30" x2="50" y2="24" stroke="#2a1845" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="60" y1="33" x2="62" y2="27" stroke="#2a1845" stroke-width="1.5" stroke-linecap="round"/>
    <!-- 8 eyes — two large, six small -->
    <circle cx="44" cy="37" r="4.5" fill="#fff"/>
    <circle cx="56" cy="37" r="4.5" fill="#fff"/>
    <circle cx="44" cy="37" r="3"   fill="#cc1111"/>
    <circle cx="56" cy="37" r="3"   fill="#cc1111"/>
    <circle cx="44" cy="37" r="1.3" fill="#0a0010"/>
    <circle cx="56" cy="37" r="1.3" fill="#0a0010"/>
    <circle cx="45" cy="36" r=".6"  fill="#fff" opacity=".7"/>
    <circle cx="57" cy="36" r=".6"  fill="#fff" opacity=".7"/>
    <!-- small side eyes -->
    <circle cx="38" cy="40" r="2.2" fill="#cc1111"/>
    <circle cx="62" cy="40" r="2.2" fill="#cc1111"/>
    <circle cx="33" cy="43" r="1.5" fill="#aa0000"/>
    <circle cx="67" cy="43" r="1.5" fill="#aa0000"/>
    <!-- chelicerae -->
    <path d="M46 49 Q44 55 43 57" stroke="#1a0d30" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M54 49 Q56 55 57 57" stroke="#1a0d30" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="43" cy="57" r="2" fill="#3a0050"/>
    <circle cx="57" cy="57" r="2" fill="#3a0050"/>
    <!-- web shimmer on abdomen -->
    <ellipse cx="50" cy="64" rx="14" ry="12" fill="none" stroke="#6040a0" stroke-width=".7" opacity=".35"/>
    <line x1="50" y1="44" x2="50" y2="84" stroke="#6040a0" stroke-width=".6" opacity=".25"/>
  </svg>`,

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

  // ── Frozen Biome — new mobs ───────────────────────────────────

  "Frost Archer": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- legs -->
    <rect x="38" y="90" width="11" height="24" fill="#1e3a5f" rx="4"/>
    <rect x="52" y="90" width="11" height="24" fill="#1e3a5f" rx="4"/>
    <!-- boots -->
    <ellipse cx="43" cy="113" rx="8" ry="5" fill="#1e40af"/>
    <ellipse cx="57" cy="113" rx="8" ry="5" fill="#1e40af"/>
    <!-- body — frost leather -->
    <path d="M30 58 L50 52 L70 58 L68 92 L32 92 Z" fill="#1e3a5f"/>
    <!-- chest frost plate -->
    <path d="M36 62 L50 58 L64 62 L62 82 L38 82 Z" fill="#1e40af" opacity="0.7"/>
    <!-- ice crystal on chest -->
    <path d="M50 64 L46 72 L50 80 L54 72 Z" fill="#93c5fd" opacity="0.5"/>
    <!-- head -->
    <ellipse cx="50" cy="38" rx="17" ry="17" fill="#bfdbfe"/>
    <!-- frost hood -->
    <path d="M33 34 Q34 16 50 14 Q66 16 67 34 L63 30 Q60 20 50 18 Q40 20 37 30 Z" fill="#1e3a5f"/>
    <!-- eyes -->
    <ellipse cx="43" cy="36" rx="4" ry="4" fill="#0ea5e9"/>
    <ellipse cx="57" cy="36" rx="4" ry="4" fill="#0ea5e9"/>
    <circle cx="43" cy="36" r="2" fill="#e0f2fe"/>
    <circle cx="57" cy="36" r="2" fill="#e0f2fe"/>
    <!-- mouth -->
    <path d="M44 46 Q50 50 56 46" stroke="#1e3a5f" stroke-width="1.5" fill="none"/>
    <!-- draw arm left -->
    <line x1="30" y1="65" x2="8" y2="58" stroke="#1e3a5f" stroke-width="7" stroke-linecap="round"/>
    <!-- draw arm right pulling string -->
    <line x1="70" y1="65" x2="90" y2="55" stroke="#1e3a5f" stroke-width="7" stroke-linecap="round"/>
    <!-- ice bow -->
    <path d="M4 44 Q-4 58 4 72" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- bow string -->
    <line x1="4" y1="44" x2="8" y2="58" stroke="#bfdbfe" stroke-width="1"/>
    <line x1="4" y1="72" x2="8" y2="58" stroke="#bfdbfe" stroke-width="1"/>
    <!-- ice arrow drawn -->
    <line x1="8" y1="58" x2="88" y2="55" stroke="#93c5fd" stroke-width="2"/>
    <path d="M88 55 L82 52 L84 55 L82 58 Z" fill="#bfdbfe"/>
    <!-- bow arm detail -->
    <circle cx="8" cy="58" r="4" fill="#60a5fa"/>
    <!-- ice shards on shoulders -->
    <path d="M30 58 L24 48 L32 54" fill="#bfdbfe" opacity="0.8"/>
    <path d="M70 58 L76 48 L68 54" fill="#bfdbfe" opacity="0.8"/>
  </svg>`,

  "Crystal Elemental": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- base crystal cluster -->
    <path d="M50 110 L28 78 L36 42 L50 30 L64 42 L72 78 Z" fill="#1e40af"/>
    <!-- main body facets -->
    <path d="M50 30 L36 42 L42 78 L50 110 L58 78 L64 42 Z" fill="#2563eb" opacity="0.6"/>
    <path d="M50 30 L64 42 L72 78 L50 110" fill="#3b82f6" opacity="0.4"/>
    <!-- inner glow core -->
    <ellipse cx="50" cy="68" rx="14" ry="22" fill="#bfdbfe" opacity="0.3"/>
    <!-- left side crystals -->
    <path d="M28 78 L14 54 L24 68" fill="#1e3a5f"/>
    <path d="M26 68 L10 44 L22 58" fill="#1e40af" opacity="0.8"/>
    <!-- right side crystals -->
    <path d="M72 78 L86 54 L76 68" fill="#1e3a5f"/>
    <path d="M74 68 L90 44 L78 58" fill="#1e40af" opacity="0.8"/>
    <!-- head crystal -->
    <path d="M50 30 L40 8 L50 18 L60 8 Z" fill="#60a5fa"/>
    <path d="M50 30 L44 12 L50 20" fill="#93c5fd" opacity="0.7"/>
    <!-- side head crystals -->
    <path d="M36 42 L24 26 L34 34" fill="#93c5fd"/>
    <path d="M64 42 L76 26 L66 34" fill="#93c5fd"/>
    <!-- glowing eyes -->
    <ellipse cx="42" cy="52" rx="6" ry="6" fill="#e0f2fe"/>
    <ellipse cx="58" cy="52" rx="6" ry="6" fill="#e0f2fe"/>
    <ellipse cx="42" cy="52" rx="3" ry="3" fill="#0ea5e9"/>
    <ellipse cx="58" cy="52" rx="3" ry="3" fill="#0ea5e9"/>
    <!-- crack lines -->
    <path d="M44 62 L40 82 L46 96" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M58 60 L62 78" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <!-- sparkle dots -->
    <circle cx="32" cy="60" r="2" fill="#bfdbfe" opacity="0.9"/>
    <circle cx="68" cy="56" r="2" fill="#bfdbfe" opacity="0.9"/>
    <circle cx="50" cy="44" r="2" fill="#e0f2fe" opacity="0.9"/>
  </svg>`,

  "Glacial Worm": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- tail -->
    <ellipse cx="50" cy="108" rx="10" ry="8" fill="#1e3a5f"/>
    <!-- body segments -->
    <ellipse cx="50" cy="94" rx="16" ry="10" fill="#1e40af"/>
    <path d="M34 94 Q50 88 66 94" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="78" rx="20" ry="11" fill="#1e3a5f"/>
    <path d="M30 78 Q50 72 70 78" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="61" rx="23" ry="12" fill="#1e40af"/>
    <path d="M27 61 Q50 55 73 61" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="44" rx="24" ry="13" fill="#1e3a5f"/>
    <path d="M26 44 Q50 38 74 44" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- head -->
    <ellipse cx="50" cy="26" rx="24" ry="18" fill="#2563eb"/>
    <!-- ice spikes on head -->
    <path d="M34 16 L30 4 L36 12" fill="#bfdbfe"/>
    <path d="M50 14 L50 2 L54 12" fill="#93c5fd"/>
    <path d="M66 16 L70 4 L64 12" fill="#bfdbfe"/>
    <!-- mandibles -->
    <path d="M30 32 L16 40 L28 36" fill="#1e40af"/>
    <path d="M70 32 L84 40 L72 36" fill="#1e40af"/>
    <!-- eyes -->
    <ellipse cx="38" cy="24" rx="7" ry="7" fill="#0ea5e9"/>
    <ellipse cx="62" cy="24" rx="7" ry="7" fill="#0ea5e9"/>
    <circle cx="38" cy="24" r="4" fill="#e0f2fe"/>
    <circle cx="62" cy="24" r="4" fill="#e0f2fe"/>
    <circle cx="38" cy="24" r="2" fill="#0c4a6e"/>
    <circle cx="62" cy="24" r="2" fill="#0c4a6e"/>
    <!-- poison drip green-ice -->
    <circle cx="18" cy="42" r="3" fill="#4ade80" opacity="0.7"/>
    <path d="M18 42 L18 50" stroke="#4ade80" stroke-width="2" opacity="0.5"/>
    <!-- ice plates along body -->
    <path d="M26 68 L20 62 L28 64" fill="#60a5fa" opacity="0.6"/>
    <path d="M74 68 L80 62 L72 64" fill="#60a5fa" opacity="0.6"/>
  </svg>`,

  "Ice Gargoyle": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2020/svg">
    <!-- stone body -->
    <path d="M32 60 L50 54 L68 60 L66 96 L34 96 Z" fill="#374151"/>
    <!-- ice coating -->
    <path d="M36 64 L50 58 L64 64 L62 88 L38 88 Z" fill="#1e40af" opacity="0.6"/>
    <!-- legs -->
    <rect x="34" y="92" width="13" height="22" fill="#374151" rx="3"/>
    <rect x="53" y="92" width="13" height="22" fill="#374151" rx="3"/>
    <!-- stone claws feet -->
    <path d="M34 112 L28 118 L36 114 L40 118 L44 114 L47 118" stroke="#1e3a5f" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M53 112 L53 118 L58 114 L62 118 L66 114 L72 118" stroke="#1e3a5f" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- arms -->
    <path d="M32 66 L14 78" stroke="#374151" stroke-width="9" stroke-linecap="round"/>
    <path d="M68 66 L86 78" stroke="#374151" stroke-width="9" stroke-linecap="round"/>
    <!-- clawed hands -->
    <path d="M10 76 L6 82 L12 78 L10 86" stroke="#1e3a5f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M90 76 L94 82 L88 78 L90 86" stroke="#1e3a5f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- wings -->
    <path d="M32 60 Q10 30 4 8 Q20 20 32 44 Q36 52 36 60 Z" fill="#1e40af" opacity="0.8"/>
    <path d="M68 60 Q90 30 96 8 Q80 20 68 44 Q64 52 64 60 Z" fill="#1e40af" opacity="0.8"/>
    <!-- wing membranes veins -->
    <path d="M32 56 Q18 36 10 14" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M34 50 Q22 32 16 10" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M68 56 Q82 36 90 14" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- head -->
    <ellipse cx="50" cy="38" rx="20" ry="18" fill="#374151"/>
    <!-- ice horns -->
    <path d="M34 28 L26 10 L36 22" fill="#93c5fd"/>
    <path d="M66 28 L74 10 L64 22" fill="#93c5fd"/>
    <!-- face -->
    <ellipse cx="41" cy="36" rx="6" ry="6" fill="#0ea5e9"/>
    <ellipse cx="59" cy="36" rx="6" ry="6" fill="#0ea5e9"/>
    <circle cx="41" cy="36" r="3" fill="#e0f2fe"/>
    <circle cx="59" cy="36" r="3" fill="#e0f2fe"/>
    <!-- snarl -->
    <path d="M40 48 L44 52 L50 50 L56 52 L60 48" stroke="#bfdbfe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- ice crystals on shoulders -->
    <path d="M32 60 L26 50 L34 56" fill="#bfdbfe" opacity="0.7"/>
    <path d="M68 60 L74 50 L66 56" fill="#bfdbfe" opacity="0.7"/>
  </svg>`,

  "Frozen Revenant": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- tattered robe bottom -->
    <path d="M30 80 L34 120 L42 108 L50 120 L58 108 L66 120 L70 80 Z" fill="#0c4a6e"/>
    <!-- robe body -->
    <path d="M28 50 L50 44 L72 50 L70 82 L30 82 Z" fill="#1e3a5f"/>
    <!-- ice encasing cracks -->
    <path d="M36 52 L32 68 L38 80" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M64 50 L68 66 L62 78" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- ice slab over chest -->
    <path d="M38 58 L50 54 L62 58 L60 74 L40 74 Z" fill="#1e40af" opacity="0.5"/>
    <!-- bone hands -->
    <path d="M28 58 L10 52" stroke="#1e3a5f" stroke-width="8" stroke-linecap="round"/>
    <path d="M72 58 L90 52" stroke="#1e3a5f" stroke-width="8" stroke-linecap="round"/>
    <!-- bony fingers left -->
    <path d="M10 52 L4 48 M10 52 L6 56 M10 52 L2 54" stroke="#93c5fd" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- bony fingers right -->
    <path d="M90 52 L96 48 M90 52 L94 56 M90 52 L98 54" stroke="#93c5fd" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- skull head -->
    <ellipse cx="50" cy="30" rx="20" ry="20" fill="#e0f2fe"/>
    <!-- ice over skull -->
    <ellipse cx="50" cy="26" rx="18" ry="14" fill="#bfdbfe" opacity="0.4"/>
    <!-- skull eyes — dark hollows -->
    <ellipse cx="40" cy="28" rx="7" ry="7" fill="#0c4a6e"/>
    <ellipse cx="60" cy="28" rx="7" ry="7" fill="#0c4a6e"/>
    <!-- glowing blue inside eyes -->
    <ellipse cx="40" cy="28" rx="4" ry="4" fill="#0ea5e9" opacity="0.7"/>
    <ellipse cx="60" cy="28" rx="4" ry="4" fill="#0ea5e9" opacity="0.7"/>
    <!-- skull nose -->
    <path d="M46 36 L50 40 L54 36" stroke="#0c4a6e" stroke-width="2" fill="none"/>
    <!-- teeth -->
    <path d="M40 44 L42 50 M44 43 L45 49 M48 43 L48 49 M52 43 L52 49 M56 43 L56 49 M58 44 L60 50"
          stroke="#e0f2fe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- ice crown -->
    <path d="M30 22 L34 10 L38 18 L44 8 L50 16 L56 8 L62 18 L66 10 L70 22"
          fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>`,

  "Storm Harpy": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- tail feathers -->
    <path d="M42 106 L38 120 L50 110 L62 120 L58 106" fill="#374151"/>
    <!-- bird body lower -->
    <path d="M34 72 L50 66 L66 72 L64 106 L36 106 Z" fill="#4b5563"/>
    <!-- bird body upper -->
    <path d="M32 52 L50 46 L68 52 L66 74 L34 74 Z" fill="#374151"/>
    <!-- wing left — huge -->
    <path d="M32 56 Q8 30 2 6 Q14 18 20 38 Q26 50 34 62 Z" fill="#1e3a5f"/>
    <path d="M32 62 Q4 42 0 18 Q12 30 18 50 Q24 58 34 68 Z" fill="#1e40af" opacity="0.5"/>
    <!-- wing feather tips left -->
    <path d="M2 6 L8 14 L10 4 L16 14 L18 6" fill="#374151"/>
    <!-- wing right — huge -->
    <path d="M68 56 Q92 30 98 6 Q86 18 80 38 Q74 50 66 62 Z" fill="#1e3a5f"/>
    <path d="M68 62 Q96 42 100 18 Q88 30 82 50 Q76 58 66 68 Z" fill="#1e40af" opacity="0.5"/>
    <!-- wind streaks on wings -->
    <path d="M20 38 Q14 26 8 12" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M24 46 Q16 34 10 20" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M80 38 Q86 26 92 12" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- taloned legs -->
    <path d="M40 104 L36 116 M40 104 L42 118 M40 104 L46 116" stroke="#374151" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M60 104 L56 116 M60 104 L60 118 M60 104 L64 116" stroke="#374151" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- head — humanoid -->
    <ellipse cx="50" cy="34" rx="17" ry="17" fill="#bfdbfe"/>
    <!-- wild wind hair -->
    <path d="M33 26 Q20 10 28 2 Q34 16 36 22" fill="#60a5fa"/>
    <path d="M67 26 Q80 10 72 2 Q66 16 64 22" fill="#60a5fa"/>
    <path d="M50 18 Q46 4 54 2 Q54 12 52 18" fill="#93c5fd"/>
    <!-- face -->
    <ellipse cx="42" cy="32" rx="5" ry="5" fill="#1e40af"/>
    <ellipse cx="58" cy="32" rx="5" ry="5" fill="#1e40af"/>
    <circle cx="42" cy="32" r="2.5" fill="#e0f2fe"/>
    <circle cx="58" cy="32" r="2.5" fill="#e0f2fe"/>
    <!-- beak/mouth -->
    <path d="M46 42 L50 46 L54 42" fill="#fbbf24"/>
    <!-- ice storm aura -->
    <circle cx="50" cy="34" r="22" fill="none" stroke="#93c5fd" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
  </svg>`,

  "Blizzard Wraith": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- swirling blizzard base -->
    <path d="M50 120 Q20 100 16 76 Q12 52 30 36 Q38 28 50 26 Q62 28 70 36 Q88 52 84 76 Q80 100 50 120 Z" fill="#0c4a6e" opacity="0.6"/>
    <!-- wraith cloak -->
    <path d="M28 60 Q24 80 26 100 Q38 90 50 94 Q62 90 74 100 Q76 80 72 60 Q62 52 50 50 Q38 52 28 60 Z" fill="#1e3a5f"/>
    <!-- cloak wisps bottom -->
    <path d="M30 98 Q26 110 24 118" stroke="#1e40af" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M40 102 Q38 112 36 120" stroke="#1e40af" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M60 102 Q62 112 64 120" stroke="#1e40af" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M70 98 Q74 110 76 118" stroke="#1e40af" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- reaching arms -->
    <path d="M28 64 Q10 56 4 48" stroke="#1e3a5f" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M72 64 Q90 56 96 48" stroke="#1e3a5f" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- ghostly hands -->
    <path d="M4 48 L0 44 M4 48 L2 54 M4 48 L8 44" stroke="#60a5fa" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M96 48 L100 44 M96 48 L98 54 M96 48 L92 44" stroke="#60a5fa" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- face — hollow -->
    <ellipse cx="50" cy="40" rx="20" ry="18" fill="#1e3a5f"/>
    <!-- blizzard-blue eye slits -->
    <path d="M34 36 L44 40 L34 44" fill="none" stroke="#bfdbfe" stroke-width="3" stroke-linecap="round"/>
    <path d="M66 36 L56 40 L66 44" fill="none" stroke="#bfdbfe" stroke-width="3" stroke-linecap="round"/>
    <!-- screaming mouth -->
    <path d="M38 50 Q50 60 62 50 Q56 56 50 58 Q44 56 38 50 Z" fill="#0c4a6e"/>
    <!-- swirling snowflakes -->
    <line x1="16" y1="40" x2="16" y2="52" stroke="#93c5fd" stroke-width="1.5" opacity="0.7"/>
    <line x1="10" y1="46" x2="22" y2="46" stroke="#93c5fd" stroke-width="1.5" opacity="0.7"/>
    <line x1="84" y1="40" x2="84" y2="52" stroke="#93c5fd" stroke-width="1.5" opacity="0.7"/>
    <line x1="78" y1="46" x2="90" y2="46" stroke="#93c5fd" stroke-width="1.5" opacity="0.7"/>
    <line x1="12" y1="42" x2="20" y2="50" stroke="#93c5fd" stroke-width="1" opacity="0.7"/>
    <line x1="20" y1="42" x2="12" y2="50" stroke="#93c5fd" stroke-width="1" opacity="0.7"/>
    <line x1="80" y1="42" x2="88" y2="50" stroke="#93c5fd" stroke-width="1" opacity="0.7"/>
    <line x1="88" y1="42" x2="80" y2="50" stroke="#93c5fd" stroke-width="1" opacity="0.7"/>
  </svg>`,

  "Avalanche Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- massive boulder legs -->
    <ellipse cx="36" cy="106" rx="18" ry="12" fill="#374151"/>
    <ellipse cx="64" cy="106" rx="18" ry="12" fill="#374151"/>
    <!-- huge rocky body -->
    <path d="M14 58 L50 44 L86 58 L82 100 L18 100 Z" fill="#374151"/>
    <!-- snow-covered top of body -->
    <path d="M14 58 L50 44 L86 58 L80 68 L50 60 L20 68 Z" fill="#e0f2fe" opacity="0.7"/>
    <!-- rock cracks -->
    <path d="M36 64 L30 82 L38 94" stroke="#1f2937" stroke-width="2" fill="none"/>
    <path d="M62 62 L68 80 L60 92" stroke="#1f2937" stroke-width="2" fill="none"/>
    <path d="M50 66 L50 88" stroke="#1f2937" stroke-width="1.5" fill="none"/>
    <!-- ice filling cracks -->
    <path d="M36 64 L30 82" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M62 62 L68 80" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.7"/>
    <!-- massive arms — boulders -->
    <ellipse cx="8" cy="74" rx="14" ry="20" fill="#4b5563"/>
    <ellipse cx="92" cy="74" rx="14" ry="20" fill="#4b5563"/>
    <!-- arm snow caps -->
    <path d="M0 64 Q8 58 16 64 Q10 60 8 58 Q6 60 0 64 Z" fill="#e0f2fe" opacity="0.7"/>
    <path d="M100 64 Q92 58 84 64 Q90 60 92 58 Q94 60 100 64 Z" fill="#e0f2fe" opacity="0.7"/>
    <!-- head — giant boulder -->
    <ellipse cx="50" cy="30" rx="28" ry="22" fill="#4b5563"/>
    <!-- snow cap on head -->
    <path d="M22 24 Q30 14 50 12 Q70 14 78 24 Q64 18 50 16 Q36 18 22 24 Z" fill="#e0f2fe"/>
    <!-- pebble eyes -->
    <circle cx="38" cy="30" r="9" fill="#1f2937"/>
    <circle cx="62" cy="30" r="9" fill="#1f2937"/>
    <circle cx="38" cy="30" r="5" fill="#0ea5e9" opacity="0.7"/>
    <circle cx="62" cy="30" r="5" fill="#0ea5e9" opacity="0.7"/>
    <!-- rock mouth -->
    <path d="M34 42 L40 46 L50 44 L60 46 L66 42" stroke="#1f2937" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- icicles hanging -->
    <path d="M30 100 L28 110 L32 106 L34 114" stroke="#bfdbfe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M50 100 L50 112" stroke="#bfdbfe" stroke-width="2" stroke-linecap="round"/>
    <path d="M70 100 L72 110 L68 106 L66 114" stroke="#bfdbfe" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,

  "Frost Yeti": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- thick furry legs -->
    <ellipse cx="36" cy="104" rx="16" ry="12" fill="#e0f2fe"/>
    <ellipse cx="64" cy="104" rx="16" ry="12" fill="#e0f2fe"/>
    <!-- feet claws -->
    <path d="M22 110 L18 118 M28 112 L26 120 M36 114 L36 120" stroke="#93c5fd" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M78 110 L82 118 M72 112 L74 120 M64 114 L64 120" stroke="#93c5fd" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- massive furry body -->
    <path d="M16 56 L50 46 L84 56 L80 100 L20 100 Z" fill="#bfdbfe"/>
    <!-- fur texture lines body -->
    <path d="M24 62 Q28 58 32 62" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M40 58 Q44 54 48 58" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M60 58 Q64 54 68 58" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M72 62 Q76 58 80 62" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M22 76 Q26 72 30 76" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M70 76 Q74 72 78 76" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.6"/>
    <!-- thick arms -->
    <path d="M16 60 L0 78" stroke="#bfdbfe" stroke-width="14" stroke-linecap="round"/>
    <path d="M84 60 L100 78" stroke="#bfdbfe" stroke-width="14" stroke-linecap="round"/>
    <!-- clawed hands -->
    <path d="M0 78 L-4 86 M0 78 L4 86 M0 78 L0 88" stroke="#93c5fd" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M100 78 L104 86 M100 78 L96 86 M100 78 L100 88" stroke="#93c5fd" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- huge head -->
    <ellipse cx="50" cy="30" rx="26" ry="24" fill="#e0f2fe"/>
    <!-- fur on head -->
    <path d="M24 26 Q18 10 30 6 Q28 18 30 24" fill="#bfdbfe"/>
    <path d="M76 26 Q82 10 70 6 Q72 18 70 24" fill="#bfdbfe"/>
    <!-- ice horns -->
    <path d="M36 12 L30 0 L38 8" fill="#60a5fa"/>
    <path d="M64 12 L70 0 L62 8" fill="#60a5fa"/>
    <!-- deep set eyes -->
    <ellipse cx="38" cy="28" rx="8" ry="8" fill="#1e40af"/>
    <ellipse cx="62" cy="28" rx="8" ry="8" fill="#1e40af"/>
    <circle cx="38" cy="28" r="4" fill="#0ea5e9"/>
    <circle cx="62" cy="28" r="4" fill="#0ea5e9"/>
    <circle cx="39" cy="27" r="2" fill="#e0f2fe"/>
    <circle cx="63" cy="27" r="2" fill="#e0f2fe"/>
    <!-- nose broad -->
    <ellipse cx="50" cy="38" rx="7" ry="5" fill="#93c5fd"/>
    <circle cx="47" cy="38" r="2" fill="#1e40af"/>
    <circle cx="53" cy="38" r="2" fill="#1e40af"/>
    <!-- roaring mouth -->
    <path d="M36 46 Q50 56 64 46 Q56 52 50 54 Q44 52 36 46 Z" fill="#1e3a5f"/>
    <path d="M40 48 L40 52 M46 47 L46 53 M54 47 L54 53 M60 48 L60 52" stroke="#e0f2fe" stroke-width="1.5" fill="none"/>
  </svg>`,

  "Permafrost Crawler": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- stinger tail -->
    <path d="M50 108 Q72 104 82 92 Q88 84 84 78 L78 84 Q80 90 74 96 Q66 104 50 108 Z" fill="#1e40af"/>
    <path d="M84 78 L92 72 L86 80 Z" fill="#60a5fa"/>
    <!-- abdomen -->
    <ellipse cx="58" cy="96" rx="24" ry="16" fill="#1e3a5f"/>
    <!-- ice plates on abdomen -->
    <path d="M36 96 Q58 90 80 96 Q58 92 36 96 Z" fill="#1e40af" opacity="0.6"/>
    <path d="M38 102 Q58 98 78 102" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- thorax -->
    <ellipse cx="44" cy="76" rx="22" ry="18" fill="#1e40af"/>
    <!-- legs — 3 pairs -->
    <path d="M30 72 L14 62 M30 76 L12 76 M30 80 L14 90" stroke="#1e3a5f" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M58 72 L74 62 M58 76 L76 76 M58 80 L74 90" stroke="#1e3a5f" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- claws on legs -->
    <path d="M14 62 L10 58 L12 64" stroke="#60a5fa" stroke-width="1.5" fill="none"/>
    <path d="M12 76 L6 74 L8 80" stroke="#60a5fa" stroke-width="1.5" fill="none"/>
    <path d="M74 62 L78 58 L76 64" stroke="#60a5fa" stroke-width="1.5" fill="none"/>
    <!-- head -->
    <ellipse cx="32" cy="56" rx="20" ry="16" fill="#1e3a5f"/>
    <!-- pincers -->
    <path d="M16 52 Q4 44 2 36 Q10 40 14 48" fill="#1e40af"/>
    <path d="M16 60 Q4 68 2 76 Q10 72 14 64" fill="#1e40af"/>
    <!-- ice tips on pincers -->
    <path d="M2 36 L0 30 L4 34" fill="#93c5fd"/>
    <path d="M2 76 L0 82 L4 78" fill="#93c5fd"/>
    <!-- eyes — row of 4 -->
    <circle cx="28" cy="52" r="4" fill="#0ea5e9"/>
    <circle cx="36" cy="50" r="4" fill="#0ea5e9"/>
    <circle cx="44" cy="52" r="3" fill="#0ea5e9"/>
    <circle cx="28" cy="52" r="2" fill="#e0f2fe"/>
    <circle cx="36" cy="50" r="2" fill="#e0f2fe"/>
    <!-- poison drip green-ice -->
    <circle cx="2" cy="38" r="3" fill="#4ade80" opacity="0.7"/>
    <path d="M2 38 L2 46" stroke="#4ade80" stroke-width="2" opacity="0.5"/>
    <!-- ice armor plates on thorax -->
    <path d="M24 70 L20 62 L28 66" fill="#bfdbfe" opacity="0.7"/>
    <path d="M64 70 L68 62 L60 66" fill="#bfdbfe" opacity="0.7"/>
  </svg>`,

  "Frozen Leviathan": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- coiled tail body -->
    <path d="M60 110 Q84 106 90 90 Q96 74 84 62 Q78 56 68 58 Q80 66 78 80 Q76 94 60 102 Z" fill="#1e3a5f"/>
    <path d="M62 104 Q80 98 82 84 Q84 70 74 64" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- body mid segment -->
    <path d="M18 90 Q30 106 50 108 Q62 106 60 102 Q50 100 40 96 Q28 88 24 74 Z" fill="#1e40af"/>
    <!-- main body -->
    <path d="M14 48 Q8 62 10 78 Q14 90 24 94 Q32 88 36 78 Q40 66 38 54 Q28 44 14 48 Z" fill="#1e3a5f"/>
    <!-- spine plates -->
    <path d="M14 48 L8 36 L16 44" fill="#60a5fa"/>
    <path d="M18 44 L14 30 L22 40" fill="#60a5fa"/>
    <path d="M26 42 L24 28 L30 38" fill="#60a5fa"/>
    <!-- ice scales -->
    <path d="M16 58 Q22 54 28 58" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M14 68 Q22 64 30 68" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M16 78 Q24 74 32 78" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- neck -->
    <path d="M26 42 Q40 30 50 28" stroke="#1e3a5f" stroke-width="14" fill="none" stroke-linecap="round"/>
    <!-- head -->
    <ellipse cx="60" cy="24" rx="26" ry="18" fill="#1e3a5f"/>
    <!-- head spikes -->
    <path d="M44 14 L40 2 L46 10" fill="#93c5fd"/>
    <path d="M56 10 L54 0 L60 8" fill="#bfdbfe"/>
    <path d="M70 12 L72 0 L68 10" fill="#93c5fd"/>
    <!-- massive jaws -->
    <path d="M34 28 Q36 36 44 38 Q52 40 60 38 Q68 36 72 32 L70 28" fill="#0c4a6e"/>
    <!-- teeth -->
    <path d="M38 30 L36 38 M44 28 L44 36 M50 27 L50 35 M56 28 L56 36 M62 28 L62 36 M68 30 L70 38"
          stroke="#bfdbfe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- eyes -->
    <ellipse cx="50" cy="18" rx="7" ry="7" fill="#0ea5e9"/>
    <ellipse cx="68" cy="16" rx="7" ry="7" fill="#0ea5e9"/>
    <ellipse cx="50" cy="18" rx="4" ry="4" fill="#e0f2fe"/>
    <ellipse cx="68" cy="16" rx="4" ry="4" fill="#e0f2fe"/>
    <circle cx="50" cy="18" r="2" fill="#0c4a6e"/>
    <circle cx="68" cy="16" r="2" fill="#0c4a6e"/>
    <!-- breath weapon — ice shards -->
    <path d="M34 32 L22 46 L28 40 L18 52" stroke="#bfdbfe" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
  </svg>`,

  "Tundra Specter": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- ghostly tundra form -->
    <path d="M50 120 Q22 108 18 84 Q14 60 30 44 Q38 36 50 34 Q62 36 70 44 Q86 60 82 84 Q78 108 50 120 Z" fill="#0c4a6e" opacity="0.4"/>
    <!-- spectral body -->
    <path d="M30 60 Q26 80 28 100 Q40 92 50 96 Q60 92 72 100 Q74 80 70 60 Q60 52 50 50 Q40 52 30 60 Z" fill="#1e3a5f" opacity="0.9"/>
    <!-- wisps at bottom -->
    <path d="M32 98 Q28 112 26 120" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M42 102 Q40 114 40 120" stroke="#60a5fa" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M58 102 Q60 114 60 120" stroke="#60a5fa" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M68 98 Q72 112 74 120" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- hovering arms — wispy -->
    <path d="M30 66 Q14 60 6 52" stroke="#1e3a5f" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M70 66 Q86 60 94 52" stroke="#1e3a5f" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- wispy hand fingers -->
    <path d="M6 52 L2 48 M6 52 L4 56 M6 52 L10 50" stroke="#60a5fa" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M94 52 L98 48 M94 52 L96 56 M94 52 L90 50" stroke="#60a5fa" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- head — hollow -->
    <ellipse cx="50" cy="40" rx="20" ry="18" fill="#1e3a5f"/>
    <!-- tundra cold eyes — wide -->
    <ellipse cx="38" cy="36" rx="8" ry="8" fill="#0c4a6e"/>
    <ellipse cx="62" cy="36" rx="8" ry="8" fill="#0c4a6e"/>
    <ellipse cx="38" cy="36" rx="5" ry="5" fill="#60a5fa" opacity="0.8"/>
    <ellipse cx="62" cy="36" rx="5" ry="5" fill="#60a5fa" opacity="0.8"/>
    <ellipse cx="38" cy="36" rx="2" ry="2" fill="#e0f2fe"/>
    <ellipse cx="62" cy="36" rx="2" ry="2" fill="#e0f2fe"/>
    <!-- frozen open mouth -->
    <ellipse cx="50" cy="50" rx="10" ry="6" fill="#0c4a6e"/>
    <path d="M42 48 L44 54 M48 47 L48 54 M52 47 L52 54 M58 48 L56 54"
          stroke="#bfdbfe" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- blizzard particles around -->
    <circle cx="14" cy="50" r="2" fill="#bfdbfe" opacity="0.8"/>
    <circle cx="86" cy="50" r="2" fill="#bfdbfe" opacity="0.8"/>
    <circle cx="20" cy="72" r="2" fill="#93c5fd" opacity="0.6"/>
    <circle cx="80" cy="72" r="2" fill="#93c5fd" opacity="0.6"/>
    <circle cx="12" cy="80" r="1.5" fill="#bfdbfe" opacity="0.5"/>
  </svg>`,

  "Ice Lich": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- tattered robe bottom -->
    <path d="M28 78 L24 120 L36 108 L50 120 L64 108 L76 120 L72 78 Z" fill="#0c4a6e"/>
    <!-- robe body -->
    <path d="M24 52 L50 44 L76 52 L72 80 L28 80 Z" fill="#1e3a5f"/>
    <!-- phylactery glow on chest -->
    <ellipse cx="50" cy="64" rx="10" ry="10" fill="#60a5fa" opacity="0.3"/>
    <ellipse cx="50" cy="64" rx="6" ry="6" fill="#bfdbfe" opacity="0.5"/>
    <ellipse cx="50" cy="64" rx="3" ry="3" fill="#e0f2fe"/>
    <!-- ice armor shoulders -->
    <path d="M24 52 L14 38 L24 46" fill="#1e40af"/>
    <path d="M76 52 L86 38 L76 46" fill="#1e40af"/>
    <path d="M22 44 L10 28 L22 38" fill="#60a5fa" opacity="0.8"/>
    <path d="M78 44 L90 28 L78 38" fill="#60a5fa" opacity="0.8"/>
    <!-- skeletal arms -->
    <path d="M24 58 L6 50" stroke="#bfdbfe" stroke-width="5" stroke-linecap="round"/>
    <path d="M76 58 L94 50" stroke="#bfdbfe" stroke-width="5" stroke-linecap="round"/>
    <!-- staff hand left -->
    <rect x="2" y="18" width="5" height="36" fill="#60a5fa" rx="2"/>
    <path d="M4.5 18 L0 6 L4.5 12 L9 6 Z" fill="#bfdbfe"/>
    <!-- orb on staff -->
    <circle cx="4.5" cy="12" r="5" fill="#0ea5e9" opacity="0.7"/>
    <circle cx="4.5" cy="12" r="3" fill="#e0f2fe"/>
    <!-- bony fingers right -->
    <path d="M94 50 L98 46 M94 50 L98 54 M94 50 L100 50" stroke="#bfdbfe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- skull head -->
    <ellipse cx="50" cy="28" rx="22" ry="22" fill="#e0f2fe"/>
    <!-- ice overlay -->
    <ellipse cx="50" cy="22" rx="20" ry="14" fill="#bfdbfe" opacity="0.4"/>
    <!-- towering ice crown -->
    <path d="M28 16 L24 0 L30 10 L36 0 L42 12 L50 2 L58 12 L64 0 L70 10 L76 0 L72 16"
          fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round"/>
    <!-- hollow skull eyes -->
    <ellipse cx="38" cy="26" rx="8" ry="8" fill="#0c4a6e"/>
    <ellipse cx="62" cy="26" rx="8" ry="8" fill="#0c4a6e"/>
    <ellipse cx="38" cy="26" rx="5" ry="5" fill="#0ea5e9" opacity="0.8"/>
    <ellipse cx="62" cy="26" rx="5" ry="5" fill="#0ea5e9" opacity="0.8"/>
    <!-- nose cavity -->
    <path d="M46 34 L50 38 L54 34" stroke="#0c4a6e" stroke-width="2" fill="none"/>
    <!-- teeth row -->
    <path d="M38 42 L40 50 M43 41 L44 49 M47 40 L47 48 M53 40 L53 48 M57 41 L56 49 M60 42 L62 50"
          stroke="#e0f2fe" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,

  "Shard Elemental": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- base — shard explosion from ground -->
    <path d="M50 110 L30 88 L26 60 L34 30 L50 20 L66 30 L74 60 L70 88 Z" fill="#1e40af"/>
    <!-- jagged body outline — shards -->
    <path d="M50 20 L42 10 L50 24 L58 10 Z" fill="#bfdbfe"/>
    <path d="M34 30 L22 20 L36 34" fill="#93c5fd"/>
    <path d="M66 30 L78 20 L64 34" fill="#93c5fd"/>
    <path d="M26 60 L10 52 L28 64" fill="#60a5fa"/>
    <path d="M74 60 L90 52 L72 64" fill="#60a5fa"/>
    <path d="M30 88 L14 84 L32 90" fill="#3b82f6"/>
    <path d="M70 88 L86 84 L68 90" fill="#3b82f6"/>
    <!-- inner body facets -->
    <path d="M50 20 L34 30 L38 60 L50 80 L62 60 L66 30 Z" fill="#2563eb" opacity="0.6"/>
    <path d="M50 20 L42 40 L50 80 L58 40 Z" fill="#60a5fa" opacity="0.3"/>
    <!-- glowing core -->
    <ellipse cx="50" cy="56" rx="12" ry="16" fill="#e0f2fe" opacity="0.4"/>
    <ellipse cx="50" cy="56" rx="6" ry="8" fill="#bfdbfe" opacity="0.5"/>
    <!-- shard arms — angular -->
    <path d="M26 60 L6 44 L18 58 L2 50" stroke="#1e40af" stroke-width="6" fill="none" stroke-linecap="square"/>
    <path d="M74 60 L94 44 L82 58 L98 50" stroke="#1e40af" stroke-width="6" fill="none" stroke-linecap="square"/>
    <!-- shard tips on arms -->
    <path d="M2 50 L0 44 L4 48" fill="#bfdbfe"/>
    <path d="M98 50 L100 44 L96 48" fill="#bfdbfe"/>
    <!-- eyes — sharp slits -->
    <path d="M40 44 L48 48 L40 52" fill="#e0f2fe"/>
    <path d="M60 44 L52 48 L60 52" fill="#e0f2fe"/>
    <!-- crack-mouth -->
    <path d="M36 64 L44 68 L50 66 L56 68 L64 64" stroke="#0c4a6e" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- floating shards around -->
    <path d="M14 34 L18 26 L20 34 L16 40 Z" fill="#60a5fa" opacity="0.7"/>
    <path d="M80 38 L84 30 L86 38 L82 44 Z" fill="#60a5fa" opacity="0.7"/>
    <path d="M8 78 L10 70 L14 78 L10 84 Z" fill="#93c5fd" opacity="0.6"/>
    <path d="M88 76 L92 68 L94 76 L90 82 Z" fill="#93c5fd" opacity="0.6"/>
  </svg>`,

  "Tundra Wolf Pack": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- back wolf — smaller, behind -->
    <ellipse cx="72" cy="82" rx="20" ry="13" fill="#374151"/>
    <ellipse cx="58" cy="74" rx="11" ry="10" fill="#374151"/>
    <ellipse cx="48" cy="70" rx="9" ry="8" fill="#4b5563"/>
    <path d="M40 68 L34 62 L42 66 Z" fill="#374151"/>
    <path d="M44 64 L40 56 L46 62 Z" fill="#4b5563"/>
    <circle cx="40" cy="67" r="3" fill="#fbbf24" opacity="0.8"/>
    <!-- back wolf legs -->
    <rect x="58" y="90" width="7" height="16" fill="#4b5563" rx="2"/>
    <rect x="70" y="90" width="7" height="16" fill="#4b5563" rx="2"/>
    <rect x="82" y="90" width="7" height="16" fill="#374151" rx="2"/>
    <!-- middle wolf -->
    <ellipse cx="46" cy="94" rx="26" ry="16" fill="#4b5563"/>
    <ellipse cx="28" cy="86" rx="14" ry="11" fill="#4b5563"/>
    <ellipse cx="18" cy="80" rx="11" ry="9" fill="#374151"/>
    <!-- mid wolf head detail -->
    <ellipse cx="8" cy="76" rx="8" ry="7" fill="#4b5563"/>
    <path d="M2 72 L-2 64 L6 70 Z" fill="#374151"/>
    <path d="M6 70 L4 60 L10 68 Z" fill="#4b5563"/>
    <!-- mid wolf eye -->
    <circle cx="6" cy="74" r="3.5" fill="#fbbf24"/>
    <circle cx="6" cy="74" r="1.5" fill="#0a0000"/>
    <!-- mid wolf teeth -->
    <path d="M2 78 L0 84 M4 79 L3 85" stroke="#e0f2fe" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- mid wolf legs -->
    <rect x="24" y="104" width="9" height="14" fill="#374151" rx="2"/>
    <rect x="38" y="106" width="9" height="14" fill="#4b5563" rx="2"/>
    <rect x="52" y="104" width="9" height="14" fill="#374151" rx="2"/>
    <rect x="64" y="106" width="9" height="14" fill="#4b5563" rx="2"/>
    <!-- front wolf — alpha, larger -->
    <ellipse cx="64" cy="64" rx="14" ry="10" fill="#1f2937"/>
    <ellipse cx="50" cy="58" rx="14" ry="10" fill="#1f2937"/>
    <!-- alpha head -->
    <ellipse cx="36" cy="52" rx="14" ry="12" fill="#1f2937"/>
    <ellipse cx="22" cy="48" rx="12" ry="10" fill="#374151"/>
    <!-- snout -->
    <ellipse cx="12" cy="50" rx="8" ry="6" fill="#1f2937"/>
    <ellipse cx="8" cy="48" rx="5" ry="4" fill="#374151"/>
    <!-- alpha ears -->
    <path d="M28 42 L24 30 L34 40 Z" fill="#1f2937"/>
    <path d="M36 40 L34 28 L42 38 Z" fill="#1f2937"/>
    <!-- alpha eyes — ice blue glow -->
    <circle cx="20" cy="46" r="5" fill="#0ea5e9"/>
    <circle cx="20" cy="46" r="2.5" fill="#e0f2fe"/>
    <circle cx="20" cy="46" r="1" fill="#0c4a6e"/>
    <!-- alpha teeth bared -->
    <path d="M8 52 L6 58 M10 54 L9 60 M14 55 L13 61" stroke="#e0f2fe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- breath mist -->
    <path d="M4 52 Q-4 50 -6 46" stroke="#bfdbfe" stroke-width="2" fill="none" opacity="0.5" stroke-linecap="round"/>
    <path d="M4 56 Q-4 56 -6 52" stroke="#bfdbfe" stroke-width="1.5" fill="none" opacity="0.4" stroke-linecap="round"/>
  </svg>`,

  "Frozen Titan": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- legs — pillars of ice -->
    <rect x="20" y="88" width="24" height="32" fill="#1e3a5f" rx="6"/>
    <rect x="56" y="88" width="24" height="32" fill="#1e3a5f" rx="6"/>
    <!-- leg ice facets -->
    <path d="M20 88 L32 82 L44 88" fill="#1e40af" opacity="0.5"/>
    <path d="M56 88 L68 82 L80 88" fill="#1e40af" opacity="0.5"/>
    <!-- foot blocks -->
    <rect x="14" y="112" width="30" height="8" fill="#1e40af" rx="4"/>
    <rect x="56" y="112" width="30" height="8" fill="#1e40af" rx="4"/>
    <!-- colossal torso -->
    <path d="M10 44 L50 28 L90 44 L86 92 L14 92 Z" fill="#1e3a5f"/>
    <!-- ice armor plates on torso -->
    <path d="M10 44 L50 28 L90 44 L84 58 L50 46 L16 58 Z" fill="#1e40af" opacity="0.6"/>
    <path d="M18 64 L50 56 L82 64" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M16 76 L50 68 L84 76" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- torso cracks -->
    <path d="M40 50 L36 72 L42 86" stroke="#93c5fd" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M62 48 L66 68 L60 84" stroke="#93c5fd" stroke-width="2" fill="none" opacity="0.6"/>
    <!-- massive arms -->
    <path d="M10 50 L-4 76" stroke="#1e3a5f" stroke-width="20" stroke-linecap="round"/>
    <path d="M90 50 L104 76" stroke="#1e3a5f" stroke-width="20" stroke-linecap="round"/>
    <!-- arm ice plates -->
    <path d="M10 50 L2 42 L10 46" fill="#1e40af"/>
    <path d="M90 50 L98 42 L90 46" fill="#1e40af"/>
    <!-- fists -->
    <circle cx="-4" cy="78" r="14" fill="#1e40af"/>
    <circle cx="104" cy="78" r="14" fill="#1e40af"/>
    <!-- fist spikes -->
    <path d="M-14 70 L-20 60 L-12 68" fill="#bfdbfe"/>
    <path d="M-16 80 L-24 78 L-14 76" fill="#93c5fd"/>
    <path d="M118 70 L124 60 L116 68" fill="#bfdbfe"/>
    <path d="M120 80 L126 78 L118 76" fill="#93c5fd"/>
    <!-- head — massive -->
    <ellipse cx="50" cy="20" rx="32" ry="24" fill="#2563eb"/>
    <!-- head ice spires -->
    <path d="M26 10 L20 -4 L28 6" fill="#bfdbfe"/>
    <path d="M40 4 L38 -8 L44 4" fill="#93c5fd"/>
    <path d="M60 4 L62 -8 L56 4" fill="#93c5fd"/>
    <path d="M74 10 L80 -4 L72 6" fill="#bfdbfe"/>
    <!-- face -->
    <ellipse cx="36" cy="20" rx="10" ry="10" fill="#0284c7"/>
    <ellipse cx="64" cy="20" rx="10" ry="10" fill="#0284c7"/>
    <ellipse cx="36" cy="20" rx="6" ry="6" fill="#e0f2fe"/>
    <ellipse cx="64" cy="20" rx="6" ry="6" fill="#e0f2fe"/>
    <circle cx="36" cy="20" r="3" fill="#0c4a6e"/>
    <circle cx="64" cy="20" r="3" fill="#0c4a6e"/>
    <!-- brow ridge -->
    <path d="M24 12 L36 16 L50 14 L64 16 L76 12" stroke="#1e3a5f" stroke-width="3" fill="none"/>
    <!-- grim mouth -->
    <path d="M32 32 L42 36 L50 34 L58 36 L68 32" stroke="#0c4a6e" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  "Blizzard Shade": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- outer blizzard vortex -->
    <path d="M50 110 Q18 96 12 68 Q6 40 24 24 Q36 12 50 12 Q64 12 76 24 Q94 40 88 68 Q82 96 50 110 Z"
          fill="#0c4a6e" opacity="0.3"/>
    <!-- dark shade form -->
    <path d="M30 56 Q26 76 28 98 Q40 88 50 92 Q60 88 72 98 Q74 76 70 56 Q60 48 50 46 Q40 48 30 56 Z"
          fill="#0c4a6e"/>
    <!-- shadow cloak wisps -->
    <path d="M28 96 Q22 108 18 118" stroke="#1e3a5f" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M38 100 Q34 112 32 120" stroke="#1e40af" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M62 100 Q66 112 68 120" stroke="#1e40af" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M72 96 Q78 108 82 118" stroke="#1e3a5f" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- blizzard arms — part ice, part shadow -->
    <path d="M30 62 Q10 56 2 46" stroke="#0c4a6e" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M70 62 Q90 56 98 46" stroke="#0c4a6e" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- ice shard claws -->
    <path d="M2 46 L-4 40 L2 44 M2 46 L-2 52 M2 46 L6 42" stroke="#60a5fa" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M98 46 L104 40 L98 44 M98 46 L102 52 M98 46 L94 42" stroke="#60a5fa" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- face — dark with glowing slits -->
    <ellipse cx="50" cy="38" rx="22" ry="20" fill="#0c4a6e"/>
    <!-- dodge shimmer outline -->
    <ellipse cx="50" cy="38" rx="22" ry="20" fill="none" stroke="#1e40af" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.7"/>
    <!-- eye slits — ice cold -->
    <path d="M32 32 L44 38 L32 44" fill="none" stroke="#93c5fd" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M68 32 L56 38 L68 44" fill="none" stroke="#93c5fd" stroke-width="3.5" stroke-linecap="round"/>
    <!-- blue glow inner -->
    <path d="M34 34 L42 38 L34 42" fill="none" stroke="#e0f2fe" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M66 34 L58 38 L66 42" fill="none" stroke="#e0f2fe" stroke-width="1.5" stroke-linecap="round"/>
    <!-- block shield — spectral ice -->
    <path d="M44 50 Q50 58 56 50 Q54 56 50 58 Q46 56 44 50 Z" fill="#1e40af" opacity="0.7"/>
    <!-- swirling snowflakes around body -->
    <line x1="14" y1="44" x2="14" y2="54" stroke="#bfdbfe" stroke-width="1.5" opacity="0.8"/>
    <line x1="9" y1="49" x2="19" y2="49" stroke="#bfdbfe" stroke-width="1.5" opacity="0.8"/>
    <line x1="10" y1="45" x2="18" y2="53" stroke="#bfdbfe" stroke-width="1" opacity="0.8"/>
    <line x1="18" y1="45" x2="10" y2="53" stroke="#bfdbfe" stroke-width="1" opacity="0.8"/>
    <line x1="86" y1="44" x2="86" y2="54" stroke="#bfdbfe" stroke-width="1.5" opacity="0.8"/>
    <line x1="81" y1="49" x2="91" y2="49" stroke="#bfdbfe" stroke-width="1.5" opacity="0.8"/>
    <line x1="82" y1="45" x2="90" y2="53" stroke="#bfdbfe" stroke-width="1" opacity="0.8"/>
    <line x1="90" y1="45" x2="82" y2="53" stroke="#bfdbfe" stroke-width="1" opacity="0.8"/>
    <!-- extra snowflake top -->
    <line x1="50" y1="8" x2="50" y2="16" stroke="#60a5fa" stroke-width="1.5" opacity="0.6"/>
    <line x1="46" y1="12" x2="54" y2="12" stroke="#60a5fa" stroke-width="1.5" opacity="0.6"/>
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

  // ── Shadow Biome — new mobs ───────────────────────────────────

  "Shade Archer": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- shadow cloak legs -->
    <path d="M36 86 Q32 104 28 120" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M64 86 Q68 104 72 120" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- body — shadow cloak -->
    <path d="M22 54 Q26 72 28 90 Q38 82 50 86 Q62 82 72 90 Q74 72 78 54 Q64 46 50 44 Q36 46 22 54 Z" fill="#1e1b4b"/>
    <!-- cloak detail -->
    <path d="M28 58 Q36 52 50 50 Q64 52 72 58" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- draw arm — reaching left -->
    <path d="M22 60 L4 54" stroke="#1e1b4b" stroke-width="7" stroke-linecap="round"/>
    <!-- pull arm — right -->
    <path d="M78 60 L94 52" stroke="#1e1b4b" stroke-width="7" stroke-linecap="round"/>
    <!-- shadow bow — purple glow -->
    <path d="M0 42 Q-6 54 0 66" stroke="#7c3aed" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M0 42 Q4 54 0 66" stroke="#a78bfa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- bow string -->
    <line x1="0" y1="42" x2="4" y2="54" stroke="#c4b5fd" stroke-width="1"/>
    <line x1="0" y1="66" x2="4" y2="54" stroke="#c4b5fd" stroke-width="1"/>
    <!-- void arrow -->
    <line x1="4" y1="54" x2="92" y2="51" stroke="#a78bfa" stroke-width="2"/>
    <path d="M92 51 L86 48 L88 51 L86 54 Z" fill="#7c3aed"/>
    <!-- arrow poison glow -->
    <circle cx="48" cy="52" r="3" fill="#4c1d95" opacity="0.5"/>
    <!-- head — shadowy hood -->
    <ellipse cx="50" cy="32" rx="18" ry="18" fill="#1e1b4b"/>
    <!-- hood -->
    <path d="M32 26 Q34 10 50 8 Q66 10 68 26 L64 22 Q62 12 50 10 Q38 12 36 22 Z" fill="#312e81"/>
    <!-- glowing eyes — purple -->
    <ellipse cx="42" cy="30" rx="5" ry="5" fill="#7c3aed"/>
    <ellipse cx="58" cy="30" rx="5" ry="5" fill="#7c3aed"/>
    <circle cx="42" cy="30" r="2.5" fill="#c4b5fd"/>
    <circle cx="58" cy="30" r="2.5" fill="#c4b5fd"/>
    <!-- sinister smile -->
    <path d="M42 40 Q50 46 58 40" stroke="#4c1d95" stroke-width="1.5" fill="none"/>
    <!-- shadow wisps on shoulders -->
    <path d="M22 54 L14 44 L22 50" fill="#312e81" opacity="0.7"/>
    <path d="M78 54 L86 44 L78 50" fill="#312e81" opacity="0.7"/>
    <!-- poison drip -->
    <circle cx="2" cy="68" r="3" fill="#4ade80" opacity="0.6"/>
  </svg>`,

  "Obsidian Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- legs — obsidian pillars -->
    <rect x="22" y="88" width="22" height="30" fill="#111827" rx="4"/>
    <rect x="56" y="88" width="22" height="30" fill="#111827" rx="4"/>
    <!-- purple sheen on legs -->
    <path d="M22 88 L33 82 L44 88" fill="#4c1d95" opacity="0.4"/>
    <path d="M56 88 L67 82 L78 88" fill="#4c1d95" opacity="0.4"/>
    <!-- massive body -->
    <path d="M12 46 L50 30 L88 46 L84 92 L16 92 Z" fill="#111827"/>
    <!-- obsidian facets -->
    <path d="M12 46 L50 30 L88 46 L82 60 L50 48 L18 60 Z" fill="#1e1b4b" opacity="0.8"/>
    <path d="M20 66 L50 56 L80 66" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M18 78 L50 68 L82 78" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- cracks with purple glow -->
    <path d="M38 52 L34 72 L40 86" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M64 50 L68 70 L62 84" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- arms — obsidian blocks -->
    <rect x="-4" y="54" width="18" height="32" fill="#1f2937" rx="6"/>
    <rect x="86" y="54" width="18" height="32" fill="#1f2937" rx="6"/>
    <!-- arm purple sheen -->
    <path d="M-4 54 L5 48 L14 54" fill="#4c1d95" opacity="0.4"/>
    <path d="M86 54 L95 48 L104 54" fill="#4c1d95" opacity="0.4"/>
    <!-- head — obsidian block -->
    <rect x="22" y="14" width="56" height="20" fill="#111827" rx="4"/>
    <path d="M22 14 L50 8 L78 14" fill="#1e1b4b" opacity="0.7"/>
    <!-- head — upper mass -->
    <ellipse cx="50" cy="28" rx="28" ry="20" fill="#111827"/>
    <!-- glowing purple eyes — slits -->
    <path d="M30 24 L42 28 L30 32" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"/>
    <path d="M70 24 L58 28 L70 32" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"/>
    <path d="M32 25 L40 28 L32 31" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
    <path d="M68 25 L60 28 L68 31" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
    <!-- mouth — dark crack -->
    <path d="M34 38 L42 42 L50 40 L58 42 L66 38" stroke="#4c1d95" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- obsidian shards on shoulders -->
    <path d="M12 46 L4 32 L14 40" fill="#1e1b4b"/>
    <path d="M88 46 L96 32 L86 40" fill="#1e1b4b"/>
  </svg>`,

  "Mirror Shade": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- reflective body — silver-purple -->
    <path d="M28 56 Q24 78 26 102 Q38 92 50 96 Q62 92 74 102 Q76 78 72 56 Q62 48 50 46 Q38 48 28 56 Z" fill="#312e81"/>
    <!-- mirror surface reflections -->
    <path d="M32 60 Q44 52 56 58 Q44 54 32 60 Z" fill="#c4b5fd" opacity="0.3"/>
    <path d="M36 72 Q50 66 64 72" stroke="#c4b5fd" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M34 84 Q50 78 66 84" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.3"/>
    <!-- wisps bottom -->
    <path d="M30 100 Q26 112 24 120" stroke="#4c1d95" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M42 104 Q40 114 40 120" stroke="#4c1d95" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M58 104 Q60 114 60 120" stroke="#4c1d95" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M70 100 Q74 112 76 120" stroke="#4c1d95" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- arms — reflective -->
    <path d="M28 62 Q10 56 4 46" stroke="#312e81" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M72 62 Q90 56 96 46" stroke="#312e81" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- mirror hands -->
    <ellipse cx="4" cy="44" rx="6" ry="8" fill="#4c1d95"/>
    <ellipse cx="96" cy="44" rx="6" ry="8" fill="#4c1d95"/>
    <!-- reflected light on hands -->
    <ellipse cx="4" cy="42" rx="3" ry="4" fill="#c4b5fd" opacity="0.4"/>
    <ellipse cx="96" cy="42" rx="3" ry="4" fill="#c4b5fd" opacity="0.4"/>
    <!-- face — mirror surface -->
    <ellipse cx="50" cy="38" rx="22" ry="20" fill="#1e1b4b"/>
    <!-- mirror sheen overlay -->
    <path d="M30 28 Q40 24 52 26 Q44 24 30 28 Z" fill="#a78bfa" opacity="0.3"/>
    <!-- eyes — your own reflection staring back -->
    <ellipse cx="38" cy="34" rx="8" ry="8" fill="#312e81"/>
    <ellipse cx="62" cy="34" rx="8" ry="8" fill="#312e81"/>
    <ellipse cx="38" cy="34" rx="5" ry="5" fill="#c4b5fd" opacity="0.7"/>
    <ellipse cx="62" cy="34" rx="5" ry="5" fill="#c4b5fd" opacity="0.7"/>
    <circle cx="38" cy="34" r="2" fill="#1e1b4b"/>
    <circle cx="62" cy="34" r="2" fill="#1e1b4b"/>
    <!-- eerie smile — too wide -->
    <path d="M30 46 Q40 54 50 52 Q60 54 70 46 Q62 52 50 54 Q38 52 30 46 Z" fill="#4c1d95" opacity="0.8"/>
    <!-- block shield shimmer -->
    <path d="M42 52 Q50 58 58 52 Q54 56 50 58 Q46 56 42 52 Z" fill="#7c3aed" opacity="0.5"/>
  </svg>`,

  "Labyrinth Horror": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- tentacle legs/base -->
    <path d="M50 100 Q30 106 22 118" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 100 Q36 110 34 120" stroke="#312e81" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 100 Q50 112 50 120" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 100 Q64 110 66 120" stroke="#312e81" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 100 Q70 106 78 118" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- bulbous body -->
    <ellipse cx="50" cy="76" rx="30" ry="28" fill="#1e1b4b"/>
    <!-- body texture — maze pattern -->
    <path d="M30 68 L36 68 L36 76 L44 76 L44 68 L54 68 L54 80 L62 80 L62 70 L70 70" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M28 80 L34 80 L34 88 L50 88 L50 80 L64 80 L64 88 L72 88" stroke="#4c1d95" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- tentacle arms -->
    <path d="M22 72 Q6 60 0 48" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M78 72 Q94 60 100 48" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M20 80 Q4 78 -2 68" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M80 80 Q96 78 102 68" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- tentacle tips -->
    <circle cx="0" cy="48" r="4" fill="#7c3aed" opacity="0.8"/>
    <circle cx="100" cy="48" r="4" fill="#7c3aed" opacity="0.8"/>
    <!-- neck/head connection -->
    <path d="M36 50 Q50 44 64 50" stroke="#1e1b4b" stroke-width="10" fill="none"/>
    <!-- hideous head -->
    <ellipse cx="50" cy="36" rx="24" ry="22" fill="#1e1b4b"/>
    <!-- many eyes -->
    <circle cx="34" cy="28" r="6" fill="#7c3aed"/>
    <circle cx="50" cy="24" r="7" fill="#6d28d9"/>
    <circle cx="66" cy="28" r="6" fill="#7c3aed"/>
    <circle cx="28" cy="38" r="4" fill="#4c1d95"/>
    <circle cx="72" cy="38" r="4" fill="#4c1d95"/>
    <circle cx="34" cy="28" r="3" fill="#c4b5fd"/>
    <circle cx="50" cy="24" r="3.5" fill="#ddd6fe"/>
    <circle cx="66" cy="28" r="3" fill="#c4b5fd"/>
    <circle cx="28" cy="38" r="2" fill="#a78bfa"/>
    <circle cx="72" cy="38" r="2" fill="#a78bfa"/>
    <!-- gaping maw -->
    <path d="M32 46 Q50 58 68 46 Q60 54 50 56 Q40 54 32 46 Z" fill="#0c0a1a"/>
    <!-- teeth -->
    <path d="M36 48 L34 54 M42 47 L40 53 M50 46 L50 52 M58 47 L60 53 M64 48 L66 54"
          stroke="#c4b5fd" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- poison drip -->
    <circle cx="50" cy="56" r="3" fill="#4ade80" opacity="0.7"/>
  </svg>`,

  "Glass Stalker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- translucent legs -->
    <rect x="34" y="90" width="12" height="28" fill="#312e81" rx="3" opacity="0.5"/>
    <rect x="54" y="90" width="12" height="28" fill="#312e81" rx="3" opacity="0.5"/>
    <!-- glass body — mostly transparent -->
    <path d="M26 52 L50 44 L74 52 L70 94 L30 94 Z" fill="#1e1b4b" opacity="0.6"/>
    <!-- glass refraction lines -->
    <path d="M30 56 L50 50 L70 56" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M28 68 Q50 62 72 68" stroke="#c4b5fd" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M30 80 Q50 74 70 80" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- sharp glass edges -->
    <path d="M26 52 L18 38 L26 46" fill="#4c1d95" opacity="0.7"/>
    <path d="M74 52 L82 38 L74 46" fill="#4c1d95" opacity="0.7"/>
    <!-- arms — glass thin -->
    <line x1="26" y1="60" x2="6" y2="50" stroke="#312e81" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
    <line x1="74" y1="60" x2="94" y2="50" stroke="#312e81" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
    <!-- glass claw hands -->
    <path d="M6 50 L2 44 L4 50 M6 50 L2 54 M6 50 L10 46" stroke="#a78bfa" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M94 50 L98 44 L96 50 M94 50 L98 54 M94 50 L90 46" stroke="#a78bfa" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- head — glass facets -->
    <ellipse cx="50" cy="30" rx="20" ry="18" fill="#1e1b4b" opacity="0.7"/>
    <!-- glass crown shards -->
    <path d="M34 18 L30 6 L36 14" fill="#7c3aed" opacity="0.8"/>
    <path d="M50 16 L50 4 L54 14" fill="#a78bfa" opacity="0.8"/>
    <path d="M66 18 L70 6 L64 14" fill="#7c3aed" opacity="0.8"/>
    <!-- refraction highlights -->
    <path d="M32 22 Q40 16 50 18 Q40 16 32 22 Z" fill="#c4b5fd" opacity="0.4"/>
    <!-- eyes — barely visible -->
    <ellipse cx="40" cy="28" rx="6" ry="6" fill="#4c1d95" opacity="0.8"/>
    <ellipse cx="60" cy="28" rx="6" ry="6" fill="#4c1d95" opacity="0.8"/>
    <ellipse cx="40" cy="28" rx="3" ry="3" fill="#a78bfa" opacity="0.9"/>
    <ellipse cx="60" cy="28" rx="3" ry="3" fill="#a78bfa" opacity="0.9"/>
    <!-- thin mouth slit -->
    <path d="M40 40 Q50 44 60 40" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- dodge shimmer -->
    <ellipse cx="50" cy="30" rx="22" ry="20" fill="none" stroke="#c4b5fd" stroke-width="1" stroke-dasharray="3 4" opacity="0.4"/>
  </svg>`,

  "Void Wisp": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- trailing void tendrils -->
    <path d="M50 80 Q34 92 28 110" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M50 80 Q42 98 40 114" stroke="#312e81" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M50 80 Q50 96 50 112" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M50 80 Q58 98 60 114" stroke="#312e81" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M50 80 Q66 92 72 110" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- outer void glow -->
    <circle cx="50" cy="50" r="38" fill="#0c0a1a" opacity="0.4"/>
    <circle cx="50" cy="50" r="28" fill="#1e1b4b" opacity="0.6"/>
    <!-- core orb -->
    <circle cx="50" cy="50" r="20" fill="#312e81"/>
    <circle cx="50" cy="50" r="14" fill="#4c1d95"/>
    <circle cx="50" cy="50" r="8" fill="#7c3aed"/>
    <circle cx="50" cy="50" r="4" fill="#c4b5fd"/>
    <!-- pulsing ring -->
    <circle cx="50" cy="50" r="22" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.6"/>
    <circle cx="50" cy="50" r="32" fill="none" stroke="#4c1d95" stroke-width="1" opacity="0.4"/>
    <!-- void eye inside -->
    <ellipse cx="50" cy="48" rx="6" ry="8" fill="#0c0a1a"/>
    <ellipse cx="50" cy="48" rx="3" ry="4" fill="#ddd6fe"/>
    <!-- orbiting void sparks -->
    <circle cx="22" cy="50" r="3" fill="#7c3aed" opacity="0.8"/>
    <circle cx="78" cy="50" r="3" fill="#7c3aed" opacity="0.8"/>
    <circle cx="50" cy="22" r="3" fill="#a78bfa" opacity="0.7"/>
    <circle cx="36" cy="28" r="2" fill="#c4b5fd" opacity="0.6"/>
    <circle cx="64" cy="28" r="2" fill="#c4b5fd" opacity="0.6"/>
    <!-- block hex shield shape -->
    <path d="M38 58 L50 64 L62 58 L62 46 L50 40 L38 46 Z" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
  </svg>`,

  "Rift Walker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- dimensional rift portal behind -->
    <ellipse cx="50" cy="60" rx="36" ry="48" fill="#0c0a1a" opacity="0.5"/>
    <ellipse cx="50" cy="60" rx="30" ry="42" fill="none" stroke="#6d28d9" stroke-width="2" opacity="0.6"/>
    <ellipse cx="50" cy="60" rx="24" ry="36" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.4"/>
    <!-- legs stepping through -->
    <rect x="34" y="92" width="13" height="24" fill="#1e1b4b" rx="4"/>
    <rect x="53" y="88" width="13" height="28" fill="#312e81" rx="4" opacity="0.8"/>
    <!-- body — partially in rift -->
    <path d="M24 48 L50 40 L76 48 L72 96 L28 96 Z" fill="#1e1b4b"/>
    <!-- rift energy on body -->
    <path d="M30 52 L50 46 L70 52 L68 66 L50 60 L32 66 Z" fill="#4c1d95" opacity="0.6"/>
    <!-- dimensional tears on body -->
    <path d="M38 58 L34 72" stroke="#7c3aed" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M62 56 L66 70" stroke="#a78bfa" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- arms reaching through rift -->
    <path d="M24 54 Q6 48 -2 38" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M76 54 Q94 48 102 38" stroke="#312e81" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- hands with void energy -->
    <circle cx="-2" cy="36" r="8" fill="#4c1d95" opacity="0.9"/>
    <circle cx="102" cy="36" r="8" fill="#4c1d95" opacity="0.9"/>
    <circle cx="-2" cy="36" r="4" fill="#7c3aed"/>
    <circle cx="102" cy="36" r="4" fill="#7c3aed"/>
    <!-- head -->
    <ellipse cx="50" cy="28" rx="20" ry="18" fill="#1e1b4b"/>
    <!-- hood of void -->
    <path d="M30 22 Q32 6 50 4 Q68 6 70 22 L66 18 Q64 8 50 6 Q36 8 34 18 Z" fill="#312e81"/>
    <!-- eyes — rift glow -->
    <ellipse cx="40" cy="26" rx="6" ry="6" fill="#6d28d9"/>
    <ellipse cx="60" cy="26" rx="6" ry="6" fill="#6d28d9"/>
    <circle cx="40" cy="26" r="3" fill="#ddd6fe"/>
    <circle cx="60" cy="26" r="3" fill="#ddd6fe"/>
    <!-- mouth — rift tear -->
    <path d="M36 36 L42 40 L50 38 L58 40 L64 36" stroke="#4c1d95" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- dimensional sparks -->
    <circle cx="14" cy="26" r="2" fill="#a78bfa" opacity="0.7"/>
    <circle cx="86" cy="26" r="2" fill="#a78bfa" opacity="0.7"/>
    <circle cx="8" cy="44" r="2" fill="#7c3aed" opacity="0.6"/>
    <circle cx="92" cy="44" r="2" fill="#7c3aed" opacity="0.6"/>
  </svg>`,

  "Dimensional Horror": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- void ground distortion -->
    <ellipse cx="50" cy="108" rx="38" ry="10" fill="#0c0a1a" opacity="0.5"/>
    <!-- many-legged base -->
    <path d="M50 96 Q28 100 16 114" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q34 104 30 116" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q42 106 44 118" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q58 106 56 118" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q66 104 70 116" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q72 100 84 114" stroke="#312e81" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- swollen body -->
    <ellipse cx="50" cy="72" rx="32" ry="28" fill="#1e1b4b"/>
    <!-- dimensional texture -->
    <path d="M24 64 Q36 56 50 60 Q64 56 76 64" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M22 76 Q36 70 50 72 Q64 70 78 76" stroke="#312e81" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M26 86 Q38 82 50 84 Q62 82 74 86" stroke="#4c1d95" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- extra limbs flailing -->
    <path d="M20 68 Q4 54 -2 40" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M18 78 Q2 72 -4 58" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M80 68 Q96 54 102 40" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M82 78 Q98 72 104 58" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- limb tips with void energy -->
    <circle cx="-2" cy="40" r="5" fill="#7c3aed" opacity="0.8"/>
    <circle cx="-4" cy="58" r="4" fill="#6d28d9" opacity="0.8"/>
    <circle cx="102" cy="40" r="5" fill="#7c3aed" opacity="0.8"/>
    <circle cx="104" cy="58" r="4" fill="#6d28d9" opacity="0.8"/>
    <!-- horrible face -->
    <ellipse cx="50" cy="44" rx="26" ry="22" fill="#0c0a1a"/>
    <!-- ring of eyes -->
    <circle cx="30" cy="36" r="6" fill="#7c3aed"/>
    <circle cx="50" cy="30" r="7" fill="#6d28d9"/>
    <circle cx="70" cy="36" r="6" fill="#7c3aed"/>
    <circle cx="24" cy="48" r="4" fill="#4c1d95"/>
    <circle cx="76" cy="48" r="4" fill="#4c1d95"/>
    <circle cx="30" cy="36" r="3" fill="#ddd6fe"/>
    <circle cx="50" cy="30" r="3.5" fill="#ede9fe"/>
    <circle cx="70" cy="36" r="3" fill="#ddd6fe"/>
    <!-- void maw -->
    <path d="M28 54 Q50 66 72 54 Q62 62 50 64 Q38 62 28 54 Z" fill="#0c0a1a"/>
    <!-- poison drip -->
    <circle cx="50" cy="64" r="4" fill="#4ade80" opacity="0.6"/>
    <path d="M50 64 L50 72" stroke="#4ade80" stroke-width="2" opacity="0.4"/>
    <!-- block shield -->
    <path d="M36 68 L50 74 L64 68 L64 56 L50 50 L36 56 Z" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
  </svg>`,

  "Null Entity": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- absolute void body — featureless black -->
    <path d="M26 52 L50 44 L74 52 L70 102 L30 102 Z" fill="#030712"/>
    <!-- null edge glow — barely visible -->
    <path d="M26 52 L50 44 L74 52" stroke="#1e1b4b" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M26 52 L30 102" stroke="#1e1b4b" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M74 52 L70 102" stroke="#1e1b4b" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M30 102 L70 102" stroke="#1e1b4b" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- legs — null black -->
    <rect x="33" y="98" width="14" height="20" fill="#030712" rx="3"/>
    <rect x="53" y="98" width="14" height="20" fill="#030712" rx="3"/>
    <!-- arms — reaching void -->
    <path d="M26 60 L4 52" stroke="#030712" stroke-width="9" stroke-linecap="round"/>
    <path d="M74 60 L96 52" stroke="#030712" stroke-width="9" stroke-linecap="round"/>
    <!-- arm edge glow -->
    <path d="M26 60 L4 52" stroke="#1e1b4b" stroke-width="1" opacity="0.6"/>
    <path d="M74 60 L96 52" stroke="#1e1b4b" stroke-width="1" opacity="0.6"/>
    <!-- null hands -->
    <circle cx="4" cy="50" r="8" fill="#030712"/>
    <circle cx="96" cy="50" r="8" fill="#030712"/>
    <circle cx="4" cy="50" r="8" fill="none" stroke="#1e1b4b" stroke-width="1" opacity="0.6"/>
    <circle cx="96" cy="50" r="8" fill="none" stroke="#1e1b4b" stroke-width="1" opacity="0.6"/>
    <!-- head — null void -->
    <ellipse cx="50" cy="30" rx="22" ry="20" fill="#030712"/>
    <ellipse cx="50" cy="30" rx="22" ry="20" fill="none" stroke="#1e1b4b" stroke-width="1" opacity="0.7"/>
    <!-- the only features — two faint purple eyes -->
    <ellipse cx="40" cy="28" rx="7" ry="7" fill="#1e1b4b"/>
    <ellipse cx="60" cy="28" rx="7" ry="7" fill="#1e1b4b"/>
    <ellipse cx="40" cy="28" rx="4" ry="4" fill="#312e81" opacity="0.6"/>
    <ellipse cx="60" cy="28" rx="4" ry="4" fill="#312e81" opacity="0.6"/>
    <ellipse cx="40" cy="28" rx="2" ry="2" fill="#4c1d95" opacity="0.8"/>
    <ellipse cx="60" cy="28" rx="2" ry="2" fill="#4c1d95" opacity="0.8"/>
    <!-- faint null mouth -->
    <path d="M40 40 Q50 44 60 40" stroke="#1e1b4b" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- block shimmer — barely there -->
    <path d="M36 50 L50 56 L64 50 L64 40 L50 34 L36 40 Z" fill="none" stroke="#312e81" stroke-width="1" stroke-dasharray="2 4" opacity="0.4"/>
    <!-- null aura — absorbing light -->
    <circle cx="50" cy="30" r="28" fill="none" stroke="#030712" stroke-width="6" opacity="0.3"/>
  </svg>`,

  "Dream Merchant": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- robe bottom — elegant but sinister -->
    <path d="M28 76 L24 120 L38 112 L50 120 L62 112 L76 120 L72 76 Z" fill="#1e1b4b"/>
    <!-- robe body -->
    <path d="M22 50 L50 42 L78 50 L72 78 L28 78 Z" fill="#312e81"/>
    <!-- merchant's wares — floating dream bubbles -->
    <circle cx="16" cy="44" r="8" fill="#4c1d95" opacity="0.6"/>
    <circle cx="16" cy="44" r="5" fill="#7c3aed" opacity="0.4"/>
    <circle cx="84" cy="40" r="10" fill="#4c1d95" opacity="0.6"/>
    <circle cx="84" cy="40" r="6" fill="#7c3aed" opacity="0.4"/>
    <circle cx="10" cy="60" r="6" fill="#312e81" opacity="0.5"/>
    <!-- dream wisp trails -->
    <path d="M22 50 Q12 44 16 36" stroke="#a78bfa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M78 50 Q88 40 84 30" stroke="#a78bfa" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- arms holding out wares -->
    <path d="M22 58 L6 50" stroke="#1e1b4b" stroke-width="8" stroke-linecap="round"/>
    <path d="M78 58 L94 46" stroke="#312e81" stroke-width="8" stroke-linecap="round"/>
    <!-- gloved hands -->
    <circle cx="6" cy="48" r="7" fill="#1e1b4b"/>
    <circle cx="94" cy="44" r="7" fill="#1e1b4b"/>
    <!-- poison vial in right hand -->
    <rect x="91" y="36" width="6" height="10" fill="#4ade80" rx="2" opacity="0.8"/>
    <path d="M91 36 L97 36 L95 32 L93 32 Z" fill="#86efac" opacity="0.8"/>
    <!-- head — masked -->
    <ellipse cx="50" cy="28" rx="20" ry="20" fill="#1e1b4b"/>
    <!-- theater mask front -->
    <ellipse cx="50" cy="28" rx="16" ry="16" fill="#312e81"/>
    <!-- mask comedy/tragedy split -->
    <path d="M50 12 L50 44" stroke="#1e1b4b" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- left eye — happy -->
    <path d="M36 22 Q40 18 44 22" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round"/>
    <!-- right eye — sad -->
    <path d="M56 18 Q60 22 64 18" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
    <!-- left smile -->
    <path d="M36 30 Q40 36 44 30" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round"/>
    <!-- right frown -->
    <path d="M56 34 Q60 28 64 34" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/>
    <!-- mask glint -->
    <path d="M34 16 Q40 12 48 14 Q40 12 34 16 Z" fill="#ddd6fe" opacity="0.3"/>
    <!-- hat — tall sinister -->
    <rect x="36" y="6" width="28" height="6" fill="#1e1b4b" rx="2"/>
    <path d="M40 6 L42 -4 L50 -8 L58 -4 L60 6" fill="#312e81"/>
    <!-- hat band -->
    <rect x="38" y="4" width="24" height="3" fill="#7c3aed" opacity="0.7"/>
  </svg>`,

  "Nightmare Hound": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- body — spectral dark hound -->
    <ellipse cx="50" cy="76" rx="34" ry="22" fill="#1e1b4b"/>
    <!-- shadow ripple on body -->
    <path d="M20 72 Q36 66 50 68 Q64 66 80 72" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M22 80 Q38 76 50 78 Q62 76 78 80" stroke="#4c1d95" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- void tail -->
    <path d="M82 72 Q96 60 98 46 Q94 56 84 64 Q80 68 82 72 Z" fill="#312e81"/>
    <!-- legs — smoke-like -->
    <path d="M26 90 Q22 106 18 116" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M40 94 Q38 108 36 118" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M60 94 Q62 108 64 118" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M74 90 Q78 106 82 116" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- neck -->
    <ellipse cx="26" cy="66" rx="16" ry="14" fill="#1e1b4b"/>
    <!-- head -->
    <ellipse cx="14" cy="58" rx="18" ry="16" fill="#1e1b4b"/>
    <!-- snout -->
    <ellipse cx="2" cy="62" rx="10" ry="7" fill="#312e81"/>
    <ellipse cx="-2" cy="60" rx="6" ry="4" fill="#0c0a1a"/>
    <!-- nightmare eyes — twin purple beams -->
    <ellipse cx="10" cy="54" rx="5" ry="5" fill="#7c3aed"/>
    <ellipse cx="10" cy="54" rx="3" ry="3" fill="#ddd6fe"/>
    <!-- eye glow rays -->
    <path d="M10 54 L-4 46" stroke="#a78bfa" stroke-width="1.5" opacity="0.5"/>
    <path d="M10 54 L-2 52" stroke="#c4b5fd" stroke-width="1" opacity="0.4"/>
    <!-- ears — shadow spikes -->
    <path d="M18 48 L12 34 L22 44 Z" fill="#1e1b4b"/>
    <path d="M24 46 L20 30 L28 42 Z" fill="#312e81"/>
    <!-- bared fangs -->
    <path d="M-2 62 L-6 70 M2 64 L0 72 M6 65 L5 73" stroke="#c4b5fd" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- shadow breath -->
    <path d="M-6 64 Q-14 62 -16 58" stroke="#4c1d95" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round"/>
    <path d="M-4 68 Q-14 68 -16 64" stroke="#312e81" stroke-width="2" fill="none" opacity="0.5" stroke-linecap="round"/>
    <!-- void aura ripples -->
    <ellipse cx="50" cy="76" rx="38" ry="26" fill="none" stroke="#1e1b4b" stroke-width="2" opacity="0.4"/>
  </svg>`,

  "Illusion Weaver": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- illusion web threads spreading -->
    <path d="M50 68 Q20 56 4 40" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M50 68 Q24 72 8 78" stroke="#7c3aed" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M50 68 Q30 82 18 96" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M50 68 Q80 56 96 40" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M50 68 Q76 72 92 78" stroke="#7c3aed" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M50 68 Q70 82 82 96" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- concentric web rings -->
    <ellipse cx="50" cy="68" rx="16" ry="10" fill="none" stroke="#4c1d95" stroke-width="1" opacity="0.6"/>
    <ellipse cx="50" cy="68" rx="30" ry="20" fill="none" stroke="#312e81" stroke-width="1" opacity="0.4"/>
    <ellipse cx="50" cy="68" rx="44" ry="30" fill="none" stroke="#1e1b4b" stroke-width="1" opacity="0.3"/>
    <!-- spider-like body -->
    <ellipse cx="50" cy="60" rx="20" ry="16" fill="#1e1b4b"/>
    <!-- body illusion shimmer -->
    <path d="M32 54 Q44 48 58 52 Q44 48 32 54 Z" fill="#7c3aed" opacity="0.3"/>
    <!-- many legs — weaving -->
    <path d="M32 56 Q16 44 6 32" stroke="#312e81" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M34 62 Q16 60 4 54" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M34 68 Q18 72 8 78" stroke="#312e81" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M68 56 Q84 44 94 32" stroke="#312e81" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M66 62 Q84 60 96 54" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M66 68 Q82 72 92 78" stroke="#312e81" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- head -->
    <ellipse cx="50" cy="38" rx="18" ry="16" fill="#1e1b4b"/>
    <!-- illusion pattern on head -->
    <circle cx="50" cy="38" rx="12" ry="12" fill="#312e81" opacity="0.5"/>
    <!-- multiple eyes — spider -->
    <circle cx="38" cy="32" r="4" fill="#7c3aed"/>
    <circle cx="50" cy="28" r="5" fill="#6d28d9"/>
    <circle cx="62" cy="32" r="4" fill="#7c3aed"/>
    <circle cx="34" cy="40" r="3" fill="#4c1d95"/>
    <circle cx="66" cy="40" r="3" fill="#4c1d95"/>
    <circle cx="38" cy="32" r="2" fill="#ddd6fe"/>
    <circle cx="50" cy="28" r="2.5" fill="#ede9fe"/>
    <circle cx="62" cy="32" r="2" fill="#ddd6fe"/>
    <!-- block veil — translucent shield -->
    <path d="M36 46 L50 52 L64 46 L64 36 L50 30 L36 36 Z" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.5"/>
  </svg>`,

  "Fear Monger": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- massive cloak spreading with fear -->
    <path d="M16 60 Q10 84 8 112 Q26 98 36 106 Q50 114 64 106 Q74 98 92 112 Q90 84 84 60 Q68 52 50 50 Q32 52 16 60 Z" fill="#0c0a1a"/>
    <!-- fear aura tendrils -->
    <path d="M16 60 Q4 50 -2 36" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M16 70 Q2 66 -4 54" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M84 60 Q96 50 102 36" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M84 70 Q98 66 104 54" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <!-- cloak detail lines -->
    <path d="M24 64 Q36 58 50 60 Q64 58 76 64" stroke="#1e1b4b" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M20 76 Q36 70 50 72 Q64 70 80 76" stroke="#312e81" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- reaching arms under cloak -->
    <path d="M22 66 L6 56" stroke="#0c0a1a" stroke-width="8" stroke-linecap="round"/>
    <path d="M78 66 L94 56" stroke="#0c0a1a" stroke-width="8" stroke-linecap="round"/>
    <!-- clawed hands spreading fear -->
    <path d="M6 56 L2 50 M6 56 L0 58 M6 56 L4 62" stroke="#4c1d95" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M94 56 L98 50 M94 56 L100 58 M94 56 L96 62" stroke="#4c1d95" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- head — terrifying face -->
    <ellipse cx="50" cy="32" rx="24" ry="22" fill="#0c0a1a"/>
    <!-- fear aura glow around head -->
    <ellipse cx="50" cy="32" rx="28" ry="26" fill="none" stroke="#4c1d95" stroke-width="1.5" opacity="0.5"/>
    <!-- nightmare eyes — wide and glowing -->
    <ellipse cx="36" cy="26" rx="10" ry="10" fill="#7c3aed"/>
    <ellipse cx="64" cy="26" rx="10" ry="10" fill="#7c3aed"/>
    <ellipse cx="36" cy="26" rx="6" ry="6" fill="#ddd6fe"/>
    <ellipse cx="64" cy="26" rx="6" ry="6" fill="#ddd6fe"/>
    <circle cx="36" cy="26" r="3" fill="#0c0a1a"/>
    <circle cx="64" cy="26" r="3" fill="#0c0a1a"/>
    <!-- fear tears from eyes -->
    <path d="M36 32 L34 42" stroke="#7c3aed" stroke-width="1.5" opacity="0.7"/>
    <path d="M64 32 L66 42" stroke="#7c3aed" stroke-width="1.5" opacity="0.7"/>
    <!-- screaming maw -->
    <path d="M30 40 Q50 52 70 40 Q60 50 50 52 Q40 50 30 40 Z" fill="#1e1b4b"/>
    <!-- poison emanating from fear -->
    <circle cx="28" cy="52" r="4" fill="#4ade80" opacity="0.5"/>
    <circle cx="72" cy="52" r="4" fill="#4ade80" opacity="0.5"/>
    <!-- block aura -->
    <path d="M36 50 L50 58 L64 50 L64 38 L50 30 L36 38 Z" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
  </svg>`,

  "Mirror Wraith": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- mirror shards floating -->
    <path d="M10 30 L16 22 L18 32 L12 38 Z" fill="#c4b5fd" opacity="0.5"/>
    <path d="M84 26 L90 18 L92 28 L86 34 Z" fill="#a78bfa" opacity="0.5"/>
    <path d="M6 64 L10 56 L14 64 L10 70 Z" fill="#ddd6fe" opacity="0.4"/>
    <path d="M88 60 L94 52 L96 60 L92 68 Z" fill="#c4b5fd" opacity="0.4"/>
    <!-- wraith body reflected/doubled -->
    <path d="M28 54 Q24 76 26 102 Q38 92 50 96 Q62 92 74 102 Q76 76 72 54 Q62 46 50 44 Q38 46 28 54 Z" fill="#1e1b4b"/>
    <!-- mirror reflection overlay — slightly offset -->
    <path d="M32 58 Q28 78 30 102 Q42 94 54 98 Q66 94 76 102 Q78 80 76 58 Q66 50 54 48 Q42 50 32 58 Z" fill="#312e81" opacity="0.3"/>
    <!-- wisps -->
    <path d="M28 100 Q22 112 18 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M40 104 Q38 114 36 120" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M60 104 Q62 114 64 120" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M72 100 Q78 112 82 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- arms -->
    <path d="M28 60 Q10 54 2 44" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M72 60 Q90 54 98 44" stroke="#312e81" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- mirror hands -->
    <ellipse cx="2" cy="42" rx="7" ry="9" fill="#312e81"/>
    <ellipse cx="98" cy="42" rx="7" ry="9" fill="#312e81"/>
    <path d="M-2 38 Q2 34 6 38 Q2 34 -2 38 Z" fill="#c4b5fd" opacity="0.4"/>
    <path d="M94 38 Q98 34 102 38 Q98 34 94 38 Z" fill="#c4b5fd" opacity="0.4"/>
    <!-- face — two faces, mirrored -->
    <ellipse cx="50" cy="36" rx="22" ry="20" fill="#1e1b4b"/>
    <!-- mirror split line -->
    <path d="M50 16 L50 56" stroke="#c4b5fd" stroke-width="1" opacity="0.4"/>
    <!-- left face eyes -->
    <ellipse cx="38" cy="30" rx="7" ry="7" fill="#312e81"/>
    <ellipse cx="38" cy="30" rx="4" ry="4" fill="#a78bfa"/>
    <circle cx="38" cy="30" r="2" fill="#0c0a1a"/>
    <!-- right face eyes -->
    <ellipse cx="62" cy="30" rx="7" ry="7" fill="#312e81"/>
    <ellipse cx="62" cy="30" rx="4" ry="4" fill="#a78bfa"/>
    <circle cx="62" cy="30" r="2" fill="#0c0a1a"/>
    <!-- twin mouths -->
    <path d="M32 42 Q38 48 46 42" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/>
    <path d="M54 42 Q62 48 68 42" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/>
    <!-- block shield — mirror surface -->
    <path d="M36 50 L50 58 L64 50 L64 38 L50 30 L36 38 Z" fill="none" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.5"/>
  </svg>`,

  "Reflection Horror": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- distorted reflection base -->
    <path d="M50 108 Q18 100 12 74 Q6 48 24 32 Q36 20 50 18 Q64 20 76 32 Q94 48 88 74 Q82 100 50 108 Z" fill="#0c0a1a" opacity="0.5"/>
    <!-- horror body — warped -->
    <path d="M24 54 Q20 76 22 100 Q36 90 50 94 Q64 90 78 100 Q80 76 76 54 Q64 44 50 42 Q36 44 24 54 Z" fill="#1e1b4b"/>
    <!-- distortion lines — wrong proportions -->
    <path d="M24 60 Q30 52 38 56 Q44 52 50 54" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M76 60 Q70 52 62 56 Q56 52 50 54" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M22 74 Q36 68 50 70 Q64 68 78 74" stroke="#4c1d95" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- tentacle wisps — wrong -->
    <path d="M24 98 Q16 108 12 118" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M36 102 Q30 112 28 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M64 102 Q70 112 72 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M76 98 Q84 108 88 118" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- too-long arms -->
    <path d="M24 60 Q4 50 -6 36" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M76 60 Q96 50 106 36" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- wrong hands -->
    <path d="M-6 36 L-12 30 M-6 36 L-14 38 M-6 36 L-10 44" stroke="#7c3aed" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M106 36 L112 30 M106 36 L114 38 M106 36 L110 44" stroke="#7c3aed" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- face — reflection that doesn't match -->
    <ellipse cx="50" cy="30" rx="24" ry="22" fill="#0c0a1a"/>
    <!-- wrong face elements — too many, wrong places -->
    <ellipse cx="36" cy="22" rx="8" ry="8" fill="#4c1d95"/>
    <ellipse cx="64" cy="22" rx="8" ry="8" fill="#4c1d95"/>
    <ellipse cx="50" cy="34" rx="6" ry="6" fill="#312e81"/>
    <ellipse cx="36" cy="22" rx="5" ry="5" fill="#a78bfa" opacity="0.8"/>
    <ellipse cx="64" cy="22" rx="5" ry="5" fill="#a78bfa" opacity="0.8"/>
    <ellipse cx="50" cy="34" rx="3" ry="3" fill="#7c3aed"/>
    <circle cx="36" cy="22" r="2" fill="#0c0a1a"/>
    <circle cx="64" cy="22" r="2" fill="#0c0a1a"/>
    <!-- wrong mouth — vertical -->
    <path d="M46 38 L50 50 L54 38" stroke="#7c3aed" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- poison drip from wrong mouth -->
    <circle cx="50" cy="50" r="3" fill="#4ade80" opacity="0.6"/>
    <!-- block shimmer -->
    <path d="M34 48 L50 56 L66 48 L66 36 L50 28 L34 36 Z" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.4"/>
  </svg>`,

  "Echo Shade": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- echo rings — fading copies -->
    <path d="M26 54 Q22 76 24 102 Q36 92 50 96 Q64 92 76 102 Q78 76 74 54 Q64 46 50 44 Q36 46 26 54 Z" fill="#1e1b4b" opacity="0.15"/>
    <path d="M28 54 Q24 76 26 102 Q38 92 50 96 Q62 92 72 102 Q74 76 70 54 Q60 46 50 44 Q38 46 28 54 Z" fill="#312e81" opacity="0.2"/>
    <path d="M30 56 Q26 76 28 100 Q40 92 50 96 Q60 92 70 100 Q72 76 68 56 Q58 48 50 46 Q40 48 30 56 Z" fill="#4c1d95" opacity="0.25"/>
    <!-- main shade body -->
    <path d="M32 58 Q28 78 30 100 Q42 92 50 96 Q58 92 68 100 Q70 78 66 58 Q56 50 50 48 Q44 50 32 58 Z" fill="#1e1b4b" opacity="0.9"/>
    <!-- wisps bottom -->
    <path d="M32 98 Q28 112 26 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M42 102 Q40 114 40 120" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M58 102 Q60 114 60 120" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M68 98 Q72 112 74 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- echo arm rings -->
    <path d="M32 64 Q14 58 6 48" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.2"/>
    <path d="M32 64 Q14 58 6 48" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.3"/>
    <path d="M32 64 Q14 58 6 48" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M68 64 Q86 58 94 48" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.2"/>
    <path d="M68 64 Q86 58 94 48" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.3"/>
    <path d="M68 64 Q86 58 94 48" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- echo head rings -->
    <ellipse cx="50" cy="34" rx="26" ry="24" fill="#312e81" opacity="0.1"/>
    <ellipse cx="50" cy="34" rx="24" ry="22" fill="#1e1b4b" opacity="0.2"/>
    <ellipse cx="50" cy="34" rx="22" ry="20" fill="#1e1b4b" opacity="0.9"/>
    <!-- eyes — glowing through echo -->
    <ellipse cx="38" cy="30" rx="7" ry="7" fill="#1e1b4b"/>
    <ellipse cx="62" cy="30" rx="7" ry="7" fill="#1e1b4b"/>
    <ellipse cx="38" cy="30" rx="4" ry="4" fill="#6d28d9" opacity="0.9"/>
    <ellipse cx="62" cy="30" rx="4" ry="4" fill="#6d28d9" opacity="0.9"/>
    <circle cx="38" cy="30" r="2" fill="#c4b5fd"/>
    <circle cx="62" cy="30" r="2" fill="#c4b5fd"/>
    <!-- echo scream mouth -->
    <ellipse cx="50" cy="44" rx="10" ry="6" fill="#0c0a1a"/>
    <!-- echo sound waves from mouth -->
    <path d="M34 44 Q30 44 28 40" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M66 44 Q70 44 72 40" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.5"/>
  </svg>`,

  "The Doppelganger": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- exact hero-like silhouette — warrior pose -->
    <!-- legs -->
    <rect x="34" y="88" width="13" height="28" fill="#312e81" rx="4"/>
    <rect x="53" y="88" width="13" height="28" fill="#1e1b4b" rx="4"/>
    <!-- boots -->
    <ellipse cx="40" cy="115" rx="9" ry="5" fill="#1e1b4b"/>
    <ellipse cx="59" cy="115" rx="9" ry="5" fill="#312e81"/>
    <!-- body — warrior-like build -->
    <path d="M28 54 L50 46 L72 54 L70 92 L30 92 Z" fill="#1e1b4b"/>
    <!-- chest plate — mimic -->
    <path d="M34 58 L50 52 L66 58 L64 80 L36 80 Z" fill="#312e81" opacity="0.7"/>
    <!-- center void glow — showing true nature -->
    <ellipse cx="50" cy="68" rx="8" ry="10" fill="#4c1d95" opacity="0.6"/>
    <ellipse cx="50" cy="68" rx="4" ry="5" fill="#7c3aed" opacity="0.5"/>
    <!-- sword arm right -->
    <path d="M72 60 L92 52" stroke="#1e1b4b" stroke-width="8" stroke-linecap="round"/>
    <!-- mimicked sword -->
    <rect x="90" y="26" width="4" height="32" fill="#4c1d95" rx="2"/>
    <rect x="84" y="28" width="16" height="4" fill="#312e81" rx="2"/>
    <path d="M92 26 L92 16 L90 20 L94 20 Z" fill="#7c3aed"/>
    <!-- shield arm left — void shimmer -->
    <path d="M28 60 L8 54" stroke="#1e1b4b" stroke-width="8" stroke-linecap="round"/>
    <path d="M6 42 Q2 48 4 56 Q6 62 12 64 Q16 56 14 48 Z" fill="#1e1b4b"/>
    <path d="M6 42 Q2 48 4 56 Q6 62 12 64 Q16 56 14 48 Z" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.6"/>
    <!-- head — heroic silhouette but wrong -->
    <ellipse cx="50" cy="30" rx="18" ry="18" fill="#1e1b4b"/>
    <!-- helmet mimic -->
    <path d="M32 24 Q34 8 50 6 Q66 8 68 24 L64 20 Q62 10 50 8 Q38 10 36 20 Z" fill="#312e81"/>
    <!-- face — almost right, but void eyes betray it -->
    <ellipse cx="41" cy="28" rx="5" ry="5" fill="#7c3aed"/>
    <ellipse cx="59" cy="28" rx="5" ry="5" fill="#7c3aed"/>
    <circle cx="41" cy="28" r="2.5" fill="#ddd6fe"/>
    <circle cx="59" cy="28" r="2.5" fill="#ddd6fe"/>
    <!-- uncanny valley smile -->
    <path d="M40 38 Q50 46 60 38" stroke="#4c1d95" stroke-width="2" fill="none"/>
    <!-- block dodge shimmer aura -->
    <ellipse cx="50" cy="30" rx="22" ry="22" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
    <!-- doppelganger glow around whole body -->
    <path d="M28 54 L50 46 L72 54 L70 92 L30 92 Z" fill="none" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3 4" opacity="0.4"/>
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

  // ── Dragon Biome — new mobs ───────────────────────────────────

  "Lava Hound": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- body — dark stone with lava cracks -->
    <ellipse cx="52" cy="80" rx="34" ry="22" fill="#374151"/>
    <!-- lava crack veins on body -->
    <path d="M26 76 Q36 70 48 74 Q60 70 76 76" stroke="#f97316" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M28 84 Q40 80 52 82 Q64 80 78 84" stroke="#ef4444" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M36 90 Q52 86 68 90" stroke="#f97316" stroke-width="1" fill="none" opacity="0.6"/>
    <!-- lava glow under cracks -->
    <path d="M26 76 Q36 70 48 74" stroke="#fbbf24" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- tail — stone with ember tip -->
    <path d="M84 76 Q98 64 100 50 Q96 62 88 68 Q84 72 84 76 Z" fill="#4b5563"/>
    <circle cx="100" cy="50" r="5" fill="#f97316" opacity="0.9"/>
    <!-- legs -->
    <rect x="24" y="94" width="12" height="20" fill="#374151" rx="3"/>
    <rect x="40" y="96" width="12" height="18" fill="#4b5563" rx="3"/>
    <rect x="62" y="96" width="12" height="18" fill="#4b5563" rx="3"/>
    <rect x="76" y="94" width="12" height="20" fill="#374151" rx="3"/>
    <!-- paw lava cracks -->
    <path d="M26 112 L22 118 M30 113 L28 119 M36 113 L35 119" stroke="#f97316" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M78 112 L74 118 M82 113 L80 119 M88 113 L87 119" stroke="#f97316" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- neck -->
    <ellipse cx="28" cy="70" rx="16" ry="14" fill="#374151"/>
    <!-- head -->
    <ellipse cx="14" cy="60" rx="18" ry="16" fill="#374151"/>
    <!-- head lava cracks -->
    <path d="M6 56 L10 64" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M18 52 L22 60" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.7"/>
    <!-- snout -->
    <ellipse cx="2" cy="62" rx="10" ry="7" fill="#4b5563"/>
    <!-- nostrils — ember glow -->
    <circle cx="-1" cy="60" r="3" fill="#f97316" opacity="0.8"/>
    <circle cx="5" cy="60" r="3" fill="#ef4444" opacity="0.8"/>
    <!-- ears — stone spikes -->
    <path d="M18 48 L14 36 L22 44 Z" fill="#374151"/>
    <path d="M24 46 L22 32 L28 42 Z" fill="#4b5563"/>
    <!-- eyes — molten orange -->
    <ellipse cx="12" cy="56" rx="5" ry="5" fill="#f97316"/>
    <circle cx="12" cy="56" r="2.5" fill="#fbbf24"/>
    <circle cx="12" cy="56" r="1" fill="#7c2d12"/>
    <!-- bared teeth -->
    <path d="M-4 64 L-2 70 M2 65 L3 71 M6 66 L6 72" stroke="#e0f2fe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- fire breath wisps -->
    <path d="M-8 60 Q-16 56 -18 52" stroke="#f97316" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round"/>
    <path d="M-8 64 Q-16 62 -18 58" stroke="#fbbf24" stroke-width="2" fill="none" opacity="0.4" stroke-linecap="round"/>
    <!-- poison/fire drip -->
    <circle cx="-4" cy="72" r="3" fill="#4ade80" opacity="0.6"/>
  </svg>`,

  "Ash Crawler": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- ash-covered segmented body -->
    <ellipse cx="50" cy="108" rx="10" ry="7" fill="#6b7280"/>
    <ellipse cx="50" cy="94" rx="16" ry="10" fill="#4b5563"/>
    <path d="M34 94 Q50 88 66 94" stroke="#9ca3af" stroke-width="1" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="79" rx="20" ry="11" fill="#374151"/>
    <path d="M30 79 Q50 73 70 79" stroke="#6b7280" stroke-width="1" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="63" rx="22" ry="12" fill="#4b5563"/>
    <!-- ember glow on segments -->
    <path d="M30 63 Q50 57 70 63" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.4"/>
    <ellipse cx="50" cy="46" rx="23" ry="13" fill="#374151"/>
    <!-- legs — 3 pairs, ashy -->
    <path d="M28 67 L12 57 M28 72 L10 72 M28 77 L12 86" stroke="#4b5563" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M72 67 L88 57 M72 72 L90 72 M72 77 L88 86" stroke="#4b5563" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- ash dust on legs -->
    <circle cx="12" cy="57" r="3" fill="#9ca3af" opacity="0.5"/>
    <circle cx="10" cy="72" r="3" fill="#9ca3af" opacity="0.5"/>
    <circle cx="88" cy="57" r="3" fill="#9ca3af" opacity="0.5"/>
    <!-- head -->
    <ellipse cx="50" cy="28" rx="22" ry="18" fill="#374151"/>
    <!-- ash coating on head -->
    <path d="M32 20 Q42 14 54 16 Q42 14 32 20 Z" fill="#9ca3af" opacity="0.4"/>
    <!-- mandibles -->
    <path d="M32 36 L18 46 L30 40" fill="#4b5563"/>
    <path d="M68 36 L82 46 L70 40" fill="#4b5563"/>
    <!-- ember tips on mandibles -->
    <circle cx="18" cy="46" r="4" fill="#f97316" opacity="0.7"/>
    <circle cx="82" cy="46" r="4" fill="#f97316" opacity="0.7"/>
    <!-- eyes — four, ember orange -->
    <circle cx="36" cy="24" r="5" fill="#f97316"/>
    <circle cx="50" cy="20" r="6" fill="#ef4444"/>
    <circle cx="64" cy="24" r="5" fill="#f97316"/>
    <circle cx="36" cy="24" r="2.5" fill="#fbbf24"/>
    <circle cx="50" cy="20" r="3" fill="#fbbf24"/>
    <circle cx="64" cy="24" r="2.5" fill="#fbbf24"/>
    <!-- ash particles floating -->
    <circle cx="20" cy="36" r="2" fill="#9ca3af" opacity="0.6"/>
    <circle cx="80" cy="32" r="2" fill="#9ca3af" opacity="0.6"/>
    <circle cx="14" cy="52" r="1.5" fill="#6b7280" opacity="0.5"/>
    <!-- dodge armor coating -->
    <path d="M28 63 L22 55 L30 59" fill="#9ca3af" opacity="0.5"/>
    <path d="M72 63 L78 55 L70 59" fill="#9ca3af" opacity="0.5"/>
  </svg>`,

  "Ember Wraith": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- fire trail at bottom -->
    <path d="M50 110 Q30 104 24 90" stroke="#f97316" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 110 Q40 106 36 96" stroke="#fbbf24" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M50 110 Q60 106 64 96" stroke="#fbbf24" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M50 110 Q70 104 76 90" stroke="#f97316" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.6"/>
    <!-- spectral body — dark ash with ember glow -->
    <path d="M28 56 Q24 78 26 104 Q38 94 50 98 Q62 94 74 104 Q76 78 72 56 Q62 48 50 46 Q38 48 28 56 Z" fill="#1c1917"/>
    <!-- ember veins on body -->
    <path d="M34 62 L30 80 L36 94" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M66 60 L70 78 L64 92" stroke="#ef4444" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M44 58 L42 76 L46 90" stroke="#fbbf24" stroke-width="1" fill="none" opacity="0.6"/>
    <!-- ember particles floating off body -->
    <circle cx="24" cy="68" r="3" fill="#f97316" opacity="0.7"/>
    <circle cx="76" cy="64" r="3" fill="#ef4444" opacity="0.7"/>
    <circle cx="20" cy="80" r="2" fill="#fbbf24" opacity="0.6"/>
    <circle cx="80" cy="76" r="2" fill="#f97316" opacity="0.6"/>
    <!-- reaching arms — fire-edged -->
    <path d="M28 62 Q10 56 2 46" stroke="#1c1917" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M72 62 Q90 56 98 46" stroke="#1c1917" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- burning hands -->
    <circle cx="2" cy="44" r="8" fill="#1c1917"/>
    <circle cx="98" cy="44" r="8" fill="#1c1917"/>
    <!-- fire on hands -->
    <path d="M-2 38 Q2 32 6 36 Q2 30 -2 38 Z" fill="#f97316" opacity="0.8"/>
    <path d="M94 38 Q98 32 102 36 Q98 30 94 38 Z" fill="#ef4444" opacity="0.8"/>
    <!-- head -->
    <ellipse cx="50" cy="38" rx="22" ry="20" fill="#1c1917"/>
    <!-- ember crown on head -->
    <path d="M28 28 L30 16 L36 24 L42 12 L48 22 L54 12 L60 24 L66 16 L72 28"
          fill="none" stroke="#f97316" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- ember glow on crown tips -->
    <circle cx="30" cy="16" r="3" fill="#fbbf24" opacity="0.8"/>
    <circle cx="42" cy="12" r="3" fill="#f97316" opacity="0.8"/>
    <circle cx="54" cy="12" r="4" fill="#fbbf24" opacity="0.9"/>
    <circle cx="66" cy="16" r="3" fill="#f97316" opacity="0.8"/>
    <!-- hollow eyes — fire orange -->
    <ellipse cx="38" cy="34" rx="8" ry="8" fill="#7c2d12"/>
    <ellipse cx="62" cy="34" rx="8" ry="8" fill="#7c2d12"/>
    <ellipse cx="38" cy="34" rx="5" ry="5" fill="#f97316"/>
    <ellipse cx="62" cy="34" rx="5" ry="5" fill="#f97316"/>
    <circle cx="38" cy="34" r="2.5" fill="#fbbf24"/>
    <circle cx="62" cy="34" r="2.5" fill="#fbbf24"/>
    <!-- open screaming mouth with ember -->
    <path d="M36 48 Q50 58 64 48 Q56 54 50 56 Q44 54 36 48 Z" fill="#450a0a"/>
    <circle cx="50" cy="56" r="4" fill="#f97316" opacity="0.7"/>
    <!-- poison glow (fire poison) -->
    <circle cx="16" cy="56" r="3" fill="#4ade80" opacity="0.5"/>
  </svg>`,

  "Scorched Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- legs — scorched stone -->
    <rect x="20" y="88" width="24" height="30" fill="#292524" rx="5"/>
    <rect x="56" y="88" width="24" height="30" fill="#1c1917" rx="5"/>
    <!-- lava in leg cracks -->
    <path d="M24 96 L28 112" stroke="#f97316" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M60 94 L64 110" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- massive torso -->
    <path d="M10 46 L50 30 L90 46 L86 92 L14 92 Z" fill="#292524"/>
    <!-- scorched surface texture -->
    <path d="M10 46 L50 30 L90 46 L84 58 L50 46 L16 58 Z" fill="#1c1917" opacity="0.8"/>
    <!-- lava cracks all over body -->
    <path d="M32 52 L28 70 L34 84" stroke="#f97316" stroke-width="2" fill="none" opacity="0.9"/>
    <path d="M50 48 L50 72" stroke="#ef4444" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M68 50 L72 68 L66 82" stroke="#f97316" stroke-width="2" fill="none" opacity="0.9"/>
    <path d="M36 72 L44 78 L52 72 L62 78" stroke="#fbbf24" stroke-width="1" fill="none" opacity="0.6"/>
    <!-- lava glow emanating -->
    <path d="M28 66 L14 62 L24 60" fill="#f97316" opacity="0.3"/>
    <path d="M72 64 L86 60 L76 58" fill="#ef4444" opacity="0.3"/>
    <!-- massive arms -->
    <path d="M10 52 L-6 78" stroke="#1c1917" stroke-width="20" stroke-linecap="round"/>
    <path d="M90 52 L106 78" stroke="#292524" stroke-width="20" stroke-linecap="round"/>
    <!-- arm lava cracks -->
    <path d="M4 60 L0 72" stroke="#f97316" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M96 60 L100 72" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- fists -->
    <circle cx="-6" cy="80" r="14" fill="#1c1917"/>
    <circle cx="106" cy="80" r="14" fill="#292524"/>
    <!-- fist lava glow -->
    <circle cx="-6" cy="80" r="8" fill="#f97316" opacity="0.3"/>
    <circle cx="106" cy="80" r="8" fill="#ef4444" opacity="0.3"/>
    <!-- head — scorched boulder -->
    <ellipse cx="50" cy="22" rx="30" ry="24" fill="#292524"/>
    <path d="M22 16 Q34 6 50 4 Q66 6 78 16 Q64 10 50 8 Q36 10 22 16 Z" fill="#1c1917"/>
    <!-- head lava cracks -->
    <path d="M36 12 L32 24" stroke="#f97316" stroke-width="2" fill="none" opacity="0.9"/>
    <path d="M62 10 L66 22" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.9"/>
    <path d="M50 8 L50 20" stroke="#fbbf24" stroke-width="1.5" fill="none" opacity="0.8"/>
    <!-- molten eyes -->
    <ellipse cx="36" cy="22" rx="9" ry="9" fill="#7c2d12"/>
    <ellipse cx="64" cy="22" rx="9" ry="9" fill="#7c2d12"/>
    <ellipse cx="36" cy="22" rx="6" ry="6" fill="#f97316"/>
    <ellipse cx="64" cy="22" rx="6" ry="6" fill="#f97316"/>
    <circle cx="36" cy="22" r="3" fill="#fbbf24"/>
    <circle cx="64" cy="22" r="3" fill="#fbbf24"/>
    <!-- grim stone mouth -->
    <path d="M32 34 L40 38 L50 36 L60 38 L68 34" stroke="#1c1917" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- lava drip from mouth -->
    <path d="M42 38 L40 46" stroke="#f97316" stroke-width="2" opacity="0.7"/>
    <path d="M58 38 L60 46" stroke="#ef4444" stroke-width="2" opacity="0.7"/>
  </svg>`,

  "Cinder Hound": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- cinder body — burning -->
    <ellipse cx="52" cy="78" rx="32" ry="20" fill="#1c1917"/>
    <!-- cinder sparks on body -->
    <circle cx="34" cy="72" r="2.5" fill="#f97316" opacity="0.8"/>
    <circle cx="48" cy="68" r="2" fill="#fbbf24" opacity="0.7"/>
    <circle cx="62" cy="70" r="2.5" fill="#ef4444" opacity="0.8"/>
    <circle cx="72" cy="76" r="2" fill="#f97316" opacity="0.7"/>
    <circle cx="38" cy="82" r="1.5" fill="#fbbf24" opacity="0.6"/>
    <circle cx="60" cy="84" r="2" fill="#f97316" opacity="0.7"/>
    <!-- flame tail -->
    <path d="M82 72 Q96 58 100 44 Q96 56 88 64 Q84 68 82 72 Z" fill="#f97316" opacity="0.8"/>
    <path d="M84 68 Q98 56 100 44 Q96 54 90 62" fill="#fbbf24" opacity="0.5"/>
    <!-- legs — embers -->
    <rect x="22" y="90" width="11" height="24" fill="#292524" rx="3"/>
    <rect x="38" y="92" width="11" height="22" fill="#1c1917" rx="3"/>
    <rect x="58" y="92" width="11" height="22" fill="#292524" rx="3"/>
    <rect x="72" y="90" width="11" height="24" fill="#1c1917" rx="3"/>
    <!-- ember paw glow -->
    <circle cx="27" cy="113" r="5" fill="#f97316" opacity="0.4"/>
    <circle cx="77" cy="113" r="5" fill="#ef4444" opacity="0.4"/>
    <!-- neck -->
    <ellipse cx="28" cy="68" rx="15" ry="13" fill="#1c1917"/>
    <!-- head -->
    <ellipse cx="14" cy="58" rx="18" ry="16" fill="#292524"/>
    <!-- snout with fire -->
    <ellipse cx="1" cy="62" rx="10" ry="7" fill="#1c1917"/>
    <!-- fire breath from nostrils -->
    <path d="M-4 58 Q-12 52 -14 46" stroke="#f97316" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/>
    <path d="M-2 64 Q-10 60 -12 54" stroke="#fbbf24" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round"/>
    <!-- ears — flame tips -->
    <path d="M18 48 L14 34 L22 44 Z" fill="#292524"/>
    <path d="M14 34 L16 26 L18 34" fill="#f97316" opacity="0.8"/>
    <path d="M24 46 L22 30 L28 42 Z" fill="#1c1917"/>
    <path d="M22 30 L24 22 L26 30" fill="#ef4444" opacity="0.8"/>
    <!-- eyes — burning orange -->
    <ellipse cx="10" cy="54" rx="6" ry="6" fill="#f97316"/>
    <circle cx="10" cy="54" r="3" fill="#fbbf24"/>
    <circle cx="10" cy="54" r="1.5" fill="#7c2d12"/>
    <!-- cinder teeth -->
    <path d="M-4 64 L-6 70 M0 66 L-1 72 M4 66 L4 72" stroke="#9ca3af" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- poison/fire tail tip -->
    <circle cx="100" cy="44" r="4" fill="#4ade80" opacity="0.6"/>
  </svg>`,

  "Magma Elemental": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- flowing lava base -->
    <path d="M50 116 Q26 110 18 88 Q10 66 22 48 Q32 32 50 28 Q68 32 78 48 Q90 66 82 88 Q74 110 50 116 Z" fill="#7c2d12" opacity="0.5"/>
    <!-- magma body — flowing -->
    <path d="M28 58 Q22 80 24 104 Q36 94 50 98 Q64 94 76 104 Q78 80 72 58 Q62 48 50 46 Q38 48 28 58 Z" fill="#9a3412"/>
    <!-- magma flow lines -->
    <path d="M32 62 Q28 80 30 100" stroke="#f97316" stroke-width="3" fill="none" opacity="0.8"/>
    <path d="M42 58 Q40 76 42 96" stroke="#fbbf24" stroke-width="2" fill="none" opacity="0.7"/>
    <path d="M58 58 Q60 76 58 96" stroke="#f97316" stroke-width="2" fill="none" opacity="0.7"/>
    <path d="M68 62 Q72 80 70 100" stroke="#ef4444" stroke-width="3" fill="none" opacity="0.8"/>
    <!-- surface crust patches -->
    <path d="M36 68 L44 64 L52 68 L60 64 L68 68" stroke="#292524" stroke-width="3" fill="none" opacity="0.6"/>
    <path d="M34 80 L46 76 L58 80 L70 76" stroke="#1c1917" stroke-width="2" fill="none" opacity="0.5"/>
    <!-- arms — flowing lava -->
    <path d="M28 64 Q10 56 2 44" stroke="#9a3412" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M72 64 Q90 56 98 44" stroke="#7c2d12" stroke-width="10" fill="none" stroke-linecap="round"/>
    <!-- lava hand splash -->
    <circle cx="2" cy="42" r="12" fill="#b45309" opacity="0.8"/>
    <circle cx="2" cy="42" r="8" fill="#f97316" opacity="0.6"/>
    <circle cx="98" cy="42" r="12" fill="#9a3412" opacity="0.8"/>
    <circle cx="98" cy="42" r="8" fill="#ef4444" opacity="0.6"/>
    <!-- magma drips from hands -->
    <path d="M-6 50 L-8 58" stroke="#f97316" stroke-width="2" opacity="0.7"/>
    <path d="M106 50 L108 58" stroke="#ef4444" stroke-width="2" opacity="0.7"/>
    <!-- head — semi-molten -->
    <ellipse cx="50" cy="34" rx="24" ry="22" fill="#9a3412"/>
    <!-- crust on head -->
    <path d="M28 26 Q38 16 50 14 Q62 16 72 26 Q62 20 50 18 Q38 20 28 26 Z" fill="#292524"/>
    <!-- lava erupting from top -->
    <path d="M44 14 L40 2 L46 10 M50 12 L50 0 L54 10 M56 14 L60 2 L54 10" stroke="#f97316" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- eyes — pure molten -->
    <ellipse cx="38" cy="32" rx="9" ry="9" fill="#7c2d12"/>
    <ellipse cx="62" cy="32" rx="9" ry="9" fill="#7c2d12"/>
    <ellipse cx="38" cy="32" rx="6" ry="6" fill="#ef4444"/>
    <ellipse cx="62" cy="32" rx="6" ry="6" fill="#f97316"/>
    <circle cx="38" cy="32" r="3" fill="#fbbf24"/>
    <circle cx="62" cy="32" r="3" fill="#fbbf24"/>
    <!-- gaping lava mouth -->
    <path d="M32 44 Q50 56 68 44 Q58 52 50 54 Q42 52 32 44 Z" fill="#7c2d12"/>
    <path d="M36 46 Q50 54 64 46" stroke="#f97316" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- poison/lava glow -->
    <circle cx="50" cy="54" r="4" fill="#4ade80" opacity="0.5"/>
  </svg>`,

  "Lava Troll": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- legs — thick, lava-cracked -->
    <ellipse cx="34" cy="104" rx="17" ry="12" fill="#292524"/>
    <ellipse cx="66" cy="104" rx="17" ry="12" fill="#1c1917"/>
    <!-- leg lava cracks -->
    <path d="M26 98 L28 112" stroke="#f97316" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M60 96 L62 110" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- huge body -->
    <path d="M14 52 L50 40 L86 52 L82 98 L18 98 Z" fill="#292524"/>
    <!-- lava cracks all over -->
    <path d="M30 56 L26 74 L32 88" stroke="#f97316" stroke-width="2.5" fill="none" opacity="0.9"/>
    <path d="M50 52 L50 76" stroke="#fbbf24" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M70 54 L74 72 L68 86" stroke="#ef4444" stroke-width="2.5" fill="none" opacity="0.9"/>
    <!-- body lava veins -->
    <path d="M34 66 L44 70 L54 66 L64 70" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- massive arms -->
    <path d="M14 58 L-2 82" stroke="#1c1917" stroke-width="18" stroke-linecap="round"/>
    <path d="M86 58 L102 82" stroke="#292524" stroke-width="18" stroke-linecap="round"/>
    <!-- arm lava veins -->
    <path d="M8 64 L2 76" stroke="#f97316" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M92 64 L98 76" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- fists — massive -->
    <circle cx="-2" cy="84" r="13" fill="#1c1917"/>
    <circle cx="102" cy="84" r="13" fill="#292524"/>
    <!-- fist lava glow -->
    <circle cx="-2" cy="84" r="7" fill="#f97316" opacity="0.4"/>
    <circle cx="102" cy="84" r="7" fill="#ef4444" opacity="0.4"/>
    <!-- huge head with horns -->
    <ellipse cx="50" cy="28" rx="28" ry="24" fill="#292524"/>
    <!-- horns — lava-cracked bone -->
    <path d="M28 16 L20 0 L30 12" fill="#292524"/>
    <path d="M20 0 L22 -6 L24 0" fill="#f97316" opacity="0.7"/>
    <path d="M72 16 L80 0 L70 12" fill="#1c1917"/>
    <path d="M80 0 L78 -6 L76 0" fill="#ef4444" opacity="0.7"/>
    <!-- head cracks -->
    <path d="M38 14 L34 26" stroke="#f97316" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M64 12 L68 24" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- deep-set eyes -->
    <ellipse cx="36" cy="26" rx="9" ry="9" fill="#7c2d12"/>
    <ellipse cx="64" cy="26" rx="9" ry="9" fill="#7c2d12"/>
    <ellipse cx="36" cy="26" rx="6" ry="6" fill="#f97316"/>
    <ellipse cx="64" cy="26" rx="6" ry="6" fill="#f97316"/>
    <circle cx="36" cy="26" r="3" fill="#fbbf24"/>
    <circle cx="64" cy="26" r="3" fill="#fbbf24"/>
    <!-- tusk mouth -->
    <path d="M30 40 Q40 46 50 44 Q60 46 70 40" stroke="#1c1917" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M36 42 L34 50 M50 42 L50 50 M64 42 L66 50" stroke="#e0f2fe" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  "Molten Sentinel": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- armored legs -->
    <rect x="26" y="90" width="18" height="28" fill="#292524" rx="4"/>
    <rect x="56" y="90" width="18" height="28" fill="#1c1917" rx="4"/>
    <!-- boot armor with lava edge -->
    <rect x="22" y="112" width="24" height="6" fill="#1c1917" rx="3"/>
    <rect x="54" y="112" width="24" height="6" fill="#292524" rx="3"/>
    <!-- heavy armor body -->
    <path d="M18 48 L50 36 L82 48 L80 94 L20 94 Z" fill="#292524"/>
    <!-- armor plate -->
    <path d="M22 52 L50 40 L78 52 L76 72 L50 64 L24 72 Z" fill="#1c1917"/>
    <!-- lava seeping through armor seams -->
    <path d="M22 52 L20 70 L24 84" stroke="#f97316" stroke-width="2.5" fill="none" opacity="0.9"/>
    <path d="M78 52 L80 70 L76 84" stroke="#ef4444" stroke-width="2.5" fill="none" opacity="0.9"/>
    <path d="M50 40 L50 64" stroke="#fbbf24" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M36 56 L34 72 L38 84" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M64 54 L66 70 L62 82" stroke="#ef4444" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- shoulder armor pauldrons -->
    <path d="M18 48 L6 38 L18 44" fill="#1c1917"/>
    <path d="M82 48 L94 38 L82 44" fill="#292524"/>
    <!-- lava on pauldrons -->
    <path d="M6 38 L4 30 L10 34" fill="#f97316" opacity="0.7"/>
    <path d="M94 38 L96 30 L90 34" fill="#ef4444" opacity="0.7"/>
    <!-- arms holding weapon -->
    <path d="M18 56 L2 70" stroke="#1c1917" stroke-width="10" stroke-linecap="round"/>
    <path d="M82 56 L98 48" stroke="#292524" stroke-width="10" stroke-linecap="round"/>
    <!-- molten sword -->
    <rect x="96" y="20" width="5" height="34" fill="#9a3412" rx="2"/>
    <path d="M98.5 20 L98.5 10 L96 14 L101 14 Z" fill="#f97316"/>
    <rect x="90" y="22" width="18" height="4" fill="#292524" rx="2"/>
    <!-- lava drip on sword -->
    <path d="M98 40 L98 50" stroke="#f97316" stroke-width="2" opacity="0.7"/>
    <!-- shield arm -->
    <ellipse cx="2" cy="72" rx="10" ry="14" fill="#292524"/>
    <ellipse cx="2" cy="72" rx="7" ry="10" fill="#1c1917"/>
    <ellipse cx="2" cy="72" rx="3" ry="5" fill="#f97316" opacity="0.6"/>
    <!-- helmet head -->
    <ellipse cx="50" cy="24" rx="24" ry="20" fill="#292524"/>
    <!-- helmet visor -->
    <path d="M26 22 Q32 14 50 12 Q68 14 74 22 L70 18 Q64 10 50 8 Q36 10 30 18 Z" fill="#1c1917"/>
    <!-- visor slit — lava glow -->
    <path d="M28 24 L72 24" stroke="#f97316" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    <path d="M30 24 L70 24" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <!-- helmet crest -->
    <path d="M40 8 Q50 0 60 8" stroke="#9a3412" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- lava on helmet -->
    <path d="M36 14 L34 22" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M64 14 L66 22" stroke="#ef4444" stroke-width="1.5" fill="none" opacity="0.8"/>
    <!-- poison/molten drip -->
    <circle cx="50" cy="26" r="3" fill="#4ade80" opacity="0.5"/>
  </svg>`,

  "Volcanic Drake": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- tail -->
    <path d="M66 106 Q82 100 90 86 Q96 74 90 64 L84 70 Q88 80 82 90 Q76 100 66 106 Z" fill="#9a3412"/>
    <path d="M90 64 L98 56 L92 66 Z" fill="#ef4444"/>
    <!-- body -->
    <path d="M18 56 Q16 76 20 100 Q34 90 50 94 Q66 90 80 100 Q84 76 82 56 Q68 44 50 42 Q32 44 18 56 Z" fill="#7c2d12"/>
    <!-- volcanic scales -->
    <path d="M24 62 Q34 56 44 60 Q36 56 24 62 Z" fill="#9a3412" opacity="0.7"/>
    <path d="M56 60 Q66 54 76 58 Q68 54 56 60 Z" fill="#b45309" opacity="0.7"/>
    <path d="M22 74 Q36 68 50 72 Q64 68 78 74" stroke="#9a3412" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M24 86 Q38 82 50 84 Q62 82 76 86" stroke="#7c2d12" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- wings folded on sides -->
    <path d="M18 56 Q2 36 4 16 Q14 30 20 48 Q20 52 22 58 Z" fill="#9a3412" opacity="0.9"/>
    <path d="M82 56 Q98 36 96 16 Q86 30 80 48 Q80 52 78 58 Z" fill="#7c2d12" opacity="0.9"/>
    <!-- wing membrane detail -->
    <path d="M10 30 Q14 40 18 52" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M6 20 Q12 32 16 46" stroke="#f97316" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M90 30 Q86 40 82 52" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- front legs -->
    <path d="M24 80 Q14 90 10 104" stroke="#7c2d12" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M76 80 Q86 90 90 104" stroke="#9a3412" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- claws -->
    <path d="M8 102 L4 108 M10 104 L8 112 M14 106 L12 112" stroke="#292524" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M92 102 L96 108 M90 104 L92 112 M86 106 L88 112" stroke="#1c1917" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- neck -->
    <path d="M34 44 Q50 34 66 44" stroke="#7c2d12" stroke-width="14" fill="none" stroke-linecap="round"/>
    <!-- head -->
    <ellipse cx="50" cy="24" rx="24" ry="18" fill="#9a3412"/>
    <!-- head ridge spikes -->
    <path d="M32 16 L28 4 L34 12" fill="#ef4444"/>
    <path d="M44 10 L42 -2 L48 8" fill="#f97316"/>
    <path d="M58 10 L60 -2 L54 8" fill="#ef4444"/>
    <path d="M68 16 L72 4 L66 12" fill="#f97316"/>
    <!-- eyes — reptilian -->
    <ellipse cx="38" cy="22" rx="8" ry="8" fill="#7c2d12"/>
    <ellipse cx="62" cy="22" rx="8" ry="8" fill="#7c2d12"/>
    <ellipse cx="38" cy="22" rx="5" ry="5" fill="#f97316"/>
    <ellipse cx="62" cy="22" rx="5" ry="5" fill="#ef4444"/>
    <path d="M33 22 L43 22" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M57 22 L67 22" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>
    <!-- jaw -->
    <path d="M28 32 Q40 40 50 38 Q60 40 72 32 L70 28" fill="#7c2d12"/>
    <path d="M32 32 L30 38 M40 30 L40 36 M50 30 L50 36 M60 30 L60 36 M68 32 L70 38"
          stroke="#e0f2fe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- flame exhale -->
    <path d="M28 32 L16 40 L22 36 L12 44" stroke="#f97316" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/>
  </svg>`,

  "Bone Drake": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- skeletal tail -->
    <path d="M66 104 Q82 96 88 80 Q92 68 86 58 L80 64 Q84 74 80 86 Q76 96 66 104 Z" fill="#d1d5db"/>
    <!-- bone spines on tail -->
    <path d="M86 66 L92 60 L88 68" fill="#9ca3af"/>
    <path d="M84 76 L92 72 L86 78" fill="#9ca3af"/>
    <!-- ribcage body -->
    <path d="M22 56 Q20 78 22 102 Q34 92 50 96 Q66 92 78 102 Q80 78 78 56 Q66 44 50 42 Q34 44 22 56 Z" fill="#1c1917"/>
    <!-- exposed ribs -->
    <path d="M26 60 L18 54 M26 68 L16 64 M26 76 L18 72 M26 84 L18 80" stroke="#d1d5db" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M74 60 L82 54 M74 68 L84 64 M74 76 L82 72 M74 84 L82 80" stroke="#d1d5db" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- spine column -->
    <path d="M50 44 L50 96" stroke="#9ca3af" stroke-width="2" fill="none"/>
    <circle cx="50" cy="52" r="3" fill="#d1d5db"/>
    <circle cx="50" cy="62" r="3" fill="#9ca3af"/>
    <circle cx="50" cy="72" r="3" fill="#d1d5db"/>
    <circle cx="50" cy="82" r="3" fill="#9ca3af"/>
    <!-- ember glow through ribs — still alive -->
    <path d="M32 68 L40 72 L48 68 L58 72 L66 68" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="74" rx="12" ry="8" fill="#ef4444" opacity="0.15"/>
    <!-- skeletal wings -->
    <path d="M22 56 Q6 34 6 10 Q16 26 20 46 Q22 52 24 58 Z" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
    <path d="M10 20 Q14 34 18 48" stroke="#d1d5db" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M8 12 L16 22 M6 22 L14 30 M8 32 L16 40" stroke="#9ca3af" stroke-width="1" fill="none"/>
    <path d="M78 56 Q94 34 94 10 Q84 26 80 46 Q78 52 76 58 Z" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
    <!-- bone front legs -->
    <path d="M26 78 Q16 90 12 106" stroke="#d1d5db" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M74 78 Q84 90 88 106" stroke="#9ca3af" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- bone claws -->
    <path d="M10 104 L6 110 M12 106 L10 114 M16 108 L14 114" stroke="#d1d5db" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M90 104 L94 110 M88 106 L90 114 M84 108 L86 114" stroke="#9ca3af" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- skull head -->
    <ellipse cx="50" cy="24" rx="24" ry="20" fill="#d1d5db"/>
    <!-- skull crown with horns -->
    <path d="M30 14 L26 0 L32 10" fill="#9ca3af"/>
    <path d="M50 10 L50 -2 L54 10" fill="#d1d5db"/>
    <path d="M70 14 L74 0 L68 10" fill="#9ca3af"/>
    <!-- hollow skull eyes -->
    <ellipse cx="38" cy="22" rx="9" ry="9" fill="#1c1917"/>
    <ellipse cx="62" cy="22" rx="9" ry="9" fill="#1c1917"/>
    <!-- ember fire inside eye sockets -->
    <ellipse cx="38" cy="22" rx="5" ry="5" fill="#f97316" opacity="0.7"/>
    <ellipse cx="62" cy="22" rx="5" ry="5" fill="#ef4444" opacity="0.7"/>
    <circle cx="38" cy="22" r="2" fill="#fbbf24"/>
    <circle cx="62" cy="22" r="2" fill="#fbbf24"/>
    <!-- bone nose cavity -->
    <path d="M46 30 L50 34 L54 30" stroke="#9ca3af" stroke-width="1.5" fill="none"/>
    <!-- skull jaw with teeth -->
    <path d="M30 34 L36 40 L50 38 L64 40 L70 34" stroke="#9ca3af" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M36 36 L34 44 M42 35 L42 43 M50 35 L50 43 M58 35 L58 43 M64 36 L66 44"
          stroke="#d1d5db" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,

  "Ridge Harpy": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- scorched tail feathers -->
    <path d="M42 106 L36 120 L50 110 L64 120 L58 106" fill="#292524"/>
    <!-- lower body — scorched feathers -->
    <path d="M32 74 L50 68 L68 74 L66 108 L34 108 Z" fill="#1c1917"/>
    <!-- upper body -->
    <path d="M28 52 L50 46 L72 52 L68 76 L32 76 Z" fill="#292524"/>
    <!-- scorched wing left — huge -->
    <path d="M28 56 Q6 32 0 8 Q12 22 18 42 Q24 54 30 62 Z" fill="#1c1917"/>
    <!-- wing membrane ember veins -->
    <path d="M8 18 Q14 32 20 50" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M4 10 Q10 24 16 44" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- wing right -->
    <path d="M72 56 Q94 32 100 8 Q88 22 82 42 Q76 54 70 62 Z" fill="#292524"/>
    <path d="M92 18 Q86 32 80 50" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- ember ember tips on wing edges -->
    <circle cx="0" cy="8" r="4" fill="#f97316" opacity="0.7"/>
    <circle cx="100" cy="8" r="4" fill="#ef4444" opacity="0.7"/>
    <!-- taloned legs -->
    <path d="M38 106 L32 116 M42 108 L40 118 M50 108 L50 118" stroke="#292524" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M62 106 L68 116 M58 108 L60 118 M50 108 L50 118" stroke="#1c1917" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- human-like head — scorched -->
    <ellipse cx="50" cy="34" rx="17" ry="16" fill="#292524"/>
    <!-- ashen hair streaming back -->
    <path d="M34 28 Q20 12 26 2 Q30 16 34 22" fill="#9ca3af"/>
    <path d="M50 18 Q46 4 54 2 Q54 12 52 18" fill="#6b7280"/>
    <path d="M66 28 Q80 12 74 2 Q70 16 66 22" fill="#9ca3af"/>
    <!-- face — fierce -->
    <ellipse cx="40" cy="32" rx="5" ry="5" fill="#7c2d12"/>
    <ellipse cx="60" cy="32" rx="5" ry="5" fill="#7c2d12"/>
    <circle cx="40" cy="32" r="2.5" fill="#f97316"/>
    <circle cx="60" cy="32" r="2.5" fill="#ef4444"/>
    <!-- beak — scorched -->
    <path d="M45 40 L50 46 L55 40" fill="#b45309"/>
    <path d="M46 41 L50 44 L54 41" fill="#292524"/>
    <!-- ash swirl aura -->
    <circle cx="50" cy="34" r="22" fill="none" stroke="#6b7280" stroke-width="1" stroke-dasharray="3 4" opacity="0.4"/>
    <!-- ash particles -->
    <circle cx="16" cy="46" r="2" fill="#9ca3af" opacity="0.5"/>
    <circle cx="84" cy="42" r="2" fill="#6b7280" opacity="0.5"/>
    <circle cx="10" cy="28" r="1.5" fill="#9ca3af" opacity="0.4"/>
  </svg>`,

  "Fossil Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- ancient stone legs -->
    <rect x="20" y="88" width="24" height="32" fill="#6b7280" rx="5"/>
    <rect x="56" y="88" width="24" height="32" fill="#4b5563" rx="5"/>
    <!-- fossil patterns on legs -->
    <path d="M24 96 Q32 92 42 96" stroke="#d1d5db" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M58 94 Q66 90 78 94" stroke="#9ca3af" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- colossal ancient body -->
    <path d="M10 46 L50 30 L90 46 L86 92 L14 92 Z" fill="#6b7280"/>
    <!-- fossil imprints in stone — ancient creatures -->
    <path d="M28 56 Q36 50 44 54 Q36 48 28 56 Z" fill="#9ca3af" opacity="0.4"/>
    <path d="M56 52 Q66 46 74 52 Q66 46 56 52 Z" fill="#d1d5db" opacity="0.4"/>
    <path d="M24 70 Q34 66 50 70 Q66 66 76 70" stroke="#9ca3af" stroke-width="1.5" fill="none" opacity="0.4"/>
    <!-- spiral fossil on chest -->
    <path d="M50 72 Q56 68 58 62 Q56 56 50 54 Q44 56 42 62 Q44 68 50 72 Z" fill="none" stroke="#d1d5db" stroke-width="1.5" opacity="0.5"/>
    <!-- deep stone cracks — ancient -->
    <path d="M32 52 L28 72 L34 88" stroke="#374151" stroke-width="2" fill="none"/>
    <path d="M68 50 L72 70 L66 86" stroke="#374151" stroke-width="2" fill="none"/>
    <!-- ember glow in cracks — ancient fire trapped inside -->
    <path d="M32 52 L28 64" stroke="#f97316" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- massive arms — stone boulders -->
    <ellipse cx="6" cy="68" rx="14" ry="22" fill="#4b5563"/>
    <ellipse cx="94" cy="68" rx="14" ry="22" fill="#6b7280"/>
    <!-- fossil marks on arms -->
    <path d="M0 60 Q6 56 12 60" stroke="#d1d5db" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M88 60 Q94 56 100 60" stroke="#9ca3af" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- enormous head — ancient rock -->
    <ellipse cx="50" cy="22" rx="32" ry="26" fill="#6b7280"/>
    <!-- stone crown — natural formation -->
    <path d="M18 14 L14 -2 L22 10" fill="#4b5563"/>
    <path d="M36 6 L34 -6 L40 4" fill="#6b7280"/>
    <path d="M64 6 L66 -6 L60 4" fill="#4b5563"/>
    <path d="M82 14 L86 -2 L78 10" fill="#374151"/>
    <!-- fossil spirals on head -->
    <path d="M30 18 Q36 14 40 18 Q36 12 30 18 Z" fill="#9ca3af" opacity="0.5"/>
    <path d="M60 16 Q66 12 70 16 Q66 10 60 16 Z" fill="#d1d5db" opacity="0.5"/>
    <!-- ancient eyes — glowing deep orange -->
    <ellipse cx="36" cy="24" rx="10" ry="10" fill="#374151"/>
    <ellipse cx="64" cy="24" rx="10" ry="10" fill="#374151"/>
    <ellipse cx="36" cy="24" rx="6" ry="6" fill="#f97316" opacity="0.6"/>
    <ellipse cx="64" cy="24" rx="6" ry="6" fill="#ef4444" opacity="0.6"/>
    <circle cx="36" cy="24" r="3" fill="#fbbf24" opacity="0.8"/>
    <circle cx="64" cy="24" r="3" fill="#fbbf24" opacity="0.8"/>
    <!-- grim ancient mouth -->
    <path d="M28 36 L38 42 L50 40 L62 42 L72 36" stroke="#374151" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- stone teeth -->
    <path d="M34 38 L32 46 M42 37 L42 45 M50 37 L50 45 M58 37 L58 45 M66 38 L68 46"
          stroke="#9ca3af" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  "Ancient Wyvern": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- thick tail with spines -->
    <path d="M70 106 Q88 96 94 78 Q98 62 90 50 L84 56 Q90 68 86 82 Q82 96 70 106 Z" fill="#b45309"/>
    <!-- tail spines -->
    <path d="M94 62 L100 56 L96 64" fill="#f97316" opacity="0.8"/>
    <path d="M92 74 L100 70 L94 76" fill="#ef4444" opacity="0.8"/>
    <path d="M88 84 L96 82 L90 88" fill="#f97316" opacity="0.7"/>
    <!-- massive body -->
    <path d="M14 56 Q12 78 14 104 Q28 92 50 96 Q72 92 86 104 Q88 78 86 56 Q70 42 50 40 Q30 42 14 56 Z" fill="#9a3412"/>
    <!-- ancient scale pattern -->
    <path d="M22 62 Q30 56 38 60 Q30 54 22 62 Z" fill="#b45309" opacity="0.6"/>
    <path d="M46 58 Q56 52 64 56 Q56 50 46 58 Z" fill="#7c2d12" opacity="0.6"/>
    <path d="M64 62 Q72 56 80 60 Q72 54 64 62 Z" fill="#b45309" opacity="0.6"/>
    <path d="M20 76 Q36 70 50 74 Q64 70 80 76" stroke="#7c2d12" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M18 88 Q34 84 50 86 Q66 84 82 88" stroke="#9a3412" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- massive wings — ancient, battle-scarred -->
    <path d="M14 56 Q-6 28 -4 2 Q10 20 16 44 Q16 50 18 58 Z" fill="#9a3412"/>
    <!-- wing battle scars -->
    <path d="M2 12 L8 20" stroke="#7c2d12" stroke-width="2" fill="none"/>
    <path d="M-2 22 L6 30" stroke="#7c2d12" stroke-width="2" fill="none"/>
    <!-- wing ribs -->
    <path d="M6 14 Q12 28 16 48" stroke="#b45309" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M2 6 Q8 22 12 42" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M86 56 Q106 28 104 2 Q90 20 84 44 Q84 50 82 58 Z" fill="#7c2d12"/>
    <path d="M102 14 Q96 28 84 48" stroke="#9a3412" stroke-width="1.5" fill="none" opacity="0.5"/>
    <!-- leg claws -->
    <path d="M20 90 Q12 100 10 114" stroke="#9a3412" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M80 90 Q88 100 90 114" stroke="#b45309" stroke-width="9" fill="none" stroke-linecap="round"/>
    <!-- claw toes -->
    <path d="M8 112 L4 118 M10 114 L8 120 M14 116 L12 120" stroke="#7c2d12" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M92 112 L96 118 M90 114 L92 120 M86 116 L88 120" stroke="#9a3412" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- neck — thick -->
    <path d="M30 42 Q50 30 70 42" stroke="#9a3412" stroke-width="16" fill="none" stroke-linecap="round"/>
    <!-- head — massive ancient -->
    <ellipse cx="50" cy="20" rx="28" ry="20" fill="#b45309"/>
    <!-- ridge spikes on head -->
    <path d="M28 12 L22 -2 L30 8" fill="#f97316"/>
    <path d="M40 6 L38 -6 L44 4" fill="#fbbf24" opacity="0.9"/>
    <path d="M60 6 L62 -6 L56 4" fill="#f97316"/>
    <path d="M72 12 L78 -2 L70 8" fill="#ef4444"/>
    <!-- reptilian eyes — huge and ancient -->
    <ellipse cx="36" cy="18" rx="10" ry="10" fill="#7c2d12"/>
    <ellipse cx="64" cy="18" rx="10" ry="10" fill="#9a3412"/>
    <ellipse cx="36" cy="18" rx="6" ry="6" fill="#f97316"/>
    <ellipse cx="64" cy="18" rx="6" ry="6" fill="#ef4444"/>
    <path d="M30 18 L42 18" stroke="#1c1917" stroke-width="3" stroke-linecap="round"/>
    <path d="M58 18 L70 18" stroke="#1c1917" stroke-width="3" stroke-linecap="round"/>
    <!-- ancient scarred jaw -->
    <path d="M24 30 Q38 40 50 38 Q62 40 76 30 L74 26" fill="#9a3412"/>
    <!-- teeth — many, ancient -->
    <path d="M28 30 L26 38 M34 28 L34 36 M42 27 L42 35 M50 27 L50 35 M58 27 L58 35 M66 28 L66 36 M72 30 L74 38"
          stroke="#e0f2fe" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- block shield aura -->
    <ellipse cx="50" cy="20" rx="32" ry="24" fill="none" stroke="#f97316" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>
  </svg>`,

  "Throne Wraith": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- ash throne fragments floating behind -->
    <path d="M8 40 L14 30 L16 40 L10 46 Z" fill="#4b5563" opacity="0.6"/>
    <path d="M86 36 L92 26 L94 36 L88 44 Z" fill="#374151" opacity="0.6"/>
    <path d="M4 60 L8 52 L12 60 L8 66 Z" fill="#4b5563" opacity="0.5"/>
    <!-- wraith body — royal decay -->
    <path d="M26 54 Q22 76 24 102 Q36 92 50 96 Q64 92 74 102 Q76 76 72 54 Q62 46 50 44 Q38 46 26 54 Z" fill="#1c1917"/>
    <!-- royal robe detail — tattered -->
    <path d="M32 58 Q42 52 54 56 Q42 50 32 58 Z" fill="#7c2d12" opacity="0.4"/>
    <path d="M30 70 Q44 64 60 68 Q44 62 30 70 Z" fill="#9a3412" opacity="0.3"/>
    <!-- fire on robe edges -->
    <path d="M26 80 L22 90 L26 86 L24 94" stroke="#f97316" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>
    <path d="M74 80 L78 90 L74 86 L76 94" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>
    <!-- wisps bottom -->
    <path d="M28 100 Q22 112 20 120" stroke="#1c1917" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M40 104 Q38 114 38 120" stroke="#f97316" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M60 104 Q62 114 62 120" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M72 100 Q78 112 80 120" stroke="#1c1917" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- arms with fire -->
    <path d="M26 60 Q8 54 0 44" stroke="#1c1917" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M74 60 Q92 54 100 44" stroke="#1c1917" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- burning scepter -->
    <rect x="96" y="16" width="4" height="34" fill="#6b7280" rx="2"/>
    <circle cx="98" cy="14" r="6" fill="#f97316" opacity="0.9"/>
    <circle cx="98" cy="14" r="3" fill="#fbbf24"/>
    <!-- spectral hands -->
    <path d="M0 44 L-4 40 M0 44 L-2 50 M0 44 L4 42" stroke="#f97316" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- head — wraith with burned crown -->
    <ellipse cx="50" cy="32" rx="22" ry="20" fill="#1c1917"/>
    <!-- burned crown -->
    <path d="M28 22 L30 8 L36 18 L42 6 L48 18 L54 6 L60 18 L66 8 L72 22"
          fill="none" stroke="#9a3412" stroke-width="3" stroke-linejoin="round"/>
    <!-- ember on crown points -->
    <circle cx="30" cy="8" r="3" fill="#f97316" opacity="0.8"/>
    <circle cx="42" cy="6" r="4" fill="#fbbf24" opacity="0.9"/>
    <circle cx="54" cy="6" r="4" fill="#f97316" opacity="0.9"/>
    <circle cx="66" cy="8" r="3" fill="#ef4444" opacity="0.8"/>
    <!-- hollow eyes — fire -->
    <ellipse cx="38" cy="30" rx="8" ry="8" fill="#7c2d12"/>
    <ellipse cx="62" cy="30" rx="8" ry="8" fill="#7c2d12"/>
    <ellipse cx="38" cy="30" rx="5" ry="5" fill="#f97316"/>
    <ellipse cx="62" cy="30" rx="5" ry="5" fill="#ef4444"/>
    <circle cx="38" cy="30" r="2.5" fill="#fbbf24"/>
    <circle cx="62" cy="30" r="2.5" fill="#fbbf24"/>
    <!-- anguished open mouth -->
    <path d="M34 42 Q50 54 66 42 Q58 50 50 52 Q42 50 34 42 Z" fill="#450a0a"/>
    <!-- poison drip -->
    <circle cx="50" cy="52" r="3" fill="#4ade80" opacity="0.5"/>
    <!-- block shield -->
    <path d="M36 50 L50 58 L64 50 L64 38 L50 30 L36 38 Z" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.4"/>
  </svg>`,

  "Ashen Knight": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- armored legs — ash-coated -->
    <rect x="28" y="90" width="17" height="28" fill="#374151" rx="4"/>
    <rect x="55" y="90" width="17" height="28" fill="#292524" rx="4"/>
    <!-- boot greaves -->
    <rect x="24" y="110" width="23" height="8" fill="#1c1917" rx="3"/>
    <rect x="53" y="110" width="23" height="8" fill="#292524" rx="3"/>
    <!-- ash dust on boots -->
    <path d="M24 112 Q36 108 46 112" stroke="#9ca3af" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- heavy plate body — ash-covered -->
    <path d="M20 50 L50 38 L80 50 L78 94 L22 94 Z" fill="#374151"/>
    <!-- ash coating on armor -->
    <path d="M20 50 L50 38 L80 50 L76 62 L50 52 L24 62 Z" fill="#6b7280" opacity="0.4"/>
    <!-- ash dust settle lines -->
    <path d="M26 62 Q50 56 74 62" stroke="#9ca3af" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M24 74 Q50 68 76 74" stroke="#6b7280" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- ember glow at armor joints -->
    <circle cx="20" cy="54" r="3" fill="#f97316" opacity="0.6"/>
    <circle cx="80" cy="54" r="3" fill="#ef4444" opacity="0.6"/>
    <circle cx="22" cy="94" r="3" fill="#f97316" opacity="0.5"/>
    <circle cx="78" cy="94" r="3" fill="#ef4444" opacity="0.5"/>
    <!-- sword arm -->
    <path d="M80 58 L96 50" stroke="#374151" stroke-width="10" stroke-linecap="round"/>
    <!-- ashen greatsword -->
    <rect x="94" y="14" width="5" height="42" fill="#6b7280" rx="2"/>
    <path d="M96.5 14 L96.5 4 L93 8 L100 8 Z" fill="#9ca3af"/>
    <rect x="87" y="18" width="20" height="4" fill="#374151" rx="2"/>
    <!-- ash on sword -->
    <path d="M96 30 Q94 26 96 22" stroke="#9ca3af" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- shield arm -->
    <path d="M20 58 L4 52" stroke="#292524" stroke-width="10" stroke-linecap="round"/>
    <!-- ashen kite shield -->
    <path d="M0 38 Q-6 44 -4 58 Q-2 68 4 70 Q10 62 8 50 Q6 40 0 38 Z" fill="#374151"/>
    <path d="M0 38 Q-6 44 -4 58 Q-2 68 4 70 Q10 62 8 50 Q6 40 0 38 Z" fill="none" stroke="#6b7280" stroke-width="1.5"/>
    <!-- shield emblem — ember cross -->
    <path d="M2 48 L2 60 M-2 54 L6 54" stroke="#f97316" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>
    <!-- helmet head -->
    <ellipse cx="50" cy="26" rx="24" ry="20" fill="#374151"/>
    <!-- ash-covered helmet visor -->
    <path d="M26 22 Q32 10 50 8 Q68 10 74 22 L70 18 Q64 8 50 6 Q36 8 30 18 Z" fill="#292524"/>
    <!-- full face visor — ash knight shows no face -->
    <path d="M26 24 L74 24" stroke="#6b7280" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
    <!-- plume — ash grey -->
    <path d="M40 6 Q50 -4 60 6" stroke="#9ca3af" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M42 4 Q50 -2 58 4" stroke="#6b7280" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- ash drifting off helm -->
    <circle cx="30" cy="14" r="2" fill="#9ca3af" opacity="0.5"/>
    <circle cx="70" cy="12" r="2" fill="#6b7280" opacity="0.5"/>
    <circle cx="50" cy="4" r="1.5" fill="#9ca3af" opacity="0.4"/>
  </svg>`,

  "Cinder Dragon": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- cinder-black tail with ember tips -->
    <path d="M68 108 Q86 98 92 80 Q96 64 88 52 L82 58 Q88 70 84 84 Q80 96 68 108 Z" fill="#1c1917"/>
    <path d="M92 64 L100 56 L94 66 Z" fill="#f97316"/>
    <path d="M90 76 L98 72 L92 78 Z" fill="#ef4444"/>
    <!-- massive body — dark as cinders -->
    <path d="M12 54 Q10 78 12 106 Q26 94 50 98 Q74 94 88 106 Q90 78 88 54 Q72 40 50 38 Q28 40 12 54 Z" fill="#1c1917"/>
    <!-- cinder scales — ember glow -->
    <path d="M20 60 Q30 54 40 58 Q30 52 20 60 Z" fill="#f97316" opacity="0.4"/>
    <path d="M48 56 Q60 50 70 54 Q60 48 48 56 Z" fill="#ef4444" opacity="0.4"/>
    <path d="M68 60 Q78 54 86 58 Q78 52 68 60 Z" fill="#f97316" opacity="0.4"/>
    <path d="M18 74 Q34 68 50 72 Q66 68 82 74" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M16 86 Q32 82 50 84 Q68 82 84 86" stroke="#9a3412" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- vast wings — cinder dark -->
    <path d="M12 54 Q-10 24 -8 -2 Q8 18 14 44 Q14 50 16 56 Z" fill="#1c1917"/>
    <!-- wing ember veins -->
    <path d="M-4 8 Q4 26 12 50" stroke="#f97316" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M-8 0 Q0 20 8 44" stroke="#ef4444" stroke-width="1.5" fill="none" opacity="0.4"/>
    <!-- ember on wing tips -->
    <circle cx="-8" cy="-2" r="6" fill="#f97316" opacity="0.7"/>
    <circle cx="-8" cy="-2" r="3" fill="#fbbf24" opacity="0.8"/>
    <path d="M88 54 Q110 24 108 -2 Q92 18 86 44 Q86 50 84 56 Z" fill="#292524"/>
    <path d="M104 8 Q96 26 88 50" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.5"/>
    <circle cx="108" cy="-2" r="6" fill="#ef4444" opacity="0.7"/>
    <!-- heavy front legs -->
    <path d="M18 88 Q8 100 6 116" stroke="#1c1917" stroke-width="11" fill="none" stroke-linecap="round"/>
    <path d="M82 88 Q92 100 94 116" stroke="#292524" stroke-width="11" fill="none" stroke-linecap="round"/>
    <!-- claws -->
    <path d="M4 114 L0 120 M6 116 L4 120 M10 118 L8 120" stroke="#6b7280" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M96 114 L100 120 M94 116 L96 120 M90 118 L92 120" stroke="#4b5563" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- thick neck -->
    <path d="M28 40 Q50 26 72 40" stroke="#1c1917" stroke-width="18" fill="none" stroke-linecap="round"/>
    <!-- head — cinder dragon -->
    <ellipse cx="50" cy="18" rx="30" ry="22" fill="#292524"/>
    <!-- crest of ember horns -->
    <path d="M26 10 L18 -6 L28 6" fill="#f97316" opacity="0.9"/>
    <path d="M38 4 L34 -10 L42 2" fill="#fbbf24" opacity="0.9"/>
    <path d="M62 4 L66 -10 L58 2" fill="#f97316" opacity="0.9"/>
    <path d="M74 10 L82 -6 L72 6" fill="#ef4444" opacity="0.9"/>
    <!-- large reptilian eyes -->
    <ellipse cx="34" cy="16" rx="11" ry="11" fill="#7c2d12"/>
    <ellipse cx="66" cy="16" rx="11" ry="11" fill="#9a3412"/>
    <ellipse cx="34" cy="16" rx="7" ry="7" fill="#f97316"/>
    <ellipse cx="66" cy="16" rx="7" ry="7" fill="#ef4444"/>
    <path d="M27 16 L41 16" stroke="#1c1917" stroke-width="4" stroke-linecap="round"/>
    <path d="M59 16 L73 16" stroke="#1c1917" stroke-width="4" stroke-linecap="round"/>
    <!-- massive burning jaw -->
    <path d="M22 28 Q36 40 50 38 Q64 40 78 28 L76 24" fill="#1c1917"/>
    <path d="M26 28 L24 38 M34 26 L34 36 M44 25 L44 35 M56 25 L56 35 M66 26 L66 36 M74 28 L76 38"
          stroke="#d1d5db" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- cinder breath emerging -->
    <path d="M22 28 L8 38 L16 34 L6 42 L14 38 L4 46" stroke="#f97316" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/>
    <!-- dodge aura -->
    <ellipse cx="50" cy="18" rx="34" ry="26" fill="none" stroke="#f97316" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
  </svg>`,

  "Crown of Ash": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- ash vortex base -->
    <path d="M50 116 Q18 106 10 78 Q2 50 18 30 Q30 14 50 12 Q70 14 82 30 Q98 50 90 78 Q82 106 50 116 Z" fill="#1c1917" opacity="0.4"/>
    <!-- floating ash body — semi-corporeal -->
    <path d="M26 52 Q20 76 22 104 Q36 92 50 96 Q64 92 78 104 Q80 76 74 52 Q62 42 50 40 Q38 42 26 52 Z" fill="#292524"/>
    <!-- ash vortex swirls on body -->
    <path d="M30 58 Q44 50 56 56 Q44 48 30 58 Z" fill="#9ca3af" opacity="0.3"/>
    <path d="M28 70 Q44 64 60 68 Q44 62 28 70 Z" fill="#6b7280" opacity="0.3"/>
    <path d="M30 82 Q44 78 62 82" stroke="#9ca3af" stroke-width="1.5" fill="none" opacity="0.4"/>
    <!-- ember burning through ash -->
    <path d="M38 60 L34 78 L40 92" stroke="#f97316" stroke-width="2" fill="none" opacity="0.7"/>
    <path d="M62 58 L66 76 L60 90" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.7"/>
    <path d="M50 56 L50 80" stroke="#fbbf24" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- ash wisps at base -->
    <path d="M26 102 Q18 112 14 120" stroke="#6b7280" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M38 106 Q32 116 30 120" stroke="#9ca3af" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M62 106 Q68 116 70 120" stroke="#9ca3af" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M74 102 Q82 112 86 120" stroke="#6b7280" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- scepter of ash — left arm -->
    <path d="M26 58 Q8 50 0 40" stroke="#292524" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- ashen scepter top -->
    <rect x="-4" y="12" width="5" height="30" fill="#6b7280" rx="2"/>
    <path d="M-1.5 12 L-1.5 2 L-5 6 L2 6 Z" fill="#9ca3af"/>
    <circle cx="-1.5" cy="10" r="6" fill="#f97316" opacity="0.8"/>
    <circle cx="-1.5" cy="10" r="3" fill="#fbbf24" opacity="0.9"/>
    <!-- ash pouring from scepter -->
    <path d="M-1.5 40 Q-6 50 -8 58" stroke="#9ca3af" stroke-width="2" fill="none" opacity="0.5"/>
    <!-- claw arm right -->
    <path d="M74 58 Q92 50 100 40" stroke="#292524" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M100 40 L104 34 M100 40 L106 42 M100 40 L102 48" stroke="#f97316" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.9"/>
    <!-- head — ash entity with towering crown -->
    <ellipse cx="50" cy="32" rx="24" ry="22" fill="#1c1917"/>
    <!-- THE CROWN — massive, all ash and ember -->
    <path d="M26 22 L22 4 L30 16 L36 2 L42 18 L50 0 L58 18 L64 2 L70 16 L78 4 L74 22"
          fill="none" stroke="#f97316" stroke-width="3.5" stroke-linejoin="round"/>
    <!-- crown ember tips glowing -->
    <circle cx="22" cy="4" r="5" fill="#fbbf24" opacity="0.9"/>
    <circle cx="36" cy="2" r="5" fill="#f97316" opacity="0.9"/>
    <circle cx="50" cy="0" r="6" fill="#fbbf24"/>
    <circle cx="64" cy="2" r="5" fill="#ef4444" opacity="0.9"/>
    <circle cx="78" cy="4" r="5" fill="#fbbf24" opacity="0.9"/>
    <!-- crown glow inner -->
    <circle cx="50" cy="0" r="3" fill="#ffffff" opacity="0.8"/>
    <!-- hollow face — ruler of ash -->
    <ellipse cx="36" cy="28" rx="9" ry="9" fill="#0c0a1a"/>
    <ellipse cx="64" cy="28" rx="9" ry="9" fill="#0c0a1a"/>
    <!-- burning fire eyes — all four colors -->
    <ellipse cx="36" cy="28" rx="6" ry="6" fill="#f97316"/>
    <ellipse cx="64" cy="28" rx="6" ry="6" fill="#ef4444"/>
    <circle cx="36" cy="28" r="3" fill="#fbbf24"/>
    <circle cx="64" cy="28" r="3" fill="#fbbf24"/>
    <circle cx="36" cy="28" r="1.5" fill="#ffffff" opacity="0.9"/>
    <circle cx="64" cy="28" r="1.5" fill="#ffffff" opacity="0.9"/>
    <!-- terrible open maw -->
    <path d="M30 42 Q50 56 70 42 Q60 52 50 54 Q40 52 30 42 Z" fill="#450a0a"/>
    <!-- ash and ember from mouth -->
    <path d="M36 48 Q32 56 28 60" stroke="#f97316" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>
    <path d="M64 48 Q68 56 72 60" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>
    <!-- poison/fire aura -->
    <circle cx="50" cy="54" r="4" fill="#4ade80" opacity="0.5"/>
    <!-- block+dodge combined shimmer -->
    <ellipse cx="50" cy="32" rx="28" ry="26" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.4"/>
    <!-- ash particles floating everywhere -->
    <circle cx="10" cy="46" r="2" fill="#9ca3af" opacity="0.5"/>
    <circle cx="90" cy="42" r="2" fill="#6b7280" opacity="0.5"/>
    <circle cx="14" cy="72" r="1.5" fill="#9ca3af" opacity="0.4"/>
    <circle cx="86" cy="68" r="1.5" fill="#6b7280" opacity="0.4"/>
    <circle cx="6" cy="60" r="2" fill="#9ca3af" opacity="0.4"/>
  </svg>`,

  // ── Void Biome — new mobs ─────────────────────────────────────

  "Void Beast": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- void aura -->
    <circle cx="50" cy="62" r="44" fill="#030712" opacity="0.5"/>
    <!-- massive tentacle legs -->
    <path d="M50 96 Q28 104 18 118" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q34 108 32 120" stroke="#312e81" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q44 110 44 120" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q56 110 56 120" stroke="#4c1d95" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q66 108 68 120" stroke="#312e81" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 96 Q72 104 82 118" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- body — void mass -->
    <ellipse cx="50" cy="74" rx="34" ry="26" fill="#0c0a1a"/>
    <!-- void texture -->
    <path d="M22 66 Q36 60 50 64 Q64 60 78 66" stroke="#1e1b4b" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M20 76 Q36 70 50 74 Q64 70 80 76" stroke="#312e81" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- flailing arms -->
    <path d="M18 70 Q2 60 -4 48" stroke="#0c0a1a" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M16 80 Q0 76 -6 64" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M82 70 Q98 60 104 48" stroke="#0c0a1a" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M84 80 Q100 76 106 64" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- arm void tips -->
    <circle cx="-4" cy="46" r="6" fill="#4c1d95" opacity="0.8"/>
    <circle cx="-6" cy="62" r="5" fill="#6d28d9" opacity="0.7"/>
    <circle cx="104" cy="46" r="6" fill="#4c1d95" opacity="0.8"/>
    <circle cx="106" cy="62" r="5" fill="#6d28d9" opacity="0.7"/>
    <!-- head — void orb -->
    <ellipse cx="50" cy="42" rx="28" ry="24" fill="#0c0a1a"/>
    <!-- ring of eyes -->
    <circle cx="28" cy="34" r="7" fill="#4c1d95"/>
    <circle cx="50" cy="26" r="8" fill="#6d28d9"/>
    <circle cx="72" cy="34" r="7" fill="#4c1d95"/>
    <circle cx="22" cy="48" r="5" fill="#312e81"/>
    <circle cx="78" cy="48" r="5" fill="#312e81"/>
    <circle cx="28" cy="34" r="4" fill="#a78bfa"/>
    <circle cx="50" cy="26" r="4.5" fill="#c4b5fd"/>
    <circle cx="72" cy="34" r="4" fill="#a78bfa"/>
    <circle cx="22" cy="48" r="2.5" fill="#7c3aed"/>
    <circle cx="78" cy="48" r="2.5" fill="#7c3aed"/>
    <!-- void maw -->
    <path d="M26 54 Q50 68 74 54 Q62 64 50 66 Q38 64 26 54 Z" fill="#030712"/>
    <!-- poison drip -->
    <circle cx="50" cy="66" r="4" fill="#4ade80" opacity="0.7"/>
    <!-- block+dodge shimmer -->
    <ellipse cx="50" cy="42" rx="32" ry="28" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.5"/>
  </svg>`,

  "Void Spawn": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- small void creature — spawned from rift -->
    <!-- trailing rift portal -->
    <ellipse cx="50" cy="64" rx="30" ry="40" fill="#030712" opacity="0.4"/>
    <ellipse cx="50" cy="64" rx="24" ry="34" fill="none" stroke="#4c1d95" stroke-width="1.5" opacity="0.5"/>
    <!-- tentacle base -->
    <path d="M50 98 Q32 106 26 118" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q40 110 40 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q50 112 50 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q60 110 60 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q68 106 74 118" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- compact void body -->
    <ellipse cx="50" cy="78" rx="24" ry="22" fill="#0c0a1a"/>
    <path d="M30 72 Q42 66 56 70 Q42 64 30 72 Z" fill="#1e1b4b" opacity="0.6"/>
    <!-- reaching arms -->
    <path d="M28 76 Q12 68 6 58" stroke="#0c0a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M72 76 Q88 68 94 58" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="6" cy="56" r="7" fill="#312e81" opacity="0.9"/>
    <circle cx="94" cy="56" r="7" fill="#4c1d95" opacity="0.9"/>
    <!-- head — void sphere -->
    <ellipse cx="50" cy="48" rx="22" ry="20" fill="#1e1b4b"/>
    <!-- void spiral pattern -->
    <path d="M50 34 Q60 40 56 50 Q50 56 44 50 Q40 40 50 34 Z" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.6"/>
    <!-- three eyes -->
    <circle cx="38" cy="44" r="6" fill="#312e81"/>
    <circle cx="62" cy="44" r="6" fill="#312e81"/>
    <circle cx="50" cy="56" r="5" fill="#1e1b4b"/>
    <circle cx="38" cy="44" r="3.5" fill="#8b5cf6"/>
    <circle cx="62" cy="44" r="3.5" fill="#7c3aed"/>
    <circle cx="50" cy="56" r="2.5" fill="#6d28d9"/>
    <!-- open void mouth -->
    <path d="M36 62 Q50 70 64 62 Q56 68 50 70 Q44 68 36 62 Z" fill="#030712"/>
    <!-- block shimmer -->
    <path d="M32 60 L50 68 L68 60 L68 48 L50 40 L32 48 Z" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.4"/>
  </svg>`,

  "Abyss Crawler": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- segmented void body -->
    <ellipse cx="50" cy="110" rx="9" ry="7" fill="#0c0a1a"/>
    <ellipse cx="50" cy="96" rx="15" ry="10" fill="#1e1b4b"/>
    <path d="M35 96 Q50 90 65 96" stroke="#4c1d95" stroke-width="1" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="81" rx="19" ry="11" fill="#0c0a1a"/>
    <path d="M31 81 Q50 75 69 81" stroke="#312e81" stroke-width="1" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="65" rx="22" ry="12" fill="#1e1b4b"/>
    <path d="M28 65 Q50 59 72 65" stroke="#4c1d95" stroke-width="1" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="48" rx="23" ry="13" fill="#0c0a1a"/>
    <!-- void legs — 3 pairs -->
    <path d="M28 69 L12 59 M28 74 L10 74 M28 79 L12 88" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M72 69 L88 59 M72 74 L90 74 M72 79 L88 88" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- void tips on legs -->
    <circle cx="12" cy="59" r="3" fill="#4c1d95" opacity="0.8"/>
    <circle cx="10" cy="74" r="3" fill="#6d28d9" opacity="0.8"/>
    <circle cx="88" cy="59" r="3" fill="#4c1d95" opacity="0.8"/>
    <circle cx="90" cy="74" r="3" fill="#6d28d9" opacity="0.8"/>
    <!-- head -->
    <ellipse cx="50" cy="30" rx="22" ry="18" fill="#1e1b4b"/>
    <!-- void mandibles -->
    <path d="M32 38 L16 48 L28 42" fill="#0c0a1a"/>
    <path d="M68 38 L84 48 L72 42" fill="#1e1b4b"/>
    <!-- void energy tips -->
    <circle cx="16" cy="48" r="5" fill="#7c3aed" opacity="0.8"/>
    <circle cx="84" cy="48" r="5" fill="#6d28d9" opacity="0.8"/>
    <!-- eyes — five void orbs -->
    <circle cx="34" cy="24" r="5" fill="#312e81"/>
    <circle cx="50" cy="20" r="6" fill="#4c1d95"/>
    <circle cx="66" cy="24" r="5" fill="#312e81"/>
    <circle cx="28" cy="34" r="4" fill="#1e1b4b"/>
    <circle cx="72" cy="34" r="4" fill="#1e1b4b"/>
    <circle cx="34" cy="24" r="2.5" fill="#a78bfa"/>
    <circle cx="50" cy="20" r="3" fill="#c4b5fd"/>
    <circle cx="66" cy="24" r="2.5" fill="#a78bfa"/>
    <circle cx="28" cy="34" r="2" fill="#7c3aed"/>
    <circle cx="72" cy="34" r="2" fill="#7c3aed"/>
    <!-- void maw with poison -->
    <path d="M32 38 Q50 50 68 38 Q58 46 50 48 Q42 46 32 38 Z" fill="#030712"/>
    <circle cx="50" cy="48" r="4" fill="#4ade80" opacity="0.7"/>
    <!-- armor shimmer -->
    <path d="M28 65 L22 57 L30 61" fill="#4c1d95" opacity="0.4"/>
    <path d="M72 65 L78 57 L70 61" fill="#312e81" opacity="0.4"/>
  </svg>`,

  "Null Shade": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- absolute void — even darker than Null Entity, shade form -->
    <!-- faint outline only -->
    <path d="M28 52 Q24 76 26 104 Q38 92 50 96 Q62 92 74 104 Q76 76 72 52 Q62 44 50 42 Q38 44 28 52 Z" fill="#030712"/>
    <path d="M28 52 Q24 76 26 104 Q38 92 50 96 Q62 92 74 104 Q76 76 72 52 Q62 44 50 42 Q38 44 28 52 Z" fill="none" stroke="#0c0a1a" stroke-width="1.5" opacity="0.8"/>
    <!-- wisps -->
    <path d="M28 102 Q22 114 20 120" stroke="#030712" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M40 106 Q38 116 38 120" stroke="#0c0a1a" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M60 106 Q62 116 62 120" stroke="#0c0a1a" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M72 102 Q78 114 80 120" stroke="#030712" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- ghost arms -->
    <path d="M28 58 Q10 52 2 42" stroke="#030712" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M72 58 Q90 52 98 42" stroke="#0c0a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- hands — barely visible -->
    <circle cx="2" cy="40" r="7" fill="#030712"/>
    <circle cx="98" cy="40" r="7" fill="#030712"/>
    <circle cx="2" cy="40" r="7" fill="none" stroke="#0c0a1a" stroke-width="1" opacity="0.7"/>
    <circle cx="98" cy="40" r="7" fill="none" stroke="#0c0a1a" stroke-width="1" opacity="0.7"/>
    <!-- head — just barely there -->
    <ellipse cx="50" cy="32" rx="20" ry="18" fill="#030712"/>
    <ellipse cx="50" cy="32" rx="20" ry="18" fill="none" stroke="#0c0a1a" stroke-width="1.5" opacity="0.8"/>
    <!-- two faint purple eyes — the only color in this creature -->
    <ellipse cx="38" cy="28" rx="7" ry="7" fill="#030712"/>
    <ellipse cx="62" cy="28" rx="7" ry="7" fill="#030712"/>
    <ellipse cx="38" cy="28" rx="4" ry="4" fill="#1e1b4b"/>
    <ellipse cx="62" cy="28" rx="4" ry="4" fill="#1e1b4b"/>
    <ellipse cx="38" cy="28" rx="2" ry="2" fill="#312e81" opacity="0.7"/>
    <ellipse cx="62" cy="28" rx="2" ry="2" fill="#4c1d95" opacity="0.7"/>
    <!-- block+dodge double shimmer -->
    <ellipse cx="50" cy="32" rx="24" ry="22" fill="none" stroke="#1e1b4b" stroke-width="1" stroke-dasharray="2 5" opacity="0.5"/>
    <ellipse cx="50" cy="32" rx="28" ry="26" fill="none" stroke="#0c0a1a" stroke-width="1.5" opacity="0.4"/>
  </svg>`,

  "Expanse Horror": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- expanse — vast and wrong -->
    <ellipse cx="50" cy="80" rx="44" ry="32" fill="#030712" opacity="0.4"/>
    <!-- many legs radiating -->
    <path d="M50 90 Q24 100 12 116" stroke="#0c0a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 90 Q30 106 28 120" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 90 Q40 108 38 120" stroke="#0c0a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 90 Q50 108 50 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 90 Q60 108 62 120" stroke="#0c0a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 90 Q70 106 72 120" stroke="#1e1b4b" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 90 Q76 100 88 116" stroke="#0c0a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- vast body -->
    <ellipse cx="50" cy="68" rx="36" ry="28" fill="#0c0a1a"/>
    <!-- expanse texture — like looking into deep space -->
    <circle cx="30" cy="60" r="2" fill="#1e1b4b" opacity="0.6"/>
    <circle cx="56" cy="56" r="1.5" fill="#312e81" opacity="0.5"/>
    <circle cx="70" cy="64" r="2" fill="#1e1b4b" opacity="0.6"/>
    <circle cx="40" cy="72" r="1.5" fill="#4c1d95" opacity="0.5"/>
    <circle cx="64" cy="76" r="2" fill="#312e81" opacity="0.4"/>
    <!-- arms — reaching wide -->
    <path d="M16 64 Q0 52 -8 40" stroke="#0c0a1a" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M14 76 Q-2 70 -8 58" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M84 64 Q100 52 108 40" stroke="#0c0a1a" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M86 76 Q102 70 108 58" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="-8" cy="38" r="8" fill="#4c1d95" opacity="0.8"/>
    <circle cx="-8" cy="56" r="6" fill="#6d28d9" opacity="0.7"/>
    <circle cx="108" cy="38" r="8" fill="#4c1d95" opacity="0.8"/>
    <circle cx="108" cy="56" r="6" fill="#6d28d9" opacity="0.7"/>
    <!-- head — expanse face -->
    <ellipse cx="50" cy="36" rx="30" ry="26" fill="#030712"/>
    <!-- wrong amount of eyes arranged like stars -->
    <circle cx="30" cy="26" r="7" fill="#312e81"/>
    <circle cx="50" cy="20" r="8" fill="#4c1d95"/>
    <circle cx="70" cy="26" r="7" fill="#312e81"/>
    <circle cx="24" cy="40" r="5" fill="#1e1b4b"/>
    <circle cx="76" cy="40" r="5" fill="#1e1b4b"/>
    <circle cx="42" cy="46" r="4" fill="#0c0a1a"/>
    <circle cx="58" cy="46" r="4" fill="#0c0a1a"/>
    <circle cx="30" cy="26" r="4" fill="#8b5cf6"/>
    <circle cx="50" cy="20" r="5" fill="#a78bfa"/>
    <circle cx="70" cy="26" r="4" fill="#7c3aed"/>
    <circle cx="24" cy="40" r="2.5" fill="#6d28d9"/>
    <circle cx="76" cy="40" r="2.5" fill="#6d28d9"/>
    <circle cx="42" cy="46" r="2" fill="#4c1d95"/>
    <circle cx="58" cy="46" r="2" fill="#312e81"/>
    <!-- gaping expanse maw -->
    <path d="M24 52 Q50 68 76 52 Q64 64 50 66 Q36 64 24 52 Z" fill="#030712"/>
    <circle cx="50" cy="66" r="4" fill="#4ade80" opacity="0.6"/>
    <!-- block+dodge+poison shimmer -->
    <ellipse cx="50" cy="36" rx="34" ry="30" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
  </svg>`,

  "Fractured Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- shattered stone void legs -->
    <rect x="18" y="88" width="24" height="32" fill="#1e1b4b" rx="4"/>
    <rect x="58" y="88" width="24" height="32" fill="#0c0a1a" rx="4"/>
    <!-- fracture lines on legs -->
    <path d="M22 92 L28 110" stroke="#7c3aed" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M62 90 L68 108" stroke="#4c1d95" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- void seeping through fractures -->
    <path d="M22 92 L28 102" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- massive body — fractured -->
    <path d="M8 46 L50 30 L92 46 L88 92 L12 92 Z" fill="#0c0a1a"/>
    <!-- fracture lines everywhere -->
    <path d="M28 50 L22 70 L30 86" stroke="#7c3aed" stroke-width="2.5" fill="none" opacity="0.9"/>
    <path d="M50 46 L48 68 L52 84" stroke="#4c1d95" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M72 48 L78 68 L70 84" stroke="#6d28d9" stroke-width="2.5" fill="none" opacity="0.9"/>
    <path d="M34 62 L44 68 L56 62 L66 68" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.6"/>
    <!-- void pouring from fractures — brighter purple -->
    <path d="M28 50 L22 58" stroke="#c4b5fd" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M72 48 L78 56" stroke="#ddd6fe" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- arms — fractured boulders -->
    <ellipse cx="4" cy="64" rx="14" ry="22" fill="#1e1b4b"/>
    <ellipse cx="96" cy="64" rx="14" ry="22" fill="#0c0a1a"/>
    <!-- arm fractures -->
    <path d="M-2 56 L2 72" stroke="#7c3aed" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M98 54 L94 70" stroke="#4c1d95" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- head — fractured void stone -->
    <ellipse cx="50" cy="22" rx="30" ry="22" fill="#0c0a1a"/>
    <!-- fracture crown -->
    <path d="M20 14 L16 0 L24 10 L30 -2 L36 10 L50 0 L64 10 L70 -2 L76 10 L84 0 L80 14"
          fill="none" stroke="#4c1d95" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- void in crown fractures -->
    <circle cx="16" cy="0" r="3" fill="#7c3aed" opacity="0.8"/>
    <circle cx="30" cy="-2" r="3" fill="#a78bfa" opacity="0.8"/>
    <circle cx="50" cy="0" r="4" fill="#c4b5fd" opacity="0.9"/>
    <circle cx="70" cy="-2" r="3" fill="#a78bfa" opacity="0.8"/>
    <circle cx="84" cy="0" r="3" fill="#7c3aed" opacity="0.8"/>
    <!-- glowing void eyes -->
    <ellipse cx="34" cy="20" rx="9" ry="9" fill="#1e1b4b"/>
    <ellipse cx="66" cy="20" rx="9" ry="9" fill="#0c0a1a"/>
    <ellipse cx="34" cy="20" rx="6" ry="6" fill="#7c3aed"/>
    <ellipse cx="66" cy="20" rx="6" ry="6" fill="#6d28d9"/>
    <circle cx="34" cy="20" r="3" fill="#c4b5fd"/>
    <circle cx="66" cy="20" r="3" fill="#a78bfa"/>
    <!-- mouth fracture -->
    <path d="M28 34 L38 40 L50 38 L62 40 L72 34" stroke="#4c1d95" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- armor+block shimmer -->
    <path d="M8 46 L50 30 L92 46 L88 58 L50 46 L12 58 Z" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
  </svg>`,

  "Shard Wraith": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- floating void shards -->
    <path d="M8 28 L12 18 L16 28 L12 36 Z" fill="#4c1d95" opacity="0.7"/>
    <path d="M86 24 L92 14 L94 24 L90 32 Z" fill="#312e81" opacity="0.7"/>
    <path d="M4 52 L8 44 L12 52 L8 58 Z" fill="#6d28d9" opacity="0.6"/>
    <path d="M90 48 L96 40 L98 48 L94 56 Z" fill="#4c1d95" opacity="0.6"/>
    <path d="M12 80 L16 72 L18 80 L14 86 Z" fill="#312e81" opacity="0.5"/>
    <path d="M84 76 L90 68 L92 76 L88 84 Z" fill="#1e1b4b" opacity="0.5"/>
    <!-- wraith body — shard-edged -->
    <path d="M26 52 Q22 76 24 104 Q36 92 50 96 Q64 92 76 104 Q78 76 74 52 Q62 44 50 42 Q38 44 26 52 Z" fill="#0c0a1a"/>
    <!-- shard jutting from body -->
    <path d="M26 52 L14 40 L26 48" fill="#4c1d95" opacity="0.8"/>
    <path d="M74 52 L86 40 L74 48" fill="#312e81" opacity="0.8"/>
    <path d="M24 70 L10 66 L24 66" fill="#6d28d9" opacity="0.6"/>
    <path d="M76 70 L90 66 L76 66" fill="#4c1d95" opacity="0.6"/>
    <!-- wisps bottom -->
    <path d="M28 102 Q22 114 20 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M40 106 Q38 116 38 120" stroke="#0c0a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M60 106 Q62 116 62 120" stroke="#0c0a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M72 102 Q78 114 80 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- shard arms -->
    <path d="M26 58 Q8 52 0 40" stroke="#0c0a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M74 58 Q92 52 100 40" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- shard hands -->
    <path d="M0 40 L-6 34 L0 38 M0 40 L-4 46 M0 40 L4 36" stroke="#7c3aed" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M100 40 L106 34 L100 38 M100 40 L104 46 M100 40 L96 36" stroke="#6d28d9" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- head -->
    <ellipse cx="50" cy="34" rx="22" ry="20" fill="#0c0a1a"/>
    <!-- shard crown -->
    <path d="M28 24 L24 10 L32 20 M40 18 L38 4 L44 16 M50 16 L50 2 L54 16 M60 18 L62 4 L56 16 M72 24 L76 10 L68 20"
          stroke="#7c3aed" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- eyes -->
    <ellipse cx="38" cy="30" rx="7" ry="7" fill="#1e1b4b"/>
    <ellipse cx="62" cy="30" rx="7" ry="7" fill="#0c0a1a"/>
    <ellipse cx="38" cy="30" rx="4" ry="4" fill="#6d28d9"/>
    <ellipse cx="62" cy="30" rx="4" ry="4" fill="#7c3aed"/>
    <circle cx="38" cy="30" r="2" fill="#c4b5fd"/>
    <circle cx="62" cy="30" r="2" fill="#ddd6fe"/>
    <!-- void mouth -->
    <path d="M34 44 Q50 54 66 44 Q58 50 50 52 Q42 50 34 44 Z" fill="#030712"/>
    <!-- block+dodge shimmer -->
    <ellipse cx="50" cy="34" rx="26" ry="24" fill="none" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
  </svg>`,

  "Entropy Wisp": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- decaying void trail -->
    <path d="M50 84 Q28 96 22 114" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M50 84 Q38 100 36 116" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 84 Q50 100 50 116" stroke="#0c0a1a" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M50 84 Q62 100 64 116" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 84 Q72 96 78 114" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- decaying entropy rings -->
    <circle cx="50" cy="54" r="40" fill="#030712" opacity="0.3"/>
    <circle cx="50" cy="54" r="30" fill="#0c0a1a" opacity="0.4"/>
    <circle cx="50" cy="54" r="22" fill="#1e1b4b" opacity="0.6"/>
    <!-- entropy — corruption color mixing purple and decay green -->
    <circle cx="50" cy="54" r="14" fill="#14532d" opacity="0.4"/>
    <circle cx="50" cy="54" r="14" fill="#312e81" opacity="0.5"/>
    <circle cx="50" cy="54" r="8" fill="#4c1d95"/>
    <circle cx="50" cy="54" r="4" fill="#4ade80" opacity="0.6"/>
    <circle cx="50" cy="54" r="2" fill="#c4b5fd"/>
    <!-- entropy decay rings -->
    <circle cx="50" cy="54" r="18" fill="none" stroke="#166534" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
    <circle cx="50" cy="54" r="26" fill="none" stroke="#4c1d95" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
    <circle cx="50" cy="54" r="36" fill="none" stroke="#1e1b4b" stroke-width="1" opacity="0.3"/>
    <!-- center void eye -->
    <ellipse cx="50" cy="52" rx="5" ry="7" fill="#030712"/>
    <ellipse cx="50" cy="52" rx="2.5" ry="3.5" fill="#a78bfa"/>
    <!-- orbiting poison entropy particles -->
    <circle cx="22" cy="54" r="3" fill="#4ade80" opacity="0.7"/>
    <circle cx="78" cy="54" r="3" fill="#4ade80" opacity="0.7"/>
    <circle cx="36" cy="28" r="2.5" fill="#86efac" opacity="0.6"/>
    <circle cx="64" cy="28" r="2.5" fill="#4ade80" opacity="0.6"/>
    <circle cx="50" cy="22" r="3" fill="#4c1d95" opacity="0.7"/>
    <!-- dodge shimmer -->
    <circle cx="50" cy="54" r="24" fill="none" stroke="#a78bfa" stroke-width="1" stroke-dasharray="2 5" opacity="0.4"/>
  </svg>`,

  "Entropy Elemental": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- entropy decay base -->
    <path d="M50 114 Q20 106 14 80 Q8 54 26 36 Q36 24 50 22 Q64 24 74 36 Q92 54 86 80 Q80 106 50 114 Z" fill="#030712" opacity="0.4"/>
    <!-- half-void half-decay body -->
    <path d="M24 54 Q18 78 20 106 Q34 94 50 98 Q66 94 80 106 Q82 78 76 54 Q64 42 50 40 Q36 42 24 54 Z" fill="#0c0a1a"/>
    <!-- entropy corruption spreading -->
    <path d="M28 58 L24 76 L30 92" stroke="#4ade80" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M72 56 L76 74 L70 90" stroke="#166534" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M44 54 L42 72 L46 88" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M56 54 L58 72 L54 88" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- entropy patches — where void meets decay -->
    <path d="M32 64 Q40 58 50 62 Q40 56 32 64 Z" fill="#14532d" opacity="0.4"/>
    <path d="M50 62 Q60 56 70 60 Q60 54 50 62 Z" fill="#4c1d95" opacity="0.4"/>
    <!-- arm left — void -->
    <path d="M24 60 Q6 52 -2 40" stroke="#0c0a1a" stroke-width="9" fill="none" stroke-linecap="round"/>
    <!-- arm right — entropy green -->
    <path d="M76 60 Q94 52 102 40" stroke="#14532d" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- hands -->
    <circle cx="-2" cy="38" r="10" fill="#1e1b4b"/>
    <circle cx="102" cy="38" r="10" fill="#14532d" opacity="0.8"/>
    <circle cx="102" cy="38" r="6" fill="#4ade80" opacity="0.5"/>
    <!-- wisps -->
    <path d="M22 104 Q14 114 12 120" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M36 108 Q32 118 32 120" stroke="#14532d" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M64 108 Q68 118 68 120" stroke="#14532d" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M78 104 Q86 114 88 120" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- head -->
    <ellipse cx="50" cy="30" rx="26" ry="24" fill="#0c0a1a"/>
    <!-- entropy crown — half void half decay -->
    <path d="M24 20 L20 4 L28 16 L36 2 L42 14 L50 0 L58 14 L64 2 L72 16 L80 4 L76 20"
          fill="none" stroke-width="3" stroke-linejoin="round" stroke="url(#entropyGrad)"/>
    <!-- crown tips alternating -->
    <circle cx="20" cy="4" r="4" fill="#4c1d95" opacity="0.9"/>
    <circle cx="36" cy="2" r="4" fill="#4ade80" opacity="0.9"/>
    <circle cx="50" cy="0" r="5" fill="#7c3aed"/>
    <circle cx="64" cy="2" r="4" fill="#4ade80" opacity="0.9"/>
    <circle cx="80" cy="4" r="4" fill="#4c1d95" opacity="0.9"/>
    <!-- eyes — one void one decay -->
    <ellipse cx="36" cy="26" rx="9" ry="9" fill="#1e1b4b"/>
    <ellipse cx="64" cy="26" rx="9" ry="9" fill="#14532d"/>
    <ellipse cx="36" cy="26" rx="5" ry="5" fill="#7c3aed"/>
    <ellipse cx="64" cy="26" rx="5" ry="5" fill="#4ade80" opacity="0.8"/>
    <circle cx="36" cy="26" r="2.5" fill="#c4b5fd"/>
    <circle cx="64" cy="26" r="2.5" fill="#86efac"/>
    <!-- open maw with entropy -->
    <path d="M28 40 Q50 54 72 40 Q62 50 50 52 Q38 50 28 40 Z" fill="#030712"/>
    <circle cx="50" cy="52" r="4" fill="#4ade80" opacity="0.8"/>
    <!-- armor+dodge+poison shimmer -->
    <ellipse cx="50" cy="30" rx="30" ry="28" fill="none" stroke="#4ade80" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/>
  </svg>`,

  "Decay Walker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- rotting void legs -->
    <rect x="30" y="88" width="15" height="30" fill="#0c0a1a" rx="4"/>
    <rect x="55" y="88" width="15" height="30" fill="#14532d" rx="4" opacity="0.8"/>
    <!-- decay patches on legs -->
    <path d="M32 96 L36 110" stroke="#4ade80" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M57 94 L61 108" stroke="#166534" stroke-width="2" fill="none" opacity="0.6"/>
    <!-- decaying body — half dissolved -->
    <path d="M22 52 L50 44 L78 52 L74 92 L26 92 Z" fill="#0c0a1a"/>
    <!-- decay corruption patches -->
    <path d="M28 56 Q36 50 46 54 Q36 48 28 56 Z" fill="#14532d" opacity="0.5"/>
    <path d="M54 54 Q64 48 72 52 Q64 46 54 54 Z" fill="#166534" opacity="0.5"/>
    <path d="M26 68 Q38 62 52 66 Q38 60 26 68 Z" fill="#14532d" opacity="0.4"/>
    <!-- holes in body where void shows through -->
    <circle cx="50" cy="72" r="8" fill="#030712"/>
    <circle cx="50" cy="72" r="5" fill="#4ade80" opacity="0.2"/>
    <circle cx="36" cy="62" r="4" fill="#030712"/>
    <circle cx="64" cy="64" r="4" fill="#030712"/>
    <!-- arms — one void one decay -->
    <path d="M22 58 L4 50" stroke="#0c0a1a" stroke-width="8" stroke-linecap="round"/>
    <path d="M78 58 L96 50" stroke="#14532d" stroke-width="8" stroke-linecap="round" opacity="0.8"/>
    <!-- hands -->
    <circle cx="4" cy="48" r="8" fill="#1e1b4b"/>
    <circle cx="96" cy="48" r="8" fill="#14532d" opacity="0.8"/>
    <circle cx="96" cy="48" r="5" fill="#4ade80" opacity="0.5"/>
    <!-- bony decay fingers -->
    <path d="M-2 44 L-6 40 M4 48 L2 42 M8 46 L12 40" stroke="#4ade80" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- head — decaying skull -->
    <ellipse cx="50" cy="30" rx="22" ry="20" fill="#0c0a1a"/>
    <!-- decay on skull -->
    <path d="M30 22 Q40 16 52 18 Q40 14 30 22 Z" fill="#14532d" opacity="0.4"/>
    <!-- rotting crown spots -->
    <circle cx="34" cy="14" r="4" fill="#14532d" opacity="0.7"/>
    <circle cx="50" cy="10" r="5" fill="#166534" opacity="0.7"/>
    <circle cx="66" cy="14" r="4" fill="#14532d" opacity="0.7"/>
    <!-- hollow eye sockets -->
    <ellipse cx="38" cy="28" rx="8" ry="8" fill="#030712"/>
    <ellipse cx="62" cy="28" rx="8" ry="8" fill="#14532d" opacity="0.7"/>
    <ellipse cx="38" cy="28" rx="4" ry="4" fill="#4c1d95" opacity="0.7"/>
    <ellipse cx="62" cy="28" rx="4" ry="4" fill="#4ade80" opacity="0.7"/>
    <!-- gaping decayed mouth -->
    <path d="M32 40 L40 46 L50 44 L60 46 L68 40" stroke="#14532d" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M36 42 L34 50 M42 41 L42 49 M50 40 L50 48 M58 41 L58 49 M64 42 L66 50"
          stroke="#4ade80" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- poison/decay drip -->
    <circle cx="50" cy="48" r="3" fill="#4ade80" opacity="0.8"/>
    <path d="M50 48 L50 56" stroke="#4ade80" stroke-width="1.5" opacity="0.5"/>
  </svg>`,

  "Unraveling Horror": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- unraveling threads spreading everywhere -->
    <path d="M50 80 Q18 90 6 110" stroke="#4c1d95" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M50 80 Q24 98 20 116" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M50 80 Q34 102 34 120" stroke="#4ade80" stroke-width="1.5" fill="none" opacity="0.4"/>
    <path d="M50 80 Q50 102 50 120" stroke="#1e1b4b" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M50 80 Q66 102 66 120" stroke="#4ade80" stroke-width="1.5" fill="none" opacity="0.4"/>
    <path d="M50 80 Q76 98 80 116" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M50 80 Q82 90 94 110" stroke="#4c1d95" stroke-width="2" fill="none" opacity="0.5"/>
    <!-- threads on sides -->
    <path d="M20 62 Q4 56 -4 44" stroke="#6d28d9" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M18 72 Q2 68 -6 58" stroke="#4ade80" stroke-width="1.5" fill="none" opacity="0.4"/>
    <path d="M80 62 Q96 56 104 44" stroke="#6d28d9" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M82 72 Q98 68 106 58" stroke="#4ade80" stroke-width="1.5" fill="none" opacity="0.4"/>
    <!-- central body — coming apart -->
    <ellipse cx="50" cy="60" rx="28" ry="26" fill="#0c0a1a"/>
    <!-- body unraveling texture -->
    <path d="M28 52 Q36 46 44 50 Q36 44 28 52 Z" fill="#1e1b4b" opacity="0.7"/>
    <path d="M56 50 Q66 44 74 48 Q66 42 56 50 Z" fill="#312e81" opacity="0.7"/>
    <!-- arms — partially unraveled -->
    <path d="M22 62 Q6 54 -2 42" stroke="#0c0a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M78 62 Q94 54 102 42" stroke="#1e1b4b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- threads from arm tips -->
    <path d="M-2 42 L-8 34 M-2 42 L-10 44 M-2 42 L-6 50" stroke="#a78bfa" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M102 42 L108 34 M102 42 L110 44 M102 42 L106 50" stroke="#4ade80" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
    <!-- head — unraveling at edges -->
    <ellipse cx="50" cy="32" rx="24" ry="22" fill="#0c0a1a"/>
    <!-- head threads -->
    <path d="M26 22 Q20 12 18 4" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M28 18 Q24 8 22 -2" stroke="#6d28d9" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M74 22 Q80 12 82 4" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M72 18 Q76 8 78 -2" stroke="#4ade80" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- eyes -->
    <ellipse cx="36" cy="28" rx="8" ry="8" fill="#1e1b4b"/>
    <ellipse cx="64" cy="28" rx="8" ry="8" fill="#14532d"/>
    <ellipse cx="36" cy="28" rx="5" ry="5" fill="#6d28d9"/>
    <ellipse cx="64" cy="28" rx="5" ry="5" fill="#4ade80" opacity="0.9"/>
    <circle cx="36" cy="28" r="2.5" fill="#ddd6fe"/>
    <circle cx="64" cy="28" r="2.5" fill="#86efac"/>
    <!-- mouth — unraveling -->
    <path d="M30 42 Q50 56 70 42 Q60 52 50 54 Q40 52 30 42 Z" fill="#030712"/>
    <path d="M32 44 Q26 52 24 58" stroke="#4ade80" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M68 44 Q74 52 76 58" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.5"/>
    <circle cx="50" cy="54" r="4" fill="#4ade80" opacity="0.7"/>
    <!-- block+dodge+poison shimmer -->
    <ellipse cx="50" cy="32" rx="28" ry="26" fill="none" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3 4" opacity="0.4"/>
  </svg>`,

  "Void Tendril": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- massive tendril coils -->
    <path d="M50 110 Q70 104 80 88 Q88 72 80 58 Q74 46 62 46 Q70 56 68 70 Q66 84 56 94 Q52 100 50 110 Z" fill="#1e1b4b"/>
    <path d="M50 110 Q30 104 20 88 Q12 72 20 58 Q26 46 38 46 Q30 56 32 70 Q34 84 44 94 Q48 100 50 110 Z" fill="#0c0a1a"/>
    <!-- tendril tip -->
    <path d="M80 58 L90 48 L84 60 Z" fill="#7c3aed"/>
    <path d="M20 58 L10 48 L16 60 Z" fill="#4c1d95"/>
    <!-- secondary tendrils -->
    <path d="M68 70 Q84 62 92 48" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M32 70 Q16 62 8 48" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M66 84 Q86 82 96 70" stroke="#4c1d95" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M34 84 Q14 82 4 70" stroke="#312e81" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- tendril secondary tips with void energy -->
    <circle cx="92" cy="46" r="5" fill="#7c3aed" opacity="0.9"/>
    <circle cx="8" cy="46" r="5" fill="#6d28d9" opacity="0.9"/>
    <circle cx="96" cy="68" r="4" fill="#4c1d95" opacity="0.8"/>
    <circle cx="4" cy="68" r="4" fill="#312e81" opacity="0.8"/>
    <!-- void body at center -->
    <ellipse cx="50" cy="56" rx="20" ry="18" fill="#0c0a1a"/>
    <!-- void eye pattern — beholder-like -->
    <circle cx="50" cy="56" r="14" fill="#030712"/>
    <circle cx="50" cy="56" r="10" fill="#1e1b4b"/>
    <circle cx="50" cy="56" r="6" fill="#4c1d95"/>
    <circle cx="50" cy="56" r="3" fill="#a78bfa"/>
    <circle cx="50" cy="56" r="1.5" fill="#e0e7ff"/>
    <!-- orbiting void eyes -->
    <circle cx="32" cy="50" r="4" fill="#312e81"/>
    <circle cx="32" cy="50" r="2" fill="#7c3aed"/>
    <circle cx="68" cy="50" r="4" fill="#1e1b4b"/>
    <circle cx="68" cy="50" r="2" fill="#6d28d9"/>
    <circle cx="42" cy="40" r="3" fill="#4c1d95"/>
    <circle cx="42" cy="40" r="1.5" fill="#a78bfa"/>
    <circle cx="58" cy="40" r="3" fill="#312e81"/>
    <circle cx="58" cy="40" r="1.5" fill="#8b5cf6"/>
    <!-- block+dodge shimmer -->
    <ellipse cx="50" cy="56" rx="24" ry="22" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
  </svg>`,

  "Unborn Specter": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- spectral unformed trailing -->
    <path d="M50 104 Q24 108 16 120" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 104 Q34 114 32 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 104 Q44 116 44 120" stroke="#030712" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 104 Q50 116 50 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 104 Q56 116 56 120" stroke="#0c0a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 104 Q66 114 68 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M50 104 Q76 108 84 120" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- unborn void body — not fully formed -->
    <path d="M28 58 Q24 80 26 106 Q38 96 50 100 Q62 96 74 106 Q76 80 72 58 Q62 48 50 46 Q38 48 28 58 Z" fill="#0c0a1a" opacity="0.9"/>
    <!-- unformed surface — bubbling -->
    <circle cx="36" cy="68" r="5" fill="#030712"/>
    <circle cx="56" cy="72" r="4" fill="#0c0a1a"/>
    <circle cx="66" cy="62" r="5" fill="#030712"/>
    <circle cx="42" cy="86" r="4" fill="#0c0a1a"/>
    <!-- reaching half-formed arms -->
    <path d="M28 64 Q12 56 4 44" stroke="#030712" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M72 64 Q88 56 96 44" stroke="#0c0a1a" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- unformed hands — just blobs -->
    <circle cx="4" cy="42" r="9" fill="#030712"/>
    <circle cx="96" cy="42" r="9" fill="#0c0a1a"/>
    <!-- head — barely defined -->
    <ellipse cx="50" cy="34" rx="22" ry="20" fill="#030712"/>
    <!-- attempting to have a face — failing -->
    <ellipse cx="38" cy="30" rx="8" ry="8" fill="#0c0a1a"/>
    <ellipse cx="62" cy="30" rx="8" ry="8" fill="#030712"/>
    <ellipse cx="38" cy="30" rx="5" ry="5" fill="#1e1b4b"/>
    <ellipse cx="62" cy="30" rx="5" ry="5" fill="#0c0a1a"/>
    <ellipse cx="38" cy="30" rx="2" ry="2" fill="#312e81" opacity="0.6"/>
    <ellipse cx="62" cy="30" rx="2" ry="2" fill="#4c1d95" opacity="0.6"/>
    <!-- mouth that almost exists -->
    <path d="M36 44 Q50 50 64 44" stroke="#0c0a1a" stroke-width="2" fill="none" opacity="0.7"/>
    <!-- poison -->
    <circle cx="50" cy="50" r="3" fill="#4ade80" opacity="0.5"/>
    <!-- block+dodge+poison shimmer — all mechanisms barely there -->
    <ellipse cx="50" cy="34" rx="26" ry="24" fill="none" stroke="#312e81" stroke-width="1" stroke-dasharray="2 6" opacity="0.4"/>
  </svg>`,

  "Formless One": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- constantly shifting form — amoeba-like -->
    <path d="M50 114 Q16 104 10 76 Q4 48 24 30 Q36 16 50 14 Q64 16 76 30 Q96 48 90 76 Q84 104 50 114 Z" fill="#030712" opacity="0.5"/>
    <!-- formless shifting body -->
    <path d="M20 56 Q16 80 18 108 Q34 96 50 100 Q66 96 82 108 Q84 80 80 56 Q66 40 50 38 Q34 40 20 56 Z" fill="#0c0a1a"/>
    <!-- shifting pseudopods instead of arms -->
    <path d="M20 60 Q4 50 -4 36" stroke="#0c0a1a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M22 74 Q4 68 -4 56" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M80 60 Q96 50 104 36" stroke="#0c0a1a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M78 74 Q96 68 104 56" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- pseudopod tips — void orbs -->
    <circle cx="-4" cy="34" r="10" fill="#1e1b4b"/>
    <circle cx="-4" cy="54" r="8" fill="#0c0a1a"/>
    <circle cx="104" cy="34" r="10" fill="#312e81"/>
    <circle cx="104" cy="54" r="8" fill="#1e1b4b"/>
    <!-- inner glow of pseudopod -->
    <circle cx="-4" cy="34" r="5" fill="#4c1d95" opacity="0.7"/>
    <circle cx="104" cy="34" r="5" fill="#6d28d9" opacity="0.7"/>
    <!-- wisps at base -->
    <path d="M20 106 Q12 116 10 120" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M36 110 Q32 118 32 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M64 110 Q68 118 68 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M80 106 Q88 116 90 120" stroke="#0c0a1a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- face that shifts -->
    <ellipse cx="50" cy="36" rx="26" ry="24" fill="#030712"/>
    <!-- three eyes in shifting positions -->
    <circle cx="34" cy="28" r="8" fill="#1e1b4b"/>
    <circle cx="58" cy="26" r="9" fill="#0c0a1a"/>
    <circle cx="46" cy="44" r="6" fill="#1e1b4b"/>
    <circle cx="34" cy="28" r="4" fill="#312e81"/>
    <circle cx="58" cy="26" r="5" fill="#4c1d95"/>
    <circle cx="46" cy="44" r="3" fill="#6d28d9"/>
    <circle cx="34" cy="28" r="2" fill="#a78bfa"/>
    <circle cx="58" cy="26" r="2.5" fill="#c4b5fd"/>
    <circle cx="46" cy="44" r="1.5" fill="#8b5cf6"/>
    <!-- formless maw -->
    <path d="M24 46 Q50 62 76 46 Q64 58 50 60 Q36 58 24 46 Z" fill="#030712"/>
    <!-- block+dodge aura — shifting -->
    <ellipse cx="50" cy="36" rx="30" ry="28" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="5 3" opacity="0.4"/>
    <ellipse cx="50" cy="60" rx="34" ry="16" fill="none" stroke="#4c1d95" stroke-width="1" stroke-dasharray="3 5" opacity="0.3"/>
  </svg>`,

  "Proto Beast": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- primordial void creature — earliest form of life from the void -->
    <!-- tail — primitive -->
    <path d="M72 106 Q88 96 92 80 Q96 66 88 54 L82 60 Q88 72 84 84 Q80 96 72 106 Z" fill="#14532d" opacity="0.7"/>
    <!-- proto-legs — thick and primitive -->
    <ellipse cx="34" cy="104" rx="18" ry="12" fill="#0c0a1a"/>
    <ellipse cx="66" cy="104" rx="18" ry="12" fill="#14532d" opacity="0.8"/>
    <!-- body — primitive bulk -->
    <ellipse cx="50" cy="76" rx="34" ry="28" fill="#0c0a1a"/>
    <!-- proto-scales — void and decay -->
    <path d="M24 68 Q34 62 44 66 Q34 60 24 68 Z" fill="#1e1b4b" opacity="0.7"/>
    <path d="M56 64 Q66 58 74 62 Q66 56 56 64 Z" fill="#14532d" opacity="0.7"/>
    <path d="M22 80 Q36 74 50 78 Q64 74 78 80" stroke="#1e1b4b" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M24 90 Q38 86 50 88 Q62 86 76 90" stroke="#14532d" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- primitive arms -->
    <path d="M18 70 Q4 60 -2 46" stroke="#0c0a1a" stroke-width="11" fill="none" stroke-linecap="round"/>
    <path d="M82 70 Q96 60 102 46" stroke="#14532d" stroke-width="11" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- proto-claws -->
    <path d="M-2 46 L-8 40 M-2 46 L-6 52 M-2 46 L4 42" stroke="#4ade80" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M102 46 L108 40 M102 46 L106 52 M102 46 L96 42" stroke="#4c1d95" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- neck — massive -->
    <path d="M32 50 Q50 38 68 50" stroke="#0c0a1a" stroke-width="16" fill="none" stroke-linecap="round"/>
    <!-- head — primordial beast -->
    <ellipse cx="50" cy="32" rx="28" ry="24" fill="#0c0a1a"/>
    <!-- proto-horns — budding -->
    <path d="M30 18 L24 4 L32 14" fill="#14532d" opacity="0.7"/>
    <path d="M70 18 L76 4 L68 14" fill="#1e1b4b"/>
    <!-- primordial eyes — ancient -->
    <ellipse cx="36" cy="26" rx="10" ry="10" fill="#14532d"/>
    <ellipse cx="64" cy="26" rx="10" ry="10" fill="#1e1b4b"/>
    <ellipse cx="36" cy="26" rx="6" ry="6" fill="#4ade80" opacity="0.9"/>
    <ellipse cx="64" cy="26" rx="6" ry="6" fill="#4c1d95"/>
    <circle cx="36" cy="26" r="3" fill="#86efac"/>
    <circle cx="64" cy="26" r="3" fill="#a78bfa"/>
    <!-- enormous jaw -->
    <path d="M22 38 Q36 50 50 48 Q64 50 78 38 L76 34" fill="#0c0a1a"/>
    <path d="M26 38 L24 48 M34 36 L34 46 M44 35 L44 45 M56 35 L56 45 M66 36 L66 46 M74 38 L76 48"
          stroke="#4ade80" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
    <circle cx="50" cy="48" r="4" fill="#4ade80" opacity="0.7"/>
    <!-- armor+dodge shimmer -->
    <ellipse cx="50" cy="32" rx="32" ry="28" fill="none" stroke="#4ade80" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
  </svg>`,

  "The Nameless": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- all four mechanics — the apex of floor 60 -->
    <!-- void vortex around entire entity -->
    <circle cx="50" cy="56" r="46" fill="#030712" opacity="0.5"/>
    <circle cx="50" cy="56" r="38" fill="none" stroke="#4c1d95" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.4"/>
    <circle cx="50" cy="56" r="30" fill="none" stroke="#14532d" stroke-width="1" stroke-dasharray="3 5" opacity="0.3"/>
    <!-- tentacle base — massive -->
    <path d="M50 98 Q22 108 10 122" stroke="#0c0a1a" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q32 112 28 122" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q42 114 42 122" stroke="#0c0a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q50 114 50 122" stroke="#14532d" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M50 98 Q58 114 58 122" stroke="#0c0a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q68 112 72 122" stroke="#312e81" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q78 108 90 122" stroke="#0c0a1a" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- vast body -->
    <ellipse cx="50" cy="72" rx="38" ry="30" fill="#030712"/>
    <!-- nameless texture — indescribable -->
    <circle cx="30" cy="64" r="3" fill="#1e1b4b" opacity="0.6"/>
    <circle cx="54" cy="60" r="2" fill="#14532d" opacity="0.5"/>
    <circle cx="72" cy="68" r="3" fill="#312e81" opacity="0.6"/>
    <circle cx="40" cy="80" r="2" fill="#4ade80" opacity="0.4"/>
    <circle cx="64" cy="78" r="2.5" fill="#4c1d95" opacity="0.5"/>
    <!-- flailing nightmare arms -->
    <path d="M14 68 Q-4 56 -10 42" stroke="#0c0a1a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M12 82 Q-6 76 -12 62" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M86 68 Q104 56 110 42" stroke="#0c0a1a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M88 82 Q106 76 112 62" stroke="#14532d" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- arm tips -->
    <circle cx="-10" cy="40" r="10" fill="#4c1d95" opacity="0.9"/>
    <circle cx="-12" cy="60" r="8" fill="#6d28d9" opacity="0.8"/>
    <circle cx="110" cy="40" r="10" fill="#4c1d95" opacity="0.9"/>
    <circle cx="112" cy="60" r="8" fill="#14532d" opacity="0.8"/>
    <circle cx="-10" cy="40" r="5" fill="#a78bfa" opacity="0.7"/>
    <circle cx="110" cy="40" r="5" fill="#4ade80" opacity="0.6"/>
    <!-- the nameless head — vast and wrong -->
    <ellipse cx="50" cy="38" rx="34" ry="28" fill="#030712"/>
    <!-- too many eyes — in impossible arrangement -->
    <circle cx="26" cy="28" r="8" fill="#1e1b4b"/>
    <circle cx="50" cy="20" r="10" fill="#14532d"/>
    <circle cx="74" cy="28" r="8" fill="#0c0a1a"/>
    <circle cx="20" cy="44" r="6" fill="#0c0a1a"/>
    <circle cx="80" cy="44" r="6" fill="#1e1b4b"/>
    <circle cx="38" cy="48" r="5" fill="#030712"/>
    <circle cx="62" cy="48" r="5" fill="#0c0a1a"/>
    <circle cx="26" cy="28" r="4.5" fill="#7c3aed"/>
    <circle cx="50" cy="20" r="5.5" fill="#4ade80" opacity="0.9"/>
    <circle cx="74" cy="28" r="4.5" fill="#6d28d9"/>
    <circle cx="20" cy="44" r="3" fill="#4c1d95"/>
    <circle cx="80" cy="44" r="3" fill="#14532d" opacity="0.8"/>
    <circle cx="38" cy="48" r="2.5" fill="#a78bfa"/>
    <circle cx="62" cy="48" r="2.5" fill="#4ade80" opacity="0.7"/>
    <!-- the nameless maw — incomprehensible -->
    <path d="M18 52 Q50 70 82 52 Q68 66 50 68 Q32 66 18 52 Z" fill="#030712"/>
    <path d="M22 56 Q16 64 14 70" stroke="#4c1d95" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M78 56 Q84 64 86 70" stroke="#14532d" stroke-width="2" fill="none" opacity="0.5"/>
    <circle cx="50" cy="68" r="5" fill="#4ade80" opacity="0.8"/>
    <!-- all four mechanics shimmer -->
    <ellipse cx="50" cy="38" rx="38" ry="32" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.4"/>
    <ellipse cx="50" cy="38" rx="42" ry="36" fill="none" stroke="#4ade80" stroke-width="1" stroke-dasharray="4 6" opacity="0.3"/>
  </svg>`,

  "Threshold Guardian": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- the threshold portal behind -->
    <ellipse cx="50" cy="60" rx="42" ry="52" fill="#030712" opacity="0.6"/>
    <ellipse cx="50" cy="60" rx="36" ry="46" fill="none" stroke="#4c1d95" stroke-width="2" opacity="0.5"/>
    <ellipse cx="50" cy="60" rx="28" ry="38" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.4"/>
    <!-- armored legs -->
    <rect x="26" y="90" width="18" height="30" fill="#0c0a1a" rx="4"/>
    <rect x="56" y="90" width="18" height="30" fill="#1e1b4b" rx="4"/>
    <!-- threshold energy seeping from armor -->
    <path d="M28 96 L32 114" stroke="#7c3aed" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M60 94 L64 112" stroke="#4c1d95" stroke-width="2" fill="none" opacity="0.8"/>
    <!-- massive plate body -->
    <path d="M14 48 L50 32 L86 48 L82 94 L18 94 Z" fill="#0c0a1a"/>
    <!-- void energy in armor seams -->
    <path d="M14 48 L50 32 L86 48 L82 62 L50 50 L18 62 Z" fill="#1e1b4b" opacity="0.6"/>
    <path d="M20 68 L50 58 L80 68" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M18 80 L50 70 L82 80" stroke="#4c1d95" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- armor cracks with void glow -->
    <path d="M30 54 L26 72 L32 88" stroke="#a78bfa" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M70 52 L74 70 L68 86" stroke="#7c3aed" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M50 48 L50 72" stroke="#c4b5fd" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- massive sword arm -->
    <path d="M86 56 L102 46" stroke="#0c0a1a" stroke-width="12" stroke-linecap="round"/>
    <!-- threshold sword — void energy blade -->
    <rect x="100" y="10" width="5" height="42" fill="#1e1b4b" rx="2"/>
    <path d="M102.5 10 L102.5 -2 L99 4 L106 4 Z" fill="#7c3aed"/>
    <path d="M102.5 10 L102.5 -2 L99 4 L106 4 Z" fill="#a78bfa" opacity="0.5"/>
    <rect x="94" y="14" width="20" height="4" fill="#0c0a1a" rx="2"/>
    <!-- void energy on sword -->
    <path d="M102 14 L102 48" stroke="#7c3aed" stroke-width="1" fill="none" opacity="0.7"/>
    <!-- shield arm -->
    <path d="M14 56 L-2 48" stroke="#1e1b4b" stroke-width="12" stroke-linecap="round"/>
    <!-- threshold shield — void gate -->
    <path d="M-6 32 Q-12 40 -10 56 Q-8 66 -2 68 Q6 60 4 46 Q2 36 -6 32 Z" fill="#0c0a1a"/>
    <path d="M-6 32 Q-12 40 -10 56 Q-8 66 -2 68 Q6 60 4 46 Q2 36 -6 32 Z" fill="none" stroke="#7c3aed" stroke-width="2"/>
    <!-- shield void gate symbol -->
    <circle cx="-3" cy="50" r="8" fill="none" stroke="#4c1d95" stroke-width="1.5"/>
    <circle cx="-3" cy="50" r="4" fill="#7c3aed" opacity="0.5"/>
    <!-- helmet head -->
    <ellipse cx="50" cy="26" rx="26" ry="22" fill="#0c0a1a"/>
    <!-- ancient void helmet -->
    <path d="M24 20 Q28 4 50 2 Q72 4 76 20 L72 16 Q68 4 50 2 Q32 4 28 16 Z" fill="#1e1b4b"/>
    <!-- visor — void glow -->
    <path d="M24 22 L76 22" stroke="#7c3aed" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    <path d="M26 22 L74 22" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    <!-- helm wings/fins of void -->
    <path d="M24 20 L12 10 L22 16" fill="#4c1d95" opacity="0.8"/>
    <path d="M76 20 L88 10 L78 16" fill="#312e81" opacity="0.8"/>
    <!-- armor+block+dodge shimmer -->
    <ellipse cx="50" cy="26" rx="30" ry="26" fill="none" stroke="#a78bfa" stroke-width="1" stroke-dasharray="5 3" opacity="0.4"/>
  </svg>`,

  "End Walker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- the walker approaches the end -->
    <!-- decay trail left behind -->
    <path d="M50 108 Q26 108 18 120" stroke="#14532d" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M50 108 Q36 114 36 120" stroke="#0c0a1a" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 108 Q50 116 50 120" stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M50 108 Q64 114 64 120" stroke="#0c0a1a" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 108 Q74 108 82 120" stroke="#4c1d95" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.5"/>
    <!-- cloaked body -->
    <path d="M22 54 Q18 78 20 110 Q34 98 50 102 Q66 98 80 110 Q82 78 78 54 Q64 44 50 42 Q36 44 22 54 Z" fill="#030712"/>
    <!-- end energy radiating from body -->
    <path d="M26 58 L22 76 L28 92" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M74 56 L78 74 L72 90" stroke="#14532d" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M44 54 L42 74 L46 90" stroke="#a78bfa" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M56 54 L58 74 L54 90" stroke="#4ade80" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- outstretched arms -->
    <path d="M22 60 Q4 52 -4 40" stroke="#030712" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M78 60 Q96 52 104 40" stroke="#0c0a1a" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- end-touched hands -->
    <circle cx="-4" cy="38" r="9" fill="#030712"/>
    <circle cx="104" cy="38" r="9" fill="#14532d" opacity="0.8"/>
    <!-- fingers of end -->
    <path d="M-10 32 L-16 28 M-4 38 L-10 32 M0 34 L4 28 M-6 44 L-12 48" stroke="#4c1d95" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M110 32 L116 28 M104 38 L110 32 M100 34 L96 28 M106 44 L112 48" stroke="#4ade80" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- head — the end approaches -->
    <ellipse cx="50" cy="32" rx="24" ry="22" fill="#030712"/>
    <!-- end crown — fracture of reality -->
    <path d="M26 22 L22 6 L30 18 L38 4 L44 20 L50 6 L56 20 L62 4 L70 18 L78 6 L74 22"
          fill="none" stroke="#4c1d95" stroke-width="3" stroke-linejoin="round"/>
    <!-- crown alternating void/decay -->
    <circle cx="22" cy="6" r="4" fill="#7c3aed" opacity="0.9"/>
    <circle cx="38" cy="4" r="4" fill="#4ade80" opacity="0.9"/>
    <circle cx="50" cy="6" r="5" fill="#a78bfa"/>
    <circle cx="62" cy="4" r="4" fill="#4ade80" opacity="0.9"/>
    <circle cx="78" cy="6" r="4" fill="#6d28d9" opacity="0.9"/>
    <!-- eyes — void and decay -->
    <ellipse cx="36" cy="28" rx="9" ry="9" fill="#1e1b4b"/>
    <ellipse cx="64" cy="28" rx="9" ry="9" fill="#14532d"/>
    <ellipse cx="36" cy="28" rx="6" ry="6" fill="#6d28d9"/>
    <ellipse cx="64" cy="28" rx="6" ry="6" fill="#4ade80" opacity="0.9"/>
    <circle cx="36" cy="28" r="3" fill="#ddd6fe"/>
    <circle cx="64" cy="28" r="3" fill="#86efac"/>
    <!-- end maw -->
    <path d="M28 42 Q50 56 72 42 Q62 52 50 54 Q38 52 28 42 Z" fill="#030712"/>
    <circle cx="50" cy="54" r="5" fill="#4ade80" opacity="0.7"/>
    <!-- all shimmer -->
    <ellipse cx="50" cy="32" rx="28" ry="26" fill="none" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
  </svg>`,

  "Final Shade": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- multiple echo copies fading out -->
    <path d="M28 52 Q24 76 26 104 Q38 92 50 96 Q62 92 74 104 Q76 76 72 52 Q62 44 50 42 Q38 44 28 52 Z" fill="#030712" opacity="0.08"/>
    <path d="M29 53 Q25 76 27 103 Q39 93 50 97 Q61 93 73 103 Q75 76 71 53 Q61 45 50 43 Q39 45 29 53 Z" fill="#0c0a1a" opacity="0.12"/>
    <path d="M30 54 Q26 76 28 102 Q40 93 50 97 Q60 93 70 102 Q72 76 68 54 Q58 46 50 44 Q42 46 30 54 Z" fill="#1e1b4b" opacity="0.18"/>
    <path d="M31 55 Q27 76 29 101 Q41 93 50 97 Q59 93 69 101 Q71 76 67 55 Q57 47 50 45 Q43 47 31 55 Z" fill="#312e81" opacity="0.25"/>
    <!-- main body — almost gone -->
    <path d="M32 56 Q28 78 30 100 Q42 92 50 96 Q58 92 68 100 Q70 78 66 56 Q56 48 50 46 Q44 48 32 56 Z" fill="#0c0a1a" opacity="0.95"/>
    <!-- final wisps -->
    <path d="M30 98 Q24 112 22 120" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.9"/>
    <path d="M40 102 Q38 114 38 120" stroke="#0c0a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M60 102 Q62 114 62 120" stroke="#0c0a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M70 98 Q76 112 78 120" stroke="#312e81" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.9"/>
    <!-- arms — echoing -->
    <path d="M32 62 Q14 56 6 46" stroke="#030712" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M32 62 Q14 56 6 46" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M32 62 Q14 56 6 46" stroke="#0c0a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M68 62 Q86 56 94 46" stroke="#030712" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M68 62 Q86 56 94 46" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M68 62 Q86 56 94 46" stroke="#0c0a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- head — fading -->
    <ellipse cx="50" cy="36" rx="22" ry="20" fill="#030712" opacity="0.5"/>
    <ellipse cx="50" cy="36" rx="22" ry="20" fill="#0c0a1a" opacity="0.8"/>
    <!-- eyes — brightest thing remaining -->
    <ellipse cx="38" cy="32" rx="8" ry="8" fill="#0c0a1a"/>
    <ellipse cx="62" cy="32" rx="8" ry="8" fill="#030712"/>
    <ellipse cx="38" cy="32" rx="5" ry="5" fill="#312e81"/>
    <ellipse cx="62" cy="32" rx="5" ry="5" fill="#4c1d95"/>
    <circle cx="38" cy="32" r="2.5" fill="#7c3aed"/>
    <circle cx="62" cy="32" r="2.5" fill="#6d28d9"/>
    <circle cx="38" cy="32" r="1" fill="#ddd6fe"/>
    <circle cx="62" cy="32" r="1" fill="#c4b5fd"/>
    <!-- fading mouth -->
    <path d="M36 46 Q50 54 64 46" stroke="#1e1b4b" stroke-width="2" fill="none" opacity="0.7"/>
    <!-- double dodge shimmer — fading copy -->
    <ellipse cx="50" cy="36" rx="26" ry="24" fill="none" stroke="#4c1d95" stroke-width="1" stroke-dasharray="3 5" opacity="0.3"/>
    <ellipse cx="50" cy="36" rx="30" ry="28" fill="none" stroke="#312e81" stroke-width="1" stroke-dasharray="2 6" opacity="0.2"/>
  </svg>`,

  "The Inevitable": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- THE INEVITABLE — all four mechanics, highest floor mob, the end of all things -->
    <!-- reality collapse around it -->
    <circle cx="50" cy="52" r="48" fill="#030712" opacity="0.7"/>
    <circle cx="50" cy="52" r="42" fill="none" stroke="#4c1d95" stroke-width="2" opacity="0.5"/>
    <circle cx="50" cy="52" r="36" fill="none" stroke="#14532d" stroke-width="1.5" opacity="0.4"/>
    <circle cx="50" cy="52" r="30" fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.3"/>
    <!-- massive tentacle foundation -->
    <path d="M50 98 Q18 110 6 124" stroke="#030712" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q30 114 26 124" stroke="#0c0a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q42 116 40 124" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q50 116 50 124" stroke="#14532d" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M50 98 Q58 116 60 124" stroke="#0c0a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q70 114 74 124" stroke="#4c1d95" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M50 98 Q82 110 94 124" stroke="#030712" stroke-width="9" fill="none" stroke-linecap="round"/>
    <!-- enormous body -->
    <ellipse cx="50" cy="72" rx="40" ry="30" fill="#030712"/>
    <!-- reality fractures on body -->
    <path d="M18 64 L14 82 L22 96" stroke="#7c3aed" stroke-width="3" fill="none" opacity="0.9"/>
    <path d="M50 62 L50 86" stroke="#4ade80" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M82 64 L86 82 L78 96" stroke="#a78bfa" stroke-width="3" fill="none" opacity="0.9"/>
    <path d="M32 68 L40 74 L54 68 L66 74 L76 68" stroke="#4c1d95" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- six arms — annihilation incarnate -->
    <path d="M12 68 Q-8 56 -16 42" stroke="#0c0a1a" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M10 84 Q-10 78 -18 64" stroke="#030712" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M14 76 Q-2 86 -8 100" stroke="#14532d" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M88 68 Q108 56 116 42" stroke="#0c0a1a" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M90 84 Q110 78 118 64" stroke="#030712" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M86 76 Q102 86 108 100" stroke="#4c1d95" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- arm tip orbs -->
    <circle cx="-16" cy="40" r="12" fill="#4c1d95" opacity="0.9"/>
    <circle cx="-18" cy="62" r="10" fill="#6d28d9" opacity="0.9"/>
    <circle cx="-8" cy="100" r="8" fill="#4ade80" opacity="0.8"/>
    <circle cx="116" cy="40" r="12" fill="#4c1d95" opacity="0.9"/>
    <circle cx="118" cy="62" r="10" fill="#14532d" opacity="0.8"/>
    <circle cx="108" cy="100" r="8" fill="#7c3aed" opacity="0.8"/>
    <!-- inner arm glow -->
    <circle cx="-16" cy="40" r="6" fill="#a78bfa" opacity="0.7"/>
    <circle cx="116" cy="40" r="6" fill="#4ade80" opacity="0.6"/>
    <!-- THE head — ultimate void entity -->
    <ellipse cx="50" cy="34" rx="36" ry="30" fill="#030712"/>
    <!-- CROWN OF THE INEVITABLE — ultimate -->
    <path d="M14 22 L10 4 L20 18 L28 2 L36 20 L44 2 L50 16 L56 2 L64 20 L72 2 L80 18 L90 4 L86 22"
          fill="none" stroke="#7c3aed" stroke-width="4" stroke-linejoin="round"/>
    <!-- crown apex glow — white-hot -->
    <circle cx="10" cy="4" r="5" fill="#7c3aed" opacity="0.9"/>
    <circle cx="28" cy="2" r="5" fill="#4ade80" opacity="0.9"/>
    <circle cx="44" cy="2" r="6" fill="#a78bfa"/>
    <circle cx="50" cy="16" r="7" fill="#c4b5fd"/>
    <circle cx="50" cy="16" r="4" fill="#ffffff" opacity="0.9"/>
    <circle cx="56" cy="2" r="6" fill="#a78bfa"/>
    <circle cx="72" cy="2" r="5" fill="#4ade80" opacity="0.9"/>
    <circle cx="90" cy="4" r="5" fill="#6d28d9" opacity="0.9"/>
    <!-- many eyes in a ring -->
    <circle cx="26" cy="24" r="8" fill="#0c0a1a"/>
    <circle cx="50" cy="16" r="9" fill="#030712"/>
    <circle cx="74" cy="24" r="8" fill="#0c0a1a"/>
    <circle cx="18" cy="36" r="6" fill="#030712"/>
    <circle cx="82" cy="36" r="6" fill="#0c0a1a"/>
    <circle cx="34" cy="44" r="5" fill="#030712"/>
    <circle cx="66" cy="44" r="5" fill="#0c0a1a"/>
    <!-- eye inner glow -->
    <circle cx="26" cy="24" r="5" fill="#7c3aed"/>
    <circle cx="74" cy="24" r="5" fill="#4ade80" opacity="0.9"/>
    <circle cx="18" cy="36" r="3.5" fill="#6d28d9"/>
    <circle cx="82" cy="36" r="3.5" fill="#14532d" opacity="0.8"/>
    <circle cx="34" cy="44" r="3" fill="#a78bfa"/>
    <circle cx="66" cy="44" r="3" fill="#4ade80" opacity="0.8"/>
    <circle cx="26" cy="24" r="2.5" fill="#e0e7ff"/>
    <circle cx="74" cy="24" r="2.5" fill="#d1fae5"/>
    <!-- the inevitable maw — consuming everything -->
    <path d="M16 50 Q50 70 84 50 Q70 66 50 68 Q30 66 16 50 Z" fill="#030712"/>
    <path d="M20 54 Q14 64 10 72" stroke="#4c1d95" stroke-width="2.5" fill="none" opacity="0.6"/>
    <path d="M80 54 Q86 64 90 72" stroke="#14532d" stroke-width="2.5" fill="none" opacity="0.6"/>
    <circle cx="50" cy="68" r="6" fill="#4ade80" opacity="0.9"/>
    <circle cx="50" cy="68" r="3" fill="#86efac"/>
    <!-- ALL FOUR MECHANICS shimmer — stacked -->
    <ellipse cx="50" cy="34" rx="40" ry="34" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="6 4" opacity="0.5"/>
    <ellipse cx="50" cy="34" rx="44" ry="38" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4 6" opacity="0.4"/>
    <ellipse cx="50" cy="34" rx="48" ry="42" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3 7" opacity="0.3"/>
  </svg>`,

  // ── Lv7 Boss Lair — Dark Lord (3 phases) ─────────────────────
  "Overlord Phase 1": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ol1eye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f0abfc"/>
        <stop offset="55%" stop-color="#a855f7"/>
        <stop offset="100%" stop-color="#6b21a8" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="ol1sword" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#c084fc"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </linearGradient>
    </defs>
    <!-- ground shadow -->
    <ellipse cx="50" cy="109" rx="28" ry="4" fill="#000" opacity="0.5"/>
    <!-- cape -->
    <path d="M17 57 Q6 84 14 110 L86 110 Q94 84 83 57 Q67 67 50 65 Q33 67 17 57Z" fill="#09090b"/>
    <path d="M20 62 Q13 88 18 110" stroke="#1e1b4b" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M80 62 Q87 88 82 110" stroke="#1e1b4b" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- body armor -->
    <path d="M31 53 Q50 48 69 53 L67 89 Q50 94 33 89Z" fill="#1e1b4b"/>
    <!-- chest plate -->
    <path d="M36 56 Q50 52 64 56 L62 73 Q50 77 38 73Z" fill="#16213e"/>
    <path d="M36 56 Q50 52 64 56" stroke="#4c1d95" stroke-width="0.8" fill="none"/>
    <line x1="50" y1="56" x2="50" y2="89" stroke="#312e81" stroke-width="0.9"/>
    <path d="M36 69 Q50 72 64 69" stroke="#312e81" stroke-width="0.7" fill="none"/>
    <path d="M36 79 Q50 82 64 79" stroke="#312e81" stroke-width="0.7" fill="none"/>
    <!-- chest gem -->
    <polygon points="50,60 55,67 50,74 45,67" fill="#7c3aed"/>
    <polygon points="50,62 54,67 50,72 46,67" fill="#c084fc"/>
    <circle cx="50" cy="67" r="1.8" fill="#f0abfc" opacity="0.9"/>
    <!-- left pauldron -->
    <ellipse cx="26" cy="56" rx="11" ry="8" fill="#1e1b4b"/>
    <polygon points="19,51 22,43 26,51" fill="#09090b"/>
    <polygon points="14,57 17,49 21,57" fill="#09090b"/>
    <!-- right pauldron -->
    <ellipse cx="74" cy="56" rx="11" ry="8" fill="#1e1b4b"/>
    <polygon points="74,51 78,43 81,51" fill="#09090b"/>
    <polygon points="79,57 83,49 86,57" fill="#09090b"/>
    <!-- left arm -->
    <path d="M19 61 Q12 75 14 90" stroke="#1e1b4b" stroke-width="9" stroke-linecap="round" fill="none"/>
    <ellipse cx="14" cy="91" rx="7" ry="5" fill="#1e1b4b"/>
    <!-- orb -->
    <circle cx="11" cy="97" r="7" fill="#0f0c29"/>
    <circle cx="11" cy="97" r="4" fill="#1e1b4b"/>
    <circle cx="11" cy="97" r="2" fill="#7c3aed"/>
    <circle cx="11" cy="95" r="1" fill="#f0abfc" opacity="0.7"/>
    <!-- right arm -->
    <path d="M81 61 Q88 75 86 88" stroke="#1e1b4b" stroke-width="9" stroke-linecap="round" fill="none"/>
    <ellipse cx="86" cy="89" rx="7" ry="5" fill="#1e1b4b"/>
    <!-- dark sword -->
    <rect x="90" y="50" width="4" height="40" fill="#09090b" rx="1"/>
    <rect x="90" y="50" width="4" height="40" fill="url(#ol1sword)" opacity="0.55" rx="1"/>
    <rect x="84" y="64" width="16" height="3" fill="#312e81" rx="1"/>
    <rect x="90" y="46" width="4" height="6" fill="#1e1b4b" rx="1"/>
    <line x1="92" y1="52" x2="92" y2="87" stroke="#c084fc" stroke-width="0.6" opacity="0.55"/>
    <circle cx="92" cy="69" r="2" fill="#7c3aed" opacity="0.7"/>
    <!-- neck -->
    <rect x="42" y="46" width="16" height="8" fill="#1e1b4b" rx="3"/>
    <!-- helmet -->
    <ellipse cx="50" cy="30" rx="20" ry="17" fill="#1e1b4b"/>
    <path d="M32 31 Q50 27 68 31 L68 41 Q50 45 32 41Z" fill="#09090b"/>
    <path d="M33 26 Q50 21 67 26" stroke="#312e81" stroke-width="1.2" fill="none"/>
    <!-- horns -->
    <path d="M30 22 Q26 10 24 3 L28 6 Q29 14 33 20" fill="#09090b"/>
    <path d="M70 22 Q74 10 76 3 L72 6 Q71 14 67 20" fill="#09090b"/>
    <line x1="26" y1="4" x2="30" y2="17" stroke="#4c1d95" stroke-width="0.6" opacity="0.5"/>
    <line x1="74" y1="4" x2="70" y2="17" stroke="#4c1d95" stroke-width="0.6" opacity="0.5"/>
    <!-- crown spikes -->
    <polygon points="44,14 47,8 50,14" fill="#09090b"/>
    <polygon points="50,13 53,7 56,13" fill="#09090b"/>
    <polygon points="37,19 39,12 42,19" fill="#09090b"/>
    <polygon points="58,19 61,12 64,19" fill="#09090b"/>
    <circle cx="50" cy="10" r="2" fill="#9333ea" opacity="0.85"/>
    <!-- eyes -->
    <ellipse cx="41" cy="34" rx="6" ry="4.5" fill="url(#ol1eye)"/>
    <ellipse cx="59" cy="34" rx="6" ry="4.5" fill="url(#ol1eye)"/>
    <ellipse cx="41" cy="34" rx="2.5" ry="2" fill="#f0abfc"/>
    <ellipse cx="59" cy="34" rx="2.5" ry="2" fill="#f0abfc"/>
    <!-- legs -->
    <rect x="37" y="89" width="11" height="18" fill="#1e1b4b" rx="3"/>
    <rect x="52" y="89" width="11" height="18" fill="#1e1b4b" rx="3"/>
    <line x1="42" y1="92" x2="42" y2="104" stroke="#312e81" stroke-width="0.8"/>
    <line x1="57" y1="92" x2="57" y2="104" stroke="#312e81" stroke-width="0.8"/>
    <ellipse cx="42" cy="107" rx="8" ry="4" fill="#09090b"/>
    <ellipse cx="57" cy="107" rx="8" ry="4" fill="#09090b"/>
  </svg>`,

  "Overlord Phase 2": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ol2eye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff"/>
        <stop offset="40%" stop-color="#e879f9"/>
        <stop offset="100%" stop-color="#86198f" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="ol2sword" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#e879f9"/>
        <stop offset="100%" stop-color="#3b0764"/>
      </linearGradient>
      <radialGradient id="ol2aura" cx="50%" cy="60%" r="50%">
        <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <!-- aura glow bg -->
    <ellipse cx="50" cy="65" rx="47" ry="42" fill="url(#ol2aura)"/>
    <!-- aura rings -->
    <ellipse cx="50" cy="65" rx="42" ry="34" fill="none" stroke="#7c3aed" stroke-width="1.2" opacity="0.35" stroke-dasharray="4 3"/>
    <ellipse cx="50" cy="65" rx="48" ry="40" fill="none" stroke="#4c1d95" stroke-width="0.8" opacity="0.2" stroke-dasharray="6 4"/>
    <!-- ground shadow -->
    <ellipse cx="50" cy="109" rx="28" ry="4" fill="#000" opacity="0.5"/>
    <!-- cape -->
    <path d="M17 57 Q6 84 14 110 L86 110 Q94 84 83 57 Q67 67 50 65 Q33 67 17 57Z" fill="#09090b"/>
    <!-- body armor with cracks -->
    <path d="M31 53 Q50 48 69 53 L67 89 Q50 94 33 89Z" fill="#1e1b4b"/>
    <!-- armor energy cracks -->
    <path d="M44 56 L40 64 L46 67 L42 76" stroke="#c084fc" stroke-width="1.2" fill="none" opacity="0.8"/>
    <path d="M58 58 L62 66 L57 70 L61 80" stroke="#c084fc" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M48 75 L44 82 L52 85" stroke="#a855f7" stroke-width="0.9" fill="none" opacity="0.6"/>
    <!-- chest plate -->
    <path d="M36 56 Q50 52 64 56 L62 73 Q50 77 38 73Z" fill="#16213e"/>
    <path d="M36 56 Q50 52 64 56" stroke="#7c3aed" stroke-width="1" fill="none"/>
    <line x1="50" y1="56" x2="50" y2="89" stroke="#4c1d95" stroke-width="0.9"/>
    <!-- chest gem — now pulsing bright -->
    <polygon points="50,60 55,67 50,74 45,67" fill="#9333ea"/>
    <polygon points="50,62 54,67 50,72 46,67" fill="#e879f9"/>
    <circle cx="50" cy="67" r="2" fill="#fff" opacity="0.95"/>
    <circle cx="50" cy="67" r="5" fill="#c084fc" opacity="0.2"/>
    <!-- pauldrons -->
    <ellipse cx="26" cy="56" rx="11" ry="8" fill="#1e1b4b"/>
    <polygon points="19,51 22,43 26,51" fill="#09090b"/>
    <polygon points="14,57 17,49 21,57" fill="#09090b"/>
    <ellipse cx="74" cy="56" rx="11" ry="8" fill="#1e1b4b"/>
    <polygon points="74,51 78,43 81,51" fill="#09090b"/>
    <polygon points="79,57 83,49 86,57" fill="#09090b"/>
    <!-- energy wisps from shoulders -->
    <path d="M22 50 Q16 42 18 36" stroke="#7c3aed" stroke-width="1" fill="none" opacity="0.55" stroke-dasharray="2 2"/>
    <path d="M78 50 Q84 42 82 36" stroke="#7c3aed" stroke-width="1" fill="none" opacity="0.55" stroke-dasharray="2 2"/>
    <!-- left arm -->
    <path d="M19 61 Q12 75 14 90" stroke="#1e1b4b" stroke-width="9" stroke-linecap="round" fill="none"/>
    <ellipse cx="14" cy="91" rx="7" ry="5" fill="#1e1b4b"/>
    <circle cx="11" cy="97" r="7" fill="#0f0c29"/>
    <circle cx="11" cy="97" r="4" fill="#1e1b4b"/>
    <circle cx="11" cy="97" r="3" fill="#9333ea"/>
    <circle cx="11" cy="97" r="3" fill="#e879f9" opacity="0.5"/>
    <circle cx="9" cy="95" r="1.2" fill="#fff" opacity="0.8"/>
    <!-- right arm -->
    <path d="M81 61 Q88 75 86 88" stroke="#1e1b4b" stroke-width="9" stroke-linecap="round" fill="none"/>
    <ellipse cx="86" cy="89" rx="7" ry="5" fill="#1e1b4b"/>
    <!-- sword brighter aura -->
    <rect x="90" y="50" width="4" height="40" fill="#09090b" rx="1"/>
    <rect x="90" y="50" width="4" height="40" fill="url(#ol2sword)" opacity="0.75" rx="1"/>
    <ellipse cx="92" cy="65" rx="5" ry="25" fill="#7c3aed" opacity="0.12"/>
    <rect x="84" y="64" width="16" height="3" fill="#4c1d95" rx="1"/>
    <rect x="90" y="46" width="4" height="6" fill="#1e1b4b" rx="1"/>
    <line x1="92" y1="52" x2="92" y2="87" stroke="#e879f9" stroke-width="0.7" opacity="0.7"/>
    <!-- neck -->
    <rect x="42" y="46" width="16" height="8" fill="#1e1b4b" rx="3"/>
    <!-- helmet -->
    <ellipse cx="50" cy="30" rx="20" ry="17" fill="#1e1b4b"/>
    <path d="M32 31 Q50 27 68 31 L68 41 Q50 45 32 41Z" fill="#09090b"/>
    <!-- helmet cracks -->
    <path d="M38 28 L36 33 L40 35" stroke="#c084fc" stroke-width="0.9" fill="none" opacity="0.7"/>
    <path d="M62 30 L64 36" stroke="#a855f7" stroke-width="0.8" fill="none" opacity="0.6"/>
    <!-- horns with glow -->
    <path d="M30 22 Q26 10 24 3 L28 6 Q29 14 33 20" fill="#09090b"/>
    <path d="M70 22 Q74 10 76 3 L72 6 Q71 14 67 20" fill="#09090b"/>
    <line x1="26" y1="4" x2="30" y2="17" stroke="#9333ea" stroke-width="0.8" opacity="0.7"/>
    <line x1="74" y1="4" x2="70" y2="17" stroke="#9333ea" stroke-width="0.8" opacity="0.7"/>
    <!-- crown -->
    <polygon points="44,14 47,8 50,14" fill="#09090b"/>
    <polygon points="50,13 53,7 56,13" fill="#09090b"/>
    <polygon points="37,19 39,12 42,19" fill="#09090b"/>
    <polygon points="58,19 61,12 64,19" fill="#09090b"/>
    <circle cx="50" cy="10" r="2.5" fill="#e879f9" opacity="0.95"/>
    <circle cx="50" cy="10" r="5" fill="#9333ea" opacity="0.25"/>
    <!-- eyes — intense -->
    <ellipse cx="41" cy="34" rx="7" ry="5.5" fill="url(#ol2eye)"/>
    <ellipse cx="59" cy="34" rx="7" ry="5.5" fill="url(#ol2eye)"/>
    <ellipse cx="41" cy="34" rx="3" ry="2.2" fill="#fff"/>
    <ellipse cx="59" cy="34" rx="3" ry="2.2" fill="#fff"/>
    <!-- eye outer glow -->
    <ellipse cx="41" cy="34" rx="10" ry="7" fill="#9333ea" opacity="0.22"/>
    <ellipse cx="59" cy="34" rx="10" ry="7" fill="#9333ea" opacity="0.22"/>
    <!-- legs -->
    <rect x="37" y="89" width="11" height="18" fill="#1e1b4b" rx="3"/>
    <rect x="52" y="89" width="11" height="18" fill="#1e1b4b" rx="3"/>
    <line x1="42" y1="92" x2="42" y2="104" stroke="#4c1d95" stroke-width="0.8"/>
    <line x1="57" y1="92" x2="57" y2="104" stroke="#4c1d95" stroke-width="0.8"/>
    <ellipse cx="42" cy="107" rx="8" ry="4" fill="#09090b"/>
    <ellipse cx="57" cy="107" rx="8" ry="4" fill="#09090b"/>
    <!-- floating energy motes -->
    <circle cx="22" cy="40" r="1.5" fill="#c084fc" opacity="0.65"/>
    <circle cx="78" cy="44" r="1.5" fill="#c084fc" opacity="0.6"/>
    <circle cx="18" cy="70" r="1" fill="#a855f7" opacity="0.5"/>
    <circle cx="82" cy="72" r="1" fill="#a855f7" opacity="0.5"/>
    <circle cx="30" cy="28" r="1.2" fill="#e879f9" opacity="0.55"/>
    <circle cx="70" cy="26" r="1.2" fill="#e879f9" opacity="0.5"/>
  </svg>`,

  "Overlord Phase 3": `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ol3core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff"/>
        <stop offset="25%" stop-color="#e879f9"/>
        <stop offset="65%" stop-color="#7c3aed"/>
        <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="ol3body" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stop-color="#4c1d95" stop-opacity="0.9"/>
        <stop offset="70%" stop-color="#1e1b4b" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="ol3eye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff"/>
        <stop offset="35%" stop-color="#f0abfc"/>
        <stop offset="100%" stop-color="#9333ea" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <!-- outer aura -->
    <ellipse cx="50" cy="60" rx="48" ry="46" fill="#4c1d95" opacity="0.06"/>
    <ellipse cx="50" cy="60" rx="42" ry="40" fill="#7c3aed" opacity="0.07"/>
    <!-- wispy body mass -->
    <ellipse cx="50" cy="62" rx="28" ry="36" fill="url(#ol3body)"/>
    <!-- extra wispy lobes -->
    <ellipse cx="32" cy="55" rx="12" ry="18" fill="#3b0764" opacity="0.55"/>
    <ellipse cx="68" cy="55" rx="12" ry="18" fill="#3b0764" opacity="0.55"/>
    <ellipse cx="50" cy="85" rx="18" ry="14" fill="#1e1b4b" opacity="0.7"/>
    <!-- chains floating -->
    <path d="M8 50 Q14 44 12 52 Q18 46 16 54 Q22 48 20 56" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M92 48 Q86 42 88 50 Q82 44 84 52 Q78 46 80 54" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- tendrils left -->
    <path d="M30 65 Q16 58 10 48" stroke="#4c1d95" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M28 75 Q12 72 6 62" stroke="#3b0764" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.6"/>
    <path d="M26 85 Q10 86 4 78" stroke="#312e81" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.5"/>
    <!-- tendrils right -->
    <path d="M70 65 Q84 58 90 48" stroke="#4c1d95" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M72 75 Q88 72 94 62" stroke="#3b0764" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.6"/>
    <path d="M74 85 Q90 86 96 78" stroke="#312e81" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.5"/>
    <!-- tendril tips — claws -->
    <circle cx="10" cy="48" r="3" fill="#6d28d9" opacity="0.8"/>
    <circle cx="6"  cy="62" r="2.5" fill="#6d28d9" opacity="0.7"/>
    <circle cx="4"  cy="78" r="2" fill="#5b21b6" opacity="0.6"/>
    <circle cx="90" cy="48" r="3" fill="#6d28d9" opacity="0.8"/>
    <circle cx="94" cy="62" r="2.5" fill="#6d28d9" opacity="0.7"/>
    <circle cx="96" cy="78" r="2" fill="#5b21b6" opacity="0.6"/>
    <!-- upward tendril (crown) -->
    <path d="M42 28 Q36 14 38 6" stroke="#4c1d95" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
    <path d="M50 24 Q50 10 52 3" stroke="#6d28d9" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.55"/>
    <path d="M58 28 Q64 14 62 6" stroke="#4c1d95" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
    <circle cx="38" cy="6"  r="2.5" fill="#9333ea" opacity="0.8"/>
    <circle cx="52" cy="3"  r="2" fill="#a855f7" opacity="0.7"/>
    <circle cx="62" cy="6"  r="2.5" fill="#9333ea" opacity="0.8"/>
    <!-- energy core -->
    <ellipse cx="50" cy="58" rx="16" ry="18" fill="url(#ol3core)" opacity="0.85"/>
    <!-- inner swirl hints -->
    <path d="M40 52 Q50 44 60 52 Q52 60 44 56 Q50 50 56 54" stroke="#c084fc" stroke-width="0.7" fill="none" opacity="0.4"/>
    <!-- face / eyes — large glowing -->
    <ellipse cx="41" cy="50" rx="8" ry="6" fill="url(#ol3eye)"/>
    <ellipse cx="59" cy="50" rx="8" ry="6" fill="url(#ol3eye)"/>
    <!-- eye pupils -->
    <ellipse cx="41" cy="50" rx="3.5" ry="3" fill="#fff" opacity="0.95"/>
    <ellipse cx="59" cy="50" rx="3.5" ry="3" fill="#fff" opacity="0.95"/>
    <!-- eye outer glow -->
    <ellipse cx="41" cy="50" rx="12" ry="9" fill="#9333ea" opacity="0.2"/>
    <ellipse cx="59" cy="50" rx="12" ry="9" fill="#9333ea" opacity="0.2"/>
    <!-- mouth — dark grin  -->
    <path d="M39 62 Q50 70 61 62" stroke="#1e1b4b" stroke-width="2" fill="none" opacity="0.7"/>
    <!-- floating dark energy motes -->
    <circle cx="25" cy="35" r="2" fill="#9333ea" opacity="0.6"/>
    <circle cx="75" cy="38" r="2" fill="#9333ea" opacity="0.55"/>
    <circle cx="18" cy="55" r="1.5" fill="#c084fc" opacity="0.5"/>
    <circle cx="82" cy="58" r="1.5" fill="#c084fc" opacity="0.5"/>
    <circle cx="30" cy="90" r="1.5" fill="#7c3aed" opacity="0.45"/>
    <circle cx="70" cy="92" r="1.5" fill="#7c3aed" opacity="0.45"/>
    <circle cx="50" cy="98" r="1.8" fill="#4c1d95" opacity="0.4"/>
    <!-- bottom wisp/fade -->
    <ellipse cx="50" cy="104" rx="20" ry="8" fill="#1e1b4b" opacity="0.35"/>
  </svg>`,

  // ── Goblin Shaman ──────────────────────────────────────────
  "Goblin Shaman": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="105" rx="22" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <!-- robe -->
    <ellipse cx="50" cy="82" rx="18" ry="22" fill="#4a1d6e"/>
    <polygon points="32,72 50,58 68,72 65,104 35,104" fill="#5b2480"/>
    <!-- staff -->
    <rect x="72" y="40" width="4" height="55" rx="2" fill="#7c4a1e"/>
    <circle cx="74" cy="36" r="7" fill="#a855f7" opacity="0.9"/>
    <circle cx="74" cy="36" r="4" fill="#d8b4fe"/>
    <!-- body -->
    <ellipse cx="50" cy="70" rx="14" ry="16" fill="#2d5a1b"/>
    <!-- head -->
    <ellipse cx="50" cy="44" rx="14" ry="13" fill="#3a7022"/>
    <!-- big ears -->
    <ellipse cx="34" cy="44" rx="6" ry="9" fill="#2d5a1b"/>
    <ellipse cx="66" cy="44" rx="6" ry="9" fill="#2d5a1b"/>
    <!-- eyes -->
    <ellipse cx="44" cy="42" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="56" cy="42" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="44" cy="42" rx="2" ry="2" fill="#a855f7"/>
    <ellipse cx="56" cy="42" rx="2" ry="2" fill="#a855f7"/>
    <!-- hat -->
    <polygon points="36,36 50,8 64,36" fill="#3b0764"/>
    <rect x="33" y="34" width="34" height="5" rx="2" fill="#4c0a80"/>
    <!-- poison cloud -->
    <circle cx="28" cy="65" r="6" fill="#4ade80" opacity="0.3"/>
    <circle cx="22" cy="60" r="4" fill="#4ade80" opacity="0.2"/>
  </svg>`,

  // ── Goblin Brute ──────────────────────────────────────────
  "Goblin Brute": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="26" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs -->
    <rect x="34" y="85" width="13" height="22" rx="5" fill="#2d5a1b"/>
    <rect x="53" y="85" width="13" height="22" rx="5" fill="#2d5a1b"/>
    <!-- body — wide and muscular -->
    <ellipse cx="50" cy="72" rx="24" ry="20" fill="#1f4d12"/>
    <!-- chest scar -->
    <line x1="44" y1="62" x2="56" y2="78" stroke="#4ade80" stroke-width="2" opacity="0.5"/>
    <!-- arms — thick -->
    <ellipse cx="24" cy="72" rx="9" ry="16" fill="#2d5a1b" transform="rotate(-10 24 72)"/>
    <ellipse cx="76" cy="72" rx="9" ry="16" fill="#2d5a1b" transform="rotate(10 76 72)"/>
    <!-- fists -->
    <circle cx="19" cy="86" r="7" fill="#1f4d12"/>
    <circle cx="81" cy="86" r="7" fill="#1f4d12"/>
    <!-- head — large -->
    <ellipse cx="50" cy="44" rx="20" ry="18" fill="#2d5a1b"/>
    <!-- big ears -->
    <ellipse cx="28" cy="42" rx="8" ry="11" fill="#2d5a1b"/>
    <ellipse cx="72" cy="42" rx="8" ry="11" fill="#2d5a1b"/>
    <!-- low brow -->
    <rect x="30" y="30" width="40" height="8" rx="4" fill="#1f4d12"/>
    <!-- eyes -->
    <ellipse cx="41" cy="42" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="59" cy="42" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="41" cy="42" rx="2.5" ry="2.5" fill="#ef4444"/>
    <ellipse cx="59" cy="42" rx="2.5" ry="2.5" fill="#ef4444"/>
    <!-- tusks -->
    <polygon points="44,55 40,64 48,58" fill="#fef9c3"/>
    <polygon points="56,55 60,64 52,58" fill="#fef9c3"/>
  </svg>`,

  // ── Goblin Soldier ──────────────────────────────────────────
  "Goblin Soldier": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="20" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs -->
    <rect x="37" y="86" width="11" height="20" rx="4" fill="#374151"/>
    <rect x="52" y="86" width="11" height="20" rx="4" fill="#374151"/>
    <!-- armored body -->
    <ellipse cx="50" cy="72" rx="18" ry="18" fill="#374151"/>
    <ellipse cx="50" cy="70" rx="14" ry="14" fill="#4b5563"/>
    <!-- chest plate detail -->
    <rect x="40" y="62" width="20" height="14" rx="3" fill="#6b7280" opacity="0.6"/>
    <!-- shield on left arm -->
    <ellipse cx="26" cy="72" rx="9" ry="12" fill="#1e40af"/>
    <ellipse cx="26" cy="72" rx="6" ry="8" fill="#2563eb"/>
    <line x1="26" y1="62" x2="26" y2="82" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="20" y1="72" x2="32" y2="72" stroke="#93c5fd" stroke-width="1.5"/>
    <!-- spear on right -->
    <rect x="72" y="30" width="3" height="65" rx="1" fill="#92400e"/>
    <polygon points="72,30 74,15 76,30" fill="#9ca3af"/>
    <!-- head with helmet -->
    <ellipse cx="50" cy="44" rx="15" ry="14" fill="#2d5a1b"/>
    <ellipse cx="50" cy="36" rx="16" ry="10" fill="#374151"/>
    <rect x="34" y="42" width="32" height="6" rx="2" fill="#4b5563"/>
    <!-- eyes under visor -->
    <ellipse cx="43" cy="46" rx="3" ry="3" fill="#fbbf24"/>
    <ellipse cx="57" cy="46" rx="3" ry="3" fill="#fbbf24"/>
  </svg>`,

  // ── Goblin Archer ──────────────────────────────────────────
  "Goblin Archer": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="18" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs -->
    <rect x="38" y="86" width="10" height="22" rx="4" fill="#3d2b0e"/>
    <rect x="52" y="86" width="10" height="22" rx="4" fill="#3d2b0e"/>
    <!-- body -->
    <ellipse cx="50" cy="72" rx="14" ry="17" fill="#2d5a1b"/>
    <!-- quiver on back -->
    <rect x="64" y="55" width="8" height="24" rx="3" fill="#92400e"/>
    <line x1="66" y1="52" x2="66" y2="58" stroke="#fbbf24" stroke-width="1.5"/>
    <line x1="69" y1="50" x2="69" y2="56" stroke="#fbbf24" stroke-width="1.5"/>
    <line x1="72" y1="52" x2="72" y2="58" stroke="#fbbf24" stroke-width="1.5"/>
    <!-- bow drawn -->
    <path d="M 20 45 Q 10 70 20 95" fill="none" stroke="#92400e" stroke-width="3"/>
    <line x1="20" y1="45" x2="20" y2="95" stroke="#fef9c3" stroke-width="1"/>
    <!-- arrow nocked -->
    <line x1="20" y1="70" x2="58" y2="62" stroke="#92400e" stroke-width="2"/>
    <polygon points="58,62 65,58 60,66" fill="#9ca3af"/>
    <!-- arm pulling -->
    <ellipse cx="36" cy="66" rx="7" ry="5" fill="#3a7022" transform="rotate(-20 36 66)"/>
    <!-- head -->
    <ellipse cx="58" cy="44" rx="13" ry="13" fill="#3a7022"/>
    <!-- hood -->
    <ellipse cx="58" cy="36" rx="14" ry="9" fill="#166534"/>
    <ellipse cx="50" cy="33" rx="6" ry="6" fill="#166534"/>
    <!-- eyes — focused -->
    <ellipse cx="53" cy="44" rx="3" ry="2.5" fill="#1a1a1a"/>
    <ellipse cx="63" cy="44" rx="3" ry="2.5" fill="#1a1a1a"/>
    <ellipse cx="53" cy="44" rx="1.5" ry="1.5" fill="#fbbf24"/>
    <ellipse cx="63" cy="44" rx="1.5" ry="1.5" fill="#fbbf24"/>
  </svg>`,

  // ── Goblin Berserker ──────────────────────────────────────────
  "Goblin Berserker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="20" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs wide stance -->
    <rect x="32" y="84" width="12" height="23" rx="4" fill="#2d5a1b" transform="rotate(-8 38 95)"/>
    <rect x="56" y="84" width="12" height="23" rx="4" fill="#2d5a1b" transform="rotate(8 62 95)"/>
    <!-- body -->
    <ellipse cx="50" cy="70" rx="17" ry="18" fill="#166534"/>
    <!-- rage markings -->
    <line x1="38" y1="62" x2="46" y2="74" stroke="#ef4444" stroke-width="2" opacity="0.7"/>
    <line x1="54" y1="62" x2="62" y2="74" stroke="#ef4444" stroke-width="2" opacity="0.7"/>
    <!-- two axes -->
    <rect x="16" y="52" width="4" height="30" rx="2" fill="#92400e" transform="rotate(-25 18 67)"/>
    <ellipse cx="12" cy="50" rx="7" ry="5" fill="#6b7280" transform="rotate(-25 12 50)"/>
    <rect x="78" y="52" width="4" height="30" rx="2" fill="#92400e" transform="rotate(25 80 67)"/>
    <ellipse cx="88" cy="50" rx="7" ry="5" fill="#6b7280" transform="rotate(25 88 50)"/>
    <!-- head tilted in rage -->
    <ellipse cx="50" cy="43" rx="15" ry="14" fill="#2d5a1b" transform="rotate(8 50 43)"/>
    <!-- spiky hair -->
    <polygon points="38,30 40,18 44,30" fill="#166534"/>
    <polygon points="46,28 48,15 52,28" fill="#166534"/>
    <polygon points="54,30 58,18 60,30" fill="#166534"/>
    <!-- crazy eyes -->
    <ellipse cx="42" cy="41" rx="5" ry="5" fill="#fff"/>
    <ellipse cx="58" cy="41" rx="5" ry="5" fill="#fff"/>
    <ellipse cx="42" cy="42" rx="3" ry="3" fill="#ef4444"/>
    <ellipse cx="58" cy="42" rx="3" ry="3" fill="#ef4444"/>
    <ellipse cx="42" cy="42" rx="1.5" ry="1.5" fill="#1a1a1a"/>
    <ellipse cx="58" cy="42" rx="1.5" ry="1.5" fill="#1a1a1a"/>
    <!-- mouth open screaming -->
    <ellipse cx="50" cy="52" rx="6" ry="4" fill="#1a1a1a"/>
    <rect x="45" y="50" width="10" height="3" fill="#ef4444" opacity="0.5"/>
  </svg>`,

  // ── War Drummer ──────────────────────────────────────────
  "War Drummer": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="22" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs -->
    <rect x="36" y="86" width="12" height="22" rx="4" fill="#3d2b0e"/>
    <rect x="52" y="86" width="12" height="22" rx="4" fill="#3d2b0e"/>
    <!-- drum strapped to body -->
    <ellipse cx="50" cy="80" rx="20" ry="12" fill="#92400e"/>
    <ellipse cx="50" cy="80" rx="16" ry="8" fill="#fef9c3" opacity="0.8"/>
    <!-- drum straps -->
    <line x1="34" y1="68" x2="30" y2="80" stroke="#78350f" stroke-width="2"/>
    <line x1="66" y1="68" x2="70" y2="80" stroke="#78350f" stroke-width="2"/>
    <!-- body -->
    <ellipse cx="50" cy="66" rx="15" ry="14" fill="#2d5a1b"/>
    <!-- drumsticks -->
    <rect x="22" y="55" width="3" height="24" rx="1.5" fill="#d97706" transform="rotate(-35 24 67)"/>
    <circle cx="18" cy="53" r="4" fill="#92400e"/>
    <rect x="72" y="55" width="3" height="24" rx="1.5" fill="#d97706" transform="rotate(35 74 67)"/>
    <circle cx="82" cy="53" r="4" fill="#92400e"/>
    <!-- head -->
    <ellipse cx="50" cy="44" rx="14" ry="13" fill="#3a7022"/>
    <!-- war paint -->
    <rect x="36" y="42" width="10" height="3" rx="1" fill="#ef4444" opacity="0.8"/>
    <rect x="54" y="42" width="10" height="3" rx="1" fill="#ef4444" opacity="0.8"/>
    <!-- eyes -->
    <ellipse cx="43" cy="42" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="57" cy="42" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="43" cy="42" rx="2" ry="2" fill="#fbbf24"/>
    <ellipse cx="57" cy="42" rx="2" ry="2" fill="#fbbf24"/>
    <!-- bone headband -->
    <rect x="34" y="33" width="32" height="5" rx="2" fill="#fef9c3"/>
    <!-- sound waves -->
    <path d="M 10 75 Q 5 70 10 65" fill="none" stroke="#fbbf24" stroke-width="1.5" opacity="0.5"/>
    <path d="M 6 78 Q -1 70 6 62" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.3"/>
  </svg>`,

  // ── Spore Goblin ──────────────────────────────────────────
  "Spore Goblin": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="18" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- spore cloud -->
    <circle cx="30" cy="55" r="8" fill="#4ade80" opacity="0.15"/>
    <circle cx="70" cy="60" r="7" fill="#4ade80" opacity="0.15"/>
    <circle cx="50" cy="30" r="6" fill="#4ade80" opacity="0.1"/>
    <!-- legs -->
    <rect x="38" y="86" width="10" height="22" rx="4" fill="#14532d"/>
    <rect x="52" y="86" width="10" height="22" rx="4" fill="#14532d"/>
    <!-- body with mushroom growth -->
    <ellipse cx="50" cy="72" rx="15" ry="16" fill="#166534"/>
    <!-- mushroom cap on back -->
    <ellipse cx="50" cy="56" rx="22" ry="10" fill="#dc2626" opacity="0.85"/>
    <ellipse cx="50" cy="56" rx="18" ry="6" fill="#ef4444" opacity="0.7"/>
    <!-- white spots on cap -->
    <circle cx="38" cy="54" r="3" fill="#fff" opacity="0.7"/>
    <circle cx="50" cy="52" r="3" fill="#fff" opacity="0.7"/>
    <circle cx="62" cy="54" r="3" fill="#fff" opacity="0.7"/>
    <!-- cap stem to body -->
    <rect x="46" y="56" width="8" height="10" rx="3" fill="#fef9c3" opacity="0.6"/>
    <!-- head -->
    <ellipse cx="50" cy="44" rx="13" ry="12" fill="#2d5a1b"/>
    <!-- fungal growths on head -->
    <ellipse cx="38" cy="36" rx="5" ry="8" fill="#dc2626" opacity="0.7"/>
    <ellipse cx="62" cy="36" rx="4" ry="6" fill="#dc2626" opacity="0.7"/>
    <!-- eyes — glowing green -->
    <ellipse cx="43" cy="44" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="57" cy="44" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="43" cy="44" rx="2" ry="2" fill="#4ade80"/>
    <ellipse cx="57" cy="44" rx="2" ry="2" fill="#4ade80"/>
    <!-- spore particles -->
    <circle cx="20" cy="48" r="2" fill="#4ade80" opacity="0.5"/>
    <circle cx="16" cy="40" r="1.5" fill="#4ade80" opacity="0.4"/>
    <circle cx="80" cy="52" r="2" fill="#4ade80" opacity="0.5"/>
    <circle cx="84" cy="44" r="1.5" fill="#4ade80" opacity="0.4"/>
  </svg>`,

  // ── Mushroom Crawler ──────────────────────────────────────────
  "Mushroom Crawler": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="24" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <!-- 4 crawling legs -->
    <line x1="30" y1="80" x2="14" y2="96" stroke="#14532d" stroke-width="5" stroke-linecap="round"/>
    <line x1="38" y1="82" x2="24" y2="102" stroke="#14532d" stroke-width="5" stroke-linecap="round"/>
    <line x1="62" y1="82" x2="76" y2="102" stroke="#14532d" stroke-width="5" stroke-linecap="round"/>
    <line x1="70" y1="80" x2="86" y2="96" stroke="#14532d" stroke-width="5" stroke-linecap="round"/>
    <!-- body low to ground -->
    <ellipse cx="50" cy="76" rx="26" ry="14" fill="#166534"/>
    <!-- large mushroom cap covering body -->
    <ellipse cx="50" cy="60" rx="32" ry="16" fill="#b91c1c"/>
    <ellipse cx="50" cy="57" rx="28" ry="11" fill="#dc2626" opacity="0.8"/>
    <!-- white spots -->
    <circle cx="32" cy="57" r="4" fill="#fff" opacity="0.7"/>
    <circle cx="50" cy="53" r="4" fill="#fff" opacity="0.7"/>
    <circle cx="68" cy="57" r="4" fill="#fff" opacity="0.7"/>
    <circle cx="40" cy="62" r="2.5" fill="#fff" opacity="0.5"/>
    <circle cx="60" cy="62" r="2.5" fill="#fff" opacity="0.5"/>
    <!-- head emerging from under cap -->
    <ellipse cx="50" cy="66" rx="12" ry="11" fill="#2d5a1b"/>
    <!-- beady eyes -->
    <ellipse cx="44" cy="65" rx="3" ry="3" fill="#1a1a1a"/>
    <ellipse cx="56" cy="65" rx="3" ry="3" fill="#1a1a1a"/>
    <ellipse cx="44" cy="65" rx="1.5" ry="1.5" fill="#fbbf24"/>
    <ellipse cx="56" cy="65" rx="1.5" ry="1.5" fill="#fbbf24"/>
    <!-- gill vents -->
    <line x1="22" y1="62" x2="28" y2="68" stroke="#166534" stroke-width="1.5" opacity="0.6"/>
    <line x1="72" y1="62" x2="78" y2="68" stroke="#166534" stroke-width="1.5" opacity="0.6"/>
  </svg>`,

  // ── Fungal Shaman ──────────────────────────────────────────
  "Fungal Shaman": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="20" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- toxic pool under feet -->
    <ellipse cx="50" cy="106" rx="18" ry="5" fill="#4ade80" opacity="0.2"/>
    <!-- robes — fungal green -->
    <polygon points="32,72 50,58 68,72 65,106 35,106" fill="#14532d"/>
    <polygon points="36,75 50,63 64,75 62,106 38,106" fill="#166534"/>
    <!-- glowing staff with mushroom top -->
    <rect x="70" y="44" width="4" height="56" rx="2" fill="#3d2b0e"/>
    <ellipse cx="72" cy="38" rx="10" ry="6" fill="#dc2626" opacity="0.9"/>
    <circle cx="72" cy="36" r="4" fill="#4ade80" opacity="0.8"/>
    <!-- body -->
    <ellipse cx="50" cy="72" rx="14" ry="14" fill="#14532d"/>
    <!-- fungal patches on robe -->
    <circle cx="40" cy="78" r="5" fill="#dc2626" opacity="0.4"/>
    <circle cx="58" cy="82" r="4" fill="#dc2626" opacity="0.3"/>
    <!-- head -->
    <ellipse cx="50" cy="46" rx="14" ry="13" fill="#2d5a1b"/>
    <!-- large mushroom hood -->
    <ellipse cx="50" cy="36" rx="20" ry="11" fill="#b91c1c"/>
    <ellipse cx="50" cy="33" rx="16" ry="7" fill="#dc2626" opacity="0.7"/>
    <circle cx="40" cy="33" r="3" fill="#fff" opacity="0.6"/>
    <circle cx="52" cy="30" r="3" fill="#fff" opacity="0.6"/>
    <circle cx="62" cy="33" r="3" fill="#fff" opacity="0.6"/>
    <!-- eyes glowing -->
    <ellipse cx="43" cy="46" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="57" cy="46" rx="4" ry="4" fill="#1a1a1a"/>
    <ellipse cx="43" cy="46" rx="2.5" ry="2.5" fill="#4ade80"/>
    <ellipse cx="57" cy="46" rx="2.5" ry="2.5" fill="#4ade80"/>
    <!-- floating spores -->
    <circle cx="18" cy="42" r="2" fill="#4ade80" opacity="0.6"/>
    <circle cx="14" cy="36" r="1.5" fill="#4ade80" opacity="0.4"/>
    <circle cx="22" cy="32" r="1" fill="#4ade80" opacity="0.3"/>
  </svg>`,

  // ── Myconid Guard ──────────────────────────────────────────
  "Myconid Guard": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="22" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <!-- sturdy legs -->
    <rect x="34" y="84" width="14" height="24" rx="5" fill="#166534"/>
    <rect x="52" y="84" width="14" height="24" rx="5" fill="#166534"/>
    <!-- armored body — fungal chitin -->
    <ellipse cx="50" cy="72" rx="22" ry="20" fill="#14532d"/>
    <ellipse cx="50" cy="70" rx="18" ry="16" fill="#166534"/>
    <!-- chitin plates -->
    <ellipse cx="50" cy="66" rx="12" ry="8" fill="#4ade80" opacity="0.15"/>
    <line x1="38" y1="62" x2="62" y2="62" stroke="#4ade80" stroke-width="1" opacity="0.3"/>
    <line x1="36" y1="68" x2="64" y2="68" stroke="#4ade80" stroke-width="1" opacity="0.3"/>
    <!-- club arm -->
    <ellipse cx="22" cy="72" rx="8" ry="15" fill="#166534"/>
    <ellipse cx="20" cy="88" rx="10" ry="8" fill="#1f4d12"/>
    <!-- shield — cap shard -->
    <ellipse cx="78" cy="68" rx="12" ry="16" fill="#b91c1c" opacity="0.85"/>
    <ellipse cx="78" cy="68" rx="8" ry="11" fill="#dc2626" opacity="0.7"/>
    <circle cx="74" cy="64" r="2" fill="#fff" opacity="0.6"/>
    <circle cx="82" cy="64" r="2" fill="#fff" opacity="0.6"/>
    <!-- head — wide cap -->
    <ellipse cx="50" cy="44" rx="16" ry="14" fill="#2d5a1b"/>
    <ellipse cx="50" cy="32" rx="24" ry="12" fill="#b91c1c"/>
    <ellipse cx="50" cy="30" rx="20" ry="8" fill="#dc2626" opacity="0.7"/>
    <circle cx="36" cy="30" r="3.5" fill="#fff" opacity="0.6"/>
    <circle cx="50" cy="26" r="3.5" fill="#fff" opacity="0.6"/>
    <circle cx="64" cy="30" r="3.5" fill="#fff" opacity="0.6"/>
    <!-- eyes -->
    <ellipse cx="42" cy="44" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="58" cy="44" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="42" cy="44" rx="2.5" ry="2.5" fill="#4ade80"/>
    <ellipse cx="58" cy="44" rx="2.5" ry="2.5" fill="#4ade80"/>
  </svg>`,

  // ── Junk Goblin ──────────────────────────────────────────
  "Junk Goblin": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="18" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs -->
    <rect x="38" y="86" width="10" height="22" rx="4" fill="#2d5a1b"/>
    <rect x="52" y="86" width="10" height="22" rx="4" fill="#2d5a1b"/>
    <!-- body covered in junk -->
    <ellipse cx="50" cy="72" rx="16" ry="16" fill="#3a7022"/>
    <!-- junk pieces -->
    <rect x="34" y="66" width="8" height="6" rx="1" fill="#6b7280" opacity="0.8" transform="rotate(-15 38 69)"/>
    <rect x="56" y="64" width="6" height="8" rx="1" fill="#9ca3af" opacity="0.7" transform="rotate(20 59 68)"/>
    <circle cx="50" cy="64" r="4" fill="#d97706" opacity="0.6"/>
    <rect x="40" y="75" width="12" height="4" rx="1" fill="#4b5563" opacity="0.7"/>
    <!-- weapon: bent pipe -->
    <rect x="18" y="50" width="5" height="32" rx="2" fill="#4b5563" transform="rotate(-20 20 66)"/>
    <rect x="10" y="48" width="14" height="5" rx="2" fill="#6b7280" transform="rotate(-20 17 50)"/>
    <!-- head -->
    <ellipse cx="50" cy="44" rx="13" ry="12" fill="#3a7022"/>
    <!-- makeshift helmet from junk -->
    <rect x="36" y="30" width="28" height="16" rx="4" fill="#4b5563" opacity="0.9"/>
    <circle cx="50" cy="30" r="4" fill="#6b7280"/>
    <rect x="38" y="42" width="24" height="4" rx="2" fill="#374151"/>
    <!-- eyes -->
    <ellipse cx="43" cy="44" rx="3.5" ry="3.5" fill="#1a1a1a"/>
    <ellipse cx="57" cy="44" rx="3.5" ry="3.5" fill="#1a1a1a"/>
    <ellipse cx="43" cy="44" rx="2" ry="2" fill="#fbbf24"/>
    <ellipse cx="57" cy="44" rx="2" ry="2" fill="#fbbf24"/>
  </svg>`,

  // ── Iron Scavenger ──────────────────────────────────────────
  "Iron Scavenger": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="20" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs -->
    <rect x="36" y="86" width="12" height="22" rx="4" fill="#374151"/>
    <rect x="52" y="86" width="12" height="22" rx="4" fill="#374151"/>
    <!-- body in scavenged iron armor -->
    <ellipse cx="50" cy="72" rx="18" ry="17" fill="#374151"/>
    <!-- mismatched armor plates -->
    <rect x="36" y="62" width="12" height="18" rx="2" fill="#4b5563"/>
    <rect x="50" y="64" width="14" height="16" rx="2" fill="#6b7280"/>
    <ellipse cx="36" cy="72" rx="5" ry="7" fill="#4b5563"/>
    <!-- chains -->
    <path d="M 32 66 Q 28 70 32 74" fill="none" stroke="#9ca3af" stroke-width="2" opacity="0.6"/>
    <path d="M 68 66 Q 72 70 68 74" fill="none" stroke="#9ca3af" stroke-width="2" opacity="0.6"/>
    <!-- jagged sword -->
    <rect x="72" y="44" width="5" height="36" rx="2" fill="#4b5563" transform="rotate(10 74 62)"/>
    <polygon points="72,44 78,44 75,30" fill="#6b7280" transform="rotate(10 74 62)"/>
    <!-- head in scrap helmet -->
    <ellipse cx="50" cy="44" rx="15" ry="14" fill="#2d5a1b"/>
    <ellipse cx="50" cy="34" rx="16" ry="11" fill="#374151"/>
    <!-- welded visor -->
    <rect x="34" y="40" width="32" height="8" rx="2" fill="#1f2937"/>
    <line x1="36" y1="44" x2="64" y2="44" stroke="#fbbf24" stroke-width="1" opacity="0.4"/>
    <!-- eyes through visor slits -->
    <ellipse cx="41" cy="44" rx="3" ry="1.5" fill="#fbbf24" opacity="0.8"/>
    <ellipse cx="59" cy="44" rx="3" ry="1.5" fill="#fbbf24" opacity="0.8"/>
  </svg>`,

  // ── Scrap Golem ──────────────────────────────────────────
  "Scrap Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="28" ry="6" fill="#1a1a1a" opacity="0.5"/>
    <!-- legs — chunky metal blocks -->
    <rect x="30" y="82" width="18" height="26" rx="3" fill="#374151"/>
    <rect x="52" y="82" width="18" height="26" rx="3" fill="#4b5563"/>
    <!-- nuts and bolts on legs -->
    <circle cx="39" cy="88" r="2.5" fill="#6b7280"/>
    <circle cx="61" cy="88" r="2.5" fill="#6b7280"/>
    <!-- massive body -->
    <rect x="22" y="50" width="56" height="36" rx="6" fill="#374151"/>
    <rect x="26" y="54" width="48" height="28" rx="4" fill="#4b5563"/>
    <!-- chest furnace glow -->
    <ellipse cx="50" cy="68" rx="14" ry="10" fill="#1f2937"/>
    <ellipse cx="50" cy="68" rx="10" ry="7" fill="#dc2626" opacity="0.5"/>
    <ellipse cx="50" cy="68" rx="6" ry="4" fill="#fbbf24" opacity="0.6"/>
    <!-- bolts on body -->
    <circle cx="30" cy="58" r="3" fill="#6b7280"/>
    <circle cx="70" cy="58" r="3" fill="#6b7280"/>
    <circle cx="30" cy="78" r="3" fill="#6b7280"/>
    <circle cx="70" cy="78" r="3" fill="#6b7280"/>
    <!-- arms — wrecking ball + claw -->
    <rect x="6" y="56" width="16" height="14" rx="4" fill="#374151"/>
    <circle cx="8" cy="74" r="10" fill="#1f2937"/>
    <circle cx="8" cy="74" r="7" fill="#374151"/>
    <rect x="78" y="56" width="16" height="14" rx="4" fill="#374151"/>
    <!-- claw fingers -->
    <line x1="88" y1="70" x2="94" y2="80" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/>
    <line x1="90" y1="72" x2="96" y2="78" stroke="#4b5563" stroke-width="4" stroke-linecap="round"/>
    <line x1="86" y1="74" x2="90" y2="84" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/>
    <!-- head — barrel -->
    <rect x="32" y="24" width="36" height="30" rx="6" fill="#374151"/>
    <rect x="36" y="28" width="28" height="22" rx="4" fill="#4b5563"/>
    <!-- eye slits — red glow -->
    <rect x="38" y="34" width="10" height="4" rx="2" fill="#dc2626" opacity="0.9"/>
    <rect x="52" y="34" width="10" height="4" rx="2" fill="#dc2626" opacity="0.9"/>
    <!-- steam vents on head -->
    <rect x="40" y="20" width="4" height="8" rx="2" fill="#4b5563"/>
    <rect x="56" y="20" width="4" height="8" rx="2" fill="#4b5563"/>
    <ellipse cx="42" cy="18" rx="5" ry="3" fill="#9ca3af" opacity="0.3"/>
    <ellipse cx="58" cy="18" rx="5" ry="3" fill="#9ca3af" opacity="0.3"/>
  </svg>`,

  // ── Rust Knight ──────────────────────────────────────────
  "Rust Knight": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="22" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <!-- legs in rusted armor -->
    <rect x="33" y="84" width="14" height="24" rx="4" fill="#78350f"/>
    <rect x="53" y="84" width="14" height="24" rx="4" fill="#92400e"/>
    <!-- knee guards -->
    <ellipse cx="40" cy="86" rx="7" ry="4" fill="#6b7280"/>
    <ellipse cx="60" cy="86" rx="7" ry="4" fill="#6b7280"/>
    <!-- body in rusted plate -->
    <ellipse cx="50" cy="70" rx="20" ry="20" fill="#78350f"/>
    <ellipse cx="50" cy="68" rx="16" ry="16" fill="#92400e"/>
    <!-- rust texture -->
    <circle cx="40" cy="64" r="3" fill="#b45309" opacity="0.5"/>
    <circle cx="58" cy="70" r="2.5" fill="#b45309" opacity="0.4"/>
    <circle cx="44" cy="76" r="2" fill="#b45309" opacity="0.4"/>
    <!-- sword — worn -->
    <rect x="70" y="36" width="5" height="48" rx="2" fill="#4b5563"/>
    <rect x="64" y="56" width="16" height="4" rx="2" fill="#6b7280"/>
    <polygon points="70,36 75,36 72.5,20" fill="#9ca3af"/>
    <!-- shield — cracked -->
    <ellipse cx="24" cy="68" rx="12" ry="16" fill="#78350f"/>
    <ellipse cx="24" cy="68" rx="9" ry="12" fill="#92400e"/>
    <line x1="18" y1="56" x2="30" y2="80" stroke="#4b5563" stroke-width="2" opacity="0.7"/>
    <!-- head in rusted helm -->
    <ellipse cx="50" cy="44" rx="17" ry="16" fill="#78350f"/>
    <ellipse cx="50" cy="42" rx="13" ry="12" fill="#92400e"/>
    <!-- T visor -->
    <rect x="36" y="40" width="28" height="6" rx="2" fill="#1f2937"/>
    <rect x="46" y="38" width="8" height="10" rx="1" fill="#1f2937"/>
    <!-- glowing eyes through visor -->
    <ellipse cx="43" cy="43" rx="3" ry="2" fill="#dc2626" opacity="0.8"/>
    <ellipse cx="57" cy="43" rx="3" ry="2" fill="#dc2626" opacity="0.8"/>
    <!-- plume on helm -->
    <path d="M 44 28 Q 50 18 56 28" fill="none" stroke="#dc2626" stroke-width="3" opacity="0.7"/>
  </svg>`,

  // ── River Troll ──────────────────────────────────────────
  "River Troll": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="28" ry="6" fill="#1a1a1a" opacity="0.4"/>
    <!-- water drips -->
    <ellipse cx="32" cy="90" rx="2" ry="4" fill="#38bdf8" opacity="0.4"/>
    <ellipse cx="68" cy="86" rx="2" ry="4" fill="#38bdf8" opacity="0.4"/>
    <ellipse cx="50" cy="70" rx="1.5" ry="3" fill="#38bdf8" opacity="0.3"/>
    <!-- legs — massive -->
    <rect x="28" y="82" width="18" height="28" rx="6" fill="#0e4d2e"/>
    <rect x="54" y="82" width="18" height="28" rx="6" fill="#0e4d2e"/>
    <!-- huge body -->
    <ellipse cx="50" cy="68" rx="28" ry="24" fill="#0e4d2e"/>
    <ellipse cx="50" cy="66" rx="22" ry="18" fill="#166534"/>
    <!-- algae patches -->
    <ellipse cx="36" cy="64" rx="8" ry="5" fill="#4ade80" opacity="0.25"/>
    <ellipse cx="62" cy="70" rx="7" ry="5" fill="#4ade80" opacity="0.2"/>
    <!-- arms — thick -->
    <ellipse cx="18" cy="68" rx="10" ry="18" fill="#0e4d2e"/>
    <ellipse cx="82" cy="68" rx="10" ry="18" fill="#0e4d2e"/>
    <!-- clawed hands -->
    <line x1="12" y1="84" x2="8" y2="92" stroke="#0e4d2e" stroke-width="5" stroke-linecap="round"/>
    <line x1="16" y1="86" x2="12" y2="95" stroke="#0e4d2e" stroke-width="5" stroke-linecap="round"/>
    <line x1="20" y1="86" x2="18" y2="96" stroke="#0e4d2e" stroke-width="5" stroke-linecap="round"/>
    <line x1="88" y1="84" x2="92" y2="92" stroke="#0e4d2e" stroke-width="5" stroke-linecap="round"/>
    <line x1="84" y1="86" x2="88" y2="95" stroke="#0e4d2e" stroke-width="5" stroke-linecap="round"/>
    <line x1="80" y1="86" x2="82" y2="96" stroke="#0e4d2e" stroke-width="5" stroke-linecap="round"/>
    <!-- head — flat and wide -->
    <ellipse cx="50" cy="40" rx="24" ry="18" fill="#0e4d2e"/>
    <ellipse cx="50" cy="40" rx="20" ry="15" fill="#166534"/>
    <!-- flat nose -->
    <ellipse cx="50" cy="44" rx="7" ry="5" fill="#0e4d2e"/>
    <circle cx="46" cy="44" r="2.5" fill="#0a3d22"/>
    <circle cx="54" cy="44" r="2.5" fill="#0a3d22"/>
    <!-- small eyes high up -->
    <ellipse cx="38" cy="34" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="62" cy="34" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="38" cy="34" rx="2.5" ry="2.5" fill="#fbbf24"/>
    <ellipse cx="62" cy="34" rx="2.5" ry="2.5" fill="#fbbf24"/>
    <!-- wide mouth with teeth -->
    <path d="M 32 50 Q 50 58 68 50" fill="#0a3d22"/>
    <line x1="38" y1="50" x2="38" y2="56" stroke="#fef9c3" stroke-width="2"/>
    <line x1="44" y1="52" x2="44" y2="57" stroke="#fef9c3" stroke-width="2"/>
    <line x1="50" y1="53" x2="50" y2="58" stroke="#fef9c3" stroke-width="2"/>
    <line x1="56" y1="52" x2="56" y2="57" stroke="#fef9c3" stroke-width="2"/>
    <line x1="62" y1="50" x2="62" y2="56" stroke="#fef9c3" stroke-width="2"/>
  </svg>`,

  // ── Bridge Troll ──────────────────────────────────────────
  "Bridge Troll": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="30" ry="6" fill="#1a1a1a" opacity="0.5"/>
    <!-- legs — like stone pillars -->
    <rect x="26" y="80" width="20" height="30" rx="6" fill="#374151"/>
    <rect x="54" y="80" width="20" height="30" rx="6" fill="#4b5563"/>
    <!-- crack lines on legs -->
    <line x1="32" y1="84" x2="36" y2="100" stroke="#6b7280" stroke-width="1" opacity="0.4"/>
    <line x1="62" y1="84" x2="66" y2="100" stroke="#6b7280" stroke-width="1" opacity="0.4"/>
    <!-- enormous body -->
    <ellipse cx="50" cy="64" rx="30" ry="26" fill="#374151"/>
    <ellipse cx="50" cy="62" rx="25" ry="21" fill="#4b5563"/>
    <!-- stone growths on shoulders -->
    <polygon points="20,50 14,36 28,46" fill="#6b7280"/>
    <polygon points="80,50 86,36 72,46" fill="#6b7280"/>
    <!-- arms — huge slabs -->
    <rect x="4" y="56" width="20" height="30" rx="8" fill="#374151"/>
    <rect x="76" y="56" width="20" height="30" rx="8" fill="#374151"/>
    <!-- stone club in right hand -->
    <rect x="84" y="76" width="10" height="28" rx="4" fill="#4b5563"/>
    <ellipse cx="89" cy="76" rx="10" ry="6" fill="#6b7280"/>
    <!-- head — like a boulder -->
    <ellipse cx="50" cy="36" rx="26" ry="22" fill="#374151"/>
    <ellipse cx="50" cy="36" rx="21" ry="18" fill="#4b5563"/>
    <!-- stone brow ridge -->
    <ellipse cx="50" cy="26" rx="22" ry="8" fill="#374151"/>
    <!-- deep sunken eyes -->
    <ellipse cx="38" cy="34" rx="7" ry="6" fill="#1f2937"/>
    <ellipse cx="62" cy="34" rx="7" ry="6" fill="#1f2937"/>
    <ellipse cx="38" cy="35" rx="4" ry="4" fill="#fbbf24" opacity="0.7"/>
    <ellipse cx="62" cy="35" rx="4" ry="4" fill="#fbbf24" opacity="0.7"/>
    <!-- wide sneer mouth -->
    <path d="M 30 46 Q 50 56 70 46" fill="#1f2937"/>
    <line x1="36" y1="47" x2="38" y2="53" stroke="#9ca3af" stroke-width="2.5"/>
    <line x1="50" y1="49" x2="50" y2="55" stroke="#9ca3af" stroke-width="2.5"/>
    <line x1="64" y1="47" x2="62" y2="53" stroke="#9ca3af" stroke-width="2.5"/>
  </svg>`,

  // ── Troll Shaman ──────────────────────────────────────────
  "Troll Shaman": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="22" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <!-- water/poison aura -->
    <circle cx="50" cy="72" r="32" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.2"/>
    <!-- robes — dark river green -->
    <polygon points="30,74 50,58 70,74 67,106 33,106" fill="#0e4d2e"/>
    <polygon points="34,77 50,64 66,77 64,106 36,106" fill="#166534"/>
    <!-- bone and shell staff -->
    <rect x="14" y="44" width="5" height="58" rx="2" fill="#3d2b0e"/>
    <!-- skull on staff -->
    <ellipse cx="16" cy="38" rx="9" ry="8" fill="#fef9c3" opacity="0.85"/>
    <ellipse cx="12" cy="40" rx="3" ry="3" fill="#1a1a1a"/>
    <ellipse cx="20" cy="40" rx="3" ry="3" fill="#1a1a1a"/>
    <ellipse cx="16" cy="44" rx="4" ry="2" fill="#1a1a1a"/>
    <!-- water orb in hand -->
    <circle cx="78" cy="66" r="10" fill="#0ea5e9" opacity="0.3"/>
    <circle cx="78" cy="66" r="7" fill="#38bdf8" opacity="0.5"/>
    <circle cx="75" cy="63" r="3" fill="#fff" opacity="0.4"/>
    <!-- body -->
    <ellipse cx="50" cy="74" rx="16" ry="14" fill="#166534"/>
    <!-- head — troll but wise looking -->
    <ellipse cx="50" cy="44" rx="18" ry="17" fill="#0e4d2e"/>
    <ellipse cx="50" cy="44" rx="15" ry="14" fill="#166534"/>
    <!-- big nose -->
    <ellipse cx="50" cy="50" rx="6" ry="5" fill="#0e4d2e"/>
    <!-- old eyes — glowing blue -->
    <ellipse cx="40" cy="40" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="60" cy="40" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="40" cy="40" rx="3" ry="3" fill="#38bdf8"/>
    <ellipse cx="60" cy="40" rx="3" ry="3" fill="#38bdf8"/>
    <!-- beard of seaweed -->
    <path d="M 36 54 Q 38 66 34 74" fill="none" stroke="#4ade80" stroke-width="2.5" opacity="0.6"/>
    <path d="M 42 56 Q 42 68 40 76" fill="none" stroke="#4ade80" stroke-width="2" opacity="0.5"/>
    <path d="M 50 56 Q 50 68 50 78" fill="none" stroke="#4ade80" stroke-width="2" opacity="0.5"/>
    <path d="M 58 56 Q 58 68 60 76" fill="none" stroke="#4ade80" stroke-width="2" opacity="0.5"/>
    <path d="M 64 54 Q 62 66 66 74" fill="none" stroke="#4ade80" stroke-width="2.5" opacity="0.6"/>
    <!-- horn -->
    <polygon points="42,26 46,12 50,26" fill="#fef9c3" opacity="0.7"/>
  </svg>`,

  // ── Stone Troll ──────────────────────────────────────────
  "Stone Troll": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="112" rx="32" ry="6" fill="#1a1a1a" opacity="0.5"/>
    <!-- legs — literal stone columns -->
    <rect x="24" y="80" width="22" height="32" rx="4" fill="#44403c"/>
    <rect x="54" y="80" width="22" height="32" rx="4" fill="#57534e"/>
    <!-- stone cracks on legs -->
    <line x1="28" y1="84" x2="34" y2="104" stroke="#78716c" stroke-width="1.5" opacity="0.5"/>
    <line x1="62" y1="86" x2="66" y2="106" stroke="#78716c" stroke-width="1.5" opacity="0.5"/>
    <!-- massive boulder body -->
    <ellipse cx="50" cy="62" rx="34" ry="28" fill="#44403c"/>
    <ellipse cx="50" cy="60" rx="28" ry="23" fill="#57534e"/>
    <!-- stone veins / cracks -->
    <line x1="30" y1="52" x2="42" y2="70" stroke="#78716c" stroke-width="1.5" opacity="0.4"/>
    <line x1="58" y1="54" x2="68" y2="72" stroke="#78716c" stroke-width="1.5" opacity="0.4"/>
    <line x1="44" y1="66" x2="56" y2="76" stroke="#78716c" stroke-width="1" opacity="0.3"/>
    <!-- arms — boulders -->
    <ellipse cx="12" cy="62" rx="12" ry="20" fill="#44403c"/>
    <ellipse cx="88" cy="62" rx="12" ry="20" fill="#44403c"/>
    <!-- boulder fists -->
    <circle cx="10" cy="80" r="12" fill="#292524"/>
    <circle cx="90" cy="80" r="12" fill="#292524"/>
    <!-- head — irregular boulder -->
    <ellipse cx="50" cy="30" rx="28" ry="22" fill="#44403c"/>
    <ellipse cx="50" cy="30" rx="24" ry="18" fill="#57534e"/>
    <!-- mossy top -->
    <ellipse cx="50" cy="10" rx="20" ry="8" fill="#166534" opacity="0.5"/>
    <!-- deep set glowing eyes -->
    <ellipse cx="36" cy="28" rx="8" ry="7" fill="#1c1917"/>
    <ellipse cx="64" cy="28" rx="8" ry="7" fill="#1c1917"/>
    <ellipse cx="36" cy="29" rx="5" ry="5" fill="#fbbf24" opacity="0.8"/>
    <ellipse cx="64" cy="29" rx="5" ry="5" fill="#fbbf24" opacity="0.8"/>
    <ellipse cx="36" cy="29" rx="2.5" ry="2.5" fill="#fff" opacity="0.5"/>
    <ellipse cx="64" cy="29" rx="2.5" ry="2.5" fill="#fff" opacity="0.5"/>
    <!-- gaping mouth -->
    <ellipse cx="50" cy="44" rx="14" ry="8" fill="#1c1917"/>
    <line x1="38" y1="40" x2="40" y2="48" stroke="#78716c" stroke-width="2"/>
    <line x1="46" y1="38" x2="46" y2="48" stroke="#78716c" stroke-width="2"/>
    <line x1="54" y1="38" x2="54" y2="48" stroke="#78716c" stroke-width="2"/>
    <line x1="60" y1="40" x2="60" y2="48" stroke="#78716c" stroke-width="2"/>
  </svg>`,

  // ── Web Spinner ──────────────────────────────────────────
  "Web Spinner": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="20" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <line x1="50" y1="60" x2="10" y2="20" stroke="#e2e8f0" stroke-width="0.8" opacity="0.3"/>
    <line x1="50" y1="60" x2="90" y2="20" stroke="#e2e8f0" stroke-width="0.8" opacity="0.3"/>
    <line x1="50" y1="60" x2="4"  y2="60" stroke="#e2e8f0" stroke-width="0.8" opacity="0.3"/>
    <line x1="50" y1="60" x2="96" y2="60" stroke="#e2e8f0" stroke-width="0.8" opacity="0.3"/>
    <line x1="36" y1="68" x2="10" y2="58" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <line x1="36" y1="72" x2="8"  y2="76" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <line x1="38" y1="77" x2="14" y2="92" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <line x1="42" y1="80" x2="26" y2="100" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <line x1="64" y1="68" x2="90" y2="58" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <line x1="64" y1="72" x2="92" y2="76" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <line x1="62" y1="77" x2="86" y2="92" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <line x1="58" y1="80" x2="74" y2="100" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="50" cy="82" rx="18" ry="22" fill="#e2e8f0" opacity="0.9"/>
    <ellipse cx="50" cy="80" rx="14" ry="17" fill="#cbd5e1"/>
    <ellipse cx="50" cy="78" rx="8" ry="10" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.5"/>
    <ellipse cx="44" cy="102" rx="3" ry="2" fill="#94a3b8"/>
    <ellipse cx="50" cy="104" rx="3" ry="2" fill="#94a3b8"/>
    <ellipse cx="56" cy="102" rx="3" ry="2" fill="#94a3b8"/>
    <ellipse cx="50" cy="60" rx="13" ry="12" fill="#475569"/>
    <circle cx="43" cy="55" r="2.5" fill="#fbbf24"/>
    <circle cx="50" cy="53" r="2.5" fill="#fbbf24"/>
    <circle cx="57" cy="55" r="2.5" fill="#fbbf24"/>
    <circle cx="44" cy="60" r="2" fill="#fef9c3"/>
    <circle cx="56" cy="60" r="2" fill="#fef9c3"/>
    <circle cx="43" cy="65" r="2" fill="#fbbf24"/>
    <circle cx="57" cy="65" r="2" fill="#fbbf24"/>
    <circle cx="50" cy="66" r="2" fill="#fbbf24"/>
  </svg>`,

  // ── Spider Matriarch ──────────────────────────────────────────
  "Spider Matriarch": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="112" rx="28" ry="5" fill="#1a1a1a" opacity="0.5"/>
    <line x1="50" y1="55" x2="2"  y2="15" stroke="#e2e8f0" stroke-width="1" opacity="0.25"/>
    <line x1="50" y1="55" x2="98" y2="15" stroke="#e2e8f0" stroke-width="1" opacity="0.25"/>
    <line x1="32" y1="64" x2="4"  y2="46" stroke="#581c87" stroke-width="5" stroke-linecap="round"/>
    <line x1="30" y1="70" x2="2"  y2="72" stroke="#581c87" stroke-width="5" stroke-linecap="round"/>
    <line x1="34" y1="78" x2="8"  y2="96" stroke="#581c87" stroke-width="5" stroke-linecap="round"/>
    <line x1="40" y1="84" x2="22" y2="108" stroke="#581c87" stroke-width="4" stroke-linecap="round"/>
    <line x1="68" y1="64" x2="96" y2="46" stroke="#581c87" stroke-width="5" stroke-linecap="round"/>
    <line x1="70" y1="70" x2="98" y2="72" stroke="#581c87" stroke-width="5" stroke-linecap="round"/>
    <line x1="66" y1="78" x2="92" y2="96" stroke="#581c87" stroke-width="5" stroke-linecap="round"/>
    <line x1="60" y1="84" x2="78" y2="108" stroke="#581c87" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="50" cy="88" rx="22" ry="26" fill="#7c3aed" opacity="0.85"/>
    <ellipse cx="50" cy="86" rx="17" ry="20" fill="#6d28d9"/>
    <circle cx="42" cy="82" r="4" fill="#a78bfa" opacity="0.6"/>
    <circle cx="56" cy="80" r="4" fill="#a78bfa" opacity="0.6"/>
    <circle cx="46" cy="92" r="4" fill="#a78bfa" opacity="0.5"/>
    <circle cx="58" cy="90" r="4" fill="#a78bfa" opacity="0.5"/>
    <ellipse cx="44" cy="112" rx="4" ry="2.5" fill="#4c1d95"/>
    <ellipse cx="56" cy="112" rx="4" ry="2.5" fill="#4c1d95"/>
    <ellipse cx="50" cy="58" rx="18" ry="16" fill="#4c1d95"/>
    <ellipse cx="50" cy="56" rx="14" ry="12" fill="#5b21b6"/>
    <polygon points="34,46 36,34 40,46" fill="#7c3aed"/>
    <polygon points="46,44 48,30 52,44" fill="#7c3aed"/>
    <polygon points="60,46 64,34 66,46" fill="#7c3aed"/>
    <circle cx="40" cy="52" r="3" fill="#f0abfc"/>
    <circle cx="48" cy="49" r="3" fill="#f0abfc"/>
    <circle cx="56" cy="49" r="3" fill="#f0abfc"/>
    <circle cx="62" cy="52" r="3" fill="#f0abfc"/>
    <circle cx="40" cy="60" r="2.5" fill="#e879f9"/>
    <circle cx="48" cy="62" r="2.5" fill="#e879f9"/>
    <circle cx="56" cy="62" r="2.5" fill="#e879f9"/>
    <circle cx="62" cy="60" r="2.5" fill="#e879f9"/>
    <path d="M 42 66 Q 38 74 40 78" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/>
    <path d="M 58 66 Q 62 74 60 78" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // ── Tomb Spider ──────────────────────────────────────────
  "Tomb Spider": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="22" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <line x1="36" y1="66" x2="10" y2="52" stroke="#d6d3d1" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="34" y1="72" x2="6"  y2="74" stroke="#d6d3d1" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="36" y1="78" x2="12" y2="94" stroke="#d6d3d1" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="42" y1="83" x2="28" y2="104" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
    <line x1="64" y1="66" x2="90" y2="52" stroke="#d6d3d1" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="66" y1="72" x2="94" y2="74" stroke="#d6d3d1" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="64" y1="78" x2="88" y2="94" stroke="#d6d3d1" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="58" y1="83" x2="72" y2="104" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="50" cy="86" rx="19" ry="22" fill="#292524"/>
    <ellipse cx="50" cy="84" rx="15" ry="17" fill="#1c1917"/>
    <ellipse cx="50" cy="80" rx="7" ry="6" fill="#d6d3d1" opacity="0.7"/>
    <ellipse cx="46" cy="78" rx="2.5" ry="2.5" fill="#1c1917"/>
    <ellipse cx="54" cy="78" rx="2.5" ry="2.5" fill="#1c1917"/>
    <ellipse cx="50" cy="83" rx="3" ry="2" fill="#1c1917"/>
    <ellipse cx="50" cy="62" rx="15" ry="13" fill="#292524"/>
    <circle cx="42" cy="57" r="2.5" fill="#fef9c3" opacity="0.9"/>
    <circle cx="50" cy="55" r="2.5" fill="#fef9c3" opacity="0.9"/>
    <circle cx="58" cy="57" r="2.5" fill="#fef9c3" opacity="0.9"/>
    <circle cx="43" cy="63" r="2" fill="#fef9c3" opacity="0.7"/>
    <circle cx="57" cy="63" r="2" fill="#fef9c3" opacity="0.7"/>
  </svg>`,

  // ── Silk Wraith ──────────────────────────────────────────
  "Silk Wraith": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="20" ry="4" fill="#1a1a1a" opacity="0.3"/>
    <path d="M 36 70 Q 28 88 24 110" fill="none" stroke="#e2e8f0" stroke-width="2" opacity="0.3"/>
    <path d="M 44 72 Q 40 92 38 112" fill="none" stroke="#e2e8f0" stroke-width="1.5" opacity="0.25"/>
    <path d="M 56 72 Q 60 92 62 112" fill="none" stroke="#e2e8f0" stroke-width="1.5" opacity="0.25"/>
    <path d="M 64 70 Q 72 88 76 110" fill="none" stroke="#e2e8f0" stroke-width="2" opacity="0.3"/>
    <ellipse cx="50" cy="72" rx="16" ry="22" fill="#e2e8f0" opacity="0.18"/>
    <path d="M 32 60 Q 50 50 68 60 Q 72 80 68 95 Q 50 100 32 95 Q 28 80 32 60" fill="none" stroke="#cbd5e1" stroke-width="2" opacity="0.5"/>
    <ellipse cx="50" cy="52" rx="14" ry="13" fill="#1e293b" opacity="0.8"/>
    <ellipse cx="43" cy="50" rx="5" ry="5" fill="#0f172a"/>
    <ellipse cx="57" cy="50" rx="5" ry="5" fill="#0f172a"/>
    <ellipse cx="43" cy="50" rx="3" ry="3" fill="#7dd3fc" opacity="0.7"/>
    <ellipse cx="57" cy="50" rx="3" ry="3" fill="#7dd3fc" opacity="0.7"/>
    <ellipse cx="43" cy="50" rx="1.5" ry="1.5" fill="#fff" opacity="0.6"/>
    <ellipse cx="57" cy="50" rx="1.5" ry="1.5" fill="#fff" opacity="0.6"/>
    <path d="M 32 62 Q 16 58 10 68" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <path d="M 68 62 Q 84 58 90 68" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  </svg>`,

  // ── Cocooned Skeleton ──────────────────────────────────────────
  "Cocooned Skeleton": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="22" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <ellipse cx="50" cy="76" rx="22" ry="30" fill="#e2e8f0" opacity="0.85"/>
    <ellipse cx="50" cy="74" rx="18" ry="26" fill="#cbd5e1"/>
    <path d="M 28 60 Q 50 54 72 60" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.6"/>
    <path d="M 30 68 Q 50 63 70 68" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.5"/>
    <path d="M 30 76 Q 50 72 70 76" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.5"/>
    <path d="M 30 84 Q 50 80 70 84" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.4"/>
    <line x1="28" y1="72" x2="16" y2="64" stroke="#fef9c3" stroke-width="3" stroke-linecap="round"/>
    <line x1="22" y1="62" x2="14" y2="56" stroke="#fef9c3" stroke-width="2" stroke-linecap="round"/>
    <line x1="18" y1="56" x2="10" y2="52" stroke="#fef9c3" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="50" cy="46" rx="16" ry="14" fill="#fef9c3" opacity="0.9"/>
    <ellipse cx="42" cy="44" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="58" cy="44" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="42" cy="44" rx="2.5" ry="3" fill="#dc2626" opacity="0.8"/>
    <ellipse cx="58" cy="44" rx="2.5" ry="3" fill="#dc2626" opacity="0.8"/>
    <ellipse cx="50" cy="50" rx="3" ry="2.5" fill="#1a1a1a"/>
    <rect x="42" y="54" width="4" height="5" rx="1" fill="#fef9c3"/>
    <rect x="48" y="55" width="4" height="5" rx="1" fill="#fef9c3"/>
    <rect x="54" y="54" width="4" height="5" rx="1" fill="#fef9c3"/>
  </svg>`,

  // ── Crypt Crawler ──────────────────────────────────────────
  "Crypt Crawler": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="24" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <line x1="34" y1="68" x2="8"  y2="52" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <line x1="32" y1="74" x2="4"  y2="76" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <line x1="34" y1="80" x2="8"  y2="96" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <line x1="40" y1="85" x2="22" y2="106" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <line x1="66" y1="68" x2="92" y2="52" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <line x1="68" y1="74" x2="96" y2="76" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <line x1="66" y1="80" x2="92" y2="96" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <line x1="60" y1="85" x2="78" y2="106" stroke="#b0a090" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="50" cy="84" rx="18" ry="20" fill="#292524"/>
    <ellipse cx="50" cy="82" rx="14" ry="16" fill="#fef9c3" opacity="0.4"/>
    <line x1="36" y1="76" x2="64" y2="76" stroke="#fef9c3" stroke-width="1.5" opacity="0.4"/>
    <line x1="36" y1="84" x2="64" y2="84" stroke="#fef9c3" stroke-width="1.5" opacity="0.4"/>
    <ellipse cx="50" cy="62" rx="16" ry="14" fill="#fef9c3" opacity="0.85"/>
    <circle cx="40" cy="57" r="3" fill="#1a1a1a"/>
    <circle cx="50" cy="55" r="3" fill="#1a1a1a"/>
    <circle cx="60" cy="57" r="3" fill="#1a1a1a"/>
    <circle cx="40" cy="64" r="2.5" fill="#1a1a1a"/>
    <circle cx="60" cy="64" r="2.5" fill="#1a1a1a"/>
    <circle cx="40" cy="57" r="1.5" fill="#a855f7"/>
    <circle cx="50" cy="55" r="1.5" fill="#a855f7"/>
    <circle cx="60" cy="57" r="1.5" fill="#a855f7"/>
    <path d="M 42 68 Q 38 76 42 80" fill="none" stroke="#fef9c3" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 58 68 Q 62 76 58 80" fill="none" stroke="#fef9c3" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // ── Bog Spider ──────────────────────────────────────────
  "Bog Spider": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="22" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <line x1="36" y1="68" x2="10" y2="56" stroke="#365314" stroke-width="4" stroke-linecap="round"/>
    <line x1="34" y1="74" x2="6"  y2="76" stroke="#365314" stroke-width="4" stroke-linecap="round"/>
    <line x1="36" y1="80" x2="10" y2="96" stroke="#365314" stroke-width="4" stroke-linecap="round"/>
    <line x1="42" y1="85" x2="26" y2="106" stroke="#365314" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="64" y1="68" x2="90" y2="56" stroke="#365314" stroke-width="4" stroke-linecap="round"/>
    <line x1="66" y1="74" x2="94" y2="76" stroke="#365314" stroke-width="4" stroke-linecap="round"/>
    <line x1="64" y1="80" x2="90" y2="96" stroke="#365314" stroke-width="4" stroke-linecap="round"/>
    <line x1="58" y1="85" x2="74" y2="106" stroke="#365314" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="50" cy="85" rx="20" ry="22" fill="#365314"/>
    <ellipse cx="50" cy="83" rx="16" ry="17" fill="#4d7c0f"/>
    <ellipse cx="42" cy="80" rx="5" ry="4" fill="#4ade80" opacity="0.3"/>
    <ellipse cx="58" cy="86" rx="5" ry="4" fill="#4ade80" opacity="0.25"/>
    <ellipse cx="50" cy="63" rx="15" ry="13" fill="#365314"/>
    <circle cx="42" cy="58" r="3" fill="#1a1a1a"/>
    <circle cx="50" cy="56" r="3" fill="#1a1a1a"/>
    <circle cx="58" cy="58" r="3" fill="#1a1a1a"/>
    <circle cx="43" cy="65" r="2.5" fill="#1a1a1a"/>
    <circle cx="57" cy="65" r="2.5" fill="#1a1a1a"/>
    <circle cx="42" cy="58" r="1.5" fill="#84cc16"/>
    <circle cx="50" cy="56" r="1.5" fill="#84cc16"/>
    <circle cx="58" cy="58" r="1.5" fill="#84cc16"/>
    <path d="M 44 68 Q 42 76 44 82" fill="none" stroke="#84cc16" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    <path d="M 56 68 Q 58 76 56 82" fill="none" stroke="#84cc16" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    <circle cx="44" cy="83" r="2" fill="#84cc16" opacity="0.6"/>
    <circle cx="56" cy="83" r="2" fill="#84cc16" opacity="0.6"/>
  </svg>`,

  // ── Venom Drake ──────────────────────────────────────────
  "Venom Drake": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="24" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <path d="M 50 100 Q 70 108 80 104 Q 88 100 84 94" fill="none" stroke="#365314" stroke-width="8" stroke-linecap="round"/>
    <ellipse cx="46" cy="82" rx="22" ry="18" fill="#365314"/>
    <ellipse cx="46" cy="80" rx="18" ry="14" fill="#4d7c0f"/>
    <ellipse cx="46" cy="82" rx="10" ry="12" fill="#84cc16" opacity="0.3"/>
    <path d="M 28 70 Q 10 55 14 42 Q 22 38 30 52 Q 32 62 36 68" fill="#1a3a0a" opacity="0.7"/>
    <path d="M 64 70 Q 82 55 78 42 Q 70 38 62 52 Q 60 62 56 68" fill="#1a3a0a" opacity="0.7"/>
    <ellipse cx="26" cy="84" rx="7" ry="12" fill="#365314" transform="rotate(-15 26 84)"/>
    <ellipse cx="66" cy="84" rx="7" ry="12" fill="#365314" transform="rotate(15 66 84)"/>
    <ellipse cx="46" cy="58" rx="12" ry="14" fill="#365314"/>
    <ellipse cx="50" cy="36" rx="18" ry="14" fill="#365314"/>
    <ellipse cx="52" cy="34" rx="14" ry="10" fill="#4d7c0f"/>
    <polygon points="44,22 46,10 50,22" fill="#84cc16" opacity="0.8"/>
    <polygon points="52,20 54,8 58,20" fill="#84cc16" opacity="0.7"/>
    <ellipse cx="44" cy="32" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="58" cy="32" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="44" cy="32" rx="2" ry="4" fill="#84cc16"/>
    <ellipse cx="58" cy="32" rx="2" ry="4" fill="#84cc16"/>
    <path d="M 42 42 Q 50 50 58 42" fill="#1a1a1a"/>
    <path d="M 46 44 Q 46 52 44 58" fill="none" stroke="#84cc16" stroke-width="2" opacity="0.7"/>
    <path d="M 54 44 Q 54 52 56 58" fill="none" stroke="#84cc16" stroke-width="2" opacity="0.7"/>
  </svg>`,

  // ── Marsh Lurker ──────────────────────────────────────────
  "Marsh Lurker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="26" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <ellipse cx="50" cy="106" rx="30" ry="8" fill="#166534" opacity="0.3"/>
    <ellipse cx="50" cy="98" rx="24" ry="10" fill="#14532d" opacity="0.5"/>
    <ellipse cx="50" cy="80" rx="24" ry="18" fill="#14532d"/>
    <ellipse cx="50" cy="78" rx="20" ry="14" fill="#166534"/>
    <polygon points="38,66 40,56 44,66" fill="#0e4d2e"/>
    <polygon points="48,64 50,52 54,64" fill="#0e4d2e"/>
    <polygon points="58,66 60,56 62,66" fill="#0e4d2e"/>
    <ellipse cx="24" cy="82" rx="9" ry="14" fill="#14532d" transform="rotate(-20 24 82)"/>
    <ellipse cx="76" cy="82" rx="9" ry="14" fill="#14532d" transform="rotate(20 76 82)"/>
    <ellipse cx="50" cy="56" rx="24" ry="16" fill="#14532d"/>
    <ellipse cx="50" cy="54" rx="20" ry="13" fill="#166534"/>
    <ellipse cx="36" cy="48" rx="7" ry="6" fill="#0e4d2e"/>
    <ellipse cx="64" cy="48" rx="7" ry="6" fill="#0e4d2e"/>
    <ellipse cx="36" cy="48" rx="4" ry="4" fill="#fbbf24"/>
    <ellipse cx="64" cy="48" rx="4" ry="4" fill="#fbbf24"/>
    <ellipse cx="36" cy="48" rx="2" ry="3" fill="#1a1a1a"/>
    <ellipse cx="64" cy="48" rx="2" ry="3" fill="#1a1a1a"/>
    <path d="M 26 62 Q 50 72 74 62" fill="#0e4d2e"/>
    <line x1="32" y1="63" x2="34" y2="70" stroke="#fef9c3" stroke-width="2.5"/>
    <line x1="42" y1="65" x2="42" y2="72" stroke="#fef9c3" stroke-width="2.5"/>
    <line x1="50" y1="66" x2="50" y2="73" stroke="#fef9c3" stroke-width="2.5"/>
    <line x1="58" y1="65" x2="58" y2="72" stroke="#fef9c3" stroke-width="2.5"/>
    <line x1="68" y1="63" x2="66" y2="70" stroke="#fef9c3" stroke-width="2.5"/>
  </svg>`,

  // ── Swamp Hag ──────────────────────────────────────────
  "Swamp Hag": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="20" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <polygon points="28,72 50,56 72,72 68,108 32,108" fill="#1a3a0a"/>
    <polygon points="32,90 28,108 36,100" fill="#0a1f04"/>
    <polygon points="68,88 72,108 64,98" fill="#0a1f04"/>
    <path d="M 18 42 Q 16 60 18 90 Q 20 100 18 108" fill="none" stroke="#3d2b0e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="18" cy="38" r="8" fill="#84cc16" opacity="0.3"/>
    <circle cx="18" cy="38" r="5" fill="#84cc16" opacity="0.5"/>
    <ellipse cx="52" cy="72" rx="14" ry="14" fill="#14532d"/>
    <circle cx="68" cy="64" r="5" fill="#1a1a1a"/>
    <line x1="64" y1="62" x2="60" y2="58" stroke="#1a1a1a" stroke-width="1.5"/>
    <line x1="64" y1="64" x2="58" y2="62" stroke="#1a1a1a" stroke-width="1.5"/>
    <line x1="72" y1="62" x2="76" y2="58" stroke="#1a1a1a" stroke-width="1.5"/>
    <line x1="72" y1="64" x2="78" y2="62" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="66" cy="62" r="1.5" fill="#84cc16"/>
    <circle cx="70" cy="62" r="1.5" fill="#84cc16"/>
    <ellipse cx="52" cy="44" rx="16" ry="16" fill="#166534"/>
    <path d="M 36 36 Q 30 24 36 16" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    <path d="M 46 32 Q 44 20 48 12" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 56 30 Q 56 18 56 10" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 66 32 Q 68 20 64 12" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 70 36 Q 76 24 70 16" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="43" cy="42" rx="5" ry="5" fill="#1a1a1a"/>
    <ellipse cx="43" cy="42" rx="3" ry="3" fill="#84cc16"/>
    <ellipse cx="43" cy="42" rx="1.5" ry="1.5" fill="#fff" opacity="0.7"/>
    <ellipse cx="57" cy="44" rx="4" ry="3" fill="#1a1a1a"/>
    <ellipse cx="52" cy="50" rx="5" ry="4" fill="#0e4d2e"/>
    <path d="M 40 56 Q 52 62 64 56" fill="#0e4d2e"/>
    <line x1="42" y1="56" x2="44" y2="60" stroke="#fef9c3" stroke-width="2"/>
    <line x1="52" y1="58" x2="52" y2="62" stroke="#fef9c3" stroke-width="2"/>
    <line x1="62" y1="56" x2="60" y2="60" stroke="#fef9c3" stroke-width="2"/>
  </svg>`,

  // ── Phantom Weaver ──────────────────────────────────────────
  "Phantom Weaver": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="18" ry="4" fill="#1a1a1a" opacity="0.3"/>
    <line x1="50" y1="65" x2="2"  y2="10" stroke="#e2e8f0" stroke-width="0.8" opacity="0.35"/>
    <line x1="50" y1="65" x2="50" y2="5"  stroke="#e2e8f0" stroke-width="0.8" opacity="0.3"/>
    <line x1="50" y1="65" x2="98" y2="10" stroke="#e2e8f0" stroke-width="0.8" opacity="0.35"/>
    <line x1="50" y1="65" x2="2"  y2="65" stroke="#e2e8f0" stroke-width="0.8" opacity="0.25"/>
    <line x1="50" y1="65" x2="98" y2="65" stroke="#e2e8f0" stroke-width="0.8" opacity="0.25"/>
    <ellipse cx="50" cy="65" rx="14" ry="14" fill="none" stroke="#e2e8f0" stroke-width="0.7" opacity="0.4"/>
    <ellipse cx="50" cy="65" rx="26" ry="22" fill="none" stroke="#e2e8f0" stroke-width="0.7" opacity="0.3"/>
    <ellipse cx="50" cy="72" rx="9" ry="20" fill="#6d28d9" opacity="0.35"/>
    <line x1="38" y1="62" x2="6"  y2="40" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
    <line x1="36" y1="68" x2="2"  y2="68" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
    <line x1="38" y1="74" x2="6"  y2="90" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    <line x1="42" y1="80" x2="16" y2="108" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <line x1="62" y1="62" x2="94" y2="40" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
    <line x1="64" y1="68" x2="98" y2="68" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
    <line x1="62" y1="74" x2="94" y2="90" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    <line x1="58" y1="80" x2="84" y2="108" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <ellipse cx="50" cy="50" rx="14" ry="13" fill="#4c1d95" opacity="0.7"/>
    <circle cx="41" cy="45" r="2.5" fill="#c4b5fd" opacity="0.9"/>
    <circle cx="50" cy="43" r="2.5" fill="#c4b5fd" opacity="0.9"/>
    <circle cx="59" cy="45" r="2.5" fill="#c4b5fd" opacity="0.9"/>
    <circle cx="41" cy="52" r="2" fill="#ddd6fe" opacity="0.8"/>
    <circle cx="59" cy="52" r="2" fill="#ddd6fe" opacity="0.8"/>
    <circle cx="45" cy="57" r="1.8" fill="#c4b5fd" opacity="0.7"/>
    <circle cx="55" cy="57" r="1.8" fill="#c4b5fd" opacity="0.7"/>
  </svg>`,

  // ── Mirror Spider ──────────────────────────────────────────
  "Mirror Spider": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="20" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <line x1="36" y1="66" x2="10" y2="52" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="34" y1="72" x2="6"  y2="74" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="36" y1="78" x2="10" y2="94" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="42" y1="83" x2="26" y2="104" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <line x1="64" y1="66" x2="90" y2="52" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="66" y1="72" x2="94" y2="74" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="64" y1="78" x2="90" y2="94" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="58" y1="83" x2="74" y2="104" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="50" cy="84" rx="18" ry="20" fill="#334155"/>
    <ellipse cx="50" cy="82" rx="14" ry="16" fill="#475569"/>
    <polygon points="42,76 50,70 58,76 58,88 50,94 42,88" fill="#64748b" opacity="0.6"/>
    <ellipse cx="46" cy="76" rx="4" ry="3" fill="#e2e8f0" opacity="0.5"/>
    <ellipse cx="50" cy="62" rx="15" ry="13" fill="#334155"/>
    <ellipse cx="46" cy="57" rx="5" ry="3" fill="#e2e8f0" opacity="0.3"/>
    <circle cx="41" cy="56" r="3" fill="#1e293b"/>
    <circle cx="50" cy="54" r="3" fill="#1e293b"/>
    <circle cx="59" cy="56" r="3" fill="#1e293b"/>
    <circle cx="41" cy="63" r="2.5" fill="#1e293b"/>
    <circle cx="59" cy="63" r="2.5" fill="#1e293b"/>
    <circle cx="41" cy="56" r="2" fill="#e2e8f0" opacity="0.7"/>
    <circle cx="50" cy="54" r="2" fill="#e2e8f0" opacity="0.7"/>
    <circle cx="59" cy="56" r="2" fill="#e2e8f0" opacity="0.7"/>
    <circle cx="41" cy="56" r="1" fill="#fff" opacity="0.9"/>
    <circle cx="50" cy="54" r="1" fill="#fff" opacity="0.9"/>
    <circle cx="59" cy="56" r="1" fill="#fff" opacity="0.9"/>
  </svg>`,

  // ── Thread Golem ──────────────────────────────────────────
  "Thread Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="26" ry="5" fill="#1a1a1a" opacity="0.5"/>
    <rect x="28" y="84" width="16" height="26" rx="6" fill="#e2e8f0"/>
    <rect x="56" y="84" width="16" height="26" rx="6" fill="#e2e8f0"/>
    <rect x="22" y="52" width="56" height="36" rx="8" fill="#e2e8f0"/>
    <rect x="26" y="56" width="48" height="28" rx="6" fill="#f8fafc"/>
    <line x1="26" y1="62" x2="74" y2="62" stroke="#94a3b8" stroke-width="1" opacity="0.4"/>
    <line x1="26" y1="68" x2="74" y2="68" stroke="#94a3b8" stroke-width="1" opacity="0.4"/>
    <line x1="26" y1="74" x2="74" y2="74" stroke="#94a3b8" stroke-width="1" opacity="0.4"/>
    <line x1="40" y1="56" x2="40" y2="84" stroke="#94a3b8" stroke-width="1" opacity="0.3"/>
    <line x1="50" y1="56" x2="50" y2="84" stroke="#94a3b8" stroke-width="1" opacity="0.3"/>
    <line x1="60" y1="56" x2="60" y2="84" stroke="#94a3b8" stroke-width="1" opacity="0.3"/>
    <rect x="4"  y="58" width="18" height="20" rx="8" fill="#e2e8f0"/>
    <rect x="78" y="58" width="18" height="20" rx="8" fill="#e2e8f0"/>
    <circle cx="10" cy="82" r="10" fill="#cbd5e1"/>
    <circle cx="90" cy="82" r="10" fill="#cbd5e1"/>
    <ellipse cx="50" cy="34" rx="22" ry="20" fill="#e2e8f0"/>
    <ellipse cx="50" cy="34" rx="18" ry="16" fill="#f8fafc"/>
    <path d="M 28 30 Q 50 24 72 30" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.5"/>
    <path d="M 28 36 Q 50 30 72 36" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.4"/>
    <ellipse cx="40" cy="32" rx="7" ry="5" fill="#4c1d95" opacity="0.7"/>
    <ellipse cx="60" cy="32" rx="7" ry="5" fill="#4c1d95" opacity="0.7"/>
    <ellipse cx="40" cy="32" rx="4" ry="3" fill="#a78bfa" opacity="0.8"/>
    <ellipse cx="60" cy="32" rx="4" ry="3" fill="#a78bfa" opacity="0.8"/>
    <ellipse cx="40" cy="32" rx="2" ry="1.5" fill="#fff" opacity="0.6"/>
    <ellipse cx="60" cy="32" rx="2" ry="1.5" fill="#fff" opacity="0.6"/>
  </svg>`,

  // ── Silk Shade ──────────────────────────────────────────
  "Silk Shade": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="16" ry="4" fill="#1a1a1a" opacity="0.3"/>
    <path d="M 38 90 Q 30 102 26 112" fill="none" stroke="#e2e8f0" stroke-width="2.5" opacity="0.2"/>
    <path d="M 62 90 Q 70 102 74 112" fill="none" stroke="#e2e8f0" stroke-width="2.5" opacity="0.2"/>
    <ellipse cx="50" cy="72" rx="12" ry="22" fill="#0f172a" opacity="0.7"/>
    <line x1="36" y1="64" x2="18" y2="54" stroke="#334155" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <line x1="34" y1="70" x2="14" y2="70" stroke="#334155" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <line x1="36" y1="76" x2="18" y2="86" stroke="#334155" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
    <line x1="64" y1="64" x2="82" y2="54" stroke="#334155" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <line x1="66" y1="70" x2="86" y2="70" stroke="#334155" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <line x1="64" y1="76" x2="82" y2="86" stroke="#334155" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
    <ellipse cx="50" cy="46" rx="14" ry="14" fill="#0f172a" opacity="0.9"/>
    <circle cx="40" cy="42" r="2.5" fill="#e2e8f0" opacity="0.6"/>
    <circle cx="50" cy="40" r="2.5" fill="#e2e8f0" opacity="0.6"/>
    <circle cx="60" cy="42" r="2.5" fill="#e2e8f0" opacity="0.6"/>
    <circle cx="40" cy="50" r="2" fill="#e2e8f0" opacity="0.5"/>
    <circle cx="60" cy="50" r="2" fill="#e2e8f0" opacity="0.5"/>
    <path d="M 44 52 Q 44 58 42 62" fill="none" stroke="#84cc16" stroke-width="1.5" opacity="0.4"/>
    <path d="M 56 52 Q 56 58 58 62" fill="none" stroke="#84cc16" stroke-width="1.5" opacity="0.4"/>
  </svg>`,

  // ── Broodling Swarm ──────────────────────────────────────────
  "Broodling Swarm": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="72" r="22" fill="#1a1a1a" opacity="0.15"/>
    <g opacity="0.9">
      <ellipse cx="36" cy="60" rx="5" ry="4" fill="#292524"/>
      <line x1="32" y1="59" x2="28" y2="56" stroke="#292524" stroke-width="1.5"/>
      <line x1="32" y1="61" x2="27" y2="62" stroke="#292524" stroke-width="1.5"/>
      <line x1="40" y1="59" x2="44" y2="56" stroke="#292524" stroke-width="1.5"/>
      <line x1="40" y1="61" x2="45" y2="62" stroke="#292524" stroke-width="1.5"/>
      <circle cx="34" cy="58" r="1.5" fill="#fbbf24"/>
      <circle cx="38" cy="58" r="1.5" fill="#fbbf24"/>
      <ellipse cx="58" cy="58" rx="5" ry="4" fill="#292524"/>
      <line x1="54" y1="57" x2="50" y2="54" stroke="#292524" stroke-width="1.5"/>
      <line x1="54" y1="59" x2="49" y2="60" stroke="#292524" stroke-width="1.5"/>
      <line x1="62" y1="57" x2="66" y2="54" stroke="#292524" stroke-width="1.5"/>
      <line x1="62" y1="59" x2="67" y2="60" stroke="#292524" stroke-width="1.5"/>
      <circle cx="56" cy="56" r="1.5" fill="#fbbf24"/>
      <circle cx="60" cy="56" r="1.5" fill="#fbbf24"/>
      <ellipse cx="28" cy="74" rx="5" ry="4" fill="#1c1917"/>
      <line x1="24" y1="73" x2="18" y2="70" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="24" y1="75" x2="18" y2="78" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="32" y1="73" x2="36" y2="70" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="32" y1="75" x2="36" y2="78" stroke="#1c1917" stroke-width="1.5"/>
      <circle cx="26" cy="72" r="1.5" fill="#ef4444"/>
      <circle cx="30" cy="72" r="1.5" fill="#ef4444"/>
      <ellipse cx="50" cy="76" rx="6" ry="5" fill="#292524"/>
      <line x1="45" y1="74" x2="40" y2="70" stroke="#292524" stroke-width="1.5"/>
      <line x1="45" y1="77" x2="40" y2="80" stroke="#292524" stroke-width="1.5"/>
      <line x1="55" y1="74" x2="60" y2="70" stroke="#292524" stroke-width="1.5"/>
      <line x1="55" y1="77" x2="60" y2="80" stroke="#292524" stroke-width="1.5"/>
      <circle cx="47" cy="74" r="1.5" fill="#fbbf24"/>
      <circle cx="53" cy="74" r="1.5" fill="#fbbf24"/>
      <ellipse cx="72" cy="72" rx="5" ry="4" fill="#1c1917"/>
      <line x1="68" y1="71" x2="63" y2="68" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="68" y1="73" x2="63" y2="76" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="76" y1="71" x2="81" y2="68" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="76" y1="73" x2="81" y2="76" stroke="#1c1917" stroke-width="1.5"/>
      <circle cx="70" cy="70" r="1.5" fill="#ef4444"/>
      <circle cx="74" cy="70" r="1.5" fill="#ef4444"/>
      <ellipse cx="38" cy="88" rx="5" ry="4" fill="#292524"/>
      <line x1="34" y1="87" x2="28" y2="84" stroke="#292524" stroke-width="1.5"/>
      <line x1="34" y1="89" x2="28" y2="92" stroke="#292524" stroke-width="1.5"/>
      <line x1="42" y1="87" x2="46" y2="84" stroke="#292524" stroke-width="1.5"/>
      <line x1="42" y1="89" x2="46" y2="92" stroke="#292524" stroke-width="1.5"/>
      <circle cx="36" cy="86" r="1.5" fill="#fbbf24"/>
      <circle cx="40" cy="86" r="1.5" fill="#fbbf24"/>
      <ellipse cx="62" cy="86" rx="5" ry="4" fill="#1c1917"/>
      <line x1="58" y1="85" x2="52" y2="82" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="58" y1="87" x2="52" y2="90" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="66" y1="85" x2="72" y2="82" stroke="#1c1917" stroke-width="1.5"/>
      <line x1="66" y1="87" x2="72" y2="90" stroke="#1c1917" stroke-width="1.5"/>
      <circle cx="60" cy="84" r="1.5" fill="#ef4444"/>
      <circle cx="64" cy="84" r="1.5" fill="#ef4444"/>
    </g>
  </svg>`,

  // ── Egg Guardian ──────────────────────────────────────────
  "Egg Guardian": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="26" ry="5" fill="#1a1a1a" opacity="0.5"/>
    <ellipse cx="18" cy="88" rx="5" ry="6" fill="#fef9c3" opacity="0.8"/>
    <ellipse cx="26" cy="92" rx="5" ry="6" fill="#fef9c3" opacity="0.7"/>
    <ellipse cx="76" cy="90" rx="5" ry="6" fill="#fef9c3" opacity="0.8"/>
    <ellipse cx="82" cy="94" rx="4" ry="5" fill="#fef9c3" opacity="0.7"/>
    <line x1="34" y1="66" x2="10" y2="52" stroke="#3b0764" stroke-width="5" stroke-linecap="round"/>
    <line x1="32" y1="72" x2="4"  y2="72" stroke="#3b0764" stroke-width="5" stroke-linecap="round"/>
    <line x1="34" y1="78" x2="8"  y2="92" stroke="#3b0764" stroke-width="5" stroke-linecap="round"/>
    <line x1="40" y1="84" x2="20" y2="104" stroke="#3b0764" stroke-width="4" stroke-linecap="round"/>
    <line x1="66" y1="66" x2="90" y2="52" stroke="#3b0764" stroke-width="5" stroke-linecap="round"/>
    <line x1="68" y1="72" x2="96" y2="72" stroke="#3b0764" stroke-width="5" stroke-linecap="round"/>
    <line x1="66" y1="78" x2="92" y2="92" stroke="#3b0764" stroke-width="5" stroke-linecap="round"/>
    <line x1="60" y1="84" x2="80" y2="104" stroke="#3b0764" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="50" cy="82" rx="20" ry="22" fill="#4c1d95"/>
    <ellipse cx="50" cy="80" rx="16" ry="18" fill="#5b21b6"/>
    <ellipse cx="50" cy="84" rx="8" ry="10" fill="#3b0764" opacity="0.6"/>
    <ellipse cx="50" cy="56" rx="18" ry="16" fill="#4c1d95"/>
    <ellipse cx="50" cy="54" rx="14" ry="12" fill="#5b21b6"/>
    <polygon points="36,44 38,30 42,44" fill="#7c3aed"/>
    <polygon points="48,42 50,26 52,42" fill="#7c3aed"/>
    <polygon points="58,44 62,30 64,44" fill="#7c3aed"/>
    <circle cx="40" cy="50" r="3" fill="#78350f"/>
    <circle cx="50" cy="48" r="3" fill="#78350f"/>
    <circle cx="60" cy="50" r="3" fill="#78350f"/>
    <circle cx="40" cy="50" r="1.5" fill="#fbbf24"/>
    <circle cx="50" cy="48" r="1.5" fill="#fbbf24"/>
    <circle cx="60" cy="50" r="1.5" fill="#fbbf24"/>
  </svg>`,

  // ── Brood Tender ──────────────────────────────────────────
  "Brood Tender": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="22" ry="4" fill="#1a1a1a" opacity="0.4"/>
    <line x1="50" y1="58" x2="14" y2="28" stroke="#fef9c3" stroke-width="0.8" opacity="0.3"/>
    <line x1="50" y1="58" x2="86" y2="28" stroke="#fef9c3" stroke-width="0.8" opacity="0.3"/>
    <line x1="50" y1="58" x2="50" y2="10" stroke="#fef9c3" stroke-width="0.8" opacity="0.25"/>
    <ellipse cx="28" cy="26" rx="6" ry="7" fill="#fef9c3" opacity="0.85"/>
    <ellipse cx="50" cy="18" rx="6" ry="7" fill="#fef9c3" opacity="0.85"/>
    <ellipse cx="72" cy="26" rx="6" ry="7" fill="#fef9c3" opacity="0.85"/>
    <line x1="36" y1="64" x2="12" y2="52" stroke="#1e3a5f" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="34" y1="70" x2="6"  y2="72" stroke="#1e3a5f" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="36" y1="76" x2="12" y2="92" stroke="#1e3a5f" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="42" y1="82" x2="26" y2="104" stroke="#1e3a5f" stroke-width="3" stroke-linecap="round"/>
    <line x1="64" y1="64" x2="88" y2="52" stroke="#1e3a5f" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="66" y1="70" x2="94" y2="72" stroke="#1e3a5f" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="64" y1="76" x2="88" y2="92" stroke="#1e3a5f" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="58" y1="82" x2="74" y2="104" stroke="#1e3a5f" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="50" cy="82" rx="18" ry="20" fill="#1e3a5f"/>
    <ellipse cx="50" cy="80" rx="14" ry="16" fill="#1e40af"/>
    <ellipse cx="50" cy="80" rx="8" ry="10" fill="#3b82f6" opacity="0.3"/>
    <ellipse cx="50" cy="60" rx="15" ry="13" fill="#1e3a5f"/>
    <circle cx="41" cy="54" r="2.5" fill="#0f172a"/>
    <circle cx="50" cy="52" r="2.5" fill="#0f172a"/>
    <circle cx="59" cy="54" r="2.5" fill="#0f172a"/>
    <circle cx="41" cy="61" r="2" fill="#0f172a"/>
    <circle cx="59" cy="61" r="2" fill="#0f172a"/>
    <circle cx="41" cy="54" r="1.5" fill="#60a5fa"/>
    <circle cx="50" cy="52" r="1.5" fill="#60a5fa"/>
    <circle cx="59" cy="54" r="1.5" fill="#60a5fa"/>
  </svg>`,

  // ── Hollow Crawler ──────────────────────────────────────────
  "Hollow Crawler": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="108" rx="24" ry="5" fill="#1a1a1a" opacity="0.4"/>
    <line x1="34" y1="66" x2="6"  y2="50" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
    <line x1="32" y1="72" x2="2"  y2="74" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
    <line x1="34" y1="78" x2="6"  y2="96" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
    <line x1="40" y1="84" x2="20" y2="106" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="66" y1="66" x2="94" y2="50" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
    <line x1="68" y1="72" x2="98" y2="74" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
    <line x1="66" y1="78" x2="94" y2="96" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
    <line x1="60" y1="84" x2="80" y2="106" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="50" cy="84" rx="20" ry="22" fill="#1c1917"/>
    <ellipse cx="50" cy="82" rx="16" ry="18" fill="#292524"/>
    <ellipse cx="50" cy="82" rx="8" ry="10" fill="#0c0a09" opacity="0.8"/>
    <line x1="34" y1="74" x2="42" y2="88" stroke="#44403c" stroke-width="1.5" opacity="0.6"/>
    <line x1="58" y1="76" x2="64" y2="90" stroke="#44403c" stroke-width="1.5" opacity="0.5"/>
    <ellipse cx="50" cy="62" rx="16" ry="14" fill="#1c1917"/>
    <ellipse cx="50" cy="60" rx="12" ry="10" fill="#292524"/>
    <circle cx="40" cy="56" r="3.5" fill="#0c0a09"/>
    <circle cx="50" cy="54" r="3.5" fill="#0c0a09"/>
    <circle cx="60" cy="56" r="3.5" fill="#0c0a09"/>
    <circle cx="40" cy="64" r="3" fill="#0c0a09"/>
    <circle cx="60" cy="64" r="3" fill="#0c0a09"/>
    <circle cx="40" cy="56" r="2" fill="#dc2626" opacity="0.3"/>
    <circle cx="50" cy="54" r="2" fill="#dc2626" opacity="0.3"/>
    <circle cx="60" cy="56" r="2" fill="#dc2626" opacity="0.3"/>
    <path d="M 42 66 Q 40 74 42 78" fill="none" stroke="#84cc16" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M 58 66 Q 60 74 58 78" fill="none" stroke="#84cc16" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
  </svg>`,

  // ── Portal Guardian (procedural dungeons) ────────────────────
  "Portal Guardian": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- aura ring outer -->
    <ellipse cx="50" cy="60" rx="44" ry="50" fill="none" stroke="#6b7280" stroke-width="1.5" opacity="0.25"/>
    <ellipse cx="50" cy="60" rx="38" ry="44" fill="none" stroke="#6b7280" stroke-width="1" opacity="0.15"/>
    <!-- body core -->
    <ellipse cx="50" cy="68" rx="22" ry="26" fill="#1f2937"/>
    <ellipse cx="50" cy="68" rx="18" ry="22" fill="#374151"/>
    <!-- chest crystal -->
    <polygon points="50,54 58,66 50,72 42,66" fill="#6b7280" opacity="0.9"/>
    <polygon points="50,56 56,65 50,70 44,65" fill="#9ca3af" opacity="0.7"/>
    <!-- head -->
    <ellipse cx="50" cy="36" rx="18" ry="18" fill="#1f2937"/>
    <ellipse cx="50" cy="36" rx="14" ry="14" fill="#374151"/>
    <!-- eye sockets -->
    <ellipse cx="43" cy="34" rx="5" ry="5" fill="#111827"/>
    <ellipse cx="57" cy="34" rx="5" ry="5" fill="#111827"/>
    <!-- glowing eyes -->
    <ellipse cx="43" cy="34" rx="3" ry="3" fill="#6b7280"/>
    <ellipse cx="57" cy="34" rx="3" ry="3" fill="#6b7280"/>
    <ellipse cx="43" cy="34" rx="1.5" ry="1.5" fill="#fff" opacity="0.8"/>
    <ellipse cx="57" cy="34" rx="1.5" ry="1.5" fill="#fff" opacity="0.8"/>
    <!-- crown / horns -->
    <polygon points="36,22 39,10 43,22" fill="#4b5563"/>
    <polygon points="50,20 50,8 54,20" fill="#6b7280"/>
    <polygon points="64,22 61,10 57,22" fill="#4b5563"/>
    <!-- arms -->
    <rect x="24" y="58" width="8" height="20" rx="4" fill="#374151" transform="rotate(-15 28 68)"/>
    <rect x="68" y="58" width="8" height="20" rx="4" fill="#374151" transform="rotate(15 72 68)"/>
    <!-- bottom fade -->
    <ellipse cx="50" cy="96" rx="20" ry="6" fill="#111827" opacity="0.5"/>
  </svg>`,
  // ── Phase 3: Skeleton Biome ──────────────────────────────────────────────

  // ── Bone Archer ──────────────────────────────────────────────────────────
  "Bone Archer": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- skull -->
    <ellipse cx="50" cy="22" rx="12" ry="12" fill="#d1c9a8"/>
    <ellipse cx="44" cy="21" rx="3.5" ry="4" fill="#1a1a2e"/>
    <ellipse cx="56" cy="21" rx="3.5" ry="4" fill="#1a1a2e"/>
    <ellipse cx="44" cy="21" rx="2" ry="2.5" fill="#7c3aed" opacity="0.7"/>
    <ellipse cx="56" cy="21" rx="2" ry="2.5" fill="#7c3aed" opacity="0.7"/>
    <!-- teeth -->
    <rect x="45" y="31" width="4" height="5" rx="1" fill="#d1c9a8"/>
    <rect x="51" y="31" width="4" height="5" rx="1" fill="#d1c9a8"/>
    <!-- spine/torso -->
    <rect x="47" y="34" width="6" height="28" rx="2" fill="#c4bb99"/>
    <rect x="44" y="38" width="12" height="3" rx="1" fill="#b8ae88"/>
    <rect x="44" y="44" width="12" height="3" rx="1" fill="#b8ae88"/>
    <rect x="44" y="50" width="12" height="3" rx="1" fill="#b8ae88"/>
    <!-- left arm holding bow -->
    <rect x="28" y="36" width="5" height="22" rx="2" fill="#c4bb99" transform="rotate(-10 30 47)"/>
    <!-- right arm drawing string -->
    <rect x="67" y="36" width="5" height="18" rx="2" fill="#c4bb99" transform="rotate(20 69 45)"/>
    <!-- bow -->
    <path d="M32 26 Q20 50 32 74" fill="none" stroke="#5a3e1b" stroke-width="3" stroke-linecap="round"/>
    <line x1="32" y1="26" x2="32" y2="74" stroke="#c4aa6a" stroke-width="1.2"/>
    <!-- arrow -->
    <line x1="32" y1="50" x2="68" y2="44" stroke="#8b6914" stroke-width="2" stroke-linecap="round"/>
    <polygon points="68,44 62,41 63,47" fill="#c0392b"/>
    <!-- hip bones -->
    <ellipse cx="44" cy="64" rx="6" ry="4" fill="#c4bb99"/>
    <ellipse cx="56" cy="64" rx="6" ry="4" fill="#c4bb99"/>
    <!-- legs -->
    <rect x="42" y="66" width="5" height="26" rx="2" fill="#c4bb99"/>
    <rect x="53" y="66" width="5" height="26" rx="2" fill="#c4bb99"/>
    <!-- feet -->
    <ellipse cx="44" cy="94" rx="5" ry="3" fill="#b8ae88"/>
    <ellipse cx="56" cy="94" rx="5" ry="3" fill="#b8ae88"/>
  </svg>`,

  // ── Grave Revenant ───────────────────────────────────────────────────────
  "Grave Revenant": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- ghostly glow -->
    <ellipse cx="50" cy="60" rx="28" ry="40" fill="#4c1d95" opacity="0.18"/>
    <!-- tattered robe -->
    <ellipse cx="50" cy="70" rx="22" ry="32" fill="#2d1b4e"/>
    <!-- robe tears -->
    <path d="M30 85 L26 100 L32 90 L28 105" fill="none" stroke="#1a0f30" stroke-width="2"/>
    <path d="M70 85 L74 100 L68 90 L72 105" fill="none" stroke="#1a0f30" stroke-width="2"/>
    <path d="M50 95 L47 110 L53 110" fill="none" stroke="#1a0f30" stroke-width="2"/>
    <!-- skull -->
    <ellipse cx="50" cy="26" rx="14" ry="15" fill="#ddd5b0"/>
    <ellipse cx="43" cy="25" rx="4" ry="4.5" fill="#1a1a2e"/>
    <ellipse cx="57" cy="25" rx="4" ry="4.5" fill="#1a1a2e"/>
    <ellipse cx="43" cy="25" rx="2.5" ry="3" fill="#7c3aed"/>
    <ellipse cx="57" cy="25" rx="2.5" ry="3" fill="#7c3aed"/>
    <path d="M44 37 Q50 40 56 37" fill="none" stroke="#b8ae88" stroke-width="1.5"/>
    <!-- grave dirt on robe -->
    <ellipse cx="42" cy="58" rx="5" ry="3" fill="#3d2b1a" opacity="0.5"/>
    <ellipse cx="60" cy="65" rx="4" ry="2" fill="#3d2b1a" opacity="0.4"/>
    <!-- arms reaching out -->
    <rect x="18" y="52" width="14" height="5" rx="2" fill="#ddd5b0" transform="rotate(-20 25 54)"/>
    <rect x="68" y="52" width="14" height="5" rx="2" fill="#ddd5b0" transform="rotate(20 75 54)"/>
    <!-- claw hands -->
    <line x1="19" y1="47" x2="16" y2="42" stroke="#ddd5b0" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="22" y1="46" x2="20" y2="40" stroke="#ddd5b0" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="25" y1="46" x2="24" y2="40" stroke="#ddd5b0" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="81" y1="47" x2="84" y2="42" stroke="#ddd5b0" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="78" y1="46" x2="80" y2="40" stroke="#ddd5b0" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="75" y1="46" x2="76" y2="40" stroke="#ddd5b0" stroke-width="1.5" stroke-linecap="round"/>
    <!-- purple energy wisps -->
    <ellipse cx="36" cy="44" rx="3" ry="5" fill="#7c3aed" opacity="0.5"/>
    <ellipse cx="64" cy="44" rx="3" ry="5" fill="#7c3aed" opacity="0.5"/>
  </svg>`,

  // ── Cursed Digger ─────────────────────────────────────────────────────────
  "Cursed Digger": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- skull -->
    <ellipse cx="50" cy="22" rx="12" ry="12" fill="#c4bb99"/>
    <ellipse cx="44" cy="21" rx="3" ry="3.5" fill="#1a1a2e"/>
    <ellipse cx="56" cy="21" rx="3" ry="3.5" fill="#1a1a2e"/>
    <ellipse cx="44" cy="21" rx="1.8" ry="2.2" fill="#16a34a" opacity="0.8"/>
    <ellipse cx="56" cy="21" rx="1.8" ry="2.2" fill="#16a34a" opacity="0.8"/>
    <!-- teeth -->
    <rect x="45" y="30" width="3" height="5" rx="1" fill="#c4bb99"/>
    <rect x="52" y="30" width="3" height="5" rx="1" fill="#c4bb99"/>
    <!-- tattered shirt -->
    <ellipse cx="50" cy="52" rx="14" ry="18" fill="#3d2b1a"/>
    <!-- spine -->
    <rect x="47" y="34" width="6" height="16" rx="2" fill="#b8ae88"/>
    <!-- arms -->
    <rect x="26" y="36" width="5" height="24" rx="2" fill="#c4bb99" transform="rotate(25 28 48)"/>
    <rect x="69" y="36" width="5" height="24" rx="2" fill="#c4bb99" transform="rotate(-10 71 48)"/>
    <!-- pickaxe -->
    <rect x="6" y="42" width="28" height="3" rx="1" fill="#5a3e1b"/>
    <polygon points="6,40 14,36 14,50" fill="#6b7280"/>
    <!-- grave dirt splatter -->
    <ellipse cx="42" cy="68" rx="8" ry="4" fill="#3d2b1a" opacity="0.6"/>
    <ellipse cx="30" cy="72" rx="5" ry="3" fill="#3d2b1a" opacity="0.4"/>
    <!-- hip bones -->
    <ellipse cx="44" cy="66" rx="6" ry="4" fill="#c4bb99"/>
    <ellipse cx="56" cy="66" rx="6" ry="4" fill="#c4bb99"/>
    <!-- legs -->
    <rect x="42" y="68" width="5" height="26" rx="2" fill="#c4bb99"/>
    <rect x="53" y="68" width="5" height="26" rx="2" fill="#c4bb99"/>
    <!-- feet -->
    <ellipse cx="44" cy="96" rx="5" ry="3" fill="#b8ae88"/>
    <ellipse cx="56" cy="96" rx="5" ry="3" fill="#b8ae88"/>
    <!-- green curse glow -->
    <ellipse cx="50" cy="22" rx="14" ry="14" fill="none" stroke="#16a34a" stroke-width="1" opacity="0.5"/>
  </svg>`,

  // ── Wailing Specter ───────────────────────────────────────────────────────
  "Wailing Specter": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- outer ghost glow -->
    <ellipse cx="50" cy="62" rx="26" ry="38" fill="#6d28d9" opacity="0.12"/>
    <!-- ghost body -->
    <ellipse cx="50" cy="55" rx="20" ry="30" fill="#ede9fe"/>
    <!-- tattered bottom -->
    <path d="M30 78 Q34 92 30 105 Q36 95 38 108 Q44 96 44 110 Q50 97 50 112 Q56 97 56 110 Q62 96 62 108 Q66 95 70 105 Q66 92 70 78" fill="#ede9fe"/>
    <!-- wailing mouth — wide open -->
    <ellipse cx="50" cy="52" rx="8" ry="10" fill="#1a0f30"/>
    <ellipse cx="50" cy="54" rx="5" ry="6" fill="#2d1b4e"/>
    <!-- eyes — anguished -->
    <ellipse cx="41" cy="36" rx="5" ry="4" fill="#4c1d95"/>
    <ellipse cx="59" cy="36" rx="5" ry="4" fill="#4c1d95"/>
    <ellipse cx="41" cy="35" rx="2.5" ry="2" fill="#c4b5fd"/>
    <ellipse cx="59" cy="35" rx="2.5" ry="2" fill="#c4b5fd"/>
    <!-- anguish brow lines -->
    <path d="M37 31 Q41 28 45 31" fill="none" stroke="#4c1d95" stroke-width="1.5"/>
    <path d="M55 31 Q59 28 63 31" fill="none" stroke="#4c1d95" stroke-width="1.5"/>
    <!-- translucent arms wailing upward -->
    <ellipse cx="24" cy="42" rx="6" ry="14" fill="#ede9fe" opacity="0.7" transform="rotate(-30 24 42)"/>
    <ellipse cx="76" cy="42" rx="6" ry="14" fill="#ede9fe" opacity="0.7" transform="rotate(30 76 42)"/>
    <!-- sound wave lines -->
    <path d="M14 50 Q8 55 14 60" fill="none" stroke="#6d28d9" stroke-width="1.5" opacity="0.6"/>
    <path d="M86 50 Q92 55 86 60" fill="none" stroke="#6d28d9" stroke-width="1.5" opacity="0.6"/>
    <path d="M10 46 Q2 55 10 64" fill="none" stroke="#6d28d9" stroke-width="1" opacity="0.4"/>
    <path d="M90 46 Q98 55 90 64" fill="none" stroke="#6d28d9" stroke-width="1" opacity="0.4"/>
  </svg>`,

  // ── Tombstone Golem ───────────────────────────────────────────────────────
  "Tombstone Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- body — large stone slab -->
    <rect x="24" y="30" width="52" height="72" rx="4" fill="#6b7280"/>
    <rect x="26" y="32" width="48" height="68" rx="3" fill="#9ca3af"/>
    <!-- tombstone head -->
    <rect x="28" y="10" width="44" height="26" rx="22" fill="#6b7280"/>
    <rect x="30" y="12" width="40" height="22" rx="20" fill="#9ca3af"/>
    <!-- engraved cross on head -->
    <rect x="48" y="15" width="4" height="15" rx="1" fill="#6b7280"/>
    <rect x="42" y="20" width="16" height="4" rx="1" fill="#6b7280"/>
    <!-- carved eyes -->
    <rect x="36" y="42" width="10" height="8" rx="2" fill="#374151"/>
    <rect x="54" y="42" width="10" height="8" rx="2" fill="#374151"/>
    <ellipse cx="41" cy="46" rx="3" ry="3" fill="#6d28d9" opacity="0.9"/>
    <ellipse cx="59" cy="46" rx="3" ry="3" fill="#6d28d9" opacity="0.9"/>
    <!-- carved grimace -->
    <path d="M38 62 Q50 56 62 62" fill="none" stroke="#374151" stroke-width="3" stroke-linecap="round"/>
    <!-- RIP engraving -->
    <text x="50" y="80" text-anchor="middle" font-size="9" fill="#4b5563" font-family="serif" font-weight="bold">R.I.P</text>
    <!-- cracks -->
    <path d="M38 30 L44 50 L40 70" fill="none" stroke="#4b5563" stroke-width="1.5"/>
    <path d="M65 35 L60 55" fill="none" stroke="#4b5563" stroke-width="1"/>
    <!-- stone fists -->
    <rect x="6" y="50" width="18" height="16" rx="4" fill="#9ca3af"/>
    <rect x="76" y="50" width="18" height="16" rx="4" fill="#9ca3af"/>
    <!-- mossy patches -->
    <ellipse cx="34" cy="88" rx="6" ry="3" fill="#16a34a" opacity="0.4"/>
    <ellipse cx="66" cy="78" rx="5" ry="2" fill="#16a34a" opacity="0.3"/>
  </svg>`,

  // ── Bone Sentinel ────────────────────────────────────────────────────────
  "Bone Sentinel": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- skull with helmet -->
    <ellipse cx="50" cy="20" rx="12" ry="12" fill="#c4bb99"/>
    <rect x="36" y="10" width="28" height="18" rx="4" fill="#374151"/>
    <rect x="38" y="22" width="6" height="8" rx="1" fill="#374151"/>
    <rect x="56" y="22" width="6" height="8" rx="1" fill="#374151"/>
    <ellipse cx="44" cy="22" rx="3" ry="3.5" fill="#1a1a2e"/>
    <ellipse cx="56" cy="22" rx="3" ry="3.5" fill="#1a1a2e"/>
    <ellipse cx="44" cy="22" rx="1.8" ry="2.2" fill="#60a5fa"/>
    <ellipse cx="56" cy="22" rx="1.8" ry="2.2" fill="#60a5fa"/>
    <!-- full plate armour torso -->
    <rect x="32" y="34" width="36" height="32" rx="3" fill="#4b5563"/>
    <rect x="34" y="36" width="32" height="28" rx="2" fill="#6b7280"/>
    <!-- breastplate lines -->
    <path d="M50 36 L50 64" stroke="#4b5563" stroke-width="1"/>
    <path d="M36 48 Q50 44 64 48" fill="none" stroke="#4b5563" stroke-width="1"/>
    <!-- pauldrons -->
    <ellipse cx="32" cy="36" rx="8" ry="6" fill="#374151"/>
    <ellipse cx="68" cy="36" rx="8" ry="6" fill="#374151"/>
    <!-- arm bones under gauntlets -->
    <rect x="18" y="38" width="14" height="5" rx="2" fill="#6b7280"/>
    <rect x="68" y="38" width="14" height="5" rx="2" fill="#6b7280"/>
    <!-- gauntlets holding shield and spear -->
    <rect x="10" y="42" width="10" height="14" rx="3" fill="#374151"/>
    <!-- shield -->
    <rect x="4" y="30" width="16" height="24" rx="5" fill="#1e3a5f"/>
    <rect x="6" y="32" width="12" height="20" rx="4" fill="#1d4ed8"/>
    <path d="M12 36 L12 48" stroke="#60a5fa" stroke-width="1.5"/>
    <path d="M8 42 L16 42" stroke="#60a5fa" stroke-width="1.5"/>
    <!-- spear -->
    <rect x="79" y="10" width="3" height="70" rx="1" fill="#5a3e1b"/>
    <polygon points="80,10 76,22 84,22" fill="#9ca3af"/>
    <!-- bone legs with greaves -->
    <rect x="36" y="66" width="12" height="30" rx="3" fill="#4b5563"/>
    <rect x="52" y="66" width="12" height="30" rx="3" fill="#4b5563"/>
    <rect x="37" y="68" width="10" height="26" rx="2" fill="#c4bb99"/>
    <rect x="53" y="68" width="10" height="26" rx="2" fill="#c4bb99"/>
    <!-- sabatons -->
    <rect x="34" y="94" width="16" height="6" rx="3" fill="#4b5563"/>
    <rect x="50" y="94" width="16" height="6" rx="3" fill="#4b5563"/>
  </svg>`,

  // ── Catapult Skeleton ─────────────────────────────────────────────────────
  "Catapult Skeleton": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- skull -->
    <ellipse cx="50" cy="20" rx="12" ry="12" fill="#c4bb99"/>
    <ellipse cx="43" cy="19" rx="3.5" ry="4" fill="#1a1a2e"/>
    <ellipse cx="57" cy="19" rx="3.5" ry="4" fill="#1a1a2e"/>
    <ellipse cx="43" cy="19" rx="2" ry="2.5" fill="#ef4444"/>
    <ellipse cx="57" cy="19" rx="2" ry="2.5" fill="#ef4444"/>
    <!-- spine -->
    <rect x="47" y="32" width="6" height="20" rx="2" fill="#b8ae88"/>
    <rect x="44" y="36" width="12" height="3" rx="1" fill="#a8a080"/>
    <rect x="44" y="43" width="12" height="3" rx="1" fill="#a8a080"/>
    <!-- arm raised with bomb -->
    <rect x="62" y="24" width="5" height="22" rx="2" fill="#c4bb99" transform="rotate(-40 64 35)"/>
    <!-- bomb -->
    <circle cx="80" cy="14" r="9" fill="#1f2937"/>
    <circle cx="80" cy="14" r="7" fill="#374151"/>
    <rect x="78" y="5" width="4" height="6" rx="1" fill="#5a3e1b"/>
    <!-- fuse spark -->
    <path d="M80 5 Q84 2 86 6" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="86" cy="6" r="2" fill="#fbbf24"/>
    <!-- other arm -->
    <rect x="28" y="36" width="5" height="20" rx="2" fill="#c4bb99" transform="rotate(10 30 46)"/>
    <!-- tattered jacket -->
    <ellipse cx="50" cy="55" rx="14" ry="12" fill="#1f2937"/>
    <!-- hip bones -->
    <ellipse cx="44" cy="64" rx="6" ry="4" fill="#c4bb99"/>
    <ellipse cx="56" cy="64" rx="6" ry="4" fill="#c4bb99"/>
    <!-- legs -->
    <rect x="42" y="66" width="5" height="26" rx="2" fill="#c4bb99"/>
    <rect x="53" y="66" width="5" height="26" rx="2" fill="#c4bb99"/>
    <!-- feet -->
    <ellipse cx="44" cy="94" rx="5" ry="3" fill="#b8ae88"/>
    <ellipse cx="56" cy="94" rx="5" ry="3" fill="#b8ae88"/>
  </svg>`,

  // ── Fortress Wraith ───────────────────────────────────────────────────────
  "Fortress Wraith": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- dark aura -->
    <ellipse cx="50" cy="60" rx="30" ry="42" fill="#111827" opacity="0.25"/>
    <!-- wraith body -->
    <ellipse cx="50" cy="58" rx="22" ry="32" fill="#1f2937"/>
    <!-- broken armour plates floating on wraith -->
    <rect x="36" y="42" width="14" height="10" rx="2" fill="#374151" opacity="0.9"/>
    <rect x="50" y="40" width="14" height="12" rx="2" fill="#4b5563" opacity="0.8"/>
    <rect x="38" y="56" width="10" height="8" rx="2" fill="#374151" opacity="0.7"/>
    <rect x="52" y="54" width="10" height="10" rx="2" fill="#4b5563" opacity="0.7"/>
    <!-- ethereal skull face -->
    <ellipse cx="50" cy="26" rx="14" ry="15" fill="#374151"/>
    <ellipse cx="43" cy="25" rx="4.5" ry="5" fill="#0f172a"/>
    <ellipse cx="57" cy="25" rx="4.5" ry="5" fill="#0f172a"/>
    <ellipse cx="43" cy="25" rx="2.5" ry="3" fill="#a78bfa"/>
    <ellipse cx="57" cy="25" rx="2.5" ry="3" fill="#a78bfa"/>
    <!-- ghostly arms holding ethereal sword -->
    <rect x="14" y="48" width="18" height="4" rx="2" fill="#374151" opacity="0.7" transform="rotate(-15 23 50)"/>
    <!-- sword -->
    <rect x="4" y="38" width="3" height="26" rx="1" fill="#6d28d9" opacity="0.8"/>
    <rect x="0" y="52" width="12" height="3" rx="1" fill="#4b5563" opacity="0.9"/>
    <ellipse cx="5.5" cy="38" rx="3" ry="4" fill="#a78bfa" opacity="0.7"/>
    <!-- wispy tail instead of legs -->
    <path d="M34 82 Q28 96 32 112" fill="none" stroke="#1f2937" stroke-width="8" stroke-linecap="round"/>
    <path d="M50 86 Q50 100 48 114" fill="none" stroke="#1f2937" stroke-width="6" stroke-linecap="round"/>
    <path d="M66 82 Q72 96 68 112" fill="none" stroke="#1f2937" stroke-width="8" stroke-linecap="round"/>
  </svg>`,

  // ── Ossified Titan ────────────────────────────────────────────────────────
  "Ossified Titan": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- massive skull -->
    <ellipse cx="50" cy="22" rx="18" ry="18" fill="#d1c9a8"/>
    <ellipse cx="40" cy="21" rx="5.5" ry="6" fill="#1a1a2e"/>
    <ellipse cx="60" cy="21" rx="5.5" ry="6" fill="#1a1a2e"/>
    <ellipse cx="40" cy="21" rx="3" ry="3.5" fill="#7c3aed"/>
    <ellipse cx="60" cy="21" rx="3" ry="3.5" fill="#7c3aed"/>
    <!-- massive jaw teeth -->
    <rect x="40" y="36" width="5" height="7" rx="1" fill="#d1c9a8"/>
    <rect x="48" y="37" width="5" height="6" rx="1" fill="#d1c9a8"/>
    <rect x="56" y="36" width="5" height="7" rx="1" fill="#d1c9a8"/>
    <!-- thick ribcage torso -->
    <rect x="28" y="40" width="44" height="36" rx="4" fill="#c4bb99"/>
    <!-- rib bones -->
    <path d="M36 46 Q50 42 64 46" fill="none" stroke="#a8a080" stroke-width="3"/>
    <path d="M34 54 Q50 50 66 54" fill="none" stroke="#a8a080" stroke-width="3"/>
    <path d="M34 62 Q50 58 66 62" fill="none" stroke="#a8a080" stroke-width="3"/>
    <path d="M36 70 Q50 66 64 70" fill="none" stroke="#a8a080" stroke-width="3"/>
    <!-- spine down center -->
    <rect x="47" y="40" width="6" height="36" rx="2" fill="#b8ae88"/>
    <!-- huge arms with bone clubs -->
    <rect x="6" y="40" width="22" height="12" rx="4" fill="#c4bb99"/>
    <rect x="72" y="40" width="22" height="12" rx="4" fill="#c4bb99"/>
    <!-- bone club left -->
    <rect x="2" y="28" width="10" height="16" rx="5" fill="#d1c9a8"/>
    <ellipse cx="7" cy="28" rx="7" ry="6" fill="#d1c9a8"/>
    <!-- bone club right -->
    <rect x="88" y="28" width="10" height="16" rx="5" fill="#d1c9a8"/>
    <ellipse cx="93" cy="28" rx="7" ry="6" fill="#d1c9a8"/>
    <!-- thick hip bones -->
    <ellipse cx="38" cy="76" rx="10" ry="6" fill="#c4bb99"/>
    <ellipse cx="62" cy="76" rx="10" ry="6" fill="#c4bb99"/>
    <!-- thick legs -->
    <rect x="30" y="80" width="16" height="28" rx="4" fill="#c4bb99"/>
    <rect x="54" y="80" width="16" height="28" rx="4" fill="#c4bb99"/>
    <!-- huge feet -->
    <ellipse cx="38" cy="110" rx="10" ry="5" fill="#b8ae88"/>
    <ellipse cx="62" cy="110" rx="10" ry="5" fill="#b8ae88"/>
    <!-- cracks on bones -->
    <path d="M38 44 L42 60" fill="none" stroke="#a8a080" stroke-width="1.5"/>
    <path d="M62 48 L58 64" fill="none" stroke="#a8a080" stroke-width="1.5"/>
  </svg>`,

  // ── Plague Acolyte ────────────────────────────────────────────────────────
  "Plague Acolyte": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- dark robe -->
    <ellipse cx="50" cy="70" rx="20" ry="36" fill="#1a2e1a"/>
    <!-- cowl hood -->
    <ellipse cx="50" cy="26" rx="16" ry="18" fill="#1a2e1a"/>
    <!-- rotting face in shadow -->
    <ellipse cx="50" cy="28" rx="10" ry="11" fill="#2d1f0a"/>
    <ellipse cx="43" cy="27" rx="3.5" ry="4" fill="#0f1a0f"/>
    <ellipse cx="57" cy="27" rx="3.5" ry="4" fill="#0f1a0f"/>
    <ellipse cx="43" cy="27" rx="2" ry="2.5" fill="#16a34a"/>
    <ellipse cx="57" cy="27" rx="2" ry="2.5" fill="#16a34a"/>
    <!-- plague mask/beak -->
    <ellipse cx="50" cy="34" rx="5" ry="7" fill="#3d2b0a"/>
    <!-- staff with skull top -->
    <rect x="72" y="10" width="3" height="90" rx="1" fill="#3d2b1a"/>
    <ellipse cx="73" cy="12" rx="7" ry="7" fill="#c4bb99"/>
    <ellipse cx="70" cy="11" rx="2" ry="2.5" fill="#1a1a2e"/>
    <ellipse cx="76" cy="11" rx="2" ry="2.5" fill="#1a1a2e"/>
    <ellipse cx="70" cy="11" rx="1.2" ry="1.5" fill="#16a34a"/>
    <ellipse cx="76" cy="11" rx="1.2" ry="1.5" fill="#16a34a"/>
    <!-- arm holding staff -->
    <rect x="62" y="48" width="12" height="5" rx="2" fill="#1a2e1a"/>
    <!-- plague boils / pustules on robe -->
    <circle cx="40" cy="62" r="3" fill="#365314" opacity="0.8"/>
    <circle cx="58" cy="58" r="2.5" fill="#365314" opacity="0.8"/>
    <circle cx="44" cy="75" r="2" fill="#365314" opacity="0.7"/>
    <!-- green miasma cloud -->
    <ellipse cx="50" cy="92" rx="18" ry="8" fill="#16a34a" opacity="0.15"/>
    <ellipse cx="36" cy="88" rx="8" ry="4" fill="#16a34a" opacity="0.1"/>
    <ellipse cx="64" cy="90" rx="7" ry="3" fill="#16a34a" opacity="0.1"/>
  </svg>`,

  // ── Rot Walker ────────────────────────────────────────────────────────────
  "Rot Walker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- decayed flesh body -->
    <ellipse cx="50" cy="58" rx="18" ry="28" fill="#2d3a0a"/>
    <!-- sagging head -->
    <ellipse cx="50" cy="24" rx="14" ry="16" fill="#3d4a0a"/>
    <!-- dead eyes -->
    <ellipse cx="43" cy="22" rx="5" ry="5" fill="#1a1a0a"/>
    <ellipse cx="57" cy="22" rx="5" ry="5" fill="#1a1a0a"/>
    <ellipse cx="43" cy="22" rx="2.5" ry="2.5" fill="#16a34a" opacity="0.6"/>
    <ellipse cx="57" cy="22" rx="2.5" ry="2.5" fill="#16a34a" opacity="0.6"/>
    <!-- open mouth with rot -->
    <ellipse cx="50" cy="34" rx="6" ry="5" fill="#0f1a0f"/>
    <rect x="45" y="32" width="4" height="5" rx="1" fill="#4a5820" opacity="0.8"/>
    <rect x="52" y="32" width="4" height="5" rx="1" fill="#4a5820" opacity="0.8"/>
    <!-- exposed ribs on torso -->
    <path d="M36 46 Q44 42 50 44" fill="none" stroke="#4a5820" stroke-width="2.5"/>
    <path d="M36 52 Q44 48 50 50" fill="none" stroke="#4a5820" stroke-width="2.5"/>
    <path d="M36 58 Q44 54 50 56" fill="none" stroke="#4a5820" stroke-width="2.5"/>
    <path d="M64 46 Q56 42 50 44" fill="none" stroke="#4a5820" stroke-width="2.5"/>
    <path d="M64 52 Q56 48 50 50" fill="none" stroke="#4a5820" stroke-width="2.5"/>
    <path d="M64 58 Q56 54 50 56" fill="none" stroke="#4a5820" stroke-width="2.5"/>
    <!-- rotting arms dragging -->
    <rect x="14" y="54" width="20" height="7" rx="3" fill="#3d4a0a" transform="rotate(15 24 57)"/>
    <rect x="66" y="54" width="20" height="7" rx="3" fill="#3d4a0a" transform="rotate(-15 76 57)"/>
    <!-- clawed hands -->
    <line x1="15" y1="66" x2="11" y2="72" stroke="#2d3a0a" stroke-width="2" stroke-linecap="round"/>
    <line x1="19" y1="67" x2="16" y2="74" stroke="#2d3a0a" stroke-width="2" stroke-linecap="round"/>
    <line x1="84" y1="66" x2="88" y2="72" stroke="#2d3a0a" stroke-width="2" stroke-linecap="round"/>
    <line x1="80" y1="67" x2="83" y2="74" stroke="#2d3a0a" stroke-width="2" stroke-linecap="round"/>
    <!-- legs shuffling -->
    <rect x="36" y="80" width="12" height="28" rx="4" fill="#2d3a0a"/>
    <rect x="52" y="82" width="12" height="26" rx="4" fill="#2d3a0a"/>
    <!-- plague drips -->
    <ellipse cx="50" cy="100" rx="16" ry="6" fill="#16a34a" opacity="0.2"/>
    <ellipse cx="38" cy="96" rx="3" ry="5" fill="#16a34a" opacity="0.3"/>
    <ellipse cx="62" cy="98" rx="3" ry="4" fill="#16a34a" opacity="0.25"/>
  </svg>`,

  // ── Diseased Hound ────────────────────────────────────────────────────────
  "Diseased Hound": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- body -->
    <ellipse cx="50" cy="72" rx="28" ry="18" fill="#2d3a0a"/>
    <!-- head -->
    <ellipse cx="22" cy="58" rx="16" ry="14" fill="#3d4a0a"/>
    <!-- snout -->
    <ellipse cx="10" cy="62" rx="9" ry="6" fill="#2d3a0a"/>
    <!-- nostrils -->
    <ellipse cx="7" cy="61" rx="2" ry="1.5" fill="#1a1a0a"/>
    <ellipse cx="12" cy="61" rx="2" ry="1.5" fill="#1a1a0a"/>
    <!-- mad eyes -->
    <ellipse cx="26" cy="52" rx="4.5" ry="4" fill="#1a1a0a"/>
    <ellipse cx="36" cy="50" rx="3.5" ry="3.5" fill="#1a1a0a"/>
    <ellipse cx="26" cy="52" rx="2.5" ry="2.5" fill="#16a34a"/>
    <ellipse cx="36" cy="50" rx="2" ry="2" fill="#16a34a"/>
    <!-- bared teeth -->
    <path d="M8 65 Q13 70 18 65" fill="none" stroke="#1a1a0a" stroke-width="1.5"/>
    <rect x="9" y="64" width="3" height="4" rx="0.5" fill="#d1c9a8"/>
    <rect x="13" y="63" width="3" height="5" rx="0.5" fill="#d1c9a8"/>
    <rect x="17" y="64" width="3" height="4" rx="0.5" fill="#d1c9a8"/>
    <!-- ears -->
    <polygon points="28,44 22,34 34,38" fill="#2d3a0a"/>
    <!-- tail up -->
    <path d="M78 68 Q90 58 88 50" fill="none" stroke="#2d3a0a" stroke-width="5" stroke-linecap="round"/>
    <!-- four legs -->
    <rect x="26" y="84" width="8" height="22" rx="3" fill="#2d3a0a"/>
    <rect x="38" y="86" width="8" height="20" rx="3" fill="#2d3a0a"/>
    <rect x="54" y="84" width="8" height="22" rx="3" fill="#2d3a0a"/>
    <rect x="66" y="86" width="8" height="20" rx="3" fill="#2d3a0a"/>
    <!-- disease sores -->
    <circle cx="52" cy="66" r="3.5" fill="#365314"/>
    <circle cx="64" cy="74" r="2.5" fill="#365314"/>
    <circle cx="44" cy="76" r="2" fill="#365314"/>
    <circle cx="36" cy="70" r="2" fill="#365314"/>
    <!-- drool / foam -->
    <path d="M14 70 Q16 76 14 80" fill="none" stroke="#16a34a" stroke-width="2" opacity="0.6"/>
  </svg>`,

  // ── Pestilence Shade ──────────────────────────────────────────────────────
  "Pestilence Shade": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- toxic aura -->
    <ellipse cx="50" cy="62" rx="32" ry="44" fill="#16a34a" opacity="0.08"/>
    <ellipse cx="50" cy="62" rx="26" ry="36" fill="#16a34a" opacity="0.08"/>
    <!-- shade body — wispy -->
    <ellipse cx="50" cy="60" rx="20" ry="34" fill="#1a2e1a"/>
    <!-- necrotic skull -->
    <ellipse cx="50" cy="24" rx="13" ry="14" fill="#2d3a0a"/>
    <ellipse cx="42" cy="23" rx="4" ry="4.5" fill="#0a1a0a"/>
    <ellipse cx="58" cy="23" rx="4" ry="4.5" fill="#0a1a0a"/>
    <ellipse cx="42" cy="23" rx="2.5" ry="3" fill="#4ade80"/>
    <ellipse cx="58" cy="23" rx="2.5" ry="3" fill="#4ade80"/>
    <!-- decayed teeth -->
    <rect x="44" y="34" width="3" height="5" rx="1" fill="#2d3a0a"/>
    <rect x="49" y="34" width="3" height="5" rx="1" fill="#2d3a0a"/>
    <rect x="54" y="34" width="3" height="5" rx="1" fill="#2d3a0a"/>
    <!-- plague spore cloud hands -->
    <ellipse cx="22" cy="54" rx="10" ry="6" fill="#16a34a" opacity="0.35"/>
    <ellipse cx="78" cy="54" rx="10" ry="6" fill="#16a34a" opacity="0.35"/>
    <ellipse cx="18" cy="50" rx="6" ry="4" fill="#16a34a" opacity="0.25"/>
    <ellipse cx="82" cy="50" rx="6" ry="4" fill="#16a34a" opacity="0.25"/>
    <!-- floating spores -->
    <circle cx="16" cy="40" r="2" fill="#4ade80" opacity="0.5"/>
    <circle cx="84" cy="42" r="2" fill="#4ade80" opacity="0.5"/>
    <circle cx="28" cy="32" r="1.5" fill="#4ade80" opacity="0.4"/>
    <circle cx="72" cy="30" r="1.5" fill="#4ade80" opacity="0.4"/>
    <circle cx="20" cy="60" r="1.5" fill="#4ade80" opacity="0.3"/>
    <circle cx="80" cy="64" r="1.5" fill="#4ade80" opacity="0.3"/>
    <!-- wispy lower body -->
    <path d="M36 86 Q30 100 34 114" fill="none" stroke="#1a2e1a" stroke-width="7" stroke-linecap="round"/>
    <path d="M50 90 Q50 104 48 116" fill="none" stroke="#1a2e1a" stroke-width="5" stroke-linecap="round"/>
    <path d="M64 86 Q70 100 66 114" fill="none" stroke="#1a2e1a" stroke-width="7" stroke-linecap="round"/>
  </svg>`,

  // ── Ancient Revenant ──────────────────────────────────────────────────────
  "Ancient Revenant": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- ancient aura — gold and dark -->
    <ellipse cx="50" cy="60" rx="30" ry="44" fill="#78350f" opacity="0.15"/>
    <!-- ancient armoured robe -->
    <ellipse cx="50" cy="68" rx="22" ry="32" fill="#1c1008"/>
    <!-- ancient gold trim -->
    <path d="M30 50 Q50 44 70 50" fill="none" stroke="#92400e" stroke-width="2"/>
    <path d="M32 62 Q50 56 68 62" fill="none" stroke="#92400e" stroke-width="1.5"/>
    <path d="M34 74 Q50 68 66 74" fill="none" stroke="#92400e" stroke-width="1.5"/>
    <!-- ancient skull — crowned -->
    <ellipse cx="50" cy="22" rx="14" ry="15" fill="#c4a875"/>
    <!-- ancient crown -->
    <rect x="34" y="8" width="32" height="10" rx="2" fill="#92400e"/>
    <polygon points="36,8 40,0 44,8" fill="#b45309"/>
    <polygon points="48,8 50,2 52,8" fill="#d97706"/>
    <polygon points="56,8 60,0 64,8" fill="#b45309"/>
    <!-- jewel in crown -->
    <ellipse cx="50" cy="4" rx="3" ry="2.5" fill="#7c3aed"/>
    <!-- eye sockets with gold glow -->
    <ellipse cx="43" cy="22" rx="4.5" ry="5" fill="#1a1a0a"/>
    <ellipse cx="57" cy="22" rx="4.5" ry="5" fill="#1a1a0a"/>
    <ellipse cx="43" cy="22" rx="2.5" ry="3" fill="#d97706"/>
    <ellipse cx="57" cy="22" rx="2.5" ry="3" fill="#d97706"/>
    <!-- ancient weapon — scythe -->
    <rect x="74" y="8" width="3" height="80" rx="1" fill="#3d2b1a"/>
    <path d="M76 8 Q96 14 90 34 Q82 28 76 26 Z" fill="#9ca3af"/>
    <!-- arm holding scythe -->
    <rect x="62" y="44" width="14" height="5" rx="2" fill="#1c1008"/>
    <!-- other arm -->
    <rect x="24" y="44" width="14" height="5" rx="2" fill="#1c1008"/>
    <!-- bony hand pointing -->
    <line x1="24" y1="46" x2="18" y2="40" stroke="#c4a875" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="22" y1="48" x2="16" y2="44" stroke="#c4a875" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="24" y1="50" x2="17" y2="48" stroke="#c4a875" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  // ── Mummified Pharaoh ─────────────────────────────────────────────────────
  "Mummified Pharaoh": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- mummy wrappings — body -->
    <rect x="30" y="36" width="40" height="60" rx="6" fill="#c4aa6a"/>
    <!-- wrapping strips -->
    <rect x="30" y="42" width="40" height="4" rx="1" fill="#a8906a" opacity="0.6"/>
    <rect x="30" y="50" width="40" height="4" rx="1" fill="#a8906a" opacity="0.6"/>
    <rect x="30" y="58" width="40" height="4" rx="1" fill="#a8906a" opacity="0.6"/>
    <rect x="30" y="66" width="40" height="4" rx="1" fill="#a8906a" opacity="0.6"/>
    <rect x="30" y="74" width="40" height="4" rx="1" fill="#a8906a" opacity="0.6"/>
    <rect x="30" y="82" width="40" height="4" rx="1" fill="#a8906a" opacity="0.6"/>
    <!-- diagonal wraps -->
    <path d="M30 40 L70 56" fill="none" stroke="#a8906a" stroke-width="2" opacity="0.4"/>
    <path d="M30 60 L70 76" fill="none" stroke="#a8906a" stroke-width="2" opacity="0.4"/>
    <!-- nemes headdress -->
    <rect x="30" y="8" width="40" height="30" rx="4" fill="#d97706"/>
    <!-- gold/blue stripes on headdress -->
    <rect x="30" y="12" width="40" height="5" rx="0" fill="#1d4ed8" opacity="0.6"/>
    <rect x="30" y="20" width="40" height="5" rx="0" fill="#1d4ed8" opacity="0.6"/>
    <rect x="30" y="28" width="40" height="5" rx="0" fill="#1d4ed8" opacity="0.6"/>
    <!-- pharaoh face -->
    <ellipse cx="50" cy="24" rx="12" ry="14" fill="#c4a875"/>
    <!-- hollow eyes glowing -->
    <ellipse cx="43" cy="22" rx="4" ry="4.5" fill="#0f0f00"/>
    <ellipse cx="57" cy="22" rx="4" ry="4.5" fill="#0f0f00"/>
    <ellipse cx="43" cy="22" rx="2.5" ry="3" fill="#f59e0b"/>
    <ellipse cx="57" cy="22" rx="2.5" ry="3" fill="#f59e0b"/>
    <!-- beard decoration -->
    <rect x="46" y="34" width="8" height="12" rx="2" fill="#d97706"/>
    <rect x="47" y="44" width="6" height="6" rx="1" fill="#b45309"/>
    <!-- crook and flail cross on chest -->
    <rect x="46" y="40" width="3" height="20" rx="1" fill="#92400e"/>
    <rect x="51" y="40" width="3" height="20" rx="1" fill="#92400e"/>
    <rect x="46" y="40" width="8" height="3" rx="1" fill="#92400e"/>
    <!-- arms crossed -->
    <rect x="14" y="46" width="20" height="8" rx="3" fill="#c4aa6a"/>
    <rect x="66" y="46" width="20" height="8" rx="3" fill="#c4aa6a"/>
    <!-- wrapping on arms -->
    <rect x="16" y="50" width="16" height="2" rx="1" fill="#a8906a" opacity="0.7"/>
    <rect x="68" y="50" width="16" height="2" rx="1" fill="#a8906a" opacity="0.7"/>
    <!-- base feet wraps -->
    <rect x="32" y="94" width="16" height="8" rx="3" fill="#b8946a"/>
    <rect x="52" y="94" width="16" height="8" rx="3" fill="#b8946a"/>
  </svg>`,

  // ── Sarcophagus Golem ─────────────────────────────────────────────────────
  "Sarcophagus Golem": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- massive stone sarcophagus body -->
    <rect x="18" y="24" width="64" height="84" rx="8" fill="#92814a"/>
    <rect x="20" y="26" width="60" height="80" rx="7" fill="#c4aa6a"/>
    <!-- pharaoh face carved on lid -->
    <ellipse cx="50" cy="44" rx="14" ry="16" fill="#a8906a"/>
    <!-- carved eyes -->
    <ellipse cx="43" cy="40" rx="5" ry="4" fill="#5a3e1b"/>
    <ellipse cx="57" cy="40" rx="5" ry="4" fill="#5a3e1b"/>
    <ellipse cx="43" cy="40" rx="3" ry="2.5" fill="#f59e0b"/>
    <ellipse cx="57" cy="40" rx="3" ry="2.5" fill="#f59e0b"/>
    <!-- carved beard / nemes stripes -->
    <rect x="42" y="52" width="16" height="3" rx="1" fill="#92814a"/>
    <rect x="40" y="57" width="20" height="3" rx="1" fill="#92814a"/>
    <!-- hieroglyphs on body -->
    <rect x="26" y="74" width="6" height="10" rx="1" fill="#92814a" opacity="0.7"/>
    <rect x="34" y="74" width="6" height="10" rx="1" fill="#92814a" opacity="0.7"/>
    <rect x="60" y="74" width="6" height="10" rx="1" fill="#92814a" opacity="0.7"/>
    <rect x="68" y="74" width="6" height="10" rx="1" fill="#92814a" opacity="0.7"/>
    <!-- hieroglyph shapes -->
    <ellipse cx="29" cy="79" rx="3" ry="5" fill="#c4aa6a"/>
    <ellipse cx="37" cy="79" rx="3" ry="5" fill="#c4aa6a"/>
    <ellipse cx="63" cy="79" rx="3" ry="5" fill="#c4aa6a"/>
    <ellipse cx="71" cy="79" rx="3" ry="5" fill="#c4aa6a"/>
    <!-- cracked open lid edge -->
    <path d="M18 62 L20 58 L22 62" fill="none" stroke="#5a3e1b" stroke-width="2"/>
    <path d="M82 62 L80 58 L78 62" fill="none" stroke="#5a3e1b" stroke-width="2"/>
    <!-- massive stone fists bursting out -->
    <rect x="0" y="54" width="18" height="16" rx="4" fill="#a8906a"/>
    <rect x="82" y="54" width="18" height="16" rx="4" fill="#a8906a"/>
    <!-- knuckle lines -->
    <line x1="4" y1="58" x2="14" y2="58" stroke="#92814a" stroke-width="1.5"/>
    <line x1="4" y1="62" x2="14" y2="62" stroke="#92814a" stroke-width="1.5"/>
    <line x1="4" y1="66" x2="14" y2="66" stroke="#92814a" stroke-width="1.5"/>
    <line x1="86" y1="58" x2="96" y2="58" stroke="#92814a" stroke-width="1.5"/>
    <line x1="86" y1="62" x2="96" y2="62" stroke="#92814a" stroke-width="1.5"/>
    <line x1="86" y1="66" x2="96" y2="66" stroke="#92814a" stroke-width="1.5"/>
    <!-- gold ornamental lines -->
    <path d="M26 64 Q50 60 74 64" fill="none" stroke="#d97706" stroke-width="1.5"/>
    <path d="M24 90 Q50 86 76 90" fill="none" stroke="#d97706" stroke-width="1.5"/>
  </svg>`,

  // ── Soul Drinker ──────────────────────────────────────────────────────────
  "Soul Drinker": `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- soul aura — purple and dark -->
    <ellipse cx="50" cy="60" rx="34" ry="46" fill="#4c1d95" opacity="0.1"/>
    <ellipse cx="50" cy="60" rx="26" ry="38" fill="#4c1d95" opacity="0.1"/>
    <!-- gaunt body — tall dark robe -->
    <ellipse cx="50" cy="66" rx="18" ry="36" fill="#0f0a1a"/>
    <!-- skeletal face — elongated -->
    <ellipse cx="50" cy="22" rx="11" ry="14" fill="#1a1030"/>
    <!-- six eyes arranged in arc -->
    <ellipse cx="42" cy="18" rx="3" ry="3" fill="#7c3aed"/>
    <ellipse cx="50" cy="16" rx="3" ry="3" fill="#7c3aed"/>
    <ellipse cx="58" cy="18" rx="3" ry="3" fill="#7c3aed"/>
    <ellipse cx="42" cy="18" rx="1.5" ry="1.5" fill="#c4b5fd"/>
    <ellipse cx="50" cy="16" rx="1.5" ry="1.5" fill="#c4b5fd"/>
    <ellipse cx="58" cy="18" rx="1.5" ry="1.5" fill="#c4b5fd"/>
    <!-- lower row eyes -->
    <ellipse cx="43" cy="25" rx="2.5" ry="2.5" fill="#6d28d9"/>
    <ellipse cx="57" cy="25" rx="2.5" ry="2.5" fill="#6d28d9"/>
    <!-- open draining maw -->
    <ellipse cx="50" cy="33" rx="7" ry="8" fill="#2e1065"/>
    <!-- soul being drained — wisps going into mouth -->
    <path d="M30 52 Q40 44 50 33" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.6"/>
    <path d="M70 52 Q60 44 50 33" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.6"/>
    <path d="M22 60 Q36 50 50 33" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.4"/>
    <path d="M78 60 Q64 50 50 33" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.4"/>
    <!-- soul orbs being consumed -->
    <circle cx="30" cy="52" r="4" fill="#c4b5fd" opacity="0.6"/>
    <circle cx="70" cy="52" r="4" fill="#c4b5fd" opacity="0.6"/>
    <circle cx="22" cy="62" r="3" fill="#c4b5fd" opacity="0.4"/>
    <circle cx="78" cy="62" r="3" fill="#c4b5fd" opacity="0.4"/>
    <!-- long wispy arms -->
    <rect x="14" y="50" width="22" height="5" rx="2" fill="#0f0a1a" transform="rotate(-10 25 52)"/>
    <rect x="64" y="50" width="22" height="5" rx="2" fill="#0f0a1a" transform="rotate(10 75 52)"/>
    <!-- wispy lower body -->
    <path d="M36 90 Q30 104 34 116" fill="none" stroke="#0f0a1a" stroke-width="8" stroke-linecap="round"/>
    <path d="M50 94 Q50 108 48 118" fill="none" stroke="#0f0a1a" stroke-width="6" stroke-linecap="round"/>
    <path d="M64 90 Q70 104 66 116" fill="none" stroke="#0f0a1a" stroke-width="8" stroke-linecap="round"/>
  </svg>`,

};
