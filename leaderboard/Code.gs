/**
 * Tippy Tap Escape - shared leaderboard
 * Paste this whole file into Extensions > Apps Script of your Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 *
 * The game sends each player's best stage and coins; this script keeps one row
 * per player in a tab named "Scores" and sends back the ranking.
 */
const SHEET_NAME = 'Scores';
const MAX_ROWS = 500;      // stop adding new players beyond this
const MAX_PER_CALL = 20;   // players accepted from one device per request
const TOP_N = 50;          // rows returned to the game

function doGet(e) { return handle_(e); }
function doPost(e) { return handle_(e); }

function handle_(e) {
  const out = { ok: true };
  try {
    const q = (e && e.parameter) || {};
    let players = null;
    if (q.d) players = JSON.parse(q.d);
    else if (e && e.postData && e.postData.contents) players = JSON.parse(e.postData.contents).players;
    const mine = {};
    if (Array.isArray(players) && players.length) {
      const list = players.slice(0, MAX_PER_CALL).map(clean_).filter(Boolean);
      list.forEach(function (p) { mine[p.id] = true; });
      if (list.length) put_(list);
    }
    out.top = top_(mine, String(q.cur || ''));
  } catch (err) {
    out.ok = false;
    out.error = String(err);
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['id', 'name', 'buddy', 'bestStage', 'coins', 'updated']);
    sh.setFrozenRows(1);
  }
  return sh;
}

/** Keep only safe, sensible values. Returns null for anything malformed. */
function clean_(p) {
  if (!p || typeof p !== 'object') return null;
  const id = String(p.id || '');
  if (!/^p[a-z0-9]{6,24}$/.test(id)) return null;
  // no control characters, no leading = + - @ (so a name can never become a formula), max 12 chars
  let name = String(p.name || '').replace(/[\u0000-\u001f<>]/g, '').replace(/^[=+\-@\s]+/, '').trim().slice(0, 12);
  if (!name) name = 'Player';
  const buddy = /^(bunny|frog|kid|girl|dino|cat|pen)$/.test(String(p.chr)) ? String(p.chr) : 'bunny';
  const best = Math.max(1, Math.min(999, Math.floor(Number(p.best) || 1)));
  const coins = Math.max(0, Math.min(9999999, Math.floor(Number(p.earned) || 0)));
  return { id: id, name: name, buddy: buddy, best: best, coins: coins };
}

function put_(list) {
  const lock = LockService.getScriptLock();
  lock.waitLock(8000);
  try {
    const sh = sheet_();
    const last = sh.getLastRow();
    const rows = last > 1 ? sh.getRange(2, 1, last - 1, 6).getValues() : [];
    const at = {};
    rows.forEach(function (r, i) { at[String(r[0])] = i; });
    const now = new Date();
    list.forEach(function (p) {
      if (at[p.id] !== undefined) {
        const r = rows[at[p.id]];            // records only ever go up
        r[1] = p.name; r[2] = p.buddy;
        r[3] = Math.max(Number(r[3]) || 1, p.best);
        r[4] = Math.max(Number(r[4]) || 0, p.coins);
        r[5] = now;
      } else if (rows.length < MAX_ROWS) {
        at[p.id] = rows.length;
        rows.push([p.id, p.name, p.buddy, p.best, p.coins, now]);
      }
    });
    if (rows.length) sh.getRange(2, 1, rows.length, 6).setValues(rows);
  } finally {
    lock.releaseLock();
  }
}

/** Ranking: best stage first, then coins. Player ids are never sent back. */
function top_(mine, cur) {
  const sh = sheet_();
  const last = sh.getLastRow();
  if (last < 2) return [];
  const rows = sh.getRange(2, 1, last - 1, 5).getValues();
  rows.sort(function (a, b) { return (Number(b[3]) || 0) - (Number(a[3]) || 0) || (Number(b[4]) || 0) - (Number(a[4]) || 0); });
  return rows.slice(0, TOP_N).map(function (r) {
    const id = String(r[0]);
    return { name: String(r[1]), chr: String(r[2]), best: Number(r[3]) || 1, coins: Number(r[4]) || 0, mine: !!mine[id], me: id === cur };
  });
}
