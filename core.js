const Core = (() => {
  // ── état ────────────────────────────────────────────
  let story, phaseIndex, score, attempts, dragSrc;

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

    /* fond + style propre à l'histoire */
    if (s.background)
      document.body.style.background = `url("${s.background}") center/cover no-repeat fixed`;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `stories/${s.id}/style.css`;
    document.head.appendChild(link);

    /* titre onglet */
    document.title = s.title + " – TextoQuest";

    /* intro */
    $("intro-title").textContent = s.title;
    $("intro-desc").textContent = s.description;

    /* injecter le texte partout */
    ["story-text", "story-text-phase"].forEach((id) => {
      const el = $(id);
      if (el) el.innerHTML = s.text;
    });
  }

  // ── navigation ───────────────────────────────────────
  function startReading() {
    show("screen-reading");
  }

  function nextPhase() {
    if (phaseIndex >= story.phases.length) {
      _showResult();
      return;
    }
    _renderPhase(story.phases[phaseIndex]);
    show("screen-phase");
  }

  // ── rendu d'une phase ────────────────────────────────
  function _renderPhase(phase) {
    /* reset zones */
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

    /* mélange */
    const shuffled = [...phase.blocks].sort(() => Math.random() - 0.5);
    shuffled.forEach((b, i) => zone.appendChild(_makeBlock(b, i)));
    _bindDrag();
    _bindTouch();
  }

  function _makeBlock(b, i) {
    const div = document.createElement("div");
    div.className = "puzzle-block";
    div.draggable = true;
    div.dataset.id = b.id;
    div.dataset.index = i;
    div.innerHTML = `<div class="block-label">${b.label}</div>${b.text}`;
    return div;
  }

  function _bindDrag() {
    const zone = $("puzzle-zone");
    zone.querySelectorAll(".puzzle-block").forEach((el) => {
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
        if (dragSrc && dragSrc !== el) {
          const allBlocks = [...zone.querySelectorAll(".puzzle-block")];
          const srcI = allBlocks.indexOf(dragSrc);
          const tgtI = allBlocks.indexOf(el);
          if (srcI < tgtI) zone.insertBefore(dragSrc, el.nextSibling);
          else zone.insertBefore(dragSrc, el);
        }
        el.classList.remove("drag-over");
      });
    });
  }

  /* ── tactile ── */
  function _bindTouch() {
    let touchSrc = null,
      clone = null;

    $("puzzle-zone")
      .querySelectorAll(".puzzle-block")
      .forEach((el) => {
        el.addEventListener(
          "touchstart",
          (e) => {
            touchSrc = el;
            el.classList.add("dragging");
            const t = e.touches[0];
            clone = el.cloneNode(true);
            Object.assign(clone.style, {
              position: "fixed",
              zIndex: 9999,
              opacity: 0.85,
              pointerEvents: "none",
              width: el.offsetWidth + "px",
              left: t.clientX - el.offsetWidth / 2 + "px",
              top: t.clientY - el.offsetHeight / 2 + "px",
            });
            document.body.appendChild(clone);
          },
          { passive: true },
        );

        el.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
            const t = e.touches[0];
            if (clone) {
              clone.style.left = t.clientX - clone.offsetWidth / 2 + "px";
              clone.style.top = t.clientY - clone.offsetHeight / 2 + "px";
            }
            document
              .querySelectorAll(".puzzle-block")
              .forEach((b) => b.classList.remove("drag-over"));
            const under = _blockUnderTouch(t);
            if (under) under.classList.add("drag-over");
          },
          { passive: false },
        );

        el.addEventListener(
          "touchend",
          (e) => {
            const t = e.changedTouches[0];
            const under = _blockUnderTouch(t);
            if (under && under !== touchSrc) {
              const zone = $("puzzle-zone");
              const all = [...zone.querySelectorAll(".puzzle-block")];
              if (all.indexOf(touchSrc) < all.indexOf(under))
                zone.insertBefore(touchSrc, under.nextSibling);
              else zone.insertBefore(touchSrc, under);
            }
            document
              .querySelectorAll(".puzzle-block")
              .forEach((b) => b.classList.remove("dragging", "drag-over"));
            clone?.remove();
            clone = null;
            touchSrc = null;
          },
          { passive: true },
        );
      });
  }

  function _blockUnderTouch(t) {
    return [...document.querySelectorAll(".puzzle-block")].find((b) => {
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
    const ok = order.every((v, i) => v === correct[i]);

    if (ok) {
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
  //  QCM (single & multiple)
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
        if (!phase.multiple) {
          container
            .querySelectorAll(".qcm-option")
            .forEach((l) => l.classList.remove("selected"));
        }
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

    /* stamps */
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
      score++;
      _buildStamps(phase.clues.length, phase._current + 1);
      _feedback("phase-feedback", "success", "🔎 Indice collecté !");

      if (phase._current < phase.clues.length - 1) {
        setTimeout(() => {
          phase._current++;
          _showClue(phase, phase._current);
        }, 1400);
      } else {
        setTimeout(_showResult, 1400);
      }
      return;
    }

    attempts++;
    const miss = missing.map((g) => g.group).join(", ");
    if (attempts >= 3) {
      _highlightHints(c.hints);
      _feedback(
        "phase-feedback",
        "error",
        `💡 Relis les passages surlignés ! Il manquait : ${miss}.`,
      );
    } else {
      _feedback(
        "phase-feedback",
        "error",
        `🔍 Pas tout à fait… Il manque : ${miss}. (${3 - attempts} essai(s) avant un indice)`,
      );
    }
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
      el.innerHTML = el.innerHTML.replace(/<mark>(.*?)<\/mark>/gi, "$1");
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

    /* rebuild stamps dans result */
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
