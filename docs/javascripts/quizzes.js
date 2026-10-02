/* Quizzes & self-assessment for sektor9.dev docs sites (MkDocs Material).
 * Usage: any element with class="quiz" is auto-upgraded into an interactive,
 * auto-graded quiz.
 *
 * Authoring format (inside markdown):
 *   <div class="quiz" data-title="Quick check">
 *     <div class="q" data-type="choice">
 *       <p class="question">What does a bootloader do?</p>
 *       <ul class="options">
 *         <li data-correct>Loads the OS kernel into memory and starts it</li>
 *         <li>Compiles the kernel</li>
 *         <li>Manages virtual memory</li>
 *       </ul>
 *     </div>
 *     <div class="q" data-type="tf">
 *       <p class="question">True or false: the stack grows downward on x86.</p>
 *       <ul class="options">
 *         <li data-correct>True</li>
 *         <li>False</li>
 *       </ul>
 *     </div>
 *     <div class="q" data-type="fill">
 *       <p class="question">The CPU register holding the next instruction is called the ____ pointer.</p>
 *       <input class="answer" data-answers="instruction, program counter, ip, eip, rip">
 *     </div>
 *   </div>
 *
 * Clicking an option or pressing Enter on the fill input grades that question:
 * correct -> green, wrong -> red + correct one highlighted. The quiz footer
 * shows a running score (x of y) and a "Retry" button. Results persist in
 * localStorage so progress survives reloads.
 */
(function () {
  'use strict';
  if (window.__quizzesLoaded) return;
  window.__quizzesLoaded = true;

  function qs(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function norm(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function makeScore(el) {
    var bar = document.createElement('div');
    bar.className = 'quiz-score';
    bar.innerHTML = '<span class="quiz-score-label">Score: </span><span class="quiz-score-val">0/0</span>' +
      ' <button class="quiz-retry" type="button">↻ Retry</button>';
    el.appendChild(bar);
    return bar;
  }

  function grade(quiz, qEl, correct, wasCorrect, scoreEl) {
    qEl.classList.add(wasCorrect ? 'q-correct' : 'q-wrong');
    if (!wasCorrect && correct) qEl.classList.add('q-show-answer');
    var all = qs('.q', quiz);
    var done = 0, good = 0;
    all.forEach(function (q) {
      if (q.classList.contains('q-correct')) { good++; done++; }
      else if (q.classList.contains('q-wrong')) { done++; }
    });
    var val = scoreEl.querySelector('.quiz-score-val');
    val.textContent = good + '/' + all.length;
    if (done === all.length) {
      var pct = Math.round(good / all.length * 100);
      var msg = pct === 100 ? ' 🎉 Perfect!' : pct >= 70 ? ' 👍 Well done — review any red ones.' : ' 📖 Re-read the section and retry.';
      val.textContent = good + '/' + all.length + ' (' + pct + '%)' + msg;
    }
    // persist
    try {
      var key = 'quiz-' + (quiz.dataset.title || 'untitled');
      localStorage.setItem(key, good + '/' + all.length);
    } catch (e) {}
  }

  function buildChoice(quiz, qEl, scoreEl) {
    var options = qs('li', qEl);
    options.forEach(function (li) {
      li.classList.add('quiz-opt');
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      var isCorrect = li.hasAttribute('data-correct');
      function pick() {
        if (qEl.classList.contains('q-correct') || qEl.classList.contains('q-wrong')) return;
        li.classList.add('quiz-picked');
        grade(quiz, qEl, isCorrect, isCorrect, scoreEl);
      }
      li.addEventListener('click', pick);
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
      });
    });
  }

  function buildFill(quiz, qEl, scoreEl) {
    var input = qEl.querySelector('input.answer');
    if (!input) return;
    var answers = (input.getAttribute('data-answers') || '').split(',').map(norm).filter(Boolean);
    function check() {
      if (qEl.classList.contains('q-correct') || qEl.classList.contains('q-wrong')) return;
      var val = norm(input.value);
      var ok = answers.indexOf(val) !== -1;
      input.classList.add(ok ? 'in-correct' : 'in-wrong');
      grade(quiz, qEl, answers.join(', '), ok, scoreEl);
      if (!ok) {
        var hint = document.createElement('div');
        hint.className = 'quiz-hint';
        hint.textContent = 'Acceptable answers: ' + answers.join(', ');
        if (!qEl.querySelector('.quiz-hint')) qEl.appendChild(hint);
      }
    }
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); check(); } });
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'quiz-submit'; btn.textContent = 'Check';
    btn.addEventListener('click', check);
    input.parentNode.appendChild(btn);
  }

  function upgrade(quiz) {
    if (quiz.dataset.upgraded) return;
    quiz.dataset.upgraded = '1';
    var scoreEl = makeScore(quiz);
    qs('.q', quiz).forEach(function (qEl) {
      if (qEl.dataset.type === 'fill') buildFill(quiz, qEl, scoreEl);
      else buildChoice(quiz, qEl, scoreEl);
    });
    var retry = quiz.querySelector('.quiz-retry');
    if (retry) retry.addEventListener('click', function () {
      qs('.q', quiz).forEach(function (q) {
        q.classList.remove('q-correct', 'q-wrong', 'q-show-answer');
        var i = q.querySelector('input.answer');
        if (i) { i.classList.remove('in-correct', 'in-wrong'); i.value = ''; }
        var h = q.querySelector('.quiz-hint'); if (h) h.remove();
      });
      qs('.quiz-picked', quiz).forEach(function (p) { p.classList.remove('quiz-picked'); });
      scoreEl.querySelector('.quiz-score-val').textContent = '0/' + qs('.q', quiz).length;
    });
  }

  function scan() {
    qs('.quiz').forEach(upgrade);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }
  // re-scan after navigation (MkDocs Material uses instant loading)
  document.addEventListener('DOMContentSwitch', scan);
})();
