// ============================================
// js/app.js — Logic utama WorkBoard
// ============================================

// ── State ─────────────────────────────────
let currentPanel = 'schedule';
let todoFilter = 'all';
let scheduleDate = todayStr();

const DAYS = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

// ── Init ───────────────────────────────────
window.addEventListener('DOMContentLoaded', async () => {
  // Cek nama pengguna
  let user = localStorage.getItem('wb_user');
  if (!user) {
    user = prompt('Masukkan nama kamu untuk WorkBoard:') || 'Pengguna';
    localStorage.setItem('wb_user', user);
  }
  document.getElementById('user-name').textContent = user;

  // Tampilkan tanggal
  const now = new Date();
  document.getElementById('sidebar-date').textContent =
    DAYS[now.getDay()] + ', ' + now.getDate() + ' ' + MONTHS[now.getMonth()] + ' ' + now.getFullYear();

  // Set default tanggal input
  const todayInputs = document.querySelectorAll('.input-today');
  todayInputs.forEach(el => { el.value = todayStr(); });

  await renderSchedule();
  updateDailyProgress();
});

// ── Panel switching ────────────────────────
async function switchPanel(id, el) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  el.classList.add('active');
  currentPanel = id;

  const titles = {
    schedule: 'Daily Schedule',
    tracker: 'Time Plan Tracker',
    logbook: 'Logbook',
    notes: 'Notes',
    todo: 'To Do',
    result: 'Result — Laporan'
  };
  document.getElementById('panel-title').textContent = titles[id] || id;
  hideAllForms();

  if (id === 'schedule') await renderSchedule();
  else if (id === 'tracker') await renderTracker();
  else if (id === 'logbook') await renderLogbook();
  else if (id === 'notes') await renderNotes();
  else if (id === 'todo') await renderTodo();
  else if (id === 'result') await renderResult();
}

function hideAllForms() {
  ['sched-form','log-form','note-form'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

function handleAdd() {
  const formMap = {
    schedule: 'sched-form',
    logbook: 'log-form',
    notes: 'note-form'
  };
  const formId = formMap[currentPanel];
  if (formId) {
    const el = document.getElementById(formId);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// ── Loading state ──────────────────────────
function setLoading(containerId, loading) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (loading) el.innerHTML = '<div class="loading-msg"><i class="ti ti-loader-2" style="font-size:18px;animation:spin 1s linear infinite"></i> Memuat data...</div>';
}

// ── DAILY SCHEDULE ─────────────────────────
async function renderSchedule() {
  setLoading('sched-grid', true);
  const dateInput = document.getElementById('sched-date');
  if (dateInput) scheduleDate = dateInput.value || todayStr();

  const { data, error } = await sb
    .from('schedule_events')
    .select('*')
    .eq('event_date', scheduleDate)
    .order('time_start');

  const hours = ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
  let html = '';
  hours.forEach(h => {
    const evs = (data || []).filter(e => e.time_start && e.time_start.substring(0,5) === h);
    html += `<div class="time-label">${h}</div><div class="time-event">`;
    evs.forEach(e => {
      html += `<div class="event-card ev-${e.category}" data-id="${e.id}">
        <div class="ev-title">${e.title}
          <button class="ev-del" onclick="delSchedule('${e.id}')" aria-label="Hapus"><i class="ti ti-x" aria-hidden="true"></i></button>
        </div>
        ${e.location ? `<div class="ev-meta"><i class="ti ti-map-pin" aria-hidden="true"></i> ${e.location}</div>` : ''}
        <div class="ev-meta"><i class="ti ti-user" aria-hidden="true"></i> ${e.created_by || '-'}</div>
      </div>`;
    });
    if (!evs.length) html += '<div style="height:8px"></div>';
    html += '</div>';
  });
  document.getElementById('sched-grid').innerHTML = html;
  document.getElementById('badge-sched').textContent = (data || []).length;
}

async function saveSchedule() {
  const title = document.getElementById('sched-title').value.trim();
  if (!title) return alert('Judul tidak boleh kosong!');
  const { error } = await sb.from('schedule_events').insert({
    event_date: document.getElementById('sched-date').value || todayStr(),
    time_start: document.getElementById('sched-time').value,
    title,
    location: document.getElementById('sched-loc').value,
    category: document.getElementById('sched-cat').value,
    created_by: getUser()
  });
  if (error) return alert('Gagal menyimpan: ' + error.message);
  document.getElementById('sched-title').value = '';
  document.getElementById('sched-loc').value = '';
  document.getElementById('sched-form').style.display = 'none';
  await renderSchedule();
  updateDailyProgress();
}

async function delSchedule(id) {
  if (!confirm('Hapus jadwal ini?')) return;
  await sb.from('schedule_events').delete().eq('id', id);
  await renderSchedule();
  updateDailyProgress();
}

// ── TIME PLAN TRACKER ──────────────────────
async function renderTracker() {
  const dateVal = document.getElementById('tracker-date')?.value || todayStr();
  const { data } = await sb
    .from('tracker_items')
    .select('*')
    .eq('item_date', dateVal)
    .order('created_at');

  const items = data || [];
  const done = items.filter(t => t.status === 'done').length;
  const total = items.length;
  const prog = total ? Math.round(done / total * 100) : 0;

  document.getElementById('tracker-stats').innerHTML = `
    <div class="stat-card"><div class="stat-label">Total Kegiatan</div><div class="stat-val">${total}</div><div class="stat-sub">hari ini</div></div>
    <div class="stat-card"><div class="stat-label">Selesai</div><div class="stat-val">${done}</div><div class="stat-sub">dari ${total}</div></div>
    <div class="stat-card"><div class="stat-label">Progress</div><div class="stat-val">${prog}%</div><div class="stat-sub">completion rate</div></div>
    <div class="stat-card"><div class="stat-label">Terlambat</div><div class="stat-val">${items.filter(t => t.status === 'late').length}</div><div class="stat-sub">perlu perhatian</div></div>
  `;
  document.getElementById('badge-track').textContent = items.filter(t => t.status === 'prog' || t.status === 'wait').length;

  const stClass = {done:'s-done',prog:'s-prog',wait:'s-wait',late:'s-late'};
  const stLabel = {done:'Selesai',prog:'Berjalan',wait:'Menunggu',late:'Terlambat'};
  const tbody = document.getElementById('tracker-tbody');
  if (!items.length) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:16px;color:var(--color-text-tertiary);font-size:12px">Belum ada kegiatan hari ini</td></tr>';
    return;
  }
  tbody.innerHTML = items.map(t => `
    <tr>
      <td>${t.name}</td>
      <td>${t.plan_time || '-'}</td>
      <td>${t.actual_time || '-'}</td>
      <td>${t.created_by || '-'}</td>
      <td><span class="status-pill ${stClass[t.status]}">${stLabel[t.status]}</span></td>
      <td style="min-width:90px">
        <div style="font-size:10px;color:var(--color-text-secondary)">${t.progress_pct}%</div>
        <div class="task-prog-bar"><div class="task-prog-fill" style="width:${t.progress_pct}%"></div></div>
        <button class="ev-del" onclick="delTracker('${t.id}')" style="margin-top:2px" aria-label="Hapus"><i class="ti ti-x" aria-hidden="true"></i></button>
      </td>
    </tr>
  `).join('');
}

async function addTrackerItem() {
  const name = document.getElementById('trk-name').value.trim();
  if (!name) return;
  const { error } = await sb.from('tracker_items').insert({
    item_date: document.getElementById('tracker-date')?.value || todayStr(),
    name,
    plan_time: document.getElementById('trk-plan').value,
    actual_time: document.getElementById('trk-actual').value,
    status: document.getElementById('trk-status').value,
    progress_pct: parseInt(document.getElementById('trk-pct').value) || 0,
    created_by: getUser()
  });
  if (error) return alert('Gagal: ' + error.message);
  document.getElementById('trk-name').value = '';
  document.getElementById('trk-plan').value = '';
  document.getElementById('trk-actual').value = '';
  document.getElementById('trk-pct').value = '';
  await renderTracker();
}

async function delTracker(id) {
  await sb.from('tracker_items').delete().eq('id', id);
  await renderTracker();
}

// ── LOGBOOK ────────────────────────────────
async function renderLogbook() {
  setLoading('logbook-list', true);
  const { data } = await sb
    .from('logbook_entries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  document.getElementById('badge-log').textContent = (data || []).length;
  const typeClass = {meeting:'lt-meeting',report:'lt-report',note:'lt-note',issue:'lt-issue'};
  const typeLabel = {meeting:'Rapat',report:'Laporan',note:'Catatan',issue:'Masalah'};

  if (!data || !data.length) {
    document.getElementById('logbook-list').innerHTML = '<div class="empty-msg">Belum ada catatan logbook.</div>';
    return;
  }
  document.getElementById('logbook-list').innerHTML = data.map(l => `
    <div class="log-entry">
      <div class="log-header">
        <span class="log-type ${typeClass[l.type]}">${typeLabel[l.type]}</span>
        <span class="log-time">${l.entry_date || ''} ${l.created_at ? new Date(l.created_at).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}) : ''}</span>
        <span style="font-size:10px;color:var(--color-text-tertiary);margin-left:4px">oleh ${l.created_by || '-'}</span>
        <button class="ev-del" onclick="delLog('${l.id}')" aria-label="Hapus"><i class="ti ti-x" aria-hidden="true"></i></button>
      </div>
      <div class="log-title">${l.title}</div>
      <div class="log-body">${l.body || ''}</div>
      <div class="log-tags">${(l.tags || []).map(t => `<span class="tag">#${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

async function saveLog() {
  const title = document.getElementById('log-title').value.trim();
  if (!title) return alert('Judul tidak boleh kosong!');
  const tagsRaw = document.getElementById('log-tags-in').value;
  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
  const { error } = await sb.from('logbook_entries').insert({
    entry_date: todayStr(),
    type: document.getElementById('log-type').value,
    title,
    body: document.getElementById('log-body').value,
    tags,
    created_by: getUser()
  });
  if (error) return alert('Gagal: ' + error.message);
  document.getElementById('log-title').value = '';
  document.getElementById('log-body').value = '';
  document.getElementById('log-tags-in').value = '';
  document.getElementById('log-form').style.display = 'none';
  await renderLogbook();
}

async function delLog(id) {
  if (!confirm('Hapus entri logbook ini?')) return;
  await sb.from('logbook_entries').delete().eq('id', id);
  await renderLogbook();
}

// ── NOTES ──────────────────────────────────
async function renderNotes() {
  const { data } = await sb.from('notes').select('*').order('is_pinned', { ascending: false }).order('created_at', { ascending: false });
  document.getElementById('badge-notes').textContent = (data || []).length;
  const catClass = {finance:'nc-finance',ops:'nc-ops',hr:'nc-hr',strat:'nc-strat'};
  const catLabel = {finance:'Keuangan',ops:'Operasional',hr:'SDM/HR',strat:'Strategi'};

  if (!data || !data.length) {
    document.getElementById('notes-grid').innerHTML = '<div class="empty-msg" style="grid-column:1/-1">Belum ada catatan.</div>';
    return;
  }
  document.getElementById('notes-grid').innerHTML = data.map(n => `
    <div class="note-card${n.is_pinned ? ' pinned' : ''}">
      <div class="note-top">
        <div class="note-title">${n.is_pinned ? '📌 ' : ''}${n.title}</div>
        <span class="note-cat ${catClass[n.category]}">${catLabel[n.category]}</span>
      </div>
      <div class="note-body">${n.body || ''}</div>
      <div class="note-footer">
        <span style="font-size:10px;color:var(--color-text-tertiary)">${n.created_by || ''}</span>
        <div style="display:flex;gap:4px">
          <button class="ev-del" onclick="togglePin('${n.id}',${n.is_pinned})" title="${n.is_pinned?'Unpin':'Pin'}"><i class="ti ti-pin" aria-hidden="true"></i></button>
          <button class="ev-del" onclick="delNote('${n.id}')" aria-label="Hapus"><i class="ti ti-x" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

async function saveNote() {
  const title = document.getElementById('note-title-in').value.trim();
  if (!title) return alert('Judul tidak boleh kosong!');
  const { error } = await sb.from('notes').insert({
    title,
    category: document.getElementById('note-cat-in').value,
    body: document.getElementById('note-body-in').value,
    created_by: getUser()
  });
  if (error) return alert('Gagal: ' + error.message);
  document.getElementById('note-title-in').value = '';
  document.getElementById('note-body-in').value = '';
  document.getElementById('note-form').style.display = 'none';
  await renderNotes();
}

async function togglePin(id, currentPin) {
  await sb.from('notes').update({ is_pinned: !currentPin }).eq('id', id);
  await renderNotes();
}

async function delNote(id) {
  if (!confirm('Hapus catatan ini?')) return;
  await sb.from('notes').delete().eq('id', id);
  await renderNotes();
}

// ── TO DO ──────────────────────────────────
async function renderTodo() {
  let query = sb.from('todos').select('*').order('is_done').order('created_at', { ascending: false });
  if (todoFilter === 'done') query = query.eq('is_done', true);
  else if (todoFilter !== 'all') query = query.eq('priority', todoFilter).eq('is_done', false);

  const { data } = await query.limit(100);
  const all = data || [];

  const pending = all.filter(t => !t.is_done).length;
  document.getElementById('badge-todo').textContent = pending;

  const prioClass = {high:'prio-high',med:'prio-med',low:'prio-low'};
  const prioLabel = {high:'Tinggi',med:'Sedang',low:'Rendah'};

  if (!all.length) {
    document.getElementById('todo-list').innerHTML = '<div class="empty-msg">Tidak ada tugas di kategori ini.</div>';
    return;
  }
  document.getElementById('todo-list').innerHTML = all.map(t => `
    <div class="todo-item${t.is_done ? ' done-item' : ''}">
      <button class="todo-check${t.is_done ? ' checked' : ''}" onclick="toggleTodo('${t.id}',${t.is_done})" aria-label="Tandai selesai">
        ${t.is_done ? '<i class="ti ti-check" style="font-size:10px" aria-hidden="true"></i>' : ''}
      </button>
      <div>
        <div class="todo-text">${t.text}</div>
        ${t.assigned_to ? `<div style="font-size:10px;color:var(--color-text-tertiary)">Ditugaskan ke: ${t.assigned_to}</div>` : ''}
      </div>
      <div class="todo-meta">
        <span class="${prioClass[t.priority]}">${prioLabel[t.priority]}</span>
        ${t.due_date ? `<span class="todo-due">${t.due_date}</span>` : ''}
        <span style="font-size:10px;color:var(--color-text-tertiary)">${t.created_by || ''}</span>
      </div>
      <button class="todo-del" onclick="delTodo('${t.id}')" aria-label="Hapus"><i class="ti ti-x" aria-hidden="true"></i></button>
    </div>
  `).join('');
}

async function addTodo() {
  const text = document.getElementById('todo-input').value.trim();
  if (!text) return;
  const { error } = await sb.from('todos').insert({
    text,
    priority: document.getElementById('todo-prio').value,
    due_date: document.getElementById('todo-due').value || null,
    assigned_to: document.getElementById('todo-assign').value || null,
    created_by: getUser()
  });
  if (error) return alert('Gagal: ' + error.message);
  document.getElementById('todo-input').value = '';
  document.getElementById('todo-assign').value = '';
  await renderTodo();
}

async function toggleTodo(id, isDone) {
  await sb.from('todos').update({ is_done: !isDone, done_at: !isDone ? new Date().toISOString() : null }).eq('id', id);
  await renderTodo();
  updateDailyProgress();
}

async function delTodo(id) {
  await sb.from('todos').delete().eq('id', id);
  await renderTodo();
}

function filterTodo(f, el) {
  todoFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderTodo();
}

// ── RESULT ─────────────────────────────────
async function renderResult() {
  const [sched, tracker, logs, notes, todos] = await Promise.all([
    sb.from('schedule_events').select('*').eq('event_date', todayStr()),
    sb.from('tracker_items').select('*').eq('item_date', todayStr()),
    sb.from('logbook_entries').select('*').gte('entry_date', getWeekStart()),
    sb.from('notes').select('*'),
    sb.from('todos').select('*')
  ]);

  const sd = sched.data || [], tr = tracker.data || [], ld = logs.data || [], nd = notes.data || [], td = todos.data || [];
  const doneTodo = td.filter(t => t.is_done).length;
  const doneTrk = tr.filter(t => t.status === 'done').length;

  document.getElementById('result-stats').innerHTML = `
    <div class="res-card rc-blue"><div class="res-label">Jadwal Hari Ini</div><div class="res-val">${sd.length}</div><div class="res-trend">agenda terjadwal</div></div>
    <div class="res-card rc-green"><div class="res-label">Tugas Selesai</div><div class="res-val">${doneTodo}/${td.length}</div><div class="res-trend">${td.length ? Math.round(doneTodo/td.length*100) : 0}% completion</div></div>
    <div class="res-card rc-amber"><div class="res-label">Log Minggu Ini</div><div class="res-val">${ld.length}</div><div class="res-trend">catatan tersimpan</div></div>
    <div class="res-card rc-purple"><div class="res-label">Notes Aktif</div><div class="res-val">${nd.length}</div><div class="res-trend">dokumen catatan</div></div>
  `;

  // Weekly tracker chart (last 7 days)
  const weekDays = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    weekDays.push({ label: DAYS[d.getDay()].substring(0,3), date: d.toISOString().split('T')[0] });
  }
  const { data: weekTrk } = await sb.from('tracker_items').select('item_date, status').gte('item_date', weekDays[0].date);
  const weekCounts = weekDays.map(d => ({ ...d, count: (weekTrk || []).filter(t => t.item_date === d.date).length }));
  const maxC = Math.max(...weekCounts.map(w => w.count), 1);
  const todayD = todayStr();
  document.getElementById('weekly-chart').innerHTML = weekCounts.map(w => `
    <div class="bar-wrap">
      <div class="bar-val">${w.count}</div>
      <div class="bar" style="height:${Math.round(w.count/maxC*60)}px;background:${w.date===todayD?'#3B82F6':'#BFDBFE'}"></div>
      <div class="bar-label">${w.label}</div>
    </div>
  `).join('');

  // Activity distribution from tracker
  const statCounts = {done:0,prog:0,wait:0,late:0};
  tr.forEach(t => { statCounts[t.status]++; });
  const total = tr.length || 1;
  document.getElementById('activity-dist').innerHTML = [
    {name:'Selesai',key:'done',color:'#22C55E'},
    {name:'Berjalan',key:'prog',color:'#3B82F6'},
    {name:'Menunggu',key:'wait',color:'#F59E0B'},
    {name:'Terlambat',key:'late',color:'#EF4444'},
  ].map(a => `
    <div class="activity-row">
      <div class="act-left">${a.name}</div>
      <div class="act-bar-wrap"><div class="act-bar-fill" style="width:${Math.round(statCounts[a.key]/total*100)}%;background:${a.color}"></div></div>
      <div class="act-pct">${statCounts[a.key]}</div>
    </div>
  `).join('');

  // Notes by category
  const catCount = {};
  nd.forEach(n => { catCount[n.category] = (catCount[n.category] || 0) + 1; });
  const catLabel = {finance:'Keuangan',ops:'Operasional',hr:'SDM/HR',strat:'Strategi'};
  const total2 = nd.length || 1;
  document.getElementById('notes-summary').innerHTML = Object.entries(catCount).map(([k,v]) => `
    <div class="activity-row">
      <div class="act-left">${catLabel[k] || k}</div>
      <div class="act-bar-wrap"><div class="act-bar-fill" style="width:${Math.round(v/total2*100)}%;background:#A855F7"></div></div>
      <div class="act-pct">${v}</div>
    </div>
  `).join('');
}

function getWeekStart() {
  const d = new Date(); d.setDate(d.getDate() - 6);
  return d.toISOString().split('T')[0];
}

// ── Progress harian ────────────────────────
async function updateDailyProgress() {
  const { data } = await sb.from('tracker_items').select('status').eq('item_date', todayStr());
  const items = data || [];
  const done = items.filter(t => t.status === 'done').length;
  const prog = items.length ? Math.round(done / items.length * 100) : 0;
  document.getElementById('daily-prog').style.width = prog + '%';
  document.getElementById('daily-prog-val').textContent = prog + '%';
}

// ── Export ─────────────────────────────────
async function exportData() {
  const [s, t, l, n, td] = await Promise.all([
    sb.from('schedule_events').select('*').eq('event_date', todayStr()),
    sb.from('tracker_items').select('*').eq('item_date', todayStr()),
    sb.from('logbook_entries').select('*').gte('entry_date', getWeekStart()),
    sb.from('notes').select('*'),
    sb.from('todos').select('*').eq('is_done', false)
  ]);
  const exportData = {
    exportDate: new Date().toISOString(),
    schedule: s.data, tracker: t.data, logbook: l.data, notes: n.data, todos: td.data
  };
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'workboard-' + todayStr() + '.json';
  a.click();
}

// ── Realtime updates ───────────────────────
function setupRealtime() {
  sb.channel('workboard-realtime')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'schedule_events' }, () => {
      if (currentPanel === 'schedule') renderSchedule();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'tracker_items' }, () => {
      if (currentPanel === 'tracker') renderTracker();
      updateDailyProgress();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'logbook_entries' }, () => {
      if (currentPanel === 'logbook') renderLogbook();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, () => {
      if (currentPanel === 'notes') renderNotes();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'todos' }, () => {
      if (currentPanel === 'todo') renderTodo();
    })
    .subscribe();
}

// Mulai realtime setelah DOM ready
window.addEventListener('DOMContentLoaded', () => {
  setupRealtime();
});
