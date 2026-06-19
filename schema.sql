-- ============================================
-- WorkBoard - Supabase Schema
-- Jalankan di Supabase SQL Editor
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- TABLE: schedule_events (Daily Schedule)
-- ============================================
create table if not exists schedule_events (
  id uuid primary key default uuid_generate_v4(),
  event_date date not null default current_date,
  time_start time not null,
  title text not null,
  location text,
  category text default 'blue' check (category in ('blue','amber','green','purple','red')),
  created_by text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- TABLE: tracker_items (Time Plan Tracker)
-- ============================================
create table if not exists tracker_items (
  id uuid primary key default uuid_generate_v4(),
  item_date date not null default current_date,
  name text not null,
  plan_time text,
  actual_time text,
  status text default 'wait' check (status in ('wait','prog','done','late')),
  progress_pct integer default 0 check (progress_pct between 0 and 100),
  created_by text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- TABLE: logbook_entries (Logbook)
-- ============================================
create table if not exists logbook_entries (
  id uuid primary key default uuid_generate_v4(),
  entry_date date not null default current_date,
  type text default 'note' check (type in ('meeting','report','note','issue')),
  title text not null,
  body text,
  tags text[] default '{}',
  created_by text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- TABLE: notes (Notes)
-- ============================================
create table if not exists notes (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text default 'ops' check (category in ('finance','ops','hr','strat')),
  body text,
  is_pinned boolean default false,
  created_by text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- TABLE: todos (To Do)
-- ============================================
create table if not exists todos (
  id uuid primary key default uuid_generate_v4(),
  text text not null,
  priority text default 'med' check (priority in ('high','med','low')),
  due_date date,
  is_done boolean default false,
  done_at timestamptz,
  assigned_to text,
  created_by text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- ROW LEVEL SECURITY (buka akses publik untuk kantor)
-- Ganti dengan auth jika perlu login
-- ============================================
alter table schedule_events enable row level security;
alter table tracker_items enable row level security;
alter table logbook_entries enable row level security;
alter table notes enable row level security;
alter table todos enable row level security;

-- Policy: semua orang bisa baca & tulis (kantor internal)
create policy "allow_all_schedule" on schedule_events for all using (true) with check (true);
create policy "allow_all_tracker" on tracker_items for all using (true) with check (true);
create policy "allow_all_logbook" on logbook_entries for all using (true) with check (true);
create policy "allow_all_notes" on notes for all using (true) with check (true);
create policy "allow_all_todos" on todos for all using (true) with check (true);

-- ============================================
-- FUNCTIONS: auto-update updated_at
-- ============================================
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_schedule_updated before update on schedule_events for each row execute function update_updated_at();
create trigger trg_tracker_updated before update on tracker_items for each row execute function update_updated_at();
create trigger trg_logbook_updated before update on logbook_entries for each row execute function update_updated_at();
create trigger trg_notes_updated before update on notes for each row execute function update_updated_at();
create trigger trg_todos_updated before update on todos for each row execute function update_updated_at();

-- ============================================
-- SAMPLE DATA (opsional, hapus jika tidak perlu)
-- ============================================
insert into schedule_events (time_start, title, location, category, created_by) values
  ('07:00', 'Briefing Tim Pagi', 'Ruang Rapat A', 'blue', 'Admin'),
  ('09:00', 'Review Laporan Keuangan Q2', 'Kantor', 'amber', 'Admin'),
  ('10:30', 'Meeting Klien PT Maju Jaya', 'Online Zoom', 'purple', 'Admin'),
  ('14:00', 'Rapat Evaluasi Bulanan', 'Ruang Direksi', 'blue', 'Admin');

insert into tracker_items (name, plan_time, actual_time, status, progress_pct, created_by) values
  ('Briefing Tim', '1j', '45m', 'done', 100, 'Admin'),
  ('Review Laporan', '2j', '2j 15m', 'done', 100, 'Admin'),
  ('Meeting Klien', '1.5j', '1j 45m', 'prog', 80, 'Admin'),
  ('Rapat Evaluasi', '2j', null, 'wait', 0, 'Admin');

insert into logbook_entries (type, title, body, tags, created_by) values
  ('meeting', 'Meeting Klien PT Maju Jaya', 'Diskusi pengembangan proyek fase 2. Klien minta revisi proposal minggu depan. Anggaran disetujui Rp 450 jt.', array['klien','proyek','keuangan'], 'Admin'),
  ('report', 'Laporan Keuangan Q2 Disetujui', 'Pendapatan naik 18% dari Q1. Biaya operasional efisien 7%. Target Q3 ditetapkan Rp 2.1M.', array['keuangan','laporan','q2'], 'Admin'),
  ('issue', 'Server Backup Bermasalah', 'Tim IT melapor backup server gagal sejak Selasa. Backup manual sudah dilakukan.', array['it','infrastruktur'], 'Admin');

insert into notes (title, category, body, created_by) values
  ('Target Penjualan Q3 2025', 'finance', 'Target gross revenue Rp 2.1M. Fokus produk A & B. Tambah 3 sales di regional Jawa Timur.', 'Admin'),
  ('SOP Onboarding Karyawan Baru', 'hr', 'Revisi SOP onboarding — tambahkan sesi budaya perusahaan hari ke-1.', 'Admin'),
  ('Ekspansi ke Surabaya', 'strat', 'Evaluasi buka kantor cabang Surabaya Q4. Survey lokasi sudah 3 tempat.', 'Admin'),
  ('Evaluasi Vendor Logistik', 'ops', 'Kontrak vendor A habis Oktober. Bandingkan dengan vendor B dan C.', 'Admin');

insert into todos (text, priority, due_date, created_by) values
  ('Kirim proposal revisi ke PT Maju Jaya', 'high', '2025-07-05', 'Admin'),
  ('Approve gaji karyawan bulan Juli', 'high', '2025-06-30', 'Admin'),
  ('Review SOP Onboarding versi baru', 'med', '2025-07-10', 'Admin'),
  ('Jadwalkan survey kantor Surabaya', 'med', '2025-07-15', 'Admin'),
  ('Konfirmasi vendor IT pengganti', 'low', '2025-07-20', 'Admin');
