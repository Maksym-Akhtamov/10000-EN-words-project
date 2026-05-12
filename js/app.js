// ===================== STATE =====================
let sets = [];
let currentSet = 0;
let current = 0;
let flipped = false;
let shuffleOn = false;
let order = [];
let customSets = JSON.parse(localStorage.getItem("customSets") || "[]");
let wrongSet = JSON.parse(localStorage.getItem("wrongSet") || "[]"); // word ids
let wrongSetActive = false; // viewing wrong set
let isAnswerLocked = false;  // true only when correct
let autoPlay = false;
let autoTimer = null;
let autoDelay = 3;
let activeMode = "study"; // study | choice | truefalse | matches | audio | ai | memory | oddoneout | spelling
let direction = "all";  // en-ru | ru-en | all
let keyboardOn = false;
let langMode = "uk";     // both | uk | ru
let choiceDirection = "trans-en"; // trans-en | en-trans
let tfPrompt = null; // current true/false statement for retries
let matchesState = null;
let matchesRound = 0;
const MATCHES_SIZE = 8;
let tutorMode = false;
let tutorQueue = []; // { wordId, dueIn, stage }
let tutorReviewWordId = null;
let tutorReviewStage = null;
let tutorReviewsShown = 0;
let completedSets = [];
let filterMode = "all";
let currentCustomSet = null;
let aiTasks = [];
let aiTasksCache = {};
let aiDifficulty = "medium"; // easy | medium | hard
let memoryDifficulty = "medium"; // easy | medium | hard
let memoryState = null;
let memoryRound = 0;
const MEMORY_SIZE = 1;
let memoryStarted = false;
let lastTapTime = 0;
let lastSpaceTime = 0;
let memoryShowTime = 2; // seconds
let memoryDelayTime = 3; // seconds before showing input fields
let memoryTasks = [];
let memoryTasksCache = {};
let frozenOrder = null;   // locked shuffle order — not changed by star actions

// ===================== CONTEXT MEMORY STATE =====================
let cmDifficulty = "medium";   // easy | medium | hard
let cmInputMode = "choice";    // choice | type
let cmTasks = [];              // cached AI tasks [{sentence, words:[{slot,correct,options}]}]
let cmTasksCache = {};
let cmState = null;            // current round state
let cmRound = 0;
let cmStarted = false;
// show times: easy=7s, medium=5s, hard=3s; pause always 3s (easy=2s)
const CM_TIMES = { easy:{show:7,pause:2}, medium:{show:5,pause:3}, hard:{show:3,pause:3} };

// ===================== INIT =====================
async function init() {
  loadCompletion();
  const res = await fetch("words.json");
  const data = await res.json();
  let gid = 1;
  sets = data.sets.map(s => ({ ...s, words: s.words.map(w => ({ ...w, id: gid++ })) }));
  initOrder();
  renderSets();
  renderCustomSets();
  render();
  setLang("uk");
  updateAllUI();
  // Init AI difficulty buttons
  document.getElementById("aiMediumBtn").classList.add("active");
}

// ===================== ORDER =====================
function initOrder(preserveOrder = false) {
  const words = getWords();
  if (preserveOrder && frozenOrder !== null) {
    // Rebuild order from frozenOrder, keeping only valid indices
    order = frozenOrder.filter(i => i < words.length);
    return;
  }
  order = words.map((_, i) => i);
  if (shuffleOn) {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }
  frozenOrder = [...order];
}

// ===================== DATA =====================
function getWords() {
  if (filterMode === "custom" && currentCustomSet !== null && customSets[currentCustomSet]) {
    const all = sets.flatMap(s => s.words);
    return all.filter(w => customSets[currentCustomSet].words.includes(w.id));
  }
  if (filterMode === "wrong") {
    const all = sets.flatMap(s => s.words);
    return all.filter(w => wrongSet.includes(w.id));
  }
  return sets[currentSet]?.words || [];
}

function getTranslation(word) {
  if (langMode === "uk") return word.uk;
  if (langMode === "ru") return word.ru;
  return null; // means "both"
}

// ===================== RENDER =====================
function render() {
  const words = getWords();
  const matchesTotalRounds = getMatchesTotalRounds();
  const memoryTotalRounds = getMemoryTotalRounds();
  const cmTotal = cmTasks?.length || 0;

  const counterValue = activeMode === "matches"
    ? (matchesTotalRounds ? `${matchesRound + 1} / ${matchesTotalRounds}` : "")
    : activeMode === "memory"
    ? (memoryTotalRounds ? `${memoryRound + 1} / ${memoryTotalRounds}` : "Memory Challenge")
    : activeMode === "contextmemory"
    ? (cmTotal ? `${cmRound + 1} / ${cmTotal}` : "Context Memory")
    : activeMode === "oddoneout"
    ? `Round ${oooRound + 1} / ${OOO_ROUNDS}`
    : (words.length ? `${current + 1} / ${order.length}` : "");

  const progressPct = activeMode === "matches"
    ? (matchesTotalRounds ? ((matchesRound + 1) / matchesTotalRounds * 100) : 0)
    : activeMode === "memory"
    ? (memoryTotalRounds ? ((memoryRound + 1) / memoryTotalRounds * 100) : 0)
    : activeMode === "contextmemory"
    ? (cmTotal ? ((cmRound + 1) / cmTotal * 100) : 0)
    : activeMode === "oddoneout"
    ? ((oooRound + 1) / OOO_ROUNDS * 100)
    : (words.length ? ((current + 1) / order.length * 100) : 0);

  const extraCounter = tutorMode ? ` · reviews ${tutorReviewsShown}` : "";
  document.getElementById("counter").textContent = counterValue + extraCounter;

  // Progress bar with subtle pulse on advance
  const fill = document.getElementById("progressFill");
  fill.style.width = progressPct + "%";
  fill.classList.remove("pulse");
  void fill.offsetWidth;
  fill.classList.add("pulse");
  setTimeout(() => fill.classList.remove("pulse"), 550);

  if (!words.length) {
    document.getElementById("front").innerHTML = `<span style="color:var(--muted);font-size:18px">No words</span>`;
    document.getElementById("back").innerHTML = "";
    return;
  }

  const word = getCurrentWord(words);
  const inner = document.getElementById("cardInner");
  inner.classList.remove("flipped");
  flipped = false;

  // Persistent wrong-set tint
  const inWrong = word && isInWrongSet(word.id);
  ["front","back"].forEach(id => {
    const el = document.getElementById(id);
    el.classList.toggle("in-wrong-set", !!inWrong);
  });

  document.getElementById("result").textContent = "";
  document.getElementById("result").className = "";
  isAnswerLocked = false;
  if (examState) examState.interacted = false;

  // Star
  const starBtn = document.getElementById("starBtn");
  const inCustom = isWordStarred(word.id);
  starBtn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.3 6.6 20.2l1-6.1L3.2 9.8l6.1-.9L12 3.4z"></path></svg>`;
  starBtn.className = "card-icon star-btn" + (inCustom ? " starred" : "");

  // Show card by default, unless we're in contextmemory mode
  document.getElementById("card").style.display = (activeMode === "contextmemory" || activeMode === "oddoneout" || activeMode === "spelling") ? "none" : "flex";

  if (activeMode === "audio") {
    renderAudioMode(word);
  } else if (activeMode === "ai") {
    renderAIMode(word);
  } else if (activeMode === "matches") {
    renderMatchesMode(word, words);
  } else if (activeMode === "memory") {
    renderMemoryMode(word, words);
  } else if (activeMode === "contextmemory") {
    renderCMMode(words);
  } else if (activeMode === "truefalse") {
    renderTrueFalseMode(word, words);
  } else if (activeMode === "choice") {
    renderChoiceMode(word, words);
  } else if (activeMode === "oddoneout") {
    renderOddOneOutMode(words);
  } else if (activeMode === "spelling") {
    renderSpellingMode(word);
  } else {
    renderStudyMode(word);
  }

  // Restore default card click unless audio exam mode sets its own
  if (!(activeMode === "audio" && examState?.phase === 3)) {
    document.getElementById("card").onclick = flipCard;
  }

  updateAllUI();
}

function renderStudyMode(word) {
  const front = document.getElementById("front");
  const back  = document.getElementById("back");

  if (direction === "en-ru") {
    front.innerHTML = `<div class="card-word">${word.en}</div>`;
    back.innerHTML  = buildTransHTML(word);
  } else if (direction === "ru-en") {
    front.innerHTML = buildTransHTML(word);
    back.innerHTML  = `<div class="card-word">${word.en}</div>`;
  } else if (direction === "all") {
    front.innerHTML = `<div class="card-word">${word.en}</div>${buildTransHTML(word)}`;
    back.innerHTML  = front.innerHTML;
  }
}

function buildTransHTML(word) {
  if (langMode === "uk") {
    return `<div class="trans-single">${word.uk}</div>`;
  }
  if (langMode === "ru") {
    return `<div class="trans-single">${word.ru}</div>`;
  }
  // Both — two columns
  return `
    <div class="trans-layout">
      <div class="trans-col">
        <div class="trans-lang-label">UA</div>
        <div class="trans-word">${word.uk}</div>
      </div>
      <div class="trans-divider"></div>
      <div class="trans-col">
        <div class="trans-lang-label">RU</div>
        <div class="trans-word">${word.ru}</div>
      </div>
    </div>`;
}

function renderAudioMode(word) {
  const examWaiting = examState?.phase === 3 && !autoPlay;
  const playCount = examState?.phase === 3 ? (examState.audioPlayCounts[word.id] || 0) : 0;
  const blocked = examState?.phase === 3 && playCount >= 2;

  document.getElementById("front").innerHTML =
    `<div style="font-size:52px;opacity:${blocked ? 0.3 : 0.7}">🔊</div>
     ${blocked ? `<div style="font-size:12px;color:var(--wrong);margin-top:8px">Max plays reached</div>` : ""}
     ${examWaiting ? `<div style="font-size:12px;color:var(--muted);margin-top:8px">Press Start to begin</div>` : ""}
     ${examState?.phase === 3 && !examWaiting ? `<div style="font-size:11px;color:var(--muted);margin-top:12px;opacity:0.7">Tap card to mark as recognised ✓</div>` : ""}`;
  document.getElementById("back").innerHTML = buildTransHTML(word);

  // In exam phase 3: card is tappable to mark recognised
  const card = document.getElementById("card");
  if (examState?.phase === 3 && !examWaiting) {
    card.onclick = flipCardAudio;
  }

  if (!blocked && !examWaiting) {
    if (examState?.phase === 3) {
      examState.audioPlayCounts[word.id] = playCount + 1;
    }
    setTimeout(() => speak(word.en), 250);
  }
}

function renderTrueFalseMode(word, words) {
  if (!tfPrompt || tfPrompt.wordId !== word.id) {
    tfPrompt = buildTrueFalsePrompt(word, words);
  }
  document.getElementById("front").innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center">
      <div class="card-word" style="font-size:30px">${word.en}</div>
      <div style="font-size:14px;color:var(--muted);letter-spacing:0.04em;text-transform:uppercase">matches translation?</div>
      <div class="card-word" style="font-size:28px;color:var(--accent2)">${tfPrompt.translation}</div>
    </div>`;
  document.getElementById("back").innerHTML = "";
  renderTrueFalseOptions(tfPrompt.isCorrect);
}

function buildTrueFalsePrompt(word, words) {
  const correctTranslation = getTranslationLabel(word);
  const useCorrect = Math.random() >= 0.5;
  if (useCorrect || words.length < 2) {
    return { wordId: word.id, translation: correctTranslation, isCorrect: true };
  }

  const wrongCandidates = words
    .filter(w => w.id !== word.id)
    .map(w => getTranslationLabel(w))
    .filter(t => t !== correctTranslation);

  if (!wrongCandidates.length) {
    return { wordId: word.id, translation: correctTranslation, isCorrect: true };
  }

  const wrongTranslation = wrongCandidates[Math.floor(Math.random() * wrongCandidates.length)];
  return { wordId: word.id, translation: wrongTranslation, isCorrect: false };
}

function renderTrueFalseOptions(isCorrect) {
  const container = document.getElementById("testOptions");
  container.innerHTML = "";
  container.style.display = "grid";

  [
    { label: "✅ True", value: "true" },
    { label: "❌ False", value: "false" }
  ].forEach(item => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = item.label;
    btn.dataset.val = item.value;
    btn.onclick = () => handleTrueFalse(item.value, isCorrect, container);
    container.appendChild(btn);
  });
}

function handleTrueFalse(selected, isCorrect, container) {
  const correct = isCorrect ? "true" : "false";
  const words = getWords();
  const word = getCurrentWord(words);
  handleChoice(selected, correct, container, word ? word.id : null);
}

function renderMatchesMode(word, words) {
  const roundWords = getMatchesRoundWords(words);
  const roundSig = roundWords.map(w => w.id).join(",");
  if (!matchesState || matchesState.roundSig !== roundSig) {
    matchesState = buildMatchesState(roundWords);
  }

  document.getElementById("front").innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center">
      <div class="card-word" style="font-size:30px">Match pairs</div>
      <div style="font-size:14px;color:var(--muted)">Pick EN word and matching translation</div>
    </div>`;
  document.getElementById("back").innerHTML = "";
  renderMatchesBoard();
}

function buildMatchesState(roundWords) {
  const pairs = [...roundWords];
  const right = [...pairs].sort(() => Math.random() - 0.5);
  return {
    roundSig: pairs.map(w => w.id).join(","),
    pairs,
    right,
    selectedLeft: null,
    selectedRight: null,
    matchedIds: []
  };
}

function renderMatchesBoard() {
  const container = document.getElementById("testOptions");
  container.style.display = "block";
  container.innerHTML = "";

  if (!matchesState || !matchesState.pairs.length) return;

  const grid = document.createElement("div");
  grid.className = "matches-grid";

  const leftCol = document.createElement("div");
  leftCol.className = "match-col";
  leftCol.innerHTML = `<div class="match-col-title">English</div>`;

  const rightCol = document.createElement("div");
  rightCol.className = "match-col";
  rightCol.innerHTML = `<div class="match-col-title">Translation</div>`;

  matchesState.pairs.forEach(w => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    if (matchesState.selectedLeft === w.id) btn.classList.add("match-selected");
    if (matchesState.matchedIds.includes(w.id)) btn.classList.add("match-done", "disabled");
    btn.textContent = w.en;
    btn.onclick = () => handleMatchPick("left", w.id);
    leftCol.appendChild(btn);
  });

  matchesState.right.forEach(w => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    if (matchesState.selectedRight === w.id) btn.classList.add("match-selected");
    if (matchesState.matchedIds.includes(w.id)) btn.classList.add("match-done", "disabled");
    btn.textContent = getTranslationLabel(w);
    btn.onclick = () => handleMatchPick("right", w.id);
    rightCol.appendChild(btn);
  });

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);
  container.appendChild(grid);
}

function handleMatchPick(side, id) {
  if (!matchesState || matchesState.matchedIds.includes(id)) return;

  if (side === "left") matchesState.selectedLeft = id;
  else matchesState.selectedRight = id;

  renderMatchesBoard();

  if (matchesState.selectedLeft === null || matchesState.selectedRight === null) return;

  if (matchesState.selectedLeft === matchesState.selectedRight) {
    const matchedId = matchesState.selectedLeft;
    matchesState.matchedIds.push(matchedId);
    matchesState.selectedLeft = null;
    matchesState.selectedRight = null;
    showResult("✓ Match!", "correct");
    renderMatchesBoard();

    if (matchesState.matchedIds.length === matchesState.pairs.length) {
      showResult("✓ Great! All pairs matched", "correct");
      isAnswerLocked = true;
      if (!autoPlay) setTimeout(() => nextWord(), 800);
    }
    return;
  }

  showResult("✗ Not a match", "wrong");
  scheduleTutorReview(matchesState.selectedLeft);
  const prevLeft = matchesState.selectedLeft;
  const prevRight = matchesState.selectedRight;
  setTimeout(() => {
    if (matchesState.selectedLeft === prevLeft) matchesState.selectedLeft = null;
    if (matchesState.selectedRight === prevRight) matchesState.selectedRight = null;
    showResult("", "");
    renderMatchesBoard();
  }, 550);
}

function getMatchesTotalRounds() {
  if (activeMode !== "matches") return 0;
  return Math.max(1, Math.ceil(order.length / MATCHES_SIZE));
}

function getMatchesRoundWords(words) {
  if (!words.length) return [];
  const totalRounds = Math.max(1, Math.ceil(order.length / MATCHES_SIZE));
  const safeRound = Math.min(Math.max(matchesRound, 0), totalRounds - 1);
  const start = safeRound * MATCHES_SIZE;
  const end = Math.min(start + MATCHES_SIZE, order.length);
  return order.slice(start, end).map(i => words[i]).filter(Boolean);
}

function resetMatchesProgress() {
  matchesRound = 0;
  matchesState = null;
}

function renderMemoryMode(word, words) {
  const hasMemoryTasks = Array.isArray(memoryTasks) && memoryTasks.some(t => t.setId === sets[currentSet].id);

  if (memoryTasks === null) {
    document.getElementById("front").innerHTML = `<div style="color:var(--muted);font-size:18px">⏳ Generating…</div>`;
    document.getElementById("back").innerHTML = "";
    document.getElementById("testOptions").innerHTML = "";
    document.getElementById("testOptions").style.display = "none";
    return;
  }

  if (!hasMemoryTasks) {
    memoryStarted = false;
    memoryState = null;
    document.getElementById("front").innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center">
        <div style="color:var(--muted);font-size:17px">No memory associations for this set</div>
        <button onclick="event.stopPropagation();startMemoryGeneration()" 
          style="background:var(--accent);color:#fff;padding:12px 24px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;border:none;cursor:pointer">
          ⚡ Generate Memory Associations
        </button>
      </div>`;
    document.getElementById("back").innerHTML = "";
    document.getElementById("testOptions").innerHTML = "";
    document.getElementById("testOptions").style.display = "none";
    return;
  }

  if (!memoryStarted) {
    document.getElementById("front").innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center">
        <div class="card-word" style="font-size:24px">Ready for Memory</div>
        <div style="font-size:14px;color:var(--muted);max-width:420px">Memory associations are prepared. Press start to begin.</div>
        <button onclick="event.stopPropagation();startMemoryRound()" 
          style="background:var(--accent);color:#fff;padding:12px 24px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;border:none;cursor:pointer">
          ▶ Start Memory
        </button>
      </div>`;
    document.getElementById("back").innerHTML = "";
    document.getElementById("testOptions").innerHTML = "";
    document.getElementById("testOptions").style.display = "none";
    return;
  }

  const roundWords = getMemoryRoundWords(words);
  const roundSig = roundWords.map(w => w.id).join(",");
  if (!memoryState || memoryState.roundSig !== roundSig) {
    memoryState = buildMemoryState(roundWords);
  }

  renderMemoryCard();
  document.getElementById("back").innerHTML = "";
  renderMemoryBoard();
}

function buildMemoryState(roundWords) {
  const chains = roundWords.map(word => {
    const baseWord = word.en.toLowerCase().trim();

    // ищем цепочку от AI
    const aiChain = memoryTasks.find(t =>
      t.word.toLowerCase().trim() === baseWord
    );

    let rawChain = aiChain ? aiChain.chain : generateMemoryChain(word.en);

    // нормализация строки
    rawChain = (rawChain || "").trim().toLowerCase();

    // разбиваем
    let parts = rawChain
      .split("->")
      .map(p => p.trim())
      .filter(Boolean);

    // ✅ гарантируем, что первое слово — это слово из сета
    if (parts[0] !== baseWord) {
      parts.unshift(baseWord);
    }

    // ✅ убираем дубли подряд
    parts = parts.filter((p, i) => i === 0 || p !== parts[i - 1]);

    // Chain length = word + N associations (as sent to AI)
    // easy/medium: word + 2 associations = 3 parts, hard: word + 3 associations = 4 parts
    const expectedLength = memoryDifficulty === "hard" ? 4 : 3;

    // ❗ если длина не совпадает — заменяем полностью
    if (parts.length !== expectedLength) {
      console.warn("Invalid chain length, skipping:", parts, "expected:", expectedLength);
      return null;
    }

    const chain = parts.join(" -> ");

    return {
      word: word.en,
      chain,
      parts,
      correct: parts.slice(1) // уже lowercase
    };
  });

  const validChains = chains.filter(Boolean);

  return {
    roundSig: roundWords.map(w => w.id).join(","),
    chains: validChains,
    phase: "show",
    showTime: memoryShowTime * 1000,
    delayTime: memoryDelayTime * 1000,
    inputs: new Array(
      validChains.length * (validChains[0]?.parts.length - 1 || 2)
    ).fill(""),
    startTime: Date.now()
  };
}

function renderMemoryCard() {
  const front = document.getElementById("front");
  if (!memoryState) {
    front.innerHTML = "";
    return;
  }

  let title = "Memory Associations";
  if (memoryState.phase === "show") title = "Memorize the chains";
  if (memoryState.phase === "delay") title = "Remember the first words";
  if (memoryState.phase === "input") title = "Type the associations";

  const lines = memoryState.chains.map(chain => {
    if (memoryState.phase === "show") {
      return `<div class="card-word" style="font-size:24px;line-height:1.2;margin:12px 0">${chain.chain.replace(/ -> /g, " → ")}</div>`;
    }
    const blanks = chain.parts.slice(1).map(() => "___").join(" → ");
return `<div class="card-word" style="font-size:24px;line-height:1.2;margin:12px 0">
  ${chain.parts[0]} → ${blanks}
</div>`;
  }).join("");

  front.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center">
      <div style="font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:0.12em">${title}</div>
      ${lines}
    </div>`;
}

function generateMemoryChain(word) {
  // Simple chains for fallback
  const chains = {
    dog: "bone -> hungry",
    time: "flies -> quickly",
    car: "wheel -> road",
    give: "receive -> share",
    clear: "transparent -> glass"
  };
  return chains[word] || "bone -> hungry"; // fallback
}

let memoryTimer = null;

function renderMemoryBoard() {
  const container = document.getElementById("testOptions");
  container.innerHTML = "";
  if (!memoryState) {
    container.style.display = "none";
    return;
  }

  if (memoryState.phase === "show" || memoryState.phase === "delay") {
    container.style.display = "none";
  }

  if (memoryState.phase === "show") {
    const snap = memoryState;
    if (memoryTimer) clearTimeout(memoryTimer);
    memoryTimer = setTimeout(() => {
      if (memoryState !== snap) return; // state changed, abort
      memoryState.phase = "delay";
      renderMemoryCard();
      renderMemoryBoard();
    }, memoryState.showTime);
    return;
  }

  if (memoryState.phase === "delay") {
    const snap = memoryState;
    if (memoryTimer) clearTimeout(memoryTimer);
    memoryTimer = setTimeout(() => {
      if (memoryState !== snap) return; // state changed, abort
      memoryState.phase = "input";
      renderMemoryCard();
      renderMemoryBoard();
    }, memoryState.delayTime);
    return;
  }

  if (memoryState.phase === "input") {
    container.style.display = "block";
    const form = document.createElement("div");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "center";
    form.style.gap = "18px";
    form.style.padding = "20px";

    memoryState.chains.forEach((chain, idx) => {
      const numAssociations = chain.parts.length - 1;
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.flexDirection = "column";
      row.style.alignItems = "center";
      row.style.gap = "10px";
      row.style.width = "100%";
      row.style.maxWidth = "520px";

      const title = document.createElement("div");
      title.textContent = `${chain.parts[0]} →`;
      title.style.fontSize = "18px";
      title.style.color = "var(--text)";
      row.appendChild(title);

      const inputsDiv = document.createElement("div");
      inputsDiv.style.display = "flex";
      inputsDiv.style.gap = "12px";
      inputsDiv.style.alignItems = "center";
      inputsDiv.style.flexWrap = "wrap";
      inputsDiv.style.width = "100%";
      inputsDiv.style.justifyContent = "center";

      for (let i = 0; i < numAssociations; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `word ${i + 1}`;
        input.autocomplete = "off";
        input.autocorrect = "off";
        input.autocapitalize = "off";
        input.spellcheck = false;
        input.value = memoryState.inputs[idx * numAssociations + i] || "";
        input.className = "memory-input";
        input.style.flex = numAssociations > 2 ? "1 1 auto" : "1 1 100px";
        input.oninput = (e) => {
          memoryState.inputs[idx * numAssociations + i] = e.target.value;
        };
        input.onkeydown = (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            checkMemoryAnswer();
          }
        };
        inputsDiv.appendChild(input);

        if (i < numAssociations - 1) {
          const arrow = document.createElement("span");
          arrow.textContent = "→";
          arrow.style.fontSize = "20px";
          arrow.style.color = "var(--muted)";
          arrow.style.margin = numAssociations > 2 ? "0 6px" : "0 12px";
          inputsDiv.appendChild(arrow);
        }
      }
      row.appendChild(inputsDiv);
      form.appendChild(row);
    });

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Check";
    checkBtn.className = "choice-btn";
    checkBtn.style.width = "auto";
    checkBtn.style.padding = "12px 24px";
    checkBtn.onclick = checkMemoryAnswer;
    form.appendChild(checkBtn);

    container.appendChild(form);
  }
}

function getMemorySize() {
  return 1; // Always 1 word per round, chain length depends on difficulty
}

function getMemoryTotalRounds() {
  return Math.max(1, order.length); // One round per word
}

function getMemoryRoundWords(words) {
  if (!words.length) return [];
  const totalRounds = getMemoryTotalRounds();
  const safeRound = Math.min(Math.max(memoryRound, 0), totalRounds - 1);
  return [words[order[safeRound]]].filter(Boolean);
}

function toggleTutor() {
  tutorMode = !tutorMode;
  if (!tutorMode) {
    tutorQueue = [];
    tutorReviewWordId = null;
    tutorReviewStage = null;
    tutorReviewsShown = 0;
  }
  const sw = document.getElementById("tutorToggle");
  if (sw) sw.classList.toggle("on", tutorMode);
  render();
}

function toggleTutorSwitch() {
  toggleTutor();
}

function scheduleTutorReview(wordId) {
  if (!tutorMode || !wordId) return;
  // Reset this word to the initial tutor step: +1 card, then +3, then +5.
  tutorQueue = tutorQueue.filter(item => item.wordId !== wordId);
  tutorQueue.push({ wordId, dueIn: 1, stage: 0 });
}

function getDueTutorReview() {
  if (!tutorMode || !tutorQueue.length) return null;
  const idx = tutorQueue.findIndex(item => item.dueIn <= 0);
  if (idx === -1) return null;
  return tutorQueue.splice(idx, 1)[0];
}

function tickTutorQueue() {
  if (!tutorMode || !tutorQueue.length) return;
  tutorQueue.forEach(item => { item.dueIn -= 1; });
}

function getCurrentWord(words) {
  if (tutorReviewWordId !== null) {
    const byId = words.find(w => w.id === tutorReviewWordId);
    if (byId) return byId;
    tutorReviewWordId = null;
  }
  return words[order[current]];
}

function renderChoiceMode(word, words) {
  const prompt = choiceDirection === "trans-en"
    ? getTranslationLabel(word)
    : word.en;
  document.getElementById("front").innerHTML = `<div class="card-word" style="font-size:30px">${prompt}</div>`;
  document.getElementById("back").innerHTML = "";
  renderChoiceOptions(word, words);
}

function renderChoiceOptions(word, words) {
  const container = document.getElementById("testOptions");
  container.innerHTML = "";
  container.style.display = "grid";

  const opts = generateOptions(word, words);
  opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = opt;
    btn.dataset.val = opt;
    btn.onclick = () => handleChoice(opt, getChoiceCorrect(word), container, word.id);
    container.appendChild(btn);
  });
}

function handleChoice(selected, correct, container, wordId = null) {
  // Don't lock on wrong — allow retry, but show which was wrong
  const allBtns = container.querySelectorAll(".choice-btn");

  allBtns.forEach(b => {
    if (b.dataset.val === correct) {
      b.classList.add("correct-ans");
    } else if (b.dataset.val === selected && selected !== correct) {
      b.classList.add("wrong-ans");
    }
    if (b.dataset.val !== selected || selected === correct) {
      // Only disable if answered correctly
    }
  });

  if (selected === correct) {
    showResult("✓ Correct!", "correct");
    isAnswerLocked = true;
    if (examState) examState.interacted = true;
    stopExamTimer();
    allBtns.forEach(b => b.classList.add("disabled"));
    allBtns.forEach(b => b.onclick = null);
    // Always advance quickly; reset auto timer if running
    setTimeout(() => {
      nextWord();
      if (autoPlay) { stopAuto(); startAuto(); }
    }, 500);
  } else {
    showResult(`✗ Try again`, "wrong");
    scheduleTutorReview(wordId);
    if (examState) examState.interacted = true; // attempted = interacted
    if (examState && examState.phase >= 1 && examState.phase <= 3) {
      examOnWrongAnswer(wordId, `wrong option selected`);
      return;
    }
    if (examState && examState.phase === 4) {
      // Phase 4: track error, allow 3 before failing
      const words = getWords();
      const word = words.find(w => w.id === wordId);
      const sentence = document.querySelector(".card-word")?.textContent || "";
      examOnPhase4Error({
        sentence: sentence,
        wordId: wordId,
        wordEn: word?.en || "",
        userAnswer: selected,
        correct: correct
      });
    }
    flashWrong(wordId);
    setTimeout(() => {
      allBtns.forEach(b => {
        if (b.dataset.val === selected) b.classList.remove("wrong-ans");
      });
      showResult("", "");
    }, 900);
  }
}

function generateOptions(correctWord, words) {
  const correct = getChoiceCorrect(correctWord);
  const pool = words
    .map(w => getChoiceCorrect(w))
    .filter(w => w !== correct);
  // Shuffle pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const opts = [correct, ...pool.slice(0, 3)];
  // Shuffle opts
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return opts;
}

function getTranslationLabel(word) {
  return langMode === "uk" ? word.uk : langMode === "ru" ? word.ru : `${word.uk} / ${word.ru}`;
}

function getChoiceCorrect(word) {
  return choiceDirection === "trans-en" ? word.en : getTranslationLabel(word);
}

function renderAIMode(word) {
  const front = document.getElementById("front");
  const back  = document.getElementById("back");
  const container = document.getElementById("testOptions");

  if (aiTasks === null) {
    front.innerHTML = `<div style="color:var(--muted);font-size:18px">⏳ Generating…</div>`;
    back.innerHTML = ""; container.innerHTML = "";
    return;
  }

  const task = aiTasks.find(t => t.word === word.en && t.setId === sets[currentSet].id);
  if (!task) {
    const isExamP4 = examState?.phase === 4;
    front.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center">
        <div style="color:var(--muted);font-size:17px">${isExamP4 ? "Generate tasks to begin Phase 4" : "No AI tasks for this set"}</div>
        <button onclick="event.stopPropagation();startAIGeneration()" 
          style="background:var(--accent);color:#fff;padding:12px 24px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;border:none;cursor:pointer">
          ⚡ Generate AI
        </button>
      </div>`;
    back.innerHTML = ""; container.innerHTML = "";
    return;
  }

  // In exam phase 4 with tasks ready — show Start button if not yet started
  if (examState?.phase === 4 && !examState.phase4Started) {
    front.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center">
        <div style="color:var(--accent2);font-size:17px;font-weight:600">✓ Tasks ready!</div>
        <div style="font-size:13px;color:var(--muted)">${aiTasks.filter(t => t.setId === sets[currentSet]?.id).length} questions prepared</div>
        <button onclick="event.stopPropagation();examStartPhase4()" 
          style="background:var(--gold);color:#0c0f14;padding:12px 28px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;border:none;cursor:pointer">
          Start Phase 4 →
        </button>
      </div>`;
    back.innerHTML = ""; container.innerHTML = "";
    return;
  }

  front.innerHTML = `<div class="card-word" style="font-size:22px;line-height:1.5">${task.sentence}</div>`;
  back.innerHTML = "";
  container.innerHTML = "";
  container.style.display = "grid";

  const shuffled = [...task.options].sort(() => Math.random() - 0.5);
  shuffled.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = opt;
    btn.dataset.val = opt;
    btn.onclick = () => handleAIChoice(opt, task.correct, container, task);
    container.appendChild(btn);
  });
}

function handleAIChoice(selected, correct, container, task = null) {
  const allBtns = container.querySelectorAll(".choice-btn");
  allBtns.forEach(b => {
    if (b.dataset.val === correct) b.classList.add("correct-ans");
    else if (b.dataset.val === selected && selected !== correct) b.classList.add("wrong-ans");
  });

  if (selected === correct) {
    showResult("✓ Correct!", "correct");
    isAnswerLocked = true;
    if (examState) examState.interacted = true;
    stopExamTimer();
    allBtns.forEach(b => { b.classList.add("disabled"); b.onclick = null; });
    setTimeout(() => { nextWord(); if (autoPlay) { stopAuto(); startAuto(); } }, 500);
  } else {
    showResult("✗ Try again", "wrong");
    if (examState) examState.interacted = true; // attempted counts as interacted
    const words = getWords();
    const word = getCurrentWord(words);
    scheduleTutorReview(word ? word.id : null);
    flashWrong(word ? word.id : null);
    // Exam phase 4: record proper error with full task data
    if (examState && examState.phase === 4 && task) {
      examOnPhase4Error({
        sentence: task.sentence || "",
        word: task.word || word?.en || "",
        correct: task.correct || correct,
        userAnswer: selected,
        options: task.options || []
      });
    }
    setTimeout(() => {
      allBtns.forEach(b => { if (b.dataset.val === selected) b.classList.remove("wrong-ans"); });
      showResult("", "");
    }, 900);
  }
}

function showResult(text, cls) {
  const el = document.getElementById("result");
  el.textContent = text;
  el.className = cls;
}

function flashWrong(wordId) {
  // Flash card red
  const front = document.getElementById("front");
  const back  = document.getElementById("back");
  [front, back].forEach(el => {
    el.classList.remove("flash-wrong");
    void el.offsetWidth;
    el.classList.add("flash-wrong");
    setTimeout(() => el.classList.remove("flash-wrong"), 620);
  });
  // Flash progress bar red
  const fill = document.getElementById("progressFill");
  fill.classList.remove("flash-wrong");
  void fill.offsetWidth;
  fill.classList.add("flash-wrong");
  setTimeout(() => fill.classList.remove("flash-wrong"), 580);
  // Add to wrong set
  if (wordId) addToWrongSet(wordId);
}

// ===================== NAVIGATION =====================
function nextWord() {
  if (!order.length) return;

  // Exam: if autoplay fires and user hasn't interacted — it's a fail (all phases 1-4)
  if (examState && examState.phase >= 1 && !isAnswerLocked && !examState.interacted) {
    const interactiveModes = ["study", "truefalse", "choice", "audio", "ai"];
    if (interactiveModes.includes(activeMode)) {
      const words = getWords();
      const word = getCurrentWord(words);
      if (examState.phase <= 3) {
        examOnWrongAnswer(word?.id, "no answer given (time ran out)");
        return;
      } else {
        // Phase 4: count as error
        examOnPhase4Error({ wordId: word?.id, wordEn: word?.en || "", sentence: "", userAnswer: "(none)", correct: "(unknown)" });
      }
    }
  }
  // Reset interaction flag for next card
  if (examState) examState.interacted = false;

  if (tutorMode && tutorReviewWordId !== null) {
    const justReviewedWordId = tutorReviewWordId;
    const justReviewedStage = tutorReviewStage;
    tutorReviewWordId = null;
    tutorReviewStage = null;
    if (justReviewedStage !== null && justReviewedStage < 2) {
      const nextGap = [1, 3, 5][justReviewedStage + 1];
      tutorQueue = tutorQueue.filter(item => item.wordId !== justReviewedWordId);
      tutorQueue.push({ wordId: justReviewedWordId, dueIn: nextGap, stage: justReviewedStage + 1 });
    }
  }

  const dueReview = getDueTutorReview();
  if (dueReview) {
    tutorReviewWordId = dueReview.wordId;
    tutorReviewStage = dueReview.stage;
    tutorReviewsShown++;
    tfPrompt = null;
    matchesState = null;
    render();
    return;
  }

  tutorReviewWordId = null;
  tutorReviewStage = null;
  if (activeMode === "matches") {
    const totalRounds = getMatchesTotalRounds();
    matchesRound = (matchesRound + 1) % totalRounds;
    matchesState = null;
    tfPrompt = null;
    tickTutorQueue();
    render();
    return;
  }
  if (activeMode === "memory") {
    if (memoryTimer) { clearTimeout(memoryTimer); memoryTimer = null; }
    const totalRounds = getMemoryTotalRounds();
    memoryRound = (memoryRound + 1) % totalRounds;
    memoryState = null;
    memoryStarted = true;
    tfPrompt = null;
    tickTutorQueue();
    render();
    return;
  }
  current = (current + 1) % order.length;
  tfPrompt = null;
  matchesState = null;
  tickTutorQueue();

  // Exam: when we wrap back to 0, phase is done
  if (examState && examState.phase >= 1 && examState.phase <= 3 && current === 0) {
    stopAuto();
    autoPlay = false;
    document.getElementById("autoBtn").classList.remove("active");
    examNextPhase();
    return;
  }
  // Phase 4 done when wrapped
  if (examState && examState.phase === 4 && current === 0) {
    stopAuto();
    autoPlay = false;
    document.getElementById("autoBtn").classList.remove("active");
    examPhase4Done();
    return;
  }

  render();
  if (keyboardOn) {
    const inp = document.getElementById("answerInput");
    inp.value = "";
    inp.className = "";
    inp.focus();
  }
  // Restart exam timer for new card
  if (examState && autoPlay && examState.phase >= 1 && examState.phase <= 3) {
    startExamTimer(autoDelay);
  }
}

function prevWord() {
  if (!order.length) return;
  tutorReviewWordId = null;
  tutorReviewStage = null;
  if (activeMode === "matches") {
    const totalRounds = getMatchesTotalRounds();
    matchesRound = (matchesRound - 1 + totalRounds) % totalRounds;
    matchesState = null;
    tfPrompt = null;
    render();
    return;
  }
  if (activeMode === "memory") {
    const totalRounds = getMemoryTotalRounds();
    memoryRound = (memoryRound - 1 + totalRounds) % totalRounds;
    memoryState = null;
    memoryStarted = true;
    tfPrompt = null;
    render();
    return;
  }
  current = (current - 1 + order.length) % order.length;
  tfPrompt = null;
  matchesState = null;
  render();
}

// ===================== FLIP =====================
function flipCard() {
  if (activeMode === "choice" || activeMode === "truefalse" || activeMode === "matches" || activeMode === "ai" || activeMode === "audio" || activeMode === "oddoneout" || activeMode === "spelling") return;
  if (activeMode === "study" && examState?.phase === 1) return;
  flipped = !flipped;
  document.getElementById("cardInner").classList.toggle("flipped", flipped);
}

function flipCardAudio() {
  // In audio exam mode: flipping = "I recognised it" = correct interaction
  flipped = !flipped;
  document.getElementById("cardInner").classList.toggle("flipped", flipped);
  if (examState?.phase === 3 && flipped) {
    isAnswerLocked = true;
    examState.interacted = true;
  }
}

// ===================== KEYBOARD =====================
function handleEnter() {
  if (activeMode === "contextmemory" && cmState?.phase === "result") {
    const isLast = cmRound >= cmTasks.length - 1;
    isLast ? restartCM() : nextCMRound();
  } else if (activeMode === "memory" && memoryState && memoryState.phase === "input") {
    checkMemoryAnswer();
  } else if (!isAnswerLocked) {
    checkAnswer();
  } else {
    nextWord();
  }
}

function checkAnswer() {
  const inp = document.getElementById("answerInput");
  const val = inp.value.trim().toLowerCase();
  const words = getWords();
  const activeWord = getCurrentWord(words);
  const correct = activeWord.en.toLowerCase();

  if (val === correct) {
    inp.className = "input-correct";
    showResult("✓ Correct!", "correct");
    isAnswerLocked = true;
    if (examState) examState.interacted = true;
    stopExamTimer();
    setTimeout(() => { inp.value = ""; inp.className = ""; }, 500);
    // Always advance quickly on correct — reset auto timer if running
    setTimeout(() => {
      nextWord();
      if (autoPlay) { stopAuto(); startAuto(); } // reset timer
    }, 500);
  } else {
    inp.className = "input-wrong";
    showResult(`✗  ${correct}`, "wrong");
    scheduleTutorReview(activeWord.id);
    if (examState?.active !== false && examState?.phase >= 1 && examState?.phase <= 3) {
      examOnWrongAnswer(activeWord.id, `"${inp.value || "(empty)"}" instead of "${correct}"`);
      return;
    }
    flashWrong(activeWord.id);
    setTimeout(() => { inp.value = ""; inp.className = ""; }, 700);
  }
}

function checkMemoryAnswer() {
  if (!memoryState || memoryState.phase !== "input") return;
  const inputs = Array.from(document.querySelectorAll(".memory-input"));
  
  let allCorrect = true;
  inputs.forEach((input, idx) => {
    const chainIdx = Math.floor(idx / (memoryState.chains[0]?.parts.length - 1 || 2));
    const wordIdx = idx % (memoryState.chains[0]?.parts.length - 1 || 2);
    const correct = memoryState.chains[chainIdx]?.correct[wordIdx] || "";
    const value = input.value.trim().toLowerCase();
    
    input.classList.remove("input-correct", "input-wrong");
    if (value === correct) {
      input.classList.add("input-correct");
    } else {
      input.classList.add("input-wrong");
      allCorrect = false;
    }
  });

  if (allCorrect) {
    memoryState.phase = "correct";
    document.querySelectorAll(".memory-input").forEach(input => input.disabled = true);
    const checkBtn = document.querySelector("#testOptions button.choice-btn");
    if (checkBtn) checkBtn.disabled = true;
    showResult("✓ Correct!", "correct");
    setTimeout(() => {
      nextWord();
    }, 1000);
    return;
  }

  const correctText = memoryState.chains.map(chain => chain.parts.slice(1).join(" → ")).join("  |  ");
  showResult(`✗ Correct: ${correctText}`, "wrong");
  // flash card — no specific wordId for memory rounds
  flashWrong(null);
}

// ===================== MODES =====================
function selectMode(m) {
  activeMode = m;
  tfPrompt = null;
  resetMatchesProgress();
  memoryState = null;
  tutorReviewWordId = null;
  tutorReviewStage = null;
  // Always clean up OOO timer when switching modes
  if (oooTimer) { clearInterval(oooTimer); oooTimer = null; }

  const coreIds = ["study","choice","truefalse","matches","audio","oddoneout"];
  const aiIds   = ["ai","memory","contextmemory","spelling"];
  const coreLabels = {
    study: "📖 Study", choice: "🎯 Choice", truefalse: "✅ True / False",
    matches: "🧩 Matches", audio: "🔊 Audio", oddoneout: "🔍 Odd One Out"
  };
  const aiLabels = { ai: "⚡ Context Mode", memory: "🧠 Memory Associations", contextmemory: "🔗 Context Memory", spelling: "✍️ Spelling" };

  if (coreIds.includes(m)) {
    document.getElementById("coreTriggerLabel").textContent = coreLabels[m];
    document.getElementById("aiTriggerLabel").textContent  = "— Select —";
    document.getElementById("coreDropdown").classList.remove("open");
  } else {
    document.getElementById("aiTriggerLabel").textContent  = aiLabels[m];
    document.getElementById("coreTriggerLabel").textContent = "— Select —";
    document.getElementById("aiDropdown").classList.remove("open");
  }

  // Hide tutor option in modes where it doesn't apply
  const tutorRow = document.querySelector(".option-row");
  if (tutorRow) tutorRow.style.display = (m === "matches" || m === "memory" || m === "contextmemory") ? "none" : "flex";

  if (m !== "study") { keyboardOn = false; }
  if (m === "ai") loadAITasks();
  if (m === "memory") {
    if (memoryTimer) { clearTimeout(memoryTimer); memoryTimer = null; }
    memoryStarted = false;
    memoryRound = 0;
    loadMemoryTasks();
  }
  if (m === "contextmemory") {
    if (cmState?.timer) { clearInterval(cmState.timer); }
    cmStarted = false;
    cmState = null;
    cmRound = 0;
    loadCMTasks();
  }
  if (m === "oddoneout") {
    if (oooTimer) { clearInterval(oooTimer); oooTimer = null; }
    oooState = null;
    oooStarted = false;
    oooRound = 0;
    oooScore = { correct: 0, total: 0 };
  }
  if (m === "spelling") {
    spellingState = null;
    loadSpellingTasks();
  }

  current = 0;
  initOrder();
  render();
}

function togglePanelCollapse(panelId) {
  const panel = document.getElementById(panelId);
  panel.classList.toggle("collapsed");
}

function toggleDropdown(id) {
  const el = document.getElementById(id);
  const allDropdowns = ["coreDropdown", "aiDropdown", "dungeonDropdown"];
  allDropdowns.filter(d => d !== id).forEach(d => {
    document.getElementById(d)?.classList.remove("open");
  });
  el.classList.toggle("open");
}

function toggleModeDropdown() {
  toggleDropdown("coreDropdown");
}

function setDir(d) {
  direction = d;
  document.getElementById("dirAll").classList.toggle("active",  d === "all");
  document.getElementById("dirEnTr").classList.toggle("active", d === "en-ru");
  document.getElementById("dirTrEn").classList.toggle("active", d === "ru-en");
  // Auto-disable keyboard if direction is no longer Tr → EN
  if (d !== "ru-en" && keyboardOn) {
    keyboardOn = false;
    document.getElementById("kbBtn").classList.remove("active");
  }
  render();
}

function toggleKeyboard() {
  if (!keyboardOn && direction !== "ru-en" && activeMode === "study") {
    // Auto-switch to Tr → EN when enabling keyboard
    setDir("ru-en");
  }
  keyboardOn = !keyboardOn;
  document.getElementById("kbBtn").classList.toggle("active", keyboardOn);
  render();
}

function setLang(l) {
  langMode = l;
  tfPrompt = null;
  if (activeMode !== "matches") matchesState = null;
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(`lang${l.charAt(0).toUpperCase()+l.slice(1)}Btn`).classList.add("active");
  render();
}

function setChoiceDirection(dir) {
  choiceDirection = dir;
  document.getElementById("choiceTransBtn").classList.toggle("active", dir === "trans-en");
  document.getElementById("choiceEnBtn").classList.toggle("active", dir === "en-trans");
  render();
}

function setAIDifficulty(diff) {
  aiDifficulty = diff;
  document.getElementById("aiEasyBtn").classList.toggle("active", diff === "easy");
  document.getElementById("aiMediumBtn").classList.toggle("active", diff === "medium");
  document.getElementById("aiHardBtn").classList.toggle("active", diff === "hard");
  // Load cache for the newly selected difficulty (or show Generate prompt if none)
  if (activeMode === "ai") {
    loadAITasks();
  }
}

// ===================== SHUFFLE =====================
function toggleShuffle() {
  shuffleOn = !shuffleOn;
  frozenOrder = null;
  current = 0;
  resetMatchesProgress();
  tutorQueue = [];
  tutorReviewWordId = null;
  tutorReviewStage = null;
  tutorReviewsShown = 0;
  initOrder();
  const btn = document.getElementById("shuffleBtn");
  btn.classList.toggle("active", shuffleOn);
  // Spin animation
  btn.classList.remove("spinning");
  void btn.offsetWidth; // reflow to restart
  btn.classList.add("spinning");
  setTimeout(() => btn.classList.remove("spinning"), 460);
  render();
}

// ===================== AUTO =====================
function toggleAuto() {
  autoPlay = !autoPlay;
  autoPlay ? startAuto() : stopAuto();
  document.getElementById("autoBtn").classList.toggle("active", autoPlay);
  document.getElementById("autoBtn").textContent = autoPlay ? `▶ Auto ${autoDelay}s` : "▶ Auto";
}

function startAuto() {
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(() => nextWord(), autoDelay * 1000);
  if (examState && examState.phase >= 1 && examState.phase <= 3) {
    startExamTimer(autoDelay);
  }
}

function stopAuto() {
  clearInterval(autoTimer);
  autoTimer = null;
}

function setDelay(s) {
  autoDelay = s;
  document.getElementById("delayTrigger").textContent = s + "s";
  document.getElementById("delayDropdown").classList.remove("open");
  if (autoPlay) startAuto();
  if (autoPlay) document.getElementById("autoBtn").textContent = `▶ Auto ${autoDelay}s`;
}

function toggleDelayDropdown() {
  document.getElementById("delayDropdown").classList.toggle("open");
}

function toggleMemoryTimeDropdown() {
  document.getElementById("memoryTimeDropdown").classList.toggle("open");
}

function setMemoryTime(s) {
  memoryShowTime = s;
  document.getElementById("memoryTimeTrigger").textContent = s + "s";
  document.getElementById("memoryTimeDropdown").classList.remove("open");
}

function setMemoryDifficulty(diff) {
  memoryDifficulty = diff;
  const times = {
    easy:   { show: 4, delay: 2 },
    medium: { show: 2, delay: 3 },
    hard:   { show: 4, delay: 4 }
  };
  memoryShowTime = times[diff].show;
  memoryDelayTime = times[diff].delay;
  document.getElementById("memoryEasyBtn").classList.toggle("active", diff === "easy");
  document.getElementById("memoryMediumBtn").classList.toggle("active", diff === "medium");
  document.getElementById("memoryHardBtn").classList.toggle("active", diff === "hard");
  // Load from cache for this difficulty, or show generate prompt — same as AI mode
  if (activeMode === "memory") {
    if (memoryTimer) { clearTimeout(memoryTimer); memoryTimer = null; }
    memoryStarted = false;
    memoryState = null;
    memoryRound = 0;
    loadMemoryTasks();
  }
}

// ===================== SETS =====================
function renderSets() {
  const c = document.getElementById("sets");
  c.innerHTML = "";
  sets.forEach((set, idx) => {
    if (filterMode === "notDone" && completedSets.includes(set.id)) return;
    const btn = document.createElement("button");
    btn.className = "set-btn" +
      (idx === currentSet ? " active" : "") +
      (completedSets.includes(set.id) ? " done" : "");
    btn.textContent = set.id;
    btn.onclick = () => selectSet(idx);
    c.appendChild(btn);
  });
}

function selectSet(idx) {
  currentSet = idx;
  current = 0;
  filterMode = "all";
  currentCustomSet = null;
  frozenOrder = null;
  tfPrompt = null;
  resetMatchesProgress();
  tutorQueue = [];
  tutorReviewWordId = null;
  tutorReviewStage = null;
  tutorReviewsShown = 0;
  if (activeMode === "ai") {
    const cached = loadAICache();
    aiTasks = cached || [];
  }
  if (activeMode === "memory") {
    memoryStarted = false;
    memoryRound = 0;
    const cached = loadMemoryCache();
    memoryTasks = cached || [];
  }
  if (activeMode === "contextmemory") {
    if (cmState?.timer) { clearInterval(cmState.timer); }
    cmStarted = false; cmState = null; cmRound = 0;
    loadCMTasks();
  }
  initOrder();
  renderSets();
  render();
}

// ===================== STAR / CUSTOM =====================
function isWordStarred(id) {
  return customSets.some(s => s.words.includes(id));
}

function toggleStar() {
  const word = getCurrentWord(getWords());
  if (!word) return;
  const id = word.id;

  if (isWordStarred(id)) {
    customSets.forEach(s => { s.words = s.words.filter(x => x !== id); });
    customSets = customSets.filter(s => s.words.length > 0);
  } else {
    if (!customSets.length) customSets.push({ id: 1, words: [] });
    let target = customSets.find(s => s.words.length < 50);
    if (!target) { target = { id: customSets.length + 1, words: [] }; customSets.push(target); }
    target.words.push(id);
  }

  localStorage.setItem("customSets", JSON.stringify(customSets));
  scheduleSyncToCloud();
  renderCustomSets();

  // Update star WITHOUT re-initialising order
  const starBtn = document.getElementById("starBtn");
  const nowStarred = isWordStarred(id);
  starBtn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.3 6.6 20.2l1-6.1L3.2 9.8l6.1-.9L12 3.4z"></path></svg>`;
  starBtn.className = "card-icon star-btn" + (nowStarred ? " starred" : "");
}

function renderCustomSets() {
  const c = document.getElementById("customSetsPanel");
  c.innerHTML = "";
  customSets.forEach((set, idx) => {
    const btn = document.createElement("button");
    btn.className = "custom-set-btn" + (idx === currentCustomSet && filterMode === "custom" ? " active" : "");
    btn.textContent = `⭐ Review ${idx + 1} (${set.words.length})`;
    btn.onclick = () => openCustomSet(idx);
    c.appendChild(btn);
  });
  renderWrongSetBtn();
}

// ===================== WRONG SET =====================
function addToWrongSet(wordId) {
  if (!wordId || wrongSet.includes(wordId)) return;
  wrongSet.push(wordId);
  localStorage.setItem("wrongSet", JSON.stringify(wrongSet));
  scheduleSyncToCloud();
  renderWrongSetBtn();
}

function removeFromWrongSet(wordId) {
  wrongSet = wrongSet.filter(id => id !== wordId);
  localStorage.setItem("wrongSet", JSON.stringify(wrongSet));
  scheduleSyncToCloud();
  renderWrongSetBtn();
}

function isInWrongSet(wordId) {
  return wrongSet.includes(wordId);
}

function renderWrongSetBtn() {
  const c = document.getElementById("customSetsPanel");
  // Remove existing wrong-set button if any
  const old = document.getElementById("wrongSetBtn");
  if (old) old.remove();
  if (!wrongSet.length) return;
  const btn = document.createElement("button");
  btn.id = "wrongSetBtn";
  btn.className = "wrong-set-btn" + (wrongSetActive ? " active" : "");
  btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Wrong (${wrongSet.length})`;
  btn.onclick = toggleWrongSet;
  c.appendChild(btn);
}

function clearWrongSet() {
  if (!confirm("Clear all Wrong answers?")) return;
  wrongSet = [];
  wrongSetActive = false;
  filterMode = "all";
  localStorage.setItem("wrongSet", JSON.stringify(wrongSet));
  scheduleSyncToCloud();
  current = 0; frozenOrder = null;
  initOrder(); render(); renderCustomSets(); updateAllUI();
}

function toggleWrongSet() {
  wrongSetActive = !wrongSetActive;
  if (wrongSetActive) {
    filterMode = "wrong";
    currentCustomSet = null;
  } else {
    filterMode = "all";
  }
  current = 0; frozenOrder = null; tfPrompt = null;
  resetMatchesProgress(); tutorQueue = [];
  tutorReviewWordId = null; tutorReviewStage = null; tutorReviewsShown = 0;
  initOrder(); render(); renderWrongSetBtn(); updateAllUI();
}

function openCustomSet(idx) {
  currentCustomSet = idx;
  filterMode = "custom";
  current = 0;
  frozenOrder = null;
  tfPrompt = null;
  resetMatchesProgress();
  tutorQueue = [];
  tutorReviewWordId = null;
  tutorReviewStage = null;
  tutorReviewsShown = 0;
  initOrder();
  render();
  renderCustomSets();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearCustomSet() {
  if (currentCustomSet === null || !confirm("Clear this Review set?")) return;
  customSets.splice(currentCustomSet, 1);
  currentCustomSet = null;
  filterMode = "all";
  localStorage.setItem("customSets", JSON.stringify(customSets));
  scheduleSyncToCloud();
  initOrder(); render(); renderCustomSets(); updateAllUI();
}

// ===================== COMPLETION =====================
function loadCompletion() {
  const s = localStorage.getItem("completedSets");
  if (s) completedSets = JSON.parse(s);
}

// ===================== SPEAK =====================
function speak(text) {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = 0.9;
  speechSynthesis.speak(u);
}

function speakCurrent() {
  const words = getWords();
  if (!words.length) return;
  const w = getCurrentWord(words);
  if (!w) return;
  if (examState?.phase === 3) {
    const count = examState.audioPlayCounts[w.id] || 0;
    if (count >= 2) return; // blocked
    examState.audioPlayCounts[w.id] = count + 1;
  }
  speak(w.en);
}

// ===================== AI =====================
function getAIKey() { return `aiTasks_set_${sets[currentSet].id}_diff_${aiDifficulty}`; }

function loadAICache() {
  const key = getAIKey();
  if (aiTasksCache[key]) return aiTasksCache[key];
  const s = localStorage.getItem(key);
  if (s) { try { const p = JSON.parse(s); aiTasksCache[key] = p; return p; } catch(e){} }
  return null;
}

function saveAICache(tasks) {
  const key = getAIKey();
  aiTasksCache[key] = tasks;
  localStorage.setItem(key, JSON.stringify(tasks));
}

async function loadAITasks() {
  const cached = loadAICache();
  if (cached) { aiTasks = cached; render(); return; }
  aiTasks = []; render();
}

async function generateAIBatch(words) {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ words: words.map(w => w.en), difficulty: aiDifficulty })
  });
  if (!res.ok) throw new Error("Server " + res.status);
  return res.json();
}

async function startAIGeneration() {
  aiTasks = null; render();
  const words = getWords();
  const batches = [];
  for (let i = 0; i < words.length; i += 10) batches.push(words.slice(i, i + 10));
  try {
    const results = await Promise.all(batches.map(b => generateAIBatch(b)));
    const all = results.flat();
    if (!all.length) { aiTasks = []; render(); return; }
    const setId = sets[currentSet].id;
    aiTasks = all.map(t => ({ ...t, setId }));
    saveAICache(aiTasks);
    render();
  } catch(e) {
    console.error(e);
    aiTasks = []; render();
  }
}

function regenerateAI() {
  localStorage.removeItem(getAIKey());
  delete aiTasksCache[getAIKey()];
  startAIGeneration();
}

// ===================== MEMORY =====================
function getMemoryKey() { return `memoryTasks_set_${sets[currentSet].id}_diff_${memoryDifficulty}`; }

function loadMemoryCache() {
  const key = getMemoryKey();
  if (memoryTasksCache[key]) return memoryTasksCache[key];
  const s = localStorage.getItem(key);
  if (s) { try { const p = JSON.parse(s); memoryTasksCache[key] = p; return p; } catch(e){} }
  return null;
}

function saveMemoryCache(tasks) {
  const key = getMemoryKey();
  memoryTasksCache[key] = tasks;
  localStorage.setItem(key, JSON.stringify(tasks));
}

async function loadMemoryTasks() {
  const cached = loadMemoryCache();
  memoryStarted = false;
  memoryState = null;
  if (cached) { memoryTasks = cached; render(); return; }
  memoryTasks = []; render();
}

async function generateMemoryBatch(words) {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ words: words.map(w => w.en), type: "memory", difficulty: memoryDifficulty })
  });
  if (!res.ok) throw new Error("Server " + res.status);
  return res.json();
}

async function startMemoryGeneration() {
  memoryTasks = null;
  memoryStarted = false;
  memoryState = null;
  render();
  const words = getWords();
  if (!words.length) { memoryTasks = []; render(); return; }
  
  const batches = [];
  for (let i = 0; i < words.length; i += 10) batches.push(words.slice(i, i + 10));
  try {
    const results = await Promise.all(batches.map(b => generateMemoryBatch(b)));
    const all = results.flat();
    if (!all.length) { memoryTasks = []; render(); return; }
    const setId = sets[currentSet].id;
    memoryTasks = all.map(t => ({ ...t, setId }));
    saveMemoryCache(memoryTasks);
    render();
  } catch(e) {
    console.error(e);
    memoryTasks = [];
    render();
  }
}

function regenerateMemory() {
  localStorage.removeItem(getMemoryKey());
  delete memoryTasksCache[getMemoryKey()];
  startMemoryGeneration();
}

// ===================== CONTEXT MEMORY =====================
function getCMKey() { return `cmTasks_set_${sets[currentSet].id}_diff_${cmDifficulty}`; }

function loadCMCache() {
  const key = getCMKey();
  if (cmTasksCache[key]) return cmTasksCache[key];
  const s = localStorage.getItem(key);
  if (s) { try { const p = JSON.parse(s); cmTasksCache[key] = p; return p; } catch(e){} }
  return null;
}

function saveCMCache(tasks) {
  const key = getCMKey();
  cmTasksCache[key] = tasks;
  localStorage.setItem(key, JSON.stringify(tasks));
}

function loadCMTasks() {
  // Clear any old cache that has pre-remap slot numbering
  const cached = loadCMCache();
  cmStarted = false;
  cmState = null;
  if (cached) { cmTasks = cached; render(); return; }
  cmTasks = []; render();
}

async function fetchCMBatch(fourWords) {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ words: fourWords.map(w => w.en), type: "contextmemory", difficulty: cmDifficulty })
  });
  if (!res.ok) throw new Error("Server " + res.status);
  const data = await res.json();

  let sentence = data.sentence || "";
  const apiWords = data.words || [];

  // Step 1: Build sentence with [N] placeholders in left-to-right order
  // Find each correct word's position in the sentence and replace with [N]
  // Sort words by position of appearance in sentence
  const wordPositions = [];
  const sentenceLower = sentence.toLowerCase();

  for (const w of apiWords) {
    const regex = new RegExp(`\\b${w.correct.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    const match = sentenceLower.search(regex);
    if (match !== -1) {
      wordPositions.push({ ...w, pos: match });
    } else {
      wordPositions.push({ ...w, pos: 9999 }); // not found — push to end
    }
  }

  // Sort by position in sentence (left to right)
  wordPositions.sort((a, b) => a.pos - b.pos);

  // Assign new slots 1-4 in left-to-right order
  wordPositions.forEach((w, idx) => { w.newSlot = idx + 1; });

  // Replace words in sentence with [N] — process right-to-left to preserve positions
  const sorted = [...wordPositions].sort((a, b) => b.pos - a.pos);
  for (const w of sorted) {
    const regex = new RegExp(`\\b${w.correct.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    sentence = sentence.replace(regex, `[${w.newSlot}]`);
  }

  // If sentence still has old [N] placeholders from AI (instead of real words), remap them
  if (sentence.match(/\[\d+\]/)) {
    const matches = [...sentence.matchAll(/\[(\d+)\]/g)];
    const appearOrder = [];
    for (const m of matches) {
      const n = parseInt(m[1]);
      if (!appearOrder.includes(n)) appearOrder.push(n);
    }
    const remap = {};
    appearOrder.forEach((old, i) => { remap[old] = i + 1; });
    // Replace all at once using a temp marker to avoid double-replace
    sentence = sentence.replace(/\[(\d+)\]/g, (_, n) => `__SLOT${remap[parseInt(n)]}__`);
    sentence = sentence.replace(/__SLOT(\d+)__/g, (_, n) => `[${n}]`);
    // Remap words slots too
    wordPositions.forEach(w => {
      w.newSlot = remap[w.newSlot] ?? w.newSlot;
    });
  }

  const remappedWords = wordPositions.map(w => ({
    slot: w.newSlot,
    correct: w.correct,
    options: w.options || [w.correct]
  }));

  return {
    sentence,
    words: remappedWords,
    wordIds: fourWords.map(w => w.id),
    setId: sets[currentSet].id
  };
}

async function startCMGeneration() {
  cmTasks = null;
  cmStarted = false;
  cmState = null;
  render();
  const words = getWords();
  if (!words.length) { cmTasks = []; render(); return; }

  // Shuffle words before batching — different groups each generation
  const shuffled = [...words].sort(() => Math.random() - 0.5);

  // batch into groups of 4
  const batches = [];
  for (let i = 0; i + 3 < shuffled.length; i += 4) batches.push(shuffled.slice(i, i + 4));
  // if leftover words (1-3), skip them — need exactly 4

  try {
    const results = await Promise.all(batches.map(b => fetchCMBatch(b)));
    cmTasks = results.filter(Boolean);
    saveCMCache(cmTasks);
    render();
  } catch(e) {
    console.error("CM generation error:", e);
    cmTasks = [];
    render();
  }
}

function regenerateCM() {
  localStorage.removeItem(getCMKey());
  delete cmTasksCache[getCMKey()];
  startCMGeneration();
}

function setCMDifficulty(diff) {
  cmDifficulty = diff;
  document.getElementById("cmEasyBtn").classList.toggle("active", diff === "easy");
  document.getElementById("cmMediumBtn").classList.toggle("active", diff === "medium");
  document.getElementById("cmHardBtn").classList.toggle("active", diff === "hard");
  if (activeMode === "contextmemory") {
    if (cmState?.timer) { clearInterval(cmState.timer); }
    cmStarted = false; cmState = null; cmRound = 0;
    loadCMTasks();
  }
}

function setCMInput(mode) {
  cmInputMode = mode;
  document.getElementById("cmChoiceBtn").classList.toggle("active", mode === "choice");
  document.getElementById("cmTypeBtn").classList.toggle("active", mode === "type");
  if (activeMode === "contextmemory" && cmState) {
    cmState.phase = "input";
    cmState.inputs = new Array(4).fill("");
    cmState.selected = null;
    cmState.activeSlot = 1;
    render();
  }
}

function renderCMMode(words) {
  const container = document.getElementById("testOptions");
  const card = document.getElementById("card");
  card.style.display = "none";
  container.style.display = "block";

  // No tasks yet — show generate button
  if (cmTasks === null) {
    container.innerHTML = `<div class="memory-loading">⏳ Generating Context Memory tasks…</div>`;
    return;
  }
  if (!cmTasks.length) {
    container.innerHTML = `
      <div class="memory-generate-wrap">
        <div class="memory-generate-title">🔗 Context Memory</div>
        <div class="memory-generate-desc">AI creates sentences using 4 words from this set.<br>Memorize the words, then fill in the blanks.</div>
        <button onclick="event.stopPropagation();startCMGeneration()"
          style="margin-top:16px;padding:12px 28px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer">
          ⚡ Generate Context Memory
        </button>
      </div>`;
    return;
  }

  if (!cmStarted) {
    const total = cmTasks.length;
    container.innerHTML = `
      <div class="memory-generate-wrap">
        <div class="memory-generate-title">🔗 Context Memory</div>
        <div class="memory-generate-desc">${total} rounds ready · ${cmDifficulty} difficulty<br>You'll see 4 words, then fill them into a sentence.</div>
        <button onclick="startCMRound()"
          style="margin-top:16px;padding:12px 28px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer">
          ▶ Start
        </button>
      </div>`;
    return;
  }

  const task = cmTasks[cmRound % cmTasks.length];
  if (!cmState || cmState.taskIdx !== cmRound % cmTasks.length) {
    cmState = buildCMState(task);
  }

  renderCMPhase(task);
}

function buildCMState(task) {
  const times = CM_TIMES[cmDifficulty];
  const words = [...task.words].sort((a, b) => a.slot - b.slot);
  return {
    taskIdx: cmRound % cmTasks.length,
    phase: "show",
    showTime: times.show * 1000,
    pauseTime: times.pause * 1000,
    inputs: new Array(words.length).fill(""),
    selected: null,
    activeSlot: 1,   // slot number (1-4), not array index
    answered: [],
    timer: null,
    words
  };
}

function renderCMPhase(task) {
  const container = document.getElementById("testOptions");
  const s = cmState;

  if (s.phase === "show") {
    // Show words in shuffled order (not in sentence order) to make memorization harder
    const shuffledWords = [...cmState.words].sort(() => Math.random() - 0.5);
    const wordList = shuffledWords.map(w =>
      `<div style="padding:12px 0;font-size:24px;font-weight:700;color:var(--text);letter-spacing:0.02em">${w.correct}</div>`
    ).join("");
    container.innerHTML = `
      <div style="text-align:center;padding:24px 0">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted);margin-bottom:24px">Memorize these 4 words</div>
        ${wordList}
        <div id="cmTimer" style="margin-top:24px;font-size:13px;color:var(--muted)"></div>
      </div>`;
    startCMTimer(s.showTime, "cmTimer", () => {
      s.phase = "pause";
      renderCMPhase(task);
    });

  } else if (s.phase === "pause") {
    // Show sentence with blanks ___ instead of words
    const sentenceWithBlanks = task.sentence
      .replace(/\[1\]/g, '<span style="color:var(--accent);font-weight:700;background:rgba(59,130,246,0.1);padding:2px 6px;border-radius:4px">___</span>')
      .replace(/\[2\]/g, '<span style="color:var(--accent);font-weight:700;background:rgba(59,130,246,0.1);padding:2px 6px;border-radius:4px">___</span>')
      .replace(/\[3\]/g, '<span style="color:var(--accent);font-weight:700;background:rgba(59,130,246,0.1);padding:2px 6px;border-radius:4px">___</span>')
      .replace(/\[4\]/g, '<span style="color:var(--accent);font-weight:700;background:rgba(59,130,246,0.1);padding:2px 6px;border-radius:4px">___</span>');
    
    container.innerHTML = `
      <div style="text-align:center;padding:24px 0">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted);margin-bottom:24px">Remember where to place the words</div>
        <div style="font-size:18px;line-height:1.8;color:var(--text);max-width:560px;margin:0 auto;padding:0 16px">
          ${sentenceWithBlanks}
        </div>
        <div id="cmTimer" style="margin-top:24px;font-size:13px;color:var(--muted)"></div>
      </div>`;
    startCMTimer(s.pauseTime, "cmTimer", () => {
      s.phase = "input";
      s.activeSlot = 1;  // start from slot 1
      renderCMPhase(task);
    });

  } else if (s.phase === "input") {
    renderCMInput(task);

  } else if (s.phase === "result") {
    renderCMResult(task);
  }
}

function startCMTimer(ms, elId, cb) {
  if (cmState && cmState.timer) clearInterval(cmState.timer);
  const end = Date.now() + ms;
  const interval = setInterval(() => {
    // Guard: if cmState was reset (mode switch, set change), stop timer
    if (!cmState || cmState.timer !== interval) {
      clearInterval(interval);
      return;
    }
    const el = document.getElementById(elId);
    const left = Math.ceil((end - Date.now()) / 1000);
    if (el) el.textContent = left + "s";
    if (Date.now() >= end) {
      clearInterval(interval);
      cmState.timer = null;
      cb();
    }
  }, 200);
  if (cmState) cmState.timer = interval;
}

function renderCMInput(task) {
  const container = document.getElementById("testOptions");
  const s = cmState;

  // task.sentence already has [1][2][3][4] placeholders in left-to-right order
  // Always derive activeSlot from first unanswered slot (sorted = left-to-right)
  const unanswered = cmState.words
    .filter(w => !s.answered.find(a => a.slot === w.slot))
    .sort((a, b) => a.slot - b.slot);
  if (unanswered.length > 0) {
    s.activeSlot = unanswered[0].slot; // always sync to first unanswered
  }

  // Build sentence HTML — replace [1][2][3][4] with styled spans
  let sentenceHtml = task.sentence;
  for (let i = 1; i <= 4; i++) {
    const isActive = s.activeSlot === i;
    const answered = s.answered.find(a => a.slot === i);
    let content;
    if (answered) {
      const ok = answered.given === answered.correct;
      content = `<span style="color:${ok ? "#4ade80" : "#f87171"};font-weight:700;border-bottom:2px solid ${ok ? "#4ade80" : "#f87171"};padding:0 4px">${answered.given}</span>`;
    } else if (isActive) {
      content = `<span style="display:inline-block;min-width:80px;border-bottom:2px solid var(--accent);padding:0 4px;color:var(--accent);font-weight:600">___</span>`;
    } else {
      content = `<span style="display:inline-block;min-width:60px;border-bottom:2px solid var(--muted);padding:0 4px;color:var(--muted)">___</span>`;
    }
    sentenceHtml = sentenceHtml.replace(`[${i}]`, content);
  }

  const currentWord = unanswered[0];

  let inputHtml = "";
  if (currentWord && cmInputMode === "choice") {
    let options = currentWord.options.filter(opt => !/^wrong\d*$/i.test(opt));

// fallback если API прислал мусор
if (options.length < 2) {
  options = [
    currentWord.correct,
    ...getWords()
      .filter(w => w.en !== currentWord.correct)
      .slice(0, 3)
      .map(w => w.en)
  ];
}

const shuffled = [...options].sort(() => Math.random() - 0.5);
    inputHtml = `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:16px">
      ${shuffled.map(opt => `
        <button onclick="submitCMAnswer(${currentWord.slot}, '${opt}', event)"
          style="padding:10px 20px;background:var(--surface2);border:1px solid var(--border2);color:var(--text);border-radius:10px;font-size:15px;font-weight:500;cursor:pointer;transition:all 0.15s"
          onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border2)'">
          ${opt}
        </button>`).join("")}
    </div>`;
  } else if (currentWord && cmInputMode === "type") {
    inputHtml = `<div style="display:flex;gap:8px;margin-top:16px;justify-content:center">
      <input id="cmTypeInput" type="text" placeholder="Type word ${currentWord.slot}…"
        style="padding:10px 16px;background:var(--surface2);border:1px solid var(--border2);color:var(--text);border-radius:10px;font-size:15px;font-family:inherit;outline:none;width:200px"
        onkeydown="if(event.key==='Enter')submitCMAnswer(${currentWord.slot}, this.value.trim(), event)" />
      <button onclick="submitCMAnswer(${currentWord.slot}, document.getElementById('cmTypeInput').value.trim(), event)"
        style="padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer">
        →
      </button>
    </div>`;
  }

  container.innerHTML = `
    <div style="padding:8px 0">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted);margin-bottom:16px;text-align:center">Fill in the blanks</div>
      <div style="font-size:17px;line-height:2;color:var(--text);text-align:center;padding:0 8px">${sentenceHtml}</div>
      ${inputHtml}
    </div>`;

  if (cmInputMode === "type") {
    setTimeout(() => document.getElementById("cmTypeInput")?.focus(), 50);
  }
}

function submitCMAnswer(slot, given, e) {
  e?.stopPropagation();
  if (!given) return;
  const task = cmTasks[cmRound % cmTasks.length];
  const word = cmState.words.find(w => w.slot === slot);
  if (!word) return;

  cmState.answered.push({ slot, correct: word.correct.toLowerCase().trim(), given: given.toLowerCase().trim() });

  const unanswered = cmState.words
    .filter(w => !cmState.answered.find(a => a.slot === w.slot))
    .sort((a, b) => a.slot - b.slot);
  if (unanswered.length > 0) {
    renderCMInput(task);
  } else {
    // All answered — show result
    cmState.phase = "result";
    renderCMPhase(task);
  }
}

function renderCMResult(task) {
  const container = document.getElementById("testOptions");
  const correct = cmState.answered.filter(a => a.given === a.correct).length;
  const total = cmState.answered.length;
  const allCorrect = correct === total;

  if (!allCorrect) flashWrong(null);

  // ── EXAM PHASE 4 HOOK ──
  if (examState && examState.phase === 4) {
    const wrongAnswers = cmState.answered.filter(a => a.given !== a.correct);
    wrongAnswers.forEach(a => {
      examOnCMResult(true, {
        sentence: task.sentence,
        slot: a.slot,
        correct: a.correct,
        userAnswer: a.given,
        options: task.words.find(w => w.slot === a.slot)?.options || []
      });
    });
    if (allCorrect) examOnCMResult(false, null);
  }

  const rows = cmState.answered.map(a => {
    const ok = a.given === a.correct;
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
      <span style="font-size:16px">${ok ? "✅" : "❌"}</span>
      <span style="color:var(--muted);font-size:13px">Slot ${a.slot}:</span>
      <span style="font-weight:600;color:var(--text)">${a.correct}</span>
      ${!ok ? `<span style="color:var(--muted);font-size:13px">← you: ${a.given}</span>` : ""}
    </div>`;
  }).join("");

  const isLast = cmRound >= cmTasks.length - 1;

  container.innerHTML = `
    <div style="padding:8px 0">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:28px;margin-bottom:6px">${allCorrect ? "🎉" : "💪"}</div>
        <div style="font-size:20px;font-weight:700;color:var(--text)">${correct} / ${total} correct</div>
      </div>
      <div style="margin-bottom:20px">${rows}</div>
      <div style="display:flex;gap:8px;justify-content:center">
        ${!isLast ? `<button onclick="nextCMRound()"
          style="padding:12px 28px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer">
          Next Round →
        </button>` : `<button onclick="restartCM()"
          style="padding:12px 28px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer">
          🔄 Restart
        </button>`}
      </div>
    </div>`;
}

function startCMRound() {
  cmStarted = true;
  cmState = null;
  render();
}

function nextCMRound() {
  cmRound++;
  cmState = null;
  // In exam phase 4 check if all rounds done
  if (examState && examState.phase === 4 && cmRound >= cmTasks.length) {
    examPhase4Done();
    return;
  }
  render();
}

function restartCM() {
  cmRound = 0;
  cmState = null;
  cmStarted = true;
  render();
}

function startMemoryRound() {
  memoryStarted = true;
  memoryState = null;
  render();
}


// ===================== ODD ONE OUT MODE =====================
let oooState = null;
let oooStarted = false;
let oooScore = { correct: 0, total: 0 };
let oooTimer = null;
let oooRound = 0;          // which round (0-9 for 10 rounds)
const OOO_ROUNDS = 10;     // total rounds per session
const OOO_SHOW_TIME = 800;   // ms to show cards
const OOO_COUNT = 10;         // cards to show

function renderOddOneOutMode(words) {
  const container = document.getElementById("testOptions");
  container.style.display = "block";

  if (words.length < OOO_COUNT + 1) {
    container.innerHTML = `
      <div class="ooo-wrap">
        <div style="color:var(--muted);font-size:15px;text-align:center">
          Need at least ${OOO_COUNT + 1} words in this set for Odd One Out.
        </div>
      </div>`;
    return;
  }

  if (!oooStarted) {
    const isNewSession = oooRound === 0;
    container.innerHTML = `
      <div class="ooo-wrap">
        <div style="font-size:48px;text-align:center">🔍</div>
        <div class="card-word" style="font-size:22px;text-align:center">Odd One Out</div>
        <div style="font-size:13px;color:var(--muted);text-align:center;line-height:1.7;max-width:380px">
          ${isNewSession
            ? `You'll see <strong style="color:var(--text)">${OOO_COUNT} words</strong> one by one.<br>Then find the <strong style="color:var(--wrong)">1 extra word</strong> that wasn't shown.<br><span style="color:var(--muted);font-size:12px">${OOO_ROUNDS} rounds total</span>`
            : `Round <strong style="color:var(--text)">${oooRound + 1} / ${OOO_ROUNDS}</strong> — keep going!`
          }
        </div>
        <button onclick="event.stopPropagation();startOddOneOut()" 
          style="background:var(--accent);color:#fff;padding:13px 32px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;border:none;cursor:pointer;margin-top:8px">
          ${isNewSession ? "▶ Start" : "▶ Next Round"}
        </button>
        ${oooScore.total > 0 ? `<div class="ooo-score">Score: <strong>${oooScore.correct}/${oooScore.total}</strong></div>` : ""}
      </div>`;
    return;
  }

  if (!oooState) { oooStarted = false; render(); return; }

  if (oooState.phase === "show") {
    renderOooShowPhase(container);
  } else if (oooState.phase === "pick") {
    renderOooPickPhase(container);
  } else if (oooState.phase === "result") {
    renderOooResultPhase(container);
  }
}

function startOddOneOut() {
  const words = getWords();
  if (words.length < OOO_COUNT + 1) return;

  // Pick OOO_COUNT random words from set
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  const shownWords = shuffled.slice(0, OOO_COUNT);

  // Pick 1 "odd" word — from the set but NOT in shownWords
  const remaining = words.filter(w => !shownWords.find(s => s.id === w.id));
  const oddWord = remaining[Math.floor(Math.random() * remaining.length)];

  oooState = {
    phase: "show",
    shownWords,
    oddWord,
    showIdx: 0,
    timerPct: 100,
    timerInterval: null,
    answered: false
  };
  oooStarted = true;
  render();
  oooTickShow();
}

function oooTickShow() {
  if (oooTimer) clearInterval(oooTimer);
  const start = Date.now();
  oooTimer = setInterval(() => {
    if (!oooState || oooState.phase !== "show") { clearInterval(oooTimer); return; }
    const elapsed = Date.now() - start;
    oooState.timerPct = Math.max(0, 100 - (elapsed / OOO_SHOW_TIME) * 100);
    if (elapsed >= OOO_SHOW_TIME) {
      clearInterval(oooTimer);
      oooState.showIdx++;
      if (oooState.showIdx >= oooState.shownWords.length) {
        oooState.phase = "pick";
        oooState.timerPct = 100;
        render();
        return;
      }
      oooState.timerPct = 100;
      render();
      oooTickShow();
    } else {
      // Just update timer bar without full re-render
      const fill = document.getElementById("oooTimerFill");
      if (fill) {
        fill.style.width = oooState.timerPct + "%";
        fill.className = "ooo-timer-fill" + (oooState.timerPct < 30 ? " danger" : oooState.timerPct < 60 ? " warn" : "");
      }
    }
  }, 100);
}

function renderOooShowPhase(container) {
  const { shownWords, showIdx, timerPct } = oooState;
  const word = shownWords[showIdx];
  const timerClass = timerPct < 30 ? "danger" : timerPct < 60 ? "warn" : "";
  container.innerHTML = `
    <div class="ooo-wrap">
      <div class="ooo-phase-label">Round ${oooRound + 1}/${OOO_ROUNDS} · Memorize — ${showIdx + 1} / ${shownWords.length}</div>
      <div class="ooo-timer-bar"><div class="ooo-timer-fill ${timerClass}" id="oooTimerFill" style="width:${timerPct}%"></div></div>
      <div style="text-align:center;padding:32px 0">
        <div style="font-size:36px;font-weight:700;color:var(--text);letter-spacing:0.02em">${word.en}</div>
        <div style="font-size:16px;color:var(--muted);margin-top:10px">${word.uk}</div>
      </div>
      <div class="ooo-score">Card <strong>${showIdx + 1}</strong> of ${shownWords.length}</div>
    </div>`;
}

function renderOooPickPhase(container) {
  const { shownWords, oddWord } = oooState;

  // Build options: all shown + odd, shuffle
  const options = [...shownWords, oddWord].sort(() => Math.random() - 0.5);
  // Store shuffled order in state so clicks are stable
  if (!oooState.options) oooState.options = options;

  const btns = oooState.options.map((w, i) => {
    const cls = oooState.answered
      ? (w.id === oddWord.id ? "ooo-word-btn reveal-odd" : "ooo-word-btn")
      : "ooo-word-btn";
    return `<button class="${cls}" onclick="event.stopPropagation();oooPickAnswer(${i})" ${oooState.answered ? "disabled" : ""}>${w.en}</button>`;
  }).join("");

  container.innerHTML = `
    <div class="ooo-wrap">
      <div class="ooo-phase-label">Find the word that was NOT in the set!</div>
      <div class="ooo-word-grid">${btns}</div>
      ${oooState.answered ? `<div class="ooo-result-banner ${oooState.lastCorrect ? "ok" : "err"}">${oooState.lastCorrect ? "✓ Correct!" : "✗ Wrong! The odd word was: " + oddWord.en}</div>
        <button onclick="event.stopPropagation();oooNext()" style="padding:11px 28px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer">Next Round →</button>` : ""}
      ${oooScore.total > 0 ? `<div class="ooo-score">Score: <strong>${oooScore.correct}/${oooScore.total}</strong></div>` : ""}
    </div>`;
}

function oooPickAnswer(idx) {
  if (!oooState || oooState.answered) return;
  const picked = oooState.options[idx];
  const isCorrect = picked.id === oooState.oddWord.id;
  oooState.answered = true;
  oooState.lastCorrect = isCorrect;
  oooScore.total++;
  if (isCorrect) oooScore.correct++;
  render();
}

function oooNext() {
  if (oooTimer) clearInterval(oooTimer);
  oooState = null;
  oooRound++;
  if (oooRound >= OOO_ROUNDS) {
    // Session complete
    oooRound = 0;
    oooStarted = false;
    const container = document.getElementById("testOptions");
    container.innerHTML = `
      <div class="ooo-wrap">
        <div style="font-size:48px;text-align:center">🏁</div>
        <div class="card-word" style="font-size:22px;text-align:center">Session Complete!</div>
        <div style="font-size:13px;color:var(--muted);text-align:center;line-height:1.7">
          Final score: <strong style="color:var(--text)">${oooScore.correct} / ${oooScore.total}</strong>
        </div>
        <button onclick="event.stopPropagation();oooScore={correct:0,total:0};oooStarted=false;render()" 
          style="background:var(--accent);color:#fff;padding:13px 32px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;border:none;cursor:pointer;margin-top:8px">
          🔄 Play Again
        </button>
      </div>`;
    return;
  }
  oooStarted = false;
  render();
}

// ===================== SPELLING MODE =====================
let spellingTasks = null;
let spellingTasksCache = {};
let spellingState = null;
let spellingScore = { correct: 0, total: 0 };
let spellingInputMode = "choice"; // choice | type

function getSpellingKey() { return `spellingTasks_set_${sets[currentSet].id}`; }

function loadSpellingCache() {
  const key = getSpellingKey();
  if (spellingTasksCache[key]) return spellingTasksCache[key];
  const s = localStorage.getItem(key);
  if (s) { try { const p = JSON.parse(s); spellingTasksCache[key] = p; return p; } catch(e){} }
  return null;
}

function saveSpellingCache(tasks) {
  const key = getSpellingKey();
  spellingTasksCache[key] = tasks;
  localStorage.setItem(key, JSON.stringify(tasks));
}

async function loadSpellingTasks() {
  const cached = loadSpellingCache();
  if (cached) { spellingTasks = cached; render(); return; }
  spellingTasks = []; render();
}

async function generateSpellingBatch(words) {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ words: words.map(w => w.en), type: "spelling" })
  });
  if (!res.ok) throw new Error("Server " + res.status);
  return res.json();
}

async function startSpellingGeneration() {
  spellingTasks = null; render();
  const words = getWords();
  if (!words.length) { spellingTasks = []; render(); return; }
  const batches = [];
  for (let i = 0; i < words.length; i += 10) batches.push(words.slice(i, i + 10));
  try {
    const results = await Promise.all(batches.map(b => generateSpellingBatch(b)));
    const all = results.flat();
    if (!all.length) { spellingTasks = []; render(); return; }
    const setId = sets[currentSet].id;
    spellingTasks = all.map(t => ({ ...t, setId }));
    saveSpellingCache(spellingTasks);
    spellingState = null;
    render();
  } catch(e) {
    console.error(e);
    spellingTasks = []; render();
  }
}

function regenerateSpelling() {
  localStorage.removeItem(getSpellingKey());
  delete spellingTasksCache[getSpellingKey()];
  startSpellingGeneration();
}

function renderSpellingMode(word) {
  const container = document.getElementById("testOptions");
  container.style.display = "block";

  if (spellingTasks === null) {
    container.innerHTML = `<div style="text-align:center;padding:40px 0;color:var(--muted);font-size:17px">⏳ Generating…</div>`;
    return;
  }

  const task = spellingTasks.find(t => t.word === word.en && t.setId === sets[currentSet].id);

  if (!task) {
    container.innerHTML = `
      <div class="spelling-wrap">
        <div style="font-size:48px;text-align:center">✍️</div>
        <div class="card-word" style="font-size:20px;text-align:center">Spelling Challenge</div>
        <div style="font-size:13px;color:var(--muted);text-align:center;line-height:1.7;max-width:380px">
          AI generates misspelled variants of each word.<br>Pick the <strong style="color:var(--text)">correctly spelled</strong> one.
        </div>
        <button onclick="event.stopPropagation();startSpellingGeneration()"
          style="background:var(--accent);color:#fff;padding:13px 28px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;border:none;cursor:pointer;margin-top:4px">
          ⚡ Generate Spelling Tasks
        </button>
        ${spellingScore.total > 0 ? `<div style="font-size:13px;color:var(--muted)">Score: <strong style="color:var(--text)">${spellingScore.correct}/${spellingScore.total}</strong></div>` : ""}
      </div>`;
    return;
  }

  // Build per-word state
  const sig = word.id;
  if (!spellingState || spellingState.sig !== sig) {
    spellingState = buildSpellingState(task, sig);
  }

  renderSpellingCard(container, word, task);
}

function buildSpellingState(task, sig) {
  return {
    sig,
    answered: false,
    picked: null,
    typed: "",
    inputResult: null,
    shuffledOptions: null,
    wrongPenalised: false
  };
}

function setSpellingInput(mode) {
  spellingInputMode = mode;
  document.getElementById("spellingChoiceBtn").classList.toggle("active", mode === "choice");
  document.getElementById("spellingTypeBtn").classList.toggle("active", mode === "type");
  // Reset current card state so it re-renders in new mode
  if (spellingState) { spellingState.answered = false; spellingState.picked = null; spellingState.typed = ""; spellingState.inputResult = null; }
  render();
}

function renderSpellingCard(container, word, task) {
  const correct = task.correct;
  const translation = word.uk && word.ru ? `${word.uk} / ${word.ru}` : word.uk || word.ru || "";
  const scoreHTML = spellingScore.total > 0
    ? `<div style="font-size:13px;color:var(--muted)">Score: <strong style="color:var(--text)">${spellingScore.correct}/${spellingScore.total}</strong></div>`
    : "";

  if (spellingInputMode === "choice") {
    renderSpellingChoice(container, word, task, correct, translation, scoreHTML);
  } else {
    renderSpellingType(container, word, task, correct, translation, scoreHTML);
  }
}

function renderSpellingChoice(container, word, task, correct, translation, scoreHTML) {
  const { answered, picked } = spellingState;
  // Shuffle options once per card and store to avoid re-shuffling on re-render
  if (!spellingState.shuffledOptions) {
    spellingState.shuffledOptions = [...task.options].sort(() => Math.random() - 0.5);
  }
  const btns = spellingState.shuffledOptions.map(opt => {
    let cls = "spelling-btn";
    if (answered) {
      if (opt === correct) cls += " correct";
      else if (opt === picked) cls += " wrong";
    }
    return `<button class="${cls}" onclick="event.stopPropagation();spellingPick('${opt.replace(/'/g,"\'")}','${correct.replace(/'/g,"\'")}',${word.id})"
      ${answered ? "disabled" : ""}>${opt}</button>`;
  }).join("");

  const resultHTML = answered
    ? `<div style="font-size:14px;font-weight:600;color:${picked === correct ? "var(--correct)" : "var(--wrong)"};text-align:center;margin-top:4px">
        ${picked === correct ? "✓ Correct!" : `✗ Correct: <span style="color:var(--correct)">${correct}</span>`}
       </div>`
    : "";

  container.innerHTML = `
    <div class="spelling-wrap">
      <div class="ooo-phase-label">Pick the correct spelling</div>
      <div class="spelling-options">${btns}</div>
      ${resultHTML}
      ${scoreHTML}
    </div>`;
}

function renderSpellingType(container, word, task, correct, translation, scoreHTML) {
  const { answered, inputResult } = spellingState;
  // Pick one misspelled variant to show (not the correct one)
  const wrong = task.options.find(o => o !== correct) || task.options[0];

  let resultHTML = "";
  if (answered) {
    const isOk = inputResult === "correct";
    resultHTML = `<div style="font-size:14px;font-weight:600;color:${isOk ? "var(--correct)" : "var(--wrong)"};text-align:center;margin-top:4px">
      ${isOk ? "✓ Correct!" : `✗ Answer: <span style="color:var(--correct)">${correct}</span>`}
    </div>`;
  }

  container.innerHTML = `
    <div class="spelling-wrap">
      <div class="ooo-phase-label">Fix the spelling</div>
      <div style="font-size:28px;font-weight:700;color:var(--wrong);letter-spacing:0.04em;text-align:center;margin:4px 0">${wrong}</div>
      <div style="font-size:12px;color:var(--muted);text-align:center">This word is misspelled — type the correct version</div>
      <div style="display:flex;gap:10px;width:100%;margin-top:4px">
        <input id="spellingTypeInput" type="text"
          value="${spellingState.typed || ""}"
          placeholder="Type correct spelling…"
          autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
          oninput="spellingState.typed=this.value"
          onkeydown="if(event.key==='Enter'){event.preventDefault();event.stopPropagation();spellingCheckType('${correct.replace(/'/g,"\'")}',${word.id})}"
          style="flex:1;background:var(--surface2);border:1px solid var(--border2);border-radius:10px;padding:12px 14px;font-family:'DM Sans',sans-serif;font-size:15px;color:var(--text);outline:none;transition:border-color 0.2s;"
          ${answered ? "disabled" : ""} />
        <button onclick="event.stopPropagation();spellingCheckType('${correct.replace(/'/g,"\'")}',${word.id})"
          ${answered ? "disabled" : ""}
          style="padding:12px 18px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap">
          Check
        </button>
      </div>
      <div id="spellingTypeHint" style="font-size:13px;font-weight:600;min-height:20px;text-align:center;opacity:0;transition:opacity 0.3s;"></div>
      ${resultHTML}
      ${scoreHTML}
    </div>`;

  if (!answered) {
    setTimeout(() => {
      const inp = document.getElementById("spellingTypeInput");
      if (inp) inp.focus();
    }, 50);
  }
}

function spellingPick(picked, correct, wordId) {
  if (!spellingState || spellingState.answered) return;
  const isCorrect = picked === correct;
  spellingState.answered = true;
  spellingState.picked = picked;
  spellingScore.total++;
  if (isCorrect) spellingScore.correct++;
  if (!isCorrect) scheduleTutorReview(wordId);
  render();
  if (isCorrect) setTimeout(() => { nextWord(); }, 700);
}

function spellingCheckType(correct, wordId) {
  if (!spellingState || spellingState.answered) return;
  const typed = (spellingState.typed || "").trim().toLowerCase();
  if (!typed) return;
  const isCorrect = typed === correct.toLowerCase();

  if (isCorrect) {
    spellingState.answered = true;
    spellingState.inputResult = "correct";
    spellingScore.total++;
    spellingScore.correct++;
    render();
    setTimeout(() => { nextWord(); }, 700);
  } else {
    // Wrong — clear field, shake, let user retry (never block the input)
    spellingState.typed = "";
    const input = document.getElementById("spellingTypeInput");
    if (input) {
      input.value = "";
      input.disabled = false;          // ensure never blocked
      input.style.borderColor = "var(--wrong)";
      input.style.animation = "none";
      void input.offsetWidth;           // force reflow so animation restarts
      input.style.animation = "shake 0.35s ease";
      setTimeout(() => {
        if (input) {
          input.style.borderColor = "";
          input.style.animation = "";
          input.focus();
        }
      }, 400);
    }
    const hint = document.getElementById("spellingTypeHint");
    if (hint) {
      hint.textContent = "✗ Not quite — try again";
      hint.style.color = "var(--wrong)";
      hint.style.opacity = "1";
      setTimeout(() => { if (hint) hint.style.opacity = "0"; }, 1400);
    }
    if (!spellingState.wrongPenalised) {
      spellingState.wrongPenalised = true;
      spellingScore.total++;
      scheduleTutorReview(wordId);
    }
  }
}

// ===================== UI STATE =====================
function updateAllUI() {
  const isTest = ["choice","truefalse","matches","ai","memory","contextmemory","oddoneout","spelling"].includes(activeMode);
  const isAudio = activeMode === "audio";

  const to = document.getElementById("testOptions");
  if (!isTest) { to.style.display = "none"; to.innerHTML = ""; }

  document.getElementById("inputArea").style.display =
    (keyboardOn || isAudio) ? "flex" : "none";

  document.getElementById("audioBtn").style.display =
    (keyboardOn || isTest) ? "none" : "";

  document.getElementById("bottomSettings").style.display =
    (isTest || isAudio) ? "none" : "";

  document.getElementById("clearBtn").style.display =
    (filterMode === "custom") ? "block" : "none";

  document.getElementById("clearWrongBtn").style.display =
    (filterMode === "wrong") ? "block" : "none";

  document.getElementById("regenBtn").classList.toggle("visible", activeMode === "ai");
  document.getElementById("regenMemoryBtn").classList.toggle("visible", activeMode === "memory");
  document.getElementById("regenCMBtn").classList.toggle("visible", activeMode === "contextmemory");
  document.getElementById("regenSpellingBtn").classList.toggle("visible", activeMode === "spelling");

  document.getElementById("memoryDifficultySetting").style.display =
    activeMode === "memory" ? "block" : "none";

  document.getElementById("choiceSetting").style.display =
    activeMode === "choice" ? "block" : "none";

  document.getElementById("aiDifficultySetting").style.display =
    (activeMode === "ai" && !examState) ? "block" : "none";

  document.getElementById("cmDifficultySetting").style.display =
    activeMode === "contextmemory" ? "block" : "none";

  document.getElementById("cmInputSetting").style.display =
    activeMode === "contextmemory" ? "block" : "none";

  document.getElementById("spellingInputSetting").style.display =
    activeMode === "spelling" ? "block" : "none";
}

// ===================== KEYBOARD SHORTCUTS =====================
document.addEventListener("keydown", e => {
  const tag = document.activeElement.tagName;
  const typing = tag === "INPUT" || tag === "TEXTAREA" || document.activeElement.isContentEditable;

  if (e.code === "ArrowRight") { e.preventDefault(); nextWord(); }
  if (e.code === "ArrowLeft")  { e.preventDefault(); prevWord(); }
  if (e.code === "Space" && !typing) { 
    e.preventDefault(); 
    const now = Date.now();
    if (now - lastSpaceTime < 500) { // double space
      toggleStar();
    } else {
      flipCard(); 
    }
    lastSpaceTime = now;
  }
  if (e.code === "Enter" && typing) { e.preventDefault(); handleEnter(); }
  // Enter on CM result screen (no input focused)
  if (e.code === "Enter" && !typing && activeMode === "contextmemory" && cmState?.phase === "result") {
    e.preventDefault();
    const isLast = cmRound >= cmTasks.length - 1;
    isLast ? restartCM() : nextCMRound();
  }
});

// Double click for desktop
document.getElementById("card").addEventListener("dblclick", e => {
  e.preventDefault();
  toggleStar();
});

// ===================== CLOSE DROPDOWNS =====================
document.addEventListener("click", e => {
  if (!e.target.closest("#coreDropdown"))    document.getElementById("coreDropdown").classList.remove("open");
  if (!e.target.closest("#aiDropdown"))      document.getElementById("aiDropdown").classList.remove("open");
  if (!e.target.closest("#dungeonDropdown")) document.getElementById("dungeonDropdown")?.classList.remove("open");
  if (!e.target.closest("#delayDropdown"))  document.getElementById("delayDropdown").classList.remove("open");
});

// Touch swipe + double-tap
let touchStartX = 0;
document.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; });
document.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchStartX;

  // Swipe — navigate and reset tap timer so swipe never counts as a tap
  if (dx > 50)  { prevWord(); lastTapTime = 0; return; }
  if (dx < -50) { nextWord(); lastTapTime = 0; return; }

  // Short move = tap, check for double-tap (200ms window)
  if (Math.abs(dx) <= 10) {
    const now = Date.now();
    if (now - lastTapTime < 200) {
      toggleStar();
      lastTapTime = 0; // reset so triple tap doesn't chain
    } else {
      lastTapTime = now;
    }
  }
});

// ===================== SUPABASE =====================
const SUPABASE_URL = "https://hbhxekdesbjcxycdqvrl.supabase.co";
const SUPABASE_KEY = "sb_publishable_-0ePOM4q5yxKQX4lEoTCWA_CQtYUJYI";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;
let syncTimeout = null;

// ---- Auth state listener ----
sb.auth.onAuthStateChange(async (event, session) => {
  currentUser = session?.user || null;
  updateAuthBtn();
  if (currentUser) {
    // SIGNED_IN / INITIAL_SESSION / TOKEN_REFRESHED — load cloud data, cloud wins
    await loadProgressFromCloud();
  } else if (event === "SIGNED_OUT") {
    // Switch to localStorage — don't touch localStorage, just re-read it
    completedSets = JSON.parse(localStorage.getItem("completedSets") || "[]");
    customSets    = JSON.parse(localStorage.getItem("customSets")    || "[]");
    wrongSet      = JSON.parse(localStorage.getItem("wrongSet")      || "[]");
    loadHeroFromLocal();
    renderSets();
    renderCustomSets();
    renderWrongSetBtn();
    render();
  }
});

// ---- Cloud sync ----
async function loadProgressFromCloud() {
  if (!currentUser) return;
  try {
    const { data, error } = await sb
      .from("user_progress")
      .select("completed_sets, custom_sets, wrong_set, hero_data")
      .eq("user_id", currentUser.id)
      .single();

    if (error && error.code !== "PGRST116") { // PGRST116 = no rows
      console.error("Load error:", error);
      return;
    }

    if (data) {
      // Cloud always wins — load into memory only, localStorage stays as offline snapshot
      if (Array.isArray(data.completed_sets)) completedSets = data.completed_sets;
      if (Array.isArray(data.custom_sets))    customSets    = data.custom_sets;
      if (Array.isArray(data.wrong_set))      wrongSet      = data.wrong_set;
      if (data.hero_data)                     heroData      = data.hero_data;
      renderSets();
      renderCustomSets();
      renderWrongSetBtn();
      render();
    } else {
      // No cloud record yet — start fresh for this account (ignore localStorage)
      completedSets = [];
      customSets    = [];
      wrongSet      = [];
      renderSets();
      renderCustomSets();
      renderWrongSetBtn();
      render();
    }
  } catch(e) {
    console.error("Cloud load failed:", e);
  }
}

function scheduleSyncToCloud() {
  clearTimeout(syncTimeout);
  if (currentUser) {
    syncTimeout = setTimeout(syncToCloud, 1500); // debounce 1.5s
  } else {
    // No account — persist to localStorage
    syncTimeout = setTimeout(() => {
      localStorage.setItem("completedSets", JSON.stringify(completedSets));
      localStorage.setItem("customSets",    JSON.stringify(customSets));
      localStorage.setItem("wrongSet",      JSON.stringify(wrongSet));
    }, 300);
  }
}

async function syncToCloud() {
  if (!currentUser) return;
  try {
    await sb.from("user_progress").upsert({
      user_id: currentUser.id,
      completed_sets: completedSets,
      custom_sets: customSets,
      wrong_set: wrongSet,
      hero_data: heroData || null,
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id" });
  } catch(e) {
    console.error("Cloud sync failed:", e);
  }
}

// ---- Auth UI ----
let authTab = "signin"; // signin | signup

function openAuth() {
  document.getElementById("authOverlay").style.display = "block";
  document.getElementById("authModal").style.display = "block";
  document.getElementById("authModalTitle").textContent = currentUser ? "My Account" : "Account";
  renderAuthModal();
}

function closeAuth() {
  document.getElementById("authOverlay").style.display = "none";
  document.getElementById("authModal").style.display = "none";
}

function renderAuthModal() {
  const body = document.getElementById("authBody");

  if (currentUser) {
    const email = currentUser.email || "";
    const letter = email[0]?.toUpperCase() || "?";
    body.innerHTML = `
      <div class="auth-user-info">
        <div class="auth-avatar">${letter}</div>
        <div style="font-size:15px;font-weight:600;color:#e8eaf0;text-align:center">${email}</div>
        <div class="auth-user-email" style="display:flex;align-items:center;gap:5px">
          <span style="width:6px;height:6px;border-radius:50%;background:#4ade80;flex-shrink:0"></span>
          Synced — progress saved across devices
        </div>
      </div>
      <div class="auth-separator"></div>
      <button class="auth-help-btn" onclick="closeAuth(); openHelp()">
        <span class="help-icon">❓</span>
        <div>
          <div style="font-size:13px;font-weight:600;color:#e8eaf0">Help & Guide</div>
          <div style="font-size:11px;color:#4a5268;margin-top:1px">How to use all modes and features</div>
        </div>
      </button>
      <div class="auth-separator"></div>
      <button type="button" class="auth-signout" onclick="event.stopPropagation(); signOut()">Sign Out</button>
      <button type="button" class="auth-reset-btn" onclick="event.stopPropagation(); confirmResetProgress()">Reset Progress</button>
      <button onclick="openGodMode()" style="width:100%;margin-top:8px;background:rgba(167,139,250,0.06);border:1px solid rgba(167,139,250,0.2);color:rgba(167,139,250,0.6);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;padding:9px;border-radius:10px;cursor:pointer;letter-spacing:0.06em;transition:all 0.2s"
        onmouseover="this.style.background='rgba(167,139,250,0.12)';this.style.color='#a78bfa'"
        onmouseout="this.style.background='rgba(167,139,250,0.06)';this.style.color='rgba(167,139,250,0.6)'">⚡ God Mode</button>
    `;
    return;
  }

  body.innerHTML = `
    <div class="auth-tabs">
      <button class="auth-tab ${authTab === "signin" ? "active" : ""}" onclick="switchAuthTab('signin')">Sign In</button>
      <button class="auth-tab ${authTab === "signup" ? "active" : ""}" onclick="switchAuthTab('signup')">Create Account</button>
    </div>
    <button class="auth-google" onclick="signInWithGoogle()">
      <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
        <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
        <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
      </svg>
      Continue with Google
    </button>
    <div class="auth-divider"><span>or</span></div>
    <input class="auth-input" id="authEmail" type="email" placeholder="Email" autocomplete="email" />
    <input class="auth-input" id="authPassword" type="password" placeholder="Password (min 6 chars)" autocomplete="${authTab === "signin" ? "current-password" : "new-password"}" />
    <div class="auth-msg" id="authMsg"></div>
    <button class="auth-submit" id="authSubmitBtn" onclick="handleAuthSubmit()">
      ${authTab === "signin" ? "Sign In" : "Create Account"}
    </button>
    <div class="auth-separator"></div>
    <button class="auth-help-btn" onclick="closeAuth(); openHelp()">
      <span class="help-icon">❓</span>
      <div>
        <div style="font-size:13px;font-weight:600;color:#e8eaf0">Help & Guide</div>
        <div style="font-size:11px;color:#4a5268;margin-top:1px">How to use all modes and features</div>
      </div>
    </button>
    <button onclick="openGodMode()" style="width:100%;margin-top:8px;background:rgba(167,139,250,0.06);border:1px solid rgba(167,139,250,0.2);color:rgba(167,139,250,0.6);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;padding:9px;border-radius:10px;cursor:pointer;letter-spacing:0.06em;transition:all 0.2s"
      onmouseover="this.style.background='rgba(167,139,250,0.12)';this.style.color='#a78bfa'"
      onmouseout="this.style.background='rgba(167,139,250,0.06)';this.style.color='rgba(167,139,250,0.6)'">⚡ God Mode</button>
  `;

  ["authEmail","authPassword"].forEach(id => {
    document.getElementById(id)?.addEventListener("keydown", e => {
      if (e.key === "Enter") handleAuthSubmit();
    });
  });
}

function switchAuthTab(tab) {
  authTab = tab;
  renderAuthModal();
}

// ===================== GOD MODE =====================
let godModeUnlocked = false;

function openGodMode() {
  if (godModeUnlocked) { renderGodMode(); return; }
  const body = document.getElementById("authBody");
  body.innerHTML = `
    <div style="text-align:center;margin-bottom:14px">
      <div style="font-size:22px;margin-bottom:6px">⚡</div>
      <div style="font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a78bfa">God Mode</div>
      <div style="font-size:11px;color:var(--muted);margin-top:4px">Enter password to unlock</div>
    </div>
    <input class="auth-input" id="godPwInput" type="password" placeholder="Password..." autocomplete="off" />
    <div id="godPwMsg" style="font-size:12px;color:#f87171;min-height:16px;margin:4px 0 8px"></div>
    <button class="auth-submit" onclick="checkGodPassword()">Unlock ⚡</button>
    <button onclick="renderAuthModal()" style="width:100%;margin-top:8px;background:none;border:none;color:var(--muted);font-family:'DM Sans',sans-serif;font-size:12px;cursor:pointer;padding:6px">← Back</button>
  `;
  document.getElementById("godPwInput").focus();
  document.getElementById("godPwInput").addEventListener("keydown", e => {
    if (e.key === "Enter") checkGodPassword();
  });
}

function checkGodPassword() {
  const pw = document.getElementById("godPwInput")?.value || "";
  if (pw === "777MAX777") {
    godModeUnlocked = true;
    renderGodMode();
  } else {
    const msg = document.getElementById("godPwMsg");
    if (msg) msg.textContent = "Wrong password";
    document.getElementById("godPwInput").value = "";
    document.getElementById("godPwInput").focus();
  }
}

function renderGodMode() {
  const body  = document.getElementById("authBody");
  const hero  = getHero();
  const level = hero?.level || 1;

  body.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
      <span style="font-size:16px">⚡</span>
      <span style="font-size:12px;font-weight:700;letter-spacing:0.1em;color:#a78bfa;text-transform:uppercase">God Mode</span>
      <button onclick="renderAuthModal()" style="margin-left:auto;background:none;border:none;color:var(--muted);font-size:12px;cursor:pointer;padding:4px 6px;font-family:'DM Sans',sans-serif">✕ Exit</button>
    </div>

    ${hero ? `
    <div style="background:var(--surface2);border:1px solid rgba(167,139,250,0.2);border-radius:12px;padding:14px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(167,139,250,0.55);margin-bottom:10px">Hero Level</div>
      <div style="display:flex;align-items:center;gap:10px">
        <button onclick="godAdjustLevel(-5)" style="height:32px;padding:0 10px;border-radius:8px;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.25);color:#f87171;font-size:12px;font-weight:700;cursor:pointer">−5</button>
        <button onclick="godAdjustLevel(-1)" style="height:32px;padding:0 10px;border-radius:8px;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.25);color:#f87171;font-size:16px;font-weight:700;cursor:pointer">−</button>
        <div id="godLevelDisplay" style="flex:1;text-align:center;font-size:22px;font-weight:700;color:var(--text)">Lv ${level}</div>
        <button onclick="godAdjustLevel(1)" style="height:32px;padding:0 10px;border-radius:8px;background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.25);color:#4ade80;font-size:16px;font-weight:700;cursor:pointer">+</button>
        <button onclick="godAdjustLevel(5)" style="height:32px;padding:0 10px;border-radius:8px;background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.25);color:#4ade80;font-size:12px;font-weight:700;cursor:pointer">+5</button>
      </div>
    </div>
    ` : `<div style="font-size:12px;color:var(--muted);background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:10px;text-align:center">No hero yet — enable Game Mode first.</div>`}

    ${hero ? `
    <div style="background:var(--surface2);border:1px solid rgba(167,139,250,0.2);border-radius:12px;padding:14px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(167,139,250,0.55);margin-bottom:10px">Gold</div>
      <div style="display:flex;align-items:center;gap:10px">
        <button onclick="godAdjustGold(-100)" style="height:32px;padding:0 10px;border-radius:8px;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.25);color:#f87171;font-size:12px;font-weight:700;cursor:pointer">−100</button>
        <button onclick="godAdjustGold(-10)"  style="height:32px;padding:0 10px;border-radius:8px;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.25);color:#f87171;font-size:12px;font-weight:700;cursor:pointer">−10</button>
        <div id="godGoldDisplay" style="flex:1;text-align:center;font-size:20px;font-weight:700;color:#fbbf24">🪙 ${hero.gold || 0}</div>
        <button onclick="godAdjustGold(10)"   style="height:32px;padding:0 10px;border-radius:8px;background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.25);color:#4ade80;font-size:12px;font-weight:700;cursor:pointer">+10</button>
        <button onclick="godAdjustGold(100)"  style="height:32px;padding:0 10px;border-radius:8px;background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.25);color:#4ade80;font-size:12px;font-weight:700;cursor:pointer">+100</button>
      </div>
    </div>
    ` : ''}

    <div style="background:var(--surface2);border:1px solid rgba(167,139,250,0.2);border-radius:12px;padding:14px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(167,139,250,0.55)">Sets Completed</div>
        <div style="display:flex;gap:5px">
          <button onclick="godSelectAllSets()" style="font-size:10px;padding:3px 8px;border-radius:6px;background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.25);color:#4ade80;cursor:pointer;font-family:'DM Sans',sans-serif">All</button>
          <button onclick="godClearAllSets()" style="font-size:10px;padding:3px 8px;border-radius:6px;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.25);color:#f87171;cursor:pointer;font-family:'DM Sans',sans-serif">None</button>
        </div>
      </div>
      <div id="godSetsGrid" style="display:grid;grid-template-columns:repeat(10,1fr);gap:4px;max-height:220px;overflow-y:auto;padding-right:2px">
        ${sets.map(s => {
          const done = completedSets.includes(s.id);
          return `<button id="godSetBtn_${s.id}" onclick="godToggleSet(${s.id})"
            style="height:28px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;
              background:${done ? "rgba(74,222,128,0.12)" : "rgba(255,255,255,0.04)"};
              border:1px solid ${done ? "rgba(74,222,128,0.35)" : "rgba(255,255,255,0.07)"};
              color:${done ? "#4ade80" : "var(--muted)"}">
            ${s.id}
          </button>`;
        }).join("")}
      </div>
    </div>
  `;
}

function godAdjustLevel(delta) {
  const hero = getHero();
  if (!hero) return;
  const oldLevel = hero.level;
  hero.level = Math.max(1, hero.level + delta);
  const actualDelta = hero.level - oldLevel;
  if (actualDelta > 0) {
    hero.skillPoints = (hero.skillPoints || 0) + actualDelta;
  } else if (actualDelta < 0) {
    hero.skillPoints = Math.max(0, (hero.skillPoints || 0) + actualDelta);
  }
  hero.xp = 0;
  scheduleHeroSave();
  updateHeroHud();
  const display = document.getElementById("godLevelDisplay");
  if (display) display.textContent = `Lv ${hero.level}`;
  const profileSub = document.getElementById("hpHeroLevel");
  if (profileSub) profileSub.textContent =
    `Level ${hero.level} · ${hero.build === "sword_shield" ? "Sword & Shield" : "Two-Hander"}`;
}

function godAdjustGold(delta) {
  const hero = getHero();
  if (!hero) return;
  hero.gold = Math.max(0, (hero.gold || 0) + delta);
  scheduleHeroSave();
  updateHeroHud();
  const display = document.getElementById("godGoldDisplay");
  if (display) display.textContent = `🪙 ${hero.gold}`;
}

function godToggleSet(id) {
  const idx = completedSets.indexOf(id);
  if (idx === -1) completedSets.push(id);
  else completedSets.splice(idx, 1);
  const btn = document.getElementById(`godSetBtn_${id}`);
  if (btn) {
    const done = completedSets.includes(id);
    btn.style.background  = done ? "rgba(74,222,128,0.12)" : "rgba(255,255,255,0.04)";
    btn.style.borderColor = done ? "rgba(74,222,128,0.35)" : "rgba(255,255,255,0.07)";
    btn.style.color       = done ? "#4ade80" : "var(--muted)";
  }
  renderSets();
  scheduleSyncToCloud();
}

function godSelectAllSets() {
  completedSets = sets.map(s => s.id);
  renderSets();
  scheduleSyncToCloud();
  renderGodMode();
}

function godClearAllSets() {
  completedSets = [];
  renderSets();
  scheduleSyncToCloud();
  renderGodMode();
}

async function handleAuthSubmit() {
  const email = document.getElementById("authEmail")?.value?.trim();
  const password = document.getElementById("authPassword")?.value;
  const msg = document.getElementById("authMsg");
  const btn = document.getElementById("authSubmitBtn");

  if (!email || !password) {
    msg.className = "auth-msg error";
    msg.textContent = "Please fill in both fields.";
    return;
  }

  btn.disabled = true;
  btn.textContent = "Please wait…";
  msg.className = "auth-msg";
  msg.textContent = "";

  try {
    let result;
    if (authTab === "signin") {
      result = await sb.auth.signInWithPassword({ email, password });
    } else {
      result = await sb.auth.signUp({ email, password });
    }

    if (result.error) {
      msg.className = "auth-msg error";
      msg.textContent = result.error.message;
      btn.disabled = false;
      btn.textContent = authTab === "signin" ? "Sign In" : "Create Account";
      return;
    }

    if (authTab === "signup" && !result.data?.session) {
      msg.className = "auth-msg success";
      msg.textContent = "✓ Check your email to confirm your account.";
      btn.disabled = false;
      btn.textContent = "Create Account";
      return;
    }

    // Success — onAuthStateChange will fire and update everything
    closeAuth();
  } catch(e) {
    msg.className = "auth-msg error";
    msg.textContent = "Something went wrong. Try again.";
    btn.disabled = false;
    btn.textContent = authTab === "signin" ? "Sign In" : "Create Account";
  }
}

async function signInWithGoogle() {
  await sb.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.origin }
  });
}

async function signOut() {
  try {
    await sb.auth.signOut();
    // onAuthStateChange SIGNED_OUT will handle restoring localStorage data
  } catch(e) {
    console.error("Sign out error:", e);
    // Even if signOut fails remotely, clear locally
    currentUser = null;
    completedSets = JSON.parse(localStorage.getItem("completedSets") || "[]");
    customSets    = JSON.parse(localStorage.getItem("customSets")    || "[]");
    wrongSet      = JSON.parse(localStorage.getItem("wrongSet")      || "[]");
    updateAuthBtn();
    closeAuth();
    renderSets();
    renderCustomSets();
    renderWrongSetBtn();
    render();
  }
  closeAuth();
}

function confirmResetProgress() {
  document.getElementById("resetConfirmOverlay")?.remove();
  const overlay = document.createElement("div");
  overlay.id = "resetConfirmOverlay";
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:3000;
    background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);
    display:flex;align-items:center;justify-content:center;padding:24px;
  `;

  const doneSets = sets.filter(s => completedSets.includes(s.id));

  overlay.innerHTML = `
    <div style="
      background:var(--surface);border:1px solid rgba(248,113,113,0.25);
      border-radius:20px;padding:32px 28px;max-width:400px;width:100%;
      box-shadow:0 30px 80px rgba(0,0,0,0.6);text-align:center;
    ">
      <div style="font-size:40px;margin-bottom:12px">🗑️</div>
      <h3 style="font-family:'DM Serif Display',serif;font-size:22px;color:var(--text);margin-bottom:8px">Reset Progress</h3>
      <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:24px">
        Choose what to reset. This cannot be undone.
      </p>

      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
        <button onclick="showResetAllConfirm()" style="
          width:100%;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.3);color:var(--wrong);
          font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;
          padding:14px 16px;border-radius:12px;cursor:pointer;transition:all 0.2s;
          display:flex;align-items:center;gap:12px;text-align:left;
        " onmouseover="this.style.background='rgba(248,113,113,0.16)'"
           onmouseout="this.style.background='rgba(248,113,113,0.08)'">
          <span style="font-size:20px;">💥</span>
          <div>
            <div>Reset Everything</div>
            <div style="font-size:11px;font-weight:400;color:rgba(248,113,113,0.7);margin-top:2px">All ${completedSets.length} completed set${completedSets.length !== 1 ? "s" : ""}, custom sets & saved data</div>
          </div>
        </button>

        <button onclick="showResetSelectSets()" ${doneSets.length === 0 ? "disabled" : ""} style="
          width:100%;background:rgba(79,142,247,0.08);border:1px solid rgba(79,142,247,${doneSets.length === 0 ? "0.15" : "0.3"});
          color:${doneSets.length === 0 ? "var(--muted)" : "var(--accent)"};
          font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;
          padding:14px 16px;border-radius:12px;cursor:${doneSets.length === 0 ? "default" : "pointer"};transition:all 0.2s;
          display:flex;align-items:center;gap:12px;text-align:left;opacity:${doneSets.length === 0 ? "0.5" : "1"};
        " ${doneSets.length > 0 ? `onmouseover="this.style.background='rgba(79,142,247,0.16)'" onmouseout="this.style.background='rgba(79,142,247,0.08)'"` : ""}>
          <span style="font-size:20px;">🎯</span>
          <div>
            <div>Select Specific Sets</div>
            <div style="font-size:11px;font-weight:400;color:rgba(79,142,247,0.7);margin-top:2px">${doneSets.length === 0 ? "No completed sets yet" : `Choose from ${doneSets.length} completed set${doneSets.length !== 1 ? "s" : ""}`}</div>
          </div>
        </button>
      </div>

      <button onclick="dismissResetOverlay()" style="
        width:100%;background:transparent;border:1px solid var(--border);color:var(--muted);
        font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;
        padding:11px;border-radius:12px;cursor:pointer;transition:all 0.2s;
      " onmouseover="this.style.borderColor='var(--border2)';this.style.color='var(--text)'"
         onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">
        Cancel
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function showResetAllConfirm() {
  const box = document.querySelector("#resetConfirmOverlay > div");
  box.innerHTML = `
    <div style="font-size:40px;margin-bottom:12px">⚠️</div>
    <h3 style="font-family:'DM Serif Display',serif;font-size:22px;color:var(--text);margin-bottom:10px">Reset everything?</h3>
    <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:24px">
      This will permanently delete all ${completedSets.length} completed set${completedSets.length !== 1 ? "s" : ""}, custom sets and saved data — both locally and in the cloud.
    </p>
    <div style="display:flex;gap:10px;">
      <button onclick="confirmResetProgress()" style="
        flex:1;background:transparent;border:1px solid var(--border);color:var(--muted);
        font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;
        padding:12px;border-radius:12px;cursor:pointer;
      " onmouseover="this.style.borderColor='var(--border2)';this.style.color='var(--text)'"
         onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">← Back</button>
      <button onclick="resetProgress()" class="reset-all-btn" style="
        flex:1;background:rgba(248,113,113,0.1);border:1px solid rgba(248,113,113,0.35);color:var(--wrong);
        font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;
        padding:12px;border-radius:12px;cursor:pointer;
      " onmouseover="this.style.background='rgba(248,113,113,0.2)'"
         onmouseout="this.style.background='rgba(248,113,113,0.1)'">Yes, Reset All</button>
    </div>
  `;
}

function showResetSelectSets() {
  const doneSets = sets.filter(s => completedSets.includes(s.id));
  const box = document.querySelector("#resetConfirmOverlay > div");

  const checkboxes = doneSets.map(s => `
    <label style="
      display:flex;align-items:center;gap:10px;
      padding:9px 12px;border-radius:10px;cursor:pointer;
      background:var(--surface2);border:1px solid var(--border);
      transition:border-color 0.15s;
    " onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <input type="checkbox" value="${s.id}" checked style="
        width:16px;height:16px;accent-color:var(--wrong);cursor:pointer;flex-shrink:0;
      "/>
      <span style="font-size:13px;color:var(--text);font-weight:500">Set ${s.id}</span>
      <span style="font-size:11px;color:var(--muted);margin-left:auto">${s.words?.length || 0} words</span>
    </label>
  `).join("");

  box.innerHTML = `
    <div style="font-size:40px;margin-bottom:12px">🎯</div>
    <h3 style="font-family:'DM Serif Display',serif;font-size:22px;color:var(--text);margin-bottom:8px">Select sets to reset</h3>
    <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Uncheck any sets you want to keep.</p>

    <div style="display:flex;justify-content:space-between;margin-bottom:10px;padding:0 2px;">
      <button onclick="resetSelectAll(true)" style="font-size:12px;color:var(--accent);background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;">Select all</button>
      <button onclick="resetSelectAll(false)" style="font-size:12px;color:var(--muted);background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;">Deselect all</button>
    </div>

    <div id="resetSetsList" style="
      display:flex;flex-direction:column;gap:6px;
      max-height:240px;overflow-y:auto;margin-bottom:20px;
      padding-right:4px;
    ">${checkboxes}</div>

    <div style="display:flex;gap:10px;">
      <button onclick="confirmResetProgress()" style="
        flex:1;background:transparent;border:1px solid var(--border);color:var(--muted);
        font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;
        padding:12px;border-radius:12px;cursor:pointer;
      " onmouseover="this.style.borderColor='var(--border2)';this.style.color='var(--text)'"
         onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">← Back</button>
      <button onclick="resetSelectedSets()" class="reset-selected-btn" style="
        flex:1;background:rgba(248,113,113,0.1);border:1px solid rgba(248,113,113,0.35);color:var(--wrong);
        font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;
        padding:12px;border-radius:12px;cursor:pointer;
      " onmouseover="this.style.background='rgba(248,113,113,0.2)'"
         onmouseout="this.style.background='rgba(248,113,113,0.1)'">Reset Selected</button>
    </div>
  `;
}

function resetSelectAll(checked) {
  document.querySelectorAll("#resetSetsList input[type=checkbox]").forEach(cb => cb.checked = checked);
}

function dismissResetOverlay() {
  const overlay = document.getElementById("resetConfirmOverlay");
  if (!overlay) { _afterResetDismiss(); return; }
  overlay.style.transition = "opacity 0.25s ease";
  overlay.firstElementChild.style.transition = "opacity 0.25s ease, transform 0.25s ease";
  overlay.style.opacity = "0";
  overlay.firstElementChild.style.opacity = "0";
  overlay.firstElementChild.style.transform = "scale(0.95)";
  setTimeout(() => {
    overlay.remove();
    _afterResetDismiss();
  }, 260);
}

function _afterResetDismiss() {
  // Do NOT close the auth modal — user may want to sign out after reset
  renderSets();
  renderCustomSets();
  renderWrongSetBtn();
  render();
}

async function resetSelectedSets() {
  const checkboxes = document.querySelectorAll("#resetSetsList input[type=checkbox]:checked");
  if (!checkboxes.length) { dismissResetOverlay(); return; }

  const selectedIds = [...checkboxes].map(cb => parseInt(cb.value));
  completedSets = completedSets.filter(id => !selectedIds.includes(id));

  if (currentUser) {
    // Logged in: await cloud update so it's guaranteed saved before dismiss
    try {
      await sb.from("user_progress").upsert({
        user_id: currentUser.id,
        completed_sets: completedSets,
        custom_sets: customSets,
        wrong_set: wrongSet,
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id" });
    } catch(e) {
      console.error("Cloud sync failed:", e);
    }
  } else {
    // Offline: update localStorage only
    localStorage.setItem("completedSets", JSON.stringify(completedSets));
  }

  dismissResetOverlay();
}

async function resetProgress() {
  // Reset in-memory state immediately
  completedSets = [];
  customSets    = [];
  wrongSet      = [];

  if (currentUser) {
    // Logged in: await cloud reset so it's guaranteed saved before dismiss
    try {
      await sb.from("user_progress").upsert({
        user_id: currentUser.id,
        completed_sets: [],
        custom_sets: [],
        wrong_set: [],
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id" });
    } catch(e) {
      console.error("Cloud reset failed:", e);
    }
  } else {
    // Offline: reset localStorage
    localStorage.removeItem("completedSets");
    localStorage.removeItem("customSets");
    localStorage.removeItem("wrongSet");
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith("aiTasks_") || k.startsWith("memTasks_") || k.startsWith("cmTasks_")) {
        localStorage.removeItem(k);
      }
    });
  }

  dismissResetOverlay();
}

function updateAuthBtn() {
  const btn    = document.getElementById("cornerAuth");
  const letter = document.getElementById("cornerAuthLetter");
  const icon   = document.getElementById("cornerAuthIcon");
  if (!btn) return;
  if (currentUser) {
    btn.className = "signed-in";
    letter.textContent = currentUser.email?.[0]?.toUpperCase() || "?";
    letter.style.display = "block";
    icon.style.display = "none";
    btn.title = currentUser.email;
  } else {
    btn.className = "signed-out";
    letter.style.display = "none";
    icon.style.display = "flex";
    btn.title = "Sign in";
  }
}

// ===================== HELP =====================
let helpLang = "en";

const HELP_CONTENT = {
  en: {
    title: "YourPath10k — Help",
    subtitle: "Your guide to learning 10,000 words",
    hero: {
      title: "🎯 Goal: Master 10,000 English Words",
      text: `YourPath10k guides you through <strong>100 sets of 100 words</strong> each. Switch between 7 learning modes to reinforce vocabulary in different ways — from simple flashcards to AI-generated fill-in-the-blank exercises and memory association chains.`
    },
    modesTitle: "Learning Modes",
    modes: [
      { icon: "📖", name: "Study", desc: "Classic flashcard mode. Tap the card to flip and reveal the translation. Best for first exposure to new words." },
      { icon: "🎯", name: "Choice", desc: "Multiple choice test. Choose the correct translation from 4 options. Great for consolidating vocabulary." },
      { icon: "🔊", name: "Audio", desc: "Listen and type. Hear the word spoken aloud and type it correctly. Perfect for pronunciation and spelling." },
      { icon: "✅", name: "True / False", desc: "See a word paired with a translation — decide if it's correct or not. Fast-paced and effective." },
      { icon: "🧩", name: "Matches", desc: "Match English words with their translations. Works in rounds — 8 pairs at a time." },
      { icon: "⚡", name: "AI Mode", desc: "AI-generated fill-in-the-blank sentences. Real context makes words stick. Choose Easy / Medium / Hard difficulty." },
      { icon: "🧠", name: "Memory Associations", desc: "AI builds creative word chains (e.g. dog → loyalty → knight). Memorize the chain, then recall it. Trains deep memory." },
    ],
    featuresTitle: "Features & Tips",
    tips: [
      { text: "⭐ <b>Star</b> (double-tap or double-click the card) to add it to your personal Review set. Great for words you keep forgetting." },
      { text: "🧠 <b>Tutor mode</b> tracks words you got wrong and shows them again after 1, 3, and 5 cards — spaced repetition built in." },
      { text: "🔀 <b>Shuffle</b> randomizes the word order so you're not just memorizing sequences." },
      { text: "▶ <b>Auto mode</b> advances cards automatically — useful for passive review. Set the delay (1–5 sec)." },
      { text: "🌐 <b>Translation language:</b> choose UK (Ukrainian), RU (Russian), or Both for card backs." },
      { text: "⌨ <b>Keyboard mode</b> (Study): flip to Translation → EN and type the English word from memory." },
      { text: "🔄 <b>Regen AI / Regen Memory</b> — regenerate fresh tasks for the current set and difficulty." },
      { text: `<b>Keyboard shortcuts:</b> <kbd>→</kbd> next word, <kbd>←</kbd> previous, <kbd>Space</kbd> flip card, double <kbd>Space</kbd> star a word.` },
    ]
  },
  uk: {
    title: "YourPath10k — Довідка",
    subtitle: "Твій путівник у світ 10,000 слів",
    hero: {
      title: "🎯 Мета: вивчити 10,000 англійських слів",
      text: `YourPath10k веде тебе через <strong>100 сетів по 100 слів</strong> у кожному. Перемикайся між 7 режимами навчання, щоб закріпити словниковий запас різними способами — від простих карток до AI-вправ та ланцюжків асоціацій.`
    },
    modesTitle: "Режими навчання",
    modes: [
      { icon: "📖", name: "Study", desc: "Класичні флеш-картки. Натисни на картку, щоб перегорнути та побачити переклад. Ідеально для першого знайомства з новими словами." },
      { icon: "🎯", name: "Choice", desc: "Тест з вибором відповіді. Вибери правильний переклад із 4 варіантів. Чудово для закріплення словника." },
      { icon: "🔊", name: "Audio", desc: "Слухай та пиши. Почуй слово вголос і надрукуй його правильно. Ідеально для вимови та правопису." },
      { icon: "✅", name: "True / False", desc: "Бачиш слово з перекладом — визнач, правильно чи ні. Швидкий та ефективний режим." },
      { icon: "🧩", name: "Matches", desc: "Знайди відповідні пари: слово з перекладом. Працює раундами по 8 пар за раз." },
      { icon: "⚡", name: "AI Mode", desc: "AI генерує речення з пропущеним словом. Реальний контекст допомагає словам запам'ятовуватися. Вибери складність: Easy / Medium / Hard." },
      { icon: "🧠", name: "Memory Associations", desc: "AI будує творчі ланцюжки слів (наприклад: dog → loyalty → knight). Запам'ятай ланцюжок, а потім відтвори його. Тренує глибинну пам'ять." },
    ],
    featuresTitle: "Функції та поради",
    tips: [
      { text: "⭐ <b>Зірочка</b> (подвійний тап або подвійний клік по картці) — додає його до особистого набору для повторення." },
      { text: "🧠 <b>Режим Tutor</b> запам'ятовує слова, де ти помилився, і показує їх знову через 1, 3 і 5 карток — інтервальне повторення." },
      { text: "🔀 <b>Shuffle</b> змішує порядок слів, щоб ти не запам'ятовував лише послідовність." },
      { text: "▶ <b>Auto режим</b> автоматично перегортає картки — зручно для пасивного повторення. Налаштуй затримку (1–5 сек)." },
      { text: "🌐 <b>Translation language:</b> вибери UK (українська), RU (російська) або обидві для зворотного боку картки." },
      { text: "⌨ <b>Keyboard mode</b> (Study): переключи напрямок на Translation → EN і друкуй англійське слово з пам'яті." },
      { text: "🔄 <b>Regen AI / Regen Memory</b> — згенерує нові завдання для поточного сету та рівня складності." },
      { text: `<b>Гарячі клавіші:</b> <kbd>→</kbd> наступне слово, <kbd>←</kbd> попереднє, <kbd>Space</kbd> перегорнути, подвійний <kbd>Space</kbd> — додати зірочку.` },
    ]
  },
  ru: {
    title: "YourPath10k — Справка",
    subtitle: "Твой путеводитель в мир 10,000 слов",
    hero: {
      title: "🎯 Цель: выучить 10,000 английских слов",
      text: `YourPath10k проведёт тебя через <strong>100 сетов по 100 слов</strong> в каждом. Переключайся между 7 режимами обучения, чтобы закрепить словарный запас разными способами — от простых карточек до AI-упражнений и цепочек ассоциаций.`
    },
    modesTitle: "Режимы обучения",
    modes: [
      { icon: "📖", name: "Study", desc: "Классические флеш-карточки. Нажми на карточку, чтобы перевернуть и увидеть перевод. Идеально для первого знакомства с новыми словами." },
      { icon: "🎯", name: "Choice", desc: "Тест с выбором ответа. Выбери правильный перевод из 4 вариантов. Отлично для закрепления словаря." },
      { icon: "🔊", name: "Audio", desc: "Слушай и печатай. Услышь слово вслух и напечатай его правильно. Идеально для произношения и правописания." },
      { icon: "✅", name: "True / False", desc: "Видишь слово с переводом — определи, правильно или нет. Быстрый и эффективный режим." },
      { icon: "🧩", name: "Matches", desc: "Найди подходящие пары: слово с переводом. Работает раундами по 8 пар за раз." },
      { icon: "⚡", name: "AI Mode", desc: "AI генерирует предложения с пропущенным словом. Реальный контекст помогает словам запомниться. Выбери сложность: Easy / Medium / Hard." },
      { icon: "🧠", name: "Memory Associations", desc: "AI строит творческие цепочки слов (например: dog → loyalty → knight). Запомни цепочку, потом воспроизведи. Тренирует глубинную память." },
    ],
    featuresTitle: "Функции и советы",
    tips: [
      { text: "⭐ <b>Звёздочка</b> (дабл тап или дабл клик по карточке) — добавляет его в личный набор для повторения." },
      { text: "🧠 <b>Режим Tutor</b> запоминает слова, где ты ошибся, и показывает их снова через 1, 3 и 5 карточек — интервальное повторение." },
      { text: "🔀 <b>Shuffle</b> перемешивает порядок слов, чтобы ты не запоминал только последовательность." },
      { text: "▶ <b>Auto режим</b> автоматически листает карточки — удобно для пассивного повторения. Настрой задержку (1–5 сек)." },
      { text: "🌐 <b>Translation language:</b> выбери UK (украинский), RU (русский) или оба для обратной стороны карточки." },
      { text: "⌨ <b>Keyboard mode</b> (Study): переключи направление на Translation → EN и печатай английское слово по памяти." },
      { text: "🔄 <b>Regen AI / Regen Memory</b> — сгенерирует новые задания для текущего сета и уровня сложности." },
      { text: `<b>Горячие клавиши:</b> <kbd>→</kbd> следующее слово, <kbd>←</kbd> предыдущее, <kbd>Space</kbd> перевернуть, двойной <kbd>Space</kbd> — добавить звёздочку.` },
    ]
  }
};

function openHelp() {
  document.getElementById("helpOverlay").style.display = "block";
  document.getElementById("helpModal").style.display = "block";
  renderHelp();
}

function closeHelp() {
  document.getElementById("helpOverlay").style.display = "none";
  document.getElementById("helpModal").style.display = "none";
}

function setHelpLang(lang) {
  helpLang = lang;
  document.querySelectorAll(".help-lang-btn").forEach((b, i) => {
    b.classList.toggle("active", ["en","uk","ru"][i] === lang);
  });
  renderHelp();
}

function renderHelp() {
  const c = HELP_CONTENT[helpLang];
  document.getElementById("helpTitle").textContent = c.title;
  document.getElementById("helpSubtitle").textContent = c.subtitle;

  const body = document.getElementById("helpBody");
  body.innerHTML = `
    <div class="help-hero">
      <div class="help-hero-title">${c.hero.title}</div>
      <div class="help-hero-text">${c.hero.text}</div>
    </div>

    <div class="help-section">
      <div class="help-section-title">${c.modesTitle}</div>
      ${c.modes.map(m => `
        <div class="help-mode">
          <div class="help-mode-icon">${m.icon}</div>
          <div>
            <div class="help-mode-name">${m.name}</div>
            <div class="help-mode-desc">${m.desc}</div>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="help-section">
      <div class="help-section-title">${c.featuresTitle}</div>
      <div class="help-tip-list">
        ${c.tips.map(t => `
          <div class="help-tip">
            <div class="help-tip-dot"></div>
            <div>${t.text}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// Close on Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeHelp(); closeAuth(); closeHeroProfile(); }
});


// ===================== GAME MODE =====================
let gameModeOn = false;

function toggleGameMode() {
  gameModeOn = !gameModeOn;
  const toggle = document.getElementById("gameModeToggle");
  const wrap   = document.getElementById("dungeonDropdownWrap");
  toggle.classList.toggle("active", gameModeOn);
  wrap.classList.toggle("visible", gameModeOn);
  const fab     = document.getElementById("heroProfileFab");
  const shopFab = document.getElementById("shopFab");
  if (gameModeOn) {
    if (!heroData) loadHeroFromLocal(); // restore from localStorage for guest users
    if (!getHeroClass()) { showClassSelect(); return; }
    if (!getHero()?.build) { showBuildSelect(); return; }
    fab.classList.add("visible");
    shopFab.classList.add("visible");
  } else {
    fab.classList.remove("visible");
    shopFab.classList.remove("visible");
  }
}


// ===================== EXAM TIMER BAR =====================
let examTimerInterval = null;
let examTimerRemaining = 0;

function startExamTimer(seconds) {
  stopExamTimer();
  const wrap = document.getElementById("examTimerWrap");
  const fill = document.getElementById("examTimerFill");
  if (!wrap || !fill) return;
  wrap.style.display = "block";
  examTimerRemaining = seconds;
  fill.style.width = "100%";
  fill.className = "exam-timer-fill";

  const tick = 100; // ms
  examTimerInterval = setInterval(() => {
    examTimerRemaining -= tick / 1000;
    const pct = Math.max(0, examTimerRemaining / seconds) * 100;
    fill.style.width = pct + "%";
    if (pct < 20) fill.className = "exam-timer-fill danger";
    else if (pct < 45) fill.className = "exam-timer-fill warn";
    else fill.className = "exam-timer-fill";
    if (examTimerRemaining <= 0) stopExamTimer();
  }, tick);
}

function stopExamTimer() {
  clearInterval(examTimerInterval);
  examTimerInterval = null;
  const wrap = document.getElementById("examTimerWrap");
  if (wrap) wrap.style.display = "none";
}

function examAbortExam() { abortExam(); }
let examState = null;

const EXAM_PHASES = [
  {
    num: 1, id: "study", icon: "⌨️",
    name: "Study + Keyboard",
    desc: "Type the English word from translation. Shuffle & Auto (5s) enabled.",
    rules: ["Autoplay every 5 seconds","Shuffle is on","Type the EN word from translation","Any wrong answer ends the exam"]
  },
  {
    num: 2, id: "truefalse", icon: "✅",
    name: "True / False",
    desc: "Decide if the translation is correct. Fast pace — 2s autoplay.",
    rules: ["Autoplay every 2 seconds","Shuffle is on","Any wrong answer ends the exam"]
  },
  {
    num: 3, id: "audio", icon: "🔊",
    name: "Audio",
    desc: "Listen and remember. Max 2 plays per word. 10s autoplay.",
    rules: ["Max 2 listens per word","Autoplay every 10 seconds","Shuffle is on","Any wrong answer ends the exam"]
  },
  {
    num: 4, id: "ai", icon: "⚡",
    name: "Context Mode",
    desc: "Generate a fresh Medium-level AI task list and fill in the blanks. No autoplay.",
    rules: ["Shuffle is on","Generate fresh Medium tasks","Type the missing word","Up to 3 mistakes allowed","4th mistake ends the exam"]
  }
];

function openExamModal() {
  const words = getWords();
  if (words.length < 4) {
    alert("Need at least 4 words in the current set to take the Exam.");
    return;
  }
  showExamModal(`
    <h2>🎓 Exam Mode</h2>
    <div class="exam-subtitle">Complete all 4 phases without failing to mark this set as learned.</div>
    <div class="exam-phase-list">
      ${EXAM_PHASES.map(p => `
        <div class="exam-phase-item">
          <div class="exam-phase-num">${p.num}</div>
          <div>
            <div class="exam-phase-name">${p.icon} ${p.name}</div>
            <div class="exam-phase-desc">${p.desc}</div>
          </div>
        </div>`).join("")}
    </div>
    <div class="exam-warning">⚠️ Any mistake in phases 1–3 immediately ends the exam. Phase 4 allows up to 3 AI errors.</div>
    <div class="exam-btn-row">
      <button class="exam-btn-secondary" onclick="closeExamModal()">Cancel</button>
      <button class="exam-btn-primary" onclick="startExam()">Start Exam →</button>
    </div>
  `);
}

function showExamModal(html) {
  document.getElementById("examModalContent").innerHTML = html;
  document.getElementById("examModal").style.display = "flex";
}

function closeExamModal() {
  document.getElementById("examModal").style.display = "none";
}

function startExam() {
  closeExamModal();
  examState = {
    phase: 0,
    setId: sets[currentSet].id,
    failed: false,
    aiErrors: [],
    audioPlayCounts: {},
    aiErrorCount: 0,
    aiPrefetched: false,
    interacted: false,
    phase4Started: false
  };
  document.body.classList.add("exam-active");
  document.getElementById("examBar").style.display = "block";
  // Pre-fetch AI tasks for phase 4 in background right now
  examPrefetchAI();
  examNextPhase();
}

function focusExamInput() {
  const input = document.getElementById("answerInput");
  if (input && input.offsetParent !== null) {
    input.focus();
  }
}

async function examPrefetchAI() {
  if (!aiTasks.length) {
    await loadAITasks();
  }
  if (examState) examState.aiPrefetched = true;
}

function examRunCountdown(onDone) {
  let overlay = document.getElementById("examCountdownOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "examCountdownOverlay";
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:300;
      display:flex;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);
      pointer-events:none;
    `;
    document.body.appendChild(overlay);
    // Inject animation
    const s = document.createElement("style");
    s.textContent = `@keyframes countPop {
      0%  { transform:scale(0.4);opacity:0; }
      45% { transform:scale(1.2);opacity:1; }
      100%{ transform:scale(1);  opacity:1; }
    }`;
    document.head.appendChild(s);
  }
  overlay.style.display = "flex";
  let count = 3;
  function tick() {
    if (count === 0) {
      overlay.style.display = "none";
      onDone();
      return;
    }
    overlay.innerHTML = `<div style="
      font-family:'DM Serif Display',serif;font-size:100px;
      color:#fff;text-shadow:0 0 50px rgba(251,191,36,0.7);
      animation:countPop 0.7s cubic-bezier(0.34,1.3,0.64,1);
    ">${count}</div>`;
    count--;
    setTimeout(tick, 800);
  }
  tick();
}

function examStartPhase(phaseNum) {
  closeExamModal();
  if (examState) examState.interacted = false;
  // Clear input field when starting a new phase
  const answerInput = document.getElementById("answerInput");
  if (answerInput) {
    answerInput.value = "";
    answerInput.classList.remove("input-correct", "input-wrong");
  }
  if (phaseNum === 4) {
    // Phase 4: no autoplay — user controls pace. Check if AI tasks ready.
    updateExamBar();
    render(); // will show Generate AI button if tasks not ready
    return;
  }
  examRunCountdown(() => {
    autoPlay = true;
    startAuto();
    document.getElementById("autoBtn").classList.add("active");
    updateExamBar();
    render();
    setTimeout(focusExamInput, 80);
  });
}

function examStartPhase4() {
  if (!examState) return;
  examRunCountdown(() => {
    examState.phase4Started = true;
    render();
    setTimeout(focusExamInput, 80);
  });
}


function updateExamBar() {
  if (!examState) return;
  const ph = EXAM_PHASES[examState.phase - 1];
  if (!ph) return;
  document.getElementById("examBarPhase").textContent =
    `🎓 Phase ${examState.phase} / 4 — ${ph.name}`;
  const errText = examState.phase === 4
    ? `Mistakes: ${examState.aiErrorCount || 0} / 3`
    : "Zero mistakes allowed";
  document.getElementById("examBarErrors").textContent = errText;
}

function examNextPhase() {
  if (!examState) return;
  examState.phase++;
  if (examState.phase > 4) { examSuccess(); return; }

  const ph = EXAM_PHASES[examState.phase - 1];
  updateExamBar();

  // Apply forced settings for this phase
  examApplyPhaseSettings(examState.phase);

  showExamModal(`
    <div class="exam-phase-start">
      <div class="phase-icon">${ph.icon}</div>
      <h3>Phase ${ph.num} / 4 — ${ph.name}</h3>
      <p>${ph.desc}</p>
      <ul class="exam-phase-rules">
        ${ph.rules.map(r => `<li>${r}</li>`).join("")}
      </ul>
      <div class="exam-btn-row">
        <button class="exam-btn-primary" onclick="examStartPhase(${ph.num})">Ready — Start Phase ${ph.num}</button>
      </div>
    </div>
  `);
}

function examApplyPhaseSettings(phase) {
  // Reset common state
  stopAuto();
  shuffleOn = true;
  current = 0;
  frozenOrder = null;
  tfPrompt = null;
  resetMatchesProgress();
  tutorQueue = []; tutorReviewWordId = null; tutorReviewStage = null; tutorReviewsShown = 0;
  initOrder();

  if (phase === 1) {
    selectMode("study");
    keyboardOn = true;
    direction = "ru-en";
    autoDelay = 5;
  } else if (phase === 2) {
    selectMode("truefalse");
    keyboardOn = false;
    direction = "all";
    autoDelay = 2;
  } else if (phase === 3) {
    selectMode("audio");
    keyboardOn = false;
    direction = "all";
    autoDelay = 10;
    examState.audioPlayCounts = {};
  } else if (phase === 4) {
    selectMode("ai");
    keyboardOn = false;
    direction = "all";
    autoDelay = 10;
    examState.aiErrorCount = 0;
    examState.aiErrors = [];
    // Force Medium difficulty and regenerate fresh phase-4 tasks.
    aiDifficulty = "medium";
    document.getElementById("aiEasyBtn").classList.remove("active");
    document.getElementById("aiMediumBtn").classList.add("active");
    document.getElementById("aiHardBtn").classList.remove("active");
    localStorage.removeItem(getAIKey());
    delete aiTasksCache[getAIKey()];
    aiTasks = null;
    startAIGeneration();
  }
  render();
}

function examFail(reason) {
  if (!examState) return;
  stopAuto();
  stopExamTimer();
  examState.failed = true;
  document.body.classList.remove("exam-active");
  document.getElementById("examBar").style.display = "none";
  autoPlay = false;
  // Restore normal settings
  examRestoreSettings();
  showExamModal(`
    <div class="exam-phase-start">
      <div class="phase-icon">💔</div>
      <h3>Exam Failed</h3>
      <p style="color:var(--wrong)">${reason}</p>
      <p style="margin-top:8px">Don't give up — review the words and try again!</p>
      <div class="exam-btn-row" style="margin-top:24px">
        <button class="exam-btn-secondary" onclick="closeExamModal(); examState=null;">Close</button>
        <button class="exam-btn-primary" onclick="closeExamModal(); openExamModal();">Try Again</button>
      </div>
    </div>
  `);
}

function abortExam() {
  if (!confirm("Abort the exam? All progress will be lost.")) return;
  stopAuto();
  stopExamTimer();
  autoPlay = false;
  examState = null;
  document.body.classList.remove("exam-active");
  document.getElementById("examBar").style.display = "none";
  examRestoreSettings();
  render();
}

function examRestoreSettings() {
  keyboardOn = false;
  direction = "all";
  shuffleOn = false;
  autoDelay = 3;
  current = 0; frozenOrder = null;
  initOrder(); render();
  document.getElementById("autoBtn").classList.remove("active");
  updateAllUI();
}

// Called from checkAnswer() when in exam
function examOnWrongAnswer(wordId, reason) {
  if (!examState || examState.phase === 4) return;
  flashWrong(wordId);
  examFail(`Phase ${examState.phase} failed: ${reason || "wrong answer"}.`);
}

function examOnPhase4Error(errorData) {
  if (!examState || examState.phase !== 4) return;
  examState.aiErrorCount = (examState.aiErrorCount || 0) + 1;
  if (errorData) examState.aiErrors.push(errorData);
  updateExamBar();
  if (examState.aiErrorCount > 3) {
    stopAuto();
    examFail(`Phase 4 failed: too many mistakes (${examState.aiErrorCount}).`);
  }
}

// Legacy alias (for renderCMResult hook if still present)
function examOnCMResult(hasError, errorData) {
  if (!hasError) return;
  examOnPhase4Error(errorData);
}

// Called when CM phase words are exhausted
function examPhase4Done() {
  stopAuto();
  autoPlay = false;
  if (examState.aiErrors.length === 0) {
    // Perfect — pass immediately
    examSuccess();
    return;
  }
  // Show Review AI screen
  showExamModal(`
    <div class="exam-phase-start">
      <div class="phase-icon">🤖</div>
      <h3>Phase 4 Complete</h3>
      <p>You made <strong style="color:var(--wrong)">${examState.aiErrorCount || 0}</strong> mistake${(examState.aiErrorCount || 0) !== 1 ? "s" : ""} in Context Mode.</p>
      <p style="margin-top:8px;color:var(--muted)">Let AI review whether these were genuinely your errors or AI task mistakes.</p>
      <div class="exam-btn-row" style="margin-top:24px">
        <button class="exam-btn-secondary" onclick="examSelfFail()">I made real mistakes</button>
        <button class="exam-btn-primary" onclick="examRunReviewAI()">Review AI ⚡</button>
      </div>
    </div>
  `);
}

function examSelfFail() {
  examFail("You acknowledged your own mistakes in Phase 4.");
}

async function examRunReviewAI() {
  showExamModal(`
    <div class="exam-phase-start">
      <div class="phase-icon">⏳</div>
      <h3>Reviewing with AI...</h3>
      <p>Checking ${examState.aiErrors.length} disputed answer${examState.aiErrors.length > 1 ? "s" : ""}...</p>
    </div>
  `);

  const errorsPayload = examState.aiErrors.map((e, i) => ({
    index: i,
    sentence: e.sentence || "(no sentence recorded)",
    word: e.word || e.wordEn || "",
    correctAnswer: e.correct || "",
    userAnswer: e.userAnswer || "(none)",
    availableOptions: e.options || []
  }));

  const prompt = `You are an exam auditor checking AI-generated fill-in-the-blank exercises.

For each task below, determine:
1. Was the stated correct answer genuinely the best fit in context?
2. Could the user's answer also be valid in context?
3. Were the distractor options fair (no valid answers disguised as wrong)?

VERDICT rules:
- "AI_ERROR": the task was flawed (wrong correct answer, user's answer was valid, or no correct option in list)
- "USER_ERROR": the task was fair and the user's answer was clearly wrong

Return ONLY a JSON array, no markdown:
[{"index":0,"verdict":"AI_ERROR"|"USER_ERROR","explanation":"brief reason","correctAnswer":"word"}]

Tasks:
${JSON.stringify(errorsPayload)}`;

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ words: ["__exam_review__"], type: "exam_review", _prompt: prompt })
    });

    // Since our generate.js doesn't have exam_review type yet,
    // we call the Anthropic API directly from frontend via our proxy
    // Actually we POST with a special wrapper — see generate.js update needed.
    // For now use the response:
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    const verdicts = Array.isArray(data) ? data : JSON.parse(data.content?.[0]?.text || "[]");
    examShowVerdicts(verdicts);
  } catch (e) {
    showExamModal(`
      <div class="exam-phase-start">
        <div class="phase-icon">⚠️</div>
        <h3>Review Failed</h3>
        <p>Could not reach AI reviewer: ${e.message}</p>
        <div class="exam-btn-row" style="margin-top:24px">
          <button class="exam-btn-secondary" onclick="examSelfFail()">Fail Exam</button>
          <button class="exam-btn-primary" onclick="examRunReviewAI()">Retry</button>
        </div>
      </div>
    `);
  }
}

function examShowVerdicts(verdicts) {
  const allAIError = verdicts.every(v => v.verdict === "AI_ERROR");
  const cards = verdicts.map((v, i) => {
    const err = examState.aiErrors[v.index] || examState.aiErrors[i] || {};
    const cls = v.verdict === "AI_ERROR" ? "ai-error" : "user-error";
    const tag = v.verdict === "AI_ERROR" ? "✓ AI Error" : "✗ Your Error";
    return `<div class="exam-verdict-card ${cls}">
      <div class="exam-verdict-tag">${tag}</div>
      <div class="exam-verdict-sentence">${err.sentence || ""}</div>
      <div class="exam-verdict-explanation">
        <strong>Your answer:</strong> ${err.userAnswer || "—"} &nbsp;·&nbsp;
        <strong>Correct:</strong> ${v.correctAnswer || err.correct || "—"}<br>
        ${v.explanation}
      </div>
    </div>`;
  }).join("");

  const outcomeIcon  = allAIError ? "🎉" : "😔";
  const outcomeTitle = allAIError ? "All errors were on AI's side!" : "Some errors were yours.";
  const outcomeColor = allAIError ? "var(--correct)" : "var(--wrong)";

  showExamModal(`
    <h2>${outcomeIcon} AI Review</h2>
    <div class="exam-subtitle" style="color:${outcomeColor};font-weight:600;margin-bottom:16px">${outcomeTitle}</div>
    <div style="margin-bottom:20px">${cards}</div>
    <div style="font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.6">
      ${allAIError
        ? "AI confirms all disputed answers were its fault. Do you agree with this verdict?"
        : "AI found mistakes on your side. Do you agree with this verdict?"}
    </div>
    <div class="exam-btn-row">
      <button class="exam-btn-secondary" onclick="examDisagree(${allAIError})">Disagree</button>
      <button class="exam-btn-primary" onclick="examAgree(${allAIError})">Agree</button>
    </div>
  `);
}

function examAgree(allAIError) {
  if (allAIError) {
    examSuccess();
  } else {
    examFail("You agreed that some mistakes were yours in Phase 4.");
  }
}

function examDisagree(aiSaidPass) {
  if (aiSaidPass) {
    // AI said you passed, you disagree → you self-fail
    examFail("You chose to self-fail after disagreeing with the AI verdict.");
  } else {
    // AI said you failed, you disagree → you pass despite AI
    examSuccess(true);
  }
}

function examSuccess(disputed = false) {
  stopAuto();
  autoPlay = false;
  const setId = examState?.setId ?? currentSet;
  document.body.classList.remove("exam-active");
  document.getElementById("examBar").style.display = "none";

  // Mark set as completed
  if (!completedSets.includes(setId)) {
    completedSets.push(setId);
    if (!currentUser) localStorage.setItem("completedSets", JSON.stringify(completedSets));
    scheduleSyncToCloud();
  }
  renderSets();
  examRestoreSettings();

  const note = disputed ? `<div style="font-size:12px;color:var(--muted);margin-top:8px">Passed via dispute — you were confident in your answers.</div>` : "";
  showExamModal(`
    <div class="exam-phase-start">
      <div class="phase-icon">🏆</div>
      <h3>Exam Passed!</h3>
      <p style="color:var(--correct)">Set ${setId} is now marked as <strong>Learned</strong>.</p>
      ${note}
      <div class="exam-btn-row" style="margin-top:24px">
        <button class="exam-btn-primary" onclick="closeExamModal(); examState=null;">Done</button>
      </div>
    </div>
  `);
  examState = null;
}

// Audio play count guard for exam phase 3
let examOrigSpeak = null;
function examGuardedSpeak(text, wordId) {
  if (examState?.phase === 3) {
    const counts = examState.audioPlayCounts;
    counts[wordId] = (counts[wordId] || 0) + 1;
    if (counts[wordId] > 2) return; // block 3rd play
  }
  speak(text);
}

init();
