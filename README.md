# 📋 WorkBoard — Panduan Setup

Aplikasi manajemen harian perusahaan berbasis web.  
**Stack:** HTML + CSS + Vanilla JS · Supabase (database) · GitHub Pages (hosting gratis)

---

## 🗂️ Struktur File

```
workboard/
├── index.html          ← Halaman utama aplikasi
├── css/
│   └── style.css       ← Semua styling
├── js/
│   ├── supabase.js     ← Konfigurasi Supabase (GANTI URL & KEY di sini)
│   └── app.js          ← Logic aplikasi
└── sql/
    └── schema.sql      ← Jalankan ini di Supabase SQL Editor
```

---

## 🚀 Langkah Setup (15 menit)

### Langkah 1 — Buat Project Supabase

1. Buka [https://supabase.com](https://supabase.com) → Sign up / Login
2. Klik **New Project**
3. Isi nama project: `workboard`
4. Pilih region: **Southeast Asia (Singapore)**
5. Set password database (simpan baik-baik!)
6. Tunggu sekitar 2 menit sampai project siap

### Langkah 2 — Buat Tabel di Supabase

1. Di dashboard Supabase, klik **SQL Editor** (ikon di sidebar kiri)
2. Klik **New Query**
3. Copy semua isi file `sql/schema.sql`
4. Paste ke SQL Editor
5. Klik **Run** (atau Ctrl+Enter)
6. Semua tabel otomatis terbuat ✅

### Langkah 3 — Ambil API Keys

1. Di Supabase, klik **Settings** → **API**
2. Copy dua hal ini:
   - **Project URL** (contoh: `https://abcdefgh.supabase.co`)
   - **anon / public key** (string panjang mulai dari `eyJ...`)

### Langkah 4 — Isi Konfigurasi di Kode

Buka file `js/supabase.js`, ganti dua baris ini:

```javascript
const SUPABASE_URL = 'https://XXXXXXXXXXXX.supabase.co';   // ← Ganti dengan Project URL kamu
const SUPABASE_ANON_KEY = 'eyXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // ← Ganti dengan anon key kamu
```

### Langkah 5 — Upload ke GitHub

1. Buka [https://github.com](https://github.com) → Login
2. Klik **New repository**
3. Nama repo: `workboard` (atau apapun)
4. Pilih **Public**
5. Klik **Create repository**
6. Upload semua file dengan cara:
   - Klik **uploading an existing file**
   - Drag & drop seluruh folder `workboard/`
   - Klik **Commit changes**

### Langkah 6 — Aktifkan GitHub Pages

1. Di repo GitHub kamu, klik **Settings**
2. Scroll ke bawah, klik **Pages** (di sidebar kiri)
3. Di "Source", pilih **Deploy from a branch**
4. Branch: **main** / root: **/ (root)**
5. Klik **Save**
6. Tunggu 1-2 menit
7. URL aplikasi kamu akan muncul, contoh:  
   **`https://namakantor.github.io/workboard`**

---

## 🔗 Share ke Tim & Pimpinan

Setelah aktif, cukup share URL GitHub Pages ke seluruh tim.  
Semua orang yang buka URL yang sama akan melihat **data yang sama** secara real-time!

> **Tips:** Tambahkan URL ke bookmark browser di komputer kantor.

---

## 🔒 Keamanan (Opsional)

Saat ini aplikasi terbuka untuk siapa saja yang punya URL (cocok untuk kantor internal).

Jika ingin tambah **login** (agar hanya karyawan yang bisa akses):
1. Aktifkan **Supabase Auth** di menu Authentication
2. Buat halaman login sederhana
3. Hubungi developer untuk implementasi

---

## ✅ Fitur Aplikasi

| Fitur | Keterangan |
|-------|-----------|
| **Daily Schedule** | Jadwal harian per jam, bisa pilih tanggal |
| **Time Plan Tracker** | Rencana vs realisasi waktu + status |
| **Logbook** | Catatan rapat, laporan, masalah, keputusan |
| **Notes** | Catatan penting per kategori (Keuangan, Ops, HR, Strategi) |
| **To Do** | Daftar tugas dengan prioritas, deadline, dan assign ke orang |
| **Result** | Laporan visual: grafik mingguan, distribusi aktivitas |
| **Realtime** | Data langsung update saat tim lain input |
| **Export** | Download semua data harian ke file JSON |

---

## 🛠️ Masalah Umum

**Data tidak muncul?**
→ Cek apakah URL dan ANON KEY di `js/supabase.js` sudah benar

**Error "Failed to fetch"?**
→ Pastikan schema.sql sudah dijalankan di Supabase SQL Editor

**GitHub Pages tidak aktif?**
→ Tunggu 2-5 menit, refresh halaman Settings > Pages

---

*WorkBoard dibuat dengan ❤️ untuk produktivitas tim*
