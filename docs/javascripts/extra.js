/**
 * sektor9 Electronics hub — extra page behaviour.
 * Renders every <pre class="mermaid"> block (produced by pymdownx.superfences
 * custom_fences) after the page content is injected, matching the OSDev hub.
 */
window.addEventListener("load", function () {
  if (typeof mermaid === "undefined") return; // CDN not loaded (offline)
  mermaid.initialize({ startOnLoad: false, theme: "base", securityLevel: "loose" });
  document.querySelectorAll("pre.mermaid").forEach(function (pre) {
    try {
      mermaid.render("mmd-" + Math.random().toString(36).slice(2), pre.textContent)
        .then(function (res) {
          pre.innerHTML = res.svg;
        })
        .catch(function () { /* leave raw if parse fails */ });
    } catch (e) { /* ignore */ }
  });
});
