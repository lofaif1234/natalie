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
try { page = Math.max(0, Math.min(34, Number(localStorage.getItem('last-read-page')) || 0)); } catch {}
try { theme = localStorage.getItem('notebook-theme') === 'pusheen' ? 'pusheen' : 'death-note'; } catch {}
function unlockedDay(now = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(now).map(part => [part.type, part.value]));
  const date = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day));
  return Math.max(0, Math.min(dailyMessages.length, Math.floor((date - calendarStart) / dayMilliseconds) + 1));
}
function render() {
  const day = page - 2;
  try { localStorage.setItem('last-read-page', String(page)); } catch {}
  document.querySelector('.message-page').scrollTop = 0;
  const locked = page >= 3 && !preview && day > unlockedDay();
  const content = page < 3 ? introductions[page] : { title: dailyMessages[day - 1][0], message: dailyMessages[day - 1][1] };
  document.querySelector('#page-label').textContent = page < 3 ? '' : messageDate(day);
  document.querySelector('#page-label').hidden = page < 3;
  document.querySelector('#page-title').textContent = locked ? 'Una piccola sorpresa' : content.title;
  document.querySelector('#page-count').textContent = `${page + 1} / ${introductions.length + dailyMessages.length}`;
  document.querySelector('#message').textContent = locked ? 'Questa pagina ti aspetta. Torna il giorno giusto per scoprire il tuo messaggio.' : content.message.replace('{tema}', theme === 'pusheen' ? 'pusheen' : 'death note');
  document.querySelector('#message-symbol').textContent = locked ? '✧' : '♡';
  document.querySelector('#unlock-note').textContent = locked ? `Si apre il ${messageDate(day)}` : '';
  document.querySelector('#reading-progress-fill').style.width = `${(page + 1) / 35 * 100}%`;
  renderCalendar();
  previous.disabled = page === 0;
  next.disabled = page === introductions.length + dailyMessages.length - 1;
}
function closeBook() { notebook.hidden = true; document.querySelector('.cover-wrap').hidden = false; document.querySelector('#calendar-panel').hidden = true; document.querySelector('#show-calendar').setAttribute('aria-expanded', 'false'); cover.focus(); }
function openBook() { document.querySelector('.cover-wrap').hidden = true; notebook.hidden = false; render(); document.querySelector('.message-page').focus(); }
cover.addEventListener('click', openBook);
document.querySelector('#open-today').addEventListener('click', () => { page = unlockedDay() > 0 ? unlockedDay() + 2 : 0; openBook(); });
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


function renderCalendar() {
  const grid = document.querySelector('#day-grid');
  const links = document.querySelector('.intro-links');
  grid.replaceChildren();
  links.replaceChildren();
  const available = unlockedDay();
  function makeButton(label, target) {
    const button = document.createElement('button');
    button.textContent = label;
    if (page === target) button.setAttribute('aria-current', 'page');
    button.addEventListener('click', () => { page = target; render(); });
    return button;
  }
  introductions.forEach((intro, index) => { links.append(makeButton(['per te', 'prima di iniziare', 'ancora una cosa'][index], index)); });
  dailyMessages.forEach((message, index) => {
    const date = new Date(calendarStart + index * dayMilliseconds);
    const locked = !preview && index >= available;
    const button = makeButton(String(date.getUTCDate()), index + 3);
    const month = document.createElement('small');
    month.textContent = date.getUTCMonth() === 9 ? 'OTT' : 'NOV';
    button.append(month);
    button.classList.toggle('locked', locked);
    button.classList.toggle('today', index + 1 === available);
    button.setAttribute('aria-label', messageDate(index + 1) + (locked ? ', ancora chiuso' : ', disponibile'));
    grid.append(button);
  });
  document.querySelector('#calendar-hint').textContent = preview ? 'Anteprima · tutte le pagine sono aperte' : `${available} di 32 messaggi disponibili · i giorni più chiari sono già aperti`;
}
const calendarPanel = document.querySelector('#calendar-panel');
const calendarToggle = document.querySelector('#show-calendar');
function setCalendar(open) { if (open) cuteLayer.replaceChildren(); calendarPanel.hidden = !open; calendarToggle.setAttribute('aria-expanded', String(open)); if (open) renderCalendar(); }
calendarToggle.addEventListener('click', () => setCalendar(calendarPanel.hidden));
document.querySelector('#hide-calendar').addEventListener('click', () => { setCalendar(false); calendarToggle.focus(); });
document.addEventListener('pointerdown', event => { if (!calendarPanel.hidden && !calendarPanel.contains(event.target) && !calendarToggle.contains(event.target)) setCalendar(false); });
const cuteMessages = [
  'ps sei bellissima pure oggi',
  'ok ma quanto sei carina',
  'comunque sono contento che ci sei',
  'ti darei un abbraccio ma per ora ti tocca sto popup',
  'e niente mi andava di farti sorridere',
  'scommetto che pure adesso sei bellissima',
  'questo cuoricino te lo becchi ♡',
  'ora ci starebbe bene un abbraccio tuo',
  'non fare quella faccia lo so che hai sorriso',
  'comunque un po mi distrai pure da lontano',
  'piccolo promemoria ti voglio bene',
  'ok basta essere cosi carina che poi mi distraggo',
  'mi fa piacere quando mi scrivi anche se non ho niente di intelligente da rispondere',
  'ti mando un bacio piccolo piccolo',
  'questo era solo per rubarti un mezzo sorriso',
  'un abbraccio di quelli che durano un po piu del previsto',
  'non e colpa mia se mi fai sorridere come un scemo',
  'si pure questo messaggino e una scusa per farti un complimento',
  'comunque oggi ti meriti un po di coccole',
  'sei proprio carina e niente volevo dirtelo',
  'se eri qui un abbraccio te lo beccavi sicuramente',
  'spero che stai sorridendo almeno un pochino',
  'non ho niente da chiederti volevo solo farti sorridere',
  'ps questo bacio puoi pure tenerlo ♡'
];
const cuteLayer = document.createElement('div');
cuteLayer.className = 'cute-layer';
cuteLayer.setAttribute('aria-live', 'polite');
cuteLayer.setAttribute('aria-atomic', 'true');
document.body.append(cuteLayer);
let cuteQueue = [];
let cuteTimer;
let cuteDismissTimer;
function nextCuteMessage() {
  if (!cuteQueue.length) {
    cuteQueue = [...cuteMessages];
    for (let i = cuteQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cuteQueue[i], cuteQueue[j]] = [cuteQueue[j], cuteQueue[i]];
    }
  }
  return cuteQueue.pop();
}
function showCuteMessage() {
  if (document.hidden || document.querySelector('#surprise-dialog').open || !document.querySelector('#calendar-panel').hidden) return;
  const popup = document.createElement('div');
  popup.className = 'cute-popup';
  const heart = document.createElement('span');
  heart.className = 'cute-heart';
  heart.setAttribute('aria-hidden', 'true');
  heart.textContent = '♡';
  const text = document.createElement('p');
  text.textContent = nextCuteMessage();
  const dismiss = document.createElement('button');
  dismiss.type = 'button';
  dismiss.setAttribute('aria-label', 'Chiudi il messaggio');
  dismiss.textContent = '×';
  dismiss.addEventListener('click', () => popup.remove());
  popup.append(heart, text, dismiss);
  cuteLayer.replaceChildren(popup);
  if (window.matchMedia('(max-width: 700px), (max-height: 500px) and (pointer: coarse)').matches) {
    popup.style.visibility = 'visible';
    clearTimeout(cuteDismissTimer);
    cuteDismissTimer = setTimeout(() => popup.remove(), 8000);
    return;
  }
  const width = popup.offsetWidth;
  const height = popup.offsetHeight;
  const margin = 16;
  const blocked = ['.cover-wrap', '#notebook', '#calendar-panel', '#theme-switch', '#hug-button'].map(selector => document.querySelector(selector)).filter(element => element && !element.hidden && element.getClientRects().length).map(element => element.getBoundingClientRect());
  const maxX = window.innerWidth - width - margin;
  const maxY = window.innerHeight - height - margin;
  let position;
  if (maxX >= margin && maxY >= margin) {
    for (let attempt = 0; attempt < 150; attempt++) {
      const x = margin + Math.random() * (maxX - margin);
      const y = margin + Math.random() * (maxY - margin);
      if (blocked.every(rect => x + width + 12 < rect.left || x - 12 > rect.right || y + height + 12 < rect.top || y - 12 > rect.bottom)) {
        position = { x, y };
        break;
      }
    }
  }
  if (!position) {
    const candidates = [
      { x: margin, y: margin },
      { x: maxX, y: margin },
      { x: margin, y: maxY },
      { x: maxX, y: maxY }
    ].filter(point => point.x >= margin && point.y >= margin);
    function overlap(point) {
      return blocked.reduce((area, rect) => area + Math.max(0, Math.min(point.x + width, rect.right) - Math.max(point.x, rect.left)) * Math.max(0, Math.min(point.y + height, rect.bottom) - Math.max(point.y, rect.top)), 0);
    }
    candidates.sort((a, b) => overlap(a) - overlap(b));
    position = candidates[0] || { x: 8, y: 8 };
  }
  popup.style.left = `${Math.round(position.x)}px`;
  popup.style.top = `${Math.round(position.y)}px`;
  popup.style.visibility = 'visible';
  clearTimeout(cuteDismissTimer);
  cuteDismissTimer = setTimeout(() => popup.remove(), 6500);
}
function scheduleCuteMessage(first = false) {
  clearTimeout(cuteTimer);
  if (document.hidden) return;
  cuteTimer = setTimeout(() => {
    showCuteMessage();
    scheduleCuteMessage();
  }, first ? 2500 : 14000 + Math.random() * 10000);
}
document.addEventListener('visibilitychange', () => {
  clearTimeout(cuteDismissTimer);
  cuteLayer.replaceChildren();
  scheduleCuteMessage(true);
});
window.addEventListener('resize', () => cuteLayer.replaceChildren());

scheduleCuteMessage(true);
const hugMessages = [
  'vieni qui che ti abbraccio un po. oggi non devi risolvere tutto puoi anche solo fermarti un attimo e respirare.',
  'se oggi ti sembra di fare tutto male ti ricordo che una giornata di merda non cancella tutte le cose belle che hai.',
  'non devi essere sempre forte con me. pure se oggi hai solo voglia di un abbraccio va bene cosi.',
  'ti terrei stretta finche non ti viene almeno un mezzo sorriso. per ora ti mando tutto l’abbraccio che ci sta dentro sto sito.',
  'se oggi ti senti poco importante volevo dirti che per me non lo sei per niente. sono contento che ci sei veramente.',
  'nessun discorso enorme stavolta. solo io che ti mando un bacio sulla fronte e un abbraccio lungo lungo.',
  'puoi stare qui un attimo senza dover fare niente. questa coccola e tua e non devi meritartela in nessun modo.',
  'se ti va raccontami come stai. e se non ti va ti mando un abbraccio lo stesso non serve una spiegazione.'
];
const surpriseDialog = document.querySelector('#surprise-dialog');
let lastHug = -1;
let surpriseTrigger;
function randomHug() {
  let index;
  do { index = Math.floor(Math.random() * hugMessages.length); } while (index === lastHug);
  lastHug = index;
  document.querySelector('#surprise-text').textContent = hugMessages[index];
}
function openSurprise(trigger, message) {
  surpriseTrigger = trigger;
  clearTimeout(cuteDismissTimer);
  cuteLayer.replaceChildren();
  if (message) document.querySelector('#surprise-text').textContent = message;
  else randomHug();
  document.querySelector('#another-hug').hidden = Boolean(message);
  surpriseDialog.showModal();
}
document.querySelector('#hug-button').addEventListener('click', event => openSurprise(event.currentTarget));
document.querySelector('#another-hug').addEventListener('click', randomHug);
document.querySelector('.ryuk-surprise').addEventListener('click', event => openSurprise(event.currentTarget, 'hai cliccato ryuk e ti aspettavi qualcosa di inquietante invece niente pure lui e qui per ricordarti che sei bellissima. ora dagli una mela che senno si lamenta.'));
document.querySelector('.pusheen-surprise').addEventListener('click', event => openSurprise(event.currentTarget, 'hai trovato una coccola nascosta. pusheen ti lascia un dolcetto e io ti mando un bacio. il dolcetto pero non mangiarlo tutto che un pezzettino lo volevo pure io.'));
document.querySelector('#close-surprise').addEventListener('click', () => surpriseDialog.close());
surpriseDialog.addEventListener('close', () => surpriseTrigger?.focus());
