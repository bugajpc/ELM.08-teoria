/**
 * ============================================================================
 * ELM.08 Exam Trainer - Core Application Logic
 * ============================================================================
 */

(function () {
  'use strict';

  // State Management
  let allQuestions = [];
  let categories = [];

  // Training Mode State
  let trainingPool = [];
  let currentTrainingQuestion = null;
  let currentTrainingChoices = [];
  let trainingAnswered = false;
  let trainingStats = {
    done: 0,
    correct: 0,
    wrong: 0
  };

  // Exam Mode State
  const EXAM_TOTAL_QUESTIONS = 40;
  const EXAM_TIME_SECONDS = 60 * 60; // 60 minutes
  let examQuestions = [];
  let examUserAnswers = []; // array of selected answer object or null
  let examCurrentIndex = 0;
  let examTimerInterval = null;
  let examSecondsLeft = EXAM_TIME_SECONDS;
  let examStartTime = null;
  let examDurationFormatted = "00:00";

  // ==========================================================================
  // Initialization & Data Loading
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', async () => {
    await loadQuestions();
    extractCategories();
    setupNavigationTabs();
    setupTrainingMode();
    setupExamMode();
    setupBrowserMode();
    setupKeyboardShortcuts();
  });

  async function loadQuestions() {
    try {
      const response = await fetch('questions.json');
      if (!response.ok) throw new Error('HTTP ' + response.status);
      allQuestions = await response.json();
      console.log('Załadowano pytania z pliku questions.json:', allQuestions.length);
    } catch (err) {
      console.warn('Nie udało się pobrać questions.json przez fetch (np. protokół file://). Używam wbudowanego QUESTIONS_DATA.', err);
      if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
        allQuestions = window.QUESTIONS_DATA;
      } else {
        alert('Błąd ładowania pytań. Upewnij się, że plik questions.json lub questions-data.js znajduje się w tym samym katalogu.');
      }
    }
  }

  function extractCategories() {
    const catsSet = new Set();
    allQuestions.forEach(q => {
      if (q.cat) catsSet.add(q.cat);
    });
    categories = Array.from(catsSet).sort();
  }

  // ==========================================================================
  // Navigation Tabs
  // ==========================================================================
  function setupNavigationTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        switchTab(targetTab);
      });
    });

    document.getElementById('btn-switch-to-exam').addEventListener('click', () => {
      switchTab('exam');
    });
  }

  function switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(t => {
      const isActive = t.getAttribute('data-tab') === tabId;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.remove('active');
    });

    const activeView = document.getElementById(`view-${tabId}`);
    if (activeView) activeView.classList.add('active');

    if (tabId === 'browser') {
      renderBrowserList();
    }
  }

  // ==========================================================================
  // Helper Functions
  // ==========================================================================
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // ==========================================================================
  // 1. TRAINING MODE (LOSUJ JEDNO PYTANIE BEZ POWTÓRZEŃ)
  // ==========================================================================
  function setupTrainingMode() {
    const catSelect = document.getElementById('training-category-select');
    catSelect.innerHTML = '<option value="ALL">Wszystkie kategorie (pełna pula)</option>';
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = `${cat}`;
      catSelect.appendChild(opt);
    });

    catSelect.addEventListener('change', () => {
      resetTrainingPool();
    });

    document.getElementById('btn-reset-training-pool').addEventListener('click', () => {
      resetTrainingPool();
    });

    document.getElementById('btn-restart-pool').addEventListener('click', () => {
      resetTrainingPool();
    });

    document.getElementById('btn-next-training').addEventListener('click', () => {
      loadNextTrainingQuestion();
    });

    resetTrainingPool();
  }

  function resetTrainingPool(specificQuestionIds = null) {
    const selectedCat = document.getElementById('training-category-select').value;
    
    if (specificQuestionIds && specificQuestionIds.length > 0) {
      trainingPool = allQuestions.filter(q => specificQuestionIds.includes(q.id));
    } else if (selectedCat === 'ALL') {
      trainingPool = [...allQuestions];
    } else {
      trainingPool = allQuestions.filter(q => q.cat === selectedCat);
    }

    // Shuffle the question pool
    trainingPool = shuffleArray(trainingPool);

    trainingStats = { done: 0, correct: 0, wrong: 0 };
    updateTrainingStatsUI();

    document.getElementById('training-card').style.display = 'flex';
    document.getElementById('training-finished-card').style.display = 'none';

    loadNextTrainingQuestion();
  }

  function updateTrainingStatsUI() {
    document.getElementById('stat-training-remaining').textContent = trainingPool.length;
    document.getElementById('stat-training-done').textContent = trainingStats.done;
    document.getElementById('stat-training-correct').textContent = trainingStats.correct;
    document.getElementById('stat-training-wrong').textContent = trainingStats.wrong;

    const total = trainingStats.correct + trainingStats.wrong;
    const acc = total > 0 ? Math.round((trainingStats.correct / total) * 100) : 0;
    document.getElementById('stat-training-accuracy').textContent = `${acc}%`;
  }

  function loadNextTrainingQuestion() {
    if (trainingPool.length === 0) {
      // Pool is finished!
      showTrainingFinishedUI();
      return;
    }

    trainingAnswered = false;
    // Pop a unique question from the shuffled pool
    currentTrainingQuestion = trainingPool.pop();
    updateTrainingStatsUI();

    const qCard = document.getElementById('training-card');
    qCard.style.display = 'flex';
    document.getElementById('training-finished-card').style.display = 'none';

    document.getElementById('training-category-badge').textContent = currentTrainingQuestion.cat;
    document.getElementById('training-counter').textContent = `Pozostało w puli: ${trainingPool.length}`;
    document.getElementById('training-question-text').textContent = currentTrainingQuestion.q;

    // Shuffle answer choices
    const choices = currentTrainingQuestion.a.map((ansText, originalIdx) => ({
      text: ansText,
      isCorrect: originalIdx === currentTrainingQuestion.c
    }));
    currentTrainingChoices = shuffleArray(choices);

    const answersGrid = document.getElementById('training-answers-grid');
    answersGrid.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    currentTrainingChoices.forEach((choice, idx) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.innerHTML = `
        <span class="answer-key">${letters[idx]}</span>
        <span class="answer-text">${choice.text}</span>
      `;
      btn.addEventListener('click', () => handleTrainingAnswer(idx));
      answersGrid.appendChild(btn);
    });

    // Reset explanation & next button
    const expBox = document.getElementById('training-explanation');
    expBox.style.display = 'none';

    const nextBtn = document.getElementById('btn-next-training');
    nextBtn.disabled = true;
  }

  function handleTrainingAnswer(selectedIndex) {
    if (trainingAnswered) return;
    trainingAnswered = true;

    trainingStats.done++;
    const selectedChoice = currentTrainingChoices[selectedIndex];
    const isCorrect = selectedChoice.isCorrect;

    if (isCorrect) {
      trainingStats.correct++;
    } else {
      trainingStats.wrong++;
    }
    updateTrainingStatsUI();

    // Style the answer buttons
    const buttons = document.querySelectorAll('#training-answers-grid .answer-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const choice = currentTrainingChoices[idx];
      if (choice.isCorrect) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      } else {
        btn.classList.add('unselected-muted');
      }
    });

    // Reveal explanation immediately
    const expBox = document.getElementById('training-explanation');
    const iconSpan = document.getElementById('explanation-status-icon');
    const titleSpan = document.getElementById('explanation-status-title');
    const textP = document.getElementById('training-explanation-text');

    if (isCorrect) {
      iconSpan.textContent = '✅';
      titleSpan.textContent = 'Poprawna odpowiedź!';
      titleSpan.style.color = '#10b981';
      expBox.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    } else {
      iconSpan.textContent = '❌';
      titleSpan.textContent = 'Niepoprawna odpowiedź!';
      titleSpan.style.color = '#ef4444';
      expBox.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    }

    textP.textContent = currentTrainingQuestion.ex;
    expBox.style.display = 'block';

    // Enable next button
    const nextBtn = document.getElementById('btn-next-training');
    nextBtn.disabled = false;
    nextBtn.focus();
  }

  function showTrainingFinishedUI() {
    document.getElementById('training-card').style.display = 'none';
    const finCard = document.getElementById('training-finished-card');
    finCard.style.display = 'block';

    const total = trainingStats.correct + trainingStats.wrong;
    const acc = total > 0 ? Math.round((trainingStats.correct / total) * 100) : 0;

    document.getElementById('training-finished-summary').innerHTML = `
      <div>Liczba rozwiązanych pytań: <strong>${trainingStats.done}</strong></div>
      <div style="color: var(--color-success); margin-top: 4px;">Poprawne odpowiedzi: <strong>${trainingStats.correct}</strong></div>
      <div style="color: var(--color-danger); margin-top: 4px;">Błędne odpowiedzi: <strong>${trainingStats.wrong}</strong></div>
      <div style="color: var(--accent-cyan); margin-top: 8px; font-size: 1.25rem;">Skuteczność: <strong>${acc}%</strong></div>
    `;
  }

  // ==========================================================================
  // 2. EXAM MODE (40 PYTAŃ - SYMULACJA TEORETYCZNA CKE)
  // ==========================================================================
  function setupExamMode() {
    document.getElementById('btn-start-exam').addEventListener('click', startNewExam);
    document.getElementById('btn-restart-exam').addEventListener('click', startNewExam);

    document.getElementById('btn-exam-prev').addEventListener('click', () => {
      if (examCurrentIndex > 0) {
        showExamQuestion(examCurrentIndex - 1);
      }
    });

    document.getElementById('btn-exam-next').addEventListener('click', () => {
      if (examCurrentIndex < EXAM_TOTAL_QUESTIONS - 1) {
        showExamQuestion(examCurrentIndex + 1);
      }
    });

    document.getElementById('btn-finish-exam-early').addEventListener('click', () => {
      const answeredCount = examUserAnswers.filter(a => a !== null).length;
      const unanswered = EXAM_TOTAL_QUESTIONS - answeredCount;
      let confirmMsg = 'Czy na pewno chcesz zakończyć egzamin i poznać wynik?';
      if (unanswered > 0) {
        confirmMsg = `Pozostało jeszcze ${unanswered} pytań bez odpowiedzi. Czy na pewno chcesz zakończyć egzamin teraz?`;
      }
      if (confirm(confirmMsg)) {
        finishExam();
      }
    });

    document.getElementById('btn-practice-mistakes').addEventListener('click', () => {
      // Find wrong questions
      const wrongIds = [];
      examQuestions.forEach((q, idx) => {
        const userAns = examUserAnswers[idx];
        if (!userAns || !userAns.isCorrect) {
          wrongIds.push(q.id);
        }
      });
      if (wrongIds.length > 0) {
        switchTab('training');
        resetTrainingPool(wrongIds);
      }
    });

    // Review Filters
    document.querySelectorAll('.btn-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        filterReviewList(filter);
      });
    });
  }

  function startNewExam() {
    if (examTimerInterval) clearInterval(examTimerInterval);

    // Pick 40 random questions from allQuestions
    const shuffledPool = shuffleArray(allQuestions);
    examQuestions = shuffledPool.slice(0, EXAM_TOTAL_QUESTIONS);

    // Prepare structure for each question with randomized choices
    examQuestions = examQuestions.map(q => {
      const choices = q.a.map((ansText, originalIdx) => ({
        text: ansText,
        isCorrect: originalIdx === q.c
      }));
      return {
        ...q,
        shuffledChoices: shuffleArray(choices)
      };
    });

    examUserAnswers = new Array(EXAM_TOTAL_QUESTIONS).fill(null);
    examCurrentIndex = 0;
    examSecondsLeft = EXAM_TIME_SECONDS;
    examStartTime = new Date();

    // Toggle views
    document.getElementById('exam-intro-screen').style.display = 'none';
    document.getElementById('exam-result-screen').style.display = 'none';
    document.getElementById('exam-active-screen').style.display = 'block';

    // Setup Navigation Grid 1..40
    renderExamGrid();

    // Start Timer
    updateExamTimerDisplay();
    examTimerInterval = setInterval(() => {
      examSecondsLeft--;
      updateExamTimerDisplay();
      if (examSecondsLeft <= 0) {
        clearInterval(examTimerInterval);
        alert('Czas egzaminu minął! Twój egzamin zostanie automatycznie sprawdzony.');
        finishExam();
      }
    }, 1000);

    showExamQuestion(0);
  }

  function updateExamTimerDisplay() {
    const timerElem = document.getElementById('exam-timer');
    const textElem = document.getElementById('exam-time-left');
    textElem.textContent = formatTime(examSecondsLeft);

    if (examSecondsLeft <= 5 * 60) {
      timerElem.classList.add('warning');
    } else {
      timerElem.classList.remove('warning');
    }
  }

  function renderExamGrid() {
    const grid = document.getElementById('exam-questions-grid');
    grid.innerHTML = '';

    for (let i = 0; i < EXAM_TOTAL_QUESTIONS; i++) {
      const btn = document.createElement('button');
      btn.className = 'grid-num-btn';
      btn.id = `exam-grid-btn-${i}`;
      btn.textContent = i + 1;
      btn.addEventListener('click', () => showExamQuestion(i));
      grid.appendChild(btn);
    }
  }

  function updateExamGridStatus() {
    for (let i = 0; i < EXAM_TOTAL_QUESTIONS; i++) {
      const btn = document.getElementById(`exam-grid-btn-${i}`);
      if (!btn) continue;

      btn.classList.remove('answered', 'current');
      if (examUserAnswers[i] !== null) {
        btn.classList.add('answered');
      }
      if (i === examCurrentIndex) {
        btn.classList.add('current');
      }
    }

    const answeredCount = examUserAnswers.filter(a => a !== null).length;
    document.getElementById('exam-answered-count-tip').textContent = `Udzielono odpowiedzi: ${answeredCount} / ${EXAM_TOTAL_QUESTIONS}`;
    document.getElementById('exam-progress-text').textContent = `${examCurrentIndex + 1} z ${EXAM_TOTAL_QUESTIONS}`;
    const fillPercent = ((examCurrentIndex + 1) / EXAM_TOTAL_QUESTIONS) * 100;
    document.getElementById('exam-progress-fill').style.width = `${fillPercent}%`;
  }

  function showExamQuestion(index) {
    examCurrentIndex = index;
    const q = examQuestions[index];

    document.getElementById('exam-category-badge').textContent = q.cat;
    document.getElementById('exam-question-counter').textContent = `Pytanie ${index + 1} / ${EXAM_TOTAL_QUESTIONS}`;
    document.getElementById('exam-question-text').textContent = q.q;

    // Render Choices
    const answersGrid = document.getElementById('exam-answers-grid');
    answersGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.shuffledChoices.forEach((choice, cIdx) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      const isSelected = examUserAnswers[index] && examUserAnswers[index].choiceIndex === cIdx;
      if (isSelected) {
        btn.style.borderColor = 'var(--accent-cyan)';
        btn.style.background = 'rgba(6, 182, 212, 0.15)';
      }

      btn.innerHTML = `
        <span class="answer-key" style="${isSelected ? 'background: var(--accent-cyan); color: #fff;' : ''}">${letters[cIdx]}</span>
        <span class="answer-text">${choice.text}</span>
      `;
      btn.addEventListener('click', () => {
        examUserAnswers[index] = {
          choiceIndex: cIdx,
          choiceText: choice.text,
          isCorrect: choice.isCorrect
        };
        showExamQuestion(index);
      });
      answersGrid.appendChild(btn);
    });

    // Navigation buttons state
    document.getElementById('btn-exam-prev').disabled = (index === 0);
    document.getElementById('btn-exam-next').disabled = (index === EXAM_TOTAL_QUESTIONS - 1);

    updateExamGridStatus();
  }

  function finishExam() {
    if (examTimerInterval) clearInterval(examTimerInterval);

    // Calculate time elapsed
    const elapsedSeconds = EXAM_TIME_SECONDS - examSecondsLeft;
    examDurationFormatted = formatTime(elapsedSeconds);

    // Calculate score
    let score = 0;
    examQuestions.forEach((q, idx) => {
      const ans = examUserAnswers[idx];
      if (ans && ans.isCorrect) score++;
    });

    const percent = Math.round((score / EXAM_TOTAL_QUESTIONS) * 100);
    const passed = score >= 20; // 50% threshold in CKE

    // Switch to results view
    document.getElementById('exam-active-screen').style.display = 'none';
    const resScreen = document.getElementById('exam-result-screen');
    resScreen.style.display = 'flex';

    // Hero Badge
    const badge = document.getElementById('result-status-badge');
    badge.className = `result-status-badge ${passed ? 'passed' : 'failed'}`;
    badge.textContent = passed ? 'WYNIK POZYTYWNY (ZDANY)' : 'WYNIK NEGATYWNY (NIEZDANY)';

    document.getElementById('result-title').textContent = `Twój wynik: ${score} / ${EXAM_TOTAL_QUESTIONS} (${percent}%)`;
    document.getElementById('result-subtitle').textContent = passed
      ? 'Gratulacje! Osiągnięto wymagany próg zdawalności CKE (minimum 50%).'
      : 'Niestety, do zdania egzaminu zabrakło punktów (wymagane min. 20 pkt / 50%). Przeanalizuj błędy poniżej.';

    document.getElementById('res-score').textContent = `${score} / ${EXAM_TOTAL_QUESTIONS}`;
    document.getElementById('res-percent').textContent = `${percent}%`;
    document.getElementById('res-time').textContent = examDurationFormatted;
    document.getElementById('res-status-icon').textContent = passed ? '🎉' : '⚠️';
    document.getElementById('res-verdict-text').textContent = passed ? 'Zdany (≥ 50%)' : 'Niezdany (< 50%)';

    // Mistakes Practice button visibility
    const mistakesBtn = document.getElementById('btn-practice-mistakes');
    const wrongCount = EXAM_TOTAL_QUESTIONS - score;
    if (wrongCount > 0) {
      mistakesBtn.style.display = 'inline-flex';
      mistakesBtn.textContent = `Przećwicz błędne odpowiedzi (${wrongCount}) w treningu`;
    } else {
      mistakesBtn.style.display = 'none';
    }

    // Category Breakdown
    renderCategoryBreakdown();

    // Render Review List
    renderExamReviewList();
  }

  function renderCategoryBreakdown() {
    const catStats = {};
    examQuestions.forEach((q, idx) => {
      if (!catStats[q.cat]) {
        catStats[q.cat] = { total: 0, correct: 0 };
      }
      catStats[q.cat].total++;
      if (examUserAnswers[idx] && examUserAnswers[idx].isCorrect) {
        catStats[q.cat].correct++;
      }
    });

    const listContainer = document.getElementById('category-breakdown-list');
    listContainer.innerHTML = '';

    Object.keys(catStats).sort().forEach(cat => {
      const st = catStats[cat];
      const p = Math.round((st.correct / st.total) * 100);
      const color = p >= 75 ? 'var(--color-success)' : (p >= 50 ? 'var(--color-warning)' : 'var(--color-danger)');

      const item = document.createElement('div');
      item.className = 'cat-bar-item';
      item.innerHTML = `
        <div class="cat-bar-header">
          <span class="cat-bar-name">${cat}</span>
          <span class="cat-bar-score">${st.correct} / ${st.total} (${p}%)</span>
        </div>
        <div class="cat-bar-track">
          <div class="cat-bar-fill" style="width: ${p}%; background: ${color};"></div>
        </div>
      `;
      listContainer.appendChild(item);
    });
  }

  function renderExamReviewList() {
    let wrongCount = 0;
    let correctCount = 0;

    examQuestions.forEach((q, idx) => {
      const ans = examUserAnswers[idx];
      if (ans && ans.isCorrect) correctCount++;
      else wrongCount++;
    });

    document.getElementById('count-wrong-review').textContent = wrongCount;
    document.getElementById('count-correct-review').textContent = correctCount;

    filterReviewList('all');
  }

  function filterReviewList(filterType) {
    const container = document.getElementById('review-items-container');
    container.innerHTML = '';

    examQuestions.forEach((q, idx) => {
      const userAns = examUserAnswers[idx];
      const isCorrect = userAns && userAns.isCorrect;

      if (filterType === 'correct' && !isCorrect) return;
      if (filterType === 'wrong' && isCorrect) return;

      const card = document.createElement('div');
      card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      const correctChoice = q.shuffledChoices.find(c => c.isCorrect);
      const userText = userAns ? userAns.choiceText : 'Brak odpowiedzi';

      card.innerHTML = `
        <div class="review-item-header">
          <span class="category-badge">${q.cat}</span>
          <span style="font-family: var(--font-code); font-size: 0.85rem; color: var(--text-muted);">Pytanie ${idx + 1}</span>
        </div>
        <div class="review-q-title">${q.q}</div>
        
        <div class="review-user-ans ${isCorrect ? 'correct' : 'wrong'}">
          <strong>Twoja odpowiedź:</strong> ${userText} ${isCorrect ? '✅' : '❌'}
        </div>

        ${!isCorrect ? `
          <div class="review-correct-reveal">
            <strong>Poprawna odpowiedź:</strong> ${correctChoice ? correctChoice.text : ''}
          </div>
        ` : ''}

        <div class="explanation-box" style="margin-top: 0.5rem;">
          <div class="explanation-header">
            <span class="explanation-icon">💡</span>
            <span class="explanation-title">Wyjaśnienie z arkusza</span>
          </div>
          <p class="explanation-content">${q.ex}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ==========================================================================
  // 3. QUESTION BROWSER (BAZA WIEDZY)
  // ==========================================================================
  function setupBrowserMode() {
    const filterSelect = document.getElementById('browser-category-filter');
    filterSelect.innerHTML = '<option value="ALL">Wszystkie działy</option>';
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      filterSelect.appendChild(opt);
    });

    filterSelect.addEventListener('change', renderBrowserList);
    document.getElementById('browser-search-input').addEventListener('input', renderBrowserList);
  }

  function renderBrowserList() {
    const searchVal = document.getElementById('browser-search-input').value.toLowerCase().trim();
    const selectedCat = document.getElementById('browser-category-filter').value;
    const container = document.getElementById('browser-cards-grid');
    container.innerHTML = '';

    const filtered = allQuestions.filter(q => {
      const matchCat = (selectedCat === 'ALL' || q.cat === selectedCat);
      const matchSearch = !searchVal || 
        q.q.toLowerCase().includes(searchVal) || 
        q.ex.toLowerCase().includes(searchVal) ||
        q.a.some(ans => ans.toLowerCase().includes(searchVal));
      return matchCat && matchSearch;
    });

    document.getElementById('browser-count-text').textContent = `Wyświetlono pytań: ${filtered.length} z ${allQuestions.length}`;

    if (filtered.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 3rem;">Nie znaleziono pytań spełniających kryteria.</div>';
      return;
    }

    filtered.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'browser-item-card';

      const letters = ['A', 'B', 'C', 'D'];
      const choicesHtml = q.a.map((ans, aIdx) => {
        const isCorrect = (aIdx === q.c);
        return `
          <div class="browser-answer-choice ${isCorrect ? 'correct' : ''}">
            <strong>${letters[aIdx]}.</strong> ${ans} ${isCorrect ? ' <span style="color: #10b981; font-weight:700;">(POPRAWNA)</span>' : ''}
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="card-meta">
          <span class="category-badge">${q.cat}</span>
          <span class="question-counter">#${q.id || (idx + 1)}</span>
        </div>
        <div style="font-size: 1.08rem; font-weight: 600; color: #fff;">${q.q}</div>
        <div class="browser-answers-list">
          ${choicesHtml}
        </div>
        <div class="explanation-box">
          <div class="explanation-header">
            <span class="explanation-icon">💡</span>
            <span class="explanation-title">Wyjaśnienie z arkusza egzaminacyjnego</span>
          </div>
          <p class="explanation-content">${q.ex}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ==========================================================================
  // Keyboard Shortcuts Support
  // ==========================================================================
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Don't trigger if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      const activeTab = document.querySelector('.nav-tab.active');
      const currentTab = activeTab ? activeTab.getAttribute('data-tab') : null;

      // Numbers 1, 2, 3, 4
      if (['1', '2', '3', '4'].includes(e.key)) {
        const choiceIdx = parseInt(e.key, 10) - 1;
        if (currentTab === 'training') {
          if (!trainingAnswered) {
            handleTrainingAnswer(choiceIdx);
          }
        } else if (currentTab === 'exam') {
          const activeExamScreen = document.getElementById('exam-active-screen');
          if (activeExamScreen && activeExamScreen.style.display !== 'none') {
            const q = examQuestions[examCurrentIndex];
            if (q && q.shuffledChoices[choiceIdx]) {
              examUserAnswers[examCurrentIndex] = {
                choiceIndex: choiceIdx,
                choiceText: q.shuffledChoices[choiceIdx].text,
                isCorrect: q.shuffledChoices[choiceIdx].isCorrect
              };
              showExamQuestion(examCurrentIndex);
            }
          }
        }
      }

      // Space or Enter: next in training
      if (e.key === 'Enter' || e.key === ' ') {
        if (currentTab === 'training' && trainingAnswered) {
          e.preventDefault();
          loadNextTrainingQuestion();
        }
      }

      // Arrows Left/Right in exam
      if (currentTab === 'exam') {
        const activeExamScreen = document.getElementById('exam-active-screen');
        if (activeExamScreen && activeExamScreen.style.display !== 'none') {
          if (e.key === 'ArrowLeft' && examCurrentIndex > 0) {
            showExamQuestion(examCurrentIndex - 1);
          } else if (e.key === 'ArrowRight' && examCurrentIndex < EXAM_TOTAL_QUESTIONS - 1) {
            showExamQuestion(examCurrentIndex + 1);
          }
        }
      }
    });
  }

})();
