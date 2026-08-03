# PROMPT MASTER — WorkBoard AMS

*Gunakan file ini bersama `index.html` terbaru setiap memulai chat coding.*

**Status sinkronisasi:** 3 Agustus 2026
**Pasangan kode terbaru:** `index(84).html`
**SHA-256 pasangan kode:** `482d91834601a1c42b652bb0ea78cf5ef119ae77f52dad2a2f5fb73bf5f859c5`

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
- [ ] Show/hide admin pada desktop dan mobile
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
5. Admin hanya boleh melihat data tambahan pada panel yang memang dirancang untuk admin.

Prinsip fungsi:

- `applyPrivacy()` digunakan untuk pola data publik + data privat milik user aktif.
- `applyOwner()` digunakan untuk data yang hanya boleh dilihat pemiliknya.
- Panel turunan atau visualisasi harus mengikuti aturan privasi sumber datanya.

Jika belum yakin apakah data harus publik atau privat, jangan menebak. Tanyakan kepada saya.

---

## 7. USER DAN ADMIN

- User aktif disimpan menggunakan `localStorage` key `wb_user`.
- **Switch User** berarti berpindah user tanpa memindahkan data.
- **Change/Rename User** berarti mengganti nama serta memigrasikan keterkaitan data yang memang harus mengikuti nama tersebut.
- Kriteria penentuan admin yang sudah ada di kode tidak boleh ditampilkan di UI, FAQ, tooltip, atau pesan kepada user.
- Menu admin wajib disembunyikan pada sidebar desktop dan bottom navigation mobile untuk user non-admin.
- Jangan mengganti sistem login atau menambahkan Supabase Auth/PIN admin tanpa permintaan eksplisit.

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
- [ ] Pastikan admin visibility masih benar.
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
- Supabase Auth ditunda.
- PIN/password khusus admin tidak diperlukan.
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

Snapshot ini dibuat dari `index(84).html` yang dipasangkan dengan prompt ini.

### 15.1 Arsitektur dan komponen utama

- Aplikasi utama tetap berupa satu file HTML berisi HTML, CSS, dan JavaScript.
- Data utama disimpan di Supabase.
- Aplikasi mendaftarkan `sw.js` untuk PWA dan Work-Break Alarm.
- Identitas user aktif tetap menggunakan `localStorage` key `wb_user`.
- Navigasi desktop menggunakan sidebar bertingkat dengan `Capture` sebagai tombol mandiri dan panel awal.
- Grup `Daily` hanya berisi `Daily Schedule` dan `Logbook`.
- Grup `Projects` membuka satu `Projects Workspace`; Tracker, Kanban, Gantt, Matrix, dan Recurring berpindah melalui tab internal.
- Grup `Personal` hanya berisi Notes, To Do, dan Notepad. Brain Dump, Follow Up, dan Waiting disatukan di Capture.
- Navigasi mobile menggunakan empat tombol inti tetap: `Capture`, `Daily`, `Projects`, dan `More`; tidak ada lagi tombol Home dan Capture yang terpisah.
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

### 15.3 Peta panel dan ketergantungan utama

| Grup | Panel/tampilan | Sumber/ketergantungan utama |
|---|---|---|
| Capture | Capture / One Thing Now | `todos`; owner-only; satu input terpadu untuk Today, Follow Up, Waiting Reply, dan Brain Dump serta kartu ringkas untuk masing-masing hasil |
| Daily | Daily Schedule | `schedule_events`, public + private |
| Daily | Logbook | `logbook_entries`, lampiran Supabase Storage, tautan ke `time_plan_tracker`, dan Smart Next-Step Suggestion |
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
| Reports | Result | Rekap bulanan dari Schedule, tracker lama, Logbook, Notes, To Do, Attendance, dan Leave |
| Resources | All Links | `app_links`; data bersama tim |
| Resources | Password Manager | `vault_keys` dan `password_vault_v2`; private per user dan terenkripsi end-to-end |
| Help | Guide & FAQ | Konten FAQ yang dirender JavaScript |
| Settings | Manage Users | Menu admin |
| Settings | Leave Management | Menu admin |

Catatan ketergantungan:

- Tracker, Kanban, Gantt, Matrix, dan Recurring tetap merupakan panel lama yang dipertahankan; Projects Workspace hanya menyatukan akses dan navigasinya melalui tab.
- `time_plan_tracker` dipakai bersama oleh Tracker, Kanban, Gantt, Decision Matrix, Recurring Task, dan tautan status Logbook.
- `tracker_items` belum boleh dihapus hanya karena form lamanya tidak aktif; Result dan fungsi lain masih mereferensikannya.
- Mode Today, Brain Dump, Follow Up, Waiting Reply, serta To Do memakai tabel `todos` yang sama dan harus tetap owner-only.
- Rename user menyentuh banyak tabel. Jangan mengurangi daftar migrasi nama tanpa audit semua tabel.

### 15.4 Aturan visibilitas tim yang disetujui

- WorkBoard memang digunakan oleh tim.
- Data yang tidak ditandai private memang sengaja dapat dilihat seluruh tim.
- Data private hanya boleh terlihat oleh pembuatnya.
- Notes, To Do, Notepad, dan Password Manager bersifat milik user aktif.
- All Links adalah data bersama tim.
- Visualisasi turunan seperti Kanban, Gantt, Decision Matrix, Result, dan badge harus mengikuti aturan privasi sumber data.
- Jangan mengubah data bersama menjadi owner-only hanya karena aplikasi digunakan banyak orang.

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

### 15.9 Capture dan Quick Capture

- `Capture` menjadi panel awal ketika WorkBoard dibuka pada desktop dan mobile.
- Capture memakai tabel `todos` yang sudah ada; tidak memerlukan tabel atau kolom database baru.
- Data tetap private dan difilter dengan `applyOwner()` untuk user aktif.
- Header menampilkan sapaan sesuai waktu, tombol lokal `What should I do next?`, serta satu tugas utama sebagai `One Thing Now`.
- Quick Capture menerima satu kalimat dan tombol Enter dengan mode `Today`, `Follow Up`, `Waiting Reply`, dan `Brain Dump`.
- Penanda internal `[Today]`, `[Follow Up]`, `[Waiting]`, dan `[Inbox]` disimpan di `todos.text` tetapi disembunyikan dari kartu Capture.
- Maksimal dua tugas lain tersedia sebagai `Up Next`, tetapi dibuat tertutup secara default agar Capture hanya menonjolkan satu pekerjaan utama; urutan mempertimbangkan overdue, deadline hari ini, follow-up, dan priority.
- Setiap kartu menyediakan `Done`, `Later 30m`, `Tomorrow`, dan `Open`.
- `Later 30m` memakai `localStorage` per user dan berlaku pada seluruh kartu tugas di Capture.
- Capture adalah satu-satunya tempat capture cepat untuk Follow Up, Waiting Reply, dan Brain Dump; tidak ada form atau menu sidebar terpisah untuk ketiganya.
- Kartu sekunder Follow Up, Waiting, Added for Today, dan Brain Dump disembunyikan otomatis ketika tidak memiliki isi agar halaman tidak memanjang tanpa manfaat.
- Capture memakai kelompok warna pastel kalem yang mengikuti nuansa Logbook: sage, cream, dusty rose, soft blue, dan lilac; warna tidak boleh terlalu terang.
- Badge Capture pada desktop dan mobile menunjukkan tugas overdue + jatuh tempo hari ini; Follow Up, Waiting, dan Brain Dump tetap terlihat melalui kartu Capture.
- Panel To Do lama, dashboard bulanan, autosave draft, serta struktur tabel `todos` tetap dipertahankan.
- Fitur ini tidak membutuhkan SQL baru.

### 15.10 Projects Workspace

- Sidebar hanya menampilkan satu item `Projects Workspace`.
- Tracker, Kanban, Gantt, Matrix, dan Recurring tetap memakai panel dan fungsi render lama.
- Perpindahan antar-tampilan dilakukan melalui tab sticky di bagian atas area konten.
- Tampilan proyek terakhir disimpan pada `localStorage` key `wb_last_project_view`.
- Top title tetap `Projects` saat berpindah tab.
- Desktop dan mobile memakai satu pintu Projects; mobile tidak lagi memuat lima tombol proyek terpisah.
- Bottom navigation mobile hanya memiliki empat tombol inti. `Daily` membuka action sheet berisi Daily Schedule dan Logbook; `More` membuka action sheet untuk Personal, Work, Resources, Help, dan Settings admin.
- Tombol `Capture` adalah tombol pertama dan membuka panel Capture sambil langsung memfokuskan input terpadu. Panel selain Capture, Daily, dan Projects menandai tombol `More` sebagai aktif.
- Tidak ada tabel, fungsi data, atau panel lama yang dihapus.

### 15.11 Unified Capture dan Smart Next-Step

- Capture memakai satu input untuk empat mode: `Today`, `Follow Up`, `Waiting Reply`, dan `Brain Dump`.
- Brain Dump tetap disimpan sebagai item `[Inbox]`, Follow Up sebagai `[Follow Up]`, dan Waiting Reply sebagai `[Waiting]` pada tabel `todos`; penanda disembunyikan dari kartu Capture.
- Brain Dump dan Follow Up Center tidak ditampilkan lagi sebagai menu desktop, menu mobile, atau form terpisah.
- Panel dan fungsi lama Brain Dump/Follow Up tetap dipertahankan secara internal untuk kompatibilitas data, tetapi navigasi lama diarahkan kembali ke Capture.
- Item eksplisit `[Follow Up]` tidak boleh muncul ganda sebagai Waiting hanya karena kalimatnya mengandung kata “waiting”.
- Setelah Logbook berhasil disimpan, pemeriksaan kata kunci lokal dapat menawarkan `Add Follow Up` atau `Add Waiting Reply` melalui toast non-blocking.
- Smart Next-Step tidak mengirim isi Logbook ke layanan AI eksternal; pemeriksaan dilakukan lokal di browser.
- Semua item baru dari Capture dan saran Logbook bersifat private serta owner-only.
- Tidak diperlukan SQL atau migrasi database.

### 15.12 Smart Focus lokal dan Gemini Writing Assistant

- WorkBoard memakai dua lapisan bantuan yang berbeda dan tidak saling bergantung:
  1. **Smart Focus lokal** untuk memilih pekerjaan berikutnya.
  2. **Gemini Writing Assistant** untuk memproses tulisan yang dipilih user.
- Tombol `What should I do next?` berjalan sepenuhnya di browser menggunakan urutan `focusScore`, deadline, overdue, Follow Up, Waiting Reply, dan priority.
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
- Karena Supabase Auth masih ditunda, access code adalah pengaman tambahan dan bukan pengganti autentikasi per user.



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

## 16. CHECKLIST KHUSUS SEBELUM MENYERAHKAN VERSI BERIKUTNYA

Selain checklist pada Bagian 11, periksa:

- [ ] Tidak ada tombol Add global yang muncul kembali.
- [ ] Empat tombol Add lokal masih membuka form yang benar.
- [ ] All Links masih dapat menambah, mengedit, menghapus, memfilter, dan mengimpor CSV.
- [ ] Pencegahan duplikat CSV masih aktif.
- [ ] Kategori All Links tetap tegas, berwarna, memiliki jumlah link, dan memakai grid responsif.
- [ ] Data publik tetap terlihat oleh tim.
- [ ] Data private milik user lain tetap tersembunyi.
- [ ] Notes, To Do, Notepad, seluruh mode Capture, dan Password Manager tetap owner-only.
- [ ] Daily hanya menampilkan Daily Schedule dan Logbook.
- [ ] Projects Workspace tetap memiliki tab Tracker, Kanban, Gantt, Matrix, dan Recurring pada desktop serta mobile.
- [ ] Seluruh panel proyek lama masih tersedia dan fungsi render lamanya tidak dihapus.
- [ ] Satu input Capture dapat menyimpan Today, Follow Up, Waiting Reply, atau Brain Dump tanpa membuat tabel baru.
- [ ] Follow Up eksplisit tidak tampil ganda sebagai Waiting Reply.
- [ ] Kanban, Gantt, Decision Matrix, Recurring Task, dan Logbook tetap sinkron dengan `time_plan_tracker`.
- [ ] `tracker_items` tidak dihapus tanpa audit Result dan semua referensinya.
- [ ] Menu admin desktop dan mobile tetap tersembunyi untuk non-admin.
- [ ] UI baru menggunakan English.
- [ ] Draft Logbook, Notes, To Do, Notepad, dan Work Talk tetap pulih setelah berpindah panel.
- [ ] Password Manager dan field sensitif tidak masuk ke penyimpanan draft.
- [ ] Prompt Master ikut diperbarui jika kondisi implementasi berubah.
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
