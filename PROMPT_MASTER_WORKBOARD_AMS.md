# PROMPT MASTER — WorkBoard AMS

*Gunakan file ini bersama `index.html` terbaru setiap memulai chat coding.*

**Status sinkronisasi:** 19 Agustus 2026
**Pasangan kode terbaru:** `index(20260819-v92-MANAGEMENT-REPORT-DEDUP).html`
**SHA-256 pasangan kode:** `ed6966e431d811ebe47af5845b19cc90729fa821b7ab824fa1a10bb5e96d3fff`

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

Snapshot ini dibuat dari `index(20260819-v92-MANAGEMENT-REPORT-DEDUP).html` yang dipasangkan dengan prompt ini.

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
| Management | Management Report | Daily / Weekly / Monthly dari Schedule, Logbook aktual, Waiting/Carry Forward, Attendance, Portfolio/Project; analytics bulanan lama tetap tersedia |
| Resources | All Links | `app_links`; data bersama tim |
| Resources | Password Manager | `vault_keys` dan `password_vault_v2`; private per user dan terenkripsi end-to-end |
| Help | Guide & FAQ | Konten FAQ yang dirender JavaScript |
| Owner Controls | Users & Access | `workboard_profiles`; Owner mengubah role Staff/Management dan Active/Inactive |
| Owner Controls | Leave Management | Owner-only untuk approve/reject/reset/delete leave |

Catatan ketergantungan:

- Portfolio adalah panel baru di Projects Workspace dengan tabel `project_portfolio`; Tracker, Kanban, Gantt, Matrix, dan Recurring tetap merupakan panel lama yang dipertahankan dan tidak diubah sumber datanya.
- `time_plan_tracker` dipakai bersama oleh Tracker, Kanban, Gantt, Decision Matrix, Recurring Task, dan tautan status Logbook.
- `tracker_items` belum boleh dihapus hanya karena form lamanya tidak aktif; Result dan fungsi lain masih mereferensikannya.
- Mode Today, Brain Dump, Follow Up, Waiting Reply, serta To Do memakai tabel `todos` yang sama. Brain Dump/personal data tetap private; work-state Team/Company dapat dibaca Management Report sesuai RLS.
- Rename user menyentuh banyak tabel. Jangan mengurangi daftar migrasi nama tanpa audit semua tabel.

### 15.4 Aturan visibilitas tim yang disetujui

- WorkBoard memang digunakan oleh tim.
- Data yang tidak ditandai private memang sengaja dapat dilihat seluruh tim.
- Data private hanya boleh terlihat oleh pembuatnya.
- Notes, To Do, Notepad, dan Password Manager bersifat milik user aktif.
- All Links adalah data bersama tim.
- Portfolio bersifat Team / Company secara default; entri yang ditandai Private hanya boleh terlihat oleh pembuatnya melalui `applyPrivacy()`.
- Visualisasi turunan seperti Kanban, Gantt, Decision Matrix, Result, dan badge harus mengikuti aturan privasi sumber data.
- Jangan mengubah data bersama menjadi owner-only hanya karena aplikasi digunakan banyak orang.
- RLS aktif mulai v91: request tanpa sesi Auth tidak boleh memperoleh akses tabel WorkBoard yang dimigrasikan.
- Staff tetap dapat melihat data Team / Company sesuai aturan panel sumber, tetapi tidak mendapat menu Management Report.
- Management mendapat Management Report dan data reporting yang memang Team / Company; private personal data user lain tidak dibuka.
- Owner (Ratu) mendapat seluruh kontrol WorkBoard/company yang dirancang untuk Owner, tetapi Password Manager dan data personal private user lain tetap mengikuti policy private masing-masing.

### 15.5 All Links — kondisi terbaru

All Links saat ini memiliki:

- Tambah, edit, dan hapus link manual.
- Filter kategori.
- Import CSV melalui tombol `Import CSV`.
- CSV menerima pemisah koma atau titik koma.
- Header yang dikenali mencakup:
  - `Perusahaan` / `Company` / `Company Name` / `Name` / `Label`
  - `Website Resmi` / `Official Website` / `Website` / `URL` / `Link`
- Import hanya menerima URL `http://` atau `https://`.
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
- Setelah pekerjaan selesai, WorkBoard menawarkan langkah berikutnya: Nothing, Waiting Reply, atau Follow Up Again.
- `Later 30m` hanya menyembunyikan sementara item dari Today pada perangkat/user aktif; data sumber tidak dihapus.
- Reminder legacy yang berasal dari judul Logbook generik seperti `Daily Activity Report` tidak lagi bersaing dengan follow-up nyata di Today; data lama tidak dihapus dan tetap dapat direview melalui To Do.
- Item yang sudah menjadi `One Thing Now` tidak diduplikasi lagi di `Up Next` atau `Follow-ups Due`.
- Planned count membaca seluruh Schedule hari ini, termasuk Schedule yang sudah Done, sehingga angka Planned tidak turun ketika pekerjaan selesai.
- Tidak membutuhkan SQL atau migrasi database baru.

### 15.10 Projects Workspace

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
- `Waiting` menyimpan tanggal review/follow-up dan tidak terus menjadi fokus utama sebelum tanggalnya tiba.
- `Tomorrow` membuat carry-forward tanpa mengetik ulang. Untuk Schedule, marker internal di `todos` dipakai agar tidak membutuhkan kolom database baru.
- `Cancelled` keluar dari daftar aktif dan dicatat sebagai status aktivitas, bukan dianggap pekerjaan selesai normal.
- `Completed Today` membaca Logbook aktual, sehingga pekerjaan planned maupun unplanned tetap terlihat sebagai hasil kerja.
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
- Gambar dapat ditambahkan melalui toolbar, paste screenshot, atau drag-and-drop. File gambar diunggah ke bucket Storage `attachments` pada folder `editor-images/<user>`.
- Gambar dibatasi maksimal 8 MB dan disimpan sebagai URL Storage, bukan data base64 di field database.
- Rich HTML disanitasi sebelum disimpan dan sebelum ditampilkan untuk mengurangi risiko script atau atribut berbahaya.
- Footer editor menampilkan word count dan character count.
- Mode full-screen dapat ditutup menggunakan tombol toolbar atau tombol Escape.
- Draft Protection, ownership/private filter, Gemini Writing Assistant, tabel database, dan struktur penyimpanan lama tetap dipertahankan.
- Fitur ini tidak memerlukan SQL baru. Bucket Storage `attachments` tetap harus tersedia seperti kebutuhan lampiran Logbook yang sudah ada.

### 15.14 Lampiran PowerPoint

- File `.ppt` dan `.pptx` didukung pada lampiran Logbook dan Work Talk.
- File picker harus menampilkan PowerPoint melalui ekstensi file dan MIME type resmi Microsoft PowerPoint.
- Batas ukuran lampiran adalah 20 MB per file.
- Validasi jenis dan ukuran file dilakukan kembali di JavaScript, bukan hanya melalui filter file picker.
- File PowerPoint memakai ikon presentasi dan disimpan di bucket Storage `attachments` seperti lampiran lain.
- PowerPoint dibuka atau diunduh dari tautan lampiran; WorkBoard tidak menjalankan preview slide di dalam aplikasi.
- Perubahan ini tidak memerlukan SQL atau tabel baru.

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
- Dashboard ringkas menampilkan Total Entries, Active Pipeline, Won/Approved, Lost/Closed, dan Follow-ups Due.
- Filter tersedia untuk Type, Outcome, Stage, dan Source.
- Full-text search bebas mencakup customer, PIC/contact, source, partner/vendor, reference, outcome, loss reason, stage, next action/date, notes, semua nilai komersial, pembuat, dan nama lampiran.
- Hasil search memakai mekanisme highlight WorkBoard yang sama; data private user lain tidak boleh masuk hasil.
- Team / Company adalah visibility default. Private mengikuti `applyPrivacy()`.
- Lampiran Portfolio memakai bucket Storage `attachments`, folder `portfolio`, format file dan batas 20 MB yang sama dengan lampiran WorkBoard.
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
- Urutan utama: Planned, Plan Done, Completed, Unplanned, Waiting, Carry Forward, Attendance, Planned Activities, Completed Results, Waiting/Carry Forward, dan Project/Opportunity Status.
- Report hanya memakai data kerja Team / Company yang diizinkan policy; Brain Dump, Notes private, Personal To Do private, Notepad, dan Password Manager tidak masuk report.
- Management Report adalah **reading layer**, bukan raw-table dump. Exact duplicate Schedule/Completed records dikolaps pada tampilan report tanpa menghapus atau mengubah data sumber.
- Jika satu action sudah Done lalu next state-nya Waiting, report menampilkan **satu cerita** di Completed dengan badge `Done → Waiting`, bukan mengulang item yang sama lagi di Waiting.
- Untuk periode yang mencakup hari ini, Waiting membaca **current state** dari To Do/Portfolio/Tracker dan tidak lagi mencampur history waiting Logbook. Untuk periode lampau, history waiting Logbook tetap dapat dipakai sebagai jejak periode tersebut.
- Portfolio berstatus Waiting ditampilkan sebagai attention item dan tidak diulang lagi di `Project / Opportunity Status`; bagian Project Status hanya menampilkan opportunity aktif non-waiting.
- Planned yang judulnya sama tetap boleh tampil lebih dari sekali jika waktu/lokasi berbeda; hanya record Schedule yang benar-benar identik yang dikolaps.
- Monthly Analytics & Attendance lama tetap tersedia dalam bagian expandable supaya layar utama lebih mudah dibaca.
- Desktop memakai tombol utama `Management Report`; mobile memakai tombol `Report` yang hanya terlihat untuk Owner/Management.

### 15.18 Authentication, Roles, dan Users & Access — v91

- Supabase Auth menggantikan login nama bebas. App tetap tersembunyi sampai sesi Auth dan profile WorkBoard valid.
- Metode: Email + Password, email verification sesuai setting Supabase, Forgot Password, serta Google OAuth setelah provider Google dan redirect URL dikonfigurasi.
- Registrasi meminta Full Name dan role `Staff` / `Management`. `Owner` tidak pernah dapat dipilih oleh user baru.
- Owner tunggal adalah Ratu. Pada bootstrap awal, Full Name `Ratu` dapat menjadi Owner jika belum ada Owner; policy/database mencegah Owner kedua.
- Tabel baru `workboard_profiles` menyimpan `auth.users.id`, full name, email, role, active state, dan onboarding state.
- Authorization tidak bergantung pada `raw_user_meta_data`; role efektif dibaca dari `workboard_profiles`.
- `Users & Access` hanya Owner dan tersedia di desktop serta mobile. Owner dapat mengubah Staff ↔ Management dan Active ↔ Inactive; Owner sendiri terkunci.
- Akun inactive tidak dapat memakai WorkBoard; RLS juga menolak akses data walau sesi lama masih tersimpan.
- `Switch User` lama menjadi Sign Out. Rename profile dari UI dinonaktifkan karena data legacy masih memakai nama pada `created_by` / `user_name`.
- RLS diaktifkan pada tabel WorkBoard yang dimigrasikan. Anon tidak diberi akses tabel tersebut; role `authenticated` mendapat hak yang dibatasi policy.
- Data Team / Company tetap dapat dibaca sesuai aturan lama; private personal tetap hanya pemilik. Management dapat membaca data reporting; Owner mendapat kontrol company yang diperlukan.
- Password Vault E2EE tetap owner-of-vault only dan tidak pernah dibuka ke Management/Owner lain.
- Work Talk DM tetap hanya participant; hide/unhide room tetap dipertahankan melalui izin update terbatas pada `hidden_by`.
- Storage bucket `attachments` tidak diubah mode privacy pada migrasi v91 agar URL lampiran historis tidak rusak; hardening Storage dapat dilakukan sebagai migrasi terpisah jika direncanakan.
- Migrasi dijalankan bertahap: `WORKBOARD_AUTH_V91_STEP1_SETUP.sql` membuat Auth/profile tanpa memutus akses versi lama; setelah index v91 dan akun Ratu/Owner teruji, `WORKBOARD_AUTH_V91_STEP3_RLS.sql` mencabut anon dan mengaktifkan policy final. Google provider/redirect dikonfigurasi terpisah di Supabase.

## 16. CHECKLIST KHUSUS SEBELUM MENYERAHKAN VERSI BERIKUTNYA

Selain checklist pada Bagian 11, periksa:

- [ ] Today menjadi panel awal pada desktop dan mobile.
- [ ] One Thing Now hanya menampilkan satu item utama dan tidak dibanjiri Schedule legacy lama.
- [ ] Quick Capture dapat menyimpan Today, Follow Up, Waiting Reply, Project, Brain Dump, dan Done Now.
- [ ] Aksi Done dari Today membuat Logbook otomatis tanpa input ulang.
- [ ] Waiting dan Tomorrow tetap muncul kembali saat waktunya tiba.
- [ ] Schedule tetap dapat Add/Edit/Delete dan aksi Done/Waiting/Tomorrow tidak menghapus data rencana.
- [ ] Portfolio default Needs Action, sementara Waiting/Upcoming/All tetap dapat dibuka.
- [ ] Kartu dan form Portfolio menyembunyikan detail sekunder sampai More Details dibuka.
- [ ] Attendance ringkas tampil di Today dan Clock In/Out tetap meminta selfie/GPS lewat alur Attendance.
- [ ] Work Alarm tidak mereset fase hanya karena refresh dan statusnya tampil di Today.
- [ ] Result bagian atas membedakan Planned, Completed, Unplanned, Waiting, dan Carry Forward.
- [ ] Tidak ada array/function bulk import kredensial plaintext di source.
- [ ] Tidak ada tombol Add global yang muncul kembali.
- [ ] Empat tombol Add lokal masih membuka form yang benar.
- [ ] All Links masih dapat menambah, mengedit, menghapus, memfilter, dan mengimpor CSV.
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
- [ ] `tracker_items` tidak dihapus tanpa audit Result dan semua referensinya.
- [ ] `Users & Access` / Owner Controls hanya terlihat untuk Owner pada desktop dan mobile; `Management Report` hanya Owner/Management.
- [ ] UI baru menggunakan English.
- [ ] Draft Logbook, Notes, To Do, Notepad, dan Work Talk tetap pulih setelah berpindah panel.
- [ ] Password Manager dan field sensitif tidak masuk ke penyimpanan draft.
- [ ] Prompt Master ikut diperbarui jika kondisi implementasi berubah.
- [ ] Login nama bebas tidak muncul kembali; app hanya terbuka setelah Supabase Auth + profile valid.
- [ ] Register hanya menyediakan Staff / Management; Owner tidak tersedia sebagai pilihan.
- [ ] Ratu/Owner masuk ke Today dan memiliki Users & Access; Management masuk ke Management Report; Staff masuk ke Today.
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
- [ ] Paste gambar dan upload gambar tetap menuju Supabase Storage, bukan disimpan sebagai base64 di database.
- [ ] Lampiran `.ppt` dan `.pptx` tetap terlihat di file picker Logbook dan Work Talk, maksimal 20 MB per file.
- [ ] Rich HTML tetap disanitasi tanpa menghapus isi tulisan user yang valid.
- [ ] Numbering hasil paste tidak kembali ke angka 1 setelah bullet, paragraf kosong, atau blok daftar terpisah.
- [ ] Search bebas pada setiap panel menemukan kata dari isi penuh, rich text, tag, tanggal, status, dan nama lampiran tanpa membuka data privat user lain.
- [ ] Kata yang cocok pada hasil search ditampilkan bold dengan highlight lembut, lalu kembali normal saat search dibersihkan.
- [ ] Puter.js tidak dimuat dan tidak dapat memunculkan popup saldo.

---

## 17. CATATAN PERUBAHAN TERBARU

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
