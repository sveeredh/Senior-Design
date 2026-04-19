// ── CLOCK ──────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  el.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// ── SUBTLE SPEED FLICKER (placeholder animation) ───
// Makes the speed number feel "live" with tiny fluctuations
const speedEl = document.querySelector('.speed-num');
const ovSpeedEl = document.querySelector('.ov-val');
let baseSpeed = 187;

function flickerSpeed() {
  const delta = Math.round((Math.random() - 0.5) * 8);
  const newSpeed = Math.max(60, Math.min(220, baseSpeed + delta));
  if (speedEl) speedEl.textContent = newSpeed;
  // Also update the overlay stat if it shows speed
  const ovStats = document.querySelectorAll('.ov-stat');
  if (ovStats[0]) {
    const valEl = ovStats[0].querySelector('.ov-val');
    if (valEl) valEl.innerHTML = `${newSpeed} <span class="ov-unit">mph</span>`;
  }
  // Drift base slowly
  baseSpeed = baseSpeed * 0.95 + newSpeed * 0.05;
}
setInterval(flickerSpeed, 800);

// ── RPM BAR ANIMATION ──────────────────────────────
const rpmFill = document.querySelector('.rpm-fill');
let rpmBase = 74.9;
function flickerRPM() {
  const delta = (Math.random() - 0.5) * 4;
  const pct = Math.max(30, Math.min(98, rpmBase + delta));
  if (rpmFill) rpmFill.style.width = pct + '%';
  const rpmVal = Math.round(pct / 100 * 15000);
  const rpmLabel = document.querySelector('.rpm-label');
  if (rpmLabel) rpmLabel.textContent = `RPM: ${rpmVal.toLocaleString()} / 15,000`;
}
setInterval(flickerRPM, 600);

// ── G-FORCE BARS ───────────────────────────────────
const latBar  = document.querySelector('.gbar-lat');
const longBar = document.querySelector('.gbar-long');
const gfVals  = document.querySelectorAll('.gf-val');

function flickerG() {
  const latPct  = Math.max(10, Math.min(95, 62 + (Math.random()-0.5)*20));
  const longPct = Math.max(5,  Math.min(90, 35 + (Math.random()-0.5)*30));
  if (latBar)  latBar.style.width  = latPct  + '%';
  if (longBar) longBar.style.width = longPct + '%';
  if (gfVals[0]) gfVals[0].textContent = (latPct  / 100 * 4.5).toFixed(1) + ' G';
  if (gfVals[1]) gfVals[1].textContent = (longPct / 100 * 5.0).toFixed(1) + ' G';
}
setInterval(flickerG, 700);

console.log('%cPITWALL LOADED', 'color:#e8001d;font-size:20px;font-weight:bold;');
console.log('%cStatic placeholder mode — wire up your data source to go live.', 'color:#6b7585;');