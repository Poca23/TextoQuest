const Core = (() => {
  // ── état ────────────────────────────────────────────
  let story, phaseIndex, score, attempts, dragSrc;

  // ── touch state (module-level, listeners attachés une seule fois) ──
  let _touchSrc = null,
    _touchOrigin = null,
    _touchOffX = 0,
    _touchOffY = 0,
    _blockStartX = 0,
    _blockStartY = 0;

  // ── utilitaires ─────────────────────────────────────
  const $ = (id) => document.getElementById(id);
  const show = (id) => {
    document
      .querySelectorAll(".screen")
      .forEach((s) => s.classList.toggle("active", s.id === id));
  };

  // ── init ─────────────────────────────────────────────
  function init(s) {
    story = s;
    phaseIndex = 0;
    score = 0;
    attempts = 0;

    if (s.background)
      document.body.style.background = `url("${s.background}") center/cover no-repeat fixed`;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `stories/${s.id}/style.css`;
    document.head.appendChild(link);

    document.title = s.title + " – TextoQuest";
    $("intro-title").textContent = s.title;
    $("intro-desc").textContent = s.description;

    ["story-text", "story-text-phase"].forEach((id) => {
      const el = $(id);
      if (el) el.innerHTML = s.text;
    });
    history.replaceState(null, "", "#intro");
  }

  // ── navigation ───────────────────────────────────────
  function startReading() {
    show("screen-reading");
    history.pushState(null, "", "#lecture");
  }

  function nextPhase() {
    if (phaseIndex >= story.phases.length) {
      _showResult();
      return;
    }
    _renderPhase(story.phases[phaseIndex]);
    show("screen-phase");
    history.pushState(null, "", `#phase-${phaseIndex + 1}`);
  }

  // ── rendu d'une phase ────────────────────────────────
  function _renderPhase(phase) {
    ["puzzle-zone", "qcm-zone", "freetext-zone"].forEach((id) => {
      $(id).style.display = "none";
    });
    _hideFeedback("phase-feedback");
    $("phase-title").textContent = phase.title || "";
    $("phase-instructions").textContent = phase.instructions || "";

    if (phase.type === "drag-drop") _renderDragDrop(phase);
    if (phase.type === "qcm") _renderQCM(phase);
    if (phase.type === "free-text") _renderFreeText(phase);
  }

  // ── validation dispatcher ────────────────────────────
  function validatePhase() {
    const phase = story.phases[phaseIndex];
    if (phase.type === "drag-drop") _checkDragDrop(phase);
    if (phase.type === "qcm") _checkQCM(phase);
    if (phase.type === "free-text") _checkFreeText(phase);
  }

  // ── avance à la phase suivante ───────────────────────
  function _advance() {
    phaseIndex++;
    attempts = 0;
    if (phaseIndex >= story.phases.length) {
      setTimeout(_showResult, 900);
    } else {
      setTimeout(() => {
        _renderPhase(story.phases[phaseIndex]);
        _hideFeedback("phase-feedback");
        history.pushState(null, "", `#phase-${phaseIndex + 1}`);
      }, 1200);
    }
  }

  // ════════════════════════════════════════════════════
  //  DRAG & DROP
  // ════════════════════════════════════════════════════
  function _renderDragDrop(phase) {
    const zone = $("puzzle-zone");
    zone.style.display = "flex";
    zone.innerHTML = "";
    [...phase.blocks]
      .sort(() => Math.random() - 0.5)
      .forEach((b) => zone.appendChild(_makeBlock(b)));
    _bindDrag();
  }

  function _makeBlock(b) {
    const div = document.createElement("div");
    div.className = "puzzle-block";
    div.draggable = true;
    div.dataset.id = b.id;
    div.innerHTML = `<div class="block-label">${b.label}</div>${b.text}`;
    return div;
  }

  function _bindDrag() {
    const zone = $("puzzle-zone");
    zone.querySelectorAll(".puzzle-block").forEach((el) => {
      // ── souris ──
      el.addEventListener("dragstart", (e) => {
        dragSrc = el;
        el.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });
      el.addEventListener("dragend", () =>
        zone
          .querySelectorAll(".puzzle-block")
          .forEach((b) => b.classList.remove("dragging", "drag-over")),
      );
      el.addEventListener("dragover", (e) => {
        e.preventDefault();
        el.classList.add("drag-over");
      });
      el.addEventListener("dragleave", () => el.classList.remove("drag-over"));
      el.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragSrc && dragSrc !== el) _swapBlocks(zone, dragSrc, el);
        el.classList.remove("drag-over");
      });

      // ── tactile : start uniquement ici ──
      el.addEventListener(
        "touchstart",
        (e) => {
          if (_touchSrc) return;
          e.preventDefault();
          _touchSrc = el;
          _touchOrigin = el.nextSibling;
          const r = el.getBoundingClientRect();
          _touchOffX = e.touches[0].clientX - r.left;
          _touchOffY = e.touches[0].clientY - r.top;
          _blockStartX = r.left; // position initiale du bloc dans la page
          _blockStartY = r.top;
          el.classList.add("dragging");
        },
        { passive: false },
      );
    });
  }

  // ── listeners document : UNE SEULE FOIS ──
  document.addEventListener(
    "touchmove",
    (e) => {
      if (!_touchSrc) return;
      e.preventDefault();
      const t = e.touches[0];
      // déplacement du doigt depuis le touchstart
      const dx = t.clientX - _touchOffX - _blockStartX;
      const dy = t.clientY - _touchOffY - _blockStartY;
      _touchSrc.style.transform = `translate(${dx}px, ${dy}px)`;
      _touchSrc.style.zIndex = "999";
      $("puzzle-zone")
        .querySelectorAll(".puzzle-block")
        .forEach((b) => b.classList.remove("drag-over"));
      const under = _blockUnderTouch(t);
      if (under) under.classList.add("drag-over");
    },
    { passive: false },
  );

  document.addEventListener(
    "touchend",
    (e) => {
      if (!_touchSrc) return;
      _touchSrc.style.transform = "";
      _touchSrc.style.zIndex = "";
      const t = e.changedTouches[0];
      const under = _blockUnderTouch(t);
      const zone = $("puzzle-zone");
      if (under) _swapBlocks(zone, _touchSrc, under);
      else zone.insertBefore(_touchSrc, _touchOrigin);
      zone
        .querySelectorAll(".puzzle-block")
        .forEach((b) => b.classList.remove("dragging", "drag-over"));
      _touchSrc = _touchOrigin = null;
    },
    { passive: true },
  );

  document.addEventListener("touchcancel", () => {
    if (!_touchSrc) return;
    _touchSrc.style.transform = "";
    _touchSrc.style.zIndex = "";
    const zone = $("puzzle-zone");
    if (zone) {
      zone.insertBefore(_touchSrc, _touchOrigin);
      zone
        .querySelectorAll(".puzzle-block")
        .forEach((b) => b.classList.remove("dragging", "drag-over"));
    }
    _touchSrc = _touchOrigin = null;
  });

  document.addEventListener("touchcancel", () => {
    if (!_touchSrc) return;
    _touchSrc.style.transform = "";
    _touchSrc.style.zIndex = "";
    const zone = $("puzzle-zone");
    if (zone) zone.insertBefore(_touchSrc, _touchOrigin);
    zone &&
      zone
        .querySelectorAll(".puzzle-block")
        .forEach((b) => b.classList.remove("dragging", "drag-over"));
    _touchSrc = null;
    _touchOrigin = null;
  });

  function _swapBlocks(zone, a, b) {
    const all = [...zone.querySelectorAll(".puzzle-block")];
    const idxA = all.indexOf(a);
    const idxB = all.indexOf(b);
    if (idxA < idxB) zone.insertBefore(a, b.nextSibling);
    else zone.insertBefore(a, b);
  }

  function _blockUnderTouch(t) {
    return [...document.querySelectorAll(".puzzle-block")].find((b) => {
      if (b === _touchSrc) return false;
      const r = b.getBoundingClientRect();
      return (
        t.clientX >= r.left &&
        t.clientX <= r.right &&
        t.clientY >= r.top &&
        t.clientY <= r.bottom
      );
    });
  }

  function _checkDragDrop(phase) {
    const order = [...$("puzzle-zone").querySelectorAll(".puzzle-block")].map(
      (b) => +b.dataset.id,
    );
    const correct = phase.blocks.map((b) => b.id);
    if (order.every((v, i) => v === correct[i])) {
      _feedback(
        "phase-feedback",
        "success",
        "✅ Parfait ! L'ordre est correct.",
      );
      _advance();
    } else {
      _feedback(
        "phase-feedback",
        "error",
        "❌ Pas tout à fait… Regarde bien l'histoire et réessaie.",
      );
    }
  }

  // ════════════════════════════════════════════════════
  //  QCM
  // ════════════════════════════════════════════════════
  function _renderQCM(phase) {
    $("qcm-zone").style.display = "block";
    $("qcm-question").textContent = phase.question;
    const container = $("qcm-options");
    container.innerHTML = "";
    const type = phase.multiple ? "checkbox" : "radio";
    phase.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.className = "qcm-option";
      label.innerHTML = `<input type="${type}" name="qcm" value="${i}" />${opt.text}`;
      label.addEventListener("click", () => {
        if (!phase.multiple)
          container
            .querySelectorAll(".qcm-option")
            .forEach((l) => l.classList.remove("selected"));
        label.classList.toggle(
          "selected",
          label.querySelector("input").checked,
        );
      });
      container.appendChild(label);
    });
  }

  function _checkQCM(phase) {
    const selected = [
      ...$("qcm-options").querySelectorAll("input:checked"),
    ].map((i) => +i.value);
    if (!selected.length) {
      _feedback("phase-feedback", "error", "Sélectionne au moins une réponse.");
      return;
    }
    const correct = phase.options
      .map((o, i) => (o.correct ? i : -1))
      .filter((i) => i >= 0);
    const ok =
      selected.length === correct.length &&
      selected.every((v) => correct.includes(v));
    $("qcm-options")
      .querySelectorAll(".qcm-option")
      .forEach((l, i) => {
        if (phase.options[i].correct) l.classList.add("correct");
        else if (l.classList.contains("selected")) l.classList.add("wrong");
      });
    if (ok) {
      _feedback("phase-feedback", "success", "✅ Bonne réponse !");
      score++;
      _advance();
    } else {
      attempts++;
      _feedback(
        "phase-feedback",
        "error",
        "❌ Ce n'est pas tout à fait ça. Relis le texte.",
      );
    }
  }

  // ════════════════════════════════════════════════════
  //  FREE TEXT
  // ════════════════════════════════════════════════════
  function _renderFreeText(phase) {
    $("freetext-zone").style.display = "block";
    _buildStamps(phase.clues.length);
    _showClue(phase, 0);
    phase._current = 0;
  }

  function _showClue(phase, idx) {
    const c = phase.clues[idx];
    $("clue-number").textContent = `Indice ${idx + 1} / ${phase.clues.length}`;
    $("clue-type").textContent = c.type || "";
    $("clue-question").textContent = c.question;
    $("clue-answer").value = "";
    attempts = 0;
    _hideFeedback("phase-feedback");
    _clearHighlights();
    _clearHelp();
  }

  function _checkFreeText(phase) {
    const c = phase.clues[phase._current];
    const answer = $("clue-answer").value.toLowerCase().trim();
    if (!answer) {
      _feedback(
        "phase-feedback",
        "error",
        "Écris ta réponse avant de valider.",
      );
      return;
    }

    const { ok, missing } = _matchKeywords(answer, c.keywords);
    if (ok) {
      _clearHighlights();
      _clearHelp();
      score++;
      _buildStamps(phase.clues.length, phase._current + 1);
      _feedback("phase-feedback", "success", "🔎 Indice collecté !");

      const btn = $("phase-btn");
      btn.disabled = true;

      if (phase._current < phase.clues.length - 1) {
        setTimeout(() => {
          phase._current++;
          _showClue(phase, phase._current);
          btn.disabled = false;
        }, 1400);
      } else {
        setTimeout(_showResult, 1400);
      }
      return;
    }

    attempts++;
    _showHelp(c, attempts);

    if (attempts >= 3) {
      _clearHighlights();
      _highlightHints(c.hints);
      _feedback("phase-feedback", "error", "🔦 Relis les passages surlignés !");
    } else {
      _feedback(
        "phase-feedback",
        "error",
        `🔍 Pas tout à fait… (${3 - attempts} essai(s) avant un indice)`,
      );
    }
  }

  function _showHelp(clue, level) {
    _clearHelp();
    if (!clue.help || !clue.help[level - 1]) return;
    const h = clue.help[level - 1];
    const el = document.createElement("div");
    el.id = "help-bubble";
    el.className = `help-bubble visible lvl-${level}`;
    el.innerHTML = `<strong>${h.icon} ${h.title}</strong>${h.text}`;
    $("clue-answer").insertAdjacentElement("afterend", el);
  }

  function _clearHelp() {
    const el = $("help-bubble");
    if (el) el.remove();
  }

  function _matchKeywords(answer, keywords) {
    const missing = keywords.filter(
      (g) => !g.words.some((w) => answer.includes(w.toLowerCase())),
    );
    return { ok: missing.length === 0, missing };
  }

  function _highlightHints(hints) {
    ["story-text", "story-text-phase"].forEach((id) => {
      const el = $(id);
      if (!el) return;
      let html = el.innerHTML;
      hints.forEach((h) => {
        const safe = h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        html = html.replace(new RegExp(safe, "gi"), (m) => `<mark>${m}</mark>`);
      });
      el.innerHTML = html;
    });
  }

  function _clearHighlights() {
    ["story-text", "story-text-phase"].forEach((id) => {
      const el = $(id);
      if (!el) return;
      el.querySelectorAll("mark").forEach((mark) => {
        mark.replaceWith(mark.textContent);
      });
    });
  }

  function _buildStamps(total, earned = 0) {
    const row = $("stamps-row");
    if (!row) return;
    row.innerHTML = Array.from(
      { length: total },
      (_, i) => `<div class="stamp ${i < earned ? "earned" : ""}">🔍</div>`,
    ).join("");
  }

  // ── résultat ─────────────────────────────────────────
  function _showResult() {
    const badge = (story.badges || _defaultBadges()).find(
      (b) => score >= b.min && score <= b.max,
    ) || { icon: "🎉", title: "Terminé !", subtitle: "" };

    $("result-icon").textContent = badge.icon;
    $("result-title").textContent = badge.title;
    $("result-subtitle").textContent = badge.subtitle;
    $("result-score").textContent = `${score} indice(s) collecté(s)`;

    const freePhase = story.phases.find((p) => p.type === "free-text");
    if (freePhase) {
      const total = freePhase.clues.length;
      $("result-stamps").innerHTML = Array.from(
        { length: total },
        (_, i) => `<div class="stamp ${i < score ? "earned" : ""}">🔍</div>`,
      ).join("");
    } else {
      $("result-stamps").innerHTML = "";
    }
    show("screen-result");
    history.pushState(null, "", "#resultat");
  }

  function _defaultBadges() {
    return [
      {
        min: 0,
        max: 2,
        icon: "🔎",
        title: "Détective débutant",
        subtitle: "Continue à t'entraîner !",
      },
      {
        min: 3,
        max: 4,
        icon: "🕵️",
        title: "Inspecteur en herbe",
        subtitle: "Bon travail !",
      },
      {
        min: 5,
        max: 5,
        icon: "🏅",
        title: "Grand Inspecteur",
        subtitle: "Excellent !",
      },
      {
        min: 6,
        max: 6,
        icon: "🌟",
        title: "Détective Légendaire",
        subtitle: "Parfait !",
      },
    ];
  }

  // ── feedback ─────────────────────────────────────────
  function _feedback(id, type, msg) {
    const el = $(id);
    el.className = `feedback ${type}`;
    el.textContent = msg;
  }
  function _hideFeedback(id) {
    const el = $(id);
    el.className = "feedback hidden";
    el.textContent = "";
  }

  // ── restart ──────────────────────────────────────────
  function restart() {
    init(story);
    show("screen-intro");
  }

  return { init, startReading, nextPhase, validatePhase, restart };
})();
