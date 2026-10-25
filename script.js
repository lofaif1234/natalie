const calendarStart = Date.UTC(2026, 9, 26);
const dayMilliseconds = 86400000;
function messageDate(day) {
  return new Intl.DateTimeFormat('it-IT', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(calendarStart + (day - 1) * dayMilliseconds));
}
const cover = document.querySelector('#cover');
const notebook = document.querySelector('#notebook');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const themeSwitch = document.querySelector('#theme-switch');
const preview = new URLSearchParams(location.search).get('anteprima') === '1';
let theme = 'death-note';
let page = 0;
try { theme = localStorage.getItem('notebook-theme') === 'pusheen' ? 'pusheen' : 'death-note'; } catch {}
function unlockedDay(now = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(now).map(part => [part.type, part.value]));
  const date = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day));
  return Math.max(0, Math.min(dailyMessages.length, Math.floor((date - calendarStart) / dayMilliseconds) + 1));
}
function render() {
  const day = page - 2;
  const locked = page >= 3 && !preview && day > unlockedDay();
  const content = page < 3 ? introductions[page] : { title: dailyMessages[day - 1][0], message: dailyMessages[day - 1][1] };
  document.querySelector('#page-label').textContent = page < 3 ? '' : messageDate(day);
  document.querySelector('#page-label').hidden = page < 3;
  document.querySelector('#page-title').textContent = locked ? 'Una piccola sorpresa' : content.title;
  document.querySelector('#page-count').textContent = `${page + 1} / ${introductions.length + dailyMessages.length}`;
  document.querySelector('#message').textContent = locked ? 'Questa pagina ti aspetta. Torna il giorno giusto per scoprire il tuo messaggio.' : content.message.replace('{tema}', theme === 'pusheen' ? 'pusheen' : 'death note');
  document.querySelector('#message-symbol').textContent = locked ? '✧' : '♡';
  document.querySelector('#unlock-note').textContent = locked ? `Si apre il ${messageDate(day)}` : '';
  previous.disabled = page === 0;
  next.disabled = page === introductions.length + dailyMessages.length - 1;
}
function closeBook() { notebook.hidden = true; cover.hidden = false; cover.focus(); }
cover.addEventListener('click', () => { cover.hidden = true; notebook.hidden = false; render(); document.querySelector('.message-page').focus(); });
document.querySelector('#close').addEventListener('click', closeBook);
previous.addEventListener('click', () => { if (page > 0) { page--; render(); } });
next.addEventListener('click', () => { if (page < introductions.length + dailyMessages.length - 1) { page++; render(); } });
document.addEventListener('keydown', event => { if (notebook.hidden) return; if (event.key === 'Escape') closeBook(); if (event.key === 'ArrowLeft') previous.click(); if (event.key === 'ArrowRight') next.click(); });
function applyTheme() {
  const isPusheen = theme === 'pusheen';
  document.body.classList.toggle('pusheen', isPusheen);
  if (!notebook.hidden) render();
  themeSwitch.textContent = isPusheen ? 'Tema Death Note' : 'Tema Pusheen';
  themeSwitch.setAttribute('aria-pressed', String(isPusheen));
  cover.setAttribute('aria-label', 'Apri il calendario per Natalie');
  notebook.setAttribute('aria-label', 'Calendario dell’avvento per Natalie');
}
themeSwitch.addEventListener('click', () => {
  theme = theme === 'pusheen' ? 'death-note' : 'pusheen';
  try { localStorage.setItem('notebook-theme', theme); } catch {}
  applyTheme();
});
setInterval(() => { if (!notebook.hidden) render(); }, 30000);
document.addEventListener('visibilitychange', () => { if (!document.hidden && !notebook.hidden) render(); });
applyTheme();

