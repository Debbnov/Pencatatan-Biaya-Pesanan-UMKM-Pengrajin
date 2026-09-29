const SUPABASE_URL = 'https://oniperyrweojysxnbmbi.supabase.co';
/* Gunakan Key publik Supabase yang ada di dasbor Supabase kamu */
const SUPABASE_ANON_KEY = 'sb_publishable_r801iO1fmMEMUuNTIMXJOA_MXcAfV2Z'; 

/* Membuat instance client Supabase global */
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
