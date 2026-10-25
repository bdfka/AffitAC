const SUPABASE_URL = 'https://fgvahzrgcviymfouviay.supabase.co';
const SUPABASE_ANON_KEY = 'sb_secret_KTh2g467sWaL5MGQoDDHAw_mdoKixnd';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);