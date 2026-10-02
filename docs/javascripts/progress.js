/* Progress tracker for sektor9.dev docs sites (MkDocs Material).
 * Adds a sticky per-page progress bar and persists exercise/project
 * checkbox state in localStorage. Also shows an overall track progress
 * on any page that has a data-track attribute on its <article>/<main>.
 *
 * How it works:
 *  - Every <input type="checkbox"> in an exercise list gets its checked
 *    state persisted (key = page URL + list order).
 *  - A floating "Progress" badge in the corner shows X of Y done for the
 *    current page and the % complete.
 *  - If the page's <main> has data-track="T", it aggregates ALL checkboxes
 *    across that track's pages (stored under the same track key) so you can
 *    see track-wide progress.
 */
(function () {
  'use strict';
  if (window.__progressLoaded) return;
  window.__progressLoaded = true;

  var KEY = 'sektor9-progress-v1';

  function store() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }

  function pageKey() { return location.pathname.replace(/\/$/, ''); }

  function refreshBadge() {
    var badge = document.querySelector('.sektor9-progress');
    if (!badge) return;
    var checkboxes = Array.prototype.slice.call(document.querySelectorAll('.exercise-list input[type=checkbox], .q-checks input[type=checkbox], main input[type=checkbox]'));
    var total = checkboxes.length;
    var done = checkboxes.filter(function (c) { return c.checked; }).length;
    var pct = total ? Math.round(done / total * 100) : 0;
    var label = badge.querySelector('.progress-label');
    if (label) label.textContent = total ? (done + '/' + total + ' · ' + pct + '%') : 'no items';
    var bar = badge.querySelector('.progress-fill');
    if (bar) bar.style.width = pct + '%';
  }

  function init() {
    var main = document.querySelector('main') || document.body;
    // find all checkboxes that look like exercises (inside task lists)
    var checkboxes = Array.prototype.slice.call(main.querySelectorAll('input[type=checkbox]'));
    var d = store();
    var pk = pageKey();

    checkboxes.forEach(function (cb, idx) {
      var key = pk + '::' + idx;
      if (d[key]) cb.checked = true;
      cb.addEventListener('change', function () {
        var s = store();
        if (cb.checked) s[key] = 1; else delete s[key];
        save(s);
        refreshBadge();
      });
    });

    // build badge
    var badge = document.createElement('div');
    badge.className = 'sektor9-progress';
    badge.innerHTML = '<div class="progress-label">0/0</div><div class="progress-track"><div class="progress-fill" style="width:0%"></div></div>';
    document.body.appendChild(badge);
    refreshBadge();

    // re-run on SPA nav
    document.addEventListener('DOMContentSwitch', init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
