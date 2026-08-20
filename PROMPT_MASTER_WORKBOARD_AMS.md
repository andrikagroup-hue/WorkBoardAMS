# PROMPT MASTER — WorkBoard AMS

*Gunakan file ini bersama `index.html` terbaru setiap memulai chat coding.*

**Status sinkronisasi:** 20 Agustus 2026
**Pasangan kode terbaru:** `index.html`
**SHA-256 pasangan kode:** `8c0aa2a70f18359a752651cf10bc7fe8c4915c6445d7a11a1fec760301f3daa7`

---

## 1. IDENTITAS DAN CARA KERJA

WorkBoard AMS adalah PWA internal milik **PT. Andrika Mitra Solusi** untuk manajemen pekerjaan harian.

Arsitektur utama:

- Satu file `index.html` berisi HTML, CSS, dan JavaScript.
- Supabase digunakan sebagai database dan penyimpanan data.
- GitHub Pages digunakan untuk publikasi aplikasi.
- File pendukung dapat meliputi `sw.js`, `manifest.json`, favicon, dan icon PWA.

Saya bukan programmer. Kerjakan dengan aturan berikut:

1. Berikan instruksi **satu langkah per pesan**.
2. Gunakan bahasa sederhana dan jelaskan istilah teknis.
3. Jangan meminta saya mencari atau mengubah banyak bagian kode secara manual.
4. Sebelum mulai coding, baca file ini dan `index.html` terbaru sampai selesai.
5. Sebelum mengubah apa pun, sampaikan pemahaman singkat tentang permintaan saya.
6. Jika instruksi saya belum jelas atau berisiko mengubah fitur lain, berhenti dan tanyakan klarifikasi singkat.

---

## 2. SUMBER KEBENARAN

Gunakan urutan berikut:

1. **PROMPT MASTER ini** adalah sumber utama untuk aturan, batasan, privasi, standar UI, dan cara kerja.
2. **`index.html` terbaru** adalah sumber utama untuk kondisi kode, panel, fungsi, database, serta fitur yang benar-benar tersedia saat ini.
3. Instruksi terbaru saya adalah sumber utama untuk perubahan yang sedang diminta.

Jika dokumentasi teknis lama berbeda dengan `index.html`, ikuti kondisi aktual `index.html`.

Namun, jangan mengubah atau mengabaikan aturan tetap dalam PROMPT MASTER ini hanya karena implementasi lama berbeda.

Jangan memakai ingatan dari versi HTML lama. Selalu periksa file terbaru yang saya upload.

---

## 3. ATURAN NOMOR SATU — JANGAN ADA FITUR HILANG

Perubahan harus bersifat **kecil, terarah, dan mempertahankan fungsi yang sudah ada**.

Wajib:

- Jangan menulis ulang seluruh `index.html` hanya untuk memperbaiki satu fitur.
- Jangan merapikan, memindahkan, mengganti nama, atau menghapus kode yang tidak berhubungan dengan tugas.
- Jangan menghapus fungsi hanya karena terlihat tidak dipakai sebelum memeriksa seluruh referensinya.
- Jangan menghapus ID elemen, kolom database, event handler, cache, atau variabel global tanpa memeriksa semua pemakaiannya.
- Jangan mengganti arsitektur, library, database, atau cara login tanpa izin eksplisit.
- Jangan mengembalikan fitur ke versi lama.
- Jangan mengganti data yang diketik user.
- Jangan menghapus fitur yang sudah ada untuk mempermudah pembuatan fitur baru.
- Pertahankan kompatibilitas data lama selama masih mungkin.

Kalau fitur baru menyentuh data yang juga dipakai panel lain, periksa seluruh panel pengguna data tersebut.

Contoh: perubahan pada data To Do atau Time Plan Tracker dapat memengaruhi dashboard, laporan, Kanban, Gantt, Decision Matrix, Logbook, badge, pencarian, filter, dan recurring task.

---

## 4. DESKTOP DAN MOBILE WAJIB BERSAMAAN

Setiap perubahan fitur, panel, menu, nama menu, badge, hak akses, atau navigasi wajib diperiksa dan dikerjakan sekaligus pada desktop dan mobile.

Checklist wajib:

- [ ] Sidebar desktop
- [ ] Bottom navigation mobile
- [ ] Sinkronisasi badge desktop–mobile
- [ ] Judul panel pada router/panel switch
- [ ] Fungsi render pada panel switch
- [ ] Mapping pembuka grup sidebar
- [ ] Status menu aktif desktop–mobile
- [ ] Visibilitas role Owner / Management / Staff pada desktop dan mobile
- [ ] Tampilan responsif pada layar kecil

Jangan menyatakan pekerjaan selesai kalau perubahan navigasi baru diterapkan di salah satu tampilan.

---

## 5. STANDAR BAHASA UI

Seluruh teks antarmuka wajib **English**, termasuk:

- Label dan tombol
- Placeholder
- Tooltip dan `aria-label`
- Judul panel
- Alert, confirm, toast, dan pesan error
- Setup banner
- Empty state dan loading state
- Sidebar dan bottom navigation
- FAQ
- Export Excel/PDF
- Teks dinamis yang dibuat JavaScript

Teks Indonesia yang masih terlihat di UI dianggap bug dan boleh diterjemahkan ke English.

Dua pengecualian:

1. Isi yang diketik user di Notes, To Do, Logbook, Schedule, chat, dan panel lain tidak boleh diterjemahkan atau diubah otomatis.
2. Prompt AI Summarize boleh meminta hasil Bahasa Indonesia karena catatan kerja user umumnya berbahasa Indonesia.

Tanggal dan nama hari untuk UI gunakan locale English yang konsisten. Jangan mencampur locale Indonesia pada tampilan English.

---

## 6. PRIVASI DAN KEPEMILIKAN DATA

Sebelum membuat atau mengubah query database:

1. Periksa apakah panel menggunakan data publik–privat atau data milik user saja.
2. Pertahankan filter privasi yang sudah digunakan panel sumber.
3. Visualisasi ulang dari tabel yang sama harus mengikuti privasi tabel sumber.
4. Jangan mengambil semua data lalu menampilkannya tanpa filter privasi yang sesuai.
5. Owner / Management hanya boleh melihat data tambahan pada panel yang memang dirancang untuk role tersebut; data private personal tetap mengikuti aturan sumber.

Prinsip fungsi:

- `applyPrivacy()` digunakan untuk pola data publik + data privat milik user aktif.
- `applyOwner()` digunakan untuk data yang hanya boleh dilihat pemiliknya.
- Panel turunan atau visualisasi harus mengikuti aturan privasi sumber datanya.

Jika belum yakin apakah data harus publik atau privat, jangan menebak. Tanyakan kepada saya.

---

## 7. USER, AUTHENTICATION, DAN ROLE

- Identitas utama user menggunakan **Supabase Auth**, bukan lagi nama bebas dari prompt browser.
- Login tersedia melalui **Email + Password** dan **Continue with Google** setelah provider Google dikonfigurasi di Supabase.
- Registrasi mandiri hanya boleh memilih role `Staff` atau `Management`; `Owner` tidak pernah menjadi pilihan registrasi.
- Role `Owner` dicadangkan untuk **Ratu**. Bootstrap awal menggunakan Full Name `Ratu`; setelah Owner ada, tidak boleh ada Owner kedua melalui registrasi biasa.
- Role disimpan di tabel `workboard_profiles`, bukan berdasarkan kata pada nama user dan bukan berdasarkan metadata yang dapat diubah user.
- `Ratu / Owner` dapat mengubah role user lain antara `Staff` dan `Management`, serta mengaktifkan/menonaktifkan akun melalui `Users & Access`.
- `localStorage` key `wb_user` hanya dipertahankan sebagai **mirror nama legacy** untuk kompatibilitas data lama (`created_by` / `user_name`), bukan sebagai autentikasi.
- **Switch User** lama diganti dengan **Sign Out** lalu login memakai akun yang benar.
- Nama profile tidak boleh diganti bebas dari UI karena nama masih menjadi ownership key pada data legacy.
- Owner / Management / Staff wajib memiliki visibilitas menu yang sama-sama benar pada desktop dan mobile.

---

## 8. DATABASE DAN PERUBAHAN STRUKTUR

Sebelum menggunakan field atau tabel baru:

- Periksa nama tabel dan kolom yang sudah ada di `index.html`.
- Hindari membuat tabel baru jika fitur dapat memakai tabel sumber yang sama.
- Jangan mengubah nama kolom lama tanpa rencana migrasi.
- Gunakan `ADD COLUMN IF NOT EXISTS` untuk penambahan kolom yang aman.
- Jika perlu SQL baru, berikan SQL terpisah dan jelaskan kapan harus dijalankan.
- Aplikasi harus menampilkan setup banner atau pesan yang jelas jika tabel/kolom belum tersedia.
- Jangan menganggap SQL sudah dijalankan hanya karena kodenya sudah ditambahkan.
- Jangan memasukkan data rahasia dalam SQL contoh.

---

## 9. KEAMANAN WAJIB

- Jangan pernah menulis password, token, API key rahasia, recovery key, atau kredensial asli di HTML, prompt, chat, log, screenshot, atau repository GitHub.
- Jangan membuat daftar kredensial plaintext untuk bulk import di source code.
- Supabase anon key untuk aplikasi browser bukan pengganti Row Level Security.
- Password Vault yang sudah terenkripsi tidak boleh dikembalikan ke penyimpanan plaintext.
- Jangan menurunkan perlindungan privasi atau enkripsi tanpa izin eksplisit.
- Kalau menemukan kredensial plaintext, jangan mengulang nilainya. Beri peringatan dan prioritaskan penghapusan serta rotasi kredensial.

---

## 10. PROSEDUR SEBELUM MENGUBAH KODE

Sebelum melakukan perubahan:

1. Cari panel, fungsi render, event handler, cache, query, dan elemen HTML yang terkait.
2. Cari semua pemanggilan nama fungsi, ID, tabel, dan kolom yang akan disentuh.
3. Periksa apakah data/fungsi tersebut juga dipakai panel lain.
4. Periksa versi desktop dan mobile.
5. Catat bagian yang akan diubah dan bagian yang harus tetap tidak berubah.
6. Pilih perubahan terkecil yang dapat menyelesaikan permintaan.

Jangan mulai mengganti kode sebelum hubungan-hubungan tersebut diperiksa.

---

## 11. PROSEDUR SETELAH MENGUBAH KODE

Sebelum memberikan file hasil:

- [ ] Pastikan HTML/JavaScript tidak memiliki kesalahan sintaks.
- [ ] Pastikan semua ID yang dirujuk masih tersedia.
- [ ] Pastikan fungsi yang dipanggil masih tersedia.
- [ ] Pastikan tidak ada fungsi ganda yang saling menimpa tanpa sengaja.
- [ ] Pastikan fitur lama yang berkaitan masih bekerja.
- [ ] Pastikan desktop dan mobile sama-sama diperbarui.
- [ ] Pastikan filter privasi masih diterapkan.
- [ ] Pastikan role visibility Owner / Management / Staff masih benar.
- [ ] Pastikan teks UI baru menggunakan English.
- [ ] Pastikan tidak ada kredensial atau data sensitif di source.
- [ ] Pastikan perubahan database dijelaskan jika ada.
- [ ] Bandingkan hasil dengan file awal agar tidak ada blok kode di luar tugas yang hilang.

Saat menyerahkan hasil, laporkan singkat:

1. Apa yang diubah.
2. Fungsi/panel apa yang disentuh.
3. Apa yang sengaja tidak diubah.
4. Apakah perlu menjalankan SQL.
5. Cara menguji di desktop dan mobile.

Jangan mengatakan “sudah aman” atau “semua berjalan” hanya karena kode berhasil ditulis. Sebutkan apa yang benar-benar sudah diperiksa.

---

## 12. KEPUTUSAN PROYEK YANG TETAP

- WorkBoard tetap berupa aplikasi satu file HTML utama kecuali saya meminta perubahan arsitektur.
- **Supabase Auth aktif mulai v91** untuk Email/Password dan Google OAuth; database WorkBoard diproteksi dengan RLS berbasis user terautentikasi.
- Tidak ada lagi konsep akun Admin/Boss/HRD berdasarkan nama; role resmi hanya `Owner`, `Management`, dan `Staff`.
- Rekap gaji dikerjakan di SiAkun, bukan WorkBoard.
- Push notification saat browser tertutup total ditunda.
- Background batik Mega Mendung/Parang tidak digunakan.
- Data finansial dan payroll tidak dipindahkan ke WorkBoard.
- Jangan menambahkan layanan berbayar tanpa persetujuan saya.

---

## 13. CARA MEMULAI SETIAP CHAT

Setiap chat coding baru, saya akan upload:

1. `PROMPT_MASTER_WORKBOARD_AMS.md`
2. `index.html` terbaru dari GitHub

Setelah membaca keduanya:

- Ringkas pemahaman tugas dalam beberapa poin.
- Sebutkan panel/fungsi yang kemungkinan terdampak.
- Pastikan perubahan tidak menghilangkan fitur yang sudah ada.
- Kerjakan satu langkah per pesan.

Jika file `index.html` terbaru belum tersedia, minta saya menguploadnya sebelum memberikan perubahan kode final.

---

## 14. PROTOKOL SINKRONISASI PROMPT DAN INDEX

PROMPT MASTER ini terdiri dari dua bagian:

1. **Aturan tetap** pada Bagian 1–13.
2. **Snapshot implementasi berjalan** pada Bagian 14 dan seterusnya.

Aturan wajib saat ada perubahan berikutnya:

- Jangan membuat versi prompt lengkap dan prompt ringkas yang berjalan terpisah.
- Gunakan hanya satu PROMPT MASTER.
- Jangan menulis ulang, meringkas, menghapus, atau melemahkan aturan pada Bagian 1–13.
- Setelah `index.html` berubah, audit bagian yang benar-benar terdampak lalu perbarui:
  - status sinkronisasi,
  - nama pasangan kode,
  - SHA-256 pasangan kode jika pemeriksaan hash tersedia,
  - snapshot fitur terkait,
  - catatan perubahan terbaru.
- Jangan memperbarui snapshot berdasarkan asumsi. Baca kode aktual terlebih dahulu.
- Jangan menyalin dokumentasi versi lama jika fungsi aktual sudah berubah.
- Jika prompt dan index tidak cocok, aturan tetap pada PROMPT MASTER tetap berlaku, sedangkan kondisi fungsi mengikuti index terbaru.
- Jika hash index berbeda dari hash yang tercatat, anggap pasangan file belum diverifikasi dan audit ulang sebelum coding.
- Perubahan kecil tidak boleh menyebabkan fitur lain, aturan privasi, navigasi mobile, database, atau fungsi lama hilang.

Tujuan protokol ini adalah menjaga prompt tetap lengkap tanpa membuat dua dokumen yang berisiko tidak sinkron.

---

## 15. SNAPSHOT IMPLEMENTASI AKTUAL

Snapshot ini dibuat dari `index.html` v125 Today Repeat Loop Fix yang dipasangkan dengan prompt ini.

### 15.1 Arsitektur dan komponen utama

- Aplikasi utama tetap berupa satu file HTML berisi HTML, CSS, dan JavaScript.
- Data utama disimpan di Supabase.
- Aplikasi mendaftarkan `sw.js` untuk PWA dan Work-Break Alarm.
- Identitas user aktif memakai Supabase Auth + profile `workboard_profiles`; `wb_user` hanya mirror nama untuk kompatibilitas data legacy.
- Navigasi desktop menampilkan `Today` dan, untuk Owner/Management, `Management Report` sebagai tombol mandiri. Owner/Staff masuk ke Today; Management masuk langsung ke Management Report.
- Grup `Daily` hanya berisi `Daily Schedule` dan `Logbook`.
- Grup `Projects` membuka satu `Projects Workspace`; Portfolio, Tracker, Kanban, Gantt, Matrix, dan Recurring berpindah melalui tab internal.
- Grup `Personal` hanya berisi Notes, To Do, dan Notepad. Brain Dump, Follow Up, dan Waiting disatukan di Capture.
- Navigasi mobile memakai `Today`, `Daily`, `Projects`, `Report`, dan `More`; tombol `Report` hanya terlihat untuk Owner/Management.
- Bottom navigation mobile memakai slot fleksibel: Owner/Management melihat 5 tombol tersebut, sedangkan Staff melihat 4 tombol karena `Report` disembunyikan. Tombol `More` wajib selalu terlihat dan membuka Notes, To Do, Notepad, Work Talk, Attendance, Resources, Password Manager, Help, serta kontrol sesuai role.
- `Leave Management` berada di area HR dan dapat dibuka Owner/Management pada desktop maupun mobile. `Users & Access` tetap Owner-only.
- Global Search, Global Filter, Export, dan Work Alarm berada di top bar.
- **Tidak ada tombol `+ Add` global di top bar.**

### 15.2 Lokasi tombol Add yang benar

`handleAdd()` hanya dipakai oleh empat panel berikut:

| Panel | Tombol lokal | Form |
|---|---|---|
| Daily Schedule | `Add Schedule` | `sched-form` |
| Recurring Task | `Add Recurring Task` | `rt-form` |
| Logbook | `Add Logbook` | `log-form` |
| Notes | `Add Note` | `note-form` |

Aturan:

- Jangan mengembalikan tombol `+ Add` global ke top bar.
- Panel lain menggunakan tombol atau form tambah miliknya sendiri.
- Jika panel baru perlu fungsi Add, buat kontrol lokal di panel tersebut dan jangan mengaktifkan tombol global untuk semua panel.
- `Portfolio` memakai tombol lokal `Add Portfolio Entry` melalui `openPortfolioForm()` dan tidak ditambahkan ke `handleAdd()`.

### 15.3 Peta panel dan ketergantungan utama

| Grup | Panel/tampilan | Sumber/ketergantungan utama |
|---|---|---|
| Today | Today / One Thing Now | Agregasi `todos`, `schedule_events`, `time_plan_tracker`, `project_portfolio`, `logbook_entries`, Attendance, dan Work Alarm; Quick Capture tetap owner-only untuk data pribadi |
| Daily | Daily Schedule | `schedule_events`, public + private |
| Daily | Logbook | `logbook_entries`, lampiran Supabase Storage, tautan ke `time_plan_tracker`, dan Smart Next-Step Suggestion |
| Projects | Portfolio tab | `project_portfolio`; riwayat Project/BOQ/Order yang masuk AMS, customer/PIC, sumber lead/order, partner/vendor, stage, outcome, loss/stop reason, next action, follow-up date, beberapa jenis nilai komersial, notes, lampiran, dan public/private |
| Projects | Tracker tab | Statistik dan Project/Milestone memakai `time_plan_tracker`; `tracker_items` masih dipakai Result dan fungsi lama |
| Projects | Kanban tab | Visualisasi dan perubahan status dari `time_plan_tracker` |
| Projects | Gantt tab | Timeline dari `time_plan_tracker` |
| Projects | Matrix tab | Gabungan To Do belum selesai dari `todos` dan item aktif `time_plan_tracker` |
| Projects | Recurring tab | `recurring_templates`; dapat membuat item ke `schedule_events` atau `time_plan_tracker` |
| Personal | Notes | `notes`; selalu private dan hanya milik user aktif |
| Personal | To Do | `todos`; hanya milik user aktif |
| Personal | Notepad | `notepad_items`; hanya milik user aktif |
| Communication | Work Talk | `chat_channels`, `chat_messages`, realtime, polling, DM, dan online presence |
| HR | Attendance | `attendance`, foto, GPS, clock in/out |
| HR | Leave Request | `leave_requests` |
| Management | Management Report | Daily / Weekly / Monthly dari Schedule, Logbook aktual, Waiting/Carry Forward, Attendance + approved Leave/Sick/Time Off, Portfolio/Project; analytics bulanan lama tetap tersedia |
| Resources | All Links | `app_links`; data bersama tim |
| Resources | Password Manager | `vault_keys` dan `password_vault_v2`; private per user dan terenkripsi end-to-end |
| Help | Guide & FAQ | Konten FAQ yang dirender JavaScript |
| Owner Controls | Users & Access | `workboard_profiles`; Owner mengubah role Staff/Management dan Active/Inactive |
| HR | Leave Management | `leave_requests`; Owner/Management dapat review + Approve/Reject/Reset; Delete tetap Owner-only |

Catatan ketergantungan:

- Portfolio adalah panel baru di Projects Workspace dengan tabel `project_portfolio`; Tracker, Kanban, Gantt, Matrix, dan Recurring tetap merupakan panel lama yang dipertahankan dan tidak diubah sumber datanya.
- `time_plan_tracker` dipakai bersama oleh Tracker, Kanban, Gantt, Decision Matrix, Recurring Task, dan tautan status Logbook.
- `tracker_items` belum boleh dihapus hanya karena form lamanya tidak aktif; Result dan fungsi lain masih mereferensikannya.
- Mode Today, Brain Dump, Follow Up, Waiting Reply, serta To Do memakai tabel `todos` yang sama. Brain Dump/personal data tetap private; work-state Team/Company dapat dibaca Management Report sesuai RLS.
- Saat item `todos` work-state Public (Waiting / Follow Up / Carry) diedit dari panel Personal → To Do, edit hanya boleh mengubah field tugas; `is_private` dan `created_by` wajib dipertahankan. To Do manual baru dari panel Personal tetap dibuat Private.
- Rename user menyentuh banyak tabel. Jangan mengurangi daftar migrasi nama tanpa audit semua tabel.

### 15.4 Aturan visibilitas tim yang disetujui

- WorkBoard memang digunakan oleh tim.
- Data yang tidak ditandai private memang sengaja dapat dilihat seluruh tim.
- Data private hanya boleh terlihat oleh pembuatnya.
- Notes, To Do, Notepad, dan Password Manager bersifat milik user aktif.
- All Links adalah data bersama tim.
- Portfolio bersifat Team / Company secara default; entri yang ditandai Private hanya boleh terlihat oleh pembuatnya melalui `applyPrivacy()`.
- Visualisasi turunan seperti Kanban, Gantt, Decision Matrix, Result, dan badge harus mengikuti aturan privasi sumber data.
- Decision Matrix memakai dua aturan sumber sekaligus: To Do tetap owner-only/personal melalui `applyOwner()`, sedangkan Time Plan Tracker mengikuti Team / Company visibility melalui `applyPrivacy()`. Tracker public milik user lain boleh terlihat di Matrix tetapi harus `Read only` kecuali user aktif adalah creator atau Owner; tracker private user lain tidak boleh masuk Matrix.
- Jangan mengubah data bersama menjadi owner-only hanya karena aplikasi digunakan banyak orang.
- RLS aktif mulai v91: request tanpa sesi Auth tidak boleh memperoleh akses tabel WorkBoard yang dimigrasikan.
- Staff tetap dapat melihat data Team / Company sesuai aturan panel sumber, tetapi tidak mendapat menu Management Report.
- Management mendapat Management Report dan data reporting yang memang Team / Company; private personal data user lain tidak dibuka.
- Pada tabel kerja Team / Company yang public, visibilitas baca dan hak ubah tidak disamakan: creator dapat mengubah row miliknya; Owner juga dapat mengelola row public user lain sesuai RLS; Staff/Management lain melihat row tersebut sebagai read-only.
- UI Schedule, Logbook, Portfolio, Project Tracker/Kanban, dan Recurring Task wajib menyembunyikan/menonaktifkan action mutasi pada row yang tidak boleh diubah user aktif. Owner yang mengedit row public user lain harus mempertahankan `created_by` asli dan privacy tetap Public.
- Management dan Owner dapat membuka `HR → Leave Management` serta Approve / Reject / Reset request Leave, Sick, dan Time Off. Delete request tetap hanya Owner. `Users & Access` tetap hanya Owner.
- Attendance update memakai defense-in-depth mulai v107: Staff/Management hanya boleh menyelesaikan Clock Out pada row attendance miliknya sendiri; identity, tanggal, Clock In, status, keterlambatan, GPS/foto masuk, keterangan, dan created_at tidak boleh ditulis ulang. Official Clock Out timestamp ditetapkan oleh database. Mulai v124, browser juga tidak lagi memiliki hak INSERT langsung ke `attendance`; Clock In normal wajib melalui RPC `workboard_clock_in()` yang menentukan tanggal, waktu, status, dan keterlambatan dari waktu database WIB serta mencegah double Clock In user/tanggal. Owner tetap memiliki capability administratif yang sudah ada pada operasi yang memang diizinkan policy.
- Approved leave untuk Today Attendance dan panel Attendance mengambil maksimal satu record terbaru (`created_at` descending + `limit(1)`) agar overlapping approved leave tidak menyebabkan `.maybeSingle()` gagal. Alasan dan tanggal leave pada panel Attendance di-escape sebelum masuk `innerHTML`.
- Owner (Ratu) mendapat seluruh kontrol WorkBoard/company yang dirancang untuk Owner, tetapi Password Manager dan data personal private user lain tetap mengikuti policy private masing-masing.

### 15.5 All Links — kondisi terbaru

SQL recovery `app_links` yang tertanam di banner setup memakai Auth/RLS: anon direvoke dan hanya user `authenticated` dengan `workboard_is_active()` yang mendapat akses.

All Links saat ini memiliki:

- Tambah, edit, dan hapus link manual.
- Filter kategori.
- Import CSV melalui tombol `Import CSV`.
- CSV menerima pemisah koma atau titik koma.
- Header yang dikenali mencakup:
  - `Perusahaan` / `Company` / `Company Name` / `Name` / `Label`
  - `Website Resmi` / `Official Website` / `Website` / `URL` / `Link`
- Import dan form manual hanya menerima URL valid berprotokol `http://` atau `https://` melalui parser URL; membuka kartu memakai `openStoredLink()` dan tidak menanam URL database langsung ke inline JavaScript.
- Batas ukuran CSV adalah 1 MB.
- Link duplikat dilewati menggunakan URL yang sudah dinormalisasi.
- Hasil import website perusahaan otomatis menggunakan:
  - kategori `Company Website`,
  - deskripsi `Official company website`,
  - emoji `🌐`.
- All Links dirender sebagai kartu ringkas dalam kategori berwarna.
- Header kategori menampilkan nama kategori, ikon, warna, dan jumlah link.
- Grid responsif:
  - desktop lebar: 4 kolom,
  - desktop/tablet menengah: 3 kolom,
  - tablet kecil: 2 kolom,
  - mobile: 1 kolom.
- Deskripsi link dibatasi dua baris agar daftar tidak memanjang berlebihan.
- Tombol edit dan hapus harus tetap tersedia pada setiap kartu.

### 15.6 Password Manager

- Password Manager memakai `password_vault_v2`.
- Enkripsi dan dekripsi dilakukan di browser menggunakan Web Crypto API.
- `vault_keys` menyimpan data pembungkus kunci per user.
- Password Vault hanya menampilkan data milik user aktif.
- Jangan memindahkan password kembali ke `password_vault` plaintext.
- Jangan memasukkan kredensial asli sebagai array bulk import di source code.

### 15.7 Kondisi UI yang perlu dijaga

- Seluruh teks UI baru wajib English.
- Masih mungkin ada teks Indonesia lama di `index(70).html`; itu adalah technical debt, bukan alasan mengubah isi data user.
- Jangan melakukan penerjemahan massal ketika tugas hanya menyentuh satu fitur. Terjemahkan bagian terkait secara terarah atau lakukan audit bahasa sebagai tugas khusus.
- Desain tetap light theme dan responsif.
- Perubahan visual tidak boleh menghapus event handler, ID, tombol aksi, filter, atau fungsi penyimpanan.

### 15.8 Draft Protection — Autosave

- Draft Protection menggunakan `localStorage` dan dipisahkan berdasarkan user aktif, panel, serta ID data yang sedang diedit.
- Draft aktif pada Logbook, Notes, To Do, Notepad, dan pesan baru Work Talk.
- Draft baru maupun perubahan saat mengedit data lama disimpan otomatis.
- Mulai v105, draft Logbook/Notes/Notepad juga menyimpan record UUID internal untuk menjaga private rich-text image tetap terikat ke parent record yang sama setelah refresh; UUID ini bukan isi user dan tidak ditampilkan di UI.
- Draft dipulihkan ketika form atau chat terkait dibuka kembali.
- Draft dihapus setelah penyimpanan ke Supabase berhasil atau setelah user mengonfirmasi pembuangan draft.
- Berpindah panel tidak boleh menghapus draft.
- Lampiran file tidak dimasukkan ke draft karena browser tidak mengizinkan pemulihan pilihan file secara aman.
- Password Manager, master password, secret key, token, dan data sensitif lain tidak boleh disimpan oleh Draft Protection.
- Fitur ini tidak membutuhkan tabel atau SQL baru.

---

### 15.9 Today dan Quick Capture

- `Today` menjadi pusat kerja harian. Owner dan Staff masuk ke Today; Management masuk langsung ke Management Report namun tetap dapat membuka Today.
- Today tidak membuat tabel baru; ia mengagregasi data yang sudah ada berdasarkan status, tanggal, next action, dan waiting state.
- Sumber Today: To Do/Follow Up/Waiting/Brain Dump (`todos`), Schedule (`schedule_events`), Project Tracker (`time_plan_tracker`), Portfolio (`project_portfolio`), Completed Today (`logbook_entries`), Attendance, dan Work Alarm.
- Hanya pekerjaan yang membutuhkan perhatian sekarang yang ditonjolkan. `One Thing Now` menampilkan tepat satu tindakan teratas; item lain masuk `Up Next`, Follow Up, Waiting, Brain Dump, atau Completed Today.
- Untuk mencegah data legacy membanjiri Today, Schedule lama tanpa status baru hanya otomatis ditarik maksimal 7 hari ke belakang. Schedule hari ini tetap selalu tampil; pekerjaan lama lain tetap tersedia di panel asal.
- Portfolio tanpa Next Action hanya menampilkan satu reminder `Set Next Action` di Today pada satu waktu; seluruh daftar `Needs Action` tetap tersedia di Portfolio.
- Quick Capture menerima satu kalimat dengan mode `Today`, `Follow Up`, `Waiting Reply`, `Project`, dan `Brain Dump`.
- `Done Now` mencatat pekerjaan mendadak langsung ke Logbook sebagai aktivitas unplanned tanpa harus membuat Schedule terlebih dahulu.
- Brain Dump tetap private dan tidak menjadi aktivitas boss sampai user mengubahnya menjadi pekerjaan.
- Saat Brain Dump dipromosikan melalui `Today`, `Follow Up`, atau `Waiting`, row yang sama berubah menjadi work-state Team/Company (`is_private = false`); sebelum dipromosikan tetap private. Tombol promosi di Today dan panel Brain Dump memakai `organizeBrainItem()` yang sama.
- Setelah pekerjaan selesai, WorkBoard menawarkan langkah berikutnya: Nothing, Waiting Reply, atau Follow Up Again.
- Setelah `Done`, opsi `Waiting Reply` / `Follow Up Again` mewarisi privacy source pekerjaan: source Private tetap private, sedangkan source Team/Company tetap public untuk reporting. `Done Now` mengikuti pola work-state Team/Company yang sama dengan Quick Capture Today/Follow Up/Waiting.
- `Later 30m` hanya menyembunyikan sementara item dari Today pada perangkat/user aktif; data sumber tidak dihapus.
- Reminder legacy yang berasal dari judul Logbook generik seperti `Daily Activity Report` tidak lagi bersaing dengan follow-up nyata di Today; data lama tidak dihapus dan tetap dapat direview melalui To Do.
- Item yang sudah menjadi `One Thing Now` tidak diduplikasi lagi di `Up Next` atau `Follow-ups Due`.
- `Up Next` dibatasi maksimal **2 item** agar Today tetap ringan dibaca; antrean aktif lainnya tetap tersedia dan akan naik setelah item di atasnya selesai/dipindahkan.
- Setelah `Done`, Today memakai status source **dan** source marker Auto Logbook hari ini sebagai guard. Action source yang sama tidak boleh muncul kembali akibat stale/racing refresh; Portfolio yang baru saja selesai juga tidak langsung berubah menjadi reminder `Set Next Action` pada hari yang sama.
- Mulai v125, Schedule/carry legacy dengan **judul Schedule yang sama** tidak boleh berputar kembali di `One Thing Now` pada hari yang sama setelah salah satu occurrence judul tersebut sudah `Done`. Guard ini hanya berlaku pada layer Today untuk source Schedule/linked Schedule berdasarkan Auto Logbook hari ini; record Schedule historis tidak dihapus atau ditulis ulang.
- Exact duplicate yang benar-benar identik pada antrean aktif dari source type yang sama dikolaps hanya pada layer tampilan. Schedule dengan waktu berbeda tetap dianggap aktivitas berbeda.
- Planned count membaca seluruh Schedule hari ini, termasuk Schedule yang sudah Done, sehingga angka Planned tidak turun ketika pekerjaan selesai.
- Sidebar `Today's Planned Progress` menghitung Schedule hari ini yang sudah Done (`category = green`) dibanding seluruh Schedule hari ini; Logbook/unplanned activity tidak boleh menaikkan persentase planned progress.
- Marker internal Schedule → Waiting / Carry / Cancelled di `todos` wajib mewarisi `is_private` dari Schedule asal. Schedule Public menghasilkan marker Team/Company yang dapat dibaca Management Report; Schedule Private tetap private.
- Jika marker Waiting/Carry yang terhubung ke Schedule diselesaikan sebagai `Done`, source Schedule ikut disinkronkan menjadi `category = green` dan Auto Logbook memakai source key Schedule agar tidak tercatat ganda.
- v117 membutuhkan one-time SQL migration untuk menyamakan privacy marker Schedule legacy dan menyinkronkan linked marker legacy yang sudah Done.

### 15.10 Projects Workspace

- Ringkasan Portfolio menampilkan 6 kartu: `Total Entries`, `Needs Action`, `Waiting`, `Upcoming`, `Active`, dan `Won / Approved`. `Total Entries` menghitung seluruh record Portfolio yang boleh terlihat oleh user setelah privacy filter.
- Sidebar hanya menampilkan satu item `Projects Workspace`.
- Portfolio ditambahkan sebagai tab pertama untuk mencatat Project, BOQ, dan Order yang masuk AMS.
- Tracker, Kanban, Gantt, Matrix, dan Recurring tetap memakai panel dan fungsi render lama.
- Perpindahan antar-tampilan dilakukan melalui tab sticky di bagian atas area konten.
- Tampilan proyek terakhir disimpan pada `localStorage` key `wb_last_project_view`.
- Top title tetap `Projects` saat berpindah tab.
- Desktop dan mobile memakai satu pintu Projects; keenam tampilan proyek (Portfolio, Tracker, Kanban, Gantt, Matrix, Recurring) memakai tab workspace yang sama.
- Bottom navigation mobile memiliki lima slot: `Today`, `Daily`, `Projects`, `Report`, dan `More`; `Report` disembunyikan untuk Staff. `Daily` membuka Daily Schedule/Logbook dan `More` menampung fitur lain serta Owner Controls bila berhak.
- Tombol `Today` membuka Today sambil memfokuskan Quick Capture; Management Report menandai tombol `Report` aktif; menu Owner di More hanya muncul untuk Owner.
- Tidak ada tabel, fungsi data, atau panel lama yang dihapus.

### 15.11 Unified Activity Flow — Schedule → Today → Done → Logbook

- Schedule tetap berarti **rencana kerja**; Logbook tetap berarti **hasil/aktivitas yang benar-benar sudah dilakukan**.
- Schedule dibuat lebih sederhana: field utama hanya waktu dan aktivitas; Location, Category, dan Visibility berada di `More details — optional`.
- Category Schedule tidak lagi dipakai user sebagai status. Nilai `green` tetap dipertahankan secara internal sebagai kompatibilitas legacy ketika aksi `Done` dijalankan.
- Aksi utama pada pekerjaan aktif: `Done`, `Waiting`, `Tomorrow`, `Later 30m`, `Open`, dan `Cancel` sesuai konteks.
- `Done` dari Today memperbarui sumber aktivitas dan otomatis membuat entri `logbook_entries`:
  - To Do / Follow Up → tandai `is_done`;
  - Schedule → tandai completed legacy tanpa input ulang;
  - Project Tracker → status `done`;
  - Portfolio Next Action → hapus Next Action yang selesai.
- `Waiting` menyimpan tanggal review/follow-up dan tidak terus menjadi fokus utama sebelum tanggalnya tiba. **Waiting adalah state kerja, bukan hasil selesai, sehingga tidak membuat Logbook baru.**
- `Tomorrow` membuat carry-forward tanpa mengetik ulang. Untuk Schedule, marker internal di `todos` dipakai agar tidak membutuhkan kolom database baru. **Carry Forward tidak membuat Logbook baru.**
- Saat item Carry kemudian benar-benar `Done`, Auto Logbook memakai tag `carry-resolved` (bukan `carried-forward`) agar hasil selesai tetap tampil di Logbook/Completed Today; tag `carried-forward` tetap khusus riwayat pemindahan legacy yang disembunyikan.
- `Cancelled` keluar dari daftar aktif dan dicatat pada source status/history, tetapi **tidak dibuat sebagai Logbook completed activity**. Untuk Schedule, state Waiting/Carry/Cancelled disimpan pada linked marker `todos` yang privacy-nya harus sama dengan Schedule sumber.
- Menyelesaikan linked Schedule marker dari Today/Follow Up/To Do menyinkronkan Schedule sumber menjadi Done; private/public Logbook mengikuti `is_private` marker/source, bukan ditebak dari nama marker.
- `Completed Today` membaca Logbook aktual, sehingga pekerjaan planned maupun unplanned tetap terlihat sebagai hasil kerja.
- Auto Logbook hanya dibuat untuk aktivitas yang benar-benar `Done` / `Done Now`. Auto entry memakai type `Report` dan source marker untuk mencegah satu source action ter-log dua kali karena double click / repeated render.
- Logbook binder menyembunyikan legacy auto state-history (`waiting`, `carried-forward`, `cancelled`) dan mengkolaps exact duplicate auto entries pada layer tampilan tanpa menghapus data database lama. Legacy auto completed yang dulu tersimpan sebagai `Note` ditampilkan konsisten sebagai `Report`.
- Smart next-step yang muncul setelah menyimpan Logbook mewarisi `is_private` Logbook sumber; saran dari Logbook Team/Public tidak boleh diam-diam berubah menjadi To Do Private, sedangkan saran dari Logbook Private tetap private.
- Smart Next-Step Logbook lama tetap dipertahankan untuk kompatibilitas.
- Tidak diperlukan SQL baru.

### 15.12 Smart Focus lokal dan Gemini Writing Assistant

- WorkBoard memakai dua lapisan bantuan yang berbeda dan tidak saling bergantung:
  1. **Smart Focus lokal** untuk memilih pekerjaan berikutnya.
  2. **Gemini Writing Assistant** untuk memproses tulisan yang dipilih user.
- Tombol `What should I do next?` berjalan sepenuhnya di browser dan memilih item teratas dari antrean Today yang sudah mempertimbangkan overdue, due today, in progress, Follow Up, carry forward, Schedule, dan priority.
- Smart Focus lokal tidak memanggil AI eksternal, tidak memakai saldo, tidak memakai kuota, tidak meminta access code, dan tidak mengirim daftar To Do keluar dari WorkBoard.
- Smart Focus menampilkan tepat satu pekerjaan, alasan pemilihannya, langkah terkecil 2–10 menit, dan tindakan setelahnya.
- Gemini dipanggil hanya ketika user membuka Writing Assistant pada Logbook, Notes, atau Notepad dan memilih salah satu tindakan:
  - `Summarize`
  - `Polish Writing`
  - `Make Professional`
  - `Make Shorter`
  - `Extract Follow-Ups`
- Hanya isi tulisan yang sedang dipilih yang boleh dikirim ke Gemini. Seluruh database, panel lain, data user lain, dan Password Manager tidak boleh ikut dikirim.
- Hasil Gemini dapat disalin. Untuk Summarize, Polish, Professional, dan Shorter, user dapat memilih `Replace Original`; penggantian wajib meminta konfirmasi dan hanya memperbarui field `body` pada item yang dipilih.
- `Extract Follow-Ups` tidak boleh mengganti tulisan asli secara otomatis.
- Penyedia eksternal adalah Gemini melalui Supabase Edge Function bernama `workboard-ai`.
- `GEMINI_API_KEY` hanya boleh disimpan sebagai Supabase Edge Function secret dan tidak boleh berada di `index.html`, GitHub, screenshot, prompt, atau chat.
- Browser memanggil `${SUPABASE_URL}/functions/v1/workboard-ai` menggunakan Supabase anon JWT yang sudah ada serta header terpisah `x-workboard-ai-key`.
- WorkBoard meminta `WORKBOARD_AI_ACCESS_KEY` sekali per browser tab dan menyimpannya hanya pada `sessionStorage` key `wb_gemini_access_code`.
- Edge Function membatasi origin, metode HTTP, panjang input, panjang output, dan memvalidasi access code sebelum memanggil Gemini API.
- Model default Edge Function yang telah dideploy adalah `gemini-3.1-flash-lite`; model dapat diganti melalui secret `GEMINI_MODEL` tanpa mengubah HTML.
- Tidak ada Puter.js fallback. Kegagalan atau habisnya kuota Gemini hanya boleh menonaktifkan pengolahan tulisan; Smart Focus lokal dan seluruh WorkBoard harus tetap berjalan.
- Setup Gemini tidak memerlukan SQL, tetapi memerlukan deploy Edge Function dan secrets `GEMINI_API_KEY` serta `WORKBOARD_AI_ACCESS_KEY`.
- Supabase Auth aktif mulai v91. Access code Gemini tetap hanya menjadi pengaman khusus Edge Function dan tidak menggantikan role/RLS WorkBoard.



### 15.13 Unified Rich Text Editor — Logbook, Notes, dan Notepad

- Form penulisan Logbook, Notes, dan Notepad memakai satu standar editor Quill yang sama.
- Tinggi area penulisan disamakan pada desktop dan mobile; toolbar mobile dapat digeser horizontal agar tidak menumpuk atau memotong tombol.
- Toolbar menyediakan paragraph/heading, pilihan ukuran teks, bold, italic, underline, strikethrough, warna teks, highlight, subscript, superscript, ordered list, bullet list, indent, alignment, blockquote, code block, link, image, table, divider line, undo, redo, full-screen writing, dan clear formatting.
- Pilihan font yang tersedia adalah Inter, Poppins, Nunito, Quicksand, Playfair Display, Caveat, Serif, dan Monospace.
- Paste dari ChatGPT, Word, email, atau halaman web dibersihkan menjadi HTML yang stabil tanpa script, event berbahaya, atau style layout asing.
- Penomoran list yang dimulai di atas angka 1 tetap dipertahankan saat paste.
- Tabel dari clipboard dipertahankan sebagai table embed; user juga dapat membuat tabel baru dan mengedit isi sel secara langsung.
- Gambar dapat ditambahkan melalui toolbar, paste screenshot, atau drag-and-drop. Mulai v105, gambar baru diunggah ke bucket private `workboard-private` dan dikaitkan ke record Logbook / Notes / Notepad melalui path record UUID + Auth UID.
- Gambar dibatasi maksimal 8 MB dan tetap disimpan sebagai object Storage, bukan data base64 di field database. HTML body menyimpan signed URL jangka pendek yang dapat dipetakan kembali ke object path dan diperbarui saat record dibuka.
- Rich HTML disanitasi sebelum disimpan dan sebelum ditampilkan untuk mengurangi risiko script atau atribut berbahaya.
- Footer editor menampilkan word count dan character count.
- Mode full-screen dapat ditutup menggunakan tombol toolbar atau tombol Escape.
- Draft Protection, ownership/private filter, Gemini Writing Assistant, tabel database, dan struktur penyimpanan lama tetap dipertahankan.
- Mulai v105, rich-text image baru tidak lagi memakai public URL permanen. WorkBoard membuat signed URL singkat dari bucket private dan me-refresh URL saat Logbook, Notes, Notepad, atau editor dibuka kembali.
- Gambar rich-text legacy yang sudah tersimpan sebagai public URL pada bucket `attachments` tetap kompatibel dan belum dipindahkan otomatis; migrasi object historis dilakukan sebagai tugas terpisah agar body lama tidak rusak.

### 15.14 Lampiran PowerPoint

- File `.ppt` dan `.pptx` didukung pada lampiran Logbook dan Work Talk.
- File picker harus menampilkan PowerPoint melalui ekstensi file dan MIME type resmi Microsoft PowerPoint.
- Batas ukuran lampiran adalah 20 MB per file.
- Validasi jenis dan ukuran file dilakukan kembali di JavaScript, bukan hanya melalui filter file picker.
- Mulai v103, file attachment baru Logbook, Portfolio, dan Work Talk disimpan di bucket private `workboard-private`; metadata record menyimpan `bucket` + `path`, bukan public URL.
- Akses download memakai sesi Supabase Auth dan Storage RLS: Logbook/Portfolio mengikuti visibility record, sedangkan Work Talk mengikuti visibility channel termasuk DM participant-only.
- Mulai v104, secure attachment dirender sebagai link interaktif yang jelas dan memicu authenticated blob download; state `Downloading...` ditampilkan saat file sedang diambil.
- Pada Logbook, attachment tampil di dalam activity card pada bagian `Attachments`, bukan sebagai chip terlepas di bawah halaman binder.
- PowerPoint dibuka/diunduh melalui authenticated download; WorkBoard tidak menjalankan preview slide di dalam aplikasi.
- File attachment legacy yang sudah lebih dulu memiliki `url` publik tetap kompatibel dan belum dipindahkan otomatis pada v103.
- Mulai v105, embedded image baru Logbook / Notes / Notepad memakai bucket private yang sama dengan attachment dan signed URL jangka pendek; gambar legacy public tetap kompatibel.
- v103 membutuhkan bucket private `workboard-private`; v105 memperluas policy Storage melalui `WORKBOARD_STORAGE_V105_PRIVATE_EDITOR_IMAGES.sql` untuk Notes/Notepad serta signed-image access. Tidak menambah tabel aplikasi baru.

### 15.15 Project / BOQ / Order Portfolio

- Portfolio berada di `Projects Workspace` sebagai tab `Portfolio`; sidebar dan bottom navigation tidak mendapat menu proyek tambahan.
- Data memakai tabel `project_portfolio`, terpisah dari `time_plan_tracker` karena fungsi Portfolio adalah riwayat peluang/project/order masuk, bukan task execution tracker.
- `entry_type` mendukung Project, BOQ, dan Order.
- Field identitas utama: `entry_date`, `entry_type`, `title`, `customer_name`, `customer_pic`, dan `customer_contact`.
- Field sumber dan kolaborasi: `source_type`, `source_detail`, dan `partner_vendor`.
- Sumber lead/order mencakup PaDi UMKM, Direct Company/Inquiry, Existing Customer/Repeat, Individual/Referral, Tender/Procurement Portal, Website, Marketplace, Exhibition/Event, dan Other/Unknown.
- `stage` menunjukkan posisi proses dan **bukan hasil akhir**. Stage mencakup New Inquiry/Incoming, Under Review, Vendor/Costing, BOQ Review, Quotation/SPH Submitted, Awaiting Customer, Negotiation, On Hold, PO/Order Received, Execution, Completed, dan Closed.
- `outcome` menggantikan makna UI lama `decision`. Outcome mencakup:
  - `pending` = belum ada keputusan customer/AMS;
  - `won` = sudah approved/menang;
  - `lost` = kalah;
  - `cancelled` = kebutuhan dibatalkan customer;
  - `not_pursued` = AMS memutuskan tidak melanjutkan.
- Istilah `Continue` tidak lagi dipakai pada UI karena ambigu. Legacy column `decision` tetap dipertahankan untuk kompatibilitas data/versi lama dan diisi otomatis dari `outcome`/`stage`.
- `outcome_reason` bersifat opsional dan selalu dapat diedit. UI memakai input dengan suggestion list: user dapat memilih alasan umum atau mengetik alasan custom. Alasan terstruktur mencakup harga terlalu tinggi/tidak kompetitif, kalah kompetitor, customer cancelled, no response, vendor/supply issue, specification mismatch, budget issue, schedule/lead-time issue, dan internal AMS decision. Nilai lama berbentuk code tetap kompatibel.
- `next_action` dan `next_action_date` ditambahkan agar Portfolio bukan hanya arsip tetapi juga menunjukkan tindakan berikutnya. Kartu menandai follow-up yang sudah jatuh tempo.
- Nilai komersial dipisahkan agar tidak salah menganggap harga vendor sebagai harga AMS:
  - `estimated_value` = Estimated Opportunity Value;
  - `ams_quote_value` = AMS Quotation / SPH Value;
  - `vendor_value` = Vendor / Cost Reference;
  - `final_order_value` = Final PO / Order Value.
- Input nilai IDR memakai parser aman yang hanya membaca angka nominal pertama. Paste seperti `Rp327.166.950 incl. PPN 11%` harus disimpan sebagai `327166950`, bukan menggabungkan angka `11` dari PPN. Saat field kehilangan fokus, nominal diformat dengan pemisah ribuan Indonesia.
- Field lain: `reference_no`, `notes`, `attachments`, dan `is_private`.
- Dashboard ringkas menampilkan Total Entries, Needs Action, Waiting, Upcoming, Active, dan Won / Approved. Total Entries menghitung seluruh record Portfolio yang boleh terlihat setelah privacy filter.
- Filter tersedia untuk Type, Outcome, Stage, dan Source.
- Full-text search bebas mencakup customer, PIC/contact, source, partner/vendor, reference, outcome, loss reason, stage, next action/date, notes, semua nilai komersial, pembuat, dan nama lampiran.
- Hasil search memakai mekanisme highlight WorkBoard yang sama; data private user lain tidak boleh masuk hasil.
- Team / Company adalah visibility default. Private mengikuti `applyPrivacy()`.
- Lampiran Portfolio baru memakai bucket private `workboard-private` dengan path berbasis `portfolio/<record_id>/<uploader_uid>/...`; akses file mengikuti RLS record Portfolio sehingga Team/Company dan Private tetap konsisten.
- Add/Edit/Delete tersedia pada kartu; tombol Add bersifat lokal dan tidak memakai `handleAdd()`.
- Portfolio dapat diekspor ke Excel/PDF/PNG dari panel aktif dan disertakan pada JSON Backup.
- Rename user memperbarui `project_portfolio.created_by`; penghapusan user admin tidak otomatis menghapus Portfolio karena Portfolio adalah riwayat perusahaan.
- Bug duplikasi render attachment pada kartu Portfolio telah dihapus; attachment hanya dirender satu kali.
- SQL Portfolio memakai jalur upgrade `ADD COLUMN IF NOT EXISTS` agar kompatibel dengan skema awal.
- Tabel Portfolio sudah digunakan pada WorkBoard dan mulai v91 mengikuti Supabase Auth/RLS: Team / Company dapat dibaca user aktif, Private hanya pembuat; modifikasi mengikuti policy role/ownership.
- Tracker, Kanban, Gantt, Matrix, Recurring, Capture, Logbook, dan tabel lama tidak diubah sumber datanya oleh penyempurnaan Portfolio ini.

### 15.16 Integrasi Attendance, Work Alarm, Portfolio Action-First, dan Management Result

- Today menampilkan status Attendance ringkas: Not Clocked In, Clocked In, atau Completed. Clock In/Out tetap memakai panel Attendance untuk selfie dan GPS, lalu kembali ke Today jika proses dimulai dari Today.
- Detail Attendance, Leave/Sick/Time Off, rekap, GPS, dan foto tetap berada di panel HR; tidak dipindahkan ke Quick Capture.
- Work Alarm tampil sebagai status ringkas di Today. Fase focus/break, cycle start, dan snooze disimpan agar refresh/minimized tab tidak selalu mereset timer.
- Work Alarm melakukan tick lebih rapat dan mengecek ulang saat tab kembali visible/focus. Periodic reminder setelah browser/app benar-benar ditutup tetap tidak dijamin karena push/background notification masih ditunda.
- Portfolio default menjadi `Needs Action`, dengan tampilan tambahan `Waiting`, `Upcoming`, dan `All Opportunities`.
- Kartu Portfolio menonjolkan Customer/Project, Stage, Next Action, Follow-up Date, serta tombol tindakan; data komersial/PIC/source/vendor/notes/attachment tetap berada di `More Details`.
- Form Portfolio dibuat progressive disclosure: Project/Opportunity, Customer, Next Action, dan follow-up menjadi bagian utama; field lain opsional di More Details. Semua ID dan field database lama tetap dipertahankan.
- Management Report menonjolkan Planned, Plan Done, Completed actual Logbook, Unplanned, Waiting, Carry Forward, Attendance, dan Project/Opportunity; analytics lama tetap dipertahankan di bagian expandable.
- Blok one-time bulk import Password Vault yang berisi kredensial plaintext telah dihapus dari HTML. Password Vault terenkripsi tetap dipertahankan. Kredensial yang pernah berada di source/repository lama harus dianggap pernah terekspos dan dirotasi bila masih aktif.
- Tidak membutuhkan SQL baru.

### 15.17 Management Report

- `Management Report` adalah menu utama untuk role `Management` dan `Owner`, bukan submenu tersembunyi.
- `Management` masuk langsung ke Management Report setelah login; `Owner` dan `Staff` masuk ke Today.
- Filter report: `Daily`, `Weekly`, `Monthly`, reference date, dan employee atau `All Team`.
- Attendance pada report utama menggabungkan row `attendance` dengan `leave_requests` berstatus `approved` yang overlap dengan periode. Approved Leave/Sick/Time Off dihitung per hari dalam range dan tidak diduplikasi jika user sudah memiliki attendance row pada tanggal yang sama.
- Urutan utama: Planned, Plan Done, Completed, Unplanned, Waiting, Carry Forward, Attendance, Planned Activities, Completed Results, Waiting/Carry Forward, dan Project/Opportunity Status.
- Report hanya memakai data kerja Team / Company yang diizinkan policy; Brain Dump, Notes private, Personal To Do private, Notepad, dan Password Manager tidak masuk report.
- Management Report adalah **reading layer**, bukan raw-table dump. Exact duplicate Schedule/Completed records dikolaps pada tampilan report tanpa menghapus atau mengubah data sumber.
- Jika satu action sudah Done lalu next state-nya Waiting, report menampilkan **satu cerita** di Completed dengan badge `Done → Waiting`, bukan mengulang item yang sama lagi di Waiting.
- Untuk periode yang mencakup hari ini, Waiting membaca **current state** dari To Do/Portfolio/Tracker dan linked Schedule marker yang Public; Carry Forward Schedule juga terbaca dari marker yang sama. Untuk periode lampau, history waiting Logbook tetap dapat dipakai sebagai jejak periode tersebut.
- Planned Activities membaca linked Schedule state untuk menampilkan badge `Waiting`, `Carry`, atau `Cancelled` bila Schedule belum Done; Schedule Private dan marker turunannya tetap tidak masuk report.
- Portfolio berstatus Waiting ditampilkan sebagai attention item dan tidak diulang lagi di `Project / Opportunity Status`; bagian Project Status hanya menampilkan opportunity aktif non-waiting.
- Planned yang judulnya sama tetap boleh tampil lebih dari sekali jika waktu/lokasi berbeda; hanya record Schedule yang benar-benar identik yang dikolaps.
- Monthly Analytics & Attendance lama tetap tersedia dalam bagian expandable supaya layar utama lebih mudah dibaca. Mulai v112, rekap bulanan memakai helper gabungan attendance + approved leave yang sama: real attendance menang pada user/tanggal yang sama, overlapping approved leave hanya dihitung sekali, dan request approved terbaru menang jika ada overlap legacy. Mulai v113, seluruh analytics lama juga memakai `managementPublicRows()` untuk Schedule/Tracker/Portfolio/Logbook/To Do sehingga row Private milik user yang sedang login tidak ikut masuk laporan; query dan grafik kategori personal Notes dihapus dari Management Report.
- Desktop memakai tombol utama `Management Report`; mobile memakai tombol `Report` yang hanya terlihat untuk Owner/Management.

### 15.18 Logbook Actual-Work + Daily Binder — v95

- Logbook kembali ke fungsi inti: **apa yang benar-benar SUDAH dikerjakan**, bukan histori perubahan state pekerjaan.
- `Done` / `Done Now` boleh membuat Auto Logbook; `Waiting`, `Tomorrow / Carry Forward`, dan `Cancelled` tidak membuat Logbook baru.
- Auto Logbook baru selalu bertipe `Report` dan diberi source marker agar action yang sama tidak menghasilkan record ganda karena double click atau render ulang.
- Legacy auto state-history tetap berada di database untuk kompatibilitas/historical report lama, tetapi disembunyikan dari binder Logbook karena bukan completed work.
- Exact duplicate legacy Auto Logbook dikolaps pada layer tampilan; tidak ada record database yang dihapus.
- Legacy auto completed yang dulu tersimpan sebagai `Note` dinormalisasi pada tampilan menjadi `Report`; manual Note milik user tidak diubah.
- Auto completed entry tanpa body menampilkan ringkasan sistem yang ringkas di halaman binder sehingga tidak tampak sebagai halaman kosong.
- **Tampilan Logbook dikelompokkan per tanggal:** satu tanggal menjadi satu halaman binder, sedangkan setiap aktivitas tetap disimpan sebagai record `logbook_entries` terpisah agar integrasi Today, Management Report, source marker, tracker link, edit/delete, attachment, dan audit history tidak rusak.
- Index binder di kiri menampilkan tanggal + jumlah aktivitas pada tanggal tersebut, bukan satu baris untuk setiap aktivitas.
- Halaman kanan menampilkan seluruh completed activities pada tanggal aktif dalam satu halaman harian; setiap aktivitas tetap memiliki badge type, body/ringkasan, tag, attachment, Gemini, Edit, dan Delete sendiri.
- Mulai v104, tag Logbook di-escape sebelum dirender dan attachment memiliki wrapper per-activity agar struktur HTML kartu tidak dapat rusak oleh isi tag serta file selalu tampil pada activity yang benar.
- Search dan tab All/Reports/Notes/Meetings/Issues tetap bekerja pada record yang cocok lalu hasilnya dikelompokkan kembali per tanggal.
- Pada mobile, index tanggal berada di atas dan halaman harian di bawah melalui layout responsif yang sama; tidak ada alur data mobile terpisah.
- Perubahan berlaku pada desktop dan mobile karena keduanya memakai `renderLogbook()` dan action flow yang sama.
- Tidak memerlukan SQL baru.

### 15.19 Authentication, Roles, dan Users & Access — v91

- Supabase Auth menggantikan login nama bebas. App tetap tersembunyi sampai sesi Auth dan profile WorkBoard valid.
- Metode: Email + Password, email verification sesuai setting Supabase, Forgot Password, serta Google OAuth setelah provider Google dan redirect URL dikonfigurasi.
- Registrasi meminta Full Name dan role `Staff` / `Management`. `Owner` tidak pernah dapat dipilih oleh user baru.
- Owner tunggal adalah Ratu. Pada bootstrap awal, Full Name `Ratu` dapat menjadi Owner jika belum ada Owner; policy/database mencegah Owner kedua.
- Tabel baru `workboard_profiles` menyimpan `auth.users.id`, full name, email, role, active state, dan onboarding state.
- Authorization tidak bergantung pada `raw_user_meta_data`; role efektif dibaca dari `workboard_profiles`.
- `Users & Access` hanya Owner dan tersedia di desktop serta mobile. Owner dapat mengubah Staff ↔ Management dan Active ↔ Inactive; Owner sendiri terkunci.
- `Leave Management` bukan bagian dari hak User Access: Owner/Management dapat melakukan review serta Approve/Reject/Reset leave request; Delete request tetap Owner-only.
- Self-service INSERT ke `leave_requests` harus milik user aktif sendiri, selalu mulai dengan `status = pending`, `catatan_admin` kosong, dan `tipe` hanya `izin` / `sakit` / `cuti` (Leave / Sick / Time Off).
- Akun inactive tidak dapat memakai WorkBoard; RLS juga menolak akses data walau sesi lama masih tersimpan.
- `Switch User` lama menjadi Sign Out. Rename profile dari UI dinonaktifkan karena data legacy masih memakai nama pada `created_by` / `user_name`.
- RLS diaktifkan pada tabel WorkBoard yang dimigrasikan. Anon tidak diberi akses tabel tersebut; role `authenticated` mendapat hak yang dibatasi policy.
- Attendance memiliki trigger integrity v107 di atas RLS untuk Clock Out, dan v124 menutup INSERT attendance langsung dari browser. Clock In dilakukan melalui `workboard_clock_in()` SECURITY DEFINER yang memvalidasi user aktif, memakai waktu resmi `Asia/Jakarta`, menghitung status/keterlambatan di server, mewajibkan alasan jika terlambat, serta menolak Clock In kedua pada user/tanggal yang sama.
- Data Team / Company tetap dapat dibaca sesuai aturan lama; private personal tetap hanya pemilik. Management dapat membaca data reporting; Owner mendapat kontrol company yang diperlukan.
- Password Vault E2EE tetap owner-of-vault only dan tidak pernah dibuka ke Management/Owner lain.
- Work Talk DM tetap hanya participant; hide/unhide room tetap dipertahankan melalui izin update terbatas pada `hidden_by`. Permanent delete channel hanya ditampilkan/diizinkan untuk creator channel atau Owner; edit/delete message hanya untuk sender pesan itu sendiri.
- Mulai v110, bucket legacy `attachments` ditutup dari public access setelah bridge policy `WORKBOARD_STORAGE_V110_LEGACY_ATTACHMENT_PRIVACY.sql` aktif. File historis tidak dipindah atau dihapus; WorkBoard mengubah URL legacy menjadi authenticated download/signed image dan Storage RLS memeriksa parent Logbook/Portfolio/Notes/Notepad/Work Talk sebelum memberi akses. File baru tetap memakai bucket private `workboard-private` dari v103/v105. Mulai v124, helper upload public legacy dipertahankan hanya sebagai fail-closed guard dan tidak lagi dapat menghasilkan `getPublicUrl()`.
- Migrasi dijalankan bertahap: `WORKBOARD_AUTH_V91_STEP1_SETUP.sql` membuat Auth/profile tanpa memutus akses versi lama; setelah index v91 dan akun Ratu/Owner teruji, `WORKBOARD_AUTH_V91_STEP3_RLS.sql` mencabut anon dan mengaktifkan policy final. Google provider/redirect dikonfigurasi terpisah di Supabase.

## 16. CHECKLIST KHUSUS SEBELUM MENYERAHKAN VERSI BERIKUTNYA

Selain checklist pada Bagian 11, periksa:

- [ ] Today menjadi panel awal pada desktop dan mobile.
- [ ] One Thing Now hanya menampilkan satu item utama dan tidak dibanjiri Schedule legacy lama.
- [ ] Up Next maksimal dua item, exact duplicate tidak berulang, dan item yang baru Done tidak muncul kembali pada hari yang sama.
- [ ] Quick Capture dapat menyimpan Today, Follow Up, Waiting Reply, Project, Brain Dump, dan Done Now.
- [ ] Aksi Done dari Today membuat Logbook otomatis tanpa input ulang.
- [ ] Binder Logbook menampilkan satu halaman per tanggal dan seluruh completed activities pada tanggal tersebut tanpa menggabungkan record database sumber.
- [ ] Waiting dan Tomorrow tetap muncul kembali saat waktunya tiba.
- [ ] Schedule tetap dapat Add/Edit/Delete dan aksi Done/Waiting/Tomorrow tidak menghapus data rencana.
- [ ] Waiting/Carry/Cancelled dari Schedule Public dapat dibaca Management Report, Schedule Private tetap tersembunyi, dan menyelesaikan linked marker ikut menandai Schedule sumber Done tanpa membuka Logbook private.
- [ ] Action mutasi pada Schedule/Logbook/Portfolio/Project Tracker/Kanban/Recurring hanya muncul untuk creator atau Owner pada row Public; user lain melihat Read only dan ownership tidak berpindah saat Owner mengedit.
- [ ] Portfolio default Needs Action, sementara Waiting/Upcoming/All tetap dapat dibuka.
- [ ] Ringkasan Portfolio menampilkan Total Entries bersama Needs Action, Waiting, Upcoming, Active, dan Won / Approved pada desktop dan mobile.
- [ ] Kartu dan form Portfolio menyembunyikan detail sekunder sampai More Details dibuka.
- [ ] Attendance ringkas tampil di Today dan Clock In/Out tetap meminta selfie/GPS lewat alur Attendance.
- [ ] Clock In normal berhasil melalui RPC `workboard_clock_in()` setelah SQL v124 terpasang; direct INSERT attendance dari browser tetap tidak tersedia.
- [ ] Work Alarm tidak mereset fase hanya karena refresh dan statusnya tampil di Today.
- [ ] Result bagian atas membedakan Planned, Completed, Unplanned, Waiting, dan Carry Forward.
- [ ] Tidak ada array/function bulk import kredensial plaintext di source.
- [ ] Tidak ada tombol Add global yang muncul kembali.
- [ ] Empat tombol Add lokal masih membuka form yang benar.
- [ ] All Links masih dapat menambah, mengedit, menghapus, memfilter, dan mengimpor CSV.
- [ ] All Links menolak URL selain HTTP/HTTPS dan membuka URL tersimpan melalui `openStoredLink()`, bukan inline URL dari database.
- [ ] Pencegahan duplikat CSV masih aktif.
- [ ] Kategori All Links tetap tegas, berwarna, memiliki jumlah link, dan memakai grid responsif.
- [ ] Data publik tetap terlihat oleh tim.
- [ ] Data private milik user lain tetap tersembunyi.
- [ ] Notes, To Do, Notepad, seluruh mode Capture, dan Password Manager tetap owner-only.
- [ ] Daily hanya menampilkan Daily Schedule dan Logbook.
- [ ] Projects Workspace tetap memiliki tab Portfolio, Tracker, Kanban, Gantt, Matrix, dan Recurring pada desktop serta mobile.
- [ ] Seluruh panel proyek lama masih tersedia dan fungsi render lamanya tidak dihapus.
- [ ] Portfolio dapat Add/Edit/Delete Project, BOQ, dan Order serta menyimpan tanggal, customer/PIC, source, partner/vendor, stage, outcome, reason, next action/follow-up date, notes, nilai komersial terpisah, dan attachment.
- [ ] Portfolio Team/Public dan Private tetap mengikuti `applyPrivacy()`; private user lain tidak tampil.
- [ ] UI Portfolio tidak lagi memakai istilah `Continue`; peluang yang belum diputuskan harus tampil `Pending`.
- [ ] Stage dan Outcome tidak dicampur: Quotation/Awaiting Customer tetap stage, sedangkan Won/Lost/Cancelled/Not Pursued adalah outcome.
- [ ] Loss / Stop Reason hanya disimpan untuk Lost, Cancelled, atau Not Pursued.
- [ ] Follow-up yang jatuh tempo muncul pada penghitung `Follow-ups Due` dan Next Action terlihat pada kartu.
- [ ] Vendor / Cost Reference tidak ditampilkan sebagai AMS Quotation Value.
- [ ] Attachment Portfolio hanya dirender satu kali pada kartu.
- [ ] Search Portfolio mencari seluruh field aman termasuk PIC/contact, outcome, reason, next action/date, seluruh nilai komersial, dan nama lampiran serta tetap memakai highlight.
- [ ] Export Excel panel aktif dan JSON Backup menyertakan Portfolio.
- [ ] Tabel `project_portfolio` tidak dipaksa menggantikan atau mengubah `time_plan_tracker`.
- [ ] Satu input Capture dapat menyimpan Today, Follow Up, Waiting Reply, atau Brain Dump tanpa membuat tabel baru.
- [ ] Follow Up eksplisit tidak tampil ganda sebagai Waiting Reply.
- [ ] Kanban, Gantt, Decision Matrix, Recurring Task, dan Logbook tetap sinkron dengan `time_plan_tracker`.
- [ ] Decision Matrix menampilkan To Do milik user aktif + Tracker Team/Public yang boleh dibaca; Tracker public milik user lain tampil read-only dan Tracker private user lain tidak tampil.
- [ ] `tracker_items` tidak dihapus tanpa audit Result dan semua referensinya.
- [ ] `Users & Access` / Owner Controls hanya terlihat untuk Owner pada desktop dan mobile; `Management Report` hanya Owner/Management.
- [ ] UI baru menggunakan English.
- [ ] Help / FAQ login mengikuti Supabase Auth (email/password/Google), bukan login nama lama; panduan mobile memakai bottom navigation + More, bukan swipe sidebar lama.
- [ ] Draft Logbook, Notes, To Do, Notepad, dan Work Talk tetap pulih setelah berpindah panel.
- [ ] Password Manager dan field sensitif tidak masuk ke penyimpanan draft.
- [ ] Prompt Master ikut diperbarui jika kondisi implementasi berubah.
- [ ] Login nama bebas tidak muncul kembali; app hanya terbuka setelah Supabase Auth + profile valid.
- [ ] Register hanya menyediakan Staff / Management; Owner tidak tersedia sebagai pilihan.
- [ ] Ratu/Owner masuk ke Today dan memiliki Users & Access; Management masuk ke Management Report; Staff masuk ke Today.
- [ ] Leave Management tersedia untuk Owner/Management di desktop dan mobile; Users & Access tetap Owner-only; Staff tidak dapat membuka Leave Management.
- [ ] Email/password, Forgot Password, onboarding Google, Sign Out, dan account state responsive pada desktop/HP.
- [ ] Role tidak ditentukan dari teks nama seperti admin/bos/hrd.
- [ ] RLS tidak membuka Brain Dump, Notes, Notepad, To Do private, atau Password Vault milik user lain.
- [ ] User inactive ditolak pada UI dan database policy.
- [ ] `GEMINI_API_KEY` tidak pernah ditulis di HTML atau file publik.
- [ ] Pemanggilan Gemini tetap melalui Edge Function `workboard-ai`.
- [ ] Access code Gemini tidak disimpan lebih lama dari sesi browser.
- [ ] Tombol `What should I do next?` tidak memanggil layanan eksternal.
- [ ] Logbook, Notes, dan Notepad memiliki lima tindakan Gemini tanpa mengirim panel atau database lain.
- [ ] Logbook, Notes, dan Notepad memakai toolbar, tinggi editor, paste cleaner, dan footer penghitung yang sama.
- [ ] Font, ukuran, heading, list, indent, alignment, warna, highlight, link, undo, redo, divider, table, image, dan full-screen editor tetap berfungsi.
- [ ] Paste gambar dan upload gambar tetap menuju Supabase Storage private `workboard-private`, bukan disimpan sebagai base64 di database; signed URL private harus dapat di-refresh setelah expired.
- [ ] Lampiran `.ppt` dan `.pptx` tetap terlihat di file picker Logbook dan Work Talk, maksimal 20 MB per file.
- [ ] File attachment baru Logbook/Portfolio/Work Talk memakai `workboard-private` dan authenticated download; record legacy dengan `url` dibuka lewat privacy bridge bucket `attachments` tanpa public URL langsung.
- [ ] Rich HTML tetap disanitasi tanpa menghapus isi tulisan user yang valid.
- [ ] Teks To Do dirender sebagai plain text/escaped output pada Week, No Date, dan hasil Search; input HTML-like tidak boleh menjadi markup aktif.
- [ ] Smart next-step dari Logbook mewarisi privacy Logbook asal: Logbook Private membuat Waiting/Follow Up Private; Logbook Team/Public membuat work-state Team/Public untuk reporting.
- [ ] Numbering hasil paste tidak kembali ke angka 1 setelah bullet, paragraf kosong, atau blok daftar terpisah.
- [ ] Search bebas pada setiap panel menemukan kata dari isi penuh, rich text, tag, tanggal, status, dan nama lampiran tanpa membuka data privat user lain.
- [ ] Kata yang cocok pada hasil search ditampilkan bold dengan highlight lembut, lalu kembali normal saat search dibersihkan.
- [ ] Puter.js tidak dimuat dan tidak dapat memunculkan popup saldo.

---

## 17. CATATAN PERUBAHAN TERBARU

### 20 Agustus 2026 — v125 Today Repeat Loop Fix

- Memperbaiki loop `One Thing Now` ketika beberapa Schedule historis/overdue memiliki judul yang sama pada tanggal atau jam berbeda.
- Setelah salah satu occurrence Schedule dengan judul tersebut selesai dan Auto Logbook hari ini memiliki source marker `schedule:<id>`, Today menahan occurrence Schedule/linked carry lain dengan judul normalized yang sama sampai hari berganti.
- Exact source guard lama tetap dipertahankan; v125 menambahkan family guard khusus Schedule title agar copy legacy tidak bergiliran naik kembali setelah `Done`.
- Data Schedule historis tidak dihapus, tidak diubah status massal, dan tetap tersedia di Daily Schedule/Logbook history.
- Tidak mengubah role, RLS, Storage, Attendance, Leave Management, Management Report, atau database. Tidak membutuhkan SQL.

### 20 Agustus 2026 — v124 Stable Release — Final Stabilization

- Final Stabilization Audit dibatasi pada Critical/High dan bug fungsi nyata; temuan medium/cosmetic setelah release ini dicatat dan tidak otomatis memicu versi baru.
- Menutup direct browser INSERT ke `attendance`. Clock In normal sekarang memakai RPC `workboard_clock_in()` dengan waktu resmi database `Asia/Jakarta`, server-side status/late minutes, validasi user aktif/GPS range, alasan wajib untuk late Clock In, advisory lock, dan penolakan duplicate user/tanggal. Clock Out tetap memakai integrity trigger v107.
- Query Attendance hari ini mengambil row terbaru dan Management Report menduplikasi row attendance legacy per user/tanggal pada reading layer agar data historis dari era direct insert tidak menggandakan rekap.
- Memperketat output Team/Public yang masuk `innerHTML`: Schedule category memakai safe-list; Tracker/Recurring/Logbook/Notes/Attendance/Leave labels dan atribut terkait di-escape/safe-list agar nilai database yang dimanipulasi tidak berubah menjadi markup aktif.
- All Links memvalidasi URL manual/import dengan parser `URL` dan hanya menerima HTTP/HTTPS. Kartu membuka URL melalui `openStoredLink()` berdasarkan ID cache, bukan menyisipkan URL database ke inline `onclick`.
- Helper upload public legacy dibuat fail-closed; tidak ada lagi pemanggilan `getPublicUrl()` di `index.html`. Upload normal tetap memakai storage private yang sudah aktif sejak v103/v105/v110.
- Embedded Attendance recovery SQL disinkronkan dengan guard v124. SQL deployment terpisah: `WORKBOARD_V124_FINAL_STABILIZATION.sql`. Tidak ada fitur panel, role, privacy rule, Work Talk, Storage data, atau data user yang dihapus.

### 20 Agustus 2026 — v123 Logbook Smart Next-Step Privacy Sync

- Memperbaiki Smart next-step setelah menyimpan Logbook yang sebelumnya selalu membuat To Do `Waiting` / `Follow Up` dengan `is_private = true`, walaupun Logbook sumber adalah Team/Public.
- Handler suggestion sekarang meneruskan privacy Logbook sumber ke `createTaskFromLogSuggestion()`; Logbook Private tetap menghasilkan next-step Private, sedangkan Logbook Team/Public tetap menjadi work-state Team/Public agar dapat masuk reporting sesuai RLS.
- Tidak mengubah isi Logbook, ownership, Today, Management Report, RLS, role, Storage, Attendance, Leave Management, atau database schema. Tidak memerlukan SQL.

### 20 Agustus 2026 — v122 To Do Output Escaping Fix

- Memperbaiki renderer To Do pada Week table, No Date, dan Search/Filter flat list yang sebelumnya memasukkan `todos.text` langsung ke `innerHTML`.
- Task text sekarang di-escape dengan `escHtml()` sebelum dirender sehingga HTML/script-like text tetap tampil sebagai tulisan biasa dan tidak dapat mengubah struktur UI.
- Metadata bebas pada flat list (`assigned_to` dan `created_by`) ikut di-escape; due date juga dirender sebagai teks aman.
- Data yang disimpan user tidak diubah, tidak diterjemahkan, dan tidak dimigrasikan. Tidak mengubah privacy, ownership, RLS, Management Report, Today, role, Storage, Attendance, Leave Management, atau database. Tidak memerlukan SQL.

### 20 Agustus 2026 — v121 Brain Dump Promotion Fix

- Memperbaiki tombol `Today` dan `Follow Up` pada Brain Dump di panel Today yang sebelumnya memanggil fungsi `brainMoveToToday()` / `brainMoveToFollowUp()` yang tidak tersedia. Keduanya sekarang memakai `organizeBrainItem()` yang memang menjadi handler Brain Dump.
- Saat thought Brain Dump dipromosikan menjadi `Today`, `Follow Up`, atau `Waiting`, row `todos` yang sama sekarang mengubah `is_private` menjadi `false` agar benar-benar menjadi work-state Team/Company dan dapat masuk reporting sesuai RLS.
- Brain Dump yang belum dipromosikan tetap `is_private = true`; ownership `created_by` tidak berubah.
- Tidak mengubah To Do manual personal, Management Report, RLS, role, Storage, Attendance, Leave Management, atau database schema. Tidak memerlukan SQL.

### 20 Agustus 2026 — v120 To Do Edit Privacy Preservation

- Memperbaiki `addTodo()` yang sebelumnya selalu menyertakan `is_private = true` dan `created_by = getUser()` saat update; akibatnya work-state Public seperti Waiting / Follow Up / Carry dapat berubah menjadi Private hanya karena diedit dari panel To Do.
- Update To Do sekarang hanya menulis field yang memang dapat diedit (`text`, `priority`, `due_date`, `assigned_to`) sehingga privacy dan ownership row existing tetap utuh.
- To Do manual baru dari panel Personal tetap dibuat `is_private = true` dan owner user aktif.
- Nilai reset hidden privacy diselaraskan ke Private; tidak mengubah Today, Management Report, RLS, role, Storage, Attendance, Leave Management, atau database. Tidak memerlukan SQL.

### 20 Agustus 2026 — v119 After-Done Next-Step Privacy Sync

- Memperbaiki `Waiting Reply` dan `Follow Up Again` pada prompt setelah `Done` yang sebelumnya selalu membuat To Do baru sebagai `is_private = true`, walaupun source pekerjaan Team/Company.
- Next step sekarang mewarisi `is_private` dari source row untuk To Do, Schedule, dan Project Tracker; source Private tetap private, source Public tetap dapat dibaca Management sesuai RLS.
- Portfolio tetap menyimpan next action pada row Portfolio yang sama, sehingga privacy Portfolio tidak berubah.
- `Done Now` tanpa source row menggunakan visibility Team/Company agar konsisten dengan Quick Capture Today / Follow Up / Waiting dan Logbook unplanned yang memang menjadi aktivitas kerja.
- Brain Dump tetap private dan tidak berubah. Tidak ada perubahan SQL, RLS, role, Storage, Attendance, Leave Management, atau data lama.

### 20 Agustus 2026 — v118 Carry Completion Logbook Visibility Fix

- Memperbaiki completion item `Carry`/Tomorrow yang sebelumnya diberi tag Auto Logbook `carried-forward`; tag tersebut memang disembunyikan oleh Logbook binder sebagai legacy state-history sehingga pekerjaan yang benar-benar selesai dapat tidak terlihat.
- Completion Carry sekarang memakai tag `carry-resolved`, sehingga hasil kerja muncul normal di Logbook, `Completed Today`, dan reporting sebagai completed activity.
- Aksi `Tomorrow`/Carry Forward itu sendiri tetap tidak membuat Logbook; hanya saat item kemudian ditekan `Done` hasil aktual dicatat.
- Tidak mengubah data legacy, Schedule state, role, RLS, Storage, Attendance, Leave Management, atau database. Tidak memerlukan SQL.

### 20 Agustus 2026 — v117 Schedule State Reporting Sync

- Memperbaiki state Schedule Public `Waiting`, `Tomorrow/Carry`, dan `Cancelled` yang sebelumnya disimpan sebagai marker `todos` Private sehingga Management Report tidak dapat membaca perubahan state tersebut. Marker baru sekarang mewarisi `is_private` dari Schedule sumber; Schedule Private tetap private.
- Management Report membaca linked Schedule marker Public untuk menampilkan status `Waiting`, `Carry`, atau `Cancelled` pada Planned Activities dan untuk memasukkan Waiting/Carry ke attention section tanpa membuka data personal/private.
- Menyelesaikan linked Waiting/Carry Schedule marker dari Today/Follow Up/To Do sekarang ikut menyinkronkan source `schedule_events.category = green`; Auto Logbook memakai source key Schedule untuk mencegah duplicate completion log.
- Memperbaiki privacy Auto Logbook linked To Do agar mengikuti `todo.is_private`; private Schedule/To Do tidak lagi berisiko menghasilkan Logbook public hanya karena memiliki marker `[Waiting]`/`[Carry]`.
- Menambahkan one-time SQL `WORKBOARD_V117_SCHEDULE_STATE_SYNC.sql` untuk menyamakan privacy marker Schedule legacy dengan Schedule sumber dan menyinkronkan linked marker legacy yang sudah Done (Cancelled dikecualikan).
- Tidak mengubah role, RLS utama, Attendance, Leave Management, Storage, Work Talk, atau struktur tabel.

### 20 Agustus 2026 — v116 Planned Progress Accuracy Fix

- Memperbaiki indikator sidebar `Today's Planned Progress` agar benar-benar menghitung Schedule hari ini yang sudah Done dibanding seluruh Schedule hari ini.
- Logbook, termasuk aktivitas unplanned, tidak lagi dapat menaikkan persentase planned progress ketika Schedule belum selesai.
- Mengurangi query yang tidak perlu ke `logbook_entries` dari `updateDailyProgress()`; fungsi sekarang hanya membaca Schedule hari ini milik user aktif sesuai privacy filter.
- Tidak mengubah Today overview donut, Logbook, Schedule data, RLS, role, Storage, atau database. Tidak memerlukan SQL.

### 20 Agustus 2026 — v115 Work Talk Action Permission Fix

- Menyamakan kontrol aksi Work Talk dengan RLS: tombol `Delete permanently` untuk Department/DM channel hanya tampil bagi creator channel atau Owner.
- Menambahkan client guard pada permanent channel delete sehingga pemanggilan fungsi langsung oleh viewer lain tetap ditolak sebelum request database.
- Menambahkan defensive guard pada Edit/Delete message: user hanya dapat mengubah atau menghapus pesan yang `sender`-nya sama dengan user aktif; tampilan aksi pesan tetap owner-of-message only.
- Menerjemahkan sisa teks UI Work Talk yang masih Indonesia pada tombol Back, placeholder compose, dan tombol Start menjadi English.
- Tidak mengubah policy database, struktur tabel, DM participant visibility, hide/unhide `hidden_by`, attachment, realtime, role, atau data. Tidak memerlukan SQL.

### 20 Agustus 2026 — v114 Quick Links Recovery RLS Hardening

- Memperbaiki SQL recovery/setup yang tertanam pada banner `Quick Links` / `app_links` agar tidak lagi membuat policy `USING (true)` / `WITH CHECK (true)`.
- Recovery setup sekarang menutup akses `anon`, memberi hak tabel hanya kepada `authenticated`, memverifikasi helper Auth `workboard_is_active()`, lalu membangun policy SELECT/INSERT/UPDATE/DELETE untuk user WorkBoard aktif.
- Policy aktif database yang sudah dipasang lewat setup Auth/RLS sebelumnya tidak diubah oleh file ini; perubahan hanya mencegah setup baru atau recovery di masa depan kembali memakai policy permissive lama.
- Fungsi Quick Links, import CSV, filter, kategori, add/edit/delete, role, privacy, Storage, dan tabel lain tidak berubah. Tidak memerlukan SQL baru pada instalasi yang sudah aktif.

### 20 Agustus 2026 — v113 Management Personal Data Exclusion

- Menyamakan legacy Monthly Analytics pada Management Report dengan prinsip report utama: hanya data Team / Company (`is_private != true`) yang boleh masuk statistik perusahaan.
- Mengganti `applyPrivacy()` dengan `managementPublicRows()` untuk Schedule, Tracker, Project Tracker, Portfolio, Logbook, dan To Do di `renderResult()` agar row Private milik user yang sedang login tidak tercampur ke laporan.
- Menghapus query personal `notes` dari Management Report dan mengganti kartu `Notes Category Distribution` dengan penjelasan `Reporting Scope`; Notes, private To Do, Notepad, dan Password Manager tetap berada di area Personal saja.
- Tidak mengubah RLS, tabel, role, data sumber, atau panel Personal; tidak membutuhkan SQL baru.

### 20 Agustus 2026 — v112 Management Monthly Leave Deduplication

- Menyamakan Monthly Analytics & Attendance legacy di Management Report dengan helper `managementAttendanceWithApprovedLeave()` yang sudah dipakai report utama.
- Approved Leave / Sick / Time Off yang overlap pada user + tanggal yang sama sekarang hanya dihitung satu kali; real attendance row selalu menang dan tidak ditimpa virtual leave.
- Jika ada approved leave legacy yang overlap dengan tipe berbeda, request dengan `created_at` terbaru diprioritaskan secara deterministik.
- Rekap total dan tabel per employee memakai data gabungan yang sama; total jam kerja dan rata-rata keterlambatan tetap dihitung hanya dari Clock In/Clock Out nyata.
- Grafik kehadiran harian tetap membaca attendance nyata sehingga hari leave-only tidak salah digambar sebagai Present.
- Tidak mengubah database, RLS, role, Leave Management, Attendance clock-in/out, Storage, atau data lama. Tidak memerlukan SQL.

### 20 Agustus 2026 — v111 English UI & Help Accuracy

- Menerjemahkan sisa teks UI Indonesia yang masih terlihat pada To Do dashboard, Smart Focus explanation, Schedule week empty state, Notes category labels, Work Talk status/empty state, Attendance/Logbook/Notepad/Resources setup banners, Owner delete-user flow, online presence, dan tooltip Schedule chart menjadi English.
- To Do priority display sekarang `High / Medium / Low`; summary memakai `Month / Total Tasks / Completed / Not Completed / Completion Rate`, serta weekly cards memakai `Done / Open / Week`. Nilai database/internal key tidak diubah.
- FAQ `How do I log in?` tidak lagi menjelaskan login nama / Switch User lama; sekarang sesuai Supabase Auth dan `workboard_profiles`.
- FAQ mobile tidak lagi menyuruh swipe untuk melihat menu; sekarang menjelaskan bottom navigation `Today / Daily / Projects / More` dan `Report` yang role-based.
- Memperbarui komentar teknis Work Talk yang sebelumnya masih menyatakan DM hanya soft privacy; dokumentasi kode sekarang sesuai Supabase Auth + RLS participant rules.
- Tidak mengubah database, RLS, role, privacy rules, workflow, Storage, atau data lama. Tidak memerlukan SQL.

### 20 Agustus 2026 — v110 Legacy Attachment Privacy Bridge

- Attachment dan rich-text image historis yang dibuat sebelum v103/v105 tidak perlu dipindahkan secara fisik. Object lama tetap memakai nama/path di bucket `attachments`.
- UI mengenali URL Storage legacy `attachments` (public maupun signed) dan membukanya melalui authenticated `download()` atau signed URL, sehingga URL public lama tidak lagi diperlukan setelah bucket dibuat private.
- `WORKBOARD_STORAGE_V110_LEGACY_ATTACHMENT_PRIVACY.sql` menambahkan helper `workboard_can_read_legacy_attachment(object_name)` yang memverifikasi bahwa object benar-benar direferensikan oleh parent record yang boleh user lihat.
- Logbook/Portfolio mengikuti Team/Private visibility; Notes/Notepad hanya pemilik; Work Talk DM hanya participant channel.
- Policy restrictive mencegah broad Storage policy lama membuka bucket legacy melalui authenticated API dan menjadikan bucket legacy read-only dari browser WorkBoard.
- Rollout sengaja bertahap: aktifkan SQL bridge terlebih dahulu saat bucket masih public, deploy v110, baru ubah bucket `attachments` menjadi Private di Supabase Dashboard. Ini mencegah attachment lama putus selama transisi.
- Tidak mengubah byte object, attachment JSON lama, role, Leave Management, Attendance, atau data aplikasi.

### 20 Agustus 2026 — v109 Decision Matrix Source Privacy Fix

- Decision Matrix tidak lagi memfilter `time_plan_tracker` dengan `applyOwner()`; sumber Tracker sekarang memakai `applyPrivacy()` agar item Team / Company public yang memang terlihat di Tracker/Kanban/Gantt juga terlihat konsisten di Matrix.
- To Do di Matrix tetap memakai `applyOwner()`, sehingga To Do tetap personal dan tidak membuka To Do user lain.
- Tracker private user lain tetap disembunyikan oleh `applyPrivacy()`.
- Tracker public milik user lain tampil sebagai `Read only`; tombol Urgent/Important tidak dirender untuk row yang tidak boleh dimodifikasi. Creator dan Owner tetap mendapat kontrol sesuai helper permission/RLS v106.
- `toggleMatrixFlag()` sekarang memverifikasi row dari `matrixCache` dan menjalankan guard permission sebelum update Tracker, sehingga manipulasi tombol/client UI tidak melewati aturan mutasi.
- Tidak ada perubahan database, RLS, role, Storage, Leave Management, atau data lama. Tidak memerlukan SQL.

### 20 Agustus 2026 — v108 Approved Leave Display Hardening

- Today Attendance dan panel Attendance tidak lagi menjalankan `.maybeSingle()` langsung pada semua approved leave yang overlap tanggal aktif; query sekarang mengurutkan `created_at` terbaru dan membatasi hasil ke satu row sebelum `.maybeSingle()`.
- Jika ada lebih dari satu approved Leave/Sick/Time Off yang overlap pada tanggal sama, UI memakai record approved terbaru dan tidak jatuh ke error multi-row PostgREST.
- Alasan leave serta tanggal periode pada panel Attendance di-escape sebelum dimasukkan ke `innerHTML`, menutup jalur markup/script dari isi alasan leave.
- Label `Keterangan` pada blok yang disentuh diubah menjadi `Reason` agar konsisten dengan aturan UI English.
- Tidak ada perubahan database, RLS, role, Leave Management workflow, Storage, atau data lama. Tidak memerlukan SQL.

### 20 Agustus 2026 — v107 Attendance Clock-Out Integrity Guard

- Menambahkan trigger database `workboard_guard_attendance_update()` sebagai defense-in-depth untuk tabel `attendance`.
- Staff/Management non-Owner hanya dapat menyelesaikan Clock Out pada row miliknya sendiri yang belum memiliki `clock_out`; field `user_name`, tanggal, Clock In, status, menit terlambat, GPS/foto masuk, keterangan, dan `created_at` tidak boleh ditulis ulang melalui direct client call.
- Timestamp Clock Out resmi ditetapkan dengan `clock_timestamp()` dari database; browser tidak menjadi sumber waktu resmi.
- Latitude/longitude Clock Out divalidasi dalam rentang koordinat yang valid.
- Owner tetap melewati guard ini agar capability administratif/rename legacy yang sudah ada tidak rusak; policy RLS lama tetap dipertahankan.
- UI Clock Out diperketat dengan filter `id + user_name + clock_out IS NULL` dan memverifikasi bahwa benar-benar ada row yang berhasil diperbarui.
- Embedded Attendance setup SQL di `index.html` ikut membawa trigger v107 agar recovery/setup baru tidak kembali ke policy tanpa integrity guard.
- Membutuhkan SQL `WORKBOARD_AUTH_V107_ATTENDANCE_UPDATE_INTEGRITY.sql`. Tidak mengubah Leave Management, Users & Access, role, Storage, atau data attendance lama.

### 20 Agustus 2026 — v106 Shared Record Action Permission Fix

- Menyamakan tombol/action UI dengan hak modifikasi RLS pada tabel kerja Team / Company: creator dapat mengubah row miliknya; Owner dapat mengelola row Public user lain; Staff/Management lain melihat row tersebut sebagai `Read only`.
- Schedule: Edit/Delete/Done/Waiting/Tomorrow disembunyikan untuk row yang tidak dapat dimodifikasi, dan fungsi mutasi memiliki guard yang sama.
- Logbook: Writing Assistant/Edit/Delete hanya muncul untuk row yang dapat dimodifikasi; guard dijalankan sebelum upload attachment agar request tidak sah tidak meninggalkan object Storage.
- Portfolio: action utama, Edit Full Record, Delete, Follow Up/Waiting/Tomorrow/Done mengikuti helper permission yang sama.
- Project Tracker dan Kanban: Start/Done/Waiting/Today/Edit/Delete/status dropdown mengikuti permission row. `Add Update` tetap tersedia pada project Public karena membuat Logbook milik user aktif dan tidak mengubah source project.
- Recurring Task: toggle Active, Edit, Delete, serta generator otomatis hanya memproses template yang boleh dimodifikasi user aktif sehingga Staff/Management tidak mencoba menulis template public milik user lain.
- Saat Owner mengedit row Public user lain pada Schedule, Logbook, atau Recurring Task, `created_by` asli dipertahankan; field Privacy dikunci tetap Public agar sesuai RLS dan ownership tidak berpindah diam-diam. Portfolio/Project Tracker juga mengunci perubahan privacy untuk row Public milik user lain.
- Tidak mengubah role, Users & Access, Leave Management, Storage policy, atau database schema. Tidak membutuhkan SQL baru.

### 20 Agustus 2026 — v105 Private Rich Text Images

- Gambar baru yang diinsert melalui toolbar, paste screenshot, atau drag-and-drop pada Logbook, Notes, dan Notepad tidak lagi diunggah ke bucket public `attachments`.
- Rich-text image baru memakai bucket private `workboard-private` dengan path yang mengandung resource, record UUID, dan Auth UID: `logbook/<record>/<uid>/...`, `notes/<record>/<uid>/...`, atau `notepad/<record>/<uid>/...`.
- Record UUID untuk form baru dibuat di browser sebelum upload, disimpan bersama draft lokal, dan dipakai kembali saat row pertama kali disimpan, sehingga refresh/draft recovery tetap mengikat object ke parent record yang benar.
- Preview gambar memakai signed URL 5 menit. Saat Logbook / Notes / Notepad / editor dibuka kembali, WorkBoard membaca path dari signed URL lama dan membuat signed URL baru sehingga gambar tidak hilang hanya karena token lama expired.
- Storage policy v105 menambahkan Notes dan Notepad, serta memberi uploader akses ke object miliknya sendiri sebelum parent row pertama kali tersimpan. Setelah tersimpan, akses user lain tetap mengikuti visibility record/channel.
- Gambar rich-text legacy yang sudah terlanjur memakai public URL tetap ditampilkan seperti sebelumnya dan belum dimigrasikan atau dihapus otomatis.
- Membutuhkan SQL `WORKBOARD_STORAGE_V105_PRIVATE_EDITOR_IMAGES.sql`. Role, Users & Access, Leave Management, tabel aplikasi, attachment v104, dan data lama tidak diubah.

### 20 Agustus 2026 — v104 Attachment Display & Open Fix

- Memperbaiki attachment Logbook secure yang tersimpan tetapi tidak tampil konsisten sebagai bagian dari activity card.
- Logbook sekarang menampilkan bagian `Attachments` di dalam setiap activity card; file tidak lagi tampak terlepas di bawah halaman binder.
- Secure attachment dirender sebagai link interaktif dengan pointer state yang jelas dan authenticated blob download melalui sesi Supabase yang aktif.
- Saat file diambil, label berubah menjadi `Downloading...`; kegagalan download menampilkan error yang eksplisit.
- Tag Logbook sekarang di-escape sebelum masuk ke `innerHTML` untuk mencegah markup tag merusak struktur activity card.
- Helper attachment yang sama tetap dipakai Portfolio dan Work Talk sehingga secure file tetap kompatibel; attachment legacy `{name,url}` tidak diubah.
- Storage bucket, Storage RLS v103, role, Users & Access, Leave Management, dan database schema tidak diubah. Tidak membutuhkan SQL baru.

### 20 Agustus 2026 — v103 Authenticated Private File Attachments

- File attachment baru pada Logbook, Portfolio, dan Work Talk tidak lagi dibuat sebagai public URL.
- WorkBoard menyimpan attachment baru sebagai metadata `bucket` + `path` di bucket private `workboard-private`, lalu mengunduhnya melalui Supabase Storage client dengan sesi Auth aktif.
- Path Logbook dan Portfolio membawa `record_id` sehingga policy Storage mengevaluasi visibility record saat file dibuka: Team/Company mengikuti akses record, Private hanya creator.
- Path Work Talk membawa `channel_id` + `message_id`; policy Storage mengikuti visibility channel dan membatasi DM hanya kepada participant.
- Record baru Logbook, Portfolio, dan Chat message sekarang membuat UUID di browser sebelum upload sehingga attachment dapat dikaitkan ke record/channel tanpa public URL.
- Attachment legacy yang masih berbentuk `{name,url,...}` tetap kompatibel dan masih dibuka melalui URL lama; v103 tidak memindahkan atau menghapus file historis secara otomatis.
- Embedded images dari Rich Text Editor sengaja belum dipindahkan pada patch ini karena URL gambar tersimpan di HTML body dan memerlukan migrasi terpisah agar tidak merusak Notes/Notepad/Logbook lama.
- Membutuhkan bucket private `workboard-private` dan SQL `WORKBOARD_STORAGE_V103_PRIVATE_ATTACHMENTS.sql`; role, Users & Access, Leave Management, dan tabel data aplikasi tidak diubah.

### 20 Agustus 2026 — v102 Management Approved Leave Reporting

- Management Report utama sekarang mengambil `leave_requests` berstatus `approved` dengan kondisi overlap **AND** terhadap range Daily / Weekly / Monthly.
- Approved Leave / Sick / Time Off diubah menjadi virtual attendance row per tanggal hanya pada reading layer report; tidak membuat atau mengubah record di tabel `attendance`.
- Jika user sudah memiliki attendance row pada tanggal yang sama, approved leave tidak ditambahkan lagi sehingga tidak terjadi double-count.
- Daily report untuk satu employee sekarang menampilkan status Approved Leave / Sick / Time Off secara langsung, bukan `no attendance record`.
- Weekly/Monthly attendance summary ikut menghitung total hari approved Leave / Sick / Time Off.
- Tidak mengubah Leave Management, role, Users & Access, Attendance clock-in/out, atau RLS/database.
- Tidak memerlukan SQL baru.

### 20 Agustus 2026 — v101 Safe Attendance Setup SQL

- Mengganti SQL setup Attendance/Leave legacy di dalam `index.html` yang sebelumnya memakai policy permisif `USING (true)` / `WITH CHECK (true)`.
- Setup embedded sekarang mensyaratkan WorkBoard Auth helpers v91+, menolak akses `anon`, dan membuat ulang policy berbasis `workboard_is_active()`, `workboard_my_name()`, `workboard_can_manage()`, serta `workboard_is_owner()`.
- Policy Leave INSERT pada setup embedded mengikuti hardening v99: request harus milik user aktif, `pending`, `catatan_admin` null, tipe hanya Leave/Sick/Time Off (`izin/sakit/cuti`), dan rentang tanggal valid.
- Leave UPDATE langsung tetap Owner-only; Management tetap mengubah status melalui RPC `workboard_manage_leave_status()`.
- Pesan setup Attendance yang terkait diterjemahkan ke English.
- Tidak mengubah role, Users & Access, navigasi, atau alur Attendance yang sedang berjalan.
- Tidak ada SQL baru yang perlu dijalankan pada database yang sudah memakai Auth/RLS v99; perubahan ini mengamankan SQL setup yang tertanam untuk penggunaan/recovery di masa depan.

### 20 Agustus 2026 — v100 Schedule Output Escaping Fix

- Menutup Stored XSS pada Daily Schedule dengan meng-escape output user sebelum dimasukkan ke `innerHTML`.
- `title` Schedule di grid utama sekarang dirender melalui `escHtml()`.
- `location` dan `created_by` pada kartu Schedule sekarang dirender melalui `escHtml()`.
- `title` pada `Week at a Glance` juga dirender melalui `escHtml()`.
- Tidak mengubah penyimpanan data, role, privasi, action Schedule, mobile navigation, atau tabel/database.
- Tidak memerlukan SQL atau migrasi database baru.

### 20 Agustus 2026 — v99 Approved Leave Integrity Fix

- Today Attendance hanya menganggap `leave_requests` berstatus `approved` sebagai Leave/Sick/Time Off aktif.
- Panel Attendance hanya menampilkan leave aktif jika request sudah `approved`; Pending/Rejected tidak menggantikan status clock-in.
- Attendance Summary hanya membuat virtual leave rows dari request `approved`.
- Management Report bulanan memakai kondisi overlap **AND** (`dari_tanggal <= lastDay` dan `sampai_tanggal >= firstDay`) serta hanya menghitung request `approved`.
- Policy INSERT `leave_requests` diperketat melalui `WORKBOARD_AUTH_V99_LEAVE_INTEGRITY.sql`: request self-service harus milik user aktif sendiri, selalu `pending`, `catatan_admin` null, dan `tipe` hanya `izin` / `sakit` / `cuti`.
- Tidak mengubah role, akses Leave Management, `Users & Access`, izin Delete, atau fitur lain.

### 19 Agustus 2026 — v98 Management Leave Approval Access

- Memindahkan akses `Leave Management` ke area HR agar tidak lagi terlihat sebagai Owner-only user control.
- Owner dan Management dapat membuka Leave Management, melihat request Leave/Sick/Time Off, serta melakukan `Approve`, `Reject`, dan `Reset`.
- `Users & Access` tetap sepenuhnya Owner-only; Management tidak dapat mengubah role atau status aktif user.
- Tombol Delete leave request tetap hanya muncul dan bekerja untuk Owner.
- Desktop menampilkan `HR → Leave Management`; mobile menampilkan `Leave Management` di `More → Work` hanya untuk Owner/Management.
- Update status memakai RPC `workboard_manage_leave_status()` yang memvalidasi role server-side dan hanya mengubah `status`/`catatan_admin`, sehingga Management tidak diberi UPDATE luas ke seluruh kolom `leave_requests`.
- Membutuhkan SQL kecil `WORKBOARD_AUTH_V98_LEAVE_MANAGEMENT.sql` setelah RLS v91 aktif.
- FAQ dan label UI terkait diperbarui menjadi Management/Owner review; tidak ada data leave lama yang dihapus.

### 19 Agustus 2026 — v97 Mobile More Navigation Fix

- Memperbaiki bottom navigation mobile yang berisi 5 tombol tetapi masih dirender dalam grid 4 kolom dengan `overflow:hidden`, sehingga tombol kelima `More` terpotong di HP Owner/Management.
- Bottom navigation sekarang memakai slot flex yang membagi lebar otomatis: Owner/Management melihat `Today`, `Daily`, `Projects`, `Report`, `More`; Staff tetap mendapat 4 tombol karena `Report` disembunyikan.
- `More` kembali selalu dapat dibuka untuk mengakses Notes, To Do, Notepad, Work Talk, Attendance, Resources, Password Manager, Help, dan Owner Controls sesuai role.
- Tidak mengubah data, tabel, panel, hak akses, fungsi Notes/To Do/Notepad, atau navigasi desktop.
- Tidak memerlukan SQL atau migrasi database.

### 19 Agustus 2026 — v96 Today Done Guard + Portfolio Total

- Memperbaiki antrean Today agar action yang baru `Done` tidak muncul kembali akibat stale/racing refresh: source marker Auto Logbook hari ini dipakai sebagai guard tambahan terhadap status source.
- Portfolio action yang baru selesai tidak langsung berubah menjadi reminder `Set Next Action` pada hari yang sama; jika tetap belum memiliki next action, reminder dapat muncul lagi pada hari berikutnya.
- Menambahkan collapse untuk exact duplicate pada antrean aktif dari source type yang sama tanpa menggabungkan atau menghapus data database. Schedule dengan waktu berbeda tetap dipertahankan sebagai aktivitas berbeda.
- Mengembalikan batas ADHD-friendly `Up Next` menjadi maksimal 2 item.
- Menambahkan kartu `Total Entries` pada ringkasan Portfolio, sehingga urutan ringkasan menjadi Total Entries, Needs Action, Waiting, Upcoming, Active, dan Won / Approved.
- Grid ringkasan Portfolio disesuaikan menjadi 6 kolom pada desktop dan tetap responsif menjadi 2 kolom pada layar lebih kecil.
- Tidak ada SQL atau migrasi database baru; desktop dan mobile memakai render/function yang sama.

### 19 Agustus 2026 — v95 Daily Logbook Binder

- Mengubah **presentation layer** Logbook menjadi satu halaman binder per tanggal. Semua completed activities pada tanggal yang sama tampil bersama dalam satu daily page.
- Record `logbook_entries` **tidak digabung di database**. Setiap aktivitas tetap terpisah agar integrasi Today, Management Report, source marker/dedup, Tracker, attachment, edit/delete, export, dan audit history tetap aman.
- Index kiri sekarang berisi tanggal + jumlah aktivitas + ringkasan tipe, bukan satu judul per record.
- Daily page kanan menampilkan seluruh activity cards untuk tanggal aktif; tiap activity tetap punya type, waktu log, body/auto summary, tags, attachments, Gemini, Edit, dan Delete.
- Search dan binder tabs tetap memfilter record terlebih dahulu, lalu hasil yang lolos dikelompokkan per tanggal.
- Mobile memakai grouping yang sama; index tanggal menjadi bagian atas dan halaman harian berada di bawah.
- Tidak memerlukan SQL baru dan tidak menghapus data lama.

### 19 Agustus 2026 — v94 Logbook Actual-Work Cleanup

- Memperbaiki polusi Logbook yang terlihat setelah integrasi Today: Waiting, Carry Forward, dan Cancelled tidak lagi membuat Auto Logbook baru karena ketiganya adalah state kerja, bukan completed activity.
- `Done` / `Done Now` tetap otomatis masuk Logbook tanpa input ulang.
- Menambahkan source marker + duplicate guard pada Auto Logbook agar action source yang sama tidak tersimpan dua kali akibat double click / repeated render.
- Binder Logbook menyembunyikan legacy auto state-history (`waiting`, `carried-forward`, `cancelled`) dan mengkolaps exact duplicate auto records hanya pada layer tampilan; database lama tidak dihapus.
- Legacy Auto Logbook completed yang dulu tersimpan sebagai `Note` ditampilkan sebagai `Report`; manual Notes tetap utuh.
- Auto Logbook completed yang tidak memiliki body sekarang menampilkan ringkasan kecil `Logged automatically from WorkBoard` agar halaman detail tidak terlihat seperti catatan kosong.
- Perubahan diterapkan pada desktop dan mobile melalui source flow/render yang sama dan tidak membutuhkan SQL baru.

### 19 Agustus 2026 — v93 Report Employee Cleanup

- Membersihkan dropdown `Employee` pada Management Report agar hanya menampilkan akun WorkBoard aktif dari `workboard_profiles`, bukan nama legacy/test yang pernah tersimpan di Schedule, Logbook, Attendance, Chat, atau tabel lama.
- Menambahkan RPC aman `workboard_report_employees()` yang hanya mengembalikan nama aktif; Owner/Management dapat melihat daftar nama untuk report tanpa membuka email profile.
- Filter employee dibuat case-insensitive sehingga data legacy seperti `andri` tetap dapat dibaca saat profile aktif bernama `Andri`.
- `All Team` tetap mempertahankan data historis perusahaan; perubahan hanya membersihkan pilihan employee dan tidak menghapus data lama.
- Standar file GitHub dikunci menjadi hanya `index.html` dan `PROMPT_MASTER_WORKBOARD_AMS.md`; nomor versi/changelog disimpan di dalam file, bukan nama file.
- Perubahan berlaku pada Management Report desktop dan mobile karena keduanya memakai sumber opsi/filter yang sama.
- Membutuhkan satu SQL kecil `WORKBOARD_AUTH_V93_REPORT_EMPLOYEE_NAMES.sql` setelah RLS v91 aktif.

### 19 Agustus 2026 — v92 Management Report Dedup

- Merapikan Management Report agar satu pekerjaan tidak muncul berulang di beberapa bagian hanya karena sumber datanya berasal dari Schedule, Logbook, Waiting state, atau Portfolio.
- Mengkolaps exact duplicate `Completed Results` pada layer report tanpa menghapus data Logbook lama. Contoh dua record identik pada hari/user/body yang sama hanya dibaca sebagai satu hasil oleh report.
- Exact duplicate Schedule juga dikolaps; Schedule dengan judul sama tetapi waktu/lokasi berbeda tetap dianggap aktivitas terpisah.
- Action yang selesai lalu masuk Waiting digabung menjadi satu card `Done → Waiting` di Completed, bukan diulang lagi di Waiting.
- Waiting untuk periode yang mencakup hari ini menggunakan current state; waiting history Logbook tidak dicampur ke daftar current attention.
- Portfolio Waiting tidak diulang lagi di Project Status; Project Status hanya berisi opportunity aktif non-waiting.
- Perubahan hanya pada layer Management Report desktop/mobile dan helper dedupe; tidak ada data database yang dihapus dan tidak membutuhkan SQL baru.

### 19 Agustus 2026 — v91 Authentication & Roles

- Mengganti prompt nama bebas/localStorage sebagai login dengan Supabase Auth.
- Menambahkan Sign In Email/Password, Create Account, email verification flow, Forgot Password, Continue/Register with Google, dan onboarding OAuth responsif desktop/mobile.
- Role resmi menjadi `Owner`, `Management`, `Staff`; tidak ada lagi rule admin/boss/hrd berdasarkan nama.
- Registrasi mandiri hanya Staff/Management. Owner dicadangkan untuk Ratu dan tidak muncul di pilihan registrasi.
- Menambahkan `workboard_profiles`, role helper/RPC, Users & Access Owner-only, role edit Staff↔Management, dan Active/Inactive.
- Management masuk langsung ke Management Report; Owner/Staff masuk ke Today. Tombol Report hanya Owner/Management dan Owner Controls hanya Owner pada desktop/mobile.
- Menambahkan RLS untuk tabel WorkBoard utama serta mencabut akses `anon` pada tabel yang dimigrasikan. Data Team / Company tetap mengikuti pola shared; private personal tetap dibatasi pemilik.
- Sign Out menggantikan Switch User; nama profile tidak diedit bebas agar ownership key data legacy tidak pecah.
- Work Talk hide/unhide dipertahankan dengan hak UPDATE terbatas pada field `hidden_by`.
- Mempertahankan seluruh ID/fungsi legacy dan perubahan v90 Management Report; tidak ada ID/fungsi v89/v90 yang dihapus.
- Perubahan memakai migrasi bertahap `WORKBOARD_AUTH_V91_STEP1_SETUP.sql` → upload/test v91 → `WORKBOARD_AUTH_V91_STEP3_RLS.sql`; Google provider/redirect URL dikonfigurasi jika Google Login akan digunakan.

### 19 Agustus 2026 — v90 Management Report

- Mengangkat `Management Report` menjadi menu utama desktop dan tombol `Report` mobile.
- Menambahkan Daily / Weekly / Monthly + employee / All Team, ringkasan Planned/Completed/Waiting/Carry Forward/Attendance/Project, dan menyimpan analytics lama dalam bagian expandable.
- Quick Capture kerja menjadi Team / Company, Brain Dump tetap private; carry-forward dicatat di Logbook; recurring tracker mengisi due date; status `in_progress` analytics diperbaiki.

### 19 Agustus 2026 — Integrated Today v89 Bugfix

- Memperbaiki tombol `Waiting` pada Portfolio/Project action. Date picker sekarang dipindahkan ke level global saat dibuka sehingga tetap terlihat walaupun panel Today sedang tersembunyi.
- Waiting Portfolio sekarang memiliki tombol `Needs Action Today` dan `Change Review Date`; `Needs Action Today` membuat follow-up jatuh tempo hari ini sehingga item otomatis muncul di view Needs Action dan Today.
- Setelah Portfolio Next Action di-Done, pilihan `Waiting Reply` / `Follow Up Again` tetap memperbarui Portfolio yang sama, bukan membuat To Do terpisah yang kehilangan konteks project.
- Reminder lama dari Smart Logbook dengan judul generik `Daily Activity Report`, `Daily Report`, atau `Activity Report` tidak lagi memenuhi Today. Data lama tidak dihapus; reminder tersebut disembunyikan dari fokus dan tetap tersedia di To Do untuk review.
- Smart Next-Step Logbook tidak lagi menawarkan follow-up untuk judul report generik dan tidak memunculkan suggestion baru hanya karena user mengedit Logbook lama.
- Menghilangkan duplikasi item Follow Up antara One Thing Now, Up Next, dan Follow-ups Due.
- Memperbaiki perhitungan Planned vs Planned Done agar jumlah Planned tidak turun ketika Schedule selesai.
- Label Today sekarang memprioritaskan state (`Follow Up`, `Waiting`, `Carry Forward`) agar user lebih cepat memahami alasan suatu item muncul.
- Tidak ada SQL atau migrasi database baru; tidak ada ID atau fungsi lama yang dihapus.

### 19 Agustus 2026 — Integrated Today v88

- Mengubah panel awal `Capture` menjadi `Today` pada desktop dan mobile tanpa menghapus jalur data lama.
- Today sekarang menggabungkan Schedule, To Do/Follow Up/Waiting, Project Tracker, Portfolio Next Action, Completed Logbook, Attendance, dan Work Alarm.
- Menambahkan One Thing Now, Up Next, Follow Up Due, Waiting, Brain Dump, Completed Today, dan donut planned-vs-completed dalam tampilan yang lebih tenang.
- Menambahkan `Done Now` untuk pekerjaan mendadak/unplanned.
- Aksi `Done` sekarang otomatis membuat Logbook dari To Do, Schedule, Tracker, atau Portfolio Next Action.
- Menambahkan Waiting, Tomorrow/Carry Forward, Later 30m, Cancel, serta pilihan next step setelah Done.
- Schedule form disederhanakan menjadi waktu + aktivitas; field lain dipindahkan ke More Details. Category hijau tidak lagi menjadi pilihan status user dan hanya dipertahankan sebagai legacy compatibility.
- Portfolio diubah menjadi action-first dengan Needs Action sebagai default, serta Waiting, Upcoming, dan All Opportunities. Form utama Portfolio dipangkas; field lengkap tetap tersedia di More Details.
- Menambahkan guard agar Schedule legacy lebih dari 7 hari tidak membanjiri Today dan hanya satu reminder Portfolio tanpa Next Action ditampilkan di Today pada satu waktu.
- Attendance diberi kartu status ringkas pada Today; Clock In/Out dari Today kembali ke Today setelah proses selesai.
- Work Alarm menyimpan fase/snooze dan mengecek ulang saat tab kembali aktif agar tidak mudah reset akibat refresh/minimize.
- Result bagian atas diubah menjadi ringkasan kerja yang lebih mudah dibaca boss tanpa menghapus grafik laporan lama.
- Menghapus blok bulk-import Password Vault plaintext dari HTML; Password Manager terenkripsi dan fungsi Attendance/Work Talk/online presence lama tetap dipertahankan.
- Tidak ada SQL atau migrasi database baru.

### 16 Agustus 2026

- Memperbaiki `Loss / Stop Reason`: field tidak lagi disabled saat Outcome masih Pending dan sekarang dapat dipilih dari suggestion list atau diketik bebas sebagai alasan custom.
- Menjaga kompatibilitas alasan lama berbentuk code (`price_high`, `lost_competitor`, dan seterusnya) sambil mengizinkan alasan teks custom.
- Memperbaiki parser nilai Portfolio agar hanya membaca nominal pertama. Teks seperti `Rp327.166.950 incl. PPN 11%` tidak lagi berubah menjadi `32716695011`.
- Menambahkan normalisasi tampilan empat field nilai IDR pada blur agar angka tampil dengan pemisah ribuan Indonesia.
- Perubahan ini tidak membutuhkan SQL baru dan tidak mengubah tabel/database Portfolio.
- RLS/Supabase Auth tetap ditunda sesuai keputusan user saat ini.

### 15 Agustus 2026

- Menyempurnakan Portfolio agar memisahkan **Current Stage** dari **Outcome**. Istilah `Continue` dihapus dari UI karena ambigu; status default peluang yang belum diputuskan sekarang `Pending / Not Decided Yet`.
- Outcome baru: Pending, Won/Approved, Lost, Cancelled by Customer, dan Not Pursued by AMS. Legacy `decision` tetap disimpan secara otomatis untuk kompatibilitas versi lama.
- Menambahkan Loss / Stop Reason terstruktur, termasuk `Price too high / not competitive` untuk kasus kalah karena harga.
- Menambahkan Customer PIC, PIC Contact, Next Action, dan Follow-up Date.
- Menambahkan pemisahan nilai: Estimated Opportunity, AMS Quotation, Vendor / Cost Reference, dan Final PO / Order Value agar harga vendor tidak salah dibaca sebagai harga penawaran AMS.
- Mengubah ringkasan menjadi Total Entries, Active Pipeline, Won/Approved, Lost/Closed, dan Follow-ups Due.
- Menambahkan filter Source dan memperluas pencarian Portfolio ke field baru.
- Memperbaiki bug attachment Portfolio yang sebelumnya dirender dua kali pada kartu.
- Setup SQL Portfolio sekarang diberi **security hold**; banner tidak lagi menyuruh user langsung menjalankan tabel tanpa keputusan keamanan, karena WorkBoard masih belum memakai Supabase Auth/RLS.
- Menambahkan tab `Portfolio` di Projects Workspace untuk mencatat seluruh Project, BOQ, dan Order yang masuk ke AMS.
- Menambahkan field tanggal masuk, jenis entry, nama project/order, customer/requester, sumber order, detail sumber, partner/vendor, nomor referensi, keputusan lanjut/tidak, current stage, notes, nilai opsional, visibility, dan attachments.
- Menambahkan sumber order terstruktur untuk PaDi UMKM, perusahaan langsung, individual/referral, tender/procurement, website, marketplace, exhibition/event, dan other.
- Implementasi awal memakai `Under Review`, `Continue`, `Hold`, dan `Not Proceed`; pada index(86) model ini disempurnakan menjadi Stage + Outcome agar peluang yang belum diputuskan tidak salah dianggap approved.
- Menambahkan dashboard ringkas, filter Type/Decision/Stage, full-text search bebas, highlight hasil search, serta kartu responsif desktop/mobile.
- Menambahkan upload lampiran Portfolio memakai bucket `attachments` dan validasi file WorkBoard yang sudah ada, maksimal 20 MB per file.
- Menambahkan Add/Edit/Delete, export Excel panel Portfolio, PDF/PNG capture melalui sistem export lama, dan penyertaan `projectPortfolio` pada JSON Backup.
- Menambahkan kompatibilitas rename user dan user discovery tanpa menghapus Portfolio saat admin menghapus akun karena Portfolio dianggap riwayat perusahaan.
- Menambahkan FAQ Portfolio dan setup banner dengan tombol Copy Setup SQL.
- Menambahkan tabel baru `project_portfolio`; schema tersedia tetapi eksekusi SQL sekarang ditahan sampai keamanan akses database diputuskan. Perubahan tidak mengubah `time_plan_tracker`, Tracker, Kanban, Gantt, Matrix, Recurring, Capture, atau panel lama.

### 3 Agustus 2026

- Menambahkan penanda visual hasil pencarian: setiap kata yang cocok ditampilkan bold dengan highlight kuning lembut langsung pada judul, isi catatan, tabel, kartu, rich text, URL, dan metadata yang terlihat.
- Highlight mengikuti kata yang diketik, mendukung beberapa kata sekaligus, dan otomatis hilang saat kolom search dibersihkan.
- Highlight diterapkan pada search lokal/global serta finder bawaan Project Tracker, Notepad, dan Password Manager; nilai password tetap dikecualikan dari highlight dan pencarian.
- Mesin highlight hanya membungkus text node pada hasil yang terlihat dan tidak mengubah isi database, HTML tersimpan, input form, editor aktif, atau data user.
- Menambahkan Local Search Engine di dalam setiap panel data utama, bukan hanya search pada top bar.
- Search lokal baru tersedia pada Daily Schedule, Kanban, Gantt, Decision Matrix, Recurring Task, Logbook, Notes, To Do, Work Talk, Result, Attendance, Manage Users, Leave Management, Resources, serta Guide & FAQ.
- Project Tracker, Notepad, dan Password Manager mempertahankan finder lokal yang sudah tersedia agar tidak muncul kolom pencarian ganda.
- Search berjalan langsung saat mengetik, memiliki tombol Clear, penghitung hasil, shortcut `/`, dukungan desktop/mobile, serta pencarian yang tidak sensitif terhadap huruf besar dan aksen.
- Search hanya memproses data yang sudah dimuat setelah filter `applyPrivacy()` atau `applyOwner()` sehingga tidak membuka data privat milik pengguna lain.
- Search tidak mengubah, menghapus, atau menulis data ke Supabase dan tidak memerlukan SQL.
- Search global pada top bar tetap dipertahankan dan disinkronkan dengan search lokal pada panel yang sudah memakai konfigurasi global lama.
- Mesin pencarian memakai full-text bebas: kata atau frasa dapat ditemukan dari seluruh field aman pada record, termasuk isi rich text yang disimpan sebagai HTML, tag, kategori, tanggal, status, PIC, URL, serta nama lampiran.
- Pencarian tidak hanya mencocokkan kalimat utuh; beberapa kata yang diketik akan dicari sebagai kumpulan kata sehingga tetap ditemukan walaupun berada di field atau bagian paragraf yang berbeda.
- Logbook memuat hingga 1.000 entri terbaru untuk pencarian agar catatan lama tidak terlewat karena batas 50 entri sebelumnya.
- Pemilihan hasil pada binder Logbook, Notes, dan Notepad mempertahankan daftar hasil pencarian dan tidak kembali ke seluruh data.
- Password Manager hanya mencari metadata aman seperti account, company, category, username, website, dan notes; password serta data enkripsi tidak pernah dimasukkan ke indeks pencarian.


### 31 Juli 2026

- Membandingkan `index(67).html` dan `index(68).html`; keduanya tidak identik secara keseluruhan, tetapi blok editor Logbook, Notes, dan Notepad identik.
- Menjadikan `index(68).html` sebagai dasar agar perubahan proyek terbaru tidak kembali ke versi sebelumnya.
- Menyamakan struktur visual, lebar, dan tinggi area penulisan Logbook, Notes, dan Notepad.
- Memperluas toolbar editor dengan heading, ukuran teks, delapan pilihan font, warna, highlight, indent, blockquote, code block, table, divider, image upload/paste/drop, undo, redo, full-screen, dan clear formatting.
- Menambahkan paste cleaner agar salinan dari ChatGPT, Word, email, atau web lebih stabil dan tidak membawa layout asing.
- Mempertahankan nomor ordered list yang dimulai di atas angka 1.
- Menambahkan tabel yang dapat dibuat atau dipaste dan selnya dapat diedit langsung.
- Menambahkan upload/paste/drag-and-drop gambar ke bucket Storage `attachments`, batas 8 MB.
- Menambahkan sanitasi rich HTML saat save dan render serta word/character count.
- Mengubah teks UI yang disentuh menjadi English.
- Tidak ada SQL atau migrasi database baru.

### 1 Agustus 2026

- Menambahkan dukungan resmi lampiran PowerPoint `.ppt` dan `.pptx` pada Logbook dan Work Talk.
- File picker sekarang mengenali ekstensi serta MIME type Microsoft PowerPoint sehingga file presentasi muncul di folder pemilihan.
- Menambahkan validasi jenis file dan batas ukuran 20 MB per file sebelum lampiran dimasukkan ke antrean upload.
- Menambahkan ikon presentasi serta ukuran file pada preview lampiran Work Talk.
- Penyimpanan tetap memakai bucket Supabase Storage `attachments`; tidak memerlukan SQL atau preview slide di dalam WorkBoard.
- Memperbaiki bug penomoran hasil copy-paste yang sebelumnya membuat setiap bagian terpisah kembali menjadi angka `1`.
- Parser baru menjaga urutan nomor walaupun di antara bagian terdapat bullet list, paragraf kosong, atau blok HTML terpisah dari ChatGPT, Word, email, dan website.
- Perbaikan diterapkan bersama pada Logbook, Notes, dan Notepad karena ketiganya memakai unified rich-text editor.
- Tampilan data lama juga dinormalisasi saat dibuka; data tidak dihapus dan tidak memerlukan SQL.
- Paste plain text dan rich HTML sekarang memakai aturan numbering yang sama.
- Mengganti nama panel awal `Home` menjadi `Capture` pada sidebar desktop, judul panel, judul halaman, dan bottom navigation mobile.
- Menggabungkan tombol Home dan Capture pada mobile menjadi satu tombol `Capture`; bottom navigation kini berisi empat tombol: Capture, Daily, Projects, dan More.
- Mencegah browser atau password manager mengisi alamat email tersimpan ke kolom Quick Capture melalui atribut autofill khusus serta pembersihan nilai pada load, pageshow, dan fokus pertama.
- Placeholder `Dump it here — anything you must not forget...` langsung terlihat setiap WorkBoard dibuka.
- Data `todos`, privasi owner-only, badge, fungsi Quick Capture, dan panel lain tidak diubah.
- Tidak memerlukan SQL atau migrasi database.

### 30 Juli 2026

- Memisahkan bantuan menjadi Smart Focus lokal dan Gemini Writing Assistant.
- Tombol Home `What should I do next?` sekarang memilih satu tugas secara lokal tanpa API, saldo, kuota, atau pengiriman data keluar.
- Smart Focus lokal memberi alasan, langkah terkecil, dan tindakan berikutnya berdasarkan deadline, overdue, Follow Up, Waiting Reply, serta priority.
- Menghapus Puter.js dan fallback saldo agar popup `Low Balance` tidak muncul lagi.
- Mengganti pemrosesan tulisan menjadi Gemini melalui Edge Function `workboard-ai`; API key tetap hanya berada di Supabase secret `GEMINI_API_KEY`.
- Menambahkan Writing Assistant pada Logbook, Notes, dan Notepad dengan tindakan Summarize, Polish Writing, Make Professional, Make Shorter, dan Extract Follow-Ups.
- Menambahkan pilihan Copy dan Replace Original dengan konfirmasi; Extract Follow-Ups tidak dapat menimpa tulisan asli.
- Access code Gemini disimpan hanya pada sesi tab melalui `wb_gemini_access_code`.
- Tidak perlu SQL atau migrasi database.

- Memperbaiki struktur HTML mobile: blok Attendance hingga Work-Break Alarm dikembalikan ke dalam tag `<script>`.
- Mencegah source code JavaScript tampil sebagai teks panjang di bawah Home pada layar HP.
- Navigasi mobile lima tombol, action sheet Daily/More, semua panel, database, dan privasi tidak diubah.
- Tidak perlu SQL atau migrasi database.

- Bottom navigation mobile diringkas menjadi lima tombol tetap: Home, Daily, Projects, Capture, dan More.
- Menu Daily pada mobile membuka action sheet berisi hanya Daily Schedule dan Logbook.
- Menu More pada mobile menampung Follow Up, Notes, To Do, Notepad, Work Talk, Attendance, Reports, Resources, Password Manager, Help, serta menu admin bila user berhak.
- Badge mobile digabung per kelompok agar item penting tetap terlihat tanpa menambah tombol.
- Home menampilkan hanya `One Thing Now`; maksimal dua item `Up Next` tertutup secara default dan dapat dibuka saat user siap.
- Kartu sekunder Home disembunyikan otomatis ketika kosong untuk mengurangi panjang halaman dan beban visual.
- Klik toast Work Talk tetap membuka panel chat setelah tombol chat dipindahkan ke menu More.
- Tidak ada tabel atau kolom baru; tidak perlu SQL atau migrasi database.

### 29 Juli 2026

- Navigasi dirombak menjadi ADHD Edition: Home berdiri sendiri; Daily hanya Daily Schedule dan Logbook; Projects menjadi satu workspace bertab; Tasks berganti menjadi Personal; Quick Links berganti menjadi Resources.
- Projects Workspace menyatukan Tracker, Kanban, Gantt, Matrix, dan Recurring tanpa menghapus panel atau fungsi data lama.
- Brain Dump ditambahkan menggunakan item `[Inbox]` pada tabel `todos`, lengkap dengan draft lokal per user dan tindakan klasifikasi cepat.
- Follow Up Center ditambahkan untuk memisahkan kebutuhan follow-up dan item yang sedang menunggu jawaban.
- Tombol `What should I do next?` ditambahkan pada Home untuk menyorot satu tindakan berikutnya.
- Logbook mendapat Smart Next-Step Suggestion berbasis pemeriksaan lokal untuk menawarkan Follow Up atau Waiting Reply setelah penyimpanan berhasil.
- Bottom navigation mobile dipangkas dan seluruh tampilan proyek diwakili satu tombol Projects.
- Tidak ada tabel atau kolom baru; tidak perlu SQL atau migrasi database.

- Today Focus disederhanakan untuk pola kerja ADHD: satu tugas utama ditampilkan sebagai `One Thing Now`, dua tugas berikutnya ditempatkan di `Up Next`.
- Quick Capture mendapat mode `Today`, `Follow Up`, `Waiting Reply`, dan `Inbox / Later` tanpa form tambahan.
- Tombol `Later 30m` ditambahkan menggunakan penyimpanan lokal per user.
- Sapaan berbasis waktu, penghitung Follow Up/Waiting, dan istilah overview yang lebih netral ditambahkan.
- Tidak ada perubahan database dan tidak perlu SQL baru.

- Draft Protection global ditambahkan untuk Logbook, Notes, To Do, Notepad, dan pesan baru Work Talk.
- Draft dipisahkan per user, panel, serta data baru/edit; draft dipulihkan otomatis dan dihapus setelah Save berhasil atau Discard dikonfirmasi.
- Password Manager dan lampiran file sengaja tidak dimasukkan ke autosave draft.
- Indikator `Saving draft…`, `Draft saved ✓`, dan `Draft restored ✓` ditambahkan.
- Tidak ada perubahan database dan tidak perlu SQL baru.

- Tombol `+ Add` global di top bar dihapus.
- Tombol Add dipindahkan secara lokal ke Daily Schedule, Recurring Task, Logbook, dan Notes.
- FAQ Daily Schedule diperbarui agar tidak lagi menyebut tombol Add di kanan atas.
- All Links mendapatkan fitur Import CSV.
- Import CSV mendukung format `Website Perusahaan.csv`, mencegah duplikat, dan memberi kategori serta ikon otomatis.
- All Links diubah dari daftar satu kolom panjang menjadi kartu grid responsif.
- Kategori All Links dibuat lebih tegas menggunakan warna, ikon, dan penghitung jumlah link.
- Fungsi penyimpanan, edit, hapus, filter, privasi, dan database yang sudah ada dipertahankan.

## CATATAN PERUBAHAN TERBARU — index(61).html

- Brain Dump, Follow Up, dan Waiting Reply disatukan ke satu input pada Home; sidebar desktop dan menu More mobile tidak lagi menampilkan pusat terpisah.
- Tombol `Capture` pada mobile membuka Home dan memfokuskan input terpadu.
- Label `Inbox / Later` diganti menjadi `Brain Dump`; penyimpanan internal `[Inbox]` tetap dipertahankan agar data lama kompatibel.
- Tombol `Open Center` dan `Organize` di kartu Home dihapus karena seluruh alur sekarang selesai dari Home.
- Home diberi kelompok warna pastel kalem seperti Logbook: sage, cream, dusty rose, soft blue, dan lilac.
- Navigasi lama menuju Brain Dump atau Follow Up Center diarahkan kembali ke Home; panel/fungsi internal tidak dihapus.
- Semua data tetap memakai tabel `todos`, private, dan owner-only. Tidak diperlukan SQL atau migrasi database.
