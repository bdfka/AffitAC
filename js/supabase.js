const SUPABASE_URL = 'https://fgvahzrgcviymfouviay.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_PmShxQF3yVxrkZsf8ANBJw_oFbT2wXZ';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
