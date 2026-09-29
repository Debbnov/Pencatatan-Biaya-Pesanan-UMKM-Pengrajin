// Konfigurasi Kredensial Supabase
const SUPABASE_URL = 'https://oniperyrweojysxnbmbi.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_r801iO1fmMEMUuNTIMXJOA_MXcAfV2Z';

// Inisialisasi Supabase Client via global window SDK
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);