// ============================================
// js/supabase.js — Konfigurasi Supabase
// WorkBoard AMS - Andrika Mitra Solusi
// ============================================

const SUPABASE_URL = 'https://xcmpsmydlgtvegqtokez.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_OKoAvU3BeWDoPmRGPhEylA_VWaxcyJW';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper: format tanggal ke YYYY-MM-DD
function todayStr() {
  return new Date().toISOString().split('T')[0];
}

// Helper: format waktu HH:MM
function nowTime() {
  const d = new Date();
  return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
}

// Helper: nama pengguna dari localStorage
function getUser() {
  return localStorage.getItem('wb_user') || 'Pengguna';
}
